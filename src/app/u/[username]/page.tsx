import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import UserLinkCard from "@/components/user-link/user-link-card";
import { buildPageMetadata } from "@/lib/seo";
import { handleFromPath } from "@/lib/user-link";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const handle = handleFromPath((await params).username);
  if (!handle) return { robots: { index: false, follow: false } };
  return buildPageMetadata({
    title: `Message @${handle}`,
    description: `Start an end-to-end encrypted chat with @${handle} on AbabilX.`,
    path: `/u/${handle}`,
    // A handle is public, but a search index of them is a directory nobody
    // opted into.
    noIndex: true,
  });
}

export default async function UserLinkPage({ params }: Props) {
  const handle = handleFromPath((await params).username);
  if (!handle) notFound();

  const agent = (await headers()).get("user-agent") ?? "";
  return <UserLinkCard handle={handle} android={/android/i.test(agent)} />;
}
