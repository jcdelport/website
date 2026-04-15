import type { Metadata } from "next";
import { Bodoni_Moda, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "WEBSTER ADVISORY | Technical Atelier",
  description: "High-End Corporate & Salon Strategy Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${interTight.variable} ${bodoni.variable} bg-background text-foreground antialiased relative`}
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
