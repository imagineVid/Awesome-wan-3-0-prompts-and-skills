/**
 * [INPUT]: 依赖 prompt-quality 的 Wan 3.0 Video 评分、硬门槛与去重接口
 * [OUTPUT]: 验证视频模型证据、可复用导演信息、归属和批次去重行为
 * [POS]: scripts/utils 的 X 候选质量回归套件，阻止其他视频模型和纯营销帖混入
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
  findCandidateDuplicates,
  rememberCandidate,
  scoreStoredTwitterPrompt,
  scoreTwitterCandidate,
  type CandidateDuplicateState,
} from "./prompt-quality.js";

test("accepts a fully attributed Wan 3.0 video record", () => {
  const result = scoreStoredTwitterPrompt({
    content:
      "Slow dolly toward the performer as she delivers one quiet line. Keep her face stable, place rain ambience behind the dialogue, and time a distant thunder hit to the final glance.",
    sourceLink: "https://x.com/creator/status/1234567890",
    sourceMedia: ["https://video.twimg.com/ext_tw_video/example/pu/vid/avc1/720x1280/result.mp4"],
    author: { name: "@creator", link: "https://x.com/creator" },
    sourceMeta: {
      prompt_source: "tweet_text_prompt",
      model_evidence: "wan-3.0",
    },
    videoCategories: { workflows: [{ slug: "dialogue-performance-native-audio" }] },
  });

  assert.equal(result.decision, "accept");
});

test("accepts a detailed Wan 3.0 candidate with video evidence", () => {
  const result = scoreTwitterCandidate({
    id: "video-case",
    text:
      "Wan 3.0\nVideo prompt: A courier runs through a rain-soaked alley. Camera: low tracking shot, then a sharp orbit at the corner. Audio: footsteps, rain, one passing train. Preserve the red jacket and facial identity.",
    extendedEntities: {
      media: [{ media_url_https: "https://video.twimg.com/example.mp4" }],
    },
    author: { userName: "director" },
    likeCount: 8,
    bookmarkCount: 3,
    viewCount: 900,
  });

  assert.equal(result.decision, "accept");
});

test("rejects another video model even when engagement is high", () => {
  const result = scoreTwitterCandidate({
    id: "other-model",
    text:
      "Veo 3.1\nVideo prompt: A long cinematic camera move through a crowded night market with synchronized dialogue and realistic ambience.",
    extendedEntities: { media: [{ media_url_https: "https://video.twimg.com/other.mp4" }] },
    author: { userName: "creator" },
    likeCount: 500,
    bookmarkCount: 100,
    viewCount: 100000,
  });

  assert.equal(result.decision, "reject");
  assert.ok(result.reasons.some((reason) => reason.includes("different video model")));
});

test("rejects a launch announcement without a reusable shot brief", () => {
  const result = scoreTwitterCandidate({
    id: "announcement",
    text: "Wan 3.0 is now available. Try it today!",
    extendedEntities: { media: [{ media_url_https: "https://video.twimg.com/launch.mp4" }] },
    author: { userName: "vendor" },
  });
  assert.equal(result.decision, "reject");
});

test("detects repeated prompt text and media within one discovery batch", () => {
  const state: CandidateDuplicateState = {
    tweetIds: new Set(),
    mediaUrls: new Set(),
    textFingerprints: new Set(),
  };
  const first = {
    id: "first",
    text: "Wan 3.0\nVideo prompt: Slow orbit around a chrome product on black glass.",
    extendedEntities: { media: [{ media_url_https: "https://video.twimg.com/shared.mp4?tag=1" }] },
  };
  const duplicate = {
    id: "second",
    text: "Wan 3.0\nVideo prompt: Slow orbit around a chrome product on black glass.",
    extendedEntities: { media: [{ media_url_https: "https://video.twimg.com/shared.mp4" }] },
  };

  rememberCandidate(first, state);
  const reasons = findCandidateDuplicates(duplicate, state);
  assert.ok(reasons.some((reason) => reason.includes("prompt text")));
  assert.ok(reasons.some((reason) => reason.includes("media URL")));
});
