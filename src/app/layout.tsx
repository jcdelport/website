import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

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
  title: "WEBSTER ADVISORY | High-Performance Salon Sovereignty",
  description: "Total Operational Sovereignty and Clinical Commercial Clarity",
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
          <div className="film-grain" />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
