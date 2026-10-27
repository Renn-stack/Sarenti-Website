import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { siteConfig } from "@/data/site";

const editorialFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Sarenti | Cámara Hiperbárica y Medicina Estética",
  description:
    "Conoce Sarenti, clínica de medicina estética con cámara hiperbárica, tratamientos faciales, corporales y de bienestar. Agenda tu cita por WhatsApp.",
  openGraph: {
    title: "Sarenti | Cámara Hiperbárica y Medicina Estética",
    description:
      "Cámara hiperbárica, medicina estética y tratamientos de bienestar en Sarenti. Agenda por WhatsApp.",
    siteName: siteConfig.name,
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarenti | Cámara Hiperbárica y Medicina Estética",
    description:
      "Cámara hiperbárica, medicina estética y tratamientos de bienestar en Sarenti. Agenda por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Basic LocalBusiness structured data.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description:
    "Clínica de medicina estética con cámara hiperbárica, tratamientos faciales, corporales y de bienestar.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "15 de Mayo 15, Col. Francisco I. Madero",
    postalCode: "72130",
    addressLocality: "Heroica Puebla de Zaragoza",
    addressRegion: "Pue.",
    addressCountry: "MX",
  },
  telephone: `+${siteConfig.whatsappNumber}`,
  openingHours: ["Mo-Fr 09:00-17:00", "Sa 08:00-15:00"],
  sameAs: [siteConfig.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${editorialFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-white font-sans text-sarenti-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sarenti-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
