"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];


export default function OllaEducation() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "clamp(88px, 11vw, 148px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800, height: 400,
          background: "radial-gradient(ellipse at center, rgba(26,144,195,0.06) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-wide"
        style={{ position: "relative", textAlign: "center", maxWidth: 720, margin: "0 auto" }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          style={{ marginBottom: 22 }}
        >
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
              textTransform: "uppercase", color: "#1478A6",
              background: "#EBF5FB", border: "1px solid #BAE2F5",
              padding: "5px 16px", borderRadius: 999,
            }}
          >
            500+ Instruments · Regulated Broker
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.06, ease }}
          style={{
            fontSize: "clamp(38px, 5.5vw, 68px)",
            fontWeight: 900,
            color: "#07111F",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            marginBottom: 26,
          }}
        >
          Trade Beyond{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #1A90C3 0%, #0D6B99 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Limits.
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.13, ease }}
          style={{
            fontSize: "clamp(15px, 1.6vw, 18px)",
            color: "#6B7280",
            lineHeight: 1.80,
            marginBottom: 48,
          }}
        >
          Access global Forex, Gold, Crypto and CFD markets with ultra-fast execution,
          institutional-grade pricing, and a trading experience built for modern traders.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.20, ease }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}
        >
          <Link
            href="https://portal.ollatrade.com/auth/register"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg, #1E9FD8, #1A90C3 55%, #1478A6)",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: 17,
              padding: "18px 58px",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: "0 10px 36px rgba(26,144,195,0.38)",
              transition: "all 0.22s ease",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 16px 48px rgba(26,144,195,0.52)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 10px 36px rgba(26,144,195,0.38)";
            }}
          >
            Start Trading Now
          </Link>

          {/* Trust micro-copy */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {["Spreads from 0.0 pips", "No deposit fees", "Demo account available"].map((item) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#9CA3AF" }}>
                <svg style={{ width: 13, height: 13, color: "#10B981", flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
