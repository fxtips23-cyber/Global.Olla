"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, SlideLeft, SlideRight } from "../ui/Animate";
import { IconCheck } from "../ui/Icons";

const ACCOUNTS = [
  {
    key: "classic",
    href: "/trading/accounts/classic",
    name: "Classic",
    label: "For New Traders",
    deposit: "$10",
    spread: "From 1.4 pips",
    commission: "$0",
    leverage: "Up to 1:500",
    featured: false,
    features: ["No commission", "Standard spreads", "Full MT5 access", "24/5 support", "Negative balance protection"],
  },
  {
    key: "pro",
    href: "/trading/accounts/pro",
    name: "Pro",
    label: "Most Popular",
    deposit: "$2,000",
    spread: "From 1.0 pips",
    commission: "$0",
    leverage: "Up to 1:400",
    featured: true,
    features: ["Tighter spreads", "Priority execution", "Dedicated manager", "All MT5 features", "Negative balance protection"],
  },
  {
    key: "raw",
    href: "/trading/accounts/raw",
    name: "RAW",
    label: "For Professionals",
    deposit: "$20,000",
    spread: "From 0.0 pips",
    commission: "$3.5/lot",
    leverage: "Up to 1:200",
    featured: false,
    features: ["Raw ECN spreads", "Institutional pricing", "VIP support line", "Custom conditions", "Negative balance protection"],
  },
];

export default function AccountsPreview() {
  return (
    <section className="section-py" style={{ background: "#F6F8FB" }}>
      <div className="container-wide">

        {/* ── Two-column intro ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <SlideLeft>
            <span className="badge mb-4">Account Types</span>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#07111F", letterSpacing: "-0.022em" }}
            >
              Choose Your{" "}
              <span className="text-gradient">Account</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "#6B7280" }}>
              Three professional account types built for every level of trader —
              from beginners starting at $10 to institutional professionals requiring raw ECN pricing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="https://portal.ollatrade.com/auth/register" className="btn-primary">
                Open an Account
              </Link>
              <Link href="/trading/accounts" className="btn-secondary">
                Compare Accounts
              </Link>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(26,144,195,0.07) 0%, transparent 70%)" }}
              />
              <Image
                src="https://ollatrade.com/wp-content/uploads/2026/05/background-removed-background-removed-1.png"
                alt="Olla Trade Account Types"
                width={600}
                height={480}
                className="relative w-full h-auto"
              />
            </div>
          </SlideRight>
        </div>

        {/* ── Account cards ── */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {ACCOUNTS.map((acc) => (
            <FadeUp key={acc.key}>
              <div
                className={`relative flex flex-col p-7 h-full rounded-2xl transition-all duration-300 ${acc.featured ? "card-featured shadow-xl" : "card hover:shadow-md"}`}
              >
                {acc.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="text-[11px] font-bold px-4 py-1.5 rounded-full text-white whitespace-nowrap"
                      style={{ background: "linear-gradient(135deg, #1A90C3, #1E9FD8)" }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5 pt-2">
                  <div
                    className="text-[11px] font-bold uppercase tracking-wider mb-2"
                    style={{ color: acc.featured ? "#1A90C3" : "#9CA3AF" }}
                  >
                    {acc.label}
                  </div>
                  <div
                    className="font-extrabold leading-none mb-1"
                    style={{ fontSize: "clamp(28px, 4vw, 38px)", color: "#111827", letterSpacing: "-0.02em" }}
                  >
                    {acc.deposit}
                  </div>
                  <div className="text-[13px]" style={{ color: "#6B7280" }}>Minimum deposit</div>
                </div>

                <div className="space-y-2.5 mb-5 pb-5 border-b" style={{ borderColor: "#F3F4F6" }}>
                  {[
                    ["Spread", acc.spread],
                    ["Commission", acc.commission],
                    ["Max Leverage", acc.leverage],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center text-[13px]">
                      <span style={{ color: "#6B7280" }}>{label}</span>
                      <span className="font-semibold" style={{ color: acc.featured ? "#1A90C3" : "#111827" }}>{value}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mb-7 flex-1">
                  {acc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px]">
                      <span style={{ color: acc.featured ? "#1A90C3" : "#10B981" }} className="flex-shrink-0 mt-0.5">
                        <IconCheck className="w-3.5 h-3.5" />
                      </span>
                      <span style={{ color: "#374151" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={acc.href}
                  className={acc.featured ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                  style={{ textAlign: "center" }}
                >
                  Open {acc.name} Account
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="text-center">
          <Link
            href="/trading/accounts"
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-colors"
            style={{ color: "#1A90C3" }}
          >
            Compare all account features in detail
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
