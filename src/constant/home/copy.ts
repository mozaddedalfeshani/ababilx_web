export type HomeLocale = "en" | "bn";

export type NavItem = { label: string; href: string };

export type HomeCopy = {
  nav: NavItem[];
  auth: {
    paper: string;
    workspace: string;
    /** Full marketing line — tablet/desktop */
    download: string;
    /** Compact line — phones */
    downloadShort: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
  };
  languageEn: string;
  languageBn: string;
};

export const HOME_COPY_EN: HomeCopy = {
  nav: [],
  auth: {
    paper: "Paper",
    workspace: "Workspace",
    download: "Download the most secure chatting app you'll ever see",
    downloadShort: "Download on Google Play",
  },
  hero: {
    badge: "End-to-end encrypted",
    headline: "Your chats.",
    headlineAccent: "Nobody else's.",
    tagline:
      "Messages locked on your phone — not even we can read them. Privacy mode, disappearing photos and Ghost Chat. No ads, no trackers.",
  },
  languageEn: "English",
  languageBn: "বাংলা",
};

export const HOME_COPY_BN: HomeCopy = {
  nav: [],
  auth: {
    paper: "Paper",
    workspace: "Workspace",
    download:
      "যে চ্যাটিং অ্যাপ দেখেছো, তার মধ্যে সবচেয়ে নিরাপদ — ডাউনলোড করো",
    downloadShort: "Google Play-এ ডাউনলোড",
  },
  hero: {
    badge: "এন্ড-টু-এন্ড এনক্রিপ্টেড",
    headline: "তোমার চ্যাট।",
    headlineAccent: "শুধুই তোমার।",
    tagline:
      "মেসেজ লক থাকে তোমার ফোনেই — আমরাও পড়তে পারি না। প্রাইভেসি মোড, হারিয়ে যাওয়া ছবি আর Ghost Chat। কোনো বিজ্ঞাপন নেই, কোনো ট্র্যাকার নেই।",
  },
  languageEn: "English",
  languageBn: "বাংলা",
};

export function getHomeCopy(locale: HomeLocale): HomeCopy {
  return locale === "bn" ? HOME_COPY_BN : HOME_COPY_EN;
}

export {
  GITHUB_ORG_URL,
  PAPER_URL,
  PLAY_STORE_URL,
  SITE_URL,
  WORKSPACE_URL,
} from "@/lib/seo";
