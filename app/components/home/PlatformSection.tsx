"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

function MT4Terminal() {
  const rows = [
    { sym: "EUR/USD", bid: "1.0841", ask: "1.0843", chg: "+0.12", up: true },
    { sym: "GBP/USD", bid: "1.2729", ask: "1.2731", chg: "+0.08", up: true },
    { sym: "USD/JPY", bid: "149.80", ask: "149.82", chg: "-0.15", up: false },
    { sym: "XAU/USD", bid: "2341.5", ask: "2342.1", chg: "+0.31", up: true },
    { sym: "BTC/USD", bid: "67380", ask: "67420",  chg: "+1.24", up: true },
  ];
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
      style={{ background: "#060E1C", border: "1px solid rgba(26,144,195,0.20)" }}>
      {/* Title bar */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[11px] font-mono text-white/30">MetaTrader 4 — Olla Trade</span>
      </div>
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-4 py-2 border-b" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.04)" }}>
        {["File", "View", "Insert", "Charts", "Tools", "Window", "Help"].map((m) => (
          <span key={m} className="text-[10px] px-2 py-1 rounded text-white/30 hover:text-white/60 hover:bg-white/5 cursor-pointer transition-colors">{m}</span>
        ))}
      </div>
      {/* Market watch header */}
      <div className="px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1A90C3" }}>Market Watch</span>
      </div>
      {/* Column headers */}
      <div className="grid grid-cols-4 gap-2 px-4 py-2 text-[10px] uppercase tracking-widest" style={{ color: "#5A6A7A" }}>
        <span>Symbol</span><span className="text-right">Bid</span><span className="text-right">Ask</span><span className="text-right">Change</span>
      </div>
      {/* Rows */}
      {rows.map((r, i) => (
        <div key={r.sym}
          className={`grid grid-cols-4 gap-2 px-4 py-2.5 text-[12px] font-mono transition-colors hover:bg-white/[0.04] ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}>
          <span className="font-semibold text-white/75 non-mono font-sans text-[11px]">{r.sym}</span>
          <span className="text-right text-white/60">{r.bid}</span>
          <span className="text-right text-white/60">{r.ask}</span>
          <span className={`text-right font-semibold ${r.up ? "text-[#38BDF8]" : "text-red-400"}`}>{r.up ? "+" : ""}{r.chg}%</span>
        </div>
      ))}
      {/* Chart area (simulated) */}
      <div className="mx-4 my-3 rounded-xl overflow-hidden" style={{ height: 120, background: "rgba(26,144,195,0.04)", border: "1px solid rgba(26,144,195,0.10)" }}>
        <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A90C3" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1A90C3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,90 C40,85 80,75 120,70 C160,65 180,72 220,60 C260,48 300,42 340,30 C360,24 380,20 400,15"
            stroke="#38BDF8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M0,90 C40,85 80,75 120,70 C160,65 180,72 220,60 C260,48 300,42 340,30 C360,24 380,20 400,15 L400,120 L0,120 Z"
            fill="url(#chartFill)" />
          {/* Price tag */}
          <rect x="330" y="8" width="62" height="14" rx="3" fill="rgba(26,144,195,0.3)" />
          <text x="361" y="18" fill="#38BDF8" fontSize="8" textAnchor="middle" fontFamily="monospace">1.0843</text>
        </svg>
      </div>
      {/* Action buttons */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        <button className="py-2 rounded-lg text-[11px] font-bold text-white transition-colors"
          style={{ background: "rgba(26,144,195,0.25)", border: "1px solid rgba(26,144,195,0.40)" }}>
          BUY 1.0843
        </button>
        <button className="py-2 rounded-lg text-[11px] font-bold text-red-400 transition-colors"
          style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.30)" }}>
          SELL 1.0841
        </button>
      </div>
    </div>
  );
}

export default function PlatformSection() {
  const t = useTranslations("home");

  const feats = [
    { icon: "⚡", text: "No requotes, instant market execution" },
    { icon: "📱", text: "Desktop, WebTrader & mobile apps" },
    { icon: "🤖", text: "Full Expert Advisor (EA) support" },
    { icon: "📊", text: "30+ built-in technical indicators" },
    { icon: "🔔", text: "Custom price alerts & push notifications" },
    { icon: "📈", text: "9 chart timeframes, multi-window layout" },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#08111F" }}>

      {/* Right glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(26,144,195,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1380px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
              <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">Trading Platform</span>
            </div>

            <h2 className="font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
              MetaTrader 4<br />
              <span className="grad-blue">Professional Grade</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#8B9DB0" }}>
              The industry&apos;s most trusted trading platform — available on desktop, browser, and mobile. Full EA support, advanced charting, and real-time market data.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {feats.map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-3.5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="text-[13px] leading-snug" style={{ color: "#8B9DB0" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3">
              <Link href="/trading/platform"
                className="btn-glow px-6 py-3 rounded-xl text-[13px] font-semibold">
                Download MT4
              </Link>
              <Link href="/trading/platform"
                className="px-6 py-3 rounded-xl text-[13px] font-medium transition-all"
                style={{ color: "#8B9DB0", border: "1px solid rgba(255,255,255,0.10)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#fff"; el.style.borderColor = "rgba(26,144,195,0.35)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#8B9DB0"; el.style.borderColor = "rgba(255,255,255,0.10)"; }}>
                WebTrader →
              </Link>
            </div>
          </div>

          {/* Right: MT4 terminal mockup */}
          <MT4Terminal />
        </div>
      </div>
    </section>
  );
}
