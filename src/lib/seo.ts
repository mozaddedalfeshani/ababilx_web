const DEFAULT_SITE_URL = "https://www.ababilx.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

export const SITE_NAME = "AbabilX";

export const DEFAULT_TITLE = `${SITE_NAME} — Paper & Workspace`;

export const DEFAULT_DESCRIPTION =
  "AbabilX builds Paper and Workspace — practical software for developers and learners. Founded by Murad.";

export const DEFAULT_DESCRIPTION_BN =
  "AbabilX তৈরি করে Paper ও Workspace — ডেভেলপার ও লার্নারদের জন্য ব্যবহারিক সফটওয়্যার। প্রতিষ্ঠাতা Murad।";

export const FOUNDER_NAME = "Murad";

export const GITHUB_ORG_URL = "https://github.com/AbabilX";
export const PAPER_URL = "https://paper.ababilx.com";
export const WORKSPACE_URL = "https://workspace.ababilx.com";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}
