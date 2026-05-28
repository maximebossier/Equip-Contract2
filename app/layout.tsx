import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equip Contract | Fabricación contract en Barcelona",
  description:
    "Fabricación local de mobiliario contract para distribuidores, estudios de interiorismo, empresas contract y marcas horeca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-graphite text-stone antialiased">{children}</body>
    </html>
  );
}
