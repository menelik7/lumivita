import type { Metadata, Viewport } from "next";
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
    "Vitenskapelig funderte produkter for kropp og søvn når dagslyset blir borte. Vi åpner høst 2026 — bli blant de første.",
  icons: {
    icon: [
      // NOTE: no SVG icon on purpose — its "LV" is drawn with Cormorant
      // Garamond, which favicon renderers can't load, so it falls back to
      // Georgia and mis-positions the letters. The PNG/ICO are exported with
      // the real font baked in. Re-add an *outlined* favicon.svg if one is provided.
      { url: "/favicon/favicon.ico?v=6", sizes: "any" },
      { url: "/favicon/favicon-32.png?v=6", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16.png?v=6", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png?v=6", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1C2B3A",
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
