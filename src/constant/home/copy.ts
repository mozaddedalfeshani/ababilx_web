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
      "AbabilX is the company behind AbabilX Chat, an end-to-end encrypted messenger, and AbabilX Workspace, the tools teams run their day on. Private by design, open source where it counts.",
    chatCta: "AbabilX Chat",
    workspaceCta: "AbabilX Workspace",
  },
  stats: [
    "AbabilX Chat — encrypted messenger",
    "AbabilX Workspace — for teams",
    "Open source on GitHub",
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
      "AbabilX হলো AbabilX Chat (এন্ড-টু-এন্ড এনক্রিপ্টেড মেসেঞ্জার) আর AbabilX Workspace (টিমের প্রতিদিনের কাজের টুল)-এর পেছনের প্রতিষ্ঠান। শুরু থেকেই প্রাইভেট, যেখানে দরকার সেখানে ওপেন সোর্স।",
    chatCta: "AbabilX Chat",
    workspaceCta: "AbabilX Workspace",
  },
  stats: [
    "AbabilX Chat — এনক্রিপ্টেড মেসেঞ্জার",
    "AbabilX Workspace — টিমের জন্য",
    "GitHub-এ ওপেন সোর্স",
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
