/**
 * [INPUT]: 依赖 GitHub Issue 环境变量、Octokit 与本地提示词数据契约
 * [OUTPUT]: 对外提供将 approved Issue 归一化写入 data/prompts.json 的命令
 * [POS]: scripts 的社区投稿同步边界，连接 GitHub 审核状态与本地发布数据
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Octokit } from "@octokit/rest";
import type { Prompt } from "./utils/prompt-repository.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const PROMPTS_PATH = path.join(ROOT_DIR, "data/prompts.json");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

interface IssueFields {
  prompt_title?: string;
  prompt?: string;
  description?: string;
  model_version?: string;
  input_mode?: string;
  primary_workflow?: string;
  playable_video_url?: string;
  preview_image_or_gif_url?: string;
  author_name?: string;
  author_link?: string;
  source_link?: string;
  source_published_date?: string;
  prompt_provenance?: string;
}

const FIELD_NAME_MAP: Record<string, keyof IssueFields> = {
  workflow: "primary_workflow",
  video_url: "playable_video_url",
  preview_url: "preview_image_or_gif_url",
};

const WORKFLOW_BY_TITLE: Record<string, { id: number; title: string; slug: string }> = {
  "Camera Direction & Shot Design": { id: 61, title: "Camera Direction & Shot Design", slug: "camera-direction-shot-design" },
  "Dialogue, Performance & Native Audio": { id: 62, title: "Dialogue, Performance & Native Audio", slug: "dialogue-performance-native-audio" },
  "Product Motion & Commercial Spots": { id: 63, title: "Product Motion & Commercial Spots", slug: "product-motion-commercial-spots" },
  "Image-to-Video & Subject Continuity": { id: 64, title: "Image-to-Video & Subject Continuity", slug: "image-to-video-subject-continuity" },
  "Stylized Motion & Visual Effects": { id: 65, title: "Stylized Motion & Visual Effects", slug: "stylized-motion-visual-effects" },
  "Video Editing, Restyling & Scene Control": { id: 66, title: "Video Editing, Restyling & Scene Control", slug: "video-editing-restyling-scene-control" },
};

function promptSource(provenance = ""): string {
  if (provenance.startsWith("Verbatim")) return "tweet_text_prompt";
  if (provenance.startsWith("Completed")) return "thread_reply_prompt";
  return "rewritten_from_source";
}

function cleanFieldValue(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed === "_No response_") {
    return undefined;
  }
  return trimmed;
}

function cleanPrompt(value = ""): string {
  return value
    .replace(/^```(?:text)?\s*\n?/i, "")
    .replace(/\n?```\s*$/i, "")
    .trim();
}

async function parseIssue(issueBody: string): Promise<IssueFields> {
  const fields: Record<string, string> = {};
  const lines = issueBody.split("\n");
  let currentField: string | null = null;
  let currentValue: string[] = [];

  for (const line of lines) {
    if (line.startsWith("### ")) {
      if (currentField) {
        fields[currentField] = currentValue.join("\n").trim();
      }
      currentField = line.replace("### ", "").toLowerCase().replace(/\s+/g, "_");
      currentValue = [];
    } else if (currentField) {
      currentValue.push(line);
    }
  }

  if (currentField) {
    fields[currentField] = currentValue.join("\n").trim();
  }

  const mappedFields: IssueFields = {};
  for (const [key, value] of Object.entries(fields)) {
    const mappedKey = FIELD_NAME_MAP[key] || key;
    mappedFields[mappedKey as keyof IssueFields] = cleanFieldValue(value);
  }

  return mappedFields;
}

function readPrompts(): Prompt[] {
  return JSON.parse(fs.readFileSync(PROMPTS_PATH, "utf-8")) as Prompt[];
}

function writePrompts(prompts: Prompt[]): void {
  fs.writeFileSync(PROMPTS_PATH, `${JSON.stringify(prompts, null, 2)}\n`, "utf-8");
}

async function main() {
  const issueNumber = process.env.ISSUE_NUMBER;
  const issueBody = process.env.ISSUE_BODY || "";
  const repository = process.env.GITHUB_REPOSITORY || "";
  const [owner, repo] = repository.split("/");

  if (!issueNumber) {
    throw new Error("ISSUE_NUMBER not provided");
  }
  if (!owner || !repo) {
    throw new Error("GITHUB_REPOSITORY must be set to owner/repo");
  }

  const issue = await octokit.issues.get({
    owner,
    repo,
    issue_number: Number(issueNumber),
  });

  const hasPromptSubmissionLabel = issue.data.labels.some((label) => {
    const labelName = typeof label === "string" ? label : label.name;
    return labelName === "prompt-submission";
  });

  if (!hasPromptSubmissionLabel) {
    console.log('Skipping: issue does not have "prompt-submission" label');
    return;
  }

  const fields = await parseIssue(issueBody);
  const videoUrl = fields.playable_video_url || "";
  const previewUrl = fields.preview_image_or_gif_url || "";
  const workflow = WORKFLOW_BY_TITLE[fields.primary_workflow || ""];
  if (!workflow) throw new Error("Approved issue is missing a recognized primary workflow");
  const modelVersion = fields.model_version || "";
  if (!["wan-3.0", "wan-video-3.0"].includes(modelVersion)) {
    throw new Error("Approved issue must contain explicit Wan 3.0 model evidence");
  }

  const prompts = readPrompts();
  const existingIndex = prompts.findIndex(
    (prompt) => prompt.sourceMeta?.github_issue === issueNumber
  );
  const nextId = Math.max(0, ...prompts.map((prompt) => prompt.id)) + 1;

  const promptData: Prompt = {
    id: existingIndex >= 0 ? prompts[existingIndex].id : nextId,
    model: modelVersion,
    title: fields.prompt_title || issue.data.title.replace(/^\[Prompt\]\s*/i, ""),
    content: cleanPrompt(fields.prompt),
    description: fields.description || "",
    sourceMedia: [previewUrl || videoUrl],
    video: {
      url: videoUrl,
      ...(previewUrl ? { thumbnail: previewUrl } : {}),
    },
    ...(previewUrl ? { animationPreview: previewUrl } : {}),
    author: {
      name: fields.author_name || "Community contributor",
      ...(fields.author_link ? { link: fields.author_link } : {}),
    },
    language: "en",
    sourcePublishedAt: fields.source_published_date
      ? new Date(`${fields.source_published_date}T00:00:00.000Z`).toISOString()
      : issue.data.created_at,
    sourceLink: fields.source_link || issue.data.html_url,
    featured: false,
    needReferenceImages: fields.input_mode === "Image to video",
    videoCategories: { workflows: [workflow] },
    sourceMeta: {
      github_issue: issueNumber,
      source: "github-issue",
      prompt_source: promptSource(fields.prompt_provenance),
      model_evidence: fields.model_version,
      input_mode: fields.input_mode,
    },
  };

  if (existingIndex >= 0) {
    prompts[existingIndex] = promptData;
  } else {
    prompts.push(promptData);
  }

  writePrompts(prompts);

  if (issue.data.state === "open") {
    await octokit.issues.update({
      owner,
      repo,
      issue_number: Number(issueNumber),
      state: "closed",
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
