import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import ChannelLinkCard from "@/components/public-channel/channel-link-card";
import UserLinkCard from "@/components/user-link/user-link-card";
import { lookupChannel } from "@/lib/public-channel";
import { buildPageMetadata } from "@/lib/seo";
import { handleFromPath } from "@/lib/user-link";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = handleFromPath((await params).slug);
  if (!slug) return { robots: { index: false, follow: false } };
  const found = await lookupChannel(slug);
  if (found.state !== "ok") {
    return buildPageMetadata({
      title: "Join a group",
      description: "You are invited to an end-to-end encrypted group on AbabilX.",
      path: `/g/${slug}`,
      noIndex: true,
    });
  }
  const { channel } = found;
  const base = buildPageMetadata({
    title: channel.name,
    description:
      channel.description || `Join ${channel.name} on AbabilX — ${channel.memberCount} members.`,
    path: `/g/${slug}`,
    noIndex: true,
  });
  // What another app's link preview draws: the channel's own banner or
  // picture, never the site's generic card.
  const picture = channel.bannerUrl || channel.avatarUrl;
  if (!picture) return base;
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ url: picture, alt: channel.name }] },
    twitter: { ...base.twitter, images: [picture] },
  };
}

export default async function GroupLinkPage({ params }: Props) {
  const slug = handleFromPath((await params).slug);
  if (!slug) notFound();

  const android = /android/i.test((await headers()).get("user-agent") ?? "");
  const found = await lookupChannel(slug);
  if (found.state === "ok") {
    return <ChannelLinkCard handle={slug} android={android} channel={found.channel} />;
  }
  return <UserLinkCard kind="group" value={slug} android={android} />;
}
