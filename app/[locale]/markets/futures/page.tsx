import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import {
  IconGlobe,
  IconTrendingUp,
  IconBolt,
  IconRefresh,
  IconMonitor,
  IconBarChart,
} from "../../../components/ui/Icons";
import { FadeUp, FadeIn, SlideLeft, SlideRight, StaggerChildren, fadeUpItem } from "../../../components/ui/Animate";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Futures Trading — Commodity & Financial Futures | Olla Trade",
  description:
    "Trade Crude Oil, Natural Gas, Corn, Wheat, US T-Notes and more as futures CFDs on MetaTrader 5. Leverage up to 1:50, no physical delivery, competitive spreads.",
};

/* ─── Static data ─────────────────────────────────────────────────────────── */

const conditions = [
  { Instrument: "US.OIL (WTI Crude)",    Category: "Energy",      "Spread From": "3 pts",  Leverage: "1:50",  "Trading Hours": "Mon–Fri ~24h" },
  { Instrument: "UK.OIL (Brent Crude)",  Category: "Energy",      "Spread From": "3 pts",  Leverage: "1:50",  "Trading Hours": "Mon–Fri ~24h" },
  { Instrument: "NAT.GAS",               Category: "Energy",      "Spread From": "5 pts",  Leverage: "1:50",  "Trading Hours": "Mon–Fri ~24h" },
  { Instrument: "CORN",                  Category: "Agriculture",  "Spread From": "8 pts",  Leverage: "1:20",  "Trading Hours": "Mon–Fri, limited" },
  { Instrument: "WHEAT",                 Category: "Agriculture",  "Spread From": "10 pts", Leverage: "1:20",  "Trading Hours": "Mon–Fri, limited" },
  { Instrument: "SOYBEANS",              Category: "Agriculture",  "Spread From": "10 pts", Leverage: "1:20",  "Trading Hours": "Mon–Fri, limited" },
  { Instrument: "US10Y (T-Note)",        Category: "Financial",   "Spread From": "2 pts",  Leverage: "1:50",  "Trading Hours": "Mon–Fri ~24h" },
  { Instrument: "ESTX50 (Euro Stoxx)",   Category: "Financial",   "Spread From": "3 pts",  Leverage: "1:50",  "Trading Hours": "Mon–Fri, 09:00–22:00" },
];

const whyFeatures = [
  {
    Icon: IconGlobe,
    title: "Global Commodity Exposure",
    desc: "Access the world's most important commodity and financial benchmarks — energy, agricultural goods, and government bonds — from a single MT5 account.",
  },
  {
    Icon: IconTrendingUp,
    title: "Hedge Against Inflation",
    desc: "Commodities like Crude Oil, Corn, and Wheat tend to rise with inflationary pressure, making futures a strategic tool for portfolio diversification.",
  },
  {
    Icon: IconBolt,
    title: "Leverage Available",
    desc: "Trade with leverage up to 1:50 on energy and financial futures and up to 1:20 on agricultural contracts — controlling larger positions with smaller capital.",
  },
  {
    Icon: IconRefresh,
    title: "No Physical Delivery",
    desc: "All instruments are CFDs on futures prices. There is no obligation to take or make delivery of physical commodities — positions are cash-settled.",
  },
  {
    Icon: IconMonitor,
    title: "MetaTrader 5 Platform",
    desc: "Trade futures CFDs on MT5 — featuring advanced charting, 80+ technical indicators, automated trading via Expert Advisors, and multi-asset depth of market.",
  },
  {
    Icon: IconBarChart,
    title: "Transparent Pricing",
    desc: "Futures prices on MT5 reflect real underlying market benchmarks. Spreads are clearly quoted before entry — no hidden fees in the price.",
  },
];


/* ─── Page component ──────────────────────────────────────────────────────── */

export default async function FuturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <PageHero
        badge="Futures Markets"
        title="Trade Commodity & Financial Futures"
        subtitle="Access global futures markets — energy, agricultural commodities, and financial benchmarks — as CFDs on MetaTrader 5, with no physical delivery required."
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Futures" }]}
        cta={{ label: "Start Trading Futures", href: "https://portal.ollatrade.com/auth/register" }}
        stats={[
          { value: "8+",    label: "Futures Instruments" },
          { value: "1:50",  label: "Max Leverage" },
          { value: "MT5",   label: "Platform" },
        ]}
      >
        {/* Hero visual — commodity futures cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
          {[
            { sym: "US.OIL",  name: "WTI Crude Oil",  cat: "Energy",      color: "#F59E0B" },
            { sym: "NAT.GAS", name: "Natural Gas",     cat: "Energy",      color: "#6366F1" },
            { sym: "CORN",    name: "Corn",            cat: "Agriculture", color: "#22C55E" },
            { sym: "WHEAT",   name: "Wheat",           cat: "Agriculture", color: "#EAB308" },
            { sym: "US10Y",   name: "US 10Y T-Note",   cat: "Financial",   color: "#29B5D4" },
            { sym: "ESTX50",  name: "Euro Stoxx 50",   cat: "Financial",   color: "#8B5CF6" },
          ].map((item) => (
            <div
              key={item.sym}
              className="rounded-xl px-3 py-2.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-wider mb-1.5 px-1.5 py-0.5 rounded inline-block"
                style={{ background: `${item.color}18`, color: item.color }}
              >
                {item.cat}
              </div>
              <div className="text-[13px] font-extrabold text-white">{item.sym}</div>
              <div className="text-[11px] text-white/40 mt-0.5">{item.name}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── 2. WHAT YOU CAN TRADE ───────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4 text-center">
              Tradable Instruments
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">
              What You Can Trade
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">
              Olla Trade offers futures CFDs across three categories — energy, agricultural commodities, and financial benchmarks. All instruments are traded on MetaTrader 5 with no physical settlement.
            </p>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {/* Energy Futures */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ animation: "none" }}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#F59E0B" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M12 2c-4.42 4.85-6 8.14-6 10a6 6 0 0 0 12 0c0-1.86-1.58-5.15-6-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#111827]">Energy Futures</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ background: "rgba(245,158,11,0.10)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.25)" }}>
                    Energy
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                Crude oil and natural gas are among the most actively traded commodity futures globally, sensitive to OPEC decisions, supply disruptions, and macroeconomic demand.
              </p>
              <div className="space-y-3">
                {[
                  { sym: "US.OIL", name: "WTI Crude Oil",  spread: "From 3 pts", lev: "1:50", hours: "~24h Mon–Fri" },
                  { sym: "UK.OIL", name: "Brent Crude Oil", spread: "From 3 pts", lev: "1:50", hours: "~24h Mon–Fri" },
                  { sym: "NAT.GAS", name: "Natural Gas",    spread: "From 5 pts", lev: "1:50", hours: "~24h Mon–Fri" },
                ].map((i) => (
                  <div key={i.sym} className="rounded-xl p-3.5 border border-gray-50 bg-[#FAFAFA]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-bold text-[#111827] font-mono">{i.sym}</span>
                      <span className="text-[11px] text-gray-400">{i.name}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-[11px]">
                      <div><span className="text-gray-400 block">Spread</span><span className="font-semibold text-[#111827]">{i.spread}</span></div>
                      <div><span className="text-gray-400 block">Leverage</span><span className="font-semibold text-[#1A90C3]">{i.lev}</span></div>
                      <div><span className="text-gray-400 block">Hours</span><span className="font-semibold text-[#111827]">{i.hours}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agricultural Futures */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#22C55E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M12 22V12M12 12C12 7 8 4 4 4c0 4 3 7.5 8 8zM12 12C12 7 16 4 20 4c0 4-3 7.5-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#111827]">Agricultural Futures</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ background: "rgba(34,197,94,0.10)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.25)" }}>
                    Agriculture
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                Grain markets move on weather patterns, planting seasons, USDA crop reports, and global food demand. Corn, wheat, and soybeans are the three most liquid US grain futures.
              </p>
              <div className="space-y-3">
                {[
                  { sym: "CORN",     name: "Corn",     spread: "From 8 pts",  lev: "1:20", hours: "Limited session" },
                  { sym: "WHEAT",    name: "Wheat",    spread: "From 10 pts", lev: "1:20", hours: "Limited session" },
                  { sym: "SOYBEANS", name: "Soybeans", spread: "From 10 pts", lev: "1:20", hours: "Limited session" },
                ].map((i) => (
                  <div key={i.sym} className="rounded-xl p-3.5 border border-gray-50 bg-[#FAFAFA]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-bold text-[#111827] font-mono">{i.sym}</span>
                      <span className="text-[11px] text-gray-400">{i.name}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-[11px]">
                      <div><span className="text-gray-400 block">Spread</span><span className="font-semibold text-[#111827]">{i.spread}</span></div>
                      <div><span className="text-gray-400 block">Leverage</span><span className="font-semibold text-[#1A90C3]">{i.lev}</span></div>
                      <div><span className="text-gray-400 block">Hours</span><span className="font-semibold text-[#111827]">{i.hours}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Futures */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(26,144,195,0.12)", border: "1px solid rgba(26,144,195,0.25)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#1A90C3" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#111827]">Financial Futures</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ background: "rgba(26,144,195,0.10)", color: "#1A90C3", border: "1px solid rgba(26,144,195,0.25)" }}>
                    Financial
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                Interest rate futures and equity index futures allow traders to express views on monetary policy, bond yields, and broad equity market direction.
              </p>
              <div className="space-y-3">
                {[
                  { sym: "US10Y",  name: "US 10Y T-Note",  spread: "From 2 pts", lev: "1:50", hours: "~24h Mon–Fri" },
                  { sym: "ESTX50", name: "Euro Stoxx 50",  spread: "From 3 pts", lev: "1:50", hours: "09:00–22:00" },
                ].map((i) => (
                  <div key={i.sym} className="rounded-xl p-3.5 border border-gray-50 bg-[#FAFAFA]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-bold text-[#111827] font-mono">{i.sym}</span>
                      <span className="text-[11px] text-gray-400">{i.name}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-[11px]">
                      <div><span className="text-gray-400 block">Spread</span><span className="font-semibold text-[#111827]">{i.spread}</span></div>
                      <div><span className="text-gray-400 block">Leverage</span><span className="font-semibold text-[#1A90C3]">{i.lev}</span></div>
                      <div><span className="text-gray-400 block">Hours</span><span className="font-semibold text-[#111827]">{i.hours}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* ── 3. WHY TRADE FUTURES WITH Olla ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4 text-center">
              Why Olla Trade
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">
              Why Trade Futures with Olla?
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">
              Six reasons traders choose Olla Trade for commodity and financial futures CFD exposure.
            </p>
          </FadeUp>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      {/* ── 4. TRADING CONDITIONS TABLE ─────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4 text-center">
              Trading Conditions
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">
              Futures CFD Specifications
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">
              Indicative spreads under normal market conditions. Spreads may widen during major data releases, low-liquidity sessions, or around contract rollover dates.
            </p>
          </FadeUp>
          <FadeIn delay={0.1}>
            <TradingConditionsTable
              title="Futures CFD Trading Conditions"
              headers={["Instrument", "Category", "Spread From", "Leverage", "Trading Hours"]}
              rows={conditions}
              highlightCol={2}
            />
          </FadeIn>
          <p className="text-[11px] text-gray-400 text-center mt-4">
            All figures are indicative. Leverage is subject to your account type and regulatory conditions. Olla Capital Financial Services L.L.C. — UAE SCA Lic. 20200000416.
          </p>
        </div>
      </section>

      {/* ── 5. PLATFORM SECTION ─────────────────────────────────────── */}
      <section className="py-20 bg-[#07111F] relative overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,144,195,0.04) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(26,144,195,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 10%, rgba(26,144,195,0.10) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SlideLeft>
              <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4">
                Trading Platform
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
                Trade Futures on MetaTrader 5
              </h2>
              <p className="text-white/45 text-[15px] leading-relaxed mb-7">
                MetaTrader 5 is Olla Trade&apos; primary platform for futures CFD trading. It delivers institutional-grade charting, 80+ built-in technical indicators, automated trading via Expert Advisors, and a fully integrated economic calendar.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Full commodity and financial futures CFD access",
                  "80+ technical indicators and multi-timeframe analysis",
                  "Expert Advisors (EAs) for algorithmic trading",
                  "One-click trading and depth of market (DOM)",
                  "Available on desktop, web browser, iOS, and Android",
                  "Real-time market depth and level-2 pricing",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(26,144,195,0.18)", border: "1px solid rgba(26,144,195,0.35)" }}
                    >
                      <svg className="w-2.5 h-2.5 text-[#1A90C3]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13px] text-white/55 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#1A90C3] hover:bg-[#1580b0] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-[#1A90C3]/25"
              >
                Open MT5 Account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </SlideLeft>

            <SlideRight>
              {/* MT5 feature cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Instruments",      value: "Multi-asset",   color: "#1A90C3" },
                  { label: "Indicators",        value: "80+",           color: "#22C55E" },
                  { label: "Timeframes",        value: "21",            color: "#F59E0B" },
                  { label: "Order Types",       value: "6 types",       color: "#8B5CF6" },
                  { label: "EA Support",        value: "Full MQL5",     color: "#EC4899" },
                  { label: "Mobile Apps",       value: "iOS & Android", color: "#29B5D4" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="text-[11px] text-white/30 mb-1.5">{item.label}</div>
                    <div className="text-[15px] font-extrabold" style={{ color: item.color }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div
                className="mt-3 rounded-2xl p-5"
                style={{ background: "rgba(26,144,195,0.07)", border: "1px solid rgba(26,144,195,0.20)" }}
              >
                <div className="text-[12px] font-bold text-[#1A90C3] mb-2">Platform Availability</div>
                <p className="text-[12px] text-white/40 leading-relaxed">
                  MetaTrader 5 is available as a desktop application for Windows and macOS, as a web-based platform accessible from any browser, and as mobile apps for iOS and Android — keeping you connected to futures markets wherever you are.
                </p>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>


      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Futures Trading Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">
              Futures CFDs are complex instruments and carry a high level of risk due to leverage. Commodity prices can be highly volatile and may be affected by OPEC decisions, geopolitical events, weather patterns, government policy, and macroeconomic data. Leverage amplifies both gains and losses, and it is possible to lose your entire deposited capital. No form of profit or return is guaranteed. Past performance is not indicative of future results. Trading futures CFDs may not be suitable for all investors. Please ensure you fully understand the risks involved before trading. Olla Capital Financial Services L.L.C. — UAE SCA Licence No. 20200000416.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────── */}
      <CTASection
        title="Start Trading Futures Today"
        subtitle="Open an account with Olla Trade and access commodity and financial futures CFDs on MetaTrader 5 — with competitive spreads, transparent pricing, and UAE SCA regulation."
        primaryLabel="Open Account"
        secondaryLabel="View All Markets"
        secondaryHref="/markets"
      />
    </>
  );
}
