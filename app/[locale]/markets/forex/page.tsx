import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "../../../components/ui/Animate";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import CTASection from "../../../components/CTASection";
import {
  IconGlobe, IconClock, IconDroplet, IconPercent, IconBolt, IconLayers,
  IconShieldCheck, IconCode, IconBarChart, IconActivity,
} from "../../../components/ui/Icons";

/* ─── SEO ──────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Forex Trading — 70+ Currency Pairs | Olla Trade",
  description:
    "Trade 70+ forex currency pairs with Olla Trade. Spreads from 0.0 pips, leverage up to 1:500, 24/5 market access on MetaTrader 5. UAE SCA regulated.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

const FONT = "'Century Gothic', 'CenturyGothic', 'AppleGothic', sans-serif";

/* ─── Static data ──────────────────────────────────────────────────────── */

const majorPairs = [
  { symbol: "EUR/USD", name: "Euro / US Dollar",             spread: "0.0 pips", leverage: "1:500" },
  { symbol: "GBP/USD", name: "British Pound / US Dollar",    spread: "0.0 pips", leverage: "1:500" },
  { symbol: "USD/JPY", name: "US Dollar / Japanese Yen",     spread: "0.0 pips", leverage: "1:500" },
  { symbol: "AUD/USD", name: "Australian Dollar / US Dollar",spread: "0.1 pips", leverage: "1:500" },
  { symbol: "USD/CAD", name: "US Dollar / Canadian Dollar",  spread: "0.1 pips", leverage: "1:500" },
  { symbol: "USD/CHF", name: "US Dollar / Swiss Franc",      spread: "0.1 pips", leverage: "1:500" },
];

const minorPairs = [
  { symbol: "EUR/GBP", name: "Euro / British Pound",          spread: "0.2 pips", leverage: "1:200" },
  { symbol: "EUR/JPY", name: "Euro / Japanese Yen",           spread: "0.2 pips", leverage: "1:200" },
  { symbol: "GBP/JPY", name: "British Pound / Japanese Yen",  spread: "0.3 pips", leverage: "1:200" },
  { symbol: "AUD/JPY", name: "Australian Dollar / Yen",       spread: "0.3 pips", leverage: "1:200" },
  { symbol: "EUR/AUD", name: "Euro / Australian Dollar",      spread: "0.3 pips", leverage: "1:200" },
  { symbol: "CHF/JPY", name: "Swiss Franc / Japanese Yen",    spread: "0.4 pips", leverage: "1:200" },
];

const exoticPairs = [
  { symbol: "USD/TRY", name: "US Dollar / Turkish Lira",      spread: "2.0 pips", leverage: "1:100" },
  { symbol: "USD/ZAR", name: "US Dollar / South African Rand",spread: "2.5 pips", leverage: "1:100" },
  { symbol: "EUR/NOK", name: "Euro / Norwegian Krone",         spread: "1.5 pips", leverage: "1:100" },
  { symbol: "USD/MXN", name: "US Dollar / Mexican Peso",       spread: "1.8 pips", leverage: "1:100" },
  { symbol: "USD/SGD", name: "US Dollar / Singapore Dollar",   spread: "1.2 pips", leverage: "1:100" },
  { symbol: "GBP/SEK", name: "British Pound / Swedish Krona",  spread: "2.0 pips", leverage: "1:100" },
];

const conditionsRows = [
  { Instrument: "EUR/USD", "Spread From": "0.0 pips", Leverage: "1:500", "Min Trade": "0.01 lots", "Trading Hours": "Mon–Fri 24h" },
  { Instrument: "GBP/USD", "Spread From": "0.0 pips", Leverage: "1:500", "Min Trade": "0.01 lots", "Trading Hours": "Mon–Fri 24h" },
  { Instrument: "USD/JPY", "Spread From": "0.0 pips", Leverage: "1:500", "Min Trade": "0.01 lots", "Trading Hours": "Mon–Fri 24h" },
  { Instrument: "AUD/USD", "Spread From": "0.1 pips", Leverage: "1:500", "Min Trade": "0.01 lots", "Trading Hours": "Mon–Fri 24h" },
  { Instrument: "USD/CAD", "Spread From": "0.1 pips", Leverage: "1:500", "Min Trade": "0.01 lots", "Trading Hours": "Mon–Fri 24h" },
  { Instrument: "USD/CHF", "Spread From": "0.1 pips", Leverage: "1:500", "Min Trade": "0.01 lots", "Trading Hours": "Mon–Fri 24h" },
];

const whyFeatures = [
  { Icon: IconGlobe,      title: "70+ Currency Pairs",    desc: "Access major, minor, and exotic forex pairs covering every major economic region, all through a single MT5 account." },
  { Icon: IconClock,      title: "24/5 Market Access",    desc: "Trade forex around the clock from Sunday 22:00 GMT to Friday 22:00 GMT — covering all four global trading sessions." },
  { Icon: IconDroplet,    title: "Spreads from 0.0 Pips", desc: "Competitive variable spreads starting from 0.0 pips on major pairs under normal market conditions." },
  { Icon: IconPercent,    title: "Leverage up to 1:500",  desc: "Access leverage up to 1:500 on major forex pairs, subject to regulatory requirements and account type." },
  { Icon: IconBolt,       title: "Fast Execution",        desc: "Orders are routed directly to liquidity providers, targeting fast execution with no dealing desk intervention on Forex CFDs." },
  { Icon: IconLayers,     title: "MetaTrader 5 Platform", desc: "Trade on MT5 — industry-leading charting, Expert Advisors, 21 timeframes, and full algorithmic trading support." },
];

const mt5Features = [
  { Icon: IconBarChart,    title: "Advanced Charting",    desc: "21 timeframes, 80+ technical indicators, and comprehensive drawing tools for in-depth market analysis." },
  { Icon: IconCode,        title: "Expert Advisors (EA)", desc: "Automate strategies with MQL5, use the marketplace EA library, and backtest against historical Forex data." },
  { Icon: IconActivity,    title: "Market Depth (DOM)",   desc: "View multiple levels of liquidity directly in the platform, giving greater transparency into pricing." },
  { Icon: IconShieldCheck, title: "Secure & Reliable",    desc: "MT5 is built with enterprise-grade security, encrypted data transfer, and multi-level account protection." },
];

const HOW_WORKS = [
  {
    step: "01",
    title: "Choose a Currency Pair",
    desc: "Select from 70+ pairs — majors like EUR/USD, crosses like EUR/GBP, or exotics like USD/TRY. Each pair represents the exchange rate between two currencies.",
  },
  {
    step: "02",
    title: "Decide Your Direction",
    desc: "If you believe the base currency will strengthen, you BUY. If you expect it to weaken against the quote currency, you SELL. You can profit in both directions.",
  },
  {
    step: "03",
    title: "Set Your Position Size",
    desc: "Trade from as little as 0.01 lots. Use leverage to amplify your exposure — but remember, leverage magnifies both gains and losses.",
  },
  {
    step: "04",
    title: "Monitor & Close",
    desc: "Track your open position in real time on MT5. Close when your profit target is reached, your stop-loss is hit, or at any time of your choosing during market hours.",
  },
];

const GUIDES = [
  {
    category: "Beginner",
    title: "Understanding Forex Trading: A Complete Beginner's Guide",
    desc: "Learn the fundamentals of currency pairs, pips, lots, and how the forex market operates globally.",
    href: "#",
    color: "#1A90C3",
  },
  {
    category: "Intermediate",
    title: "Forex Risk Management: Strategies from Setup to Execution",
    desc: "Discover how to use stop-losses, position sizing, and risk-reward ratios to protect your capital.",
    href: "#",
    color: "#7C3AED",
  },
  {
    category: "Advanced",
    title: "Reading the Forex Market: From Technical to Macro Analysis",
    desc: "Explore how economic data, central bank policy, and price action converge to drive currency movements.",
    href: "#",
    color: "#0D6B99",
  },
];

const TRADING_HOURS = [
  { session: "Sydney",    opens: "22:00 Sun",  closes: "07:00 Mon",  pairs: "AUD, NZD pairs most active",  color: "#10B981" },
  { session: "Tokyo",     opens: "00:00 Mon",  closes: "09:00 Mon",  pairs: "JPY, AUD pairs most active",  color: "#F59E0B" },
  { session: "London",    opens: "08:00 Mon",  closes: "17:00 Mon",  pairs: "EUR, GBP pairs most active",  color: "#1A90C3" },
  { session: "New York",  opens: "13:00 Mon",  closes: "22:00 Mon",  pairs: "USD, CAD pairs most active",  color: "#EF4444" },
];

/* ─── Hero SVG Visual ───────────────────────────────────────────────────── */
function ForexHeroVisual() {
  const rows = [
    { pair: "EUR/USD", bid: "1.08472", ask: "1.08479", change: "+0.0012", up: true  },
    { pair: "GBP/USD", bid: "1.27384", ask: "1.27396", change: "-0.0008", up: false },
    { pair: "USD/JPY", bid: "156.234", ask: "156.248", change: "+0.142",  up: true  },
    { pair: "AUD/USD", bid: "0.65123", ask: "0.65134", change: "+0.0004", up: true  },
    { pair: "USD/CAD", bid: "1.36812", ask: "1.36825", change: "-0.0006", up: false },
    { pair: "USD/CHF", bid: "0.90147", ask: "0.90158", change: "+0.0003", up: true  },
    { pair: "EUR/GBP", bid: "0.85214", ask: "0.85228", change: "+0.0007", up: true  },
    { pair: "GBP/JPY", bid: "198.521", ask: "198.548", change: "+0.084",  up: true  },
  ];
  return (
    <svg viewBox="0 0 480 460" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="460" rx="16" fill="#050D18" />
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width="480" height="460" rx="16" fill="url(#grid)" />
      <ellipse cx="240" cy="0" rx="200" ry="80" fill="rgba(26,144,195,0.12)" />
      <rect x="0" y="0" width="480" height="44" rx="16" fill="#0B1928" />
      <rect x="0" y="28" width="480" height="16" fill="#0B1928" />
      <circle cx="20" cy="22" r="5" fill="rgba(239,83,80,0.7)" />
      <circle cx="36" cy="22" r="5" fill="rgba(255,167,38,0.7)" />
      <circle cx="52" cy="22" r="5" fill="rgba(38,166,154,0.7)" />
      <text x="72" y="27" fontSize="11" fill="rgba(255,255,255,0.55)" fontFamily="monospace">Olla Trade — Forex Quotes · MT5</text>
      <circle cx="442" cy="22" r="4" fill="#1A90C3" opacity="0.9" />
      <circle cx="442" cy="22" r="7" fill="rgba(26,144,195,0.25)" />
      <text x="452" y="26" fontSize="9" fill="#1A90C3" fontFamily="monospace">LIVE</text>
      <rect x="0" y="44" width="480" height="22" fill="rgba(255,255,255,0.03)" />
      <text x="16"  y="59" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontWeight="bold">SYMBOL</text>
      <text x="140" y="59" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontWeight="bold">BID</text>
      <text x="220" y="59" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontWeight="bold">ASK</text>
      <text x="320" y="59" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontWeight="bold">CHANGE</text>
      <text x="430" y="59" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontWeight="bold">SPREAD</text>
      <line x1="0" y1="66" x2="480" y2="66" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      {rows.map((r, i) => {
        const y = 66 + i * 47;
        const isActive = i === 0;
        const spreadPips = i < 3 ? "0.0" : i < 6 ? "0.1" : "0.2";
        return (
          <g key={r.pair}>
            {isActive && <rect x="0" y={y} width="480" height="47" fill="rgba(26,144,195,0.07)" />}
            <line x1="0" y1={y + 47} x2="480" y2={y + 47} stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
            <text x="16" y={y + 20} fontSize="12.5" fill={isActive ? "#1A90C3" : "rgba(255,255,255,0.75)"} fontFamily="monospace" fontWeight={isActive ? "bold" : "normal"}>{r.pair}</text>
            {[0.4, 0.6, 0.5, 0.7, 0.55, 0.8, 0.65, 0.9].map((h, bi) => (
              <rect key={bi} x={16 + bi * 10} y={y + 30 + (1 - h) * 12} width="6" height={h * 12} rx="1" fill={r.up ? "rgba(38,166,154,0.35)" : "rgba(239,83,80,0.35)"} />
            ))}
            <text x="140" y={y + 22} fontSize="12" fill="rgba(255,255,255,0.7)" fontFamily="monospace">{r.bid}</text>
            <text x="220" y={y + 22} fontSize="12" fill="rgba(255,255,255,0.7)" fontFamily="monospace">{r.ask}</text>
            <text x="320" y={y + 22} fontSize="12" fill={r.up ? "#26a69a" : "#ef5350"} fontFamily="monospace" fontWeight="bold">{r.change}</text>
            <rect x="428" y={y + 11} width="40" height="18" rx="4" fill={isActive ? "rgba(26,144,195,0.25)" : "rgba(255,255,255,0.06)"} stroke={isActive ? "rgba(26,144,195,0.5)" : "rgba(255,255,255,0.08)"} strokeWidth="0.7" />
            <text x="448" y={y + 24} fontSize="10" fill={isActive ? "#1A90C3" : "rgba(255,255,255,0.45)"} fontFamily="monospace" textAnchor="middle">{spreadPips}</text>
          </g>
        );
      })}
      <rect x="0" y="442" width="480" height="18" rx="8" fill="rgba(255,255,255,0.02)" />
      <rect x="0" y="442" width="480" height="10" fill="rgba(255,255,255,0.02)" />
      <text x="16" y="455" fontSize="8" fill="rgba(255,255,255,0.2)" fontFamily="monospace">Olla Capital Financial Services L.L.C. · UAE SCA Reg. No. 20200000416 · Spreads variable</text>
    </svg>
  );
}

/* ─── Pair card ────────────────────────────────────────────────────────── */
function PairCard({ symbol, name, spread, leverage, accent }: {
  symbol: string; name: string; spread: string; leverage: string; accent: string;
}) {
  return (
    <div
      className="bg-white rounded-xl border border-[#E5E7EB] p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-[13px] font-bold text-[#111827] font-mono">{symbol}</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
          style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}>
          {leverage}
        </span>
      </div>
      <p className="text-[11px] text-[#6B7280] leading-tight mb-3">{name}</p>
      <div className="flex items-center gap-1">
        <span className="text-[10px] text-[#6B7280]">From</span>
        <span className="text-[12px] font-bold" style={{ color: accent }}>{spread}</span>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default async function ForexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ fontFamily: FONT }}>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════════════════ */}
      <section className="hero-navy section-py overflow-hidden">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <SlideLeft>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/35 mb-6">
                <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/markets" className="hover:text-white/60 transition-colors">Markets</Link>
                <span>/</span>
                <span className="text-white/55">Forex</span>
              </nav>

              <div className="badge-navy mb-5 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A90C3]" />
                Forex Markets
              </div>

              <h1 className="font-extrabold text-white leading-tight mb-5"
                style={{ fontSize: "clamp(34px,5vw,60px)", letterSpacing: "-0.02em" }}>
                Trade Popular{" "}
                <span className="text-gradient">Currency Pairs</span>
              </h1>

              <p className="text-[16px] text-white/55 leading-relaxed mb-8 max-w-xl">
                Tap into the world&apos;s most liquid financial market. Trade 70+ currency pairs with
                spreads from 0.0 pips, leverage up to 1:500, and 24/5 access on MetaTrader 5.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-5 mb-10">
                {[
                  { value: "70+",   label: "Currency Pairs" },
                  { value: "0.0",   label: "Pips from"      },
                  { value: "1:500", label: "Max Leverage"   },
                  { value: "24/5",  label: "Market Access"  },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-[22px] font-extrabold text-white leading-none">{value}</div>
                    <div className="text-[11px] text-white/35 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="https://portal.ollatrade.com/auth/register" className="btn-primary btn-lg">
                  Start Trading Forex
                </Link>
                <Link href="/trading/accounts" className="btn-secondary btn-lg">
                  View Accounts
                </Link>
              </div>
            </SlideLeft>

            {/* Right — SVG Visual */}
            <SlideRight delay={0.1}>
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(26,144,195,0.12) 0%, transparent 70%)" }}
                />
                <div className="relative rounded-2xl overflow-hidden border shadow-2xl"
                  style={{ borderColor: "rgba(26,144,195,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(26,144,195,0.1)" }}>
                  <ForexHeroVisual />
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — HOW FOREX TRADING WORKS
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="text-center mb-14">
            <div className="badge mb-4 inline-block">Education</div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] leading-tight mb-4"
              style={{ letterSpacing: "-0.025em" }}>
              How Does Forex Trading Work?
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-[15px] leading-relaxed">
              Forex (foreign exchange) trading involves exchanging one currency for another with the aim of
              profiting from price fluctuations. It is the largest financial market in the world, with over
              $7 trillion traded daily — and it is open 24 hours a day, five days a week.
            </p>
          </FadeUp>

          {/* 4-step how it works */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {HOW_WORKS.map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.08}>
                <div
                  style={{
                    background: "#F5F7FA",
                    borderRadius: 20,
                    padding: "32px 28px",
                    height: "100%",
                    borderTop: "3px solid #1A90C3",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#1A90C3",
                      letterSpacing: "0.06em",
                      marginBottom: 14,
                    }}
                  >
                    STEP {item.step}
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 12,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Info callout */}
          <FadeUp delay={0.2} className="mt-10">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(26,144,195,0.06) 0%, rgba(13,107,153,0.06) 100%)",
                border: "1px solid rgba(26,144,195,0.18)",
                borderRadius: 16,
                padding: "24px 28px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg style={{ width: 18, height: 18 }} fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1A90C3", marginBottom: 6 }}>
                  Understanding Currency Pairs
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.75, maxWidth: 760 }}>
                  Every forex trade involves two currencies — the <strong>base currency</strong> (the first) and
                  the <strong>quote currency</strong> (the second). For example, in EUR/USD, EUR is the base and USD
                  is the quote. The price tells you how much USD is needed to buy 1 EUR. When you trade forex,
                  you are simultaneously buying one currency and selling the other.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — TRADING EXAMPLE
          ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-py overflow-hidden"
        style={{ background: "linear-gradient(135deg, #07111F 0%, #0D3A5C 55%, #0D6B99 100%)" }}
      >
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="text-center mb-14">
            <div className="badge-navy mb-4 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A90C3]" />
              Live Example
            </div>
            <h2
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.025em" }}
            >
              Forex Trading Example
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-xl mx-auto">
              Here is a step-by-step walkthrough of a GBP/USD short trade to illustrate how forex
              trading works on the Olla Trade platform.
            </p>
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 28,
            }}
          >
            {/* Step 1 — Opening */}
            <ScaleIn delay={0}>
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(26,144,195,0.2)",
                    border: "1px solid rgba(26,144,195,0.35)",
                    borderRadius: 8,
                    padding: "4px 12px",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1A90C3", display: "inline-block" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#60C8F0", letterSpacing: "0.06em" }}>STEP 1 — OPEN POSITION</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#FFFFFF", marginBottom: 4, fontFamily: "monospace" }}>GBP/USD</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>British Pound / US Dollar</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Action",     value: "SELL (Short)",    highlight: false },
                    { label: "Price",      value: "1.41455 / 1.41456", highlight: false },
                    { label: "Lots",       value: "3 Standard Lots", highlight: false },
                    { label: "Contract",   value: "£300,000",        highlight: false },
                    { label: "Entry Value",value: "$424,365.00",     highlight: true  },
                  ].map((r) => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{r.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: r.highlight ? "#1A90C3" : "rgba(255,255,255,0.85)", fontFamily: r.label === "Price" || r.label === "Lots" ? "monospace" : "inherit" }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>

            {/* Step 2 — Closing */}
            <ScaleIn delay={0.12}>
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 8,
                    padding: "4px 12px",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#6EE7B7", letterSpacing: "0.06em" }}>STEP 2 — CLOSE POSITION</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#FFFFFF", marginBottom: 4, fontFamily: "monospace" }}>GBP/USD</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>Price moved in your favour</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Action",      value: "BUY (Close)",       highlight: false },
                    { label: "Price",       value: "1.39901 / 1.39902", highlight: false },
                    { label: "Lots",        value: "3 Standard Lots",   highlight: false },
                    { label: "Contract",    value: "£300,000",          highlight: false },
                    { label: "Exit Value",  value: "$419,706.00",       highlight: true  },
                  ].map((r) => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{r.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: r.highlight ? "#10B981" : "rgba(255,255,255,0.85)", fontFamily: r.label === "Price" || r.label === "Lots" ? "monospace" : "inherit" }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>

            {/* Step 3 — Result */}
            <ScaleIn delay={0.24}>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.06) 100%)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  border: "1px solid rgba(16,185,129,0.2)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(16,185,129,0.2)",
                      border: "1px solid rgba(16,185,129,0.35)",
                      borderRadius: 8,
                      padding: "4px 12px",
                      marginBottom: 20,
                    }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#6EE7B7", letterSpacing: "0.06em" }}>RESULT</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                    {[
                      { label: "Entry Value",  value: "$424,365.00" },
                      { label: "Exit Value",   value: "$419,706.00" },
                    ].map((r) => (
                      <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{r.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.8)", fontFamily: "monospace" }}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>Gross Profit</div>
                  <div style={{ fontSize: "clamp(40px,5vw,56px)", fontWeight: 900, color: "#10B981", letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "monospace" }}>
                    +$4,659
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 10 }}>
                    Before swap charges and spread costs.
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>

          <FadeUp delay={0.2}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
              This example is for illustrative purposes only and does not represent a guarantee of future results.
              Trading forex CFDs involves significant risk. Your actual profit or loss will depend on market
              conditions, spread, swap charges, and account type. Past performance is not indicative of future results.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — WHAT YOU CAN TRADE
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#F5F7FA]">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="text-center mb-12">
            <div className="badge mb-4 inline-block">Currency Pairs</div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] leading-tight mb-4"
              style={{ letterSpacing: "-0.025em" }}>
              What You Can Trade
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-[15px] leading-relaxed">
              Olla Trade offers all three forex pair categories — each with distinct liquidity, spread, and
              volatility profiles to suit different trading strategies.
            </p>
          </FadeUp>

          {/* Major Pairs */}
          <FadeUp delay={0.05} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[12px] font-bold text-[#1A90C3] uppercase tracking-widest">Major Pairs</span>
              <span className="badge">Highest Liquidity</span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-[12px] text-[#6B7280]">Spreads from 0.0 pips · 1:500 Leverage</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {majorPairs.map((p) => <PairCard key={p.symbol} {...p} accent="#1A90C3" />)}
            </div>
          </FadeUp>

          {/* Minor Pairs */}
          <FadeUp delay={0.1} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[12px] font-bold text-[#7C3AED] uppercase tracking-widest">Minor Pairs</span>
              <span className="badge">Cross Currencies</span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-[12px] text-[#6B7280]">Spreads from 0.2 pips · 1:200 Leverage</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {minorPairs.map((p) => <PairCard key={p.symbol} {...p} accent="#7C3AED" />)}
            </div>
          </FadeUp>

          {/* Exotic Pairs */}
          <FadeUp delay={0.15}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[12px] font-bold text-[#F59E0B] uppercase tracking-widest">Exotic Pairs</span>
              <span className="badge">Emerging Markets</span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-[12px] text-[#6B7280]">Spreads from 1.2 pips · 1:100 Leverage</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {exoticPairs.map((p) => <PairCard key={p.symbol} {...p} accent="#F59E0B" />)}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — WHY TRADE FOREX WITH Olla
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">
          <FadeUp className="text-center mb-12">
            <div className="badge mb-4 inline-block">Why Olla</div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] leading-tight mb-4"
              style={{ letterSpacing: "-0.025em" }}>
              Why Trade Forex with Olla Trade
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-[15px] leading-relaxed">
              Transparent trading conditions, advanced tools, and a regulated environment — built for
              traders who demand more from their forex broker.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <FeatureGrid features={whyFeatures} cols={3} />
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — TRADING CONDITIONS TABLE
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#F5F7FA]">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">
          <FadeUp className="text-center mb-10">
            <div className="badge mb-4 inline-block">Conditions</div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] leading-tight mb-4"
              style={{ letterSpacing: "-0.025em" }}>
              Forex Trading Conditions
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-[15px] leading-relaxed">
              Indicative conditions under normal market conditions. Spreads are variable and may widen
              during major news events or periods of low liquidity.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <TradingConditionsTable
              title="Major Currency Pairs — Indicative Conditions"
              headers={["Instrument", "Spread From", "Leverage", "Min Trade", "Trading Hours"]}
              rows={conditionsRows}
              highlightCol={1}
            />
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-[11px] text-[#6B7280] text-center mt-4">
              Spreads shown are indicative. Actual spreads are variable and depend on market conditions.
              Leverage is subject to regulatory requirements and account type.
              Olla Capital Financial Services L.L.C. is regulated by the UAE SCA, Lic. No. 20200000416.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — TRADING HOURS
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="text-center mb-14">
            <div className="badge mb-4 inline-block">Market Hours</div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] leading-tight mb-4"
              style={{ letterSpacing: "-0.025em" }}>
              Forex Market Trading Hours
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-[15px] leading-relaxed">
              The forex market operates 24 hours a day, five days a week, across four major global
              sessions. Each session has unique liquidity characteristics and active pairs.
            </p>
          </FadeUp>

          {/* Session cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 40 }}>
            {TRADING_HOURS.map((s, i) => (
              <FadeUp key={s.session} delay={i * 0.08}>
                <div
                  style={{
                    background: "#F5F7FA",
                    borderRadius: 18,
                    padding: "28px 24px",
                    borderTop: `3px solid ${s.color}`,
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#111827" }}>{s.session}</span>
                  </div>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, display: "block", marginBottom: 2 }}>Opens</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", fontFamily: "monospace" }}>{s.opens} GMT</span>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, display: "block", marginBottom: 2 }}>Closes</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", fontFamily: "monospace" }}>{s.closes} GMT</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6, borderTop: "1px solid #E5E7EB", paddingTop: 12 }}>
                    {s.pairs}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Summary info */}
          <FadeUp delay={0.15}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(26,144,195,0.05) 0%, rgba(13,107,153,0.05) 100%)",
                border: "1px solid rgba(26,144,195,0.15)",
                borderRadius: 16,
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24,
              }}
            >
              {[
                { label: "Standard Hours",  value: "Sun 22:00 – Fri 22:00 GMT",  note: "All major currency pairs" },
                { label: "Min Trade Size",  value: "0.01 Lots",                   note: "1,000 units of base currency" },
                { label: "Swap-Free",       value: "Available on request",         note: "Islamic account compatible" },
                { label: "Weekend Trading", value: "Unavailable",                  note: "Market closed Sat & Sun" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#1A90C3", marginBottom: 2 }}>{item.value}</div>
                  <div style={{ fontSize: 12, color: "#6B7280" }}>{item.note}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — MT5 PLATFORM
          ══════════════════════════════════════════════════════════════ */}
      <section className="hero-navy section-py overflow-hidden">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="text-center mb-14">
            <div className="badge-navy mb-5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A90C3]" />
              MetaTrader 5
            </div>
            <h2
              className="font-extrabold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.025em" }}
            >
              Trade Forex on MetaTrader 5
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-2xl mx-auto">
              MT5 is the industry-standard platform trusted by millions of professional traders.
              Advanced charting, algorithmic trading, and multi-device access — all in one environment.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <FeatureGrid features={mt5Features} cols={4} dark />
          </FadeUp>

          <FadeUp delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://portal.ollatrade.com/auth/register" className="btn-primary btn-lg inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download MT5
            </Link>
            <Link
              href="https://portal.ollatrade.com/auth/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold transition-all"
              style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18" />
              </svg>
              Launch WebTrader
            </Link>
          </FadeUp>

          <FadeUp delay={0.25} className="mt-8 flex flex-wrap gap-2 justify-center">
            {["Windows", "macOS (via WebTrader)", "iOS", "Android", "Web Browser"].map((p) => (
              <span key={p} className="tag">{p}</span>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — EDUCATIONAL GUIDES
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#F5F7FA]">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="text-center mb-12">
            <div className="badge mb-4 inline-block">Learn Forex</div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] leading-tight mb-4"
              style={{ letterSpacing: "-0.025em" }}>
              Educational Resources
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-[15px] leading-relaxed">
              Whether you are just starting out or refining your strategy, our forex guides cover
              everything from the basics to advanced risk management techniques.
            </p>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {GUIDES.map((g, i) => (
              <FadeUp key={g.title} delay={i * 0.1}>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: 20,
                    padding: "32px 28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.22s ease",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: `${g.color}12`,
                      border: `1px solid ${g.color}30`,
                      borderRadius: 8,
                      padding: "3px 10px",
                      marginBottom: 18,
                      alignSelf: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, color: g.color }}>{g.category}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#111827",
                      lineHeight: 1.4,
                      marginBottom: 12,
                      letterSpacing: "-0.01em",
                      flex: 1,
                    }}
                  >
                    {g.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.75, marginBottom: 20 }}>{g.desc}</p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 700,
                      color: g.color,
                    }}
                  >
                    Find Out More
                    <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 10 — GETTING STARTED
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="text-center mb-14">
            <div className="badge mb-4 inline-block">Get Started</div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#111827] leading-tight mb-4"
              style={{ letterSpacing: "-0.025em" }}>
              Start Trading Forex in 3 Steps
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-[15px] leading-relaxed">
              Opening a live trading account with Olla Trade takes just minutes.
            </p>
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 0,
              position: "relative",
            }}
          >
            {[
              {
                num: "1",
                title: "Register Your Account",
                desc: "Sign up at Olla Trade by filling in your personal details. Verification is fast — most accounts are approved within minutes.",
                icon: (
                  <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                num: "2",
                title: "Fund Your Account",
                desc: "Once verified, open a live account and make a deposit using one of our secure, convenient payment methods. Minimum deposit from $100.",
                icon: (
                  <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
              },
              {
                num: "3",
                title: "Download MT5 & Start Trading",
                desc: "Download MetaTrader 5 for your preferred device, log in with your credentials, and start trading 70+ forex pairs immediately.",
                icon: (
                  <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 36px",
                    position: "relative",
                  }}
                >
                  {/* Number bubble */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1A90C3 0%, #0D6B99 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                      boxShadow: "0 8px 24px rgba(26,144,195,0.3)",
                      color: "white",
                    }}
                  >
                    {step.icon}
                  </div>
                  {/* Step number */}
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#1A90C3",
                      letterSpacing: "0.1em",
                      marginBottom: 10,
                      textTransform: "uppercase",
                    }}
                  >
                    Step {step.num}
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 14,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.75, maxWidth: 280, margin: "0 auto" }}>
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-8 flex justify-center">
            <Link href="https://portal.ollatrade.com/auth/register" className="btn-primary btn-lg">
              Get Started Now
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          RISK WARNING
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-t border-[#E5E7EB]">
        <div className="container-narrow mx-auto px-4">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Forex Trading Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">
              Trading forex CFDs involves significant risk of loss and is not suitable for all investors. Leverage can
              work against you as well as in your favour. It is possible to lose more than your initial deposit. Forex
              prices are highly volatile and can be affected by macroeconomic events, central bank decisions, and
              geopolitical developments. Past performance is not a reliable indicator of future results. Please ensure
              you fully understand the risks and seek independent financial advice if necessary.
              Olla Capital Financial Services L.L.C. is regulated by the UAE Securities and Commodities Authority (SCA),
              Licence No. 20200000416. Registered address: Empire Heights Tower B, Business Bay, Dubai, UAE.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 11 — CTA
          ══════════════════════════════════════════════════════════════ */}
      <CTASection
        title="Start Trading Forex Today"
        subtitle="Open a live account in minutes and access 70+ currency pairs with competitive spreads on MetaTrader 5."
        primaryLabel="Open Account"
        secondaryLabel="Compare Accounts"
        secondaryHref="/trading/accounts"
      />
    </div>
  );
}
