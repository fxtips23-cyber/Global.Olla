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
} from "../../../components/ui/Animate";

/* ─────────────────────────────────────────────
   Metadata & Static Params
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Cryptocurrency CFD Trading — Bitcoin, Ethereum & More | Olla Trade",
  description:
    "Trade Bitcoin, Ethereum, Litecoin, XRP, BNB and more as CFDs on MetaTrader 5. No wallet required. Regulated by UAE SCA. Spreads from 0.002.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const CRYPTO_INSTRUMENTS = [
  {
    sym: "BTC/USD",
    name: "Bitcoin",
    color: "#F7931A",
    badgeLabel: "Large Cap",
    spreadFrom: "30.0",
    leverage: "1:2",
    desc: "Bitcoin is the original cryptocurrency and the largest by market capitalisation. Its price is driven by institutional adoption, on-chain data, macro risk-on/off sentiment, regulatory developments, and halving cycles.",
    drivers: [
      "Institutional & ETF inflows",
      "On-chain activity (hash rate, active addresses)",
      "Macro risk appetite & USD correlation",
      "Regulatory news and ETF approvals",
    ],
  },
  {
    sym: "ETH/USD",
    name: "Ethereum",
    color: "#627EEA",
    badgeLabel: "Large Cap",
    spreadFrom: "2.0",
    leverage: "1:2",
    desc: "Ethereum is the leading smart-contract platform, powering DeFi, NFTs, and tokenised assets. Price drivers include network upgrade cycles (e.g. upgrades reducing supply), DeFi activity levels, and developer ecosystem growth.",
    drivers: [
      "Smart contract & DeFi ecosystem usage",
      "Network upgrades and protocol changes",
      "ETH staking participation rates",
      "Layer-2 adoption and gas fee trends",
    ],
  },
  {
    sym: "LTC/USD",
    name: "Litecoin",
    color: "#345D9D",
    badgeLabel: "Mid Cap",
    spreadFrom: "0.5",
    leverage: "1:2",
    desc: "Litecoin is one of the earliest Bitcoin forks, designed for faster and lower-cost transactions. Often seen as digital silver to Bitcoin's gold, Litecoin tends to follow BTC's direction with higher relative volatility.",
    drivers: [
      "Bitcoin price correlation",
      "Payment adoption and integration",
      "Halving cycles (supply reduction events)",
      "Merchant and exchange listings",
    ],
  },
  {
    sym: "XRP/USD",
    name: "Ripple / XRP",
    color: "#00AAE4",
    badgeLabel: "Large Cap",
    spreadFrom: "0.003",
    leverage: "1:2",
    desc: "XRP is the native token of the Ripple payment network, designed for fast cross-border settlement. Its price is especially sensitive to regulatory rulings, institutional payment partnerships, and broader crypto market sentiment.",
    drivers: [
      "Regulatory environment and legal clarity",
      "Ripple partnership announcements",
      "Cross-border payment adoption",
      "Overall crypto market sentiment",
    ],
  },
  {
    sym: "BNB/USD",
    name: "BNB",
    color: "#F3BA2F",
    badgeLabel: "Large Cap",
    spreadFrom: "1.0",
    leverage: "1:2",
    desc: "BNB is the native token of the BNB Chain ecosystem and Binance exchange. Its price is closely tied to trading volume on Binance, BNB burn events, and the growth of BNB Chain's DeFi applications.",
    drivers: [
      "Binance exchange trading volume",
      "Quarterly token burn events",
      "BNB Chain DeFi and dApp activity",
      "Exchange regulatory developments",
    ],
  },
  {
    sym: "ADA/USD",
    name: "Cardano",
    color: "#0033AD",
    badgeLabel: "Mid Cap",
    spreadFrom: "0.002",
    leverage: "1:2",
    desc: "Cardano is a proof-of-stake blockchain focused on academic research and formal verification. Price drivers include protocol upgrade milestones, staking participation, DeFi ecosystem growth, and Bitcoin's broader market direction.",
    drivers: [
      "Protocol upgrade milestones",
      "Staking yield and participation",
      "DeFi and smart contract adoption",
      "Bitcoin correlation and market cycles",
    ],
  },
];

const CONDITIONS_TABLE = [
  { Instrument: "BTC/USD", "Spread From": "30.0", Leverage: "1:2", "Trading Hours": "Mon–Fri", "Min Trade": "0.01 lots" },
  { Instrument: "ETH/USD", "Spread From": "2.0",  Leverage: "1:2", "Trading Hours": "Mon–Fri", "Min Trade": "0.01 lots" },
  { Instrument: "LTC/USD", "Spread From": "0.5",  Leverage: "1:2", "Trading Hours": "Mon–Fri", "Min Trade": "0.01 lots" },
  { Instrument: "XRP/USD", "Spread From": "0.003",Leverage: "1:2", "Trading Hours": "Mon–Fri", "Min Trade": "0.01 lots" },
  { Instrument: "BNB/USD", "Spread From": "1.0",  Leverage: "1:2", "Trading Hours": "Mon–Fri", "Min Trade": "0.01 lots" },
  { Instrument: "ADA/USD", "Spread From": "0.002",Leverage: "1:2", "Trading Hours": "Mon–Fri", "Min Trade": "0.01 lots" },
];

const WHY_FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 15" />
      </svg>
    ),
    title: "24/7 Market Access",
    desc: "Crypto markets never close. Trade Bitcoin, Ethereum and more any hour of the day or night, 7 days a week via the MT5 platform.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 7h18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" /><path d="M3 7l2-4h14l2 4" /><circle cx="17" cy="13" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "No Wallet Needed",
    desc: "Trade crypto price movements as CFDs — no digital wallet, private keys, or exchange account required. Everything is managed through your MT5 account.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Long & Short Trading",
    desc: "CFD structure allows you to speculate on rising or falling crypto prices. Open long positions if you anticipate higher prices, or short if you expect prices to fall.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "MetaTrader 5 Platform",
    desc: "Access all crypto CFDs on the industry-standard MT5 platform. Benefit from advanced charting, automated trading via Expert Advisors, and full order management.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "SCA Regulated Broker",
    desc: "Olla Capital Financial Services L.L.C. is licensed by the UAE Securities and Commodities Authority (SCA Lic. 20200000416), providing regulatory oversight and client protections.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden commissions on crypto CFDs. Spreads are clearly disclosed on our website and displayed live in the MT5 platform before you execute any trade.",
  },
];

const FAQS = [
  {
    q: "What are cryptocurrency CFDs?",
    a: "Cryptocurrency CFDs (Contracts for Difference) are derivative instruments that allow you to speculate on the price movements of cryptocurrencies without owning the underlying digital asset. With Olla Trade, you trade the price difference between when you open and close a position — entirely through the MT5 platform.",
  },
  {
    q: "Do I own the underlying cryptocurrency when I trade crypto CFDs?",
    a: "No. When you trade crypto CFDs with Olla Trade, you do not own the actual cryptocurrency. You are entering a contract based on price movement. This means no wallets, no private keys, and no exposure to blockchain-related custody risks. You are only exposed to the price of the asset.",
  },
  {
    q: "What are the trading hours for crypto CFDs?",
    a: "Crypto CFDs at Olla Trade are available Monday through Friday during market hours on the MT5 platform. While underlying cryptocurrency markets operate 24/7, our CFD instruments follow the trading schedule set for our MT5 platform. Please check the MT5 platform or your account portal for the current trading schedule.",
  },
  {
    q: "What leverage is available for cryptocurrency CFDs?",
    a: "Cryptocurrency CFDs at Olla Trade are available with leverage of up to 1:2. Due to the inherent volatility of cryptocurrency markets, lower leverage limits apply compared to other asset classes such as forex. This is to help manage risk exposure on highly volatile instruments.",
  },
  {
    q: "How is crypto CFD pricing determined?",
    a: "Crypto CFD prices at Olla Trade are derived from underlying cryptocurrency market data. Our pricing reflects competitive market rates with a spread applied. Spreads are variable and may widen during periods of high market volatility, low liquidity, or around major market-moving events. All pricing is displayed transparently in the MT5 platform.",
  },
];

/* ─────────────────────────────────────────────
   Crypto Price Cards SVG Component (Hero)
───────────────────────────────────────────── */
function CryptoPriceCardsSVG() {
  const cards = [
    { sym: "BTC", price: "67,842.50", change: "+2.4%", color: "#F7931A", positive: true },
    { sym: "ETH", price: "3,521.80",  change: "+1.8%", color: "#627EEA", positive: true },
    { sym: "BNB", price: "412.35",   change: "-0.6%", color: "#F3BA2F", positive: false },
    { sym: "XRP", price: "0.6182",   change: "+3.1%", color: "#00AAE4", positive: true },
    { sym: "LTC", price: "84.62",    change: "-1.2%", color: "#345D9D", positive: false },
    { sym: "ADA", price: "0.4491",   change: "+0.9%", color: "#0033AD", positive: true },
  ];

  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      {/* Background glow */}
      <ellipse cx="190" cy="160" rx="160" ry="120" fill="rgba(247,147,26,0.06)" />

      {cards.map((c, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = col === 0 ? 20 : 200;
        const y = 20 + row * 98;
        const changeColor = c.positive ? "#10B981" : "#EF4444";

        return (
          <g key={c.sym}>
            {/* Card background */}
            <rect x={x} y={y} width="160" height="80" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            {/* Colour dot */}
            <circle cx={x + 16} cy={y + 20} r="6" fill={c.color} />
            {/* Symbol */}
            <text x={x + 28} y={y + 25} fill="white" fontSize="12" fontWeight="700" fontFamily="monospace">{c.sym}/USD</text>
            {/* Price */}
            <text x={x + 12} y={y + 50} fill="rgba(255,255,255,0.9)" fontSize="15" fontWeight="800" fontFamily="monospace">${c.price}</text>
            {/* Change badge */}
            <rect x={x + 12} y={y + 58} width="56" height="16" rx="4" fill={c.positive ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)"} />
            <text x={x + 40} y={y + 70} fill={changeColor} fontSize="10" fontWeight="600" fontFamily="monospace" textAnchor="middle">{c.change}</text>
          </g>
        );
      })}

      {/* Decorative chart line for BTC */}
      <polyline
        points="22,278 45,262 68,270 91,248 114,255 137,238 160,244 183,226"
        stroke="#F7931A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Page Component
───────────────────────────────────────────── */
export default async function CryptoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ═══════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#07111F] py-20 lg:py-28">
        {/* Amber/crypto ambient glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#F7931A] opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#627EEA] opacity-[0.05] blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0}>
                <div className="inline-flex items-center gap-2 bg-[#F7931A]/10 border border-[#F7931A]/25 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F7931A] animate-pulse" />
                  <span className="text-[#F7931A] text-[11px] font-bold uppercase tracking-widest">
                    Cryptocurrency CFDs
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                  Trade Bitcoin,{" "}
                  <span className="text-[#F7931A]">Ethereum</span>{" "}
                  &amp; More
                </h1>
              </FadeUp>

              <FadeUp delay={0.16}>
                <p className="text-white/55 text-[16px] leading-relaxed mb-8 max-w-lg">
                  Speculate on major cryptocurrency price movements as CFDs on
                  MetaTrader 5 — no wallet, no private keys. Go long or short on
                  BTC, ETH, XRP, BNB and more, from a regulated UAE broker.
                </p>
              </FadeUp>

              <FadeUp delay={0.22}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="https://portal.ollatrade.com/auth/register"
                    className="inline-flex items-center gap-2 bg-[#F7931A] hover:bg-[#e8841a] text-white font-bold px-6 py-3 rounded-xl text-[14px] transition-colors"
                  >
                    Start Trading Crypto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                  <Link
                    href="/markets"
                    className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/12 text-white font-semibold px-6 py-3 rounded-xl text-[14px] transition-colors"
                  >
                    View All Markets
                  </Link>
                </div>
              </FadeUp>

              {/* Stats strip */}
              <FadeUp delay={0.28}>
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: "6", label: "Crypto CFDs" },
                    { value: "1:2", label: "Max Leverage" },
                    { value: "No Wallet", label: "Required" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <div className="text-xl font-extrabold text-white">{value}</div>
                      <div className="text-[12px] text-white/40 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Breadcrumb */}
              <FadeUp delay={0.32}>
                <div className="flex items-center gap-2 text-[12px] text-white/30 mt-8">
                  <Link href="/markets" className="hover:text-white/60 transition-colors">Markets</Link>
                  <span>/</span>
                  <span className="text-white/50">Cryptocurrency CFDs</span>
                </div>
              </FadeUp>
            </div>

            {/* Right — price cards visual */}
            <SlideRight delay={0.12}>
              <CryptoPriceCardsSVG />
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HIGH-RISK WARNING
      ═══════════════════════════════════════ */}
      <section className="bg-white border-b border-red-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="text-[12px] font-bold text-red-800 mb-1.5">
                High-Risk Asset Class Warning
              </div>
              <p className="text-[12px] text-red-700 leading-relaxed">
                Cryptocurrency CFDs are among the highest-risk instruments available. Prices can move dramatically in short periods due to speculative trading, regulatory announcements, and market sentiment. Leverage amplifies both potential gains and losses. You may lose your entire invested capital. These instruments are not suitable for all clients. Past performance is not indicative of future results. Olla Capital Financial Services L.L.C. is licensed by the UAE SCA (Lic. 20200000416).
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. WHAT YOU CAN TRADE
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              Tradable Instruments
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              What You Can Trade
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Access six major cryptocurrency CFDs from a single MT5 account. No wallets, no exchange accounts — just price exposure on the instruments that matter most.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CRYPTO_INSTRUMENTS.map((c) => (
              <div
                key={c.sym}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-6 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xl font-extrabold text-[#111827]">{c.sym}</div>
                    <div className="text-[12px] text-[#6B7280] mt-0.5">{c.name}</div>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex-shrink-0"
                    style={{
                      background: `${c.color}15`,
                      color: c.color,
                      border: `1px solid ${c.color}40`,
                    }}
                  >
                    {c.badgeLabel}
                  </span>
                </div>

                <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4">{c.desc}</p>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between py-1.5 border-b border-[#E5E7EB] text-[13px]">
                    <span className="text-[#6B7280]">Spread From</span>
                    <span className="font-bold text-[#111827]">{c.spreadFrom}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E5E7EB] text-[13px]">
                    <span className="text-[#6B7280]">Max Leverage</span>
                    <span className="font-bold text-[#111827]">{c.leverage}</span>
                  </div>
                </div>

                {/* Key drivers */}
                <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                  Key Drivers
                </div>
                <div className="space-y-1">
                  {c.drivers.map((d) => (
                    <div key={d} className="flex items-start gap-2 text-[12px] text-[#6B7280]">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: c.color }}
                      />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. WHY TRADE CRYPTO CFDs
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              Platform & Features
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              Why Trade Crypto CFDs with Olla Trade
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto text-[15px] leading-relaxed">
              CFD trading gives you access to crypto price exposure without the complexity of exchanges, wallets, or custody — all from a regulated broker on a professional platform.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-[#F6F8FB] rounded-2xl border border-[#E5E7EB] p-6 hover:border-[#1A90C3]/20 hover:bg-[#EBF5FB] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#1A90C3] flex items-center justify-center mb-4 group-hover:border-[#1A90C3]/30 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. TRADING CONDITIONS TABLE
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              Specifications
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              Crypto CFD Trading Conditions
            </h2>
            <p className="text-[#6B7280] text-center mb-10 max-w-xl mx-auto text-[15px] leading-relaxed">
              Indicative conditions under normal market conditions. Spreads are variable and may widen during periods of high volatility.
            </p>
          </FadeUp>

          <FadeIn delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
              <table className="w-full text-sm min-w-[600px]">
                <thead className="bg-[#F6F8FB] border-b border-[#E5E7EB]">
                  <tr>
                    {(["Instrument", "Spread From", "Leverage", "Trading Hours", "Min Trade"] as const).map((h, i) => (
                      <th
                        key={h}
                        className={`px-5 py-4 text-[11px] font-bold uppercase tracking-wider ${i === 0 ? "text-left" : "text-center"} ${i === 2 ? "text-[#1A90C3]" : "text-[#6B7280]"}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {CONDITIONS_TABLE.map((row) => (
                    <tr key={row.Instrument} className="hover:bg-[#F9FAFB]">
                      <td className="px-5 py-3.5 font-bold text-[#111827] text-[13px] font-mono">{row.Instrument}</td>
                      <td className="px-5 py-3.5 text-center text-[13px] text-[#6B7280]">{row["Spread From"]}</td>
                      <td className="px-5 py-3.5 text-center text-[13px] font-semibold text-[#1A90C3]">{row.Leverage}</td>
                      <td className="px-5 py-3.5 text-center text-[13px] text-[#6B7280]">{row["Trading Hours"]}</td>
                      <td className="px-5 py-3.5 text-center text-[13px] text-[#6B7280]">{row["Min Trade"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#6B7280] text-center mt-3">
              Spreads are variable. All figures are indicative under normal market conditions. Leverage shown is the maximum available.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. MT5 PLATFORM SECTION
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[#07111F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SlideLeft>
              <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4">
                Platform
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-5 leading-tight">
                Trade Crypto CFDs on{" "}
                <span className="text-[#1A90C3]">MetaTrader 5</span>
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                All Olla Trade crypto CFDs are accessible through MetaTrader 5 — the industry-standard trading platform trusted by millions of traders worldwide. MT5 offers powerful charting tools, automated trading via Expert Advisors, and comprehensive order management.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  ["Advanced Charting", "21 timeframes, 80+ technical indicators, and drawing tools for detailed crypto market analysis."],
                  ["Expert Advisors (EAs)", "Automate your crypto CFD trading strategy with custom or third-party EAs running 24/5 on MT5."],
                  ["One-Click Trading", "Execute crypto positions quickly with one-click trading directly from charts or the order window."],
                  ["Multi-Device Access", "Trade from desktop (Windows/Mac), MT5 web terminal, or mobile apps on iOS and Android."],
                ].map(([title, desc]) => (
                  <div key={title as string} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1A90C3]/15 border border-[#1A90C3]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#1A90C3]" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white mb-0.5">{title}</div>
                      <div className="text-[12px] text-white/40 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#1A90C3] hover:bg-[#1580af] text-white font-bold px-6 py-3 rounded-xl text-[14px] transition-colors"
              >
                Open MT5 Account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </SlideLeft>

            <SlideRight delay={0.1}>
              {/* Platform feature cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Timeframes", value: "21", color: "#1A90C3" },
                  { label: "Indicators", value: "80+", color: "#F7931A" },
                  { label: "Order Types", value: "6", color: "#10B981" },
                  { label: "Languages", value: "39", color: "#627EEA" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-white/5 border border-white/8 rounded-2xl p-5 text-center hover:bg-white/8 transition-colors">
                    <div className="text-2xl font-extrabold mb-1" style={{ color }}>{value}</div>
                    <div className="text-[12px] text-white/40">{label}</div>
                  </div>
                ))}
              </div>

              {/* Compliance note */}
              <div className="mt-5 bg-white/4 border border-white/8 rounded-2xl p-4">
                <div className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-1">Regulatory Info</div>
                <p className="text-[12px] text-white/35 leading-relaxed">
                  Olla Capital Financial Services L.L.C. is licensed and regulated by the UAE Securities and Commodities Authority under licence number 20200000416. All crypto instruments are offered as CFDs — clients do not own the underlying digital asset.
                </p>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. FAQ
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              FAQs
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6B7280] text-center mb-12 text-[15px] leading-relaxed">
              Common questions about cryptocurrency CFD trading at Olla Trade.
            </p>
          </FadeUp>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.06}>
                <details className="group border border-[#E5E7EB] rounded-2xl bg-[#F6F8FB] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="text-[14px] font-semibold text-[#111827] leading-snug">{faq.q}</span>
                    <svg
                      className="w-4 h-4 text-[#6B7280] flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[#07111F]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full bg-[#1A90C3] opacity-[0.06] blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScaleIn>
            <div className="inline-flex items-center gap-2 bg-[#1A90C3]/10 border border-[#1A90C3]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1A90C3] animate-pulse" />
              <span className="text-[#1A90C3] text-[11px] font-bold uppercase tracking-widest">
                Get Started Today
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
              Ready to Trade Crypto CFDs?
            </h2>

            <p className="text-white/50 text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Open an account with Olla Trade and access Bitcoin, Ethereum, and more on MetaTrader 5. Regulated by the UAE SCA. No wallet required.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#1A90C3] hover:bg-[#1580af] text-white font-bold px-8 py-3.5 rounded-xl text-[15px] transition-colors"
              >
                Open Account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link
                href="/markets"
                className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/12 text-white font-semibold px-8 py-3.5 rounded-xl text-[15px] transition-colors"
              >
                View All Markets
              </Link>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap justify-center gap-6 text-[12px] text-white/30">
              <span>UAE SCA Regulated</span>
              <span className="text-white/15">·</span>
              <span>MetaTrader 5</span>
              <span className="text-white/15">·</span>
              <span>Lic. 20200000416</span>
              <span className="text-white/15">·</span>
              <span>CFDs — No Underlying Ownership</span>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
