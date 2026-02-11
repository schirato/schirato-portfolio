import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/content/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erikschirato.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getAllProjectSlugs();

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projetos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projetos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectEntries,
  ];
}
