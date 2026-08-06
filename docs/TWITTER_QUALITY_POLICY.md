# X Discovery and Video Evidence Policy

X is a discovery surface, not a database import. Searches often return reposts, model comparisons, silent image outputs, incomplete prompts, or clips whose generator cannot be verified. Candidates remain private until they pass every gate below.

## Search Matrix

Rotate queries across model and workflow intent:

- `"Wan 3.0" prompt video`
- `Wan3.0 prompt`
- `"Wan 3.0" camera movement`
- `"Wan 3.0" native audio`
- `"Wan 3.0" image to video`
- `"Wan 3.0" 30 seconds`
- `Wan 3 filter:videos`

Search replies and quoted posts when the visible post says the prompt is in a thread. Keep the canonical creator post rather than an aggregator repost. When a comparison post identifies which attached result belongs to Wan 3.0, retain that mapping in the curation note.

## Hard Gates

Reject a candidate unless it has:

- explicit Wan 3.0 video model evidence;
- a canonical X status URL and attributable creator;
- reusable prompt text or a clearly labeled source-backed reconstruction;
- playable video, an honest preview, or a source post that proves the motion result;
- enough instruction detail to understand action, camera, timing, audio, or editing intent;
- one primary workflow category;
- no duplicate source, normalized prompt, media URL, or perceptually matching preview.

## Quality Signals

Prefer cases that reveal a production pattern: synchronized dialogue, believable object weight, stable image-to-video identity, deliberate camera movement, commercial timing, controlled restyling, or a clearly scoped video edit. Penalize launch announcements, engagement bait, prompt fragments, unrelated image generation, and clips that hide the model behind a generic showcase.

Do not promote community observations into unsupported model specifications. Early-access language, resolution, duration, audio, or input claims remain attached to the post that states them.

## Publication Record

The public record must retain source URL, source publication date, creator, prompt provenance, model evidence, media URLs, workflow, and curation notes. Any editorial completion must be described in `sourceMeta.prompt_source`; never present a reconstruction as verbatim creator text.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
