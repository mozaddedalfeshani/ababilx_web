"use client";

import HeroLanding from "./hero";
import { HomeLocaleProvider } from "./shared/use-home-locale";

export default function HomePageClient() {
  return (
    <HomeLocaleProvider>
      <HeroLanding />
    </HomeLocaleProvider>
  );
}
