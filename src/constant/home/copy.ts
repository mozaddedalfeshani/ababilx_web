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
    badge: "Open Source Organization",
    headline: "Practical software,",
    headlineAccent: "open for everyone.",
    tagline:
      "Two products from AbabilX — Paper and Workspace — built open for developers and learners.",
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
    badge: "ওপেন সোর্স অর্গানাইজেশন",
    headline: "ব্যবহারিক সফটওয়্যার,",
    headlineAccent: "সবার জন্য উন্মুক্ত।",
    tagline:
      "AbabilX-এর দুই প্রোডাক্ট — Paper ও Workspace — ডেভেলপার ও লার্নারদের জন্য উন্মুক্ত।",
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
