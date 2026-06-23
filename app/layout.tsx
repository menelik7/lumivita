import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumivita — Vintervelvære, vitenskapelig fundert",
  description:
    "Vitenskapelig funderte produkter for kropp og søvn når dagslyset blir borte. Vi åpner høst 2025 — bli blant de første.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-sand text-ink antialiased">{children}</body>
    </html>
  );
}
