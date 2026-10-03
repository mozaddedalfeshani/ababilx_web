import { PLAY_STORE_URL } from "@/lib/seo";

/**
 * A personal message link: `https://www.ababilx.com/u/<handle>`.
 *
 * The same handle a personal QR code carries. The page behind it never asks
 * the API who the handle belongs to — the lookup needs a signed-in caller, and
 * a public page that confirmed handles would be an account enumerator.
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

/** What the app's scanner and its intent filter both read. */
export function appUrl(handle: string): string {
  return `ababilx://user?u=${encodeURIComponent(handle)}`;
}

/**
 * Chrome on Android: opens the app, or the Play Store when it is not
 * installed. A bare `ababilx://` link there fails silently instead.
 */
export function androidIntentUrl(handle: string): string {
  return (
    `intent://user?u=${encodeURIComponent(handle)}` +
    `#Intent;scheme=ababilx;package=${ANDROID_PACKAGE};` +
    `S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`
  );
}
