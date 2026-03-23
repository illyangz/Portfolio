import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hassanmango.website/sitemap.xml",
    host: "https://hassanmango.website",
  };
}
