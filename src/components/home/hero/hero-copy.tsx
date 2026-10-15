"use client";

import { ArrowUpRight01Icon } from "hugeicons-react";

import { WEB_CHAT_URL, WORKSPACE_URL } from "@/lib/seo";
import { useHomeLocale } from "../shared/use-home-locale";
import { appear } from "./appear";
import { SparkleIcon } from "./hero-icons";

function motion(kind: Parameters<typeof appear>[0], delay: number, extra: string, duration?: number) {
  const a = appear(kind, delay, duration);
  return { style: a.style, className: `${extra} ${a.className}` };
}

export default function HeroCopy() {
  const { copy } = useHomeLocale();
  const { hero } = copy;

  return (
    <main className="vx-hero" id="top">
      <div className="vx-hero-copy">
        <span {...motion("pop", 0.22, "vx-badge")}>
          <SparkleIcon />
          {hero.badge}
        </span>

        <h1 className="vx-headline">
          <span className="vx-headline-line">
            <span {...motion("mask", 0.42, "vx-headline-inner")}>{hero.headline}</span>
          </span>
          <span className="vx-headline-line">
            <span {...motion("mask", 0.62, "vx-headline-inner")}>
              <em>{hero.headlineAccent}</em>
            </span>
          </span>
        </h1>

        <p {...motion("soft", 0.82, "vx-lede", 1.25)}>{hero.tagline}</p>

        <div className="vx-hero-actions">
          <a
            href={WEB_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            {...motion("btn", 0.96, "vx-btn vx-btn-solid vx-hero-btn")}
          >
            {hero.chatCta}
            <ArrowUpRight01Icon size={16} aria-hidden="true" className="vx-btn-icon" />
          </a>
          <a
            href={WORKSPACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            {...motion("side", 1.1, "vx-btn vx-btn-ghost vx-hero-btn")}
          >
            {hero.workspaceCta}
            <ArrowUpRight01Icon size={16} aria-hidden="true" className="vx-btn-icon" />
          </a>
        </div>
      </div>
    </main>
  );
}
