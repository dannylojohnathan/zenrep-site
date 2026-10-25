import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-10-25";
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/treinos`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/ranking`, lastModified, changeFrequency: "daily", priority: 0.7 },
  ];
}
