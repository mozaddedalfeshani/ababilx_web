export type HomeLocale = "en" | "bn";

export type NavItem = { label: string; href: string };

export type HomeCopy = {
  nav: NavItem[];
  auth: {
    github: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
    chatCta: string;
    workspaceCta: string;
  };
  stats: [string, string, string];
  languageEn: string;
  languageBn: string;
};

export const HOME_COPY_EN: HomeCopy = {
  nav: [],
  auth: {
    github: "GitHub",
  },
  hero: {
    badge: "AbabilX · We build software",
    headline: "Software that",
    headlineAccent: "respects people.",
    tagline:
      "AbabilX is the company behind AbabilX Chat, an end-to-end encrypted messenger, and AbabilX Workspace, the tools teams run their day on. Private by design: no email, phone number or personal details needed, and an open-source Android app.",
    chatCta: "AbabilX Chat",
    workspaceCta: "AbabilX Workspace",
  },
  stats: [
    "AbabilX Chat — no email or phone number needed",
    "AbabilX Workspace — for teams",
    "Open-source Android app",
  ],
  languageEn: "English",
  languageBn: "বাংলা",
};

export const HOME_COPY_BN: HomeCopy = {
  nav: [],
  auth: {
    github: "GitHub",
  },
  hero: {
    badge: "AbabilX · আমরা সফটওয়্যার বানাই",
    headline: "এমন সফটওয়্যার,",
    headlineAccent: "যা মানুষকে সম্মান করে।",
    tagline:
      "AbabilX হলো AbabilX Chat (এন্ড-টু-এন্ড এনক্রিপ্টেড মেসেঞ্জার) আর AbabilX Workspace (টিমের প্রতিদিনের কাজের টুল)-এর পেছনের প্রতিষ্ঠান। শুরু থেকেই প্রাইভেট: ইমেইল, ফোন নম্বর বা কোনো ব্যক্তিগত তথ্য লাগে না, আর Android অ্যাপটি ওপেন সোর্স।",
    chatCta: "AbabilX Chat",
    workspaceCta: "AbabilX Workspace",
  },
  stats: [
    "AbabilX Chat — ইমেইল বা ফোন নম্বর লাগে না",
    "AbabilX Workspace — টিমের জন্য",
    "ওপেন সোর্স Android অ্যাপ",
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
