import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import SpaceInviteCard from "@/components/space-invite/space-invite-card";
import { buildPageMetadata } from "@/lib/seo";
import { inviteCodeFromPath, lookupInvite } from "@/lib/space-invite";

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const code = inviteCodeFromPath((await params).code);
  if (!code) return { robots: { index: false, follow: false } };
  const found = await lookupInvite(code);
  const name = found.state === "ok" ? found.invite.name : "";
  return buildPageMetadata({
    title: name ? `Join ${name}` : "Join a Space",
    description: name
      ? `You are invited to ${name} on AbabilX.`
      : "You are invited to a Space on AbabilX.",
    path: `/s/${code}`,
    // A code is a private way in; it must not reach a search index.
    noIndex: true,
  });
}

export default async function SpaceInvitePage({ params }: Props) {
  const code = inviteCodeFromPath((await params).code);
  if (!code) notFound();
  const found = await lookupInvite(code);
  const agent = (await headers()).get("user-agent") ?? "";
  return (
    <SpaceInviteCard
      code={code}
      android={/android/i.test(agent)}
      invite={found.state === "ok" ? found.invite : null}
      dead={found.state === "invalid"}
    />
  );
}
