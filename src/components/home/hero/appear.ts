import type { CSSProperties } from "react";

export type AppearKind =
  | "scale"
  | "soft"
  | "mask"
  | "pop"
  | "btn"
  | "side"
  | "stat";

/** Entrance class + stagger delay. Resting opacity is 1, so a page whose
 *  animations never run is still fully drawn. */
export function appear(kind: AppearKind, delay: number, duration?: number) {
  const style: Record<string, string> = { "--d": `${delay}s` };
  if (duration) style.animationDuration = `${duration}s`;
  return {
    className: `vx-appear vx-appear--${kind}`,
    style: style as CSSProperties,
  };
}
