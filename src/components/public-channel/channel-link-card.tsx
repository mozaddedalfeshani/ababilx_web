import { FaGooglePlay } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import { PLAY_STORE_URL, SITE_NAME } from "@/lib/seo";
import { memberLine, tickKind, type PublicChannel } from "@/lib/public-channel";
import { androidIntentUrl, appUrl } from "@/lib/user-link";
import { cn } from "@/lib/utils";

import ChannelBanner from "./channel-banner";
import ChannelTick from "./channel-tick";

interface Props {
  handle: string;
  android: boolean;
  channel: PublicChannel;
}

/** The landing card behind a public channel's `/g/<handle>`. Nothing joins
 * from here: the button opens the app, whose sheet asks first. */
export default function ChannelLinkCard({ handle, android, channel }: Props) {
  const tick = tickKind(channel);
  const open = android ? androidIntentUrl("group", handle) : appUrl("group", handle);
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-background text-center shadow-sm">
        <ChannelBanner channel={channel} />
        <div className="px-8 pt-16 pb-8">
          <h1 className="flex items-center justify-center gap-1.5 text-2xl font-bold">
            <span className="min-w-0 break-words">{channel.name}</span>
            {tick ? <ChannelTick kind={tick} /> : null}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {[channel.handle && `@${channel.handle}`, memberLine(channel.memberCount)]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {channel.description ? (
            <p className="mt-4 line-clamp-5 text-sm break-words whitespace-pre-line">
              {channel.description}
            </p>
          ) : null}
          <p className="mt-4 text-xs text-muted-foreground">
            Public channel on {SITE_NAME} · not end-to-end encrypted.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <a href={open} className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}>
              {channel.asksToJoin ? "Request to join" : "Join channel"}
            </a>
            <a
              href={PLAY_STORE_URL}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-11 w-full")}
            >
              <FaGooglePlay aria-hidden="true" className="size-[16px]" />
              Get the app
            </a>
          </div>

          {!android ? (
            <p className="mt-6 text-xs text-muted-foreground">
              On a computer? Open this link on a phone that has {SITE_NAME}.
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
