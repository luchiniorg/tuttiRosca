import type { Metadata } from "next";
import { Inter, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "varilla roscada acme",
    "rosca acme",
    "gatos para maquinaria agrícola",
    "agropartes",
    "metalúrgica Bombal",
    "piezas metalúrgicas a medida",
    "fabricación bajo plano",
    "metalúrgica Santa Fe",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: "Bombal",
    addressRegion: "Santa Fe",
    addressCountry: "AR",
  },
  areaServed: ["Argentina", "Uruguay", "Brasil"],
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Varillas Roscadas ACME" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Gatos para Maquinaria Agrícola" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Piezas Metalúrgicas a Medida" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${archivo.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
