import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { routing } from "../../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
} from "../../../../components/ui/Animate";

/* ── SEO ──────────────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pro Account | Olla Trade",
    description:
      "Open a Pro trading account with Olla Trade. Minimum deposit $2,000, spreads from 1.0 pips, leverage up to 1:400, commission-free trading on MT5.",
  };
}

/* ── Static data ──────────────────────────────────────────────────────────── */

const heroStats = [
  { label: "Min. Deposit", value: "$2,000" },
  { label: "Spreads From", value: "1.0 pips" },
  { label: "Leverage", value: "1:400" },
  { label: "Commission", value: "Free" },
];

const profiles = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Experienced Traders",
    description:
      "You have been trading for years and need professional-grade spreads with zero commission drag. The Pro account gives you tighter conditions so every pip counts.",
    bullets: [
      "Active trading across FX, indices & commodities",
      "Lower spreads vs. Classic account",
      "Faster execution on high-frequency strategies",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Portfolio Builders",
    description:
      "You are deploying larger capital and need a scalable, cost-efficient account. Spreads from 1.0 pips and 500+ instruments let you diversify with confidence.",
    bullets: [
      "Larger capital deployment made cost-efficient",
      "500+ instruments for full diversification",
      "Commission-free trading reduces friction",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Full-Time Traders",
    description:
      "Trading is your profession and you demand the reliability and conditions of a professional-grade account without the complexity of ECN pricing.",
    bullets: [
      "Professional conditions for daily trading",
      "Up to 1:400 leverage for capital efficiency",
      "Priority support when you need it most",
    ],
  },
];

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Commission-Free",
    description:
      "No per-trade commission charges. All trading costs are built transparently into the spread, keeping your accounting simple.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Spreads From 1.0 Pips",
    description:
      "Tighter spreads than our Classic account mean lower entry and exit costs on every position you place across all 500+ instruments.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Up to 1:400 Leverage",
    description:
      "Use leverage to maximise capital efficiency on your trades. Risk management tools including margin call and stop out levels protect your account.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "500+ Instruments",
    description:
      "Trade forex pairs, global indices, commodities, metals, energies, and more — all from a single MT5 account with unified margin.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "MetaTrader 5 Platform",
    description:
      "Full access to MT5 on desktop, web, iOS, and Android. Advanced charting, algorithmic trading, and multi-timeframe analysis included.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Priority Support",
    description:
      "Pro account holders receive priority access to our client services team via live chat and email, ensuring faster response times.",
  },
];

const conditions = [
  { label: "Minimum Deposit",  value: "$2,000",             note: "" },
  { label: "Spreads",          value: "From 1.0 pips",      note: "Variable" },
  { label: "Commission",       value: "None",               note: "Commission-free" },
  { label: "Leverage",         value: "Up to 1:400",        note: "" },
  { label: "Margin Call",      value: "100%",               note: "" },
  { label: "Stop Out",         value: "50%",                note: "" },
  { label: "Instruments",      value: "500+",               note: "FX, indices, commodities & more" },
  { label: "Execution Type",   value: "Market Execution",   note: "" },
  { label: "Platform",         value: "MetaTrader 5 (MT5)", note: "Desktop, Web, iOS, Android" },
];

const faqs = [
  {
    q: "What is the minimum deposit for a Pro account?",
    a: "The minimum deposit to open and activate a Pro account is $2,000 USD. This reflects the professional-grade conditions offered and ensures sufficient margin to trade effectively.",
  },
  {
    q: "How do Pro account spreads compare to the Classic account?",
    a: "Pro account spreads start from 1.0 pips, which are tighter than the Classic account spreads that start from 1.4 pips. This difference compounds significantly for active traders over time.",
  },
  {
    q: "Is there a commission on Pro account trades?",
    a: "No. The Pro account is commission-free. All trading costs are reflected in the spread, so there are no additional per-trade charges applied to your account.",
  },
  {
    q: "What leverage is available on the Pro account?",
    a: "The Pro account offers leverage up to 1:400. Leverage levels may vary by instrument and account size. Please review our leverage and margin policy on the client portal for full details.",
  },
  {
    q: "Can I upgrade from a Pro account to a RAW account?",
    a: "Yes. If you require raw ECN spreads with a commission-based model, you can upgrade to our RAW account. Contact our support team or visit the client portal to initiate an account type change.",
  },
];

/* ── Helpers ──────────────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A90C3"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 1 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default async function ProAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ────────────────────────────────────────────────────────────────────
          1. HERO
      ──────────────────────────────────────────────────────────────────── */}
      <section className="hero-navy section-py relative overflow-hidden">
        {/* Decorative glow rings */}
        <div
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 720,
              height: 720,
              borderRadius: "50%",
              border: "1px solid rgba(26,144,195,0.09)",
              position: "absolute",
            }}
          />
          <div
            style={{
              width: 500,
              height: 500,
              borderRadius: "50%",
              border: "1px solid rgba(26,144,195,0.13)",
              position: "absolute",
            }}
          />
          <div
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              border: "1px solid rgba(26,144,195,0.08)",
              position: "absolute",
            }}
          />
        </div>

        <div className="container-narrow" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
          {/* Badges */}
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
              <span className="badge badge-navy">Pro Account</span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "linear-gradient(135deg,#1A90C3,#1E9FD8)",
                  color: "#FFFFFF",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "5px 14px",
                  borderRadius: 999,
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Most Popular
              </span>
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.08}>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#FFFFFF",
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Professional Trading{" "}
              <span className="text-gradient">Conditions</span>
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.14}>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.68)",
                maxWidth: 560,
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}
            >
              The Pro account delivers tighter spreads, higher leverage, and
              commission-free trading — built for traders who are serious about
              performance.
            </p>
          </FadeUp>

          {/* Key stats bar */}
          <FadeUp delay={0.2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: 16,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 16,
                padding: "24px 28px",
                marginBottom: 40,
              }}
            >
              {heroStats.map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.625rem",
                      fontWeight: 800,
                      color: "#38BDF8",
                      lineHeight: 1.1,
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "rgba(255,255,255,0.50)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.26}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <a
                href="https://portal.ollatrade.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                Open Pro Account
                <ArrowIcon />
              </a>
              <Link
                href={`/${locale}/trading/accounts`}
                className="btn-white btn-lg"
              >
                Compare Accounts
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          2. WHO THIS ACCOUNT IS FOR
      ──────────────────────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "#FFFFFF" }}>
        <div className="container-wide">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>
                Who Is It For?
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#07111F",
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                Built for Traders Who Demand More
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6B7280",
                  maxWidth: 520,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                The Pro account is designed for traders ready to step up to
                professional conditions without the complexity of ECN pricing.
              </p>
            </div>
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {profiles.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1}>
                <div className="card card-hover" style={{ padding: "32px 28px", height: "100%" }}>
                  <div className="icon-box icon-box-lg" style={{ marginBottom: 20 }}>
                    {p.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#07111F",
                      marginBottom: 10,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#6B7280",
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {p.description}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: "0.85rem",
                          color: "#374151",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          3. KEY FEATURES
      ──────────────────────────────────────────────────────────────────── */}
      <section className="section-py section-gray">
        <div className="container-wide">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>
                Key Features
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#07111F",
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                Everything You Need to Trade Professionally
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6B7280",
                  maxWidth: 520,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                The Pro account comes loaded with the features active traders
                rely on, day in and day out.
              </p>
            </div>
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: 20,
            }}
          >
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07}>
                <div className="card card-hover" style={{ padding: "28px 24px" }}>
                  <div className="icon-box" style={{ marginBottom: 16 }}>
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#07111F",
                      marginBottom: 8,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6B7280",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {f.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          4. TRADING CONDITIONS
      ──────────────────────────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "#FFFFFF" }}>
        <div className="container-narrow">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>
                Trading Conditions
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#07111F",
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                Full Account Specifications
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6B7280",
                  maxWidth: 480,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Clear, transparent trading conditions — no hidden charges or
                surprises.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="card-featured" style={{ overflow: "hidden" }}>
              {/* Featured header bar */}
              <div
                style={{
                  background: "linear-gradient(135deg,#1A90C3,#1E9FD8)",
                  padding: "14px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>
                  Pro Account — Full Specifications
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "rgba(255,255,255,0.18)",
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    padding: "4px 11px",
                    borderRadius: 999,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Most Popular
                </span>
              </div>

              {/* Conditions list */}
              <div>
                {conditions.map((c, i) => (
                  <div
                    key={c.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 28px",
                      borderBottom: i < conditions.length - 1 ? "1px solid #F3F4F6" : "none",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "#6B7280", fontWeight: 500 }}>
                      {c.label}
                    </span>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#07111F" }}>
                        {c.value}
                      </span>
                      {c.note && (
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.75rem",
                            color: "#9CA3AF",
                            marginTop: 1,
                          }}
                        >
                          {c.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "20px 28px",
                  borderTop: "1px solid #E5E7EB",
                  background: "#FAFCFE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#9CA3AF",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Olla Capital Financial Services L.L.C. — UAE SCA Lic. 20200000416
                </p>
                <a
                  href="https://portal.ollatrade.com/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sm"
                >
                  Open Pro Account
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          5. PLATFORM ACCESS
      ──────────────────────────────────────────────────────────────────── */}
      <section
        className="section-py"
        style={{
          background: "#07111F",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(26,144,195,0.14) 0%, transparent 65%)",
        }}
      >
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left column */}
            <SlideLeft>
              <span
                className="badge badge-navy"
                style={{ display: "inline-flex", marginBottom: 20 }}
              >
                Platform Access
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  marginBottom: 16,
                  lineHeight: 1.2,
                }}
              >
                Trade Anywhere on{" "}
                <span className="text-gradient">MetaTrader 5</span>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.60)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                Your Pro account gives you full access to MetaTrader 5 across
                all platforms. Enjoy advanced charting, 100+ technical
                indicators, Expert Advisors, and one-click trading — on desktop,
                browser, iOS, and Android.
              </p>

              {/* Platform grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                  marginBottom: 36,
                }}
              >
                {[
                  { label: "MT5 Desktop", sub: "Windows & macOS" },
                  { label: "MT5 Web",     sub: "Any browser" },
                  { label: "MT5 iOS",     sub: "iPhone & iPad" },
                  { label: "MT5 Android", sub: "Phone & tablet" },
                ].map((pl) => (
                  <div
                    key={pl.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10,
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      className="icon-box icon-box-sm icon-box-navy"
                      style={{ flexShrink: 0 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#FFFFFF" }}>
                        {pl.label}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.40)" }}>
                        {pl.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://portal.ollatrade.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                Get Started
                <ArrowIcon />
              </a>
            </SlideLeft>

            {/* Right column — MT5 feature tiles */}
            <SlideRight>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    label: "Expert Advisors",
                    value: "Fully supported",
                    sub: "Algorithmic trading enabled",
                  },
                  {
                    label: "Technical Indicators",
                    value: "100+ built-in",
                    sub: "Plus custom indicators",
                  },
                  {
                    label: "Chart Timeframes",
                    value: "21 timeframes",
                    sub: "From M1 through MN",
                  },
                  {
                    label: "Order Types",
                    value: "All order types",
                    sub: "Market, limit, stop & more",
                  },
                  {
                    label: "Multi-Currency Testing",
                    value: "Strategy tester",
                    sub: "Backtest & optimise EAs",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      borderRadius: 12,
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      className="icon-box icon-box-sm icon-box-navy"
                      style={{ flexShrink: 0 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.40)", marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>
                        {item.value}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#38BDF8",
                        fontWeight: 500,
                        textAlign: "right",
                        maxWidth: 110,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          6. FAQ
      ──────────────────────────────────────────────────────────────────── */}
      <section className="section-py section-gray">
        <div className="container-narrow">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>
                FAQ
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#07111F",
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6B7280",
                  maxWidth: 460,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Everything you need to know about the Pro account before you
                apply.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.07}>
                <details
                  className="card"
                  style={{ overflow: "hidden" }}
                >
                  <summary
                    style={{
                      padding: "18px 24px",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#07111F",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      userSelect: "none",
                    }}
                  >
                    <span>{faq.q}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1A90C3"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, transition: "transform 0.25s ease" }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div
                    style={{
                      padding: "16px 24px 20px",
                      fontSize: "0.9rem",
                      color: "#6B7280",
                      lineHeight: 1.75,
                      borderTop: "1px solid #F3F4F6",
                    }}
                  >
                    {faq.a}
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          7. FINAL CTA
      ──────────────────────────────────────────────────────────────────── */}
      <section
        className="section-py"
        style={{
          background: "#07111F",
          backgroundImage:
            "radial-gradient(ellipse 55% 60% at 50% 100%, rgba(26,144,195,0.16) 0%, transparent 65%)",
        }}
      >
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <FadeUp>
            <span
              className="badge badge-navy"
              style={{ display: "inline-flex", marginBottom: 20 }}
            >
              Ready to Start?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Open Your Pro Account Today
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.58)",
                maxWidth: 480,
                margin: "0 auto 40px",
                lineHeight: 1.75,
              }}
            >
              Join thousands of traders who choose Olla Trade for
              professional trading conditions, regulatory protection, and
              reliable execution.
            </p>

            {/* Primary CTA */}
            <div style={{ marginBottom: 48 }}>
              <a
                href="https://portal.ollatrade.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                Open Pro Account
                <ArrowIcon />
              </a>
            </div>

            {/* Compare links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  fontWeight: 600,
                }}
              >
                Compare with:
              </span>
              <Link
                href={`/${locale}/trading/accounts/classic`}
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.58)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                Classic Account
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.75rem" }}>|</span>
              <Link
                href={`/${locale}/trading/accounts/raw`}
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.58)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                RAW Account
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeUp>

          {/* Regulatory note */}
          <FadeIn delay={0.3}>
            <div
              style={{
                marginTop: 56,
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.28)",
                  lineHeight: 1.65,
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                Olla Capital Financial Services L.L.C. is regulated by the UAE
                Securities and Commodities Authority (SCA), Licence No.
                20200000416. Trading in leveraged financial instruments involves
                significant risk and may not be suitable for all investors. Past
                performance is not indicative of future results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
