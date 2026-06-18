import type { MetadataRoute } from "next";
import { cities, isCityIndexed } from "@/lib/cities";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/seo";

const staticPages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/warmtepompen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/kosten", changeFrequency: "monthly", priority: 0.8 },
  { path: "/subsidie", changeFrequency: "monthly", priority: 0.8 },
  { path: "/vergelijk", changeFrequency: "monthly", priority: 0.8 },
  { path: "/offerte", changeFrequency: "monthly", priority: 0.8 },
  { path: "/beste-warmtepomp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hybride-warmtepomp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/installateurs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aardgasvrij", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hoe-het-werkt", changeFrequency: "monthly", priority: 0.6 },
  { path: "/voorbeeld-advies", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/over-ons", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.6 },
  { path: "/verwerkersovereenkomst", changeFrequency: "monthly", priority: 0.4 },
  { path: "/disclaimer", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Alleen geïndexeerde steden in de sitemap; noindex-steden laten we weg.
  const cityEntries: MetadataRoute.Sitemap = cities
    .filter((city) => isCityIndexed(city.slug))
    .map((city) => ({
      url: `${SITE_URL}/installateurs/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...cityEntries, ...blogEntries];
}
