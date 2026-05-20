const benefits = [
  {
    title: "Increase Your Trading Margin",
    description: "The bonus credit is added to your account balance, giving you more margin to open and hold larger positions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Trade More Instruments",
    description: "With increased margin, access a broader range of markets — Forex pairs, Metals, Indices, Commodities, and more.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Simple Bonus Activation",
    description: "No complex steps. Deposit, and your bonus is automatically calculated and credited to your live account.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Available for Eligible Live Accounts",
    description: "The promotion is open to eligible verified live trading accounts. Check your qualification in your client portal.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Fast Crediting After Deposit",
    description: "Once your deposit is confirmed, the bonus is applied promptly — so you can get back to trading without delay.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function BonusBenefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00CC44]/10 text-[#00AA38] text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider border border-[#00CC44]/20">
            Bonus Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What the 20% Bonus Gives You
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The deposit bonus is designed to expand your trading capacity and give you greater flexibility in the markets.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`bg-[#F8FAFC] rounded-xl p-6 border border-gray-100 hover:border-[#00CC44]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group ${i === 4 ? "lg:col-start-2" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#00CC44]/10 text-[#00CC44] flex items-center justify-center mb-5 group-hover:bg-[#00CC44] group-hover:text-black transition-colors duration-300">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Example callout */}
        <div className="mt-14 bg-[#0A0D14] rounded-2xl p-8 lg:p-10 text-white text-center border border-white/5">
          <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Example Illustration</div>
          <div className="text-2xl sm:text-3xl font-extrabold mb-2">
            Deposit $5,000 →{" "}
            <span className="text-[#00CC44]">Get $1,000 Bonus Credit</span>
          </div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            A $5,000 qualifying deposit earns you $1,000 in trading bonus credit — giving you $6,000 in total margin to work with.
            Results in trading vary and are not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
