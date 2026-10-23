/* eslint-disable react/no-unescaped-entities -- legal prose */
import type { Metadata } from "next";
import DeletionGuide, { type GuideSection } from "@/components/legal/deletion-guide";
import { buildPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Delete Your AbabilX Account",
  description:
    "How to permanently delete your AbabilX account, what is removed, and what stays on other people's phones.",
  path: "/account-deletion",
});

function AccountDeletionStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Account Deletion", item: "/account-deletion" },
      ]),
      {
        "@type": "HowTo",
        name: "How to Delete Your AbabilX Account",
        description: "Official guide to permanently deleting your AbabilX account and data.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Send a request",
            text: "Email info@ababilx.com with the subject 'Account Deletion Request' and your username or account email.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Confirm it is you",
            text: "We confirm the request from inside your account before deleting anything.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Deleted",
            text: "Your account and its data are permanently deleted within 30 days, usually much sooner.",
          },
        ],
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

const SECTIONS: GuideSection[] = [
  {
    title: "What is deleted",
    items: [
      <><strong>Your profile:</strong> name, username, picture, email and phone number if you added them, and your password hash.</>,
      <><strong>Your keys:</strong> your account key and published message key. Nothing sent to you can be opened afterwards.</>,
      <><strong>Waiting messages and files:</strong> anything still on our servers waiting for delivery, scheduled messages, and their files.</>,
      <><strong>Your devices:</strong> every signed-in phone, computer and browser is signed out, and push tokens are removed.</>,
      <><strong>Your settings:</strong> Privacy Mode, discovery, connections and blocks.</>,
      <><strong>Workspaces you own:</strong> deleted with their Board and Wall for every member. Hand ownership to someone else first if the team should continue.</>,
    ],
  },
  {
    title: "What stays",
    items: [
      <><strong>Messages already delivered</strong> live on the phones of the people you sent them to. We never kept a copy, so we cannot reach them.</>,
      <><strong>Payment records</strong> for workspace Plus are kept as long as tax law requires.</>,
      <><strong>Your local backup</strong> is a file on your own phone. Delete it from the folder yourself if you want it gone.</>,
    ],
  },
  {
    title: "Unused accounts delete themselves",
    intro: "An account nobody uses for 30 days is deleted automatically, the same way as above.",
    items: [
      <>We remind you first: by email on days 7, 14, 15, 23, 27 and 29, or by notification if your account has no email.</>,
      <>Opening AbabilX at any time before day 30 resets the clock.</>,
    ],
  },
  {
    title: "Good to know",
    items: [
      <>Deletion is permanent. A new account made later starts empty and has no link to the old one.</>,
      <>Accounts made with <strong>Start New Chat</strong> have no email. Signing out of one deletes its key from the phone, and the unused account is then deleted after 30 days.</>,
    ],
  },
];

export default function AccountDeletionPage() {
  return (
    <>
      <AccountDeletionStructuredData />
      <DeletionGuide
        title="Delete your account"
        subtitle="Permanently delete your AbabilX account and the data that belongs to it."
        highlight={{
          title: "How to request deletion",
          body: (
            <>
              Email{" "}
              <a href="mailto:info@ababilx.com" className="text-[#6366f1] hover:underline">
                info@ababilx.com
              </a>{" "}
              with the subject <strong>"Account Deletion Request"</strong> and your username or
              account email. We confirm the request is really from you, then delete the account
              within 30 days — usually much sooner.
            </>
          ),
        }}
        sections={SECTIONS}
        updated="October 23, 2026"
      />
    </>
  );
}
