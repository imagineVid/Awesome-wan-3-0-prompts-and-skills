# Localization Quality Report

## Scope

- Source language: English (`README.md` and English JSON fields)
- Published locales: `es`, `pt`, `it`, `de`, `fr`, `ar`, `ja`, `ko`, `zh`, `nl`, `ru`, `tr`, `pl`
- Coverage per locale: 86 interface fields, 7 category titles, 6 workflow descriptions, and 7 complete prompt records
- Product links: the current site has no dedicated Wan 3.0 route, so English uses `/text-to-video` and translated pages use the corresponding locale route.

## Translation Trace

- Source packet: the rewritten English data in `data/prompts.json` and the locale-specific overlays.
- Review method: locale-isolated translation followed by structural and terminology review.
- External translation API: disabled for the committed repository.
- Human review owner: main repository agent.

## Quality Gates

- Every locale preserves the English object's keys and required values.
- Every prompt translation includes title, description, and full prompt content.
- Localized prompt pages display the reviewed translation and retain the creator's English source prompt in a collapsible block.
- Model IDs, URLs, timecodes, aspect ratios, creator names, and reference labels remain intact.
- Exact English prompt fallbacks, empty values, duplicate prompt IDs, duplicate sources, and duplicate media are rejected by validation.
- Reconstructed prompts remain labeled in every language; translation must not turn an editorial reconstruction into a verbatim claim.

## Status

| Locale | Status | Review focus |
|---|---|---|
| es | pass | Spain usage and complete action instructions |
| pt | pass | Portugal usage and no Spanish leakage |
| it | pass | Natural creator and camera terminology |
| de | pass | Complete directing and audio constraints |
| fr | pass | Natural production language |
| ar | pass | Modern Standard Arabic and valid JSON |
| ja | pass | Natural directing terminology and source fidelity |
| ko | pass | Complete prompts without summarization |
| zh | pass | Simplified Chinese and complete source coverage |
| nl | pass | Native workflow terminology |
| ru | pass | Script and source-content consistency |
| tr | pass | Natural production terminology |
| pl | pass | Native workflow terminology |

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
