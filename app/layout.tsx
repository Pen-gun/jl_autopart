import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site, instagramUrl } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  keywords: [
    "helmet shop Lalitpur",
    "helmet shop Satdobato",
    "motorcycle helmets Nepal",
    "scooter helmets Kathmandu",
    "biking gloves Nepal",
    "auto spare parts Lalitpur",
  ],
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
};

// Surfaces the shop in Google local search / Maps. Highest-leverage SEO
// item for a business whose customers search "helmet shop Satdobato".
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneDial,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Satdobato",
    addressLocality: "Lalitpur",
    addressRegion: "Bagmati",
    addressCountry: "NP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [instagramUrl],
  areaServed: {
    "@type": "Place",
    name: "Kathmandu Valley",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
