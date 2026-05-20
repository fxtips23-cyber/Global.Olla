import Link from "next/link";
import { IconCheck } from "../ui/Icons";

const accounts = [
  {
    name: "Standard", badge: "Entry Level", featured: false,
    deposit: "$10", spread: "1.4 pips", leverage: "1:400", commission: "None",
    features: ["500+ instruments", "MT4 Desktop, Web & Mobile", "Expert Advisors supported", "24/5 customer support", "No deposit or withdrawal fees", "Negative balance protection"],
    cta: "Open Standard", href: "https://direct.ollatrade.com/auth/register",
  },
  {
    name: "Pro", badge: "Most Popular", featured: true,
    deposit: "$2,000", spread: "1.0 pips", leverage: "1:400", commission: "None",
    features: ["500+ instruments", "MT4 Desktop, Web & Mobile", "Expert Advisors supported", "24/5 priority support", "No deposit or withdrawal fees", "Negative balance protection"],
    cta: "Open Pro Account", href: "https://direct.ollatrade.com/auth/register",
  },
  {
    name: "Elite", badge: "Professional", featured: false,
    deposit: "$20,000", spread: "0.0 pips", leverage: "1:200", commission: "$3.5/lot per side",
    features: ["500+ instruments incl. Futures CFDs", "MT4 Desktop, Web & Mobile", "Expert Advisors supported", "24/5 VIP support line", "No deposit or withdrawal fees", "Negative balance protection"],
    cta: "Open Elite Account", href: "https://direct.ollatrade.com/auth/register",
  },
];

export default function AccountsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Account Types</div>
            <h2 className="text-4xl font-extrabold text-[#111827]">Choose Your Account</h2>
            <p className="text-gray-500 mt-3 max-w-lg">From first deposit to professional volume — three account types built for every trader.</p>
          </div>
          <Link href="/trading/accounts" className="text-sm font-semibold text-[#111827] hover:text-[#00CC44] transition-colors flex items-center gap-1 flex-shrink-0">
            Compare all features
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {accounts.map((acc) => (
            <div
              key={acc.name}
              className={`relative rounded-2xl border flex flex-col ${acc.featured
                ? "bg-[#081018] border-white/12 shadow-2xl shadow-black/40"
                : "bg-white border-gray-100"
              }`}
            >
              {acc.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00CC44] text-black text-[11px] font-bold px-5 py-1.5 rounded-full tracking-wide">Most Popular</span>
                </div>
              )}

              <div className="p-7 flex-1">
                {/* Badge */}
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${acc.featured ? "text-white/30" : "text-gray-400"}`}>
                  {acc.badge}
                </div>

                {/* Account name */}
                <h3 className={`text-2xl font-extrabold mb-1 ${acc.featured ? "text-white" : "text-[#111827]"}`}>{acc.name}</h3>

                {/* Deposit */}
                <div className={`text-5xl font-black leading-none mb-1 tracking-tight ${acc.featured ? "text-[#00CC44]" : "text-[#111827]"}`}>{acc.deposit}</div>
                <div className={`text-[11px] mb-7 ${acc.featured ? "text-white/25" : "text-gray-400"}`}>Minimum deposit</div>

                {/* Specs */}
                <div className={`space-y-0 border-t mb-6 ${acc.featured ? "border-white/10" : "border-gray-100"}`}>
                  {[["Spread", acc.spread], ["Leverage", acc.leverage], ["Commission", acc.commission]].map(([k, v]) => (
                    <div key={k} className={`flex justify-between py-3 border-b text-sm ${acc.featured ? "border-white/8" : "border-gray-50"}`}>
                      <span className={acc.featured ? "text-white/30" : "text-gray-400"}>{k}</span>
                      <span className={`font-semibold ${acc.featured ? "text-white" : "text-[#111827]"}`}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {acc.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-[13px] ${acc.featured ? "text-white/40" : "text-gray-500"}`}>
                      <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${acc.featured ? "text-[#00CC44]" : "text-[#00CC44]"}`}>
                        <IconCheck className="w-3 h-3" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-7">
                <Link
                  href={acc.href}
                  className={`w-full flex items-center justify-center font-bold py-3.5 rounded-xl text-sm transition-all ${acc.featured
                    ? "bg-[#00CC44] hover:bg-[#00DD4A] text-black"
                    : "bg-[#111827] hover:bg-[#1a2540] text-white"
                  }`}
                >
                  {acc.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Trading involves risk. Please read our <Link href="/legal/risk-disclosures" className="underline hover:text-gray-600">Risk Disclosures</Link> before opening an account.
        </p>
      </div>
    </section>
  );
}
