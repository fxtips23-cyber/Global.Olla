"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const METHODS = [
  { sym: "USDT", network: "TRC20",    name: "Tether (TRC20)",  time: "~1 min",  tag: "Fastest",  tagColor: "#38BDF8",  color: "#26A17B", active: true },
  { sym: "USDT", network: "ERC20",    name: "Tether (ERC20)",  time: "~3 min",  tag: "Stable",   tagColor: "#8B9DB0",  color: "#627EEA", active: false },
  { sym: "BTC",  network: "Bitcoin",  name: "Bitcoin",          time: "~20 min", tag: "Global",   tagColor: "#8B9DB0",  color: "#F7931A", active: false },
  { sym: "ETH",  network: "Ethereum", name: "Ethereum",         time: "~5 min",  tag: "Secure",   tagColor: "#8B9DB0",  color: "#627EEA", active: false },
];

export default function DepositSection() {
  const t = useTranslations("home.deposit");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#050B14" }}>

      {/* Left glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 0% 60%, rgba(26,144,195,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1380px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
              <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">{t("label")}</span>
            </div>
            <h2 className="font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
              {t("title")}<br /><span className="grad-blue">{t("title2")}</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#8B9DB0" }}>{t("desc")}</p>

            {/* Guarantees */}
            <div className="space-y-3 mb-10">
              {[
                { icon: "⚡", text: t("guarantee1") },
                { icon: "🔒", text: t("guarantee2") },
                { icon: "✓",  text: t("guarantee3") },
                { icon: "🛡", text: t("guarantee4") },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
                    style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
                    {icon}
                  </div>
                  <span className="text-[13px]" style={{ color: "#8B9DB0" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="https://portal.ollatrade.com/auth/register"
                className="btn-glow px-6 py-3.5 rounded-xl text-[13px] font-semibold">
                {t("cta_open")}
              </Link>
              <Link href="/funding-and-withdrawals"
                className="px-6 py-3.5 rounded-xl text-[13px] font-medium transition-all"
                style={{ color: "#8B9DB0", border: "1px solid rgba(255,255,255,0.10)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#fff"; el.style.borderColor = "rgba(26,144,195,0.35)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#8B9DB0"; el.style.borderColor = "rgba(255,255,255,0.10)"; }}>
                {t("cta_methods")}
              </Link>
            </div>
          </div>

          {/* Right: funding dashboard */}
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
            style={{ background: "#060E1C", border: "1px solid rgba(26,144,195,0.15)" }}>

            {/* Header */}
            <div className="px-6 py-4 flex items-center justify-between"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <div className="text-[10px] text-white/25 uppercase tracking-widest mb-0.5">{t("header_label")}</div>
                <div className="text-[13px] font-bold text-white">{t("header_title")}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="text-[10px] font-semibold" style={{ color: "#38BDF8" }}>{t("instant")}</span>
              </div>
            </div>

            {/* Methods */}
            <div className="p-4 space-y-2">
              {METHODS.map((m) => (
                <div key={`${m.sym}-${m.network}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors"
                  style={m.active
                    ? { background: "rgba(26,144,195,0.10)", border: "1px solid rgba(56,189,248,0.22)" }
                    : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-extrabold"
                    style={{ background: `${m.color}20`, border: `1px solid ${m.color}35`, color: "rgba(255,255,255,0.70)" }}>
                    {m.sym}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-white/80 truncate">{m.name}</div>
                    <div className="text-[10px]" style={{ color: "#5A6A7A" }}>{t("network")} {m.network}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] font-bold px-2 py-0.5 rounded-full mb-1"
                      style={m.active
                        ? { background: "rgba(26,144,195,0.20)", color: "#38BDF8" }
                        : { background: "rgba(255,255,255,0.06)", color: "#5A6A7A" }}>
                      {m.tag}
                    </div>
                    <div className="text-[9px]" style={{ color: "#5A6A7A" }}>{m.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent transactions */}
            <div className="mx-4 mb-4 rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: "#5A6A7A" }}>{t("recent")}</div>
              {[
                { asset: "USDT TRC20", amount: "+$1,000.00", time: "2 min",  status: "Confirmed", up: true },
                { asset: "USDT ERC20", amount: "−$350.00",   time: "1 hr",   status: "Processed", up: false },
                { asset: "BTC",        amount: "+$2,500.00", time: "3 hr",   status: "Confirmed", up: true },
              ].map((tx) => (
                <div key={tx.time} className="flex items-center justify-between text-[10px] py-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${tx.up ? "bg-[#38BDF8]" : "bg-[#5A6A7A]"}`} />
                    <span style={{ color: "#8B9DB0" }}>{tx.asset}</span>
                  </div>
                  <span className={`font-mono font-bold ${tx.up ? "text-[#38BDF8]" : "text-white/50"}`}>{tx.amount}</span>
                  <span style={{ color: "#5A6A7A" }}>{tx.time}</span>
                  <span className="px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.05)", color: "#5A6A7A" }}>{tx.status}</span>
                </div>
              ))}
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
              {[
                [t("stat1"), t("stat1_sub")],
                [t("stat2"), t("stat2_sub")],
                [t("stat3"), t("stat3_sub")],
              ].map(([v, l]) => (
                <div key={l} className="text-center px-3 py-3.5" style={{ background: "#060E1C" }}>
                  <div className="text-[12px] font-bold text-[#38BDF8] mb-0.5">{v}</div>
                  <div className="text-[9px]" style={{ color: "#5A6A7A" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
