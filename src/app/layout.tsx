import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESTATE | Premium Luxury Real Estate & Exclusive Properties",
  description: "Discover the world's most prestigious properties. Experience curated luxury, editorial design, and effortless discovery with ESTATE.",
  keywords: ["luxury real estate", "premium properties", "real estate template", "luxury homes", "exclusive listings"],
  authors: [{ name: "ESTATE Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
