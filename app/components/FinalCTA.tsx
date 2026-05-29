import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#07111F]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Blue glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-[#29B5D4]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#29B5D4]/10 border border-[#29B5D4]/30 text-[#29B5D4] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 bg-[#29B5D4] rounded-full animate-pulse" />
          Offer Available Now
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
          Deposit Today and Get{" "}
          <span className="text-[#29B5D4]">20% More Trading Power</span>
        </h2>

        <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
          Make a qualifying deposit to your Olla Trade live account and receive an instant 20% trading bonus credit. Expand your margin, trade more instruments, and take advantage of every market opportunity.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://portal.ollatrade.com/auth/register"
            className="inline-flex items-center justify-center gap-2 bg-[#29B5D4] hover:bg-[#1FA5C4] text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-200 shadow-xl shadow-[#29B5D4]/20 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Claim Bonus Now
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Support
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 text-white/30 text-sm">
          {["Secure Platform", "Fast Crediting", "Professional Support", "Transparent Terms"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#29B5D4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
