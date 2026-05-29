import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  ScaleIn,
  StaggerChildren,
  fadeUpItem,
} from "../../../components/ui/Animate";

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "pt"
        ? "Trading de Energia — Petróleo Bruto, Gás Natural e Mais | Olla Trade"
        : "Energy CFD Trading — Crude Oil, Natural Gas & More | Olla Trade",
    description:
      locale === "pt"
        ? "Negocie CFDs de energia, incluindo WTI, Brent e Gás Natural na plataforma MT5. Spreads a partir de 0,03, alavancagem até 1:100. Olla Capital Financial Services L.L.C."
        : "Trade energy CFDs including WTI Crude, Brent Crude and Natural Gas on MT5. Spreads from 0.03, leverage up to 1:100. Olla Capital Financial Services L.L.C.",
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   Static Params
───────────────────────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    name: "WTI Crude Oil",
    symbol: "US.OIL",
    spread: "0.03",
    leverage: "1:100",
    types: ["Cash CFD", "Futures CFD"],
    color: "#E05C2A",
    badgeColor: "#E05C2A",
    desc: "West Texas Intermediate is the primary US crude oil benchmark, reflecting supply and demand dynamics in the American energy market. WTI is sensitive to US inventory data, drilling activity, and OPEC+ production decisions.",
    icon: "🛢",
  },
  {
    name: "Brent Crude",
    symbol: "UK.OIL",
    spread: "0.03",
    leverage: "1:100",
    types: ["Cash CFD", "Futures CFD"],
    color: "#1A90C3",
    badgeColor: "#1A90C3",
    desc: "Brent Crude is the international benchmark for over two-thirds of the world's oil supply, sourced from the North Sea. It typically trades at a small premium to WTI and is highly sensitive to geopolitical developments in the Middle East and Europe.",
    icon: "⛽",
  },
  {
    name: "Natural Gas",
    symbol: "NGAS",
    spread: "0.005",
    leverage: "1:100",
    types: ["Cash CFD"],
    color: "#0FA37F",
    badgeColor: "#0FA37F",
    desc: "Natural Gas prices are driven by seasonal heating and cooling demand, storage levels, weather events, and LNG export capacity. Highly volatile around EIA weekly storage reports, making it a popular instrument for short-term traders.",
    icon: "🔥",
  },
  {
    name: "Heating Oil",
    symbol: "HO.OIL",
    spread: "0.003",
    leverage: "1:50",
    types: ["Cash CFD"],
    color: "#B45309",
    badgeColor: "#B45309",
    desc: "Heating Oil (No. 2 fuel oil) is a refined petroleum product widely used for residential and commercial heating in the US Northeast. Prices are closely correlated with crude oil but spike during cold weather events and supply disruptions.",
    icon: "🌡",
  },
];

const CONDITIONS = [
  {
    Instrument: "WTI Crude Oil",
    Symbol: "US.OIL",
    "Spread From": "0.03",
    Leverage: "1:100",
    "Trading Hours": "Mon–Fri ~23h/day",
  },
  {
    Instrument: "Brent Crude",
    Symbol: "UK.OIL",
    "Spread From": "0.03",
    Leverage: "1:100",
    "Trading Hours": "Mon–Fri ~23h/day",
  },
  {
    Instrument: "Natural Gas",
    Symbol: "NGAS",
    "Spread From": "0.005",
    Leverage: "1:100",
    "Trading Hours": "Mon–Fri ~23h/day",
  },
  {
    Instrument: "Heating Oil",
    Symbol: "HO.OIL",
    "Spread From": "0.003",
    Leverage: "1:50",
    "Trading Hours": "Mon–Fri ~23h/day",
  },
];

const WHY_FEATURES = [
  {
    icon: "🌍",
    title: "Global Energy Exposure",
    desc: "Access the world's most actively traded commodity markets — crude oil alone trades over $1 trillion daily, reflecting global supply, demand, and geopolitical forces.",
  },
  {
    icon: "↕",
    title: "Both Long & Short",
    desc: "CFD structure means you can profit from both rising and falling energy prices. Go long when you expect prices to rise, or short when you expect a decline.",
  },
  {
    icon: "🛡",
    title: "Hedge Energy Costs",
    desc: "Businesses and traders exposed to energy price fluctuations can use energy CFDs as a practical hedging tool to manage risk without physical commodity ownership.",
  },
  {
    icon: "📊",
    title: "MT5 Platform",
    desc: "Trade all energy CFDs from MetaTrader 5 — featuring advanced charting, one-click execution, automated trading support, and real-time market depth.",
  },
  {
    icon: "⏰",
    title: "24/5 Trading",
    desc: "Energy markets are open nearly 24 hours a day, 5 days a week, allowing you to react to overnight news, OPEC announcements, and inventory reports as they happen.",
  },
  {
    icon: "💹",
    title: "Competitive Spreads",
    desc: "Raw spreads from 0.03 on WTI and Brent Crude Oil, with transparent pricing and no hidden commissions on energy CFD positions.",
  },
];

const FAQS = [
  {
    q: "What energy products can I trade with Olla Trade?",
    a: "Olla Trade currently offers CFDs on WTI Crude Oil (US.OIL), Brent Crude Oil (UK.OIL), Natural Gas (NGAS), and Heating Oil (HO.OIL). All instruments are available as Cash CFDs, with Crude Oil also available as Futures CFDs. There is no physical delivery — all positions are settled in cash.",
  },
  {
    q: "What are the trading hours for crude oil CFDs?",
    a: "WTI and Brent Crude Oil CFDs are available for trading approximately 23 hours per day, Monday through Friday, with a short daily maintenance break. Trading follows the CME NYMEX and ICE Brent schedules. Natural Gas follows a similar session. Check the MT5 platform for exact open and close times.",
  },
  {
    q: "What leverage is available on energy CFDs?",
    a: "Leverage of up to 1:100 is available on WTI Crude, Brent Crude, and Natural Gas. Heating Oil carries a maximum leverage of 1:50. Leverage amplifies both potential profits and losses — ensure you manage your risk accordingly and never risk more than you can afford to lose.",
  },
  {
    q: "Is there an expiry on energy CFDs?",
    a: "Cash CFDs on energy products do not have a fixed expiry date and are rolled over continuously. Futures CFDs follow the expiry schedule of the underlying futures contract. When a futures CFD approaches expiry, your position will be subject to the standard rollover process. Please refer to the product specifications in MT5 for specific rollover dates.",
  },
  {
    q: "Can I trade natural gas with Olla Trade?",
    a: "Yes. Natural Gas (NGAS) is available as a Cash CFD with spreads from 0.005 and leverage up to 1:100. Natural Gas is one of the most volatile commodities, heavily influenced by seasonal demand, weather forecasts, EIA weekly storage reports, and LNG export dynamics. It is suitable for active, experienced traders who understand commodity market risk.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */
export default async function EnergiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="hero-navy relative overflow-hidden">
        {/* Subtle red/energy accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #E05C2A 0%, #1A90C3 60%, transparent 80%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[300px] opacity-[0.05]"
            style={{
              background:
                "radial-gradient(circle, #E05C2A 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-wide relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <SlideLeft>
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-1.5 text-[12px] text-white/35 mb-6"
                >
                  <Link
                    href="/markets"
                    className="hover:text-white/60 transition-colors"
                  >
                    Markets
                  </Link>
                  <span>/</span>
                  <span className="text-white/55">Energies</span>
                </nav>

                <div className="flex items-center gap-2 mb-5">
                  <span className="badge badge-navy text-[11px] uppercase tracking-widest font-bold px-3 py-1.5">
                    Energy Markets
                  </span>
                  <span className="text-[11px] text-[#E05C2A] font-semibold">
                    UAE SCA Licensed
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                  Trade Crude Oil,{" "}
                  <span className="text-gradient">Gas &amp; More</span>
                </h1>

                <p className="text-white/55 text-[16px] leading-relaxed mb-8 max-w-lg">
                  Access global energy markets through CFDs on WTI Crude, Brent
                  Crude, Natural Gas, and Heating Oil — all on MetaTrader 5 with
                  spreads from 0.03 and leverage up to 1:100.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="https://portal.ollatrade.com/auth/register"
                    className="btn-primary btn-lg"
                  >
                    Start Trading Energy
                  </a>
                  <Link
                    href="/trading/accounts"
                    className="btn-secondary btn-lg"
                  >
                    View Accounts
                  </Link>
                </div>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: "4", label: "Energy Instruments" },
                    { value: "0.03", label: "Spread From" },
                    { value: "1:100", label: "Max Leverage" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <div className="text-2xl font-extrabold text-white">
                        {value}
                      </div>
                      <div className="text-[11px] text-white/40 mt-0.5">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </SlideLeft>
            </div>

            {/* Right — SVG energy price cards */}
            <SlideRight className="hidden lg:block">
              <div className="relative">
                <svg
                  viewBox="0 0 460 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[460px] mx-auto drop-shadow-2xl"
                  aria-hidden="true"
                >
                  {/* Background panel */}
                  <rect
                    x="0"
                    y="0"
                    width="460"
                    height="400"
                    rx="20"
                    fill="#0D1B2A"
                    fillOpacity="0.7"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="460"
                    height="400"
                    rx="20"
                    stroke="white"
                    strokeOpacity="0.06"
                    strokeWidth="1"
                  />

                  {/* Header bar */}
                  <rect
                    x="0"
                    y="0"
                    width="460"
                    height="48"
                    rx="20"
                    fill="white"
                    fillOpacity="0.04"
                  />
                  <rect
                    x="0"
                    y="20"
                    width="460"
                    height="28"
                    fill="white"
                    fillOpacity="0.04"
                  />
                  <text
                    x="20"
                    y="30"
                    fill="white"
                    fillOpacity="0.5"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                    letterSpacing="2"
                  >
                    ENERGY MARKETS · LIVE
                  </text>
                  <circle cx="426" cy="24" r="5" fill="#22C55E" />
                  <circle
                    cx="426"
                    cy="24"
                    r="5"
                    fill="#22C55E"
                    fillOpacity="0.3"
                  >
                    <animate
                      attributeName="r"
                      values="5;9;5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* ── Card 1: WTI Crude Oil ── */}
                  <rect
                    x="20"
                    y="64"
                    width="204"
                    height="96"
                    rx="12"
                    fill="#E05C2A"
                    fillOpacity="0.1"
                    stroke="#E05C2A"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  {/* flame icon */}
                  <text x="34" y="91" fontSize="16">
                    🛢
                  </text>
                  <text
                    x="56"
                    y="90"
                    fill="white"
                    fillOpacity="0.9"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui"
                  >
                    WTI Crude
                  </text>
                  <text
                    x="56"
                    y="103"
                    fill="white"
                    fillOpacity="0.35"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    US.OIL
                  </text>
                  <text
                    x="34"
                    y="132"
                    fill="white"
                    fillOpacity="0.95"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui"
                  >
                    $82.46
                  </text>
                  <rect
                    x="34"
                    y="141"
                    width="58"
                    height="16"
                    rx="4"
                    fill="#22C55E"
                    fillOpacity="0.15"
                  />
                  <text
                    x="40"
                    y="153"
                    fill="#22C55E"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="monospace"
                  >
                    +1.24%
                  </text>
                  {/* mini sparkline */}
                  <polyline
                    points="110,150 122,140 134,145 146,135 158,130 170,120 182,118 194,112 206,108 218,100"
                    stroke="#E05C2A"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.6"
                  />

                  {/* ── Card 2: Brent Crude ── */}
                  <rect
                    x="236"
                    y="64"
                    width="204"
                    height="96"
                    rx="12"
                    fill="#1A90C3"
                    fillOpacity="0.1"
                    stroke="#1A90C3"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  <text x="250" y="91" fontSize="16">
                    ⛽
                  </text>
                  <text
                    x="272"
                    y="90"
                    fill="white"
                    fillOpacity="0.9"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui"
                  >
                    Brent Crude
                  </text>
                  <text
                    x="272"
                    y="103"
                    fill="white"
                    fillOpacity="0.35"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    UK.OIL
                  </text>
                  <text
                    x="250"
                    y="132"
                    fill="white"
                    fillOpacity="0.95"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui"
                  >
                    $85.91
                  </text>
                  <rect
                    x="250"
                    y="141"
                    width="58"
                    height="16"
                    rx="4"
                    fill="#22C55E"
                    fillOpacity="0.15"
                  />
                  <text
                    x="256"
                    y="153"
                    fill="#22C55E"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="monospace"
                  >
                    +0.87%
                  </text>
                  <polyline
                    points="326,148 338,142 350,136 362,138 374,128 386,120 398,115 410,110 422,106 434,100"
                    stroke="#1A90C3"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.6"
                  />

                  {/* ── Card 3: Natural Gas ── */}
                  <rect
                    x="20"
                    y="176"
                    width="204"
                    height="96"
                    rx="12"
                    fill="#0FA37F"
                    fillOpacity="0.1"
                    stroke="#0FA37F"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  <text x="34" y="203" fontSize="16">
                    🔥
                  </text>
                  <text
                    x="56"
                    y="202"
                    fill="white"
                    fillOpacity="0.9"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui"
                  >
                    Natural Gas
                  </text>
                  <text
                    x="56"
                    y="215"
                    fill="white"
                    fillOpacity="0.35"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    NGAS
                  </text>
                  <text
                    x="34"
                    y="244"
                    fill="white"
                    fillOpacity="0.95"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui"
                  >
                    $2.315
                  </text>
                  <rect
                    x="34"
                    y="253"
                    width="62"
                    height="16"
                    rx="4"
                    fill="#EF4444"
                    fillOpacity="0.15"
                  />
                  <text
                    x="40"
                    y="265"
                    fill="#EF4444"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="monospace"
                  >
                    -2.18%
                  </text>
                  <polyline
                    points="110,252 122,245 134,250 146,260 158,255 170,265 182,270 194,278 206,285 218,290"
                    stroke="#0FA37F"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.6"
                  />

                  {/* ── Card 4: Heating Oil — compact ── */}
                  <rect
                    x="236"
                    y="176"
                    width="204"
                    height="96"
                    rx="12"
                    fill="#B45309"
                    fillOpacity="0.08"
                    stroke="#B45309"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                  />
                  <text x="250" y="203" fontSize="16">
                    🌡
                  </text>
                  <text
                    x="272"
                    y="202"
                    fill="white"
                    fillOpacity="0.9"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui"
                  >
                    Heating Oil
                  </text>
                  <text
                    x="272"
                    y="215"
                    fill="white"
                    fillOpacity="0.35"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    HO.OIL
                  </text>
                  <text
                    x="250"
                    y="244"
                    fill="white"
                    fillOpacity="0.95"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui"
                  >
                    $2.672
                  </text>
                  <rect
                    x="250"
                    y="253"
                    width="58"
                    height="16"
                    rx="4"
                    fill="#22C55E"
                    fillOpacity="0.15"
                  />
                  <text
                    x="256"
                    y="265"
                    fill="#22C55E"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="monospace"
                  >
                    +0.41%
                  </text>
                  <polyline
                    points="326,262 338,258 350,260 362,254 374,250 386,244 398,246 410,240 422,236 434,232"
                    stroke="#B45309"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.6"
                  />

                  {/* ── Bottom info strip ── */}
                  <rect
                    x="20"
                    y="292"
                    width="420"
                    height="40"
                    rx="10"
                    fill="white"
                    fillOpacity="0.04"
                    stroke="white"
                    strokeOpacity="0.06"
                    strokeWidth="1"
                  />
                  <text
                    x="34"
                    y="318"
                    fill="white"
                    fillOpacity="0.30"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    MT5 · Spreads from 0.03 · Leverage up to 1:100 · 24/5 Trading
                  </text>

                  {/* ── Disclaimer strip ── */}
                  <text
                    x="20"
                    y="378"
                    fill="white"
                    fillOpacity="0.18"
                    fontSize="8.5"
                    fontFamily="system-ui"
                  >
                    Indicative prices only. CFD trading involves significant risk.
                  </text>
                </svg>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — WHAT YOU CAN TRADE
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py section-gray">
        <div className="container-wide">
          <FadeUp className="text-center mb-12">
            <div className="tag mb-4">Energy Products</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">
              What You Can Trade
            </h2>
            <p className="text-[#6B7280] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Four liquid energy CFDs — from the world's most traded crude oil
              benchmarks to natural gas and distillate fuels.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <div
                key={p.symbol}
                
                className="card card-hover p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl mb-1">{p.icon}</div>
                    <div className="text-[18px] font-extrabold text-[#111827]">
                      {p.name}
                    </div>
                    <div className="text-[12px] font-mono text-[#6B7280] mt-0.5">
                      {p.symbol}
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex-shrink-0"
                    style={{
                      background: `${p.color}15`,
                      color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    CFD
                  </span>
                </div>

                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>

                {/* Specs */}
                <div className="space-y-2 border-t border-[#E5E7EB] pt-4">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#6B7280]">Spread From</span>
                    <span className="font-bold text-[#111827]">{p.spread}</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#6B7280]">Leverage</span>
                    <span className="font-bold text-[#111827]">
                      {p.leverage}
                    </span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#6B7280]">Type</span>
                    <span className="font-semibold text-[#111827] text-right">
                      {p.types.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — WHY TRADE ENERGY CFDs
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide">
          <FadeUp className="text-center mb-12">
            <div className="tag mb-4">Why Olla Trade</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">
              Why Trade Energy CFDs?
            </h2>
            <p className="text-[#6B7280] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Energy CFDs offer unique opportunities — driven by geopolitics,
              supply data, weather, and global macro factors that keep these
              markets active around the clock.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_FEATURES.map((f) => (
              <div
                key={f.title}
                
                className="card card-hover p-6"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: "#EBF5FB" }}
                >
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-bold text-[#111827] mb-2">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — TRADING CONDITIONS TABLE
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py section-gray">
        <div className="container-wide">
          <FadeUp className="text-center mb-10">
            <div className="tag mb-4">Trading Conditions</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">
              Energy CFD Specifications
            </h2>
            <p className="text-[#6B7280] text-[16px] max-w-xl mx-auto">
              Indicative conditions under normal market hours. Spreads are
              variable and may widen during low-liquidity periods.
            </p>
          </FadeUp>

          <FadeIn>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm bg-white">
              <table className="w-full text-sm min-w-[600px]">
                <thead className="bg-[#F6F8FB] border-b border-[#E5E7EB]">
                  <tr>
                    {[
                      "Instrument",
                      "Symbol",
                      "Spread From",
                      "Leverage",
                      "Trading Hours",
                    ].map((h, i) => (
                      <th
                        key={h}
                        className={`px-5 py-4 text-[11px] font-bold uppercase tracking-wider ${
                          i === 0 ? "text-left" : "text-center"
                        } ${
                          i === 2
                            ? "text-[#1A90C3]"
                            : "text-[#6B7280]"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F6F8FB]">
                  {CONDITIONS.map((row) => (
                    <tr
                      key={row.Symbol}
                      className="hover:bg-[#F6F8FB] transition-colors"
                    >
                      <td className="px-5 py-4 font-semibold text-[#111827] text-[13px]">
                        {row.Instrument}
                      </td>
                      <td className="px-5 py-4 text-center font-mono text-[12px] text-[#1A90C3] font-bold">
                        {row.Symbol}
                      </td>
                      <td className="px-5 py-4 text-center font-bold text-[13px] text-[#1A90C3]">
                        {row["Spread From"]}
                      </td>
                      <td className="px-5 py-4 text-center text-[13px] text-[#111827]">
                        {row.Leverage}
                      </td>
                      <td className="px-5 py-4 text-center text-[13px] text-[#6B7280]">
                        {row["Trading Hours"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#6B7280] text-center mt-3">
              Spreads are variable. Past performance is not indicative of future
              results. CFD trading involves risk of loss.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — PLATFORM (dark navy)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#07111F] relative overflow-hidden">
        {/* Background decorative elements */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{
              background:
                "radial-gradient(circle, #1A90C3 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.04]"
            style={{
              background:
                "radial-gradient(circle, #E05C2A 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — platform info */}
            <SlideLeft>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#1A90C3]/25 bg-[#1A90C3]/8">
                <div className="w-2 h-2 rounded-full bg-[#1A90C3]" />
                <span className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest">
                  Trading Platform
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                Trade Energy on{" "}
                <span className="text-[#1A90C3]">MetaTrader 5</span>
              </h2>

              <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                All Olla Trade energy CFDs are available on MetaTrader 5 —
                the industry-standard platform for commodity and forex CFD
                trading. Access advanced charting, one-click execution, Expert
                Advisors, and real-time market depth.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  [
                    "Advanced Charting",
                    "21 timeframes, 80+ technical indicators, drawing tools",
                  ],
                  [
                    "One-Click Trading",
                    "Execute energy trades in milliseconds from the chart",
                  ],
                  [
                    "Automated Trading",
                    "Build or deploy Expert Advisors (EAs) for energy strategies",
                  ],
                  [
                    "Market Depth",
                    "Real-time Level 2 data for informed entry and exit decisions",
                  ],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1A90C3]/15 border border-[#1A90C3]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 text-[#1A90C3]"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <path d="M6.41 1L3 4.41 1.59 3 0 4.59 3 7.59 8 2.59 6.41 1z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[13px] font-semibold text-white/80">
                        {title}
                      </span>
                      <span className="text-[13px] text-white/35"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary"
                >
                  Open MT5 Account
                </a>
                <Link
                  href="/platform/metatrader-5"
                  className="btn-secondary"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.15)" }}
                >
                  About MT5
                </Link>
              </div>
            </SlideLeft>

            {/* Right — platform feature tiles */}
            <SlideRight>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Instruments",
                    value: "4",
                    sub: "Energy CFDs",
                    accent: "#E05C2A",
                  },
                  {
                    label: "Timeframes",
                    value: "21",
                    sub: "MT5 native",
                    accent: "#1A90C3",
                  },
                  {
                    label: "Indicators",
                    value: "80+",
                    sub: "Built-in",
                    accent: "#0FA37F",
                  },
                  {
                    label: "Execution",
                    value: "<1s",
                    sub: "Typical fill",
                    accent: "#B45309",
                  },
                ].map(({ label, value, sub, accent }) => (
                  <div
                    key={label}
                    className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all"
                  >
                    <div
                      className="text-[11px] font-semibold uppercase tracking-widest mb-2"
                      style={{ color: accent }}
                    >
                      {label}
                    </div>
                    <div className="text-3xl font-extrabold text-white mb-0.5">
                      {value}
                    </div>
                    <div className="text-[11px] text-white/30">{sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-white/4 border border-white/8 rounded-2xl p-5">
                <div className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
                  Available On
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Windows Desktop", "macOS Desktop", "iOS App", "Android App", "WebTrader"].map(
                    (platform) => (
                      <span
                        key={platform}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/6 text-white/50 border border-white/8"
                      >
                        {platform}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-4 bg-[#1A90C3]/8 border border-[#1A90C3]/15 rounded-2xl p-4 text-[12px] text-[#1A90C3]/80 leading-relaxed">
                Olla Capital Financial Services L.L.C. — UAE Securities and
                Commodities Authority (SCA) Licence No. 20200000416
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-narrow">
          <FadeUp className="text-center mb-10">
            <div className="tag mb-4">FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6B7280] text-[16px] max-w-xl mx-auto">
              Common questions about trading energy CFDs with Olla Trade.
            </p>
          </FadeUp>

          <FadeIn>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group border border-[#E5E7EB] rounded-xl overflow-hidden bg-[#F6F8FB] hover:border-[#1A90C3]/30 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none">
                    <span className="text-[14px] font-semibold text-[#111827] leading-snug">
                      {faq.q}
                    </span>
                    <svg
                      className="w-4 h-4 text-[#6B7280] flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — CTA (dark navy)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#07111F] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, #1A90C3 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-narrow relative z-10 text-center">
          <ScaleIn>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#1A90C3]/25 bg-[#1A90C3]/8">
              <div className="w-2 h-2 rounded-full bg-[#1A90C3]" />
              <span className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest">
                Start Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to Trade Global{" "}
              <span className="text-[#1A90C3]">Energy Markets?</span>
            </h2>

            <p className="text-white/45 text-[16px] leading-relaxed mb-10 max-w-lg mx-auto">
              Open an account with Olla Trade and access WTI Crude, Brent
              Crude, Natural Gas, and Heating Oil CFDs on MetaTrader 5. UAE SCA
              regulated. No guaranteed profit. Capital at risk.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <a
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-lg"
              >
                Open Live Account
              </a>
              <Link
                href="/markets"
                className="btn-secondary btn-lg"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                Explore All Markets
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                ["🏛", "UAE SCA Regulated"],
                ["🔒", "Segregated Funds"],
                ["⚡", "MT5 Platform"],
                ["📞", "24/5 Support"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-[12px] text-white/35"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Compliance */}
            <p className="text-[11px] text-white/20 mt-8 max-w-2xl mx-auto leading-relaxed">
              Olla Capital Financial Services L.L.C. is licensed and regulated
              by the UAE Securities and Commodities Authority (SCA), Licence No.
              20200000416. CFD trading involves substantial risk of loss and is
              not suitable for all investors. Past performance is not indicative
              of future results.
            </p>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
