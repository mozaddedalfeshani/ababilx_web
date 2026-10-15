"use client";

import { useHomeLocale } from "../shared/use-home-locale";
import { appear } from "./appear";
import { AvatarsIcon, DownloadTileIcon, DualPillIcon } from "./hero-icons";

const ICONS = [DualPillIcon, DownloadTileIcon, AvatarsIcon];
const DELAYS = [1.12, 1.28, 1.44];

export default function HeroStats() {
  const { copy } = useHomeLocale();

  return (
    <footer className="vx-stats">
      {copy.stats.map((label, i) => {
        const Icon = ICONS[i];
        const a = appear("stat", DELAYS[i]);
        return (
          <span key={label} style={a.style} className={`vx-stat ${a.className}`}>
            <Icon />
            {label}
          </span>
        );
      })}
    </footer>
  );
}
