import { IconStar } from "../ui/Icons";

/** Trustpilot placeholder — no fake reviews shown. */
export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Client Reviews</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-extrabold text-[#111827]">Trusted by Traders Worldwide</h2>
              <p className="text-gray-500 mt-3 max-w-lg text-[15px]">
                Olla Trade is rated by real clients on Trustpilot. Reviews reflect genuine trading experiences.
              </p>
            </div>
            {/* Trustpilot badge area */}
            <div className="flex-shrink-0 flex flex-col items-center sm:items-end gap-1">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="w-5 h-5 text-[#00B67A]" />
                ))}
              </div>
              <div className="text-[11px] font-bold text-[#111827]">Rated on Trustpilot</div>
              <div className="text-[10px] text-gray-400">Reviews loading from Trustpilot</div>
            </div>
          </div>
        </div>

        {/* Placeholder card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-6 bg-[#F5F7FA]">
              {/* Star placeholder */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="w-3.5 h-3.5 rounded-sm bg-gray-200" />
                ))}
              </div>
              {/* Text placeholder lines */}
              <div className="space-y-2 mb-6">
                <div className="h-2.5 bg-gray-200 rounded-full w-full" />
                <div className="h-2.5 bg-gray-200 rounded-full w-full" />
                <div className="h-2.5 bg-gray-200 rounded-full w-4/5" />
                <div className="h-2.5 bg-gray-200 rounded-full w-3/5" />
              </div>
              {/* Author placeholder */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-200" />
                <div className="space-y-1.5">
                  <div className="h-2 bg-gray-200 rounded-full w-20" />
                  <div className="h-1.5 bg-gray-100 rounded-full w-14" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot CTA */}
        <div className="text-center">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gray-200 bg-[#F5F7FA] hover:bg-white hover:border-gray-300 hover:shadow-sm rounded-xl px-6 py-3 transition-all"
          >
            {/* Trustpilot star */}
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="w-4 h-4 text-[#00B67A]" />
              ))}
            </div>
            <span className="text-[13px] font-semibold text-[#111827]">View reviews on Trustpilot</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
