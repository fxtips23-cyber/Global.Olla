import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Olla Trade | Professional Online Trading Platform", template: "%s | Olla Trade" },
  description: "Trade Forex, Metals, Indices, Crypto, Energies and Stocks with Olla Trade. Access global markets with MT4, tight spreads from 0.0 pips, and leverage up to 1:500.",
  keywords: ["forex broker", "online trading", "MT4", "CFD trading", "crypto trading", "metals trading"],
  openGraph: { siteName: "Olla Trade", locale: "en_US", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      {/*
        pt-16 — body padding offsets the fixed h-16 (64px) header.
        overflow-x-hidden — prevents any section from causing horizontal scroll.
        w-full — ensures body never exceeds viewport on mobile.
      */}
      <body className="bg-white text-gray-900 antialiased pt-16 w-full overflow-x-hidden">
        <Header />
        <main className="w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
