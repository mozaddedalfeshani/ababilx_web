/* eslint-disable @next/next/no-img-element -- pictures come from the CDN, whatever host it is */
import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import { PLAY_STORE_URL, SITE_NAME } from "@/lib/seo";
import type { SpaceInvitePreview } from "@/lib/space-invite";
import { androidIntentUrl, appUrl, type LinkKind } from "@/lib/user-link";
import { cn } from "@/lib/utils";

interface Props {
  code: string;
  android: boolean;
  /** Null when the server could not be asked, or the code is dead. */
  invite: SpaceInvitePreview | null;
  dead: boolean;
}

/** The landing card behind a `/s/<code>` invite. Nothing joins from here. */
export default function SpaceInviteCard({ code, android, invite, dead }: Props) {
  const open = (kind: LinkKind, value: string) =>
    android ? androidIntentUrl(kind, value) : appUrl(kind, value);
  const inviter = invite?.inviter ?? null;
  const count = invite?.memberCount ?? 0;
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-background text-center shadow-sm">
        {invite?.bannerUrl ? (
          <img
            src={invite.bannerUrl}
            alt=""
            referrerPolicy="no-referrer"
            className="aspect-[3/1] w-full object-cover"
          />
        ) : null}
        <div className="p-8">
          {invite?.iconUrl ? (
            <img
              src={invite.iconUrl}
              alt=""
              referrerPolicy="no-referrer"
              className="mx-auto size-20 rounded-2xl object-cover"
            />
          ) : (
            <Link href="/" aria-label={SITE_NAME} className="inline-block">
              <Image src="/logo.png" alt="" width={56} height={56} priority />
            </Link>
          )}

          <h1 className="mt-5 text-2xl font-bold break-words">
            {dead ? "This invite no longer works" : invite?.name || "Join a Space"}
          </h1>

          {dead ? (
            <p className="mt-2 text-sm text-muted-foreground">
              It expired or was turned off. Ask for a new link.
            </p>
          ) : (
            <>
              <p className="mt-2 text-sm text-muted-foreground">
                {inviter
                  ? `${inviter.name || `@${inviter.username}`} invited you to this Space on ${SITE_NAME}.`
                  : `You are invited to a Space on ${SITE_NAME}.`}
              </p>
              {invite ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {count} {count === 1 ? "member" : "members"}
                </p>
              ) : null}
              {invite?.description ? (
                <p className="mt-3 line-clamp-4 text-sm break-words">{invite.description}</p>
              ) : null}
            </>
          )}

          <div className="mt-7 flex flex-col gap-3">
            {dead ? null : (
              <a
                href={open("space", code)}
                className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
              >
                Join Space
              </a>
            )}
            {!dead && inviter ? (
              <a
                href={open("user", inviter.username)}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 w-full",
                )}
              >
                Direct message
              </a>
            ) : null}
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

          {!android && !dead ? (
            <p className="mt-6 text-xs text-muted-foreground">
              On a computer? Open this link on a phone that has {SITE_NAME}.
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
