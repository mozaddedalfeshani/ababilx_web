/* eslint-disable react/no-unescaped-entities -- legal prose */
import type { Metadata } from "next";
import DeletionGuide, { type GuideSection } from "@/components/legal/deletion-guide";
import { buildPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Delete Your Data on AbabilX",
  description:
    "Delete chats, files, your email or phone number, and signed-in devices on AbabilX while keeping your account.",
  path: "/data-deletion",
});

function DataDeletionStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Data Deletion", item: "/data-deletion" },
      ]),
      {
        "@type": "HowTo",
        name: "How to Delete Data from AbabilX",
        description: "Delete chats, files and personal details from AbabilX while keeping your account.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Delete in the app",
            text: "Delete a chat from its details screen, and remove your phone number in Settings.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Ask us for anything else",
            text: "Email info@ababilx.com with the subject 'Data Deletion Request'.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Done",
            text: "We confirm deletion within 30 days.",
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
    title: "Delete it yourself, in the app",
    items: [
      <><strong>A chat:</strong> open the chat, tap its name, then <strong>Delete chat</strong>. It is wiped from your phone, including downloaded files. Leaving a group works the same way.</>,
      <><strong>One message:</strong> long-press it and delete it — for you, or for everyone if you sent it.</>,
      <><strong>Phone number:</strong> remove it in Settings → Discovery. It is optional.</>,
      <><strong>Signed-in devices:</strong> sign out any phone, computer or browser from Linked devices.</>,
      <><strong>Files on your phone:</strong> Settings → Data and storage → Manage storage clears media by chat or by age.</>,
      <><strong>Local backup:</strong> turn it off in Settings and choose to delete the copy on your phone.</>,
    ],
  },
  {
    title: "Deleted for you, automatically",
    items: [
      <><strong>Messages and files</strong> are deleted from our servers as soon as every recipient's device has them, and after 30 days at most.</>,
      <><strong>Timed and view-once photos</strong> are deleted from our storage and from both phones when the timer ends.</>,
      <><strong>Ghost Chat and Local Share</strong> are never stored by us, so there is nothing to delete.</>,
      <><strong>Unused linked devices</strong> are signed out after 14 days.</>,
    ],
  },
  {
    title: "Anything else",
    intro: "For data you cannot delete in the app, email us with the subject \"Data Deletion Request\" and say what you want removed. We confirm it within 30 days.",
    items: [
      <>Workspace Board cards and Wall posts can be deleted by their author or by the workspace owner.</>,
      <>To delete everything, see <a href="/account-deletion" className="text-[#6366f1] hover:underline">Delete your account</a>.</>,
    ],
  },
];

export default function DataDeletionPage() {
  return (
    <>
      <DataDeletionStructuredData />
      <DeletionGuide
        title="Delete your data"
        subtitle="Remove chats, files and personal details while keeping your account."
        highlight={{
          title: "There is very little to delete",
          body: (
            <>
              Your messages are end-to-end encrypted and deleted from our servers once they are
              delivered. Email and phone number are optional. We never share your data with anyone.
              Most of what remains, you can delete yourself in the app.
            </>
          ),
        }}
        sections={SECTIONS}
        updated="October 23, 2026"
      />
    </>
  );
}
