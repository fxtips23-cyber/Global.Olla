import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Olla Trade | UAE Regulated Forex & CFD Broker", template: "%s | Olla Trade" },
  description: "Trade Forex, Metals, Indices, Crypto, Energies and Stocks with Olla Trade. UAE SCA regulated broker. Competitive spreads, fast execution, and accounts from $10.",
  keywords: ["forex broker", "UAE broker", "SCA regulated", "online trading", "MT5", "CFD trading", "crypto trading", "metals trading", "Olla Trade"],
  openGraph: { siteName: "Olla Trade", locale: "en_US", type: "website" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
