"use client";
import Link from "next/link";
import { FadeUp, StaggerChildren, fadeUpItem } from "../ui/Animate";
import { motion } from "framer-motion";

const MARKETS = [
  {
    key: "forex", href: "/markets/forex", emoji: "💱",
    title: "Forex",
    subtitle: "Currency Pairs",
    desc: "Trade 70+ major, minor, and exotic currency pairs with tight spreads.",
    stats: [["70+ Pairs", "Instruments"], ["0.0 pips", "From"], ["1:500", "Leverage"]],
    color: "#1A90C3",
    tint: "#EBF5FB",
  },
  {
    key: "metals", href: "/markets/metals", emoji: "🥇",
    title: "Metals",
    subtitle: "Gold & Silver",
    desc: "Access precious metals CFDs including XAU/USD and XAG/USD.",
    stats: [["2 Metals", "Instruments"], ["25 pts", "From"], ["1:200", "Leverage"]],
    color: "#B7860B",
    tint: "#FEFCE8",
  },
  {
    key: "indices", href: "/markets/indices", emoji: "📈",
    title: "Indices",
    subtitle: "Global Indices",
    desc: "Trade major global indices including US30, SPX500, NAS100 and more.",
    stats: [["15+", "Indices"], ["1 pt", "From"], ["1:100", "Leverage"]],
    color: "#7C3AED",
    tint: "#F5F3FF",
  },
  {
    key: "futures", href: "/markets/futures", emoji: "📊",
    title: "Futures",
    subtitle: "Commodity Futures",
    desc: "Trade financial and commodity futures on a transparent platform.",
    stats: [["10+", "Futures"], ["Tight", "Spreads"], ["Market", "Execution"]],
    color: "#059669",
    tint: "#ECFDF5",
  },
  {
    key: "crypto", href: "/markets/crypto", emoji: "₿",
    title: "Crypto",
    subtitle: "Digital Assets",
    desc: "Trade Bitcoin, Ethereum and more top crypto CFDs 24/7.",
    stats: [["10+ Coins", "Instruments"], ["Extended", "Hours"], ["1:5", "Leverage"]],
    color: "#F59E0B",
    tint: "#FFFBEB",
  },
  {
    key: "energies", href: "/markets/energies", emoji: "⚡",
    title: "Energies",
    subtitle: "Oil & Gas",
    desc: "Trade Crude Oil, Brent Oil and Natural Gas CFDs with competitive spreads.",
    stats: [["3+", "Instruments"], ["3 pts", "From"], ["1:100", "Leverage"]],
    color: "#DC2626",
    tint: "#FEF2F2",
  },
];

function MiniChart({ color }: { color: string }) {
  const points = "0,35 40,28 80,32 120,18 160,22 200,10 240,14";
  return (
    <svg viewBox="0 0 240 50" className="w-full h-8" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`fill-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={`0,35 ${points} 240,50 0,50`} fill={`url(#fill-${color})`} />
    </svg>
  );
}

export default function MarketsGrid() {
  return (
    <section className="section-py section-gray">
      <div className="container-wide">
        <FadeUp className="text-center mb-12">
          <span className="badge mb-4">Popular Markets</span>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold leading-tight mb-3" style={{ color: "#07111F", letterSpacing: "-0.02em" }}>
            Access Global Markets
          </h2>
          <p className="text-[16px] max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Trade across six major asset classes with competitive spreads and up to 1:500 leverage.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MARKETS.map((m) => (
            <motion.div key={m.key} variants={fadeUpItem}>
              <Link href={m.href}
                className="card card-hover group flex flex-col p-6 h-full text-inherit no-underline"
                style={{ textDecoration: "none" }}>

                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: m.tint, border: `1px solid ${m.color}20` }}>
                    {m.emoji}
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors"
                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: m.color }}>
                    {m.subtitle}
                  </span>
                </div>
                <h3 className="text-[18px] font-bold mb-2" style={{ color: "#111827" }}>{m.title}</h3>
                <p className="text-[13px] leading-relaxed mb-4 flex-1" style={{ color: "#6B7280" }}>{m.desc}</p>

                <MiniChart color={m.color} />

                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t" style={{ borderColor: "#F3F4F6" }}>
                  {m.stats.map(([val, lbl]) => (
                    <div key={lbl} className="text-center">
                      <div className="text-[13px] font-bold" style={{ color: "#111827" }}>{val}</div>
                      <div className="text-[10px]" style={{ color: "#9CA3AF" }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
