import type { Metadata } from "next";
import MarketTicker from "./components/MarketTicker";
import Hero from "./components/home/Hero";
import MarketsSection from "./components/home/MarketsSection";
import WhyOllaTrade from "./components/home/WhyOllaTrade";
import PlatformSection from "./components/home/PlatformSection";
import TradingConditionsSection from "./components/home/TradingConditionsSection";
import AccountsSection from "./components/home/AccountsSection";
import DepositSection from "./components/home/DepositSection";
import ToolsSection from "./components/home/ToolsSection";
import Testimonials from "./components/home/Testimonials";
import CTASection from "./components/CTASection";
import RiskDisclaimer from "./components/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Olla Trade | Professional Online Trading Platform",
  description: "Trade Forex, Metals, Indices, Crypto, Energies and Stocks with Olla Trade. MT4 platform, spreads from 0.0 pips, leverage up to 1:500, min deposit $10.",
};

export default function HomePage() {
  return (
    <>
      <RiskDisclaimer />
      {/* 1 — Hero */}
      <Hero />
      {/* 2 — Market Ticker */}
      <MarketTicker />
      {/* 3 — Markets overview */}
      <MarketsSection />
      {/* 4 — Why choose Olla Trade */}
      <WhyOllaTrade />
      {/* 5 — MT4 Platform */}
      <PlatformSection />
      {/* 6 — Trading conditions */}
      <TradingConditionsSection />
      {/* 7 — Account types */}
      <AccountsSection />
      {/* 8 — Deposit & withdrawal */}
      <DepositSection />
      {/* 9 — Tools & education */}
      <ToolsSection />
      {/* 10 — Testimonials */}
      <Testimonials />
      {/* 11 — Final CTA */}
      <CTASection
        title="Start Trading with Olla Trade"
        subtitle="Open a live account in minutes. Access 500+ instruments with professional conditions on MetaTrader 4."
        primaryLabel="Open Free Account"
        secondaryLabel="View Trading Conditions"
        secondaryHref="/trading/conditions"
      />
    </>
  );
}
