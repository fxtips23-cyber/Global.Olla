"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, fadeUpItem } from "../ui/Animate";

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Ultra-Fast Execution",
    desc: "Orders filled in under 10ms with no requotes or dealing desk. Pure market execution at best available price.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Institutional Spreads",
    desc: "Spreads from 0.0 pips on RAW accounts. Transparent pricing with no hidden markups or surprise fees.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Secure Withdrawals",
    desc: "Segregated client funds, negative balance protection, and same-day withdrawal processing to your account.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "MT5 Trading Platform",
    desc: "Full access to MetaTrader 5 on desktop, web, and mobile. Advanced charting, EAs, and one-click trading.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Multi-Asset Access",
    desc: "500+ instruments across Forex, Metals, Indices, Futures, Crypto, and Energies — all from a single account.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "Professional client service team available Mon–Fri via live chat, phone, and email throughout market hours.",
  },
];

export default function OllaWhyTrade() {
  return (
    <section style={{ background: "#FFFFFF", paddingTop: "clamp(72px, 8vw, 112px)", paddingBottom: "clamp(72px, 8vw, 112px)" }}>
      <div className="container-wide">

        {/* Header */}
        <FadeUp className="text-center mb-16">
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
              marginBottom: 16,
            }}
          >
            Why Olla Trade
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
            Everything You Need to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trade Smarter
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Professional conditions, institutional-grade infrastructure, and a fully regulated environment
            trusted by over 21,000 traders worldwide.
          </p>
        </FadeUp>

        {/* Feature cards grid */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUpItem}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 18,
                padding: "28px 28px 26px",
                transition: "all 0.25s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 48px rgba(26,144,195,0.10), 0 0 0 1px rgba(26,144,195,0.15)",
                borderColor: "rgba(26,144,195,0.25)",
              }}
            >
              {/* Subtle corner gradient on hover */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: "radial-gradient(circle at top right, rgba(26,144,195,0.06), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #EBF5FB, #D6ECFA)",
                  border: "1px solid #BAE2F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1A90C3",
                  marginBottom: 18,
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>

              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Regulation banner */}
        <FadeUp>
          <div
            style={{
              borderRadius: 20,
              background: "linear-gradient(135deg, #07111F 0%, #0D1F35 60%, #0A1929 100%)",
              border: "1px solid rgba(26,144,195,0.18)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Subtle glow accent */}
            <div aria-hidden style={{
              position: "absolute", top: 0, right: "10%",
              width: 500, height: 500,
              background: "radial-gradient(circle, rgba(26,144,195,0.10) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />

            <div style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: 32,
              padding: "44px 52px",
            }} className="flex-col-on-mobile">

              {/* Left: headline + trust row */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "rgba(26,144,195,0.18)",
                    border: "1px solid rgba(26,144,195,0.30)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#60C8F0", flexShrink: 0,
                  }}>
                    <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#1A90C3", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 2 }}>
                      Fully Regulated &amp; Licensed
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>
                      Olla Capital Financial Services L.L.C. · UAE SCA Licence No. 20200000416
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.22, letterSpacing: "-0.02em", marginBottom: 22 }}>
                  Trade with a broker you can trust —<br />
                  <span style={{ background: "linear-gradient(90deg, #60C8F0, #1A90C3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    regulated, transparent, client-first.
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {[
                    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Segregated Client Funds" },
                    { icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636", label: "Negative Balance Protection" },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Regulated Since 2020" },
                    { icon: "M3 10h18M3 14h18M10 6l-4 4 4 4M14 6l4 4-4 4", label: "Fast Withdrawals" },
                    { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Secure &amp; Encrypted" },
                  ].map(({ icon, label }) => (
                    <span key={label} style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      fontSize: 12, fontWeight: 600, color: "#60C8F0",
                      background: "rgba(26,144,195,0.10)",
                      border: "1px solid rgba(26,144,195,0.20)",
                      padding: "7px 14px", borderRadius: 999,
                    }}>
                      <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: label }} />
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, flexShrink: 0 }}>
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "linear-gradient(135deg, #1E9FD8 0%, #1A90C3 60%, #1478A6 100%)",
                    color: "#FFFFFF", fontWeight: 700, fontSize: 15,
                    padding: "16px 32px", borderRadius: 12,
                    textDecoration: "none",
                    border: "1.5px solid rgba(26,144,195,0.5)",
                    boxShadow: "0 8px 28px rgba(26,144,195,0.35)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Open Live Account
                  <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/company/about"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)",
                    textDecoration: "none", whiteSpace: "nowrap",
                  }}
                >
                  Learn about our regulation
                  <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
