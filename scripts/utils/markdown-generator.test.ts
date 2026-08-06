/**
 * [INPUT]: 依赖 markdown-generator 的十四语言发布接口与 Wan 3.0 Video 数据契约
 * [OUTPUT]: 验证多语言首屏、官方事实、产品链接、可点击视频案例、编辑前后帧和分类行为
 * [POS]: scripts/utils 的 README 发布回归套件，阻止旧模型文案与视频证据展示回归
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
  SUPPORTED_LANGUAGES,
  generateAnimationPreview,
  generateMarkdown,
  generateMediaTable,
  getWanProductUrl,
  groupPromptsByWorkflow,
} from "./markdown-generator.js";
import type { FilterCategory, Prompt } from "./prompt-repository.js";

const categories: FilterCategory[] = [
  { id: 4, title: "Video Workflow Groups", slug: "video-workflow-groups", sort: 0 },
  {
    id: 61,
    title: "Camera Direction & Shot Design",
    slug: "camera-direction-shot-design",
    parentId: 4,
    parentSlug: "video-workflow-groups",
    featured: true,
    sort: 61,
  },
];

function prompt(overrides: Partial<Prompt> = {}): Prompt {
  return {
    id: 1,
    model: "wan-3.0",
    title: "Ember-lit battlefield push-in",
    description: "A controlled image-to-video camera move with synchronized ambience.",
    content:
      "Slow cinematic push-in as embers cross the frame. Preserve the helmet silhouette and add distant battlefield ambience.",
    sourceLink: "https://x.com/creator/status/1234567890",
    sourcePublishedAt: "2026-07-01T00:00:00.000Z",
    sourceMedia: ["https://example.com/preview.jpg"],
    video: { url: "https://example.com/result.mp4", thumbnail: "https://example.com/preview.jpg" },
    author: { name: "@creator", link: "https://x.com/creator" },
    language: "en",
    videoCategories: {
      workflows: [
        {
          id: 61,
          title: "Camera Direction & Shot Design",
          slug: "camera-direction-shot-design",
          featured: true,
          sort: 61,
        },
      ],
    },
    ...overrides,
  };
}

test("publishes the fourteen ImagineVid-supported language surfaces", () => {
  assert.deepEqual(SUPPORTED_LANGUAGES, [
    { code: "en", name: "English", readmeFileName: "README.md" },
    { code: "es", name: "Español", readmeFileName: "README.es.md" },
    { code: "pt", name: "Português", readmeFileName: "README.pt.md" },
    { code: "it", name: "Italiano", readmeFileName: "README.it.md" },
    { code: "de", name: "Deutsch", readmeFileName: "README.de.md" },
    { code: "fr", name: "Français", readmeFileName: "README.fr.md" },
    { code: "ar", name: "العربية", readmeFileName: "README.ar.md" },
    { code: "ja", name: "日本語", readmeFileName: "README.ja.md" },
    { code: "ko", name: "한국어", readmeFileName: "README.ko.md" },
    { code: "zh", name: "中文", readmeFileName: "README.zh.md" },
    { code: "nl", name: "Nederlands", readmeFileName: "README.nl.md" },
    { code: "ru", name: "Русский", readmeFileName: "README.ru.md" },
    { code: "tr", name: "Türkçe", readmeFileName: "README.tr.md" },
    { code: "pl", name: "Polski", readmeFileName: "README.pl.md" },
  ]);
});

test("renders a Wan 3.0 Video empty-state README without inherited model copy", () => {
  const markdown = generateMarkdown(
    { all: [], featured: [], regular: [], stats: { total: 0, featured: 0 }, categories },
    0
  );

  assert.match(markdown, /Awesome Wan 3\.0 Video Prompts & Skills/);
  assert.match(markdown, /Wan 3\.0/);
  assert.match(markdown, /imaginevid\.io\/text-to-video/);
  assert.doesNotMatch(markdown, /Nano Banana|Gemini 2\.5 Flash Image|Raycast/i);
});

test("uses the verified ImagineVid product route", () => {
  assert.equal(getWanProductUrl(), "https://imaginevid.io/text-to-video");
  assert.equal(getWanProductUrl("ja"), "https://imaginevid.io/ja/text-to-video");
});

test("groups a video prompt by its single production workflow", () => {
  const groups = groupPromptsByWorkflow([prompt()], categories);
  assert.equal(groups.length, 1);
  assert.equal(groups[0].category.slug, "camera-direction-shot-design");
  assert.equal(groups[0].prompts[0].id, 1);
});

test("renders parallel preview media without dropping a clip thumbnail", () => {
  const markdown = generateMediaTable(
    ["https://example.com/a.jpg", "https://example.com/b.jpg"],
    "Directed shot"
  );
  assert.match(markdown, /a\.jpg/);
  assert.match(markdown, /b\.jpg/);
  assert.match(markdown, /<table>/);
});

test("renders a video case as a clickable preview with an explicit playback link", () => {
  const markdown = generateAnimationPreview(
    "https://example.com/preview.gif",
    "Animated shot",
    "https://example.com/result.mp4"
  );
  assert.match(markdown, /preview\.gif/);
  assert.match(markdown, /Click the preview to open the video/);
  assert.match(markdown, /Watch video/);
  assert.equal((markdown.match(/https:\/\/example\.com\/result\.mp4/g) || []).length, 2);
  assert.doesNotMatch(markdown, /<video/);
});

test("shows source and result frames for a video editing case", () => {
  const editingPrompt = prompt({
    sourceMedia: [
      "https://example.com/source-frame.jpg",
      "https://example.com/result-frame.jpg",
    ],
    video: {
      url: "https://example.com/edited-result.mp4",
      thumbnail: "https://example.com/result-frame.jpg",
    },
  });
  const markdown = generateMarkdown(
    {
      all: [editingPrompt],
      featured: [],
      regular: [editingPrompt],
      stats: { total: 1, featured: 0 },
      categories,
    },
    1
  );

  assert.match(markdown, /Source and result frames/);
  assert.match(markdown, /source-frame\.jpg/);
  assert.match(markdown, /result-frame\.jpg/);
  assert.match(markdown, /#### Video/);
  assert.match(markdown, /Watch video/);
  assert.match(markdown, /edited-result\.mp4/);
});

test("keeps the English source prompt below a reviewed localization", () => {
  const localizedPrompt = prompt({
    title: "Acercamiento cinematográfico",
    description: "Un movimiento de cámara controlado.",
    translatedContent: "Acercamiento lento mientras las brasas cruzan el encuadre.",
  });
  const markdown = generateMarkdown(
    {
      all: [localizedPrompt],
      featured: [],
      regular: [localizedPrompt],
      stats: { total: 1, featured: 0 },
      categories,
    },
    1,
    "es"
  );

  assert.match(markdown, /Prompt localizado/);
  assert.match(markdown, /Prompt original/);
  assert.match(markdown, /Acercamiento lento/);
  assert.match(markdown, /Slow cinematic push-in/);
  assert.match(markdown, /### Video/);
  assert.match(markdown, /Ver video/);
  assert.match(markdown, /imaginevid\.io\/es\/text-to-video/);
});
