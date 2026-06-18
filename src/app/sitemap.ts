import type { MetadataRoute } from "next";
import { PRODUCTS, SITE, productPath } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}${productPath(p.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
