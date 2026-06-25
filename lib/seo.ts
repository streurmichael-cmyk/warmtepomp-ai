import type { Metadata } from "next";

export const SITE_URL = "https://www.warmtepomp.ai";
export const SITE_NAME = "warmtepomp.ai";

// Canonieke entity-@id's — gedeeld zodat ze byte-voor-byte gelijk zijn in alle bestanden.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/over-ons#michael-streur`;

export const BRAND_DESCRIPTION =
  "Onafhankelijk Nederlands online platform dat huiseigenaren via een AI-keuzehulp een persoonlijke warmtepomp-indicatie geeft.";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: BRAND_DESCRIPTION,
  email: "info@warmtepomp.ai",
  founder: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Michael Streur",
    url: `${SITE_URL}/over-ons`,
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@warmtepomp.ai",
    areaServed: "NL",
    availableLanguage: ["Dutch"],
  },
};

export const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "nl-NL",
  publisher: { "@id": ORG_ID },
};

/** BreadcrumbList JSON-LD; item-URL's in no-trailing-slash-vorm (consistent met canonicals). */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Zet op true om <meta name="robots" content="noindex, follow"> toe te voegen. */
  noindex?: boolean;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: path,
      languages: { "nl-NL": path },
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: "https://www.warmtepomp.ai/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.warmtepomp.ai/og-image.png"],
    },
  };
}

/** WebPage JSON-LD voor informatieve content-pagina's (geen blog/FAQ). */
export function webPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  /** Schema-type; standaard WebPage, gebruik "CollectionPage" voor overzichtspagina's. */
  type?: string;
}) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    inLanguage: "nl-NL",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
  };
}
