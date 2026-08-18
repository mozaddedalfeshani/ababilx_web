import type { Metadata } from "next";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";
import LegalMarkdown from "@/components/legal/legal-markdown";
import {
  SITE_NAME,
  SITE_URL,
  buildPageMetadata,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Legal Policies & Privacy",
  description:
    "Review AbabilX Terms of Service, Privacy Policy, DPA, GDPR, CCPA, and Cookie policies in one unified legal center.",
  path: "/privacy-policy",
});

type LegalDocument = {
  slug: string;
  title: string;
  fileName: string;
};

const LEGAL_DOCUMENTS: LegalDocument[] = [
  { slug: "privacy-policy", title: "Privacy Policy", fileName: "privacy-policy.md" },
  { slug: "terms-of-service", title: "Terms of Service", fileName: "terms-of-service.md" },
  { slug: "cookie-policy", title: "Cookie Policy", fileName: "cookie-policy.md" },
  { slug: "acceptable-use-policy", title: "Acceptable Use Policy", fileName: "acceptable-use-policy.md" },
  { slug: "security-policy", title: "Security Policy", fileName: "security-policy.md" },
  { slug: "ai-policy", title: "AI Policy", fileName: "ai-policy.md" },
  { slug: "billing-refund-policy", title: "Billing & Refund Policy", fileName: "billing-refund-policy.md" },
  { slug: "developer-api-policy", title: "Developer & API Policy", fileName: "developer-api-policy.md" },
  { slug: "copyright-dmca-policy", title: "Copyright & DMCA Policy", fileName: "copyright-dmca-policy.md" },
  { slug: "community-guidelines", title: "Community Guidelines", fileName: "community-guidelines.md" },
  { slug: "data-processing-addendum", title: "Data Processing Addendum (DPA)", fileName: "data-processing-addendum.md" },
  { slug: "gdpr-compliance", title: "GDPR Compliance", fileName: "gdpr-compliance.md" },
  { slug: "ccpa-compliance", title: "CCPA / CPRA Compliance", fileName: "ccpa-compliance.md" },
  { slug: "subprocessors", title: "Subprocessors", fileName: "subprocessors.md" },
  {
    slug: "vulnerability-disclosure-policy",
    title: "Vulnerability Disclosure Policy",
    fileName: "vulnerability-disclosure-policy.md",
  },
];

async function loadDocuments() {
  const legalRoot = path.join(process.cwd(), "legal");
  return Promise.all(
    LEGAL_DOCUMENTS.map(async (doc) => {
      const filePath = path.join(legalRoot, doc.fileName);
      const text = await readFile(filePath, "utf8");
      return { ...doc, text };
    }),
  );
}

function PrivacyPolicyStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Legal Policies", item: "/privacy-policy" },
      ]),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/privacy-policy/#webpage`,
        url: `${SITE_URL}/privacy-policy`,
        name: `Legal Policies & Privacy | ${SITE_NAME}`,
        description:
          "Official legal terms, privacy policies, GDPR and compliance documentation for AbabilX.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
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

export default async function PrivacyPolicyPage() {
  const documents = await loadDocuments();

  return (
    <>
      <PrivacyPolicyStructuredData />
      <div className="h-screen overflow-y-auto bg-gradient-to-b from-[#050508] to-[#0c0c14] text-[#f1f5f9] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">AbabilX Legal Policies</h1>
            <p className="text-[#94a3b8]">
              All legal documents are available on this single page for easy review and policy acceptance.
            </p>
          </header>

          <nav aria-label="Legal document table of contents" className="mb-8 rounded-xl border border-[#1e293b] bg-[#0c0c14] p-5">
            <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {documents.map((doc) => (
                <a key={doc.slug} href={`#${doc.slug}`} className="text-sm text-[#818cf8] hover:underline">
                  {doc.title}
                </a>
              ))}
            </div>
          </nav>

          <main className="space-y-8">
            {documents.map((doc) => (
              <section
                key={doc.slug}
                id={doc.slug}
                className="scroll-mt-24 rounded-xl border border-[#1e293b] bg-[#0c0c14] p-6"
              >
                <LegalMarkdown text={doc.text} sectionSlug={doc.slug} />
              </section>
            ))}
          </main>

          <footer className="mt-10 pt-6 border-t border-[#1e293b] text-sm text-[#94a3b8]">
            <Link href="/" className="text-[#818cf8] hover:underline">
              Back to Home
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}
