import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  SlideLeft,
  SlideRight,
  ScaleIn,
  StaggerChildren,
} from "../../../components/ui/Animate";

/* ─────────────────────────────────────────────────────────── meta */

export const metadata: Metadata = {
  title: "Trade Stock Index CFDs — US30, NASDAQ, DAX & More | Olla Trade",
  description:
    "Trade the world's top stock indices as CFDs on MetaTrader 5. US30, US500, US100, DAX40, FTSE100, Nikkei and more. Leverage up to 1:100. Olla Capital Financial Services L.L.C. — UAE SCA licensed.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─────────────────────────────────────────────────────────── data */

const INDEX_CARDS = [
  {
    symbol: "US30",
    name: "Dow Jones Industrial",
    region: "USA",
    spread: "2.0",
    leverage: "1:100",
    color: "#1A90C3",
    flag: "🇺🇸",
    value: "39,142",
    change: "+0.38%",
    up: true,
  },
  {
    symbol: "US500",
    name: "S&P 500",
    region: "USA",
    spread: "0.5",
    leverage: "1:100",
    color: "#1478A6",
    flag: "🇺🇸",
    value: "5,304",
    change: "+0.51%",
    up: true,
  },
  {
    symbol: "US100",
    name: "NASDAQ 100",
    region: "USA",
    spread: "1.0",
    leverage: "1:100",
    color: "#0EA5E9",
    flag: "🇺🇸",
    value: "18,671",
    change: "+0.72%",
    up: true,
  },
  {
    symbol: "UK100",
    name: "FTSE 100",
    region: "United Kingdom",
    spread: "1.0",
    leverage: "1:100",
    color: "#7C3AED",
    flag: "🇬🇧",
    value: "8,230",
    change: "-0.12%",
    up: false,
  },
  {
    symbol: "DE40",
    name: "DAX 40",
    region: "Germany",
    spread: "1.5",
    leverage: "1:100",
    color: "#059669",
    flag: "🇩🇪",
    value: "18,497",
    change: "+0.29%",
    up: true,
  },
  {
    symbol: "JP225",
    name: "Nikkei 225",
    region: "Japan",
    spread: "7.0",
    leverage: "1:100",
    color: "#DC2626",
    flag: "🇯🇵",
    value: "38,460",
    change: "+0.85%",
    up: true,
  },
  {
    symbol: "AU200",
    name: "ASX 200",
    region: "Australia",
    spread: "1.5",
    leverage: "1:100",
    color: "#D97706",
    flag: "🇦🇺",
    value: "7,784",
    change: "+0.44%",
    up: true,
  },
  {
    symbol: "HK50",
    name: "Hang Seng",
    region: "Hong Kong",
    spread: "8.0",
    leverage: "1:50",
    color: "#DB2777",
    flag: "🇭🇰",
    value: "19,073",
    change: "-0.55%",
    up: false,
  },
];

const WHY_FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
    title: "Global Market Access",
    desc: "Trade indices from the US, Europe, Asia and the Pacific from a single MT5 account — no need for separate brokerages in each region.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Diversified Exposure",
    desc: "A single index trade gives you exposure to dozens or hundreds of constituent companies — instant portfolio diversification in one position.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "CFD Trading — No Ownership Required",
    desc: "Trade on price movements without owning the underlying index. Go long or short, and manage risk with stop-loss and take-profit orders.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" />
      </svg>
    ),
    title: "Low Margin Requirements",
    desc: "Leverage up to 1:100 means you can open a position worth $10,000 with just $100 of margin — amplifying your market exposure.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Extended Trading Hours",
    desc: "Index CFDs on MT5 often trade beyond regular exchange hours, giving you flexibility to react to after-hours news and global events.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    title: "MetaTrader 5 Platform",
    desc: "All index CFDs are available on MT5 — with advanced charting, 21 timeframes, automated trading, and multi-asset portfolio management.",
  },
];

const CONDITIONS_ROWS = [
  { Instrument: "Dow Jones Industrial Avg.", Symbol: "US30",  "Spread From": "2.0 pts", Leverage: "1:100", "Trading Hours": "Mon–Fri 23:02–21:59 UTC" },
  { Instrument: "S&P 500 Index",             Symbol: "US500", "Spread From": "0.5 pts", Leverage: "1:100", "Trading Hours": "Mon–Fri 23:02–21:59 UTC" },
  { Instrument: "NASDAQ 100",                Symbol: "US100", "Spread From": "1.0 pts", Leverage: "1:100", "Trading Hours": "Mon–Fri 23:02–21:59 UTC" },
  { Instrument: "FTSE 100",                  Symbol: "UK100", "Spread From": "1.0 pts", Leverage: "1:100", "Trading Hours": "Mon–Fri 07:00–21:00 UTC"  },
  { Instrument: "DAX 40",                    Symbol: "DE40",  "Spread From": "1.5 pts", Leverage: "1:100", "Trading Hours": "Mon–Fri 06:00–20:00 UTC"  },
  { Instrument: "Nikkei 225",                Symbol: "JP225", "Spread From": "7.0 pts", Leverage: "1:100", "Trading Hours": "Mon–Fri 23:00–21:15 UTC"  },
  { Instrument: "ASX 200",                   Symbol: "AU200", "Spread From": "1.5 pts", Leverage: "1:100", "Trading Hours": "Mon–Fri 22:00–07:30 UTC"  },
  { Instrument: "Hang Seng Index",           Symbol: "HK50",  "Spread From": "8.0 pts", Leverage: "1:50",  "Trading Hours": "Mon–Fri 01:15–08:00 UTC"  },
];

const FAQS = [
  {
    q: "What are stock index CFDs?",
    a: "A stock index CFD (Contract for Difference) is a derivative instrument that lets you trade on the price movement of a market index — such as the S&P 500 or DAX 40 — without owning any of the underlying shares. You profit (or lose) based on the difference between your entry and exit price, multiplied by your position size.",
  },
  {
    q: "What are the trading hours for index CFDs?",
    a: "Trading hours vary by index and closely follow the underlying exchange sessions. US indices (US30, US500, US100) are typically available from Sunday 23:00 to Friday 22:00 UTC with a brief daily break. European indices (UK100, DE40) follow their respective exchange hours. All times are shown in the conditions table on this page.",
  },
  {
    q: "What leverage is available on stock indices?",
    a: "Most stock index CFDs at Olla Trade offer leverage up to 1:100, meaning a $1,000 deposit controls a $100,000 position. HK50 (Hang Seng) is available at up to 1:50. Leverage amplifies both potential gains and potential losses — always use appropriate risk management.",
  },
  {
    q: "Are dividends applied to index CFDs?",
    a: "Yes. When constituent stocks within an index pay dividends, an index dividend adjustment (also called a dividend cash adjustment) is applied to open positions. Long positions receive a credit; short positions are debited. The adjustment reflects the ex-dividend drop in the index price.",
  },
  {
    q: "Is there overnight financing (swap) on index CFDs?",
    a: "Yes. Index CFD positions held open overnight are subject to a swap (rollover) charge or credit. The swap rate is based on the underlying interest rate differential and is applied at the end of each trading day. Swap rates are displayed in the MT5 platform for each instrument.",
  },
];

/* ─────────────────────────────────────────────────────────── page */

export default async function IndicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="hero-navy relative overflow-hidden">
        {/* decorative purple/indigo gradient layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(99,51,220,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(26,144,195,0.12) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        <div className="container-wide relative z-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left copy */}
            <SlideLeft>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="badge badge-navy">Stock Indices</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                  Trade the World&apos;s{" "}
                  <span className="text-gradient">Top Indices</span>
                </h1>
                <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                  Access US30, NASDAQ, DAX, FTSE and more as CFDs on MetaTrader&nbsp;5.
                  Leverage up to 1:100, no share ownership required, and extended trading
                  hours — all from one account.
                </p>

                {/* hero stats */}
                <div className="grid grid-cols-3 gap-4 py-2">
                  {[
                    { v: "8+", l: "Global Indices" },
                    { v: "0.5 pts", l: "Spread From" },
                    { v: "1:100", l: "Max Leverage" },
                  ].map(({ v, l }) => (
                    <div key={l} className="text-center">
                      <div className="text-2xl font-extrabold text-white">{v}</div>
                      <div className="text-[11px] text-white/40 mt-0.5 leading-snug">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="https://portal.ollatrade.com/auth/register"
                    className="btn-primary btn-lg"
                  >
                    Start Trading Indices
                  </Link>
                  <a href="#conditions" className="btn-secondary btn-lg">
                    View Conditions
                  </a>
                </div>

                <p className="text-[11px] text-white/30 leading-relaxed">
                  Olla Capital Financial Services L.L.C. — UAE SCA Lic.&nbsp;20200000416.
                  CFDs carry risk. Capital at risk.
                </p>
              </div>
            </SlideLeft>

            {/* Right — SVG index cards */}
            <SlideRight delay={0.1}>
              <div className="relative hidden lg:block">
                {/* Glow blob */}
                <div
                  className="absolute -inset-8 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,51,220,0.22) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />

                <svg
                  viewBox="0 0 480 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[520px] mx-auto"
                  aria-label="Global stock index cards showing live prices"
                >
                  {/* Background panel */}
                  <rect x="10" y="10" width="460" height="400" rx="20" fill="#0D1A2D" opacity="0.6" />

                  {/* Header */}
                  <text x="32" y="48" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Global Index Monitor</text>
                  <circle cx="430" cy="42" r="6" fill="#22C55E" opacity="0.9" />
                  <text x="418" y="67" fill="#22C55E" fontSize="9" fontFamily="system-ui, sans-serif">LIVE</text>

                  {/* ── Row 1 ── */}
                  {/* US500 card */}
                  <rect x="28" y="72" width="200" height="72" rx="10" fill="#1A2D45" />
                  <rect x="28" y="72" width="3" height="72" rx="1.5" fill="#1A90C3" />
                  <text x="42" y="96" fill="#6B7280" fontSize="9" fontFamily="system-ui">US500 · S&amp;P 500</text>
                  <text x="42" y="116" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="system-ui">5,304</text>
                  <text x="42" y="133" fill="#22C55E" fontSize="10" fontFamily="system-ui">▲ +0.51%</text>
                  {/* sparkline */}
                  <polyline points="145,130 155,118 165,122 175,110 185,114 200,104 210,108 220,98" stroke="#1A90C3" strokeWidth="1.5" fill="none" opacity="0.8"/>

                  {/* US100 card */}
                  <rect x="252" y="72" width="200" height="72" rx="10" fill="#1A2D45" />
                  <rect x="252" y="72" width="3" height="72" rx="1.5" fill="#7C3AED" />
                  <text x="266" y="96" fill="#6B7280" fontSize="9" fontFamily="system-ui">US100 · NASDAQ</text>
                  <text x="266" y="116" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="system-ui">18,671</text>
                  <text x="266" y="133" fill="#22C55E" fontSize="10" fontFamily="system-ui">▲ +0.72%</text>
                  <polyline points="360,130 370,120 382,124 392,115 402,118 412,108 422,112 440,102" stroke="#7C3AED" strokeWidth="1.5" fill="none" opacity="0.8"/>

                  {/* ── Row 2 ── */}
                  {/* DE40 card */}
                  <rect x="28" y="162" width="200" height="72" rx="10" fill="#1A2D45" />
                  <rect x="28" y="162" width="3" height="72" rx="1.5" fill="#059669" />
                  <text x="42" y="186" fill="#6B7280" fontSize="9" fontFamily="system-ui">DE40 · DAX 40</text>
                  <text x="42" y="206" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="system-ui">18,497</text>
                  <text x="42" y="223" fill="#22C55E" fontSize="10" fontFamily="system-ui">▲ +0.29%</text>
                  <polyline points="145,220 158,212 168,216 178,208 190,210 202,202 212,204 222,196" stroke="#059669" strokeWidth="1.5" fill="none" opacity="0.8"/>

                  {/* UK100 card */}
                  <rect x="252" y="162" width="200" height="72" rx="10" fill="#1A2D45" />
                  <rect x="252" y="162" width="3" height="72" rx="1.5" fill="#A855F7" />
                  <text x="266" y="186" fill="#6B7280" fontSize="9" fontFamily="system-ui">UK100 · FTSE 100</text>
                  <text x="266" y="206" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="system-ui">8,230</text>
                  <text x="266" y="223" fill="#EF4444" fontSize="10" fontFamily="system-ui">▼ -0.12%</text>
                  <polyline points="360,196 372,204 382,200 394,208 404,204 415,210 426,207 440,214" stroke="#A855F7" strokeWidth="1.5" fill="none" opacity="0.8"/>

                  {/* ── Row 3 ── */}
                  {/* JP225 card */}
                  <rect x="28" y="252" width="200" height="72" rx="10" fill="#1A2D45" />
                  <rect x="28" y="252" width="3" height="72" rx="1.5" fill="#DC2626" />
                  <text x="42" y="276" fill="#6B7280" fontSize="9" fontFamily="system-ui">JP225 · Nikkei 225</text>
                  <text x="42" y="296" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="system-ui">38,460</text>
                  <text x="42" y="313" fill="#22C55E" fontSize="10" fontFamily="system-ui">▲ +0.85%</text>
                  <polyline points="145,310 156,300 168,304 178,294 190,298 202,288 212,292 222,280" stroke="#DC2626" strokeWidth="1.5" fill="none" opacity="0.8"/>

                  {/* US30 card */}
                  <rect x="252" y="252" width="200" height="72" rx="10" fill="#1A2D45" />
                  <rect x="252" y="252" width="3" height="72" rx="1.5" fill="#1A90C3" />
                  <text x="266" y="276" fill="#6B7280" fontSize="9" fontFamily="system-ui">US30 · Dow Jones</text>
                  <text x="266" y="296" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="system-ui">39,142</text>
                  <text x="266" y="313" fill="#22C55E" fontSize="10" fontFamily="system-ui">▲ +0.38%</text>
                  <polyline points="360,310 372,302 382,306 392,298 405,300 416,292 426,296 440,284" stroke="#1A90C3" strokeWidth="1.5" fill="none" opacity="0.8"/>

                  {/* ── Footer bar ── */}
                  <rect x="28" y="346" width="424" height="44" rx="8" fill="#0F1F32" />
                  <circle cx="50" cy="368" r="8" fill="#1A90C3" opacity="0.25"/>
                  <text x="66" y="373" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="system-ui">MT5 · Olla Trade</text>
                  <text x="280" y="373" fill="#6B7280" fontSize="10" fontFamily="system-ui">Spreads from 0.5 pts · 1:100 leverage</text>
                </svg>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. WHAT YOU CAN TRADE — Index cards
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py section-gray">
        <div className="container-wide">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="tag">What You Can Trade</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#111827]">
                8 Major Global Indices
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto text-base leading-relaxed">
                From the Dow Jones to the Hang Seng — access the world&apos;s most
                actively traded stock market indices as CFDs on a single MT5 account.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDEX_CARDS.map((idx) => (
              <div
                key={idx.symbol}
                className="card card-hover flex flex-col gap-3"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-base">{idx.flag}</span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${idx.color}18`,
                          color: idx.color,
                          border: `1px solid ${idx.color}35`,
                        }}
                      >
                        {idx.region}
                      </span>
                    </div>
                    <div className="text-xl font-extrabold text-[#111827]">
                      {idx.symbol}
                    </div>
                    <div className="text-[12px] text-[#6B7280] mt-0.5 leading-snug">
                      {idx.name}
                    </div>
                  </div>
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"
                    style={{ background: idx.color }}
                  />
                </div>

                {/* Price row */}
                <div className="flex items-baseline justify-between border-t border-[#E5E7EB] pt-3">
                  <span className="text-[15px] font-bold text-[#111827]">
                    {idx.value}
                  </span>
                  <span
                    className={`text-[12px] font-semibold ${
                      idx.up ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {idx.up ? "▲" : "▼"} {idx.change}
                  </span>
                </div>

                {/* Conditions */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#F6F8FB] rounded-lg p-2.5 text-center">
                    <div className="text-[10px] text-[#6B7280] mb-0.5">Spread From</div>
                    <div
                      className="text-[13px] font-extrabold"
                      style={{ color: idx.color }}
                    >
                      {idx.spread} pts
                    </div>
                  </div>
                  <div className="bg-[#F6F8FB] rounded-lg p-2.5 text-center">
                    <div className="text-[10px] text-[#6B7280] mb-0.5">Leverage</div>
                    <div className="text-[13px] font-extrabold text-[#111827]">
                      {idx.leverage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>

          <FadeUp delay={0.1}>
            <p className="text-center text-[11px] text-[#6B7280] mt-6">
              Spreads are indicative and variable. Values shown are for reference only.
              Leverage varies by account type and regulatory requirements.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. WHY TRADE INDICES
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="tag">Why Trade Indices</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#111827]">
                Six Reasons to Trade Indices with Olla Trade
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto text-base leading-relaxed">
                Index CFDs combine broad market exposure with the flexibility of
                derivatives trading — making them one of the most popular instruments
                for both short-term and positional traders.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="card card-hover flex gap-4 items-start"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#1A90C3]"
                  style={{ background: "#EBF5FB", border: "1px solid #1A90C315" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#111827] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. TRADING CONDITIONS TABLE
      ══════════════════════════════════════════════════════════════ */}
      <section id="conditions" className="section-py section-gray">
        <div className="container-wide">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="tag">Trading Conditions</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#111827]">
                Index CFD Specifications
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl mx-auto text-base">
                All instruments are traded via MetaTrader 5. Conditions are indicative
                and subject to change.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-[#F6F8FB] border-b border-[#E5E7EB]">
                  <tr>
                    {["Instrument", "Symbol", "Spread From", "Leverage", "Trading Hours"].map(
                      (h, i) => (
                        <th
                          key={h}
                          className={`px-5 py-4 text-[11px] font-bold uppercase tracking-wider ${
                            i === 0 ? "text-left" : "text-center"
                          } ${i === 2 ? "text-[#1A90C3]" : "text-[#6B7280]"}`}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6] bg-white">
                  {CONDITIONS_ROWS.map((row, i) => (
                    <tr key={row.Symbol} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-[#111827] text-[13px]">
                        {row.Instrument}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className="inline-block bg-[#EBF5FB] text-[#1478A6] text-[12px] font-bold px-2.5 py-1 rounded-md font-mono">
                          {row.Symbol}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-center text-[13px] font-bold text-[#1A90C3]">
                        {row["Spread From"]}
                      </td>
                      <td className="px-5 py-3.5 text-center text-[13px] text-[#111827] font-semibold">
                        {row.Leverage}
                      </td>
                      <td className="px-5 py-3.5 text-center text-[12px] text-[#6B7280]">
                        {row["Trading Hours"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-[11px] text-[#6B7280] mt-4">
              Spreads are variable. Trading hours reflect typical MT5 server times (UTC)
              and may vary around market holidays. Leverage is subject to account type.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. PLATFORM SECTION — dark navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#07111F]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <SlideLeft>
              <div className="flex flex-col gap-6">
                <span className="tag">Trading Platform</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Trade Indices on{" "}
                  <span className="text-gradient">MetaTrader 5</span>
                </h2>
                <p className="text-white/55 text-base leading-relaxed">
                  All index CFDs at Olla Trade are available on MT5 — the industry&apos;s
                  most advanced multi-asset platform. Get institutional-grade charting,
                  21 timeframes, one-click trading, and full algorithmic trading support
                  via Expert Advisors.
                </p>

                <ul className="space-y-3">
                  {[
                    "21 chart timeframes from M1 to MN",
                    "Over 80 built-in technical indicators",
                    "One-click and pending order types",
                    "Automated trading via Expert Advisors",
                    "Multi-asset: indices, forex, metals, crypto",
                    "Available on desktop, web and mobile",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] text-white/65">
                      <svg
                        className="w-4 h-4 flex-shrink-0 text-[#1A90C3]"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="https://portal.ollatrade.com/auth/register"
                    className="btn-primary btn-lg"
                  >
                    Open MT5 Account
                  </Link>
                  <Link href="/trading/platforms" className="btn-secondary btn-lg">
                    Learn About MT5
                  </Link>
                </div>
              </div>
            </SlideLeft>

            {/* Platform illustration */}
            <SlideRight delay={0.1}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,144,195,0.15) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
                <svg
                  viewBox="0 0 520 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[520px] mx-auto"
                  aria-label="MetaTrader 5 platform interface showing US500 chart"
                >
                  {/* Window frame */}
                  <rect x="8" y="8" width="504" height="344" rx="14" fill="#0D1A2D" />
                  <rect x="8" y="8" width="504" height="344" rx="14" stroke="#1A90C315" strokeWidth="1" />

                  {/* Title bar */}
                  <rect x="8" y="8" width="504" height="36" rx="14" fill="#0F2035" />
                  <rect x="8" y="30" width="504" height="14" fill="#0F2035" />
                  <circle cx="32" cy="26" r="5" fill="#EF444450" />
                  <circle cx="50" cy="26" r="5" fill="#F59E0B50" />
                  <circle cx="68" cy="26" r="5" fill="#22C55E50" />
                  <text x="200" y="30" fill="#FFFFFF80" fontSize="10" fontFamily="system-ui" fontWeight="600">US500 — MetaTrader 5 — Olla Trade</text>

                  {/* Toolbar */}
                  <rect x="8" y="44" width="504" height="28" fill="#0D1626" />
                  {["M1","M5","M15","H1","H4","D1","W1"].map((tf, i) => (
                    <g key={tf}>
                      <rect x={20 + i * 40} y="50" width="32" height="16" rx="4"
                        fill={i === 3 ? "#1A90C3" : "transparent"} />
                      <text x={36 + i * 40} y="62" fill={i === 3 ? "#FFF" : "#FFFFFF50"}
                        fontSize="9" textAnchor="middle" fontFamily="system-ui" fontWeight={i === 3 ? "700" : "400"}>{tf}</text>
                    </g>
                  ))}

                  {/* Chart area background */}
                  <rect x="8" y="72" width="504" height="220" fill="#0A1520" />

                  {/* Horizontal grid */}
                  {[100, 130, 160, 190, 220, 250, 280].map(y => (
                    <line key={y} x1="8" y1={72 + y - 72} x2="512" y2={72 + y - 72} stroke="#FFFFFF06" strokeWidth="1" />
                  ))}
                  {[100, 140, 180, 220, 260].map(y => (
                    <line key={y} x1="8" y1={y} x2="512" y2={y} stroke="#FFFFFF04" strokeWidth="1" />
                  ))}

                  {/* Price labels */}
                  <text x="480" y="105" fill="#FFFFFF25" fontSize="8" fontFamily="system-ui">5,310</text>
                  <text x="480" y="145" fill="#FFFFFF25" fontSize="8" fontFamily="system-ui">5,290</text>
                  <text x="480" y="185" fill="#FFFFFF25" fontSize="8" fontFamily="system-ui">5,270</text>
                  <text x="480" y="225" fill="#FFFFFF25" fontSize="8" fontFamily="system-ui">5,250</text>
                  <text x="480" y="265" fill="#FFFFFF25" fontSize="8" fontFamily="system-ui">5,230</text>

                  {/* Area fill under chart line */}
                  <path
                    d="M20,260 L60,240 L100,248 L130,225 L160,232 L195,215 L225,220 L255,200 L290,205 L320,190 L355,185 L385,170 L415,175 L445,158 L465,150 L490,140 L490,292 L20,292 Z"
                    fill="url(#chartGrad)"
                    opacity="0.35"
                  />
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1A90C3" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#1A90C3" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Chart line */}
                  <polyline
                    points="20,260 60,240 100,248 130,225 160,232 195,215 225,220 255,200 290,205 320,190 355,185 385,170 415,175 445,158 465,150 490,140"
                    stroke="#1A90C3"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Current price dot */}
                  <circle cx="490" cy="140" r="4" fill="#1A90C3" />
                  <circle cx="490" cy="140" r="8" fill="#1A90C3" opacity="0.2" />

                  {/* Current price label */}
                  <rect x="440" y="130" width="55" height="16" rx="3" fill="#1A90C3" />
                  <text x="467" y="141" fill="#FFF" fontSize="8.5" textAnchor="middle" fontFamily="system-ui" fontWeight="700">5,304.20</text>

                  {/* Candlestick inset top-left */}
                  {[
                    [30, 82, 92, 4, true], [44, 78, 90, 3, true], [58, 84, 88, 2, false],
                    [72, 76, 86, 3, true], [86, 80, 90, 4, false]
                  ].map(([x, top, bot, wick, up], i) => (
                    <g key={i}>
                      <line x1={x as number + 4} y1={(top as number) - (wick as number)} x2={x as number + 4} y2={(bot as number) + (wick as number)} stroke={up ? "#22C55E" : "#EF4444"} strokeWidth="1" />
                      <rect x={x as number} y={top as number} width="8" height={(bot as number) - (top as number)} rx="1" fill={up ? "#22C55E" : "#EF4444"} opacity="0.85" />
                    </g>
                  ))}

                  {/* Bottom bar */}
                  <rect x="8" y="292" width="504" height="36" rx="0" fill="#0F2035" />
                  <rect x="8" y="292" width="504" height="4" fill="#0D1A2D" />
                  <text x="24" y="315" fill="#22C55E" fontSize="10" fontFamily="system-ui" fontWeight="700">US500</text>
                  <text x="70" y="315" fill="#FFFFFF70" fontSize="10" fontFamily="system-ui">Bid: 5,303.50</text>
                  <text x="175" y="315" fill="#FFFFFF70" fontSize="10" fontFamily="system-ui">Ask: 5,304.00</text>
                  <text x="290" y="315" fill="#1A90C370" fontSize="10" fontFamily="system-ui">Spread: 0.50</text>
                  <text x="380" y="315" fill="#FFFFFF40" fontSize="9" fontFamily="system-ui">Platform: MT5 · Olla Trade</text>
                </svg>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-narrow">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="tag">FAQ</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#111827]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-[#6B7280] text-base">
                Common questions about trading stock index CFDs with Olla Trade.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-[#E5E7EB] rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-[#F6F8FB] transition-colors">
                    <span className="text-[14px] font-semibold text-[#111827]">
                      {faq.q}
                    </span>
                    <span className="text-[#1A90C3] flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path d="M8 1a.75.75 0 01.75.75V7.25h5.5a.75.75 0 010 1.5h-5.5v5.5a.75.75 0 01-1.5 0v-5.5H1.75a.75.75 0 010-1.5h5.5V1.75A.75.75 0 018 1z" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-[13px] text-[#6B7280] leading-relaxed border-t border-[#F3F4F6]">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. CTA — dark navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(26,144,195,0.1) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="container-narrow relative z-10 text-center flex flex-col items-center gap-6">
          <ScaleIn>
            <span className="badge badge-navy">Get Started Today</span>
          </ScaleIn>
          <FadeUp delay={0.06}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Start Trading Global Indices
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Open a free MT5 account with Olla Trade and access US30, NASDAQ,
              DAX 40, FTSE 100, and more — with spreads from 0.5 pts and leverage
              up to 1:100.
            </p>
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-lg"
              >
                Open Free Account
              </Link>
              <Link href="/markets" className="btn-secondary btn-lg">
                Explore All Markets
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="text-[11px] text-white/30 max-w-md leading-relaxed">
              Olla Capital Financial Services L.L.C. — UAE SCA Licence No.&nbsp;20200000416.
              CFDs are complex instruments and carry a high risk of losing money rapidly
              due to leverage. Ensure you understand the risks before trading.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
