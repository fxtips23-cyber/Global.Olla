"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, SlideLeft } from "../ui/Animate";

const ACCOUNTS = [
  {
    key: "standard",
    href: "/trading/accounts/classic",
    name: "Standard",
    tagline: "Best for beginners",
    minDeposit: "$10",
    spread: "From 1.4 pips",
    commission: "$0",
    leverage: "Up to 1:500",
    featured: false,
    accentColor: "#6B7280",
    features: [
      "Zero commission",
      "Fixed & variable spreads",
      "Full MT5 access",
      "Negative balance protection",
      "24/5 support",
    ],
    cta: "Open Standard Account",
  },
  {
    key: "ecn",
    href: "/trading/accounts/pro",
    name: "ECN",
    tagline: "Most popular",
    minDeposit: "$2,000",
    spread: "From 0.0 pips",
    commission: "$3.5/lot",
    leverage: "Up to 1:400",
    featured: true,
    accentColor: "#1A90C3",
    features: [
      "Raw ECN spreads",
      "Direct liquidity access",
      "Priority execution",
      "Dedicated account manager",
      "VPS hosting eligible",
    ],
    cta: "Open ECN Account",
  },
  {
    key: "islamic",
    href: "/trading/accounts/classic",
    name: "Islamic",
    tagline: "Swap-free accounts",
    minDeposit: "$10",
    spread: "From 1.4 pips",
    commission: "$0",
    leverage: "Up to 1:300",
    featured: false,
    accentColor: "#10B981",
    features: [
      "No swap / rollover fees",
      "Shariah-compliant",
      "Available on all account types",
      "Negative balance protection",
      "Full MT5 access",
    ],
    cta: "Open Islamic Account",
  },
];

export default function OllaAccountTypes() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        paddingTop: "clamp(72px, 8vw, 112px)",
        paddingBottom: "clamp(72px, 8vw, 112px)",
      }}
    >
      <div className="container-wide">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <SlideLeft>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#1478A6",
                background: "#EBF5FB",
                border: "1px solid #BAE2F5",
                padding: "5px 14px",
                borderRadius: 999,
                marginBottom: 14,
              }}
            >
              Account Types
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                color: "#07111F",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: 14,
              }}
            >
              Choose the Account{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                That Fits You.
              </span>
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, maxWidth: 440 }}>
              Three professional account types built for every style of trader —
              from beginners to institutional professionals.
            </p>
          </SlideLeft>

          <FadeUp delay={0.1} className="flex items-end justify-start lg:justify-end">
            <Link href="/trading/accounts" className="btn-secondary">
              Compare All Features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ACCOUNTS.map((acc, i) => (
            <FadeUp key={acc.key} delay={i * 0.08}>
              <div
                style={{
                  position: "relative",
                  background: acc.featured
                    ? "linear-gradient(180deg, #07111F 0%, #0D1F35 100%)"
                    : "#FFFFFF",
                  border: acc.featured
                    ? "1px solid rgba(26,144,195,0.35)"
                    : "1px solid #E5E7EB",
                  borderRadius: 20,
                  padding: "30px 26px 26px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: acc.featured
                    ? "0 24px 60px rgba(26,144,195,0.18), 0 0 0 1px rgba(26,144,195,0.12)"
                    : "none",
                  transition: "all 0.25s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (!acc.featured) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                    el.style.borderColor = "#BAE2F5";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!acc.featured) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "#E5E7EB";
                  }
                }}
              >
                {/* Featured glow line */}
                {acc.featured && (
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "linear-gradient(90deg, transparent, rgba(26,144,195,0.8), transparent)",
                    }}
                  />
                )}

                {/* Popular badge */}
                {acc.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: -1,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "linear-gradient(135deg, #1A90C3, #1E9FD8)",
                      color: "#FFFFFF",
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "5px 16px",
                      borderRadius: "0 0 10px 10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Account header */}
                <div style={{ marginBottom: 20, paddingTop: acc.featured ? 18 : 0 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      color: acc.featured ? "rgba(255,255,255,0.45)" : "#9CA3AF",
                      marginBottom: 6,
                    }}
                  >
                    {acc.tagline}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 38px)",
                      fontWeight: 900,
                      color: acc.featured ? "#FFFFFF" : "#111827",
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {acc.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: acc.accentColor }}>
                      {acc.minDeposit}
                    </span>
                    <span style={{ fontSize: 12, color: acc.featured ? "rgba(255,255,255,0.40)" : "#9CA3AF" }}>
                      min. deposit
                    </span>
                  </div>
                </div>

                {/* Conditions */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    marginBottom: 20,
                    paddingBottom: 20,
                    borderBottom: `1px solid ${acc.featured ? "rgba(255,255,255,0.10)" : "#F3F4F6"}`,
                  }}
                >
                  {[
                    ["Spread",       acc.spread],
                    ["Commission",   acc.commission],
                    ["Max Leverage", acc.leverage],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: acc.featured ? "rgba(255,255,255,0.40)" : "#9CA3AF" }}>{label}</span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: acc.featured ? acc.accentColor : "#111827",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  {acc.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13 }}>
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: acc.featured ? "rgba(26,144,195,0.18)" : "#EBF5FB",
                          border: acc.featured ? "1px solid rgba(26,144,195,0.30)" : "1px solid #BAE2F5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <svg className="w-2.5 h-2.5" fill="none" stroke={acc.featured ? "#60C8F0" : "#1A90C3"} strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span style={{ color: acc.featured ? "rgba(255,255,255,0.70)" : "#374151" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 20px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    background: acc.featured
                      ? "linear-gradient(135deg, #1E9FD8, #1478A6)"
                      : "#FFFFFF",
                    color: acc.featured ? "#FFFFFF" : "#111827",
                    border: acc.featured
                      ? "1.5px solid #1A90C3"
                      : "1.5px solid #E5E7EB",
                    boxShadow: acc.featured ? "0 6px 20px rgba(26,144,195,0.30)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-2px)";
                    if (!acc.featured) {
                      el.style.borderColor = "#1A90C3";
                      el.style.color = "#1A90C3";
                    } else {
                      el.style.boxShadow = "0 10px 28px rgba(26,144,195,0.40)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    if (!acc.featured) {
                      el.style.borderColor = "#E5E7EB";
                      el.style.color = "#111827";
                    } else {
                      el.style.boxShadow = "0 6px 20px rgba(26,144,195,0.30)";
                    }
                  }}
                >
                  {acc.cta}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
