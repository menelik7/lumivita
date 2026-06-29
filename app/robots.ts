import type { MetadataRoute } from "next";

// /bekreftet is intentionally left out of any disallow rule: it carries a
// `noindex` meta tag, which crawlers only honor if they're allowed to fetch it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://lumivita.no/sitemap.xml",
    host: "https://lumivita.no",
  };
}
