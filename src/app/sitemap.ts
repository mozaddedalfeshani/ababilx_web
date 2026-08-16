import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/account-deletion`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/data-deletion`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
