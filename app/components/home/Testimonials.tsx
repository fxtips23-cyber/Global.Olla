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

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Testimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">
            {t("badge")}
          </div>
          <h2 className="text-4xl font-extrabold text-[#111827] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* ── Two cards ──────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-10">

          {/* Trustpilot brand card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center text-center shadow-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <TrustpilotStar className="w-8 h-8" />
              <span className="text-[22px] font-extrabold text-[#111827] tracking-tight">
                {t("trustpilot_label")}
              </span>
            </div>
            <p className="text-[13px] text-gray-400 mb-6">
              {t("trustpilot_tagline")}
            </p>
            <a
              href={TRUSTPILOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#00B67A] hover:underline underline-offset-4 transition-colors"
            >
              {t("trustpilot_profile_link")}
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Verified reviews info card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
              style={{ background: "rgba(0,204,68,0.08)" }}>
              <svg className="w-5 h-5 text-[#00CC44]" fill="none" stroke="currentColor" strokeWidth={2}
                viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[16px] font-bold text-[#111827] mb-3">
              {t("info_title")}
            </h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              {t("info_body")}
            </p>
          </div>
        </div>

        {/* ── CTA button ─────────────────────────────────────────── */}
        <div className="flex justify-center">
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-[#00B67A]/50 hover:shadow-md rounded-2xl px-8 py-4 transition-all duration-200 group"
          >
            <TrustpilotStar className="w-5 h-5 flex-shrink-0" />
            <span className="text-[14px] font-bold text-[#111827] group-hover:text-[#00B67A] transition-colors">
              {t("cta_label")}
            </span>
            <ExternalLinkIcon className="w-4 h-4 text-gray-400 group-hover:text-[#00B67A] transition-colors ml-1 flex-shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
