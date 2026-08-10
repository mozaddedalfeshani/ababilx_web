import type { Metadata } from "next";
import HomePageClient from "@/components/home/home-page-client";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  GITHUB_ORG_URL,
  PAPER_URL,
  SITE_NAME,
  SITE_URL,
  WORKSPACE_URL,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    sameAs: [GITHUB_ORG_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@ababilx.cloud",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Paper",
          url: PAPER_URL,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Workspace",
          url: WORKSPACE_URL,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <HomePageClient />
    </>
  );
}
