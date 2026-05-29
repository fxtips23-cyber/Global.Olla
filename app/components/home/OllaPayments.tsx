"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Mini sparkline ──────────────────────────────────────────────────── */
function Sparkline({ color, data }: { color: string; data: number[] }) {
  const W = 76, H = 22;
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * W;
      const y = H - 3 - ((v - min) / range) * (H - 6);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ flexShrink: 0 }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.6}
        strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const FLOATERS = [
  {
    id: "client",
    title: "Client Commissions",
    value: "$19,223.01",
    change: "+23.13%",
    data: [4, 6, 5, 8, 7, 10, 9, 12, 11, 14],
    color: "#F59E0B",
    style: { top: "6%", left: "0%" },
  },
  {
    id: "portfolio",
    title: "Portfolio Balance",
    value: "$45,972.69",
    change: "+25.63%",
    data: [5, 7, 6, 10, 12, 11, 14, 13, 15, 17],
    color: "#10B981",
    style: { top: "10%", right: "0%" },
  },
  {
    id: "account",
    title: "Account Commissions",
    value: "$44,822.65",
    change: "+1.69%",
    data: [8, 9, 8, 11, 10, 12, 11, 13, 12, 13],
    color: "#10B981",
    style: { bottom: "22%", left: "2%" },
  },
];

const FEATURES = [
  {
    title: "Commissions Paid in Real-Time",
    desc: "Boost your financial potential by earning competitive commissions almost instantly.",
  },
  {
    title: "Tailored IB Deals",
    desc: "Various rebate levels, multi-tier IB program and reward structures tailored to your needs.",
  },
  {
    title: "Marketing Tool Hub",
    desc: "Access a range of marketing materials such as banners to boost your IB business effectively.",
  },
  {
    title: "Dedicated Account Manager",
    desc: "Support from dedicated and experienced account managers, guiding your success.",
  },
];

export default function OllaPayments() {
  return (
    <section
      style={{
        background: "#ECECEC",
        paddingTop: "clamp(72px, 8vw, 112px)",
        paddingBottom: "clamp(72px, 8vw, 112px)",
      }}
    >
      <div className="container-wide">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 24px)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: 10,
              letterSpacing: "-0.01em",
            }}
          >
            Olla Trade Introducing Broker
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#07111F",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: 22,
            }}
          >
            Grow Your Network{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with Confidence.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "#6B7280",
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.80,
            }}
          >
            Earn attractive commissions by referring clients to a trusted global broker that provides
            a reliable trading environment, superior trading tools, advanced platforms and free
            educational resources.
          </p>
        </motion.div>

        {/* ── Main content ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "center",
          }}
          className="ib-grid"
        >
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            style={{ position: "relative", minHeight: 500 }}
          >
            {/* Brand circle */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: "72%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1A90C3 0%, #0D6B99 100%)",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />

            {/* Person image — radial mask fades dark bg, reveals blue circle */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                height: 500,
                maskImage: "radial-gradient(ellipse 68% 85% at 50% 42%, black 30%, rgba(0,0,0,0.6) 52%, transparent 72%)",
                WebkitMaskImage: "radial-gradient(ellipse 68% 85% at 50% 42%, black 30%, rgba(0,0,0,0.6) 52%, transparent 72%)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=85&fit=crop&crop=top"
                alt="Olla Trade Introducing Broker"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
                sizes="50vw"
              />
            </div>

            {/* Floating stat cards */}
            {FLOATERS.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, scale: 0.88, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.14, ease }}
                style={{
                  position: "absolute",
                  ...f.style,
                  zIndex: 10,
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
                  minWidth: 180,
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                <div
                  style={{
                    fontSize: 9.5,
                    fontWeight: 700,
                    color: "#9CA3AF",
                    marginBottom: 6,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.title}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#111827", lineHeight: 1 }}>
                      {f.value}
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 3,
                        marginTop: 4,
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#10B981",
                      }}
                    >
                      <svg style={{ width: 9, height: 9 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      {f.change}
                    </div>
                  </div>
                  <Sparkline color={f.color} data={f.data} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: 2×2 feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: 0.08 * i, ease }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 18,
                  padding: "28px 22px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  transition: "all 0.22s ease",
                  cursor: "default",
                }}
                whileHover={{ y: -4, boxShadow: "0 10px 32px rgba(0,0,0,0.09)" }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.4,
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.70 }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>

      <style>{`
        @media (max-width: 768px) {
          .ib-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
