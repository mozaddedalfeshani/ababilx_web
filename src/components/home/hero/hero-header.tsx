"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import { GITHUB_ORG_URL } from "@/lib/seo";
import { useHomeLocale } from "../shared/use-home-locale";
import { appear } from "./appear";

export default function HeroHeader() {
  const { copy } = useHomeLocale();
  const logo = appear("scale", 0.08);
  const cta = appear("scale", 0.34);

  return (
    <header className="vx-header">
      <a href="#top" aria-label="AbabilX" {...logo} className={`vx-logo ${logo.className}`}>
        <Image src="/company-icon.png" alt="" width={22} height={22} className="vx-logo-mark" priority />
        <span>
          Ababil<span className="vx-logo-suffix">X</span>
        </span>
      </a>

      <a
        href={GITHUB_ORG_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={cta.style}
        className={`vx-btn vx-btn-solid vx-header-cta ${cta.className}`}
      >
        <FaGithub aria-hidden="true" className="vx-btn-icon" />
        {copy.auth.github}
      </a>
    </header>
  );
}
