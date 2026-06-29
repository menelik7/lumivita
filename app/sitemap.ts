import type { MetadataRoute } from "next";

const BASE = "https://lumivita.no";
const lastModified = "2026-06-29";

// /bekreftet is excluded — it's a noindex double-opt-in landing page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE}/personvern`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
