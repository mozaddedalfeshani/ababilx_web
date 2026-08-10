"use client";

import { Button } from "@/components/ui/button";
import { openPaper, openWorkspace } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { useHomeLocale } from "../shared/use-home-locale";

interface AuthActionsProps {
  size?: "sm" | "lg";
  className?: string;
}

/** Hero CTAs: Paper + Workspace */
export default function AuthActions({
  size = "lg",
  className,
}: AuthActionsProps) {
  const { copy } = useHomeLocale();
  const labels = copy.auth;

  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-3 sm:flex-row",
        className,
      )}
    >
      <Button onClick={openPaper} size={size} className="gap-2">
        {labels.paper}
      </Button>
      <Button
        onClick={openWorkspace}
        size={size}
        variant="outline"
        className="gap-2"
      >
        {labels.workspace}
      </Button>
    </div>
  );
}
