export type HomeLocale = "en" | "bn";

export type NavItem = { label: string; href: string };

export type HomeCopy = {
  nav: NavItem[];
  auth: {
    paper: string;
    workspace: string;
    webChat: string;
    download: string;
    github: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
    secondaryCta: string;
    webChatCta: string;
    webChatHint: string;
  };
  stats: [string, string, string];
  languageEn: string;
  languageBn: string;
};

export const HOME_COPY_EN: HomeCopy = {
  nav: [],
  auth: {
    paper: "Paper",
    workspace: "Workspace",
    webChat: "Web chat",
    download: "Download the app",
    github: "GitHub",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "End-to-end encrypted",
    headline: "Your chats.",
    headlineAccent: "Nobody else's.",
    tagline:
      "Messages locked on your phone — not even we can read them. Privacy mode, disappearing photos and Ghost Chat. No ads, no trackers.",
    secondaryCta: "Open Workspace",
    webChatCta: "Open web chat",
    webChatHint:
      "On a computer? Open web chat and scan the QR code with the AbabilX app.",
  },
  stats: [
    "End-to-end encrypted by default",
    "Free on Google Play",
    "No ads, no trackers",
  ],
  languageEn: "English",
  languageBn: "বাংলা",
};

export const HOME_COPY_BN: HomeCopy = {
  nav: [],
  auth: {
    paper: "Paper",
    workspace: "Workspace",
    webChat: "ওয়েব চ্যাট",
    download: "অ্যাপ ডাউনলোড",
    github: "GitHub",
    openMenu: "মেনু খোলো",
    closeMenu: "মেনু বন্ধ করো",
  },
  hero: {
    badge: "এন্ড-টু-এন্ড এনক্রিপ্টেড",
    headline: "তোমার চ্যাট।",
    headlineAccent: "শুধুই তোমার।",
    tagline:
      "মেসেজ লক থাকে তোমার ফোনেই — আমরাও পড়তে পারি না। প্রাইভেসি মোড, হারিয়ে যাওয়া ছবি আর Ghost Chat। কোনো বিজ্ঞাপন নেই, কোনো ট্র্যাকার নেই।",
    secondaryCta: "Workspace খোলো",
    webChatCta: "ওয়েব চ্যাট খোলো",
    webChatHint:
      "কম্পিউটারে? ওয়েব চ্যাট খুলে AbabilX অ্যাপ দিয়ে QR কোড স্ক্যান করো।",
  },
  stats: [
    "শুরু থেকেই এন্ড-টু-এন্ড এনক্রিপ্টেড",
    "Google Play-তে ফ্রি",
    "কোনো বিজ্ঞাপন নেই, কোনো ট্র্যাকার নেই",
  ],
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
