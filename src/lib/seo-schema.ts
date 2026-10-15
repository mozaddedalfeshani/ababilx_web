import {
  CHAT_NAME,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  FOUNDER_NAME,
  GITHUB_ORG_URL,
  PAPER_URL,
  PLAY_STORE_URL,
  SITE_NAME,
  SITE_URL,
  WEB_CHAT_URL,
  WORKSPACE_NAME,
  WORKSPACE_URL,
} from "./seo";

/** JSON-LD for the company (AbabilX) and the services it runs. */
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
    brand: [
      { "@type": "Brand", name: CHAT_NAME, url: WEB_CHAT_URL },
      { "@type": "Brand", name: WORKSPACE_NAME, url: WORKSPACE_URL },
    ],
    sameAs: [GITHUB_ORG_URL, PLAY_STORE_URL],
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

const FREE_OFFER = { "@type": "Offer", price: "0", priceCurrency: "USD" };
const PUBLISHER = { "@id": `${SITE_URL}/#organization` };

export function generateSoftwareApplicationSchema() {
  return [
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#chat-android`,
      name: CHAT_NAME,
      description:
        "End-to-end encrypted messaging — not even AbabilX can read your chats. Privacy mode, disappearing photos and Ghost Chat, with no ads and no trackers.",
      applicationCategory: "CommunicationApplication",
      operatingSystem: "Android",
      installUrl: PLAY_STORE_URL,
      url: PLAY_STORE_URL,
      offers: FREE_OFFER,
      publisher: PUBLISHER,
    },
    {
      "@type": "WebApplication",
      "@id": `${WEB_CHAT_URL}/#application`,
      name: `${CHAT_NAME} Web`,
      description:
        "AbabilX Chat in the browser: scan a QR code with your phone to sign in.",
      applicationCategory: "CommunicationApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires a modern browser",
      url: WEB_CHAT_URL,
      offers: FREE_OFFER,
      publisher: PUBLISHER,
    },
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
      name: WORKSPACE_NAME,
      url: WORKSPACE_URL,
      applicationCategory: "BusinessApplication",
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
