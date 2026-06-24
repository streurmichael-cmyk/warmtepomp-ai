import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Onafhankelijke keuzehulp voor warmtepompen in Nederland. Persoonlijke indicatie van het beste type warmtepomp, actuele subsidie-informatie en ik help je verder richting een gecertificeerde installateur.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.warmtepomp.ai"),
  title: "Welke warmtepomp past bij jouw woning? | warmtepomp.ai",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "warmtepomp.ai",
    title: "Welke warmtepomp past bij jouw woning? | warmtepomp.ai",
    description,
    url: "/",
    images: [
      {
        url: "https://www.warmtepomp.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "warmtepomp.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welke warmtepomp past bij jouw woning? | warmtepomp.ai",
    description,
    images: ["https://www.warmtepomp.ai/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    d7a17cacedaa767: "dd3e8daf2c58b482abbc931cb56e25d7",
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
