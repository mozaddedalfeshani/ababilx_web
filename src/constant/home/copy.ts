export type HomeLocale = "en" | "bn";

export type NavItem = { label: string; href: string };

export type HomeCopy = {
  nav: NavItem[];
  auth: {
    paper: string;
    workspace: string;
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
  },
  hero: {
    badge: "Founded by Murad",
    headline: "Build useful tools.",
    headlineAccent: "My own way.",
    tagline:
      "AbabilX builds Paper and Workspace — practical software for developers and learners.",
  },
  languageEn: "English",
  languageBn: "বাংলা",
};

export const HOME_COPY_BN: HomeCopy = {
  nav: [],
  auth: {
    paper: "Paper",
    workspace: "Workspace",
  },
  hero: {
    badge: "প্রতিষ্ঠাতা Murad",
    headline: "দরকারি টুল বানাও।",
    headlineAccent: "নিজের মতো করে।",
    tagline:
      "AbabilX তৈরি করে Paper ও Workspace — ডেভেলপার ও লার্নারদের জন্য ব্যবহারিক সফটওয়্যার।",
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
  SITE_URL,
  WORKSPACE_URL,
} from "@/lib/seo";
