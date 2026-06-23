import Link from "next/link";
import { getPublishedPosts, type BlogPost } from "@/lib/blog-posts";
import { ArrowRight } from "./icons";

// Uitgelichte artikelen op koop-intentie. Pas deze slugs aan om andere posts uit te lichten;
// niet-gepubliceerde of ontbrekende slugs worden automatisch aangevuld met de nieuwste posts.
const FEATURED_SLUGS = [
  "warmtepomp-besparing-berekenen",
  "warmtepomp-subsidie-2026-complete-gids",
  "warmtepomp-geschikt-voor-mijn-woning",
];

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

function getFeaturedPosts(): BlogPost[] {
  const published = getPublishedPosts();
  const bySlug = new Map(published.map((post) => [post.slug, post]));
  const featured = FEATURED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (post): post is BlogPost => Boolean(post)
  );
  for (const post of published) {
    if (featured.length >= 3) break;
    if (!featured.includes(post)) featured.push(post);
  }
  return featured.slice(0, 3);
}

export function FeaturedPosts() {
  const posts = getFeaturedPosts();
  if (posts.length === 0) return null;

  return (
    <section className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
            Kennisbank
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            Handig om te weten
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Praktische artikelen over terugverdientijd, subsidie en het kiezen van de juiste
            warmtepomp — in gewone taal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-green/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-action">
                {formatDate(post.publishedAt)}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-dark">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-action hover:underline"
              >
                Lees meer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-action hover:underline"
          >
            Naar de kennisbank
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
