"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FadeUp } from "../ui/Animate";

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

function Counter({ to, prefix = "", suffix = "", decimals = 0, duration = 2200 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = eased * to;
      setCount(parseFloat(value.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };

    requestAnimationFrame(step);
  }, [isInView, to, duration, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const STATS = [
  {
    to: 500,
    suffix: "+",
    label: "Instruments",
    sublabel: "Forex, metals, crypto, indices & more",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    to: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Execution Rate",
    sublabel: "Orders filled at requested price",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    to: 21,
    suffix: "K+",
    label: "Global Traders",
    sublabel: "Active accounts worldwide",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    to: 24,
    suffix: "/7",
    label: "Support",
    sublabel: "Live chat, email & phone",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    to: 180,
    suffix: "+",
    label: "Countries Served",
    sublabel: "Traders from every corner of the globe",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    to: 2,
    prefix: "$",
    suffix: "B+",
    label: "Monthly Volume",
    sublabel: "Traded across all asset classes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function OllaStats() {
  return (
    <section
      style={{
        background: "#07111F",
        paddingTop: "clamp(72px, 8vw, 112px)",
        paddingBottom: "clamp(72px, 8vw, 112px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,144,195,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide relative">

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
              color: "#60C8F0",
              background: "rgba(26,144,195,0.12)",
              border: "1px solid rgba(26,144,195,0.25)",
              padding: "5px 14px",
              borderRadius: 999,
              marginBottom: 14,
            }}
          >
            Olla by the Numbers
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: 14,
            }}
          >
            Trusted by Traders{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60C8F0, #1A90C3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Worldwide
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
            Numbers that speak for themselves. A regulated broker with a proven track record.
          </p>
        </FadeUp>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  textAlign: "center",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(26,144,195,0.07)";
                  el.style.borderColor = "rgba(26,144,195,0.25)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top accent line */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    right: "20%",
                    height: 2,
                    background: "linear-gradient(90deg, transparent, rgba(26,144,195,0.5), transparent)",
                    borderRadius: 1,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(26,144,195,0.12)",
                    border: "1px solid rgba(26,144,195,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#60C8F0",
                    margin: "0 auto 20px",
                  }}
                >
                  {stat.icon}
                </div>

                {/* Animated number */}
                <div
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.75) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: 8,
                    fontFamily: "monospace",
                    letterSpacing: "-0.03em",
                  }}
                >
                  <Counter
                    to={stat.to}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>

                <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", marginBottom: 4 }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                  {stat.sublabel}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
