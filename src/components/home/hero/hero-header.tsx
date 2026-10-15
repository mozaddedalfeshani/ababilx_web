"use client";

import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

import { PLAY_STORE_URL } from "@/lib/seo";
import { useHomeLocale } from "../shared/use-home-locale";
import { appear } from "./appear";

export default function HeroHeader() {
  const { copy } = useHomeLocale();
  const logo = appear("scale", 0.08);
  const cta = appear("scale", 0.34);

  return (
    <header className="vx-header">
      <a href="#top" aria-label="AbabilX" {...logo} className={`vx-logo ${logo.className}`}>
        <Image src="/logo.png" alt="" width={22} height={22} className="vx-logo-mark" priority />
        <span>
          Ababil<span className="vx-logo-suffix">X</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={cta.style}
        className={`vx-btn vx-btn-solid vx-header-cta ${cta.className}`}
      >
        <FaGooglePlay aria-hidden="true" className="vx-btn-icon" />
        {copy.auth.download}
      </a>
    </header>
  );
}
