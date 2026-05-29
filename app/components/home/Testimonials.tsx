"use client";
import { useTranslations } from "next-intl";

const TRUSTPILOT_URL = "https://www.trustpilot.com/review/ollatrade.com";

function TrustpilotStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 111 100" className={className} fill="none" aria-hidden="true">
      <path d="M55.5 0L68.3 40.5H111L76.1 65.5L89 106L55.5 81.5L22 106L34.9 65.5L0 40.5H42.7L55.5 0Z" fill="#00B67A" />
    </svg>
  );
}

export default function Testimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#050B14" }}>

      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(26,144,195,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1380px] mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full"
            style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
            <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">{t("badge")}</span>
          </div>
          <h2 className="font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
            {t("title")}
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#8B9DB0" }}>{t("subtitle")}</p>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-10">

          {/* Trustpilot brand card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3 mb-3">
              <TrustpilotStar className="w-9 h-9" />
              <span className="font-bold text-white" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                {t("trustpilot_label")}
              </span>
            </div>
            <p className="text-[13px] mb-6" style={{ color: "#5A6A7A" }}>
              {t("trustpilot_tagline")}
            </p>
            <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
              style={{ color: "#00B67A" }}>
              {t("trustpilot_profile_link")}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Verified info card */}
          <div className="flex flex-col p-8 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
              style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)", color: "#38BDF8" }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[14px] font-semibold mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
              {t("info_title")}
            </h3>
            <p className="text-[13px] leading-relaxed" style={{ color: "#5A6A7A" }}>
              {t("info_body")}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl transition-all duration-300 group"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,182,122,0.35)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.08)"; }}>
            <TrustpilotStar className="w-5 h-5 flex-shrink-0" />
            <span className="text-[13px] font-semibold transition-colors" style={{ color: "rgba(255,255,255,0.70)" }}>
              {t("cta_label")}
            </span>
            <svg className="w-4 h-4 flex-shrink-0 ml-1" style={{ color: "#5A6A7A" }}
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
