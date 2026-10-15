import { Inter, Instrument_Serif } from "next/font/google";

/** Inter for every piece of the hero UI. Scoped to the landing page. */
export const heroSans = Inter({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
  variable: "--font-vx-sans",
});

/** Instrument Serif italic — only the accent words of the headline. */
export const heroSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-vx-serif",
});
