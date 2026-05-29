"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "../ui/Animate";

const STEPS = [
  { step: "01", label: "Create Account", desc: "Register in minutes — no paperwork required." },
  { step: "02", label: "Fund Your Account", desc: "Deposit from $10 via card, bank, or crypto." },
  { step: "03", label: "Start Trading", desc: "Access 500+ instruments on MT5 instantly." },
];

export default function OllaCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #07111F 0%, #0A1929 60%, #061121 100%)",
        paddingTop: "clamp(72px, 9vw, 120px)",
        paddingBottom: "clamp(72px, 9vw, 120px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(ellipse 90% 60% at 50% -20%, rgba(26,144,195,0.20) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      {/* Glow orbs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-5%",
          top: "30%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,144,195,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-5%",
          bottom: "20%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,144,195,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-mid relative text-center">

        {/* Badge */}
        <FadeUp>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "#60C8F0",
              background: "rgba(26,144,195,0.12)",
              border: "1px solid rgba(26,144,195,0.28)",
              padding: "6px 16px",
              borderRadius: 999,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10B981",
                display: "inline-block",
                boxShadow: "0 0 6px #10B981",
              }}
            />
            Markets Open Now
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.07}>
          <h2
            style={{
              fontSize: "clamp(34px, 5.5vw, 64px)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              marginBottom: 18,
            }}
          >
            Start Trading with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60C8F0 0%, #1A90C3 50%, #0D6B99 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Olla
            </span>{" "}
            Today.
          </h2>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.12}>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.75,
              maxWidth: 520,
              margin: "0 auto 40px",
            }}
          >
            Join over 21,000 traders worldwide. Open a live account or practice
            risk-free with a demo — in minutes, no commitment required.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.17}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginBottom: 56 }}>
            <Link
              href="https://portal.ollatrade.com/auth/register"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "linear-gradient(135deg, #1E9FD8, #1478A6)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 15,
                padding: "15px 32px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1.5px solid #1A90C3",
                boxShadow: "0 10px 32px rgba(26,144,195,0.35)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 16px 44px rgba(26,144,195,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 10px 32px rgba(26,144,195,0.35)";
              }}
            >
              Open Live Account
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="https://portal.ollatrade.com/auth/register?demo=true"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.80)",
                fontWeight: 600,
                fontSize: 15,
                padding: "15px 32px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.14)",
                transition: "all 0.2s ease",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.10)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.transform = "translateY(0)";
              }}
            >
              Try Demo Account
            </Link>
          </div>
        </FadeUp>

        {/* 3-step process */}
        <FadeUp delay={0.22}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18,
              overflow: "hidden",
              maxWidth: 700,
              margin: "0 auto 36px",
            }}
          >
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                style={{
                  padding: "22px 20px",
                  background: i === 1 ? "rgba(26,144,195,0.07)" : "transparent",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#1A90C3",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                  }}
                >
                  {s.step}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", marginBottom: 4 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Trust line */}
        <FadeUp delay={0.26}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", maxWidth: 540, margin: "0 auto" }}>
            🛡️ UAE SCA Regulated · Segregated Funds · Negative Balance Protection · No Hidden Fees
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
