import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://www.ababilx.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

export const SITE_NAME = "AbabilX";

/** AbabilX is the company; Chat and Workspace are services it runs. */
export const CHAT_NAME = `${SITE_NAME} Chat`;
export const WORKSPACE_NAME = `${SITE_NAME} Workspace`;

export const DEFAULT_TITLE = `${SITE_NAME} — Makers of AbabilX Chat & AbabilX Workspace`;

export const DEFAULT_DESCRIPTION =
  "AbabilX is the software company behind AbabilX Chat, private end-to-end encrypted messaging with an open-source Android app, no email, phone number or personal details needed, deleted from our servers once delivered, with no ads, no trackers and no AI, and AbabilX Workspace, boards and a wall for teams.";

export const DEFAULT_DESCRIPTION_BN =
  "AbabilX একটি সফটওয়্যার প্রতিষ্ঠান — আমরা বানাই AbabilX Chat (এন্ড-টু-এন্ড এনক্রিপ্টেড মেসেজিং, ওপেন সোর্স Android অ্যাপ, ইমেইল, ফোন নম্বর বা কোনো ব্যক্তিগত তথ্য লাগে না, কোনো বিজ্ঞাপন বা ট্র্যাকার নেই) আর টিমের জন্য AbabilX Workspace।";

export const FOUNDER_NAME = "Murad";

export const GITHUB_ORG_URL = "https://github.com/AbabilX";
/** The open-source Android app (GNU AGPL-3.0). */
export const MOBILE_SOURCE_URL = "https://github.com/AbabilX/ababilx-mobile";
export const SOURCE_LICENSE_URL = "https://www.gnu.org/licenses/agpl-3.0.html";
export const PAPER_URL = "https://paper.ababilx.com";
export const WORKSPACE_URL = "https://workspace.ababilx.com";
export const WEB_CHAT_URL = "https://chat.ababilx.com";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ababilx.app";
export const CONTACT_EMAIL = "info@ababilx.com";

export const KEYWORDS = [
  "AbabilX",
  "AbabilX Chat",
  "AbabilX Chat Web",
  "AbabilX Workspace",
  "AbabilX Paper",
  "Murad",
  "encrypted messenger",
  "private messaging",
  "end-to-end encrypted chat",
  "secure messaging app",
  "privacy mode",
  "disappearing photos",
  "Ghost Chat",
  "team workspace",
  "developer tools",
  "software engineering",
  "productivity tools",
  "messages deleted after delivery",
  "messenger without phone number",
  "messenger without email",
  "anonymous messenger no personal data",
  "open source messenger",
  "open source encrypted messaging app",
  "AGPL messenger",
  "Paper",
  "Workspace",
];

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : absoluteUrl(item.item),
    })),
  };
}

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = KEYWORDS,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? DEFAULT_TITLE : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
