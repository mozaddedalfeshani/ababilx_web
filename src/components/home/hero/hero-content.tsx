"use client";

import { SparklesIcon } from "hugeicons-react";

import AuthActions from "../navbar/auth-actions";
import { useHomeLocale } from "../shared/use-home-locale";

export default function HeroContent() {
  const { copy } = useHomeLocale();
  const { hero } = copy;

  return (
    <div className="hero-content">
      <span className="hero-badge">
        <SparklesIcon size={16} aria-hidden="true" />
        {hero.badge}
      </span>

      <h1 id="hero-heading" className="hero-heading">
        {hero.headline}
        <br />
        <span className="hero-heading-accent">{hero.headlineAccent}</span>
      </h1>

      <p className="hero-tagline">{hero.tagline}</p>

      <AuthActions className="sm:justify-start" />
    </div>
  );
}
