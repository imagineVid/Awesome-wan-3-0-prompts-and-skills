# Local Development

## Requirements

- Node.js 24
- pnpm 9

## Commands

```bash
pnpm install
pnpm run validate
pnpm test
pnpm run typecheck
pnpm run generate
```

`validate` checks local schema, Wan 3.0 model evidence, category assignment, attribution, source URLs, localized coverage, and duplicate fingerprints. `audit:duplicates` additionally downloads referenced media and compares visual hashes.

## Data Flow

1. Place reviewed records in `data/prompts.json`.
2. Keep first-party capability cases separate in `data/official-cases.json`.
3. Keep raw discovery exports in ignored `data/research/`; never publish them as data.
4. Run `pnpm run generate`; README files are generated artifacts.
5. Commit source data, generator changes, and regenerated output together.

Never commit API keys, cookies, proxy configuration, or bulk search caches. The public data stores source links and selected media URLs only.

## Approved Issue Sync

The GitHub workflow passes issue fields to the local sync script. For a local dry run, provide `ISSUE_NUMBER`, `ISSUE_BODY`, and `GITHUB_REPOSITORY=imagineVid/Awesome-wan-3-0-prompts-and-skills` without storing a real token in the repository.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
