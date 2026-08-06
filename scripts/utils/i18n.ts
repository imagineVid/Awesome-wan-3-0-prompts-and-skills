/**
 * [INPUT]: 依赖核心与扩展语言包及 Translation 字段契约
 * [OUTPUT]: 对外提供 Translation 类型与 README 文案查询函数 t
 * [POS]: scripts/utils 的十四语言文案门面，以英文作为缺失字段回退
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import { CORE_TRANSLATIONS } from "./locales/core.js";
import { EXTENDED_TRANSLATIONS } from "./locales/extended.js";
import type { Translation } from "./translation-types.js";

export type { Translation } from "./translation-types.js";

const translations: Record<string, Translation> = {
  ...CORE_TRANSLATIONS,
  ...EXTENDED_TRANSLATIONS,
};

export function t(key: keyof Translation, locale = "en"): string {
  return (translations[locale] || translations.en)[key] || translations.en[key];
}
