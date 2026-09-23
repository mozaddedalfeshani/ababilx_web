"use client";

import { FaGooglePlay } from "react-icons/fa";

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
  const isHero = size === "lg";

  return (
    <div className={cn("hero-actions", className)}>
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
      <Button
        onClick={openPlayStore}
        size={size}
        variant="secondary"
        className={cn("hero-actions-btn", isHero && "hero-actions-btn-lg")}
        aria-label={labels.download}
      >
        <FaGooglePlay aria-hidden="true" className="size-[18px] shrink-0" />
        {labels.download}
      </Button>
    </div>
  );
}
