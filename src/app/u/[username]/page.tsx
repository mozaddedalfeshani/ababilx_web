import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import UserLinkCard from "@/components/user-link/user-link-card";
import { buildPageMetadata } from "@/lib/seo";
import { userRefFromPath } from "@/lib/user-link";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ref = userRefFromPath((await params).username);
  if (!ref) return { robots: { index: false, follow: false } };
  // An email or a number is never put into the page's title or preview.
  const who = ref.contact ? "this person" : `@${ref.value}`;
  return buildPageMetadata({
    title: ref.contact ? "Message on AbabilX" : `Message @${ref.value}`,
    description: `Start an end-to-end encrypted chat with ${who} on AbabilX.`,
    path: `/u/${encodeURIComponent(ref.value)}`,
    // A handle is public, but a search index of them is a directory nobody
    // opted into.
    noIndex: true,
  });
}

export default async function UserLinkPage({ params }: Props) {
  const ref = userRefFromPath((await params).username);
  if (!ref) notFound();

  const agent = (await headers()).get("user-agent") ?? "";
  return (
    <UserLinkCard
      kind="user"
      value={ref.value}
      contact={ref.contact}
      android={/android/i.test(agent)}
    />
  );
}
