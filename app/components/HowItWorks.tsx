import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Register or Log In",
    description:
      "Create a new Olla Trade live account or log in to your existing account through our secure client portal.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Make a Qualifying Deposit",
    description:
      "Fund your live trading account with any qualifying deposit amount using our fast, secure payment options.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receive Your 20% Bonus",
    description:
      "Your 20% trading bonus is credited to your account after deposit confirmation — boosting your available margin.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#29B5D4]/10 text-[#29B5D4] text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider border border-[#29B5D4]/20">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How to Claim Your 20% Bonus
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Get your deposit bonus in three simple steps — from registration to bonus crediting, it's fast and straightforward.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#29B5D4]/30 via-[#29B5D4] to-[#29B5D4]/30 z-0" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              <div className="relative z-10 w-28 h-28 rounded-full bg-white border-2 border-gray-200 flex flex-col items-center justify-center mb-6 shadow-lg group-hover:border-[#29B5D4] group-hover:shadow-[#29B5D4]/10 transition-all duration-300">
                <div className="text-[#29B5D4] mb-1">{step.icon}</div>
                <div className="text-xs font-bold text-[#29B5D4] tracking-widest">STEP {step.number}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="md:hidden mt-6 text-[#29B5D4]">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="https://portal.ollatrade.com/auth/register"
            className="inline-flex items-center gap-2 bg-[#29B5D4] hover:bg-[#1FA5C4] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-[#29B5D4]/20 hover:-translate-y-0.5"
          >
            Start Claiming Your Bonus
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
