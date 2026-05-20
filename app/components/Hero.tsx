import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0D14] pt-16">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Green glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00CC44]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
      {/* Subtle green glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00CC44]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Promo badge */}
            <div className="inline-flex items-center gap-2 bg-[#00CC44]/10 border border-[#00CC44]/30 text-[#00CC44] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#00CC44] rounded-full animate-pulse" />
              Limited Time Promotion
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Boost Your{" "}
              <span className="text-[#00CC44]">Trading Power</span>{" "}
              with{" "}
              <span className="text-[#00CC44]">20% Deposit</span>{" "}
              Bonus
            </h1>

            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Deposit funds into your Olla Trade live account and receive a{" "}
              <strong className="text-white">20% trading bonus</strong> to increase your margin and trading flexibility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://direct.ollatrade.com/auth/register"
                className="inline-flex items-center justify-center gap-2 bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold px-8 py-4 rounded-md text-base transition-all duration-200 shadow-lg shadow-green-900/30 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Claim 20% Bonus
              </Link>
              <Link
                href="https://ollatrade.com/promotions/"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-md text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                View Promotions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 text-white/40 text-sm">
              {["Instant Crediting", "Secure Platform", "Eligible Live Accounts"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00CC44] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Bonus badge */}
              <div className="absolute -top-5 -right-4 z-20 bg-[#00CC44] text-black rounded-xl px-5 py-4 shadow-2xl shadow-green-900/40 rotate-2">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-0.5">Deposit Bonus</div>
                <div className="text-4xl font-extrabold leading-none">20%</div>
                <div className="text-xs mt-1 opacity-60">On qualifying deposits</div>
              </div>

              {/* Dashboard card */}
              <div className="bg-[#0D1117] border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Account Balance</div>
                    <div className="text-2xl font-bold text-white">$12,400.00</div>
                  </div>
                  <div className="bg-[#00CC44]/15 border border-[#00CC44]/30 text-[#00CC44] text-xs font-semibold px-3 py-1.5 rounded-full">
                    +20% Bonus Active
                  </div>
                </div>

                {/* Chart bars */}
                <div className="mb-5">
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background:
                            i >= 9
                              ? "linear-gradient(to top, #00CC44, #00FF55)"
                              : "rgba(255,255,255,0.07)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-white/30 mt-1">
                    <span>Jan</span><span>Jun</span><span>Now</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Deposit", value: "$10,000", color: "text-white/80" },
                    { label: "Bonus", value: "+$2,000", color: "text-[#00CC44]" },
                    { label: "Total Margin", value: "$12,000", color: "text-[#00CC44]" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Instrument tags */}
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Forex", "Gold", "Indices", "Oil", "Crypto"].map((t) => (
                    <span key={t} className="text-xs bg-[#00CC44]/10 text-[#00CC44] border border-[#00CC44]/20 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave to white */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
