"use client";

import { useRef } from "react";

import { useHomeLocale } from "../shared/use-home-locale";
import { heroSans, heroSerif } from "./fonts";
import HeroCopy from "./hero-copy";
import HeroHeader from "./hero-header";
import HeroStats from "./hero-stats";
import { useAppear } from "./use-appear";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/buttons.css";
import "./styles/hero.css";
import "./styles/motion.css";
import "./styles/responsive.css";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4";

/** Single-viewport landing: video backdrop, header, bottom-centred hero
 *  copy and three facts along the bottom edge. */
export default function HeroLanding() {
  const root = useRef<HTMLDivElement>(null);
  const { locale } = useHomeLocale();
  useAppear(root);

  return (
    <div
      ref={root}
      lang={locale === "bn" ? "bn" : "en"}
      className={`vx ${heroSans.variable} ${heroSerif.variable}`}
    >
      <div className="vx-grain" aria-hidden="true" />
      <video
        className="vx-photo"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="vx-page">
        <HeroHeader />
        <HeroCopy />
        <HeroStats />
      </div>
    </div>
  );
}
