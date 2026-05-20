import Link from "next/link";

const rules = [
  { icon: "💰", text: "Bonus is 20% of the eligible deposit amount credited to your trading account." },
  { icon: "📊", text: "Bonus is added as trading credit and increases your available margin." },
  { icon: "🔒", text: "Bonus credit cannot be withdrawn directly — it is used as margin support." },
  { icon: "✅", text: "Profits generated through trading may be withdrawn as per Olla Trade withdrawal terms." },
  { icon: "📋", text: "Full terms and conditions apply. Eligibility subject to account verification and company criteria." },
];

export default function TermsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Rules */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00CC44]/10 text-[#00AA38] text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-wider border border-[#00CC44]/20">
              Promotion Rules
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Key Bonus Terms at a Glance
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Transparency is important to us. Here's a quick summary of the key conditions for the 20% Deposit Bonus promotion.
            </p>

            <ul className="space-y-3">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-[#00CC44]/30 transition-colors">
                  <span className="text-xl flex-shrink-0 mt-0.5">{rule.icon}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{rule.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="https://ollatrade.com/terms-conditions/"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#00CC44] text-[#00CC44] hover:bg-[#00CC44] hover:text-black font-semibold px-6 py-3 rounded-md text-sm transition-all duration-200"
              >
                Read Full Terms & Conditions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Dark card */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-[#00CC44]/20 rounded-2xl translate-x-3 translate-y-3 blur-sm" />
              <div className="relative bg-[#0A0D14] rounded-2xl p-8 border border-white/10 shadow-2xl text-white">
                <div className="text-center mb-7">
                  <div className="text-5xl font-extrabold text-[#00CC44] mb-1">20%</div>
                  <div className="text-sm text-white/40 uppercase tracking-wider font-semibold">Deposit Bonus</div>
                </div>

                <div className="space-y-3 mb-7">
                  {[
                    { label: "Deposit $1,000", value: "+$200 bonus" },
                    { label: "Deposit $5,000", value: "+$1,000 bonus" },
                    { label: "Deposit $10,000", value: "+$2,000 bonus" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-white/10">
                      <span className="text-white/50 text-sm">{row.label}</span>
                      <span className="text-[#00CC44] font-bold text-sm">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center mb-6">
                  <p className="text-xs text-white/40 leading-relaxed">
                    Amounts shown are illustrative. Eligibility and exact amounts are subject to Olla Trade terms and conditions.
                  </p>
                </div>

                <Link
                  href="https://direct.ollatrade.com/auth/register"
                  className="w-full flex items-center justify-center gap-2 bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold py-3.5 rounded-md text-sm transition-colors"
                >
                  Claim Your Bonus Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
