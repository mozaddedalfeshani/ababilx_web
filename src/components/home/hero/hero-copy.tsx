"use client";

import { QrCodeIcon } from "hugeicons-react";
import { FaGooglePlay } from "react-icons/fa";

import { PLAY_STORE_URL, WEB_CHAT_URL, WORKSPACE_URL } from "@/lib/seo";
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
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            {...motion("btn", 0.96, "vx-btn vx-btn-solid vx-hero-btn")}
          >
            <FaGooglePlay aria-hidden="true" className="vx-btn-icon" />
            {hero.androidCta}
          </a>
          <a
            href={WEB_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            {...motion("side", 1.1, "vx-btn vx-btn-ghost vx-hero-btn")}
          >
            <QrCodeIcon size={16} aria-hidden="true" className="vx-btn-icon" />
            {hero.webChatCta}
          </a>
          <a
            href={WORKSPACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            {...motion("side", 1.22, "vx-btn vx-btn-ghost vx-hero-btn")}
          >
            {hero.secondaryCta}
          </a>
        </div>

        <p {...motion("soft", 1.3, "vx-hint")}>{hero.webChatHint}</p>
      </div>
    </main>
  );
}
