import Link from "next/link";

const trustCards = [
  {
    title: "Multi-Asset Trading",
    description: "Access Forex, Metals (Gold, Silver), Indices, Commodities, and more — all from one platform.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    stat: "10+",
    statLabel: "Asset Classes",
  },
  {
    title: "Fast Deposits & Withdrawals",
    description: "Fund your account quickly and withdraw your earnings with minimal delays through our secure payment system.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: "Fast",
    statLabel: "Processing",
  },
  {
    title: "Secure Client Portal",
    description: "Manage your accounts, deposits, bonuses, and documents securely through your dedicated client area.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    stat: "SSL",
    statLabel: "Secured",
  },
  {
    title: "Professional Trading Conditions",
    description: "Competitive spreads, reliable execution, and professional-grade infrastructure for serious traders.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stat: "Low",
    statLabel: "Spreads",
  },
  {
    title: "Dedicated Customer Support",
    description: "Our knowledgeable support team is ready to assist you with account questions, technical issues, and promotions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    stat: "24/5",
    statLabel: "Support",
  },
];

export default function WhyOllaTrade() {
  return (
    <section id="why-olla" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00CC44]/10 text-[#00AA38] text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider border border-[#00CC44]/20">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why Trade with Olla Trade
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We combine competitive conditions, robust technology, and client-first support to give traders a professional edge.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustCards.map((card, i) => (
            <div
              key={card.title}
              className="bg-[#F8FAFC] rounded-xl border border-gray-100 hover:border-[#00CC44]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Top accent bar */}
              <div className="h-0.5 bg-[#00CC44] w-0 group-hover:w-full transition-all duration-500" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00CC44]/10 text-[#00CC44] flex items-center justify-center group-hover:bg-[#00CC44] group-hover:text-black transition-colors duration-300">
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-[#00CC44]">{card.stat}</div>
                    <div className="text-xs text-gray-400 font-medium">{card.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}

          {/* Wide CTA card */}
          <div className="sm:col-span-2 lg:col-span-3 bg-[#0A0D14] rounded-xl border border-white/5 p-8 text-white flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Ready to experience the difference?</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Join traders who trust Olla Trade for transparent conditions, reliable execution, and responsive support. Claim your 20% bonus and start with an edge.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="https://direct.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold px-6 py-3 rounded-md text-sm transition-colors shadow-lg"
              >
                Open Account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
