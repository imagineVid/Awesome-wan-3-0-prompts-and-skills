/**
 * [INPUT]: 依赖社区来源提供的公开视频、缩略图或动画预览 URL
 * [OUTPUT]: 对外提供不改写归属信息的 PublicMediaReference 归一化能力
 * [POS]: scripts/utils 的媒体来源边界，明确禁止隐式上传到外部图库
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
export interface PublicMediaReference {
  url: string;
  kind: "video" | "preview";
}

export function retainPublicMedia(
  url: string,
  kind: PublicMediaReference["kind"]
): PublicMediaReference {
  return { url: url.trim(), kind };
}
