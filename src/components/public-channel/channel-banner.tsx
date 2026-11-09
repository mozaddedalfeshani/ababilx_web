/* eslint-disable @next/next/no-img-element -- pictures come from our CDN, checked in public-channel.ts */
import type { PublicChannel } from "@/lib/public-channel";

/** One hue per channel, so a channel without a banner still gets its own. */
function hueOf(seed: string): number {
  let h = 7;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) % 360;
  return h;
}

/** Banner across the top, the channel's picture sitting on its lower edge. */
export default function ChannelBanner({ channel }: { channel: PublicChannel }) {
  const hue = hueOf(channel.handle || channel.name);
  const initial = [...channel.name.trim()][0]?.toUpperCase() ?? "#";
  return (
    <div className="relative">
      {channel.bannerUrl ? (
        <img
          src={channel.bannerUrl}
          alt=""
          referrerPolicy="no-referrer"
          className="aspect-[3/1] w-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="aspect-[3/1] w-full"
          style={{
            background: `linear-gradient(135deg, hsl(${hue} 55% 58%), hsl(${(hue + 48) % 360} 55% 42%))`,
          }}
        />
      )}
      <div className="absolute bottom-0 left-1/2 size-24 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-4 border-background bg-muted">
        {channel.avatarUrl ? (
          <img
            src={channel.avatarUrl}
            alt=""
            referrerPolicy="no-referrer"
            className="size-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-full items-center justify-center text-3xl font-bold text-white"
            style={{ background: `hsl(${hue} 50% 45%)` }}
          >
            {initial}
          </span>
        )}
      </div>
    </div>
  );
}
