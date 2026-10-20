import { PLAY_STORE_URL } from "@/lib/seo";

/**
 * Shared links: `https://www.ababilx.com/u/<handle>` opens a chat with a
 * person, `/g/<slug>` joins a group through its public link. A group slug
 * follows the handle rules, so one check serves both.
 *
 * The pages behind them never ask the API what the value belongs to — both
 * lookups need a signed-in caller, and a public page that confirmed handles
 * or group names would be an enumerator.
 */
export const ANDROID_PACKAGE = "com.ababilx.app";

const MIN_LENGTH = 3;
const MAX_LENGTH = 32;
const SHAPE = /^[a-z0-9]+(?:[._-][a-z0-9]+)*$/;

/** The stored form of a handle from the URL, or null when it is not one. */
export function handleFromPath(raw: string): string | null {
  let text: string;
  try {
    text = decodeURIComponent(raw);
  } catch {
    return null;
  }
  const handle = text.trim().toLowerCase().replace(/^@/, "");
  if (handle.length < MIN_LENGTH || handle.length > MAX_LENGTH) return null;
  return SHAPE.test(handle) ? handle : null;
}

const EMAIL = /^[^\s@/]+@[^\s@/]+\.[^\s@/]+$/;
const PHONE = /^\+[0-9]{8,15}$/;

/**
 * What a person's `/u/...` link carries: their handle, or — shared from the
 * app for someone with no public handle — their email or phone number.
 */
export function userRefFromPath(
  raw: string,
): { value: string; contact: boolean } | null {
  let text: string;
  try {
    text = decodeURIComponent(raw).trim().toLowerCase();
  } catch {
    return null;
  }
  if (text.length <= 254 && (EMAIL.test(text) || PHONE.test(text))) {
    return { value: text, contact: true };
  }
  const handle = handleFromPath(text);
  return handle ? { value: handle, contact: false } : null;
}

export type LinkKind = "user" | "group";

/** The query key each kind carries: `ababilx://user?u=` / `ababilx://group?g=`. */
const PARAM: Record<LinkKind, string> = { user: "u", group: "g" };

/** What the app's scanner and its intent filter both read. */
export function appUrl(kind: LinkKind, value: string): string {
  return `ababilx://${kind}?${PARAM[kind]}=${encodeURIComponent(value)}`;
}

/**
 * Chrome on Android: opens the app, or the Play Store when it is not
 * installed. A bare `ababilx://` link there fails silently instead.
 */
export function androidIntentUrl(kind: LinkKind, value: string): string {
  return (
    `intent://${kind}?${PARAM[kind]}=${encodeURIComponent(value)}` +
    `#Intent;scheme=ababilx;package=${ANDROID_PACKAGE};` +
    `S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`
  );
}
