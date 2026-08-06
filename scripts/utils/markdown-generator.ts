/**
 * [INPUT]: 依赖 prompt-repository 的视频提示词契约、十四语言 i18n 文案与 workflow-copy 分类说明
 * [OUTPUT]: 对外提供多语言 README、可点击视频案例、媒体表格、模型介绍、分类分组和 CTA 的 Markdown 生成能力
 * [POS]: scripts/utils 的核心展示层，把 Wan 3.0 Video 结构化数据渲染为 GitHub 原生页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import { Prompt, FilterCategory, OfficialCaseGroup, OfficialCase } from "./prompt-repository.js";
import { t } from "./i18n.js";
import { workflowDescription } from "./workflow-copy.js";

interface SortedPrompts {
  all: Prompt[];
  featured: Prompt[];
  regular: Prompt[];
  stats: {
    total: number;
    featured: number;
  };
  categories?: FilterCategory[];
  officialCases?: OfficialCaseGroup[];
}

export interface WorkflowPromptGroup {
  category: FilterCategory;
  prompts: Prompt[];
}

export interface LanguageConfig {
  code: string;
  name: string;
  readmeFileName: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
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
];

const MAX_REGULAR_PROMPTS_TO_DISPLAY = 120;
const REPO = "imagineVid/Awesome-wan-3-0-prompts-and-skills";
const REPO_URL = `https://github.com/${REPO}`;
const WAN_PRODUCT_URL = "https://imaginevid.io/text-to-video";

export function getWanProductUrl(locale = "en"): string {
  return locale === "en"
    ? WAN_PRODUCT_URL
    : `https://imaginevid.io/${locale}/text-to-video`;
}

export function getPromptCtaLabel(locale: string): string {
  return locale === "en" ? "Use this prompt on ImagineVid" : `${t("tryItNow", locale)} · ImagineVid`;
}

function cleanPromptContent(content: string): string {
  if (!content) return content;
  return content
    .replace(/^```[\w-]*\s*\n?/im, "")
    .replace(/\n?```\s*$/im, "")
    .replace(/\n```[\w-]*\s*\n/g, "\n")
    .trim();
}

export function generateMarkdown(data: SortedPrompts, total: number, locale = "en"): string {
  const { featured, regular, stats, categories } = data;
  const displayedRegular = regular.slice(0, MAX_REGULAR_PROMPTS_TO_DISPLAY);
  const hiddenCount = total - displayedRegular.length - featured.length;
  const officialCases = data.officialCases || [];

  let md = generateHeader(locale);
  md += generateLanguageNavigation(locale);
  md += generateCollectionCTA(categories || [], locale);
  md += generateTOC(locale, {
    hasOfficialCases: officialCases.length > 0,
    hasFeatured: featured.length > 0,
    hasCommunityPrompts: featured.length + displayedRegular.length + hiddenCount > 0,
  });
  md += generateModelIntroduction(locale);
  md += generateOfficialCasesSection(officialCases);
  md += generateStats(stats, locale);
  md += generateFeaturedSection(featured, locale);
  md += generateAllPromptsSection(
    [...featured, ...displayedRegular],
    Math.max(0, hiddenCount),
    categories || [],
    locale
  );
  md += generateContribute(locale);
  md += generateFooter(locale, data.all);

  return md;
}

function generateHeader(locale: string): string {
  const coverImage = "public/images/wan-3-0-prompt-skills-cover.png";

  return `<a href="${REPO_URL}">
  <img src="${coverImage}" alt="Wan 3.0 Video Prompt Skills" width="100%" />
</a>

> ${t("relatedPromo", locale)}
# ${t("title", locale)}

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/${REPO}?style=social)](${REPO_URL})
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/${REPO}/actions/workflows/update-readme.yml/badge.svg)](https://github.com/${REPO}/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> ${t("subtitle", locale)}

> ${t("copyright", locale)}

---

`;
}

function generateLanguageNavigation(currentLocale: string): string {
  const badges = SUPPORTED_LANGUAGES.map((lang) => {
    const isCurrent = lang.code === currentLocale;
    const color = isCurrent ? "brightgreen" : "lightgrey";
    const text = isCurrent ? "Current" : "Click%20to%20View";
    const safeName = encodeURIComponent(lang.name);
    return `[![${lang.name}](https://img.shields.io/badge/${safeName}-${text}-${color})](${lang.readmeFileName})`;
  });

  const rows: string[] = [];
  for (let i = 0; i < badges.length; i += 10) {
    rows.push(badges.slice(i, i + 10).join(" "));
  }

  return `${rows.join("\n")}\n\n---\n\n`;
}

function generateCollectionCTA(categories: FilterCategory[], locale: string): string {
  const sourceNote = sourceBackedNote(locale);
  let md = `## ${t("viewInGallery", locale)}

**[${t("browseGallery", locale)}](${getWanProductUrl(locale)})**

${t("galleryFeatures", locale)}

${sourceNote}

| ${t("feature", locale)} | ${t("githubReadme", locale)} | ${t("collection", locale)} |
|---------|--------------|---------------------|
| ${t("visualLayout", locale)} | ${t("linearList", locale)} | ${t("masonryGrid", locale)} |
| ${t("search", locale)} | ${t("ctrlFOnly", locale)} | ${t("fullTextSearch", locale)} |
| ${t("aiGenerate", locale)} | - | ${t("aiOneClickGen", locale)} |
| ${t("mobile", locale)} | ${t("basic", locale)} | ${t("fullyResponsive", locale)} |
| ${t("categories", locale)} | - | ${t("categoryBrowsing", locale)} |

`;

  if (categories.length > 0) {
    md += generateCategoriesSection(categories, locale);
  }

  return `${md}---\n\n`;
}

function generateCategoriesSection(categories: FilterCategory[], locale: string): string {
  const workflowCategories = categories
    .filter((category) => category.parentSlug === "video-workflow-groups")
    .sort((left, right) => (left.sort || 0) - (right.sort || 0));
  let md = `\n### ${t("browseByCategory", locale)}\n\n`;

  for (const category of workflowCategories) {
    md += `- [**${category.title}**](#workflow-${category.slug}) - ${workflowDescription(category.slug, locale)}\n`;
  }

  return `${md}\n`;
}

export function groupPromptsByWorkflow(
  prompts: Prompt[],
  categories: FilterCategory[]
): WorkflowPromptGroup[] {
  return categories
    .filter((category) => category.parentSlug === "video-workflow-groups")
    .sort((left, right) => (left.sort || 0) - (right.sort || 0))
    .map((category) => ({
      category,
      prompts: prompts.filter((prompt) =>
        prompt.videoCategories?.workflows?.some((workflow) => workflow.slug === category.slug)
      ),
    }))
    .filter((group) => group.prompts.length > 0);
}

function generatePromptSection(
  prompt: Prompt,
  index: number,
  locale: string,
  headingLevel = 3
): string {
  const authorLink = prompt.author.link || "#";
  const publishedDate = new Date(prompt.sourcePublishedAt).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  const promptContent = cleanPromptContent(prompt.translatedContent || prompt.content);
  const originalPromptContent = cleanPromptContent(prompt.content);
  const hasVariables = /\[[A-Z][A-Z0-9_ ]{1,40}\]/.test(promptContent);

  const heading = "#".repeat(headingLevel);
  const detailHeading = "#".repeat(headingLevel + 1);
  let md = `<a id="prompt-${prompt.id}"></a>\n\n${heading} #${index + 1}: ${prompt.title}\n\n`;
  md += `![Language-${prompt.language.toUpperCase()}](https://img.shields.io/badge/Language-${prompt.language.toUpperCase()}-blue)\n`;

  if (prompt.featured) {
    md += "![Featured](https://img.shields.io/badge/Featured-gold-gold)\n";
  }
  if (hasVariables) {
    md += "![Variables](https://img.shields.io/badge/Variables-Reusable-purple)\n";
  }
  if (prompt.needReferenceImages) {
    md += "![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)\n";
  }

  md += `\n${detailHeading} ${t("description", locale)}\n\n${prompt.description}\n\n`;
  if (prompt.translatedContent) {
    md += `${detailHeading} ${t("localizedPrompt", locale)}\n\n\`\`\`\n${promptContent}\n\`\`\`\n\n`;
    md += `<details>\n<summary>${t("originalPrompt", locale)}</summary>\n\n\`\`\`\n${originalPromptContent}\n\`\`\`\n\n</details>\n\n`;
  } else {
    md += `${detailHeading} ${t("prompt", locale)}\n\n\`\`\`\n${promptContent}\n\`\`\`\n\n`;
  }

  if (prompt.promptVariants?.length) {
    md += generatePromptVariants(prompt.promptVariants, locale);
  }

  if (prompt.video?.url) {
    if (prompt.sourceMedia.length > 1) {
      md += `${detailHeading} ${t("sourceAndResultFrames", locale)}\n\n`;
      md += generateMediaTable(prompt.sourceMedia, prompt.title);
    }
    md += `${detailHeading} ${videoPreviewCopy(locale).heading}\n\n`;
    md += generateAnimationPreview(
      prompt.animationPreview || prompt.video.thumbnail || "",
      prompt.title,
      prompt.video.url,
      locale
    );
  } else if (prompt.sourceMedia && prompt.sourceMedia.length > 0) {
    md += `${detailHeading} ${t("generatedImages", locale)}\n\n`;
    md += generateMediaTable(prompt.sourceMedia, prompt.title);
    if (prompt.animationPreview) {
      md += generateAnimationPreview(prompt.animationPreview, prompt.title);
    }
  } else if (prompt.animationPreview) {
    md += generateAnimationPreview(prompt.animationPreview, prompt.title);
  }

  md += `${detailHeading} ${t("details", locale)}\n\n`;
  md += `- **${t("author", locale)}:** [${prompt.author.name}](${authorLink})\n`;
  if (prompt.sourceLink) {
    md += `- **${t("source", locale)}:** [${t("source", locale)}](${prompt.sourceLink})\n`;
  }
  md += `- **${t("published", locale)}:** ${publishedDate}\n`;
  md += `- **${t("languages", locale)}:** ${prompt.language}\n\n`;
  md += `**[${getPromptCtaLabel(locale)}](${getWanProductUrl(locale)})**\n\n`;
  md += "---\n\n";

  return md;
}

function generateFeaturedSection(featured: Prompt[], locale: string): string {
  if (featured.length === 0) return "";
  let md = `<a id="community-featured-prompts"></a>\n\n`;
  md += `## ${communityFeaturedTitle(locale)}\n\n`;
  md += `> ${t("handPicked", locale)}\n\n`;
  featured.forEach((prompt, index) => {
    md += generatePromptSection(prompt, index, locale);
  });
  return md;
}

function generateAllPromptsSection(
  categorizedPrompts: Prompt[],
  hiddenCount: number,
  categories: FilterCategory[],
  locale: string
): string {
  if (categorizedPrompts.length === 0 && hiddenCount === 0) return "";
  let md = `<a id="community-prompt-cases"></a>\n\n`;
  md += `## ${communityCasesTitle(locale)}\n\n`;
  md += `> ${t("sortedByDate", locale)}.\n\n`;
  const groups = groupPromptsByWorkflow(categorizedPrompts, categories);
  let promptIndex = 0;

  for (const group of groups) {
    md += `<a id="workflow-${group.category.slug}"></a>\n\n`;
    md += `### ${group.category.title} (${group.prompts.length})\n\n`;
    md += `${workflowDescription(group.category.slug, locale)}\n\n`;
    const featuredPrompts = group.prompts.filter((prompt) => prompt.featured);
    if (featuredPrompts.length > 0) {
      md += `**${communityFeaturedTitle(locale)}**\n\n`;
      for (const prompt of featuredPrompts) {
        md += `- [${prompt.title}](#prompt-${prompt.id})\n`;
      }
      md += "\n";
    }
    for (const prompt of group.prompts.filter((item) => !item.featured)) {
      md += generatePromptSection(prompt, promptIndex, locale, 4);
      promptIndex += 1;
    }
  }

  if (hiddenCount > 0) {
    md += `---\n\n## ${t("morePrompts", locale)}\n\n`;
    md += `<div align="center">\n\n`;
    md += `### ${hiddenCount} ${t("morePromptsDesc", locale)}\n\n`;
    md += `Due to GitHub README length limits, only the first ${MAX_REGULAR_PROMPTS_TO_DISPLAY} regular prompts are displayed here.\n\n`;
    md += `**[${t("viewAll", locale)}](${REPO_URL})**\n\n`;
    md += `${t("galleryFeature1", locale)}\n\n${t("galleryFeature2", locale)}\n\n${t("galleryFeature3", locale)}\n\n${t("galleryFeature4", locale)}\n\n`;
    md += `</div>\n\n---\n\n`;
  }

  return md;
}

function communityFeaturedTitle(locale: string): string {
  return locale === "en" ? "Featured Community Prompts" : t("featuredPrompts", locale);
}

function communityCasesTitle(locale: string): string {
  return locale === "en" ? "Community Prompt Cases" : t("allPrompts", locale);
}

function generateStats(stats: { total: number; featured: number }, locale: string): string {
  const now = new Date().toLocaleString(locale, {
    timeZone: "UTC",
    dateStyle: "full",
    timeStyle: "long",
  });

  return `## ${t("stats", locale)}

<div align="center">

| ${t("metric", locale)} | ${t("count", locale)} |
|--------|-------|
| ${t("totalPrompts", locale)} | **${stats.total}** |
| ${t("featured", locale)} | **${stats.featured}** |
| ${t("lastUpdated", locale)} | **${now}** |

</div>

---

`;
}

function generateTOC(
  locale: string,
  options: {
    hasOfficialCases: boolean;
    hasFeatured: boolean;
    hasCommunityPrompts: boolean;
  }
): string {
  const items = [
    `- [${t("viewInGallery", locale)}](#${anchor(t("viewInGallery", locale))})`,
    `- [${t("whatIs", locale)}](#${anchor(t("whatIs", locale))})`,
  ];

  if (options.hasOfficialCases) {
    items.push("- [Official Capability Cases](#official-capability-cases)");
  }
  items.push(`- [${t("stats", locale)}](#${anchor(t("stats", locale))})`);
  if (options.hasFeatured) {
    items.push(`- [${communityFeaturedTitle(locale)}](#community-featured-prompts)`);
  }
  if (options.hasCommunityPrompts) {
    items.push(`- [${communityCasesTitle(locale)}](#community-prompt-cases)`);
  }
  items.push(
    `- [${t("howToContribute", locale)}](#${anchor(t("howToContribute", locale))})`,
    `- [${t("license", locale)}](#${anchor(t("license", locale))})`,
    `- [${t("acknowledgements", locale)}](#${anchor(t("acknowledgements", locale))})`,
    `- [${t("starHistory", locale)}](#${anchor(t("starHistory", locale))})`
  );

  return `## ${t("toc", locale)}

${items.join("\n")}

---

`;
}

function generateOfficialCasesSection(groups: OfficialCaseGroup[]): string {
  if (groups.length === 0) return "";

  let md = `<a id="official-capability-cases"></a>\n\n`;
  md += `## Official Capability Cases\n\n`;
  md += `> Source-backed launch examples collected as official capability cases. The Twitter/X entries below are treated separately as community prompt cases.\n\n`;
  for (const group of groups) {
    md += `<a id="official-${group.slug}"></a>\n\n`;
    md += `### ${group.title}\n\n`;
    md += `${group.description}\n\n`;

    for (const officialCase of group.cases) {
      md += generateOfficialCase(officialCase);
    }
  }

  return md;
}

function generateOfficialCase(officialCase: OfficialCase): string {
  let md = `<a id="official-case-${officialCase.id}"></a>\n\n`;
  md += `#### Case ${officialCase.id}: ${officialCase.title}\n\n`;

  if (officialCase.media.length === 1) {
    const media = officialCase.media[0];
    md += `<img src="${escapeAttribute(media.url)}" height="${media.height || 420}" alt="${escapeAttribute(officialCase.title)}">\n\n`;
  } else {
    const cellWidth = `${Math.floor(100 / officialCase.media.length)}%`;
    const cells = officialCase.media
      .map((media) => {
        const label = media.label ? `\n\n**${media.label}:**\n\n` : "\n\n";
        return `<td width="${cellWidth}" valign="top">${label}<img src="${escapeAttribute(media.url)}" height="${media.height || 300}" alt="${escapeAttribute(`${officialCase.title} ${media.label || "media"}`)}">\n\n</td>`;
      })
      .join("\n");
    md += `<table>\n<tr>\n${cells}\n</tr>\n</table>\n\n`;
  }

  if (officialCase.prompt) {
    md += `**Prompt:**\n\n\`\`\`\n${officialCase.prompt}\n\`\`\`\n\n`;
  }

  return `${md}---\n\n`;
}

export function generateMediaTable(images: string[], title: string): string {
  const rows: string[] = [];

  for (let index = 0; index < images.length; index += 4) {
    const row = images.slice(index, index + 4);
    const cellWidth = `${Math.floor(100 / row.length)}%`;
    const cells = row
      .map((imageUrl, rowIndex) => {
        const imageNumber = index + rowIndex + 1;
        return `<td width="${cellWidth}" valign="top" align="center"><img src="${escapeAttribute(imageUrl)}" width="100%" alt="${escapeAttribute(title)} - Image ${imageNumber}"></td>`;
      })
      .join("\n");
    rows.push(`<tr>\n${cells}\n</tr>`);
  }

  return `<table>\n${rows.join("\n")}\n</table>\n\n`;
}

export function generateAnimationPreview(
  url: string,
  title: string,
  sourceUrl?: string,
  locale = "en"
): string {
  const copy = videoPreviewCopy(locale);
  if (!url && sourceUrl) {
    return `<div align="center">\n\n**[▶ ${copy.watchVideo} →](${escapeAttribute(sourceUrl)})**\n\n</div>\n\n`;
  }
  const image = `<img src="${escapeAttribute(url)}" height="420" alt="${escapeAttribute(title)} - Motion preview">`;
  if (!sourceUrl) {
    return `<div align="center">\n${image}\n</div>\n\n`;
  }
  return `<div align="center">\n<a href="${escapeAttribute(sourceUrl)}">${image}</a>\n\n*${copy.clickPreview}* · **[▶ ${copy.watchVideo} →](${escapeAttribute(sourceUrl)})**\n</div>\n\n`;
}

function videoPreviewCopy(locale: string): {
  heading: string;
  clickPreview: string;
  watchVideo: string;
} {
  const copy: Record<string, [string, string, string]> = {
    en: ["Video", "Click the preview to open the video", "Watch video"],
    es: ["Video", "Haz clic en la vista previa para abrir el video", "Ver video"],
    pt: ["Vídeo", "Clique na prévia para abrir o vídeo", "Ver vídeo"],
    it: ["Video", "Fai clic sull'anteprima per aprire il video", "Guarda il video"],
    de: ["Video", "Klicke auf die Vorschau, um das Video zu öffnen", "Video ansehen"],
    fr: ["Vidéo", "Cliquez sur l'aperçu pour ouvrir la vidéo", "Voir la vidéo"],
    ar: ["الفيديو", "انقر على المعاينة لفتح الفيديو", "مشاهدة الفيديو"],
    ja: ["動画", "プレビューをクリックして動画を開く", "動画を見る"],
    ko: ["동영상", "미리보기를 클릭하여 동영상을 여세요", "동영상 보기"],
    zh: ["视频", "点击预览图打开视频", "观看视频"],
    nl: ["Video", "Klik op de voorvertoning om de video te openen", "Video bekijken"],
    ru: ["Видео", "Нажмите на превью, чтобы открыть видео", "Смотреть видео"],
    tr: ["Video", "Videoyu açmak için önizlemeye tıklayın", "Videoyu izle"],
    pl: ["Wideo", "Kliknij podgląd, aby otworzyć wideo", "Obejrzyj wideo"],
  };
  const [heading, clickPreview, watchVideo] = copy[locale] || copy.en;
  return { heading, clickPreview, watchVideo };
}

function generatePromptVariants(
  variants: NonNullable<Prompt["promptVariants"]>,
  locale: string
): string {
  const copy = promptVariantCopy(locale);
  let md = `<details>\n<summary>${copy.summary} (${variants.length})</summary>\n\n`;

  for (const variant of variants) {
    if (variant.title) md += `**${variant.title}**\n\n`;
    md += `\`\`\`\n${cleanPromptContent(variant.content)}\n\`\`\`\n\n`;
    if (variant.author?.name) {
      md += `${copy.author}: ${variant.author.link ? `[${variant.author.name}](${variant.author.link})` : variant.author.name}\n\n`;
    }
    if (variant.sourceLink) {
      md += `${copy.source}: [${copy.source}](${variant.sourceLink})\n\n`;
    }
  }

  return `${md}</details>\n\n`;
}

function promptVariantCopy(locale: string): {
  summary: string;
  author: string;
  source: string;
} {
  if (locale === "zh") return { summary: "相关提示词变体", author: "作者", source: "来源" };
  if (locale === "zh-TW") return { summary: "相關提示詞變體", author: "作者", source: "來源" };
  if (locale === "ja-JP") {
    return { summary: "関連プロンプトのバリエーション", author: "作者", source: "出典" };
  }
  if (locale === "ko-KR") {
    return { summary: "관련 프롬프트 변형", author: "작성자", source: "출처" };
  }
  return { summary: "Related prompt variants", author: "Author", source: "Source" };
}

export function generateModelIntroduction(locale: string): string {
  const contentLocale = locale;

  return `## ${t("whatIs", locale)}

${t("whatIsIntro", contentLocale)}

- ${t("multimodalUnderstanding", contentLocale)}
- ${t("highQualityGeneration", contentLocale)}
- ${t("fastIteration", contentLocale)}
- ${t("diverseStyles", contentLocale)}
- ${t("preciseControl", contentLocale)}
- ${t("complexScenes", contentLocale)}

${t("learnMore", locale)} [Wan 3.0 workflow on ImagineVid](${getWanProductUrl(locale)})

### ${t("variableWorkflowTitle", locale)}

${t("variableWorkflowDescription", locale)}

**${t("example", locale)}**
\`\`\`
${t("variableWorkflowExample", locale)}
\`\`\`

${t("variableWorkflowUsage", locale)}

---

`;
}

function sourceBackedNote(locale: string): string {
  return locale === "en"
    ? "Every published case preserves the creator, canonical source, model evidence, full reusable prompt, and a playable result. Showcase-only posts are excluded."
    : t("noteContent", locale);
}

function generateContribute(locale: string): string {
  return `## ${t("howToContribute", locale)}

${t("welcomeContributions", locale)}

### ${t("githubIssue", locale)}

1. [**${t("submitNewPrompt", locale)}**](https://github.com/${REPO}/issues/new?template=submit-prompt.yml)
2. ${t("fillForm", locale)}
3. ${t("submitWait", locale)}
4. ${t("approvedSync", locale)}
5. ${t("appearInReadme", locale)}

**${t("note", locale)}** ${t("noteContent", locale)}

${t("seeContributing", locale)}

---

`;
}

function generateFooter(locale: string, prompts: Prompt[]): string {
  const timestamp = new Date().toISOString();
  const creatorCredits = generateCreatorCredits(prompts, locale);

  return `## ${t("license", locale)}

${t("licensedUnder", locale)}

---

## ${t("acknowledgements", locale)}

${creatorCredits}

---

## ${t("starHistory", locale)}

[![GitHub stars](https://img.shields.io/github/stars/${REPO}?style=for-the-badge&logo=github&label=GitHub%20Stars)](${REPO_URL}/stargazers)

**[${t("starHistory", locale)}](https://star-history.com/#${REPO}&Date)**

---

<div align="center">

**[${t("viewInGallery", locale)}](${getWanProductUrl(locale)})** •
**[${t("submitPrompt", locale)}](https://github.com/${REPO}/issues/new?template=submit-prompt.yml)** •
**[${t("starRepo", locale)}](${REPO_URL})**

<sub>${t("autoGenerated", locale)} ${timestamp}</sub>

</div>
`;
}

function generateCreatorCredits(prompts: Prompt[], locale: string): string {
  const summary = creatorSummary(locale);
  const attributedCreators = prompts.flatMap((prompt) => [
    prompt.author,
    ...(prompt.promptVariants || []).map((variant) => variant.author).filter(Boolean),
  ]);
  const creators = [
    ...new Map(
      attributedCreators
        .filter((author) => author?.name && author.link)
        .map((author) => [author!.link, author!])
    ).values(),
  ].sort((left, right) => left.name.localeCompare(right.name));
  const rows: string[] = [];

  for (let index = 0; index < creators.length; index += 8) {
    rows.push(
      creators
        .slice(index, index + 8)
        .map((creator) => `[${creator.name}](${creator.link})`)
        .join(" · ")
    );
  }

  return `<details>\n<summary>${summary} (${creators.length})</summary>\n\n${rows.join("<br>\n")}\n\n</details>`;
}

function creatorSummary(locale: string): string {
  const copies: Record<string, string> = {
    "en": "Community creators we thank",
    "zh": "查看并感谢社区作者",
    "ja-JP": "コミュニティ作者への謝辞",
    "ko-KR": "커뮤니티 제작자 감사 명단",
    "es-ES": "Autores de la comunidad",
    "de-DE": "Community-Autoren",
    "fr-FR": "Auteurs de la communauté",
    "it-IT": "Autori della community",
    "pt-PT": "Autores da comunidade",
    "tr-TR": "Topluluk üreticileri",
    "ar-SA": "مبدعو المجتمع الذين نشكرهم",
    "ru-RU": "Авторы сообщества",
    "nl-NL": "Makers uit de community",
    "pl-PL": "Twórcy społeczności",
  };
  return copies[locale] || copies.en;
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function anchor(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}
