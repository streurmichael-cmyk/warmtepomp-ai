import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { WhatsAppButton } from "@/components/whatsapp-button";
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
  "Onafhankelijke keuzehulp voor warmtepompen in Nederland. Persoonlijke indicatie van het beste type warmtepomp, actuele subsidie-informatie en gekoppeld aan gecertificeerde installateurs bij jou in de buurt.";

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
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "warmtepomp.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welke warmtepomp past bij jouw woning? | warmtepomp.ai",
    description,
    images: ["/logo.png"],
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
        <Analytics />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
