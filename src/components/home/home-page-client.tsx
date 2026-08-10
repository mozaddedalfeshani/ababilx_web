"use client";

import HeroSection from "./hero";
import Navbar from "./navbar";
import { HomeLocaleProvider } from "./shared/use-home-locale";

export default function HomePageClient() {
  return (
    <HomeLocaleProvider>
      <div
        data-theme="light"
        className="landing-page min-h-screen overflow-x-hidden"
        style={{ background: "#FAFAFF", colorScheme: "light" }}
      >
        <Navbar />
        <main id="main-content">
          <HeroSection />
        </main>
      </div>
    </HomeLocaleProvider>
  );
}
