import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
} from "../../../components/ui/Animate";

/* ─── Metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Trading Accounts | Olla Trade",
  description:
    "Compare Olla Trade Classic, Pro, and RAW trading accounts. Low minimum deposits, spreads from 0.0 pips, leverage up to 1:500 on MetaTrader 5.",
};

/* ─── Static params ─────────────────────────────────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─── Account data ──────────────────────────────────────────────────── */
const accounts = [
  {
    id: "classic",
    name: "Classic",
    tier: "Entry Level",
    bestFor: "New traders",
    deposit: "$10",
    spreads: "From 1.4 pips",
    commission: "None",
    leverage: "1:500",
    marginCall: "100%",
    stopOut: "50%",
    instruments: "500+",
    execution: "Market",
    featured: false,
    features: [
      "No commission on any trade",
      "Access to all 500+ instruments",
      "Full MetaTrader 5 support",
      "Expert Advisors (EAs) allowed",
      "Negative balance protection",
    ],
    href: "/trading/accounts/classic",
    cta: "Open Classic Account",
  },
  {
    id: "pro",
    name: "Pro",
    tier: "Most Popular",
    bestFor: "Experienced traders",
    deposit: "$2,000",
    spreads: "From 1.0 pips",
    commission: "None",
    leverage: "1:400",
    marginCall: "100%",
    stopOut: "50%",
    instruments: "500+",
    execution: "Market",
    featured: true,
    features: [
      "Tighter spreads from 1.0 pips",
      "No commission on any trade",
      "Priority 24/5 customer support",
      "Full MetaTrader 5 support",
      "Negative balance protection",
    ],
    href: "/trading/accounts/pro",
    cta: "Open Pro Account",
  },
  {
    id: "raw",
    name: "RAW",
    tier: "Professional",
    bestFor: "Professional traders",
    deposit: "$20,000",
    spreads: "From 0.0 pips",
    commission: "Per lot",
    leverage: "1:200",
    marginCall: "100%",
    stopOut: "50%",
    instruments: "500+",
    execution: "Market / ECN",
    featured: false,
    features: [
      "Raw spreads from 0.0 pips",
      "Transparent per-lot commission",
      "ECN-style execution model",
      "VIP dedicated account manager",
      "Negative balance protection",
    ],
    href: "/trading/accounts/raw",
    cta: "Open RAW Account",
  },
] as const;

/* ─── Comparison table rows ─────────────────────────────────────────── */
const tableRows = [
  { label: "Min. Deposit",      values: ["$10",          "$2,000",      "$20,000"]       },
  { label: "Spreads From",      values: ["1.4 pips",     "1.0 pips",    "0.0 pips"]      },
  { label: "Commission",        values: ["None",         "None",        "Per lot"]        },
  { label: "Max Leverage",      values: ["1:500",        "1:400",       "1:200"]         },
  { label: "Margin Call Level", values: ["100%",         "100%",        "100%"]          },
  { label: "Stop Out Level",    values: ["50%",          "50%",         "50%"]           },
  { label: "Instruments",       values: ["500+",         "500+",        "500+"]          },
  { label: "Execution",         values: ["Market",       "Market",      "Market / ECN"]  },
  { label: "Platform",          values: ["MT5",          "MT5",         "MT5"]           },
] as const;

/* ─── FAQ data ──────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Which account should I choose?",
    a: "If you are new to trading or want to start with a small capital, the Classic account is ideal — it requires just $10 and charges no commission. Active traders who want tighter spreads without commission should consider the Pro account from $2,000. Professional traders or those running high-volume strategies will benefit most from the RAW account's 0.0 pip spreads and ECN execution starting from $20,000.",
  },
  {
    q: "Can I change or upgrade my account type later?",
    a: "Yes. You can open a new account of a different type from your client portal at any time. Your existing accounts remain active and you can switch between them or run multiple account types simultaneously. Please contact our support team if you need assistance upgrading or transitioning funds between accounts.",
  },
  {
    q: "What is the minimum deposit for each account?",
    a: "The Classic account requires a minimum deposit of $10, making it accessible to anyone starting out. The Pro account requires a minimum of $2,000, reflecting its tighter spreads. The RAW account has a minimum deposit of $20,000, designed for professional traders who require institutional-grade execution and pricing.",
  },
  {
    q: "Is there a commission on Classic and Pro accounts?",
    a: "No. Both the Classic and Pro accounts are commission-free — you pay no per-trade commission. The cost of trading is built into the spread. The RAW account charges a per-lot commission in exchange for access to raw, near-zero spreads. This transparent pricing model is typically preferred by high-frequency or large-volume traders.",
  },
  {
    q: "What is a margin call and stop out level?",
    a: "A margin call occurs when your account equity falls to 100% of your required margin — at this point you will receive a notification to add funds or reduce your exposure. A stop out at 50% means that if your equity drops to 50% of your required margin, positions will begin to be automatically closed to prevent further losses. Olla Trade also provides negative balance protection, meaning you cannot lose more than your deposited funds.",
  },
] as const;

/* ═══════════════════════════════════════════════════════════════════ */
export default async function AccountsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────────── */}
      <section className="bg-white pt-12 pb-16 relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,144,195,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,144,195,0.04) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Radial tint */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(26,144,195,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#EBF5FB] border border-[#1A90C3]/20 text-[#1A90C3] text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Trading Accounts
            </div>
          </FadeIn>

          <FadeUp delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#07111F] mb-5 leading-tight tracking-tight">
              Choose Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1A90C3 0%, #0E6FA0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Trading Account
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-[17px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8">
              Three account types designed for every level of trader — from your first live trade
              to professional high-volume execution. All accounts run on MetaTrader 5.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#1A90C3] hover:bg-[#1580B0] text-white font-bold px-7 py-3.5 rounded-xl text-[14px] transition-all hover:-translate-y-0.5 shadow-md shadow-[#1A90C3]/20"
              >
                Open an Account
              </Link>
              <Link
                href="#compare"
                className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#111827] hover:border-[#1A90C3]/40 hover:text-[#1A90C3] font-semibold px-7 py-3.5 rounded-xl text-[14px] transition-all"
              >
                Compare Accounts
              </Link>
            </div>
          </FadeUp>

          {/* Trust badges */}
          <FadeIn delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "UAE SCA Regulated" },
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Segregated Funds" },
                { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", label: "No Deposit Fees" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "MT5 Platform" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                  <svg className="w-4 h-4 text-[#1A90C3] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. Account cards ─────────────────────────────────────────── */}
      <section className="bg-[#F6F8FB] py-14 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07111F] mb-3">
              All Three Accounts at a Glance
            </h2>
            <p className="text-[#6B7280] text-[15px] max-w-xl mx-auto">
              No hidden fees, no minimum trade sizes. Start with the account that fits your
              goals and upgrade whenever you are ready.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-5 lg:gap-7 items-start">
            {accounts.map((acc, idx) => (
              <FadeUp key={acc.id} delay={idx * 0.08}>
                <div
                  className={`relative bg-white rounded-2xl flex flex-col h-full transition-all duration-200 ${
                    acc.featured
                      ? "border-2 border-[#1A90C3] shadow-xl"
                      : "border border-[#E5E7EB] shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  }`}
                  style={
                    acc.featured
                      ? { boxShadow: "0 8px 40px rgba(26,144,195,0.18), 0 2px 8px rgba(0,0,0,0.06)" }
                      : undefined
                  }
                >
                  {/* Featured pill */}
                  {acc.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-[#1A90C3] text-white text-[11px] font-extrabold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-6 lg:p-7 flex-1">
                    {/* Tier label */}
                    <div
                      className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                        acc.featured ? "text-[#1A90C3]" : "text-[#6B7280]"
                      }`}
                    >
                      {acc.tier}
                    </div>

                    {/* Account name */}
                    <h2 className="text-2xl font-extrabold text-[#07111F] mb-1">{acc.name}</h2>
                    <p className="text-[12px] text-[#6B7280] mb-5">Best for: {acc.bestFor}</p>

                    {/* Min deposit */}
                    <div className="mb-5">
                      <div className="text-4xl lg:text-5xl font-black text-[#07111F] leading-none mb-1">
                        {acc.deposit}
                      </div>
                      <div className="text-[12px] text-[#6B7280]">Minimum deposit</div>
                    </div>

                    {/* Key stats */}
                    <div className="space-y-2 mb-5">
                      {[
                        ["Spreads", acc.spreads],
                        ["Commission", acc.commission],
                        ["Max Leverage", acc.leverage],
                        ["Execution", acc.execution],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="flex justify-between items-center py-2 border-b border-[#F3F4F6]"
                        >
                          <span className="text-[12px] text-[#6B7280]">{k}</span>
                          <span
                            className={`text-[12px] font-semibold ${
                              acc.featured ? "text-[#1A90C3]" : "text-[#111827]"
                            }`}
                          >
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2">
                      {acc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[12px] text-[#6B7280]">
                          <svg
                            className="w-3.5 h-3.5 text-[#1A90C3] flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-6 lg:px-7 pb-6 lg:pb-7 space-y-2.5">
                    <Link
                      href="https://portal.ollatrade.com/auth/register"
                      className={`flex items-center justify-center w-full font-bold py-3.5 rounded-xl text-[14px] transition-all hover:-translate-y-0.5 ${
                        acc.featured
                          ? "bg-[#1A90C3] hover:bg-[#1580B0] text-white shadow-md shadow-[#1A90C3]/20"
                          : "bg-[#07111F] hover:bg-[#0E1E30] text-white"
                      }`}
                    >
                      {acc.cta}
                    </Link>
                    <Link
                      href={acc.href}
                      className="flex items-center justify-center w-full font-semibold py-2.5 rounded-xl text-[13px] text-[#1A90C3] hover:text-[#1580B0] transition-colors border border-[#1A90C3]/20 hover:border-[#1A90C3]/40"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Comparison table ──────────────────────────────────────── */}
      <section id="compare" className="py-14 lg:py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
              Full Comparison
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07111F] mb-3">
              Compare All Accounts Side by Side
            </h2>
            <p className="text-[#6B7280] text-[15px] max-w-xl mx-auto">
              All conditions are indicative and subject to prevailing market conditions. Trading
              involves risk.
            </p>
          </FadeUp>

          {/* Desktop table */}
          <FadeIn delay={0.08}>
            <div className="hidden md:block overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-sm">
              {/* Header */}
              <div
                className="grid"
                style={{ gridTemplateColumns: "260px 1fr 1fr 1fr" }}
              >
                <div className="px-6 py-5 bg-[#F6F8FB] border-b border-[#E5E7EB]">
                  <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-widest">
                    Feature
                  </span>
                </div>
                {accounts.map((acc, i) => (
                  <div
                    key={acc.id}
                    className={`px-6 py-5 text-center border-b ${i > 0 ? "border-l border-[#E5E7EB]" : ""} ${
                      acc.featured
                        ? "bg-[#EBF5FB] border-b-2 border-b-[#1A90C3]"
                        : "bg-[#F6F8FB] border-b-[#E5E7EB]"
                    }`}
                  >
                    {acc.featured && (
                      <div className="flex justify-center mb-2">
                        <span className="bg-[#1A90C3] text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div
                      className={`text-[17px] font-extrabold ${
                        acc.featured ? "text-[#1A90C3]" : "text-[#07111F]"
                      }`}
                    >
                      {acc.name}
                    </div>
                    <div className="text-[11px] mt-0.5 font-medium text-[#6B7280]">{acc.tier}</div>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {tableRows.map((row, ri) => (
                <div
                  key={row.label}
                  className={`grid hover:bg-[#F6F8FB] transition-colors ${
                    ri % 2 === 0 ? "bg-white" : "bg-[#FAFBFC]"
                  }`}
                  style={{ gridTemplateColumns: "260px 1fr 1fr 1fr" }}
                >
                  <div className="px-6 py-4 flex items-center border-b border-[#F3F4F6]">
                    <span className="text-[13px] text-[#6B7280] font-medium">{row.label}</span>
                  </div>
                  {row.values.map((val, ci) => (
                    <div
                      key={ci}
                      className={`px-6 py-4 flex items-center justify-center border-b border-[#F3F4F6] ${
                        ci > 0 ? "border-l border-[#F3F4F6]" : ""
                      } ${ci === 1 ? "bg-[#EBF5FB]/40" : ""}`}
                    >
                      <span
                        className={`text-[13px] font-semibold ${
                          ci === 1 ? "text-[#1A90C3]" : "text-[#111827]"
                        }`}
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div
                className="grid bg-[#F6F8FB] border-t border-[#E5E7EB]"
                style={{ gridTemplateColumns: "260px 1fr 1fr 1fr" }}
              >
                <div className="px-6 py-5" />
                {accounts.map((acc, i) => (
                  <div
                    key={acc.id}
                    className={`px-5 py-5 flex justify-center items-center ${
                      i > 0 ? "border-l border-[#E5E7EB]" : ""
                    } ${acc.featured ? "bg-[#EBF5FB]/50" : ""}`}
                  >
                    <Link
                      href="https://portal.ollatrade.com/auth/register"
                      className={`inline-flex items-center justify-center font-bold px-6 py-3 rounded-xl text-[13px] transition-all hover:-translate-y-0.5 min-w-[140px] ${
                        acc.featured
                          ? "bg-[#1A90C3] hover:bg-[#1580B0] text-white shadow-md shadow-[#1A90C3]/20"
                          : "bg-[#07111F] hover:bg-[#0E1E30] text-white"
                      }`}
                    >
                      {acc.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-5">
            {accounts.map((acc) => (
              <div
                key={acc.id}
                className={`bg-white rounded-2xl border overflow-hidden shadow-sm ${
                  acc.featured
                    ? "border-[#1A90C3] shadow-lg"
                    : "border-[#E5E7EB]"
                }`}
                style={
                  acc.featured
                    ? { boxShadow: "0 4px 24px rgba(26,144,195,0.12)" }
                    : undefined
                }
              >
                <div
                  className={`px-5 py-4 border-b ${
                    acc.featured
                      ? "bg-[#EBF5FB] border-[#1A90C3]/20"
                      : "bg-[#F6F8FB] border-[#E5E7EB]"
                  }`}
                >
                  {acc.featured && (
                    <span className="bg-[#1A90C3] text-white text-[9px] font-extrabold px-3 py-1 rounded-full mb-2 inline-block uppercase tracking-wide">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3
                        className={`text-xl font-extrabold ${
                          acc.featured ? "text-[#1A90C3]" : "text-[#07111F]"
                        }`}
                      >
                        {acc.name}
                      </h3>
                      <div className="text-[11px] text-[#6B7280] mt-0.5">{acc.tier}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-[#07111F] leading-none">
                        {acc.deposit}
                      </div>
                      <div className="text-[11px] text-[#6B7280] mt-0.5">min. deposit</div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-2">
                  {tableRows.map((row, ri) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between py-3 ${
                        ri < tableRows.length - 1 ? "border-b border-[#F3F4F6]" : ""
                      }`}
                    >
                      <span className="text-[12px] text-[#6B7280] flex-1 pr-3">{row.label}</span>
                      <span
                        className={`text-[12px] font-semibold ${
                          acc.featured ? "text-[#1A90C3]" : "text-[#111827]"
                        }`}
                      >
                        {row.values[accounts.findIndex((a) => a.id === acc.id)]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-4 border-t border-[#E5E7EB]">
                  <Link
                    href="https://portal.ollatrade.com/auth/register"
                    className={`flex items-center justify-center w-full font-bold py-3.5 rounded-xl text-[14px] transition-all hover:-translate-y-0.5 ${
                      acc.featured
                        ? "bg-[#1A90C3] hover:bg-[#1580B0] text-white shadow-md shadow-[#1A90C3]/20"
                        : "bg-[#07111F] hover:bg-[#0E1E30] text-white"
                    }`}
                  >
                    {acc.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer row */}
          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {[
              "Trading involves risk. Conditions shown are indicative and may vary.",
              "Spreads are variable and subject to prevailing market conditions.",
              "Leverage availability depends on your jurisdiction and account type.",
              "Please read our Risk Disclosures before opening an account.",
            ].map((note) => (
              <div key={note} className="flex items-start gap-2 text-[12px] text-[#6B7280]">
                <span className="text-[#D1D5DB] flex-shrink-0 leading-5">·</span>
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F6F8FB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07111F] mb-3">
              Account Questions Answered
            </h2>
            <p className="text-[#6B7280] text-[15px] max-w-xl mx-auto">
              Everything you need to know about choosing and opening a trading account
              with Olla Trade.
            </p>
          </FadeUp>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <details className="group bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <summary className="flex items-start justify-between px-6 py-5 cursor-pointer list-none gap-4">
                    <span className="text-[15px] font-semibold text-[#07111F] group-open:text-[#1A90C3] leading-snug transition-colors">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F3F4F6] group-open:bg-[#1A90C3] text-[#6B7280] group-open:text-white flex items-center justify-center mt-0.5 transition-all duration-300 group-open:rotate-180">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 border-t border-[#F3F4F6] pt-4">
                    <p className="text-[14px] text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ───────────────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "#07111F", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* Blue radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(26,144,195,0.16) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,144,195,0.04) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(26,144,195,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">
          {/* SCA badge */}
          <FadeIn>
            <div
              className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full"
              style={{
                background: "rgba(26,144,195,0.10)",
                border: "1px solid rgba(26,144,195,0.22)",
              }}
            >
              <svg
                className="w-3.5 h-3.5 text-[#1A90C3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-[11px] font-semibold text-[#1A90C3] tracking-wide">
                UAE SCA Regulated · Lic. 20200000416
              </span>
            </div>
          </FadeIn>

          <FadeUp delay={0.05}>
            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}
            >
              Open Your Account Today
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p
              className="text-[16px] leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: "#8B9DB0" }}
            >
              Join traders who choose Olla Trade for tight spreads, fast execution, and
              regulation you can trust. Start with as little as $10 on MT5.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center justify-center px-9 py-4 rounded-xl text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "#1A90C3", boxShadow: "0 4px 20px rgba(26,144,195,0.35)" }}
              >
                Open Live Account
              </Link>
              <Link
                href="/trading/conditions"
                className="inline-flex items-center justify-center px-9 py-4 rounded-xl text-[14px] font-medium transition-all"
                style={{ color: "#8B9DB0", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                View Trading Conditions
              </Link>
            </div>
          </FadeUp>

          <FadeIn delay={0.2}>
            <p
              className="text-[11px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              CFDs are complex instruments and carry a high risk of losing money rapidly due to
              leverage. You should consider whether you understand how CFDs work and whether you
              can afford to take the high risk of losing your money.{" "}
              <Link
                href="/legal/risk-disclosures"
                className="underline underline-offset-2 hover:text-white/40 transition-colors"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                Read our Risk Disclosures
              </Link>
              . Olla Capital Financial Services L.L.C., UAE SCA Lic. 20200000416.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
