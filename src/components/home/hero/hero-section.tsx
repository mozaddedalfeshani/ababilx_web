"use client";

import HeroContent from "./hero-content";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="landing-hero relative h-svh min-h-[640px] w-full overflow-hidden bg-[#FAFAFF] md:aspect-[1672/941] md:h-auto md:min-h-0"
      aria-labelledby="hero-heading"
    >
      <div
        className="landing-hero-art pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-end px-4 pt-16 pb-10 sm:items-center sm:px-6 sm:pt-14 sm:pb-16 md:w-11/12">
        <div className="w-full max-w-xl lg:w-[45%] lg:max-w-none lg:shrink-0">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
