"use client";
import { useTranslations } from "next-intl";

/** Trustpilot review section — skeleton placeholders, no fake reviews. */
export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">
              {t("badge")}
            </div>
            <h2 className="text-4xl font-extrabold text-[#111827] mb-3">
              {t("title")}
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-md">
              {t("subtitle")}
            </p>
          </div>

          {/* Trustpilot brand badge */}
          <div className="flex-shrink-0">
            <div className="inline-flex flex-col items-center gap-2 bg-[#F5F7FA] border border-gray-100 rounded-2xl px-6 py-5">
              <div className="flex items-center gap-2 mb-1">
                <svg viewBox="0 0 111 100" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.5 0L68.3 40.5H111L76.1 65.5L89 106L55.5 81.5L22 106L34.9 65.5L0 40.5H42.7L55.5 0Z" fill="#00B67A"/>
                </svg>
                <span className="text-[14px] font-extrabold text-[#111827] tracking-tight">Trustpilot</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-5 h-5" fill="#00B67A">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div className="text-[11px] font-semibold text-[#111827]">
                {t("rated")}
              </div>
              <div className="text-[10px] text-gray-400 text-center">
                {t("reviews_note")}
              </div>
            </div>
          </div>
        </div>

        {/* ── Review cards — skeleton state ─────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-6 bg-[#F5F7FA] flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="w-4 h-4 rounded-sm animate-pulse"
                    style={{ background: "#00B67A", opacity: 0.25 }} />
                ))}
              </div>
              <div className="space-y-2.5 mb-6 flex-1">
                <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse" />
                <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse" />
                <div className="h-2.5 bg-gray-200 rounded-full w-4/5 animate-pulse" />
                <div className="h-2.5 bg-gray-200 rounded-full w-3/5 animate-pulse" />
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-2.5 bg-gray-200 rounded-full w-20 animate-pulse" />
                  <div className="h-2 bg-gray-100 rounded-full w-14 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Empty state notice ─────────────────────────────── */}
        <div className="text-center mb-8">
          <p className="text-[12px] text-gray-400">{t("loading_note")}</p>
        </div>

        {/* ── Trustpilot CTA button ──────────────────────────── */}
        <div className="text-center">
          <a
            href="https://www.trustpilot.com/review/ollatrade.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-[#00B67A]/40 hover:shadow-md rounded-2xl px-7 py-4 transition-all duration-200 group"
          >
            <div className="flex gap-0.5 flex-shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-5 h-5" fill="#00B67A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="text-[14px] font-bold text-[#111827] group-hover:text-[#00B67A] transition-colors">
                {t("cta_title")}
              </div>
              <div className="text-[11px] text-gray-400">{t("cta_url")}</div>
            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-[#00B67A] transition-colors flex-shrink-0 ml-1"
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
