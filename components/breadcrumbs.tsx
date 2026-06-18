import { breadcrumbJsonLd } from "@/lib/seo";

/**
 * Herbruikbare BreadcrumbList JSON-LD voor niet-home-pagina's.
 * `items` is de keten van Home tot de huidige pagina; het laatste item is de huidige URL.
 */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }}
    />
  );
}
