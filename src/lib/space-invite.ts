/**
 * A Space invite: `https://www.ababilx.com/s/<code>`. Unlike a handle, a code
 * is case-sensitive and random, so holding one is what lets you see the Space
 * and who invited you.
 */
const CODE = /^[A-Za-z0-9_-]{4,64}$/;

export function inviteCodeFromPath(raw: string): string | null {
  let text: string;
  try {
    text = decodeURIComponent(raw).trim();
  } catch {
    return null;
  }
  return CODE.test(text) ? text : null;
}

/** Only an https picture is drawn; the rest of the URL came from a database. */
export function safePicture(url: unknown): string {
  if (typeof url !== "string") return "";
  try {
    return new URL(url).protocol === "https:" ? url : "";
  } catch {
    return "";
  }
}

export interface SpaceInvitePreview {
  name: string;
  iconUrl: string;
  bannerUrl: string;
  description: string;
  memberCount: number;
  inviter: { name: string; username: string; avatarUrl: string } | null;
}

const text = (v: unknown) => (typeof v === "string" ? v : "");

/** The server's answer, or null when it is not the shape we expect. */
export function parseInvitePreview(body: unknown): SpaceInvitePreview | null {
  const data = (body as { data?: Record<string, unknown> } | null)?.data;
  const space = data?.space as Record<string, unknown> | undefined;
  if (!space || !text(space.name)) return null;
  const who = data?.inviter as Record<string, unknown> | undefined;
  const count = Number(space.member_count);
  return {
    name: text(space.name),
    iconUrl: safePicture(space.icon_url),
    bannerUrl: safePicture(space.banner_url),
    description: text(space.description),
    memberCount: Number.isFinite(count) ? count : 0,
    inviter:
      who && text(who.username)
        ? {
            name: text(who.name),
            username: text(who.username),
            avatarUrl: safePicture(who.avatar_url),
          }
        : null,
  };
}

export type InviteLookup =
  | { state: "ok"; invite: SpaceInvitePreview }
  | { state: "invalid" }
  /** The server could not be asked: the link may still be good. */
  | { state: "unknown" };

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.ababilx.com";

export async function lookupInvite(code: string): Promise<InviteLookup> {
  try {
    const res = await fetch(`${API_URL}/v1/api/spaces/invites/${code}`, {
      next: { revalidate: 60 },
    });
    if (res.status === 404) return { state: "invalid" };
    if (!res.ok) return { state: "unknown" };
    const invite = parseInvitePreview(await res.json());
    return invite ? { state: "ok", invite } : { state: "unknown" };
  } catch {
    return { state: "unknown" };
  }
}
