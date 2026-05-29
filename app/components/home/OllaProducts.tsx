"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const MARKETS = [
  {
    id: "forex",
    label: "Forex",
    href: "/markets/forex",
    headline: "Forex",
    description:
      "Trade 70+ major, minor & exotic currency pairs with institutional-grade conditions. Deep liquidity, razor-thin spreads, and no dealing desk.",
    instruments: "70+ pairs",
    spread: "From 0.0 pips",
    leverage: "Up to 1:500",
    featured: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CHF"],
    cta: "Trade Forex",
    image: "https://images.unsplash.com/photo-1621280336935-ed7cae618aac?w=1200&q=90&fit=crop",
    imgPos: "center center",
    color: "#1A90C3",
  },
  {
    id: "metals",
    label: "Metals",
    href: "/markets/metals",
    headline: "Metals",
    description:
      "Speculate on gold, silver, platinum and more. Metals are the ultimate safe-haven assets — trade them with tight spreads and high leverage.",
    instruments: "8 instruments",
    spread: "From 0.12",
    leverage: "Up to 1:200",
    featured: ["XAU/USD", "XAG/USD", "XPT/USD", "XPD/USD"],
    cta: "Trade Metals",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&q=90&fit=crop",
    imgPos: "center center",
    color: "#F59E0B",
  },
  {
    id: "crypto",
    label: "Crypto",
    href: "/markets/crypto",
    headline: "Crypto",
    description:
      "Access 30+ digital assets including Bitcoin, Ethereum and Solana. Trade CFDs on crypto 24/7 without owning the underlying coin.",
    instruments: "30+ cryptos",
    spread: "From 0.5%",
    leverage: "Up to 1:5",
    featured: ["BTC/USD", "ETH/USD", "SOL/USD", "XRP/USD"],
    cta: "Trade Crypto",
    image: "https://images.unsplash.com/photo-1623227413711-25ee4388dae3?w=1200&q=90&fit=crop",
    imgPos: "center center",
    color: "#10B981",
  },
  {
    id: "indices",
    label: "Indices",
    href: "/markets/indices",
    headline: "Indices",
    description:
      "Get exposure to the world's leading stock markets in one trade. From the Nasdaq to the DAX, track entire economies with low spreads.",
    instruments: "25+ indices",
    spread: "From 0.4",
    leverage: "Up to 1:200",
    featured: ["NAS100", "US30", "SPX500", "GER40", "UK100"],
    cta: "Trade Indices",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90&fit=crop",
    imgPos: "center center",
    color: "#8B5CF6",
  },
  {
    id: "shares",
    label: "Shares",
    href: "/markets/stocks",
    headline: "Shares",
    description:
      "Trade CFDs on hundreds of top global stocks — Apple, Tesla, Amazon and more — without owning the shares, with leverage and no stamp duty.",
    instruments: "100+ shares",
    spread: "From 0.1%",
    leverage: "Up to 1:20",
    featured: ["AAPL", "TSLA", "AMZN", "NVDA", "MSFT"],
    cta: "Trade Shares",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=90&fit=crop",
    imgPos: "center center",
    color: "#06B6D4",
  },
  {
    id: "energy",
    label: "Energy",
    href: "/markets/energies",
    headline: "Energy",
    description:
      "Trade crude oil, natural gas and other energy commodities. Real-world supply and demand create some of the most volatile and profitable CFD trades.",
    instruments: "12 instruments",
    spread: "From 0.03",
    leverage: "Up to 1:100",
    featured: ["CRUDE", "BRENT", "NGAS", "HEAT"],
    cta: "Trade Energy",
    image: "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?w=1200&q=90&fit=crop",
    imgPos: "center 60%",
    color: "#EF4444",
  },
];

export default function OllaProducts() {
  const [active, setActive] = useState(MARKETS[0].id);
  const market = MARKETS.find((m) => m.id === active)!;

  return (
    <section style={{ background: "#F6F8FB", paddingTop: "clamp(72px, 8vw, 100px)", paddingBottom: "clamp(72px, 8vw, 100px)" }}>
      <div className="container-wide">

        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
            textTransform: "uppercase", color: "#1478A6",
            background: "#EBF5FB", border: "1px solid #BAE2F5",
            padding: "5px 14px", borderRadius: 999, marginBottom: 16,
          }}>
            Markets
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 10,
              }}>
                Trade Any Market,{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Anytime.</span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, maxWidth: 480 }}>
                500+ instruments across every major asset class. Competitive spreads, deep
                liquidity, and lightning execution on every trade.
              </p>
            </div>
            <Link href="/markets" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 13, fontWeight: 700, color: "#1A90C3",
              textDecoration: "none", padding: "11px 22px", borderRadius: 10,
              border: "1.5px solid rgba(26,144,195,0.30)",
              background: "rgba(26,144,195,0.06)", whiteSpace: "nowrap",
            }}>
              View All Instruments
              <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Panel */}
        <div style={{
          background: "#FFFFFF",
          borderRadius: 20,
          border: "1px solid #E5E7EB",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>

          {/* Tab bar */}
          <div style={{
            display: "flex",
            borderBottom: "1px solid #E5E7EB",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}>
            {MARKETS.map((m) => {
              const isActive = m.id === active;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  style={{
                    flexShrink: 0,
                    padding: "18px 28px",
                    fontSize: 14,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#1A90C3" : "#6B7280",
                    background: "none",
                    border: "none",
                    borderBottom: isActive ? `2.5px solid #1A90C3` : "2.5px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                    marginBottom: -1,
                    letterSpacing: isActive ? "-0.01em" : "normal",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "#374151";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "#6B7280";
                  }}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "grid", gridTemplateColumns: "42% 58%", minHeight: 420 }}
              className="flex-col-mobile"
            >
              {/* Left: text */}
              <div style={{
                padding: "52px 52px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 0,
              }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  fontSize: 11, fontWeight: 700, color: market.color,
                  background: `${market.color}12`,
                  border: `1px solid ${market.color}28`,
                  padding: "4px 12px", borderRadius: 999,
                  marginBottom: 20, width: "fit-content",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {market.label}
                </div>

                <h3 style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900,
                  color: "#07111F", letterSpacing: "-0.025em",
                  lineHeight: 1.1, marginBottom: 16,
                }}>
                  {market.headline}
                </h3>

                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.75, marginBottom: 28, maxWidth: 420 }}>
                  {market.description}
                </p>

                {/* Stats row */}
                <div style={{ display: "flex", gap: 28, marginBottom: 32, flexWrap: "wrap" }}>
                  {[
                    ["Instruments", market.instruments],
                    ["Min. Spread", market.spread],
                    ["Leverage", market.leverage],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 3, fontWeight: 500 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#07111F" }}>{value}</div>
                    </div>
                  ))}
                </div>

                {/* Symbol chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 36 }}>
                  {market.featured.map((sym) => (
                    <span key={sym} style={{
                      fontSize: 11, fontWeight: 700, color: "#374151",
                      background: "#F3F4F6", border: "1px solid #E5E7EB",
                      padding: "5px 11px", borderRadius: 7,
                      letterSpacing: "0.04em",
                    }}>
                      {sym}
                    </span>
                  ))}
                </div>

                <Link
                  href={market.href}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: `linear-gradient(135deg, ${market.color}, ${market.color}cc)`,
                    color: "#FFFFFF", fontWeight: 700, fontSize: 15,
                    padding: "14px 30px", borderRadius: 12,
                    textDecoration: "none", width: "fit-content",
                    boxShadow: `0 6px 20px ${market.color}30`,
                    transition: "all 0.2s ease",
                  }}
                >
                  {market.cta}
                  <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Right: image */}
              <div style={{ position: "relative", minHeight: 360, overflow: "hidden" }}>
                <Image
                  src={market.image}
                  alt={`${market.headline} trading`}
                  fill
                  style={{ objectFit: "cover", objectPosition: market.imgPos }}
                  sizes="(max-width: 768px) 100vw, 58vw"
                  priority={market.id === "forex"}
                />
                {/* Subtle left fade into white */}
                <div aria-hidden style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(90deg, #FFFFFF 0%, transparent 30%)",
                  pointerEvents: "none",
                }} />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
