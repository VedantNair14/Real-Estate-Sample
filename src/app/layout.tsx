import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estate. | Ultra-Luxury Real Estate & Global Property Intelligence",
  description: "Experience the world's most exclusive real estate portfolio. Curated by global intelligence for the 0.1%. Redefining elite property acquisition.",
  keywords: ["luxury real estate", "prime properties", "global investment", "elite estates", "concierge real estate"],
  openGraph: {
    title: "Estate. | The Pinnacle of Luxury Living",
    description: "Access the world's most exclusive property collection.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate. | Luxury Real Estate",
    description: "Redefining elite property acquisition.",
  }
};

import Preloader from "@/components/shared/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Estate. Luxury",
              "description": "Ultra-luxury real estate advisory for global high-net-worth individuals.",
              "url": "https://luxury-estate.com",
              "logo": "https://luxury-estate.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mayfair",
                "addressRegion": "London",
                "addressCountry": "UK"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-luxury-black text-foreground selection:bg-gold selection:text-black no-scrollbar md:block">
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

