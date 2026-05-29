"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ACCOUNTS = [
  {
    key: "std",
    name: "Standard",
    deposit: "$10",
    spread: "From 1.4 pips",
    commission: "$0",
    leverage: "Up to 1:500",
    featured: false,
    features: ["No commission", "Market execution", "All MT4 features", "24/5 support"],
  },
  {
    key: "pro",
    name: "Pro",
    deposit: "$2,000",
    spread: "From 1.0 pips",
    commission: "$0",
    leverage: "Up to 1:400",
    featured: true,
    features: ["Tighter spreads", "Priority execution", "Dedicated manager", "All MT4 features"],
  },
  {
    key: "eli",
    name: "Elite",
    deposit: "$20,000",
    spread: "From 0.0 pips",
    commission: "Per lot",
    leverage: "Up to 1:200",
    featured: false,
    features: ["Raw spreads", "ECN-style pricing", "VIP support line", "Custom conditions"],
  },
];

export default function AccountsSection() {
  const t = useTranslations("home.accounts");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#050B14" }}>

      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(26,144,195,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1380px] mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full"
            style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
            <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">Account Types</span>
          </div>
          <h2 className="font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
            Choose Your Account
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#8B9DB0" }}>
            Three professional account types designed for every level of trader.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ACCOUNTS.map((acc) => (
            <div key={acc.key}
              className={`relative flex flex-col p-7 rounded-2xl transition-all duration-300 ${acc.featured ? "card-hover" : "card-hover"}`}
              style={{
                background: acc.featured ? "rgba(26,144,195,0.08)" : "rgba(255,255,255,0.04)",
                border: acc.featured ? "1px solid rgba(56,189,248,0.30)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: acc.featured ? "0 0 50px rgba(26,144,195,0.10), inset 0 0 30px rgba(26,144,195,0.04)" : "none",
              }}>

              {/* Top glow for featured */}
              {acc.featured && (
                <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.60), transparent)" }} />
              )}

              {/* Popular badge */}
              {acc.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap"
                    style={{ background: "linear-gradient(135deg, #1A90C3, #38BDF8)", color: "#fff", boxShadow: "0 4px 20px rgba(26,144,195,0.40)" }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Account name + deposit */}
              <div className="mb-6 pt-2">
                <div className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: acc.featured ? "#38BDF8" : "#5A6A7A" }}>
                  {acc.name}
                </div>
                <div className="font-bold text-white leading-none mb-1" style={{ fontSize: "clamp(30px, 3vw, 42px)" }}>
                  {acc.deposit}
                </div>
                <div className="text-[12px]" style={{ color: "#5A6A7A" }}>Minimum deposit</div>
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                {[
                  { l: "Spread", v: acc.spread },
                  { l: "Commission", v: acc.commission },
                  { l: "Max Leverage", v: acc.leverage },
                ].map(({ l, v }) => (
                  <div key={l} className="flex items-center justify-between">
                    <span className="text-[12px]" style={{ color: "#5A6A7A" }}>{l}</span>
                    <span className="text-[13px] font-semibold" style={{ color: acc.featured ? "#38BDF8" : "rgba(255,255,255,0.70)" }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {acc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: acc.featured ? "#38BDF8" : "#1A90C3" }}
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[13px]" style={{ color: "#8B9DB0" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="https://portal.ollatrade.com/auth/register"
                className={`block w-full text-center py-3.5 rounded-xl text-[13px] font-semibold transition-all ${acc.featured ? "btn-glow" : ""}`}
                style={acc.featured ? {} : { border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={!acc.featured ? (e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#fff"; el.style.borderColor = "rgba(26,144,195,0.40)"; el.style.background = "rgba(26,144,195,0.08)"; } : undefined}
                onMouseLeave={!acc.featured ? (e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(255,255,255,0.55)"; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.background = ""; } : undefined}
              >
                Open {acc.name} Account
              </Link>
            </div>
          ))}
        </div>

        {/* Compare link */}
        <div className="text-center mt-8">
          <Link href="/trading/accounts"
            className="text-[13px] font-medium transition-colors"
            style={{ color: "#5A6A7A" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#38BDF8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#5A6A7A"; }}>
            Compare all account features →
          </Link>
        </div>
      </div>
    </section>
  );
}
