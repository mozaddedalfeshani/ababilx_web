"use client";

import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

import {
  GITHUB_ORG_URL,
  PAPER_URL,
  PLAY_STORE_URL,
  WEB_CHAT_URL,
  WORKSPACE_URL,
} from "@/lib/seo";
import { useHomeLocale } from "../shared/use-home-locale";
import { appear, type AppearKind } from "./appear";

type Props = { menuOpen: boolean; onToggle: () => void; onNavigate: () => void };

const NAV_MOTION: [AppearKind, number][] = [
  ["scale", 0.16],
  ["soft", 0.28],
  ["scale", 0.4],
  ["soft", 0.52],
];

export default function HeroHeader({ menuOpen, onToggle, onNavigate }: Props) {
  const { copy } = useHomeLocale();
  const { auth } = copy;
  const links = [
    { label: auth.paper, href: PAPER_URL },
    { label: auth.webChat, href: WEB_CHAT_URL },
    { label: auth.workspace, href: WORKSPACE_URL },
    { label: auth.github, href: GITHUB_ORG_URL },
  ];
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

      <nav id="vx-site-nav" className="vx-nav" aria-label="Primary">
        {links.map((link, i) => {
          const motion = appear(...NAV_MOTION[i]);
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
              style={motion.style}
              className={`vx-nav-link ${motion.className}`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={cta.style}
        className={`vx-btn vx-btn-solid vx-header-cta ${cta.className}`}
      >
        <FaGooglePlay aria-hidden="true" className="vx-btn-icon" />
        {auth.download}
      </a>

      <button
        type="button"
        style={cta.style}
        className={`vx-burger ${cta.className}`}
        aria-controls="vx-site-nav"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? auth.closeMenu : auth.openMenu}
        onClick={onToggle}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
