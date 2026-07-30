import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://equipcontract.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Equip Contract | Fabricación contract B2B en Barcelona",
    template: "%s | Equip Contract",
  },
  description:
    "Fabricación industrial premium de mobiliario contract en Barcelona para distribuidores, estudios, empresas contract y marcas B2B. Producción OEM, white-label y confidencial.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Equip Contract | Fabricación contract B2B en Barcelona",
    description:
      "Partner industrial para producción OEM, white-label y mobiliario a medida con confidencialidad, control de calidad y fabricación local en Barcelona.",
    url: "/",
    siteName: "Equip Contract",
    locale: "es_ES",
    type: "website",
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
