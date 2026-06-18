import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-posts";
import { SITE_URL, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "nl-NL",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/logo.png`,
    author: { "@type": "Person", name: "Michael Streur" },
    publisher: {
      "@type": "Organization",
      name: "warmtepomp.ai",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Header />
      <TrustBar />
      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-green/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-action hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug naar blog
            </Link>
            <p className="mb-3 mt-6 text-xs font-bold uppercase tracking-[0.2em] text-action">
              {formatDate(post.publishedAt)}
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{post.intro}</p>
          </div>
        </section>

        <section className="bg-light-bg py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="space-y-8">
              {post.sections.map((section, i) => {
                if (section.type === "link") {
                  return (
                    <Link
                      key={i}
                      href={section.href}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-green/15 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                    >
                      <span>
                        <span className="block font-display text-base font-bold text-dark">
                          {section.label}
                        </span>
                        <span className="mt-1 block text-sm text-muted">
                          {section.description}
                        </span>
                      </span>
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-green" />
                    </Link>
                  );
                }

                return (
                  <div key={i} className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
                    {section.heading && (
                      <h2 className="font-display text-xl font-bold tracking-tight text-dark sm:text-2xl">
                        {section.heading}
                      </h2>
                    )}
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph, j) => (
                        <p key={j} className="text-base leading-relaxed text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
              <div className="mb-8 text-center">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                  Meer lezen
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                  Gerelateerde artikelen
                </h2>
              </div>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-green/15 bg-light-bg p-6 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                  >
                    <span>
                      <span className="block font-display text-base font-bold text-dark">
                        {related.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{related.description}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-green" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Benieuwd wat een warmtepomp jou oplevert?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Beantwoord een paar vragen en ontvang direct een persoonlijke indicatie, op maat van
              jouw situatie.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
            >
              Start de gratis keuzehulp
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
