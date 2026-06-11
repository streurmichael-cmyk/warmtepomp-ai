import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/seo";

const staticPages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/warmtepompen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/kosten", changeFrequency: "monthly", priority: 0.8 },
  { path: "/subsidie", changeFrequency: "monthly", priority: 0.8 },
  { path: "/vergelijk", changeFrequency: "monthly", priority: 0.8 },
  { path: "/installateurs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hoe-het-werkt", changeFrequency: "monthly", priority: 0.6 },
  { path: "/voorbeeld-advies", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/over-ons", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
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

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/installateurs/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries, ...blogEntries];
}
