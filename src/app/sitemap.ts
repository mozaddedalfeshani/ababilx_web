import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/account-deletion`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/data-deletion`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
