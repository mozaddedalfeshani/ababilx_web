const DEFAULT_SITE_URL = "https://ababilx.cloud";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

export const SITE_NAME = "AbabilX";

export const DEFAULT_TITLE = `${SITE_NAME} — Open Source Organization`;

export const DEFAULT_DESCRIPTION =
  "AbabilX is a community-driven open-source organization building practical, clean, and impactful software — including Paper and Workspace — for developers and learners worldwide.";

export const DEFAULT_DESCRIPTION_BN =
  "AbabilX একটি কমিউনিটি-ড্রিভেন ওপেন সোর্স অর্গানাইজেশন — Paper ও Workspaceসহ ব্যবহারিক, পরিষ্কার ও প্রভাবশালী সফটওয়্যার তৈরি করে ডেভেলপার ও লার্নারদের জন্য।";

export const GITHUB_ORG_URL = "https://github.com/AbabilX";
export const PAPER_URL = "https://paper.ababilx.cloud";
export const WORKSPACE_URL = "https://workspace.ababilx.cloud";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}
