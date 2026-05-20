"use client";
import { useState } from "react";
import type { FAQ } from "../../data/faqs";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  /** Inject JSON-LD FAQPage schema for SEO. Default: true */
  schema?: boolean;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  schema = true,
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-24 bg-[#F5F7FA] dark:bg-[#081018]">
      {/* JSON-LD FAQ schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">{title}</h2>
          {subtitle && (
            <p className="text-gray-500 dark:text-[#9CA3AF] max-w-2xl mx-auto text-[15px] leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white dark:bg-[#0F1720] rounded-2xl border border-gray-100 dark:border-[#1F2937] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Question button */}
                <button
                  className="w-full flex items-start justify-between px-6 py-5 text-left gap-4 group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-[15px] font-semibold leading-snug transition-colors ${isOpen ? "text-[#00CC44]" : "text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#00AA38] dark:group-hover:text-[#00CC44]"}`}>
                    {f.q}
                  </span>
                  {/* Icon */}
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#00CC44] text-black rotate-180"
                        : "bg-gray-100 dark:bg-white/8 text-gray-400 dark:text-white/35 group-hover:bg-[#00CC44]/15 group-hover:text-[#00CC44]"
                    }`}
                  >
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
                </button>

                {/* Answer — smooth max-height animation */}
                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",
                  }}
                >
                  <div className="px-6 pb-5 border-t border-gray-50 dark:border-[#1F2937] pt-4">
                    <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
