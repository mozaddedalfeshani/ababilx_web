/**
 * A public channel behind `https://www.ababilx.com/g/<handle>`. Public
 * channels are already findable by anyone in the app, so the page may show
 * the same card: name, handle, picture, banner, members, description, tick.
 * A PRIVATE group's link stays the generic invite — the server answers 404
 * for it, exactly as for an unknown handle.
 */

export interface PublicChannel {
  name: string;
  handle: string;
  avatarUrl: string;
  bannerUrl: string;
  description: string;
  memberCount: number;
  asksToJoin: boolean;
  verified: boolean;
  official: boolean;
}

/**
 * Only a picture on our own storage (`https`, `ababilx.com` or a subdomain,
 * default port, no user info). The page is opened by people who are not in
 * the channel, from a link anyone can post: a foreign host would be a
 * tracking pixel.
 */
export function channelPicture(url: unknown): string {
  if (typeof url !== "string" || !url) return "";
  try {
    const u = new URL(url);
    if (u.protocol !== "https:" || u.username || u.password || u.port) return "";
    const host = u.hostname.toLowerCase();
    return host === "ababilx.com" || host.endsWith(".ababilx.com") ? url : "";
  } catch {
    return "";
  }
}

const text = (v: unknown) => (typeof v === "string" ? v : "");

/** The server's answer, or null when it is not the shape we expect. */
export function parseChannel(body: unknown): PublicChannel | null {
  const data = (body as { data?: Record<string, unknown> } | null)?.data;
  const g = data?.group as Record<string, unknown> | undefined;
  if (!g || !text(g.name)) return null;
  const count = Number(g.member_count);
  return {
    name: text(g.name),
    handle: text(g.handle),
    avatarUrl: channelPicture(g.avatar_url),
    bannerUrl: channelPicture(g.banner_url),
    description: text(g.description),
    memberCount: Number.isFinite(count) ? count : 0,
    asksToJoin: g.join_mode === "request",
    verified: g.is_verified === true,
    official: g.is_official === true,
  };
}

/** Gold for AbabilX's own official channel, blue for a verified one. */
export function tickKind(c: { official: boolean; verified: boolean }) {
  if (c.official) return "gold" as const;
  if (c.verified) return "blue" as const;
  return null;
}

export type ChannelLookup =
  | { state: "ok"; channel: PublicChannel }
  /** Not a public channel (private group, unknown, paused) or no server. */
  | { state: "none" };

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.ababilx.com";

/** `GET /v1/api/public-groups/link/:handle` — public, no sign-in. */
export async function lookupChannel(handle: string): Promise<ChannelLookup> {
  try {
    const res = await fetch(
      `${API_URL}/v1/api/public-groups/link/${encodeURIComponent(handle)}`,
      { next: { revalidate: 300 } },
    );
    if (!res.ok) return { state: "none" };
    const channel = parseChannel(await res.json());
    return channel ? { state: "ok", channel } : { state: "none" };
  } catch {
    return { state: "none" };
  }
}

export function memberLine(n: number): string {
  return `${n.toLocaleString("en-US")} ${n === 1 ? "member" : "members"}`;
}
