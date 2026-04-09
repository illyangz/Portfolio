import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const projects = [
  "leadsouq",
  "n8n-leads-scraper",
  "trump-gpt",
  "chat-with-pdfs",
  "marketflow",
  "rusty-gas-prices",
  "global-countries-quiz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((slug) => ({
    url: `https://hassanmango.website/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://hassanmango.website",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://hassanmango.website/music",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...projectUrls,
  ];
}
