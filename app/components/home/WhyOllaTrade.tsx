"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const FEATURES = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    titleKey: "portal_title", descKey: "portal_desc",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    titleKey: "execution_title", descKey: "execution_desc",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    titleKey: "instruments_title", descKey: "instruments_desc",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    titleKey: "support_title", descKey: "support_desc",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    titleKey: "platform_title", descKey: "platform_desc",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    titleKey: "protection_title", descKey: "protection_desc",
  },
];

const STATS = [
  { v: "21K+", l: "Active Clients" },
  { v: "500+", l: "Instruments" },
  { v: "24/5", l: "Market Access" },
  { v: "3",    l: "Account Types" },
];

export default function WhyOlla() {
  const t = useTranslations("home.why");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#050B14" }}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(26,144,195,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1380px] mx-auto px-5 lg:px-8">

        {/* Section badge */}
        <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full"
          style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
          <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">{t("label")}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20 items-start">

          {/* Left: headline + stats */}
          <div>
            <h2 className="font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(30px, 3.8vw, 52px)", letterSpacing: "-0.02em" }}>
              {t("title")}<br />
              <span className="grad-blue">{t("title2")}</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ color: "#8B9DB0" }}>{t("desc")}</p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map(({ v, l }) => (
                <div key={l} className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-bold mb-1 grad-white-blue" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>{v}</div>
                  <div className="text-[12px] uppercase tracking-wide" style={{ color: "#5A6A7A" }}>{l}</div>
                </div>
              ))}
            </div>

            {/* UAE SCA badge */}
            <div className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: "rgba(26,144,195,0.06)", border: "1px solid rgba(26,144,195,0.15)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(26,144,195,0.15)", border: "1px solid rgba(56,189,248,0.25)" }}>
                <svg className="w-5 h-5 text-[#38BDF8]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white/80 mb-0.5">UAE SCA Regulated Broker</div>
                <div className="text-[11px]" style={{ color: "#5A6A7A" }}>Olla Capital Financial Services L.L.C. · Lic. 20200000416</div>
              </div>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.titleKey}
                className="p-5 rounded-2xl transition-all duration-300 card-hover group"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)", color: "#38BDF8" }}>
                  {f.icon}
                </div>
                <div className="text-[14px] font-semibold text-white mb-1.5 group-hover:text-[#38BDF8] transition-colors">
                  {t(`features.${f.titleKey}`)}
                </div>
                <div className="text-[12px] leading-relaxed" style={{ color: "#5A6A7A" }}>
                  {t(`features.${f.descKey}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
