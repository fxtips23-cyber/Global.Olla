"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const INSTRUMENTS = [
  {
    key: "forex", href: "/markets/forex",
    count: "70+", unit: "Pairs",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    sample: "EUR/USD", price: "1.0842", chg: "+0.12%", up: true,
    accent: "#1A90C3",
  },
  {
    key: "metals", href: "/markets/metals",
    count: "2", unit: "Metals",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 0M5 21l14 0M5 3v18M19 3v18M5 12h14" /></svg>,
    sample: "XAU/USD", price: "2,342", chg: "+0.31%", up: true,
    accent: "#F59E0B",
  },
  {
    key: "indices", href: "/markets/indices",
    count: "15+", unit: "Indices",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    sample: "US30", price: "38,954", chg: "+0.22%", up: true,
    accent: "#8B5CF6",
  },
  {
    key: "crypto", href: "/markets/crypto",
    count: "10+", unit: "Crypto",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    sample: "BTC/USD", price: "67,420", chg: "+1.24%", up: true,
    accent: "#F97316",
  },
  {
    key: "energies", href: "/markets/energies",
    count: "4", unit: "Energies",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" /></svg>,
    sample: "OIL/WTI", price: "78.34", chg: "-0.45%", up: false,
    accent: "#10B981",
  },
  {
    key: "stocks", href: "/markets/stocks",
    count: "1000+", unit: "Stocks",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>,
    sample: "AAPL", price: "182.40", chg: "+0.66%", up: true,
    accent: "#EC4899",
  },
];

function MiniChart({ up, accent }: { up: boolean; accent: string }) {
  const pts = up
    ? "0,20 10,18 20,14 30,16 40,10 50,8 60,4"
    : "0,4 10,6 20,10 30,8 40,14 50,16 60,20";
  return (
    <svg viewBox="0 0 60 24" className="w-16 h-6" fill="none" preserveAspectRatio="none">
      <polyline points={pts} stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

export default function MarketsSection() {
  const t = useTranslations("home");

  return (
    <section className="py-24 lg:py-32" style={{ background: "#08111F" }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4 px-4 py-2 rounded-full"
              style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
              <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">Global Markets</span>
            </div>
            <h2 className="font-bold text-white leading-tight mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.02em" }}>
              Trade What Moves the World
            </h2>
            <p className="text-[15px] leading-relaxed" style={{ color: "#8B9DB0" }}>
              500+ instruments across 6 asset classes — all on a single account.
            </p>
          </div>
          <Link href="/markets"
            className="flex-shrink-0 flex items-center gap-2 text-[13px] font-semibold transition-colors"
            style={{ color: "#38BDF8" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#38BDF8"; }}>
            View all markets
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSTRUMENTS.map((inst) => (
            <Link key={inst.key} href={inst.href}
              className="group relative flex flex-col p-6 rounded-2xl transition-all duration-300 card-hover overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>

              {/* Top glow on hover */}
              <div className="absolute top-0 inset-x-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${inst.accent}, transparent)` }} />

              {/* Icon + category */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${inst.accent}15`, border: `1px solid ${inst.accent}30`, color: inst.accent }}>
                    {inst.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-white capitalize">
                      {t(`why.features.instruments_title`).includes("500") ? inst.key.charAt(0).toUpperCase() + inst.key.slice(1) : inst.key.charAt(0).toUpperCase() + inst.key.slice(1)}
                    </div>
                    <div className="text-[11px]" style={{ color: "#5A6A7A" }}>{inst.count} {inst.unit}</div>
                  </div>
                </div>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: inst.accent }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </div>

              {/* Sample price */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="text-[11px] mb-1" style={{ color: "#5A6A7A" }}>{inst.sample}</div>
                  <div className="text-[18px] font-bold text-white font-mono">{inst.price}</div>
                  <div className={`text-[12px] font-semibold ${inst.up ? "text-[#38BDF8]" : "text-red-400"}`}>
                    {inst.chg}
                  </div>
                </div>
                <MiniChart up={inst.up} accent={inst.accent} />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 py-5 px-8 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { v: "0.0 pips", l: "Spreads from" },
            { v: "1:500", l: "Max leverage" },
            { v: "24/5", l: "Market access" },
            { v: "MT4", l: "Platform" },
            { v: "$0", l: "Commission (Std)" },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <div className="text-[18px] font-bold text-white">{v}</div>
              <div className="text-[11px] uppercase tracking-wide" style={{ color: "#5A6A7A" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
