import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  ScaleIn,
  StaggerChildren,
} from "../../../../components/ui/Animate";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "RAW Account | Olla Trade",
    description:
      "Trade with raw interbank spreads from 0.0 pips and ECN pricing. Minimum deposit $20,000. Professional-grade conditions on MetaTrader 5. Olla Capital Financial Services L.L.C. — UAE SCA Lic. 20200000416.",
  };
}

/* ─────────────────────────────────────────────────────────────
   ICON HELPERS
───────────────────────────────────────────────────────────────*/
function IconSpread({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4 4-4M17 8l4 4-4 4M14 4l-4 16" />
    </svg>
  );
}
function IconECN({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function IconLeverage({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4M3 12l9 4 9-4M3 17l9 4 9-4" />
    </svg>
  );
}
function IconInstruments({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18M18 3v18M3 9h18M3 15h18" />
    </svg>
  );
}
function IconMT5({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v5h11" />
    </svg>
  );
}
function IconSupport({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" />
    </svg>
  );
}
function IconVolume({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" />
    </svg>
  );
}
function IconPro({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}
function IconAlgo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function IconArrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   ECN FLOW VISUAL  (dark, inline SVG)
───────────────────────────────────────────────────────────────*/
function ECNFlowVisual() {
  const W = 900;
  const H = 400;

  // Liquidity provider nodes at top
  const lps = [
    { x: 150, label: "Bank A" },
    { x: 310, label: "Bank B" },
    { x: 470, label: "LP C" },
    { x: 630, label: "LP D" },
    { x: 790, label: "Bank E" },
  ];

  // ECN hub center
  const hubX = 450;
  const hubY = 200;

  // Trader node at bottom
  const traderX = 450;
  const traderY = 330;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A90C3" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1A90C3" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bgGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#071828" />
          <stop offset="100%" stopColor="#03090F" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background */}
      <rect width={W} height={H} fill="url(#bgGrad)" />

      {/* Subtle grid */}
      {Array.from({ length: 19 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 50}
          y1={0}
          x2={i * 50}
          y2={H}
          stroke="rgba(255,255,255,0.018)"
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={i * 50}
          x2={W}
          y2={i * 50}
          stroke="rgba(255,255,255,0.018)"
          strokeWidth="0.5"
        />
      ))}

      {/* Hub glow halo */}
      <ellipse cx={hubX} cy={hubY} rx="120" ry="90" fill="url(#hubGlow)" />

      {/* Lines: LP nodes → ECN hub */}
      {lps.map(({ x }) => (
        <line
          key={x}
          x1={x}
          y1={70}
          x2={hubX}
          y2={hubY - 40}
          stroke="rgba(26,144,195,0.28)"
          strokeWidth="1.2"
          strokeDasharray="5 4"
        />
      ))}

      {/* Lines: ECN hub → Trader */}
      <line
        x1={hubX}
        y1={hubY + 42}
        x2={traderX}
        y2={traderY - 22}
        stroke="rgba(26,144,195,0.55)"
        strokeWidth="2"
      />

      {/* LP nodes */}
      {lps.map(({ x, label }) => (
        <g key={label}>
          <rect
            x={x - 38}
            y={38}
            width={76}
            height={32}
            rx="7"
            fill="#0E1E2E"
            stroke="rgba(26,144,195,0.3)"
            strokeWidth="0.8"
          />
          <text
            x={x}
            y={59}
            fontSize="10"
            fill="rgba(255,255,255,0.55)"
            fontFamily="'Segoe UI',Arial,sans-serif"
            fontWeight="bold"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}

      {/* LP section label */}
      <text
        x={W / 2}
        y={22}
        fontSize="9"
        fill="rgba(255,255,255,0.22)"
        fontFamily="'Segoe UI',Arial,sans-serif"
        textAnchor="middle"
        letterSpacing="2"
      >
        INTERBANK LIQUIDITY PROVIDERS
      </text>

      {/* ECN Hub ring */}
      <circle cx={hubX} cy={hubY} r="58" fill="#091826" stroke="rgba(26,144,195,0.45)" strokeWidth="1.5" />
      <circle cx={hubX} cy={hubY} r="48" fill="#0B2035" stroke="rgba(26,144,195,0.2)" strokeWidth="0.6" />

      {/* ECN Hub label */}
      <text
        x={hubX}
        y={hubY - 9}
        fontSize="11"
        fill="#1A90C3"
        fontFamily="'Segoe UI',Arial,sans-serif"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        ECN
      </text>
      <text
        x={hubX}
        y={hubY + 7}
        fontSize="8.5"
        fill="rgba(255,255,255,0.35)"
        fontFamily="'Segoe UI',Arial,sans-serif"
        textAnchor="middle"
      >
        AGGREGATOR
      </text>
      <text
        x={hubX}
        y={hubY + 20}
        fontSize="7.5"
        fill="rgba(255,255,255,0.2)"
        fontFamily="monospace"
        textAnchor="middle"
      >
        0.0 pip spread
      </text>

      {/* Best bid/ask display */}
      <rect
        x={hubX - 80}
        y={hubY + 52}
        width={160}
        height={22}
        rx="5"
        fill="rgba(26,144,195,0.12)"
        stroke="rgba(26,144,195,0.25)"
        strokeWidth="0.8"
      />
      <text
        x={hubX - 50}
        y={hubY + 67}
        fontSize="9"
        fill="#26a69a"
        fontFamily="monospace"
        textAnchor="middle"
      >
        1.08471
      </text>
      <text
        x={hubX}
        y={hubY + 67}
        fontSize="8"
        fill="rgba(255,255,255,0.2)"
        fontFamily="monospace"
        textAnchor="middle"
      >
        |
      </text>
      <text
        x={hubX + 50}
        y={hubY + 67}
        fontSize="9"
        fill="#ef5350"
        fontFamily="monospace"
        textAnchor="middle"
      >
        1.08472
      </text>

      {/* Arrow on hub → trader line */}
      <polygon
        points={`${traderX},${traderY - 22} ${traderX - 5},${traderY - 32} ${traderX + 5},${traderY - 32}`}
        fill="#1A90C3"
        opacity="0.8"
      />

      {/* Trader node */}
      <rect
        x={traderX - 72}
        y={traderY - 22}
        width={144}
        height={46}
        rx="10"
        fill="#0E1E2E"
        stroke="#1A90C3"
        strokeWidth="1.2"
      />
      <text
        x={traderX}
        y={traderY - 3}
        fontSize="11"
        fill="rgba(255,255,255,0.75)"
        fontFamily="'Segoe UI',Arial,sans-serif"
        fontWeight="bold"
        textAnchor="middle"
      >
        YOUR MT5 ACCOUNT
      </text>
      <text
        x={traderX}
        y={traderY + 14}
        fontSize="8.5"
        fill="rgba(255,255,255,0.3)"
        fontFamily="monospace"
        textAnchor="middle"
      >
        RAW spreads · Market execution
      </text>

      {/* Stats row at bottom */}
      {[
        { x: 150, label: "SPREAD", value: "0.0 pips" },
        { x: 320, label: "EXECUTION", value: "Market" },
        { x: 490, label: "PRICING", value: "ECN / STP" },
        { x: 660, label: "SLIPPAGE", value: "Minimal" },
        { x: 820, label: "REQUOTES", value: "None" },
      ].map(({ x, label, value }) => (
        <g key={label}>
          <text
            x={x}
            y={382}
            fontSize="7.5"
            fill="rgba(255,255,255,0.2)"
            fontFamily="'Segoe UI',Arial,sans-serif"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1"
          >
            {label}
          </text>
          <text
            x={x}
            y={395}
            fontSize="9.5"
            fill="#1A90C3"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="middle"
          >
            {value}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────*/
export default async function RawAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  /* ── 1. HERO ─────────────────────────────────────────────── */
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #030A14 0%, #071220 55%, #04111E 100%)",
        }}
      >
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,144,195,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(26,144,195,.025) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(26,144,195,0.09) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at 100% 100%, rgba(7,17,31,0.6) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-8">
            <Link href="/" className="hover:text-white/45 transition-colors">
              Home
            </Link>
            <span className="text-white/10">/</span>
            <Link
              href="/trading"
              className="hover:text-white/45 transition-colors"
            >
              Trading
            </Link>
            <span className="text-white/10">/</span>
            <Link
              href="/trading/accounts"
              className="hover:text-white/45 transition-colors"
            >
              Accounts
            </Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">RAW</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <FadeUp>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(26,144,195,0.15)",
                      border: "1px solid rgba(26,144,195,0.3)",
                      color: "#1A90C3",
                    }}
                  >
                    RAW Account
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Professional Grade
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-[1.08]">
                  Raw Spreads.{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #1A90C3 0%, #5BC8F0 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ECN Pricing.
                  </span>
                </h1>

                <p className="text-[17px] text-white/45 leading-relaxed mb-8 max-w-lg">
                  Institutional-grade trading conditions with direct access to
                  interbank liquidity. Zero mark-up spreads, ECN execution, and
                  the full power of MT5 — built for traders who demand the best.
                </p>

                {/* Key stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-9">
                  {[
                    { value: "$20,000", label: "Min. Deposit" },
                    { value: "0.0 pips", label: "From" },
                    { value: "1:200", label: "Leverage" },
                    { value: "ECN", label: "Pricing" },
                  ].map(({ value, label }) => (
                    <div
                      key={label}
                      className="rounded-xl p-4 text-center"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="text-xl font-black text-white mb-0.5">
                        {value}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://portal.ollatrade.com/auth/register"
                    className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-all hover:opacity-90"
                    style={{ background: "#1A90C3", color: "#fff" }}
                  >
                    Open RAW Account
                    <IconArrow className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/trading/accounts"
                    className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/60 hover:text-white"
                    style={{ border: "1px solid rgba(255,255,255,0.18)" }}
                  >
                    Compare Accounts
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right — ECN visual */}
            <FadeIn delay={0.15}>
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(26,144,195,0.07) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(26,144,195,0.2)",
                    boxShadow:
                      "0 0 60px rgba(26,144,195,0.1), 0 24px 48px rgba(0,0,0,0.5)",
                  }}
                >
                  <ECNFlowVisual />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 2. WHO IS IT FOR ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "#F6F8FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div
                className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{
                  color: "#1A90C3",
                  background: "#EBF5FB",
                  border: "1px solid rgba(26,144,195,0.2)",
                }}
              >
                Who It&#39;s For
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-3">
                Built for Serious Market Participants
              </h2>
              <p className="text-[15px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                The RAW account is designed for traders who require institutional
                execution, not retail compromise.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: IconVolume,
                title: "High-Volume Traders",
                subtitle: "Cost efficiency at scale",
                desc: "Every pip saved compounds across thousands of lots. Raw spreads from 0.0 pips mean your cost-per-trade stays minimal regardless of volume — critical for scalpers and day traders.",
                points: [
                  "0.0 pip spreads reduce cost per trade",
                  "Commission-based model rewards volume",
                  "Interbank pricing on every execution",
                ],
              },
              {
                Icon: IconPro,
                title: "Professional Traders",
                subtitle: "Institutional-grade conditions",
                desc: "Access the same ECN pricing available to institutional desks. No dealing desk intervention, transparent pricing direct from the liquidity pool, and market execution on every order.",
                points: [
                  "No dealing desk (NDD) execution",
                  "Transparent ECN pricing",
                  "1:200 leverage for position sizing",
                ],
                featured: true,
              },
              {
                Icon: IconAlgo,
                title: "Algorithmic Traders & EAs",
                subtitle: "Consistent raw pricing for EAs",
                desc: "Expert Advisors and algorithmic strategies require predictable, stable pricing. Raw interbank spreads and MT5's full API support make the RAW account the logical choice for automated trading.",
                points: [
                  "MT5 Expert Advisor support",
                  "Raw spread consistency for backtesting",
                  "Market execution without requotes",
                ],
              },
            ].map(({ Icon, title, subtitle, desc, points, featured }) => (
              <div
                key={title}
                className="rounded-2xl p-7 flex flex-col"
                style={{
                  background: featured ? "#07111F" : "#FFFFFF",
                  border: featured
                    ? "1px solid rgba(26,144,195,0.3)"
                    : "1px solid #E5E7EB",
                  boxShadow: featured
                    ? "0 0 40px rgba(26,144,195,0.12), 0 12px 32px rgba(0,0,0,0.15)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {featured && (
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-5 self-start px-2.5 py-1 rounded-full"
                    style={{
                      color: "#1A90C3",
                      background: "rgba(26,144,195,0.15)",
                      border: "1px solid rgba(26,144,195,0.25)",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: featured
                      ? "rgba(26,144,195,0.15)"
                      : "#EBF5FB",
                    border: featured
                      ? "1px solid rgba(26,144,195,0.25)"
                      : "1px solid rgba(26,144,195,0.15)",
                    color: "#1A90C3",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: featured ? "rgba(255,255,255,0.35)" : "#6B7280" }}
                >
                  {subtitle}
                </div>
                <h3
                  className="text-[18px] font-extrabold mb-3"
                  style={{ color: featured ? "#FFFFFF" : "#07111F" }}
                >
                  {title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed mb-5"
                  style={{
                    color: featured ? "rgba(255,255,255,0.45)" : "#6B7280",
                  }}
                >
                  {desc}
                </p>
                <ul className="space-y-2 mt-auto">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: featured
                            ? "rgba(26,144,195,0.15)"
                            : "#EBF5FB",
                          color: "#1A90C3",
                        }}
                      >
                        <IconCheck className="w-3 h-3" />
                      </div>
                      <span
                        className="text-[12px]"
                        style={{
                          color: featured
                            ? "rgba(255,255,255,0.5)"
                            : "#6B7280",
                        }}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 3. KEY FEATURES ──────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <div
                className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{
                  color: "#1A90C3",
                  background: "#EBF5FB",
                  border: "1px solid rgba(26,144,195,0.2)",
                }}
              >
                Features
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-3">
                Everything a Professional Trader Needs
              </h2>
              <p className="text-[15px] text-[#6B7280] max-w-2xl leading-relaxed">
                Six pillars that make the RAW account the definitive choice for
                serious traders.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                Icon: IconSpread,
                title: "Raw 0.0 Pip Spreads",
                desc: "Direct interbank pricing with zero mark-up. Your spread is the spread from the liquidity pool — as tight as 0.0 pips on major pairs during peak liquidity.",
                tag: "Interbank Pricing",
              },
              {
                Icon: IconECN,
                title: "ECN Execution Model",
                desc: "Orders route directly to the ECN network without dealing desk intervention. Market execution, no requotes, and pricing sourced from multiple top-tier liquidity providers.",
                tag: "No Dealing Desk",
              },
              {
                Icon: IconLeverage,
                title: "Up to 1:200 Leverage",
                desc: "Flexible leverage up to 1:200 lets you size positions appropriately for your strategy. Margin call at 100%, stop out at 50% for transparent risk management.",
                tag: "Flexible Sizing",
              },
              {
                Icon: IconInstruments,
                title: "500+ Instruments",
                desc: "Trade forex, indices, metals, energies, equities, and cryptocurrencies — all from a single RAW account with consistent ECN pricing across every asset class.",
                tag: "All Asset Classes",
              },
              {
                Icon: IconMT5,
                title: "MT5 — Full EA Support",
                desc: "MetaTrader 5 on desktop, web, iOS, and Android. Full Expert Advisor support, MQL5 coding environment, Strategy Tester, and the complete MT5 marketplace.",
                tag: "MT5 Platform",
              },
              {
                Icon: IconSupport,
                title: "Dedicated Account Management",
                desc: "RAW account holders receive priority access to a dedicated account manager for onboarding, trading queries, and ongoing support.",
                tag: "Priority Support",
              },
            ].map(({ Icon, title, desc, tag }) => (
              <div
                key={title}
                className="rounded-2xl p-6 group hover:shadow-md transition-all"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{
                    background: "#EBF5FB",
                    border: "1px solid rgba(26,144,195,0.2)",
                    color: "#1A90C3",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-[15px] font-extrabold text-[#07111F]">
                    {title}
                  </h3>
                </div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4">
                  {desc}
                </p>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    color: "#1A90C3",
                    background: "#EBF5FB",
                    border: "1px solid rgba(26,144,195,0.2)",
                  }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 4. TRADING CONDITIONS TABLE ──────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "#F6F8FB" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div
                className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{
                  color: "#1A90C3",
                  background: "#EBF5FB",
                  border: "1px solid rgba(26,144,195,0.2)",
                }}
              >
                Conditions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-3">
                RAW Account Specifications
              </h2>
              <p className="text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                Full transparency on every condition. No hidden fees, no
                ambiguity.
              </p>
            </div>
          </FadeUp>

          <ScaleIn>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {/* Table header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{
                  background: "#07111F",
                  borderBottom: "1px solid rgba(26,144,195,0.2)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#1A90C3" }}
                />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">
                  RAW Account — Full Specification
                </span>
                <div className="ml-auto">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      color: "#1A90C3",
                      background: "rgba(26,144,195,0.12)",
                      border: "1px solid rgba(26,144,195,0.25)",
                    }}
                  >
                    ECN / STP
                  </span>
                </div>
              </div>

              <div className="bg-white">
                {[
                  {
                    label: "Minimum Deposit",
                    value: "$20,000",
                    highlight: false,
                  },
                  {
                    label: "Spreads",
                    value: "From 0.0 pips (raw interbank)",
                    highlight: true,
                  },
                  {
                    label: "Commission",
                    value: "Per lot, charged per side",
                    highlight: false,
                  },
                  {
                    label: "Leverage",
                    value: "Up to 1:200",
                    highlight: false,
                  },
                  {
                    label: "Margin Call",
                    value: "100%",
                    highlight: false,
                  },
                  {
                    label: "Stop Out",
                    value: "50%",
                    highlight: false,
                  },
                  {
                    label: "Instruments",
                    value: "500+",
                    highlight: false,
                  },
                  {
                    label: "Execution Type",
                    value: "Market Execution",
                    highlight: true,
                  },
                  {
                    label: "Pricing Model",
                    value: "ECN — direct interbank pricing",
                    highlight: true,
                  },
                  {
                    label: "Dealing Desk",
                    value: "No (NDD)",
                    highlight: false,
                  },
                  {
                    label: "Minimum Lot Size",
                    value: "0.01 lots",
                    highlight: false,
                  },
                  {
                    label: "Platforms",
                    value: "MetaTrader 5 (MT5) — Desktop, Web, iOS, Android",
                    highlight: false,
                  },
                  {
                    label: "EA / Algorithmic Trading",
                    value: "Fully supported",
                    highlight: false,
                  },
                  {
                    label: "Negative Balance Protection",
                    value: "Included",
                    highlight: false,
                  },
                  {
                    label: "Base Currencies",
                    value: "USD, EUR, GBP",
                    highlight: false,
                  },
                ].map(({ label, value, highlight }, i) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-6 py-4"
                    style={{
                      borderBottom:
                        i < 14 ? "1px solid #F3F4F6" : undefined,
                      background: highlight
                        ? "rgba(26,144,195,0.03)"
                        : undefined,
                    }}
                  >
                    <span className="text-[13px] font-semibold text-[#374151]">
                      {label}
                    </span>
                    <span
                      className="text-[13px] font-bold"
                      style={{
                        color: highlight ? "#1A90C3" : "#07111F",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div
                className="px-6 py-4"
                style={{
                  background: "#F9FAFB",
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <p className="text-[11px] text-[#6B7280]">
                  Spreads, leverage, and commissions are indicative and subject
                  to market conditions. Trading CFDs involves significant risk
                  and may not be suitable for all investors. Olla Capital
                  Financial Services L.L.C. — UAE SCA Lic. 20200000416.
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── 5. PLATFORM ACCESS — DARK NAVY ───────────────────────── */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "#07111F" }}
      >
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(26,144,195,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — content */}
            <SlideLeft>
              <div
                className="inline-block text-[11px] font-bold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
                style={{
                  color: "#1A90C3",
                  background: "rgba(26,144,195,0.12)",
                  border: "1px solid rgba(26,144,195,0.25)",
                }}
              >
                Platform
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                MetaTrader 5 — Full Power,{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #1A90C3 0%, #5BC8F0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Every Device
                </span>
              </h2>
              <p className="text-[15px] text-white/45 leading-relaxed mb-8">
                The RAW account runs on MetaTrader 5 — the most advanced retail
                trading platform available. With full algorithmic trading
                support, a built-in Strategy Tester, and access to thousands of
                EAs, MT5 is the natural home for professional-grade trading.
              </p>

              {/* Feature highlights */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Full Expert Advisor (EA) Support",
                    desc: "Run automated strategies with MQL5, the most powerful algorithmic trading language available to retail traders.",
                  },
                  {
                    title: "Advanced Strategy Tester",
                    desc: "Backtest your EAs against real historical data with tick-level precision before deploying live.",
                  },
                  {
                    title: "Multi-Asset from One Account",
                    desc: "Access forex, metals, indices, energies, equities, and crypto — all via a single RAW account login.",
                  },
                  {
                    title: "All Devices, One Login",
                    desc: "Trade from Windows desktop, MT5 WebTrader, iOS, or Android. Your account and settings sync seamlessly.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(26,144,195,0.15)",
                        border: "1px solid rgba(26,144,195,0.3)",
                        color: "#1A90C3",
                      }}
                    >
                      <IconCheck className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-white mb-0.5">
                        {title}
                      </div>
                      <div className="text-[12px] text-white/40 leading-relaxed">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-[13px] transition-all hover:opacity-90"
                  style={{ background: "#1A90C3", color: "#fff" }}
                >
                  Open RAW Account
                  <IconArrow className="w-4 h-4" />
                </Link>
                <Link
                  href="/trading/platform"
                  className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-xl text-[13px] transition-all text-white/50 hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Explore MT5 Platform
                </Link>
              </div>
            </SlideLeft>

            {/* Right — platform device grid */}
            <SlideRight>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "MT5 Desktop",
                    sub: "Windows — full feature set",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "MT5 WebTrader",
                    sub: "No download required",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "MT5 iOS",
                    sub: "iPhone & iPad",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.38.81 3.2.82.97-.06 1.95-.81 3.34-.87 1.98-.1 3.64.85 4.65 2.5-4.16 2.48-3.48 7.88.81 9.43zm-4.6-12.8c-.21-2.35 1.87-4.23 4.05-4.48.29 2.64-2.4 4.64-4.05 4.48z" />
                      </svg>
                    ),
                  },
                  {
                    name: "MT5 Android",
                    sub: "Phone & tablet",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5S11 23.33 11 22.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12a5.983 5.983 0 00-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                      </svg>
                    ),
                  },
                ].map(({ name, sub, icon }) => (
                  <div
                    key={name}
                    className="rounded-xl p-5 flex flex-col items-center text-center gap-3"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(26,144,195,0.12)",
                        border: "1px solid rgba(26,144,195,0.2)",
                        color: "#1A90C3",
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-white">
                        {name}
                      </div>
                      <div className="text-[11px] text-white/35 mt-0.5">
                        {sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* EA badge */}
              <div
                className="mt-4 rounded-xl px-5 py-4 flex items-center gap-4"
                style={{
                  background: "rgba(26,144,195,0.08)",
                  border: "1px solid rgba(26,144,195,0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(26,144,195,0.15)",
                    color: "#1A90C3",
                  }}
                >
                  <IconAlgo className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white">
                    Full Algorithmic Trading Support
                  </div>
                  <div className="text-[11px] text-white/40 mt-0.5">
                    MQL5 EAs, Strategy Tester, VPS-ready, MT5 Marketplace access
                  </div>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div
                className="inline-block text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{
                  color: "#1A90C3",
                  background: "#EBF5FB",
                  border: "1px solid rgba(26,144,195,0.2)",
                }}
              >
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-[15px] text-[#6B7280] leading-relaxed">
                Everything you need to know about the RAW account before
                opening.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="space-y-3">
            {[
              {
                q: "What is the minimum deposit for the RAW account?",
                a: "The minimum deposit for the RAW account is $20,000 (or equivalent in supported base currencies). This account tier is designed for professional traders and high-volume participants who require institutional-grade conditions.",
              },
              {
                q: "What are raw spreads?",
                a: "Raw spreads are direct interbank spreads without any broker mark-up added on top. Instead of widening the spread to generate revenue, the RAW account charges a transparent commission per lot per side. During peak liquidity on major pairs like EURUSD, raw spreads can reach 0.0 pips. This is the same pricing structure used by institutional desks.",
              },
              {
                q: "How does ECN pricing work?",
                a: "ECN (Electronic Communications Network) pricing aggregates bid and ask quotes from multiple top-tier liquidity providers — banks, prime brokers, and institutional market makers — and displays the best available price. Your order routes directly to this network without passing through a dealing desk. The result is tighter spreads, faster execution, and no conflict of interest between you and your broker.",
              },
              {
                q: "What is the commission structure for the RAW account?",
                a: "The RAW account uses a commission-per-lot model charged per side (i.e., on both the opening and closing of a trade). This replaces the mark-up spread model used in accounts like Classic and Pro. Full commission details are provided during the account opening process and in your client agreement. For professional traders, the total cost (raw spread + commission) is typically lower than paying widened spreads on a standard account.",
              },
              {
                q: "Is the RAW account suitable for Expert Advisors (EAs)?",
                a: "Yes — the RAW account is the ideal account type for algorithmic traders and EA users. MT5's full MQL5 environment, Strategy Tester, and marketplace are fully supported. The consistency of raw interbank spreads also ensures that backtests more accurately reflect live trading conditions, since the spread data used in Strategy Tester aligns with what you experience live.",
              },
            ].map(({ q, a }, i) => (
              <div key={i}>
                <details
                  className="group rounded-xl overflow-hidden"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  <summary
                    className="flex items-center justify-between px-6 py-5 cursor-pointer select-none list-none"
                    style={{ background: "#FAFAFA" }}
                  >
                    <span className="text-[14px] font-bold text-[#07111F] pr-4">
                      {q}
                    </span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform group-open:rotate-45"
                      style={{
                        background: "#EBF5FB",
                        border: "1px solid rgba(26,144,195,0.2)",
                        color: "#1A90C3",
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m-8-8h16"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div
                    className="px-6 py-5"
                    style={{ borderTop: "1px solid #F3F4F6" }}
                  >
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">
                      {a}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 7. CTA — DARK NAVY ───────────────────────────────────── */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ background: "#07111F" }}
      >
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(26,144,195,0.1) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div
              className="inline-block text-[11px] font-bold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
              style={{
                color: "#1A90C3",
                background: "rgba(26,144,195,0.12)",
                border: "1px solid rgba(26,144,195,0.25)",
              }}
            >
              Get Started
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to Trade at{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #1A90C3 0%, #5BC8F0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Institutional Level?
              </span>
            </h2>
            <p className="text-[16px] text-white/45 mb-10 max-w-xl mx-auto leading-relaxed">
              Open your RAW account today and access raw interbank spreads, ECN
              execution, and the full power of MetaTrader 5.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-[15px] transition-all hover:opacity-90"
                style={{ background: "#1A90C3", color: "#fff" }}
              >
                Open RAW Account
                <IconArrow className="w-5 h-5" />
              </Link>
              <Link
                href="/trading/accounts"
                className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-xl text-[14px] text-white/55 hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Compare All Accounts
              </Link>
            </div>

            {/* Compare with other accounts */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-5">
                Explore Other Account Types
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Link
                  href="/trading/accounts/classic"
                  className="flex items-center justify-between rounded-xl px-5 py-4 group transition-all hover:border-[#1A90C3]/40"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-left">
                    <div className="text-[13px] font-bold text-white">
                      Classic Account
                    </div>
                    <div className="text-[11px] text-white/35 mt-0.5">
                      From $10 · From 1.4 pips
                    </div>
                  </div>
                  <IconArrow className="w-4 h-4 text-white/25 group-hover:text-[#1A90C3] transition-colors" />
                </Link>
                <Link
                  href="/trading/accounts/pro"
                  className="flex items-center justify-between rounded-xl px-5 py-4 group transition-all hover:border-[#1A90C3]/40"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-left">
                    <div className="text-[13px] font-bold text-white">
                      Pro Account
                    </div>
                    <div className="text-[11px] text-white/35 mt-0.5">
                      From $2,000 · From 1.0 pips
                    </div>
                  </div>
                  <IconArrow className="w-4 h-4 text-white/25 group-hover:text-[#1A90C3] transition-colors" />
                </Link>
              </div>
            </div>

            {/* Compliance footer */}
            <p className="text-[11px] text-white/20 mt-8 max-w-2xl mx-auto leading-relaxed">
              Trading CFDs involves significant risk of loss and may not be
              suitable for all investors. Leverage increases both potential
              profit and potential loss. Ensure you fully understand the risks
              involved. Olla Capital Financial Services L.L.C. — UAE SCA
              Licence No. 20200000416.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
