import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import { PLAY_STORE_URL, SITE_NAME } from "@/lib/seo";
import { androidIntentUrl, appUrl } from "@/lib/user-link";
import { cn } from "@/lib/utils";

interface UserLinkCardProps {
  handle: string;
  android: boolean;
}

/** The landing card behind a shared `/u/<handle>` link. */
export default function UserLinkCard({ handle, android }: UserLinkCardProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
        <Link href="/" aria-label={SITE_NAME} className="inline-block">
          <Image src="/logo.png" alt="" width={56} height={56} priority />
        </Link>

        <h1 className="mt-5 text-2xl font-bold break-all">@{handle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Message @{handle} on {SITE_NAME}. End-to-end encrypted — not even{" "}
          {SITE_NAME} can read your chats.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <a
            href={android ? androidIntentUrl(handle) : appUrl(handle)}
            className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
          >
            Open in {SITE_NAME}
          </a>
          <a
            href={PLAY_STORE_URL}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 w-full",
            )}
          >
            <FaGooglePlay aria-hidden="true" className="size-[16px]" />
            Get the app
          </a>
        </div>

        {!android && (
          <p className="mt-6 text-xs text-muted-foreground">
            On a computer? Open {SITE_NAME} on your phone and search for @
            {handle}.
          </p>
        )}
      </div>
    </main>
  );
}
