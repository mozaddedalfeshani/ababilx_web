"use client";

import { Download01Icon } from "hugeicons-react";

import { Button } from "@/components/ui/button";
import { openPaper, openPlayStore, openWorkspace } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { useHomeLocale } from "../shared/use-home-locale";

interface AuthActionsProps {
  size?: "sm" | "lg";
  className?: string;
}

/** Hero CTAs: Paper + Workspace + Play Store download */
export default function AuthActions({
  size = "lg",
  className,
}: AuthActionsProps) {
  const { copy } = useHomeLocale();
  const labels = copy.auth;

  const heroSize =
    size === "lg"
      ? "h-11 gap-2 px-6 text-base sm:h-12 sm:px-7"
      : undefined;

  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap",
        className,
      )}
    >
      <Button onClick={openPaper} size={size} className={cn("gap-2", heroSize)}>
        {labels.paper}
      </Button>
      <Button
        onClick={openWorkspace}
        size={size}
        variant="outline"
        className={cn("gap-2", heroSize)}
      >
        {labels.workspace}
      </Button>
      <Button
        onClick={openPlayStore}
        size={size}
        variant="secondary"
        className={cn(
          "gap-2 whitespace-normal text-left leading-snug h-auto min-h-11 py-2.5 sm:min-h-12",
          size === "lg" ? "px-6 text-base sm:px-7" : undefined,
        )}
        aria-label={labels.download}
      >
        <Download01Icon size={18} aria-hidden="true" className="shrink-0" />
        {labels.download}
      </Button>
    </div>
  );
}
