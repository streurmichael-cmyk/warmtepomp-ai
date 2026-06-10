import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
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
  "Onafhankelijke keuzehulp voor warmtepompen in Nederland. Persoonlijk advies over het beste type warmtepomp, actuele subsidie-informatie en gekoppeld aan gecertificeerde installateurs bij jou in de buurt.";

export const metadata: Metadata = {
  metadataBase: new URL("https://warmtepomp.ai"),
  title: "Warmtepomp vergelijken? Vind de beste deal | warmtepomp.ai",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "warmtepomp.ai",
    title: "Warmtepomp vergelijken? Vind de beste deal | warmtepomp.ai",
    description,
    url: "/",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "warmtepomp.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warmtepomp vergelijken? Vind de beste deal | warmtepomp.ai",
    description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
