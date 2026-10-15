export type HomeLocale = "en" | "bn";

export type NavItem = { label: string; href: string };

export type HomeCopy = {
  nav: NavItem[];
  auth: {
    download: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
    androidCta: string;
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
    download: "Get AbabilX Chat",
  },
  hero: {
    badge: "AbabilX Chat · End-to-end encrypted",
    headline: "Your chats.",
    headlineAccent: "Nobody else's.",
    tagline:
      "AbabilX Chat keeps every message locked on your phone — not even AbabilX can read it. Privacy mode, disappearing photos and Ghost Chat. No ads, no trackers.",
    androidCta: "Download for Android",
    secondaryCta: "AbabilX Workspace",
    webChatCta: "AbabilX Chat Web",
    webChatHint:
      "On a computer? Open AbabilX Chat Web and scan the QR code with AbabilX Chat on your phone.",
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
    download: "AbabilX Chat নাও",
  },
  hero: {
    badge: "AbabilX Chat · এন্ড-টু-এন্ড এনক্রিপ্টেড",
    headline: "তোমার চ্যাট।",
    headlineAccent: "শুধুই তোমার।",
    tagline:
      "AbabilX Chat-এ প্রতিটি মেসেজ লক থাকে তোমার ফোনেই — AbabilX-ও পড়তে পারে না। প্রাইভেসি মোড, হারিয়ে যাওয়া ছবি আর Ghost Chat। কোনো বিজ্ঞাপন নেই, কোনো ট্র্যাকার নেই।",
    androidCta: "Android-এ ডাউনলোড",
    secondaryCta: "AbabilX Workspace",
    webChatCta: "AbabilX Chat Web",
    webChatHint:
      "কম্পিউটারে? AbabilX Chat Web খুলে ফোনের AbabilX Chat দিয়ে QR কোড স্ক্যান করো।",
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
