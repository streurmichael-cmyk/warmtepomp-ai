import type { Metadata } from "next";

export const SITE_URL = "https://www.warmtepomp.ai";
export const SITE_NAME = "warmtepomp.ai";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "nl-NL": path },
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: "/logo.png", width: 512, height: 512, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}
