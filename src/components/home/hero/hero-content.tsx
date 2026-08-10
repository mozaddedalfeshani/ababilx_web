"use client";

import { SparklesIcon } from "hugeicons-react";

import AuthActions from "../navbar/auth-actions";
import { useHomeLocale } from "../shared/use-home-locale";

export default function HeroContent() {
  const { copy } = useHomeLocale();
  const { hero } = copy;

  return (
    <div className="relative z-10 w-full text-left">
      <span className="mb-[clamp(1rem,2.5vw,1.5rem)] inline-flex items-center gap-1.5 rounded-full border border-[#e11d48]/20 bg-[#e11d48]/[0.07] px-[clamp(0.75rem,1.5vw,0.875rem)] py-[clamp(0.25rem,0.8vw,0.375rem)] text-[clamp(11px,1.05vw,13px)] font-medium tracking-tight text-[#e11d48]">
        <SparklesIcon size={14} aria-hidden="true" className="shrink-0" />
        {hero.badge}
      </span>

      <h1
        id="hero-heading"
        className="mb-[clamp(0.75rem,2vw,1.25rem)] text-[clamp(1.65rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#0F172A]"
      >
        {hero.headline}
        <br />
        <span className="text-[#e11d48]">{hero.headlineAccent}</span>
      </h1>

      <p className="mb-[clamp(1.25rem,3vw,2rem)] max-w-md text-[clamp(0.95rem,1.35vw,1.125rem)] leading-relaxed text-slate-500">
        {hero.tagline}
      </p>

      <AuthActions className="sm:justify-start" />
    </div>
  );
}
