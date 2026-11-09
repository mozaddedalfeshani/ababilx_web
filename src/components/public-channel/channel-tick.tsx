import { CheckmarkBadge01Icon } from "hugeicons-react";

/** Gold = AbabilX's own official channel; blue = verified by AbabilX. */
export default function ChannelTick({ kind }: { kind: "gold" | "blue" }) {
  const gold = kind === "gold";
  return (
    <CheckmarkBadge01Icon
      aria-label={gold ? "Official AbabilX channel" : "Verified"}
      role="img"
      className="size-6 shrink-0"
      style={{ color: gold ? "#E2A20F" : "#3B82F6" }}
    />
  );
}
