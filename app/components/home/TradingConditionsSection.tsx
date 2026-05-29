"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SPECS = [
  { label: "Spreads From", value: "0.0 pips", note: "On Elite account", accent: "#38BDF8" },
  { label: "Max Leverage", value: "1:500", note: "Standard account", accent: "#1A90C3" },
  { label: "Min. Deposit", value: "$10", note: "Standard account", accent: "#38BDF8" },
  { label: "Min. Trade Size", value: "0.01 lots", note: "Micro lot support", accent: "#1A90C3" },
  { label: "Deposit Bonus", value: "80%", note: "Welcome bonus", accent: "#38BDF8" },
  { label: "Cashback", value: "20%", note: "On qualifying deposits", accent: "#1A90C3" },
  { label: "Execution", value: "Market", note: "No requotes", accent: "#38BDF8" },
  { label: "Instruments", value: "500+", note: "Across 6 asset classes", accent: "#1A90C3" },
];

export default function TradingConditionsSection() {
  const t = useTranslations("home.conditions");

  return (
    <section className="py-24 lg:py-32 relative" style={{ background: "#08111F" }}>

      <div className="max-w-[1380px] mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full"
            style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
            <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">{t("badge")}</span>
          </div>
          <h2 className="font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
            {t("title")}<br /><span className="grad-blue">{t("title2")}</span>
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#8B9DB0" }}>{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">

          {/* Specs grid */}
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SPECS.map((s) => (
                <div key={s.label}
                  className="p-5 rounded-2xl transition-all duration-300 card-hover group"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="text-[10px] uppercase tracking-widest mb-3 font-medium" style={{ color: "#5A6A7A" }}>{s.label}</div>
                  <div className="font-bold text-white mb-1 transition-colors group-hover:text-[#38BDF8]"
                    style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>{s.value}</div>
                  <div className="text-[11px]" style={{ color: "#5A6A7A" }}>{s.note}</div>
                </div>
              ))}
            </div>

            {/* Trust row */}
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {[
                { icon: "⚡", title: "Fast Market Execution", desc: "Orders filled at best available market price — no requotes." },
                { icon: "🔒", title: "Negative Balance Protection", desc: "You can never lose more than your deposited balance." },
                { icon: "🛡", title: "Segregated Client Funds", desc: "Client funds held separately from company operating capital." },
                { icon: "📞", title: "24/5 Dedicated Support", desc: "Professional team available Monday to Friday by phone & email." },
              ].map(({ icon, title, desc }) => (
                <div key={title}
                  className="flex items-start gap-3.5 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <div className="text-[13px] font-semibold text-white/80 mb-0.5">{title}</div>
                    <div className="text-[12px] leading-relaxed" style={{ color: "#5A6A7A" }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account comparison card */}
          <div className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(8,17,31,0.80)", border: "1px solid rgba(26,144,195,0.18)", backdropFilter: "blur(20px)" }}>

            <div className="px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[10px] font-bold text-white/25 uppercase tracking-widest">{t("compare_title")}</div>
            </div>

            <div className="px-6 py-2">
              {[
                { name: "Standard", dep: "$10", spread: "1.4 pips", lev: "1:500", featured: false },
                { name: "Pro",      dep: "$2,000", spread: "1.0 pips", lev: "1:400", featured: true },
                { name: "Elite",    dep: "$20,000", spread: "0.0 pips", lev: "1:200", featured: false },
              ].map((acc, i) => (
                <div key={acc.name}
                  className={`py-5 relative ${i > 0 ? "border-t" : ""}`}
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  {acc.featured && (
                    <span className="absolute right-0 top-4 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
                      style={{ background: "rgba(26,144,195,0.20)", border: "1px solid rgba(56,189,248,0.30)", color: "#38BDF8" }}>
                      Popular
                    </span>
                  )}
                  <div className={`text-[13px] font-bold mb-3 ${acc.featured ? "text-white" : "text-white/50"}`}>{acc.name}</div>
                  <div className="grid grid-cols-3 gap-3 text-[11px]">
                    <div>
                      <div className="mb-0.5" style={{ color: "#5A6A7A" }}>Min. Dep.</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#38BDF8]" : "text-white/50"}`}>{acc.dep}</div>
                    </div>
                    <div>
                      <div className="mb-0.5" style={{ color: "#5A6A7A" }}>Spread</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#38BDF8]" : "text-white/50"}`}>{acc.spread}</div>
                    </div>
                    <div>
                      <div className="mb-0.5" style={{ color: "#5A6A7A" }}>Leverage</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#38BDF8]" : "text-white/50"}`}>{acc.lev}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
              <Link href="https://portal.ollatrade.com/auth/register"
                className="btn-glow w-full text-center py-3.5 rounded-xl text-[13px] font-semibold">
                {t("cta_open")}
              </Link>
              <Link href="/trading/accounts"
                className="w-full text-center py-2.5 text-[12px] transition-colors"
                style={{ color: "#5A6A7A" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#38BDF8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#5A6A7A"; }}>
                {t("cta_compare")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
