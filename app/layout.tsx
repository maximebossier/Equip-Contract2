import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://equipcontract.com";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Equip Contract",
  title: {
    default: "Equip Contract | Fabricación contract B2B en Barcelona",
    template: "%s | Equip Contract",
  },
  description:
    "Fabricación industrial premium de mobiliario contract en Barcelona para distribuidores, estudios, empresas contract y marcas B2B. Producción OEM, white-label y confidencial.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/?lang=en",
    },
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.webmanifest",
  category: "manufacturing",
  keywords: [
    "fabricación contract Barcelona",
    "mobiliario contract OEM",
    "white-label furniture manufacturing",
    "fabricante mobiliario horeca",
    "Equip Contract",
  ],
  authors: [{ name: "Equip Contract" }],
  creator: "Equip Contract",
  publisher: "Equip Contract",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    title: "Equip Contract | Fabricación contract B2B en Barcelona",
    description:
      "Partner industrial para producción OEM, white-label y mobiliario a medida con confidencialidad, control de calidad y fabricación local en Barcelona.",
    url: "/",
    siteName: "Equip Contract",
    locale: "es_ES",
    alternateLocale: ["en_GB"],
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Equip Contract - fabricación contract B2B en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equip Contract | Fabricación contract B2B en Barcelona",
    description:
      "Fabricación local de mobiliario contract para partners B2B, distribuidores, estudios y marcas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-graphite text-stone antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fern focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-graphite"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
