import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://www.ababilx.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

export const SITE_NAME = "AbabilX";

export const DEFAULT_TITLE = `${SITE_NAME} — Paper & Workspace`;

export const DEFAULT_DESCRIPTION =
  "End-to-end encrypted messaging — not even AbabilX can read your chats. Privacy mode, disappearing photos and Ghost Chat, with no ads and no trackers.";

export const DEFAULT_DESCRIPTION_BN =
  "এন্ড-টু-এন্ড এনক্রিপ্টেড মেসেজিং — AbabilX-ও তোমার চ্যাট পড়তে পারে না। প্রাইভেসি মোড, হারিয়ে যাওয়া ছবি আর Ghost Chat, কোনো বিজ্ঞাপন বা ট্র্যাকার ছাড়া।";

export const FOUNDER_NAME = "Murad";

export const GITHUB_ORG_URL = "https://github.com/AbabilX";
export const PAPER_URL = "https://paper.ababilx.com";
export const WORKSPACE_URL = "https://workspace.ababilx.com";
export const CONTACT_EMAIL = "info@ababilx.com";

export const KEYWORDS = [
  "AbabilX",
  "Murad",
  "AbabilX Paper",
  "AbabilX Workspace",
  "private messaging",
  "end-to-end encrypted chat",
  "privacy mode",
  "disappearing photos",
  "developer tools",
  "software engineering",
  "productivity tools",
  "code automation",
  "AI tools for developers",
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

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
      url: SITE_URL,
    },
    sameAs: [GITHUB_ORG_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      availableLanguage: ["English", "Bengali"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function generateSoftwareApplicationSchema() {
  return [
    {
      "@type": "SoftwareApplication",
      "@id": `${PAPER_URL}/#application`,
      name: "AbabilX Paper",
      url: PAPER_URL,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web, Desktop, Mobile",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${WORKSPACE_URL}/#application`,
      name: "AbabilX Workspace",
      url: WORKSPACE_URL,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web, Desktop, Mobile",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ];
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
