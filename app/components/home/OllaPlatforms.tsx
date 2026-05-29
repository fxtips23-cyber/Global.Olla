"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, SlideLeft, SlideRight } from "../ui/Animate";

const PLATFORMS = [
  {
    id: "desktop",
    name: "MT5 Desktop",
    subtitle: "Full-featured terminal",
    desc: "The most powerful trading environment. Advanced charting, 21 timeframes, built-in economic calendar, and full Expert Advisor support.",
    features: ["21 chart timeframes", "30+ analytical tools", "Expert Advisors (EA)", "Depth of Market", "Strategy tester"],
    badge: "Most Powerful",
    badgeColor: "#1A90C3",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    downloadLabel: "Download MT5",
    downloadHref: "/trading/platform",
  },
  {
    id: "web",
    name: "WebTrader",
    subtitle: "Trade from any browser",
    desc: "No download required. Full MT5 functionality directly in your browser. Perfect for trading on any device, anywhere.",
    features: ["Zero installation", "All MT5 features", "Full chart library", "One-click trading", "Secure SSL encrypted"],
    badge: "No Download",
    badgeColor: "#10B981",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    downloadLabel: "Launch WebTrader",
    downloadHref: "/trading/platform",
  },
  {
    id: "mobile",
    name: "Mobile Trading",
    subtitle: "iOS & Android",
    desc: "Manage your positions, analyse markets, and execute trades from your smartphone. The full trading experience in your pocket.",
    features: ["iOS & Android", "Push notifications", "Full chart analysis", "Instant deposits", "Biometric login"],
    badge: "Always On",
    badgeColor: "#F59E0B",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    downloadLabel: "Download App",
    downloadHref: "/trading/platform",
  },
];

const PLATFORM_IMAGES: Record<string, { src: string; bg: string; objectPosition: string }> = {
  desktop: {
    src: "/mt5-desktop.jpg",
    bg: "#07111F",
    objectPosition: "top left",
  },
  web: {
    src: "/mt5-web.jpg",
    bg: "#1C2B3A",
    objectPosition: "top center",
  },
  mobile: {
    src: "/mt5-mobile-iphone.jpg",
    bg: "#F0F4F8",
    objectPosition: "center",
  },
};

function PlatformMockup({ id }: { id: string }) {
  const img = PLATFORM_IMAGES[id];
  return (
    <div style={{ position: "relative", width: "100%", height: 210, borderRadius: 12, overflow: "hidden", background: img.bg }}>
      <Image
        src={img.src}
        alt={`${id} platform screenshot`}
        fill
        style={{ objectFit: "cover", objectPosition: img.objectPosition }}
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={id === "desktop"}
      />
    </div>
  );
}

export default function OllaPlatforms() {
  return (
    <section
      style={{
        background: "#F6F8FB",
        paddingTop: "clamp(72px, 8vw, 112px)",
        paddingBottom: "clamp(72px, 8vw, 112px)",
      }}
    >
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
            Trading Platforms
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
            Trade on Any Device,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Anywhere.
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            MetaTrader 5 across desktop, web browser, and mobile — so you never
            miss a market opportunity.
          </p>
        </FadeUp>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PLATFORMS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.08}>
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 20px 60px rgba(26,144,195,0.10), 0 0 0 1px rgba(26,144,195,0.15)";
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "rgba(26,144,195,0.25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "#E5E7EB";
                }}
              >
                {/* Mockup */}
                <div
                  style={{
                    padding: "16px",
                    background: "linear-gradient(180deg, #EEF2F7 0%, #F6F8FB 100%)",
                    borderBottom: "1px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PlatformMockup id={p.id} />
                </div>

                {/* Content */}
                <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: "#EBF5FB",
                          border: "1px solid #BAE2F5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1A90C3",
                          flexShrink: 0,
                        }}
                      >
                        {p.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 800, color: "#111827", letterSpacing: "-0.01em" }}>{p.name}</div>
                        <div style={{ fontSize: 11, color: "#9CA3AF" }}>{p.subtitle}</div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: p.badgeColor,
                        background: `${p.badgeColor}15`,
                        border: `1px solid ${p.badgeColor}30`,
                        padding: "3px 8px",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65, marginBottom: 16 }}>
                    {p.desc}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                    {p.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#374151" }}>
                        <span
                          style={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            background: "#EBF5FB",
                            border: "1px solid #BAE2F5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <svg className="w-2.5 h-2.5" fill="none" stroke="#1A90C3" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={p.downloadHref}
                    className="btn-primary w-full justify-center"
                    style={{ textAlign: "center", borderRadius: 10 }}
                  >
                    {p.downloadLabel}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
