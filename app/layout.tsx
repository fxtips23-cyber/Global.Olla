import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Olla Trade | Professional Online Trading Platform", template: "%s | Olla Trade" },
  description: "Trade Forex, Metals, Indices, Crypto, Energies and Stocks with Olla Trade. Access global markets with MT4, tight spreads from 0.0 pips, and leverage up to 1:500.",
  keywords: ["forex broker", "online trading", "MT4", "CFD trading", "crypto trading", "metals trading"],
  openGraph: { siteName: "Olla Trade", locale: "en_US", type: "website" },
  icons: {
    icon:    [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/olla-logo.png", type: "image/png", sizes: "any" }],
    apple:   { url: "/olla-logo.png", type: "image/png" },
    shortcut:"/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.variable}>
      <head>
        <link rel="icon"             href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon"   href="/olla-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/olla-logo.png" />
      </head>
      <body className="bg-white text-gray-900 antialiased pt-16 w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
