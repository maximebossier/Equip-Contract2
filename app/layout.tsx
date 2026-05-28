import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equip Contract | Fabricacion contract en Barcelona",
  description:
    "Fabricacion premium de mobiliario contract en Barcelona para distribuidores, marcas, estudios y partners horeca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
