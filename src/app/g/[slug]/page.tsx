import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import UserLinkCard from "@/components/user-link/user-link-card";
import { buildPageMetadata } from "@/lib/seo";
import { handleFromPath } from "@/lib/user-link";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = handleFromPath((await params).slug);
  if (!slug) return { robots: { index: false, follow: false } };
  return buildPageMetadata({
    title: "Join a group",
    description: "You are invited to an end-to-end encrypted group on AbabilX.",
    path: `/g/${slug}`,
    noIndex: true,
  });
}

export default async function GroupLinkPage({ params }: Props) {
  const slug = handleFromPath((await params).slug);
  if (!slug) notFound();

  const agent = (await headers()).get("user-agent") ?? "";
  return <UserLinkCard kind="group" value={slug} android={/android/i.test(agent)} />;
}
