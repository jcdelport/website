import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webster-45fec.web.app"),
  title: "WEBSTER ADVISORY | High-Performance Salon Sovereignty",
  description: "Total Operational Sovereignty and Clinical Commercial Clarity. We build bespoke, full turn-key digital ecosystems for the modern salon.",
  keywords: ["Salon Advisory", "Turnkey Salon Builder", "Commercial Audit", "Salon Investment", "Hair Salon Infrastructure", "Webster Advisory", "Omnichannel Booking"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "WEBSTER ADVISORY | Commercial Clarity",
    description: "Total Operational Sovereignty and Clinical Commercial Clarity for Founders and Investors.",
    url: "https://webster-45fec.web.app",
    siteName: "WEBSTER ADVISORY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBSTER ADVISORY",
    description: "Total Operational Sovereignty and Clinical Commercial Clarity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased relative`}
      >
        <SmoothScroll>
          <Preloader />
          <div className="film-grain" />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
