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

/** Hero CTAs: Paper + Workspace + Play Store download (responsive) */
export default function AuthActions({
  size = "lg",
  className,
}: AuthActionsProps) {
  const { copy } = useHomeLocale();
  const labels = copy.auth;
  const isHero = size === "lg";

  return (
    <div className={cn("hero-actions", className)}>
      <div className="hero-actions-row">
        <Button
          onClick={openPaper}
          size={size}
          className={cn("hero-actions-btn", isHero && "hero-actions-btn-lg")}
        >
          {labels.paper}
        </Button>
        <Button
          onClick={openWorkspace}
          size={size}
          variant="outline"
          className={cn("hero-actions-btn", isHero && "hero-actions-btn-lg")}
        >
          {labels.workspace}
        </Button>
      </div>

      <Button
        onClick={openPlayStore}
        size={size}
        variant="secondary"
        className={cn(
          "hero-actions-download whitespace-normal",
          isHero && "hero-actions-download-lg",
        )}
        aria-label={labels.download}
      >
        <Download01Icon size={18} aria-hidden="true" className="shrink-0" />
        <span className="hero-actions-download-label">
          <span className="hero-actions-download-short">
            {labels.downloadShort}
          </span>
          <span className="hero-actions-download-full">{labels.download}</span>
        </span>
      </Button>
    </div>
  );
}
