import type { ReactNode } from "react";

export type GuideSection = {
  title: string;
  intro?: ReactNode;
  items: ReactNode[];
};

type Props = {
  title: string;
  subtitle: string;
  highlight: { title: string; body: ReactNode };
  sections: GuideSection[];
  updated: string;
};

const LINK = "text-[#6366f1] hover:underline";

/** Shared layout for the account and data deletion guides. */
export default function DeletionGuide({ title, subtitle, highlight, sections, updated }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] to-[#0c0c14] text-[#f1f5f9] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-[#94a3b8]">{subtitle}</p>
        </header>

        <div className="bg-[#0c0c14] border border-[#6366f1] rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold mb-3 text-[#6366f1]">{highlight.title}</h2>
          <div className="text-[#cbd5e1] leading-7">{highlight.body}</div>
        </div>

        {sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            {section.intro && <p className="text-[#cbd5e1] leading-7 mb-4">{section.intro}</p>}
            <ul className="space-y-3 text-[#cbd5e1] leading-7">
              {section.items.map((item, i) => (
                <li key={i} className="rounded-lg border border-[#1e293b] bg-[#050508] p-4">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-[#cbd5e1] leading-7">
            Privacy questions and requests:{" "}
            <a href="mailto:info@ababilx.com" className={LINK}>
              info@ababilx.com
            </a>
            . We reply within 30 days, as the GDPR, CCPA and LGPD require.
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t border-[#1e293b] text-[#94a3b8] text-sm">
          Last updated: {updated}. Read the full{" "}
          <a href="/privacy-policy" className={LINK}>
            Privacy Policy
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
