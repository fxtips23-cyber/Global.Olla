import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  StaggerChildren,
} from "../../../components/ui/Animate";

/* ─────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Precious Metals Trading — Gold, Silver, Palladium & Platinum CFDs",
  description:
    "Trade Gold (XAU/USD), Silver (XAG/USD), Palladium and Platinum as CFDs with Olla Trade. Spreads from 0.20, leverage up to 1:100, on MetaTrader 5.",
};

/* ─────────────────────────────────────────────────────────────────────────
   Static generation
───────────────────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────── */
const metals = [
  {
    sym: "XAU/USD",
    name: "Gold",
    badge: "Most Traded",
    color: "#D4A017",
    bgColor: "rgba(212,160,23,0.08)",
    borderColor: "rgba(212,160,23,0.25)",
    spread: "From 0.20",
    leverage: "1:100",
    category: "Precious Metal",
    desc: "The world's most recognised store of value and premier safe-haven asset. Gold price is influenced by USD movements, real interest rates, inflation expectations, central bank reserves, and global risk sentiment.",
  },
  {
    sym: "XAG/USD",
    name: "Silver",
    badge: "Dual Role",
    color: "#9CA3AF",
    bgColor: "rgba(156,163,175,0.08)",
    borderColor: "rgba(156,163,175,0.25)",
    spread: "From 0.02",
    leverage: "1:100",
    category: "Precious Metal",
    desc: "Both a precious metal and industrial commodity with significant demand from solar energy, electronics, and medical sectors. Silver often follows Gold's direction but with higher volatility.",
  },
  {
    sym: "XPD/USD",
    name: "Palladium",
    badge: "Industrial",
    color: "#60A5FA",
    bgColor: "rgba(96,165,250,0.08)",
    borderColor: "rgba(96,165,250,0.25)",
    spread: "From 5.0",
    leverage: "1:50",
    category: "Precious Metal",
    desc: "Primarily used in catalytic converters for petrol vehicles. Palladium prices are heavily driven by automotive sector demand, Russian supply dynamics, and the shift toward hybrid vehicle production.",
  },
  {
    sym: "XPT/USD",
    name: "Platinum",
    badge: "Auto & Jewellery",
    color: "#A78BFA",
    bgColor: "rgba(167,139,250,0.08)",
    borderColor: "rgba(167,139,250,0.25)",
    spread: "From 3.0",
    leverage: "1:50",
    category: "Precious Metal",
    desc: "Used in catalytic converters for diesel vehicles, jewellery, and hydrogen fuel cells. Platinum prices are linked to South African mining supply, diesel vehicle demand, and the green energy transition.",
  },
];

const conditions = [
  {
    Instrument: "Gold",
    Symbol: "XAU/USD",
    "Spread From": "0.20",
    Leverage: "1:100",
    "Trading Hours": "Mon–Fri, 24h",
  },
  {
    Instrument: "Silver",
    Symbol: "XAG/USD",
    "Spread From": "0.02",
    Leverage: "1:100",
    "Trading Hours": "Mon–Fri, 24h",
  },
  {
    Instrument: "Palladium",
    Symbol: "XPD/USD",
    "Spread From": "5.0",
    Leverage: "1:50",
    "Trading Hours": "Mon–Fri, 24h",
  },
  {
    Instrument: "Platinum",
    Symbol: "XPT/USD",
    "Spread From": "3.0",
    Leverage: "1:50",
    "Trading Hours": "Mon–Fri, 24h",
  },
];

const whyFeatures = [
  {
    title: "Safe-Haven Assets",
    desc: "Precious metals — especially Gold — are historically sought during economic uncertainty, geopolitical stress, and market downturns, often moving counter to equities.",
  },
  {
    title: "Portfolio Diversification",
    desc: "Metals CFDs add an uncorrelated asset class to a trading portfolio, helping balance exposure across different market environments and economic cycles.",
  },
  {
    title: "24/5 Trading Access",
    desc: "Trade Gold, Silver, Palladium, and Platinum five days a week around the clock, responding to macroeconomic events and overnight market-moving news.",
  },
  {
    title: "Competitive Spreads",
    desc: "Trade the world's most liquid precious metals with spreads from just 0.20 on Gold, giving you efficient access without excessive cost per trade.",
  },
  {
    title: "MetaTrader 5 Platform",
    desc: "Execute metals trades with full charting, indicators, automated trading strategies, and one-click order execution on the industry-standard MT5 platform.",
  },
  {
    title: "No Physical Delivery",
    desc: "Trade metals as CFDs — speculate on price movements without the logistics, storage costs, or insurance requirements of holding physical gold or silver.",
  },
];

const priceDrivers = [
  {
    factor: "USD Strength",
    impact: "High",
    desc: "Gold and Silver are priced in USD. A stronger dollar typically makes metals more expensive for non-USD holders, weighing on prices.",
  },
  {
    factor: "Real Interest Rates",
    impact: "High",
    desc: "Lower real rates reduce the opportunity cost of holding non-yielding metals, supporting prices. Rising real rates tend to weigh on Gold.",
  },
  {
    factor: "Inflation Expectations",
    impact: "High",
    desc: "Precious metals are traditional inflation hedges. Rising CPI expectations often boost demand for Gold and Silver as a store of value.",
  },
  {
    factor: "Central Bank Buying",
    impact: "Medium",
    desc: "Global central banks hold gold as a reserve asset. Large-scale purchases — especially by emerging market central banks — shift supply/demand dynamics.",
  },
  {
    factor: "Geopolitical Tension",
    impact: "Medium",
    desc: "Wars, sanctions, and political instability drive safe-haven flows into Gold, often causing sharp short-term price spikes.",
  },
  {
    factor: "Industrial & Tech Demand",
    impact: "Medium",
    desc: "Silver, Palladium, and Platinum have critical industrial uses in EVs, solar panels, electronics, and catalytic converters.",
  },
];

const faqs = [
  {
    q: "What metals can I trade with Olla Trade?",
    a: "Olla Trade offers CFD trading on four precious metals: Gold (XAU/USD), Silver (XAG/USD), Palladium (XPD/USD), and Platinum (XPT/USD). All are traded as spot CFDs on the MetaTrader 5 platform — no physical ownership or delivery involved.",
  },
  {
    q: "What are the trading hours for Gold?",
    a: "Gold (XAU/USD) and other precious metals are available for trading 24 hours a day, Monday through Friday. Markets are closed over the weekend from Friday evening until Sunday evening (times in GMT+2). This gives you access to price movements driven by global macroeconomic events.",
  },
  {
    q: "What leverage is available for metals trading?",
    a: "Gold (XAU/USD) and Silver (XAG/USD) are available with leverage up to 1:100. Palladium (XPD/USD) and Platinum (XPT/USD) are available with leverage up to 1:50. Leverage increases both potential gains and potential losses — please ensure you understand the risks before trading.",
  },
  {
    q: "Is there a commission on metals trades?",
    a: "Metals CFDs on Olla Trade are commission-free on Standard accounts — the cost of trading is built into the spread. On Elite accounts, spreads may be tighter and a per-lot commission may apply. Overnight positions (swaps) may incur financing charges. Please refer to your account agreement for full details.",
  },
  {
    q: "Can I hold metals positions overnight?",
    a: "Yes, you can hold metals CFD positions overnight. A swap rate (rollover fee) will be applied at the end of each trading day to reflect the cost of financing the position. Swap rates for Gold and Silver are displayed in the MT5 platform under the instrument specifications.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────────────────── */
export default async function MetalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="hero-navy relative overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <SlideLeft>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[12px] text-white/30 mb-6 font-medium">
                <Link href="/markets" className="hover:text-white/60 transition-colors">
                  Markets
                </Link>
                <span>/</span>
                <span className="text-white/55">Metals</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/10 rounded-full px-3.5 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
                <span className="text-[11px] font-bold text-[#D4A017] uppercase tracking-widest">
                  Precious Metals
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Trade Gold,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4A017, #F5D77E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Silver & More
                </span>
              </h1>

              <p className="text-[16px] text-white/55 leading-relaxed mb-8 max-w-lg">
                Access Gold, Silver, Palladium, and Platinum as CFDs on MetaTrader
                5. Trade safe-haven assets and industrial metals with competitive
                spreads and no physical delivery.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-5 mb-9">
                {[
                  { value: "4", label: "Metals Available" },
                  { value: "0.20", label: "Gold Spread From" },
                  { value: "1:100", label: "Max Leverage" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="text-[11px] text-white/35 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary btn-lg"
                >
                  Start Trading Metals
                </Link>
                <Link href="/trading/accounts" className="btn-secondary btn-lg">
                  View Accounts
                </Link>
              </div>

              {/* Regulatory note */}
              <p className="text-[11px] text-white/20 mt-5 leading-relaxed">
                Olla Capital Financial Services L.L.C. — UAE SCA Reg. Lic. No.
                20200000416. CFDs carry significant risk. Losses can exceed
                deposits.
              </p>
            </SlideLeft>

            {/* Right — XAUUSD candlestick visual */}
            <SlideRight delay={0.1}>
              <div className="relative">
                {/* Chart card */}
                <div
                  className="rounded-2xl border border-white/8 p-6 relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
                        style={{ background: "rgba(212,160,23,0.18)", color: "#D4A017" }}
                      >
                        Au
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-white">XAU/USD</div>
                        <div className="text-[11px] text-white/35">Gold Spot</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[18px] font-extrabold text-white">
                        3,214.50
                      </div>
                      <div className="text-[11px] font-semibold text-emerald-400">
                        +12.30 (+0.38%)
                      </div>
                    </div>
                  </div>

                  {/* SVG Candlestick Chart */}
                  <svg
                    viewBox="0 0 340 120"
                    className="w-full"
                    aria-label="XAUUSD price chart"
                  >
                    {/* Grid lines */}
                    {[20, 50, 80, 110].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="340"
                        y2={y}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Candlesticks — 14 candles */}
                    {[
                      { x: 14,  o: 80, c: 65, h: 58, l: 85, bull: true  },
                      { x: 36,  o: 65, c: 72, h: 55, l: 78, bull: false },
                      { x: 58,  o: 72, c: 60, h: 52, l: 76, bull: true  },
                      { x: 80,  o: 60, c: 50, h: 42, l: 65, bull: true  },
                      { x: 102, o: 50, c: 62, h: 38, l: 68, bull: false },
                      { x: 124, o: 62, c: 55, h: 48, l: 68, bull: true  },
                      { x: 146, o: 55, c: 45, h: 38, l: 62, bull: true  },
                      { x: 168, o: 45, c: 52, h: 36, l: 58, bull: false },
                      { x: 190, o: 52, c: 40, h: 32, l: 56, bull: true  },
                      { x: 212, o: 40, c: 30, h: 22, l: 46, bull: true  },
                      { x: 234, o: 30, c: 38, h: 18, l: 44, bull: false },
                      { x: 256, o: 38, c: 28, h: 15, l: 42, bull: true  },
                      { x: 278, o: 28, c: 18, h: 10, l: 34, bull: true  },
                      { x: 300, o: 18, c: 12, h:  6, l: 24, bull: true  },
                    ].map(({ x, o, c, h, l, bull }) => {
                      const color = bull ? "#34D399" : "#F87171";
                      const bodyTop = Math.min(o, c);
                      const bodyH = Math.abs(o - c) || 2;
                      return (
                        <g key={x}>
                          {/* Wick */}
                          <line
                            x1={x + 7}
                            y1={h}
                            x2={x + 7}
                            y2={l}
                            stroke={color}
                            strokeWidth="1.2"
                            opacity="0.7"
                          />
                          {/* Body */}
                          <rect
                            x={x}
                            y={bodyTop}
                            width="14"
                            height={bodyH}
                            rx="1.5"
                            fill={color}
                            opacity="0.85"
                          />
                        </g>
                      );
                    })}

                    {/* Trend line overlay */}
                    <polyline
                      points="14,80 58,68 102,54 146,48 190,40 234,32 278,22 320,14"
                      fill="none"
                      stroke="#D4A017"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      opacity="0.5"
                    />
                  </svg>

                  {/* Spread badge */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/6">
                    <div className="text-[11px] text-white/30">Spread</div>
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(212,160,23,0.15)",
                        color: "#D4A017",
                        border: "1px solid rgba(212,160,23,0.3)",
                      }}
                    >
                      From 0.20
                    </span>
                  </div>
                </div>

                {/* Floating metal chips */}
                {[
                  { sym: "XAG/USD", name: "Silver", color: "#9CA3AF", top: "8%",  left: "-18%" },
                  { sym: "XPD/USD", name: "Palladium", color: "#60A5FA", top: "55%", left: "-20%" },
                  { sym: "XPT/USD", name: "Platinum", color: "#A78BFA", top: "75%", left: "82%" },
                ].map(({ sym, name, color, top, left }) => (
                  <div
                    key={sym}
                    className="absolute hidden lg:flex items-center gap-2 rounded-xl px-3 py-2 border"
                    style={{
                      top,
                      left,
                      background: "rgba(7,17,31,0.9)",
                      borderColor: `${color}30`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: color }}
                    />
                    <div>
                      <div
                        className="text-[11px] font-bold"
                        style={{ color }}
                      >
                        {sym}
                      </div>
                      <div className="text-[10px] text-white/30">{name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT YOU CAN TRADE ────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              Tradable Instruments
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              What You Can Trade
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto text-[15px]">
              Four precious metals available as spot CFDs on MetaTrader 5. Trade
              price movements without physical ownership or storage costs.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metals.map((m) => (
              <div
                key={m.sym}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-md transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[20px] font-extrabold text-[#111827]">
                      {m.sym}
                    </div>
                    <div className="text-[12px] text-[#6B7280] mt-0.5">{m.name}</div>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mt-0.5"
                    style={{
                      background: m.bgColor,
                      color: m.color,
                      border: `1px solid ${m.borderColor}`,
                    }}
                  >
                    {m.badge}
                  </span>
                </div>

                {/* Category */}
                <div className="inline-flex items-center gap-1 mb-3">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      background: `${m.color}10`,
                      color: m.color,
                    }}
                  >
                    {m.category}
                  </span>
                </div>

                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-5">
                  {m.desc}
                </p>

                {/* Specs */}
                <div className="space-y-2 pt-3 border-t border-gray-50">
                  <div className="flex justify-between text-[12px]">
                    <span className="text-[#6B7280]">Spread</span>
                    <span className="font-bold text-[#111827]">{m.spread}</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-[#6B7280]">Leverage</span>
                    <span
                      className="font-bold"
                      style={{ color: m.color }}
                    >
                      {m.leverage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 3. WHY TRADE METALS ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              Why Trade Precious Metals?
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-xl mx-auto text-[15px]">
              Gold, Silver, Palladium, and Platinum offer unique characteristics
              driven by macro forces, safe-haven demand, and industrial
              fundamentals.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-[#F6F8FB] rounded-2xl border border-[#BAE2F5]/40 p-6 hover:border-[#1A90C3]/30 hover:shadow-sm transition-all"
              >
                {/* Accent dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A90C3] mb-4" />
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 4. TRADING CONDITIONS TABLE ──────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              Specifications
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              Trading Conditions
            </h2>
            <p className="text-[#6B7280] text-center mb-10 max-w-xl mx-auto text-[15px]">
              All figures are indicative under normal market conditions. Spreads
              are variable and may widen during periods of low liquidity.
            </p>
          </FadeUp>

          <FadeIn delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-[#BAE2F5]/60 shadow-sm bg-white">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="bg-[#EBF5FB] border-b border-[#BAE2F5]">
                    {["Instrument", "Symbol", "Spread From", "Leverage", "Trading Hours"].map(
                      (h, i) => (
                        <th
                          key={h}
                          className="px-5 py-4 text-[11px] font-bold uppercase tracking-wider text-left"
                          style={{ color: i === 2 ? "#1A90C3" : "#6B7280" }}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {conditions.map((row) => (
                    <tr
                      key={row.Symbol}
                      className="hover:bg-[#F6F8FB] transition-colors"
                    >
                      <td className="px-5 py-4 font-semibold text-[#111827] text-[13px]">
                        {row.Instrument}
                      </td>
                      <td className="px-5 py-4 font-mono text-[12px] text-[#6B7280]">
                        {row.Symbol}
                      </td>
                      <td
                        className="px-5 py-4 text-[13px] font-bold"
                        style={{ color: "#1A90C3" }}
                      >
                        {row["Spread From"]}
                      </td>
                      <td className="px-5 py-4 text-[13px] text-[#111827] font-medium">
                        {row.Leverage}
                      </td>
                      <td className="px-5 py-4 text-[13px] text-[#6B7280]">
                        {row["Trading Hours"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#6B7280] text-center mt-3">
              Spreads are variable. Past trading conditions are not indicative of
              future conditions. Trading CFDs involves significant risk.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. PLATFORM SECTION ──────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "#07111F" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <SlideLeft>
              <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4">
                Platform
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-5">
                Trade Metals on MetaTrader 5
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                MetaTrader 5 is the industry-standard platform trusted by millions
                of traders worldwide. Access Gold, Silver, Palladium, and Platinum
                with advanced charting tools, automated trading (Expert Advisors),
                and one-click execution — from desktop, web, or mobile.
              </p>

              <ul className="space-y-3 mb-9">
                {[
                  "Advanced charting with 80+ technical indicators",
                  "Automated trading via Expert Advisors (EAs)",
                  "Full MT5 desktop, WebTrader & mobile app",
                  "Real-time pricing and depth of market",
                  "One-click order execution with risk management tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-white/55">
                    <svg
                      className="w-4 h-4 text-[#1A90C3] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary"
                >
                  Open MT5 Account
                </Link>
                <Link href="/trading/platforms" className="btn-secondary">
                  Learn About MT5
                </Link>
              </div>
            </SlideLeft>

            {/* Right — MT5 interface mockup */}
            <SlideRight delay={0.1}>
              <div
                className="rounded-2xl border border-white/8 p-6"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {/* Toolbar */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <div
                    className="ml-3 text-[11px] font-semibold text-white/30 flex-1 text-center rounded-full py-1 px-3"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    MetaTrader 5 — XAU/USD
                  </div>
                </div>

                {/* Symbol watchlist */}
                <div className="space-y-1.5 mb-5">
                  {[
                    { sym: "XAU/USD", price: "3,214.50", chg: "+0.38%", bull: true,  color: "#D4A017" },
                    { sym: "XAG/USD", price: "  32.840", chg: "+0.91%", bull: true,  color: "#9CA3AF" },
                    { sym: "XPD/USD", price: "1,082.00", chg: "-0.24%", bull: false, color: "#60A5FA" },
                    { sym: "XPT/USD", price: "  968.50", chg: "+0.15%", bull: true,  color: "#A78BFA" },
                  ].map(({ sym, price, chg, bull, color }) => (
                    <div
                      key={sym}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: color }}
                        />
                        <span className="text-[12px] font-bold text-white font-mono">
                          {sym}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-mono text-white/70">{price}</span>
                        <span
                          className="text-[11px] font-bold"
                          style={{ color: bull ? "#34D399" : "#F87171" }}
                        >
                          {chg}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order panel */}
                <div
                  className="rounded-xl p-4 border border-white/6"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-3">
                    New Order — XAU/USD
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div
                      className="rounded-lg py-2 text-center text-[12px] font-bold text-emerald-400"
                      style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)" }}
                    >
                      Buy 3,214.63
                    </div>
                    <div
                      className="rounded-lg py-2 text-center text-[12px] font-bold text-red-400"
                      style={{ background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.2)" }}
                    >
                      Sell 3,214.43
                    </div>
                  </div>
                  <div className="text-[10px] text-white/20 text-center">
                    Spread: 0.20 pts · Leverage: 1:100
                  </div>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              FAQ
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-10 text-center">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <StaggerChildren className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-gray-100 bg-[#F6F8FB] overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-[14px] font-bold text-[#111827] pr-4">{q}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-[#BAE2F5] flex items-center justify-center transition-transform group-open:rotate-45"
                    style={{ background: "#EBF5FB" }}
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#1A90C3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-[13px] text-[#6B7280] leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: "#07111F" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#D4A017]/30 bg-[#D4A017]/8 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              <span className="text-[11px] font-bold text-[#D4A017] uppercase tracking-widest">
                Start Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Trade Precious Metals?
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed mb-9 max-w-xl mx-auto">
              Open an account with Olla Trade and access Gold, Silver,
              Palladium, and Platinum on MetaTrader 5. No physical delivery, no
              storage costs — just pure price exposure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-lg"
              >
                Open Account
              </Link>
              <Link href="/markets" className="btn-secondary btn-lg">
                View All Markets
              </Link>
            </div>

            <p className="text-[11px] text-white/18 mt-8 leading-relaxed max-w-lg mx-auto">
              Olla Capital Financial Services L.L.C. UAE SCA Reg. Lic. No.
              20200000416. CFDs are complex instruments and carry a high level of
              risk. Losses can exceed your deposited capital. Ensure you fully
              understand the risks before trading.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
