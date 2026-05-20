import Link from "next/link";
import { IconActivity, IconLock, IconBolt, IconShield } from "../ui/Icons";

const specs = [
  { label: "Forex Spreads From", value: "0.0 pips", note: "Elite account" },
  { label: "Maximum Leverage", value: "1:500", note: "Forex pairs" },
  { label: "Minimum Deposit", value: "$10", note: "Standard account" },
  { label: "Min. Trade Size", value: "0.01 lots", note: "All accounts" },
  { label: "Margin Call Level", value: "80%", note: "All accounts" },
  { label: "Stop Out Level", value: "20%", note: "All accounts" },
  { label: "Order Execution", value: "Market", note: "No requotes" },
  { label: "Instruments", value: "500+", note: "All asset classes" },
];

const trust = [
  {
    icon: <IconBolt className="w-5 h-5" />,
    title: "Market Execution",
    desc: "All orders executed at best available market price. No requotes, no delays.",
  },
  {
    icon: <IconShield className="w-5 h-5" />,
    title: "Negative Balance Protection",
    desc: "Your account balance cannot go below zero. Losses capped at deposited funds.",
  },
  {
    icon: <IconLock className="w-5 h-5" />,
    title: "Segregated Client Funds",
    desc: "Client funds held separately from company operational funds at all times.",
  },
  {
    icon: <IconActivity className="w-5 h-5" />,
    title: "24/5 Market Access",
    desc: "Trade Forex and most instruments 24 hours a day, 5 days a week.",
  },
];

export default function TradingConditionsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#050C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Trading Conditions</div>
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Transparent. Competitive.<br />Professional.
          </h2>
          <p className="text-white/40 leading-relaxed">
            Our trading conditions are built for serious traders — tight spreads, fast execution, and full transparency on every account type.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* Conditions grid */}
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/8">
              {specs.map((s) => (
                <div key={s.label} className="bg-[#0D1520] px-5 py-5">
                  <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">{s.label}</div>
                  <div className="text-2xl font-extrabold text-white mb-1">{s.value}</div>
                  <div className="text-[10px] text-[#00CC44]/70">{s.note}</div>
                </div>
              ))}
            </div>

            {/* Trust pillars */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {trust.map((t) => (
                <div key={t.title} className="flex items-start gap-3 bg-white/3 border border-white/6 rounded-xl px-4 py-4">
                  <div className="text-white/35 mt-0.5 flex-shrink-0">{t.icon}</div>
                  <div>
                    <div className="text-[13px] font-semibold text-white/80 mb-0.5">{t.title}</div>
                    <div className="text-[12px] text-white/35 leading-relaxed">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — account summary card */}
          <div className="bg-[#0D1520] border border-white/10 rounded-2xl p-6">
            <div className="text-[11px] font-bold text-white/25 uppercase tracking-widest mb-5">Account Comparison</div>
            <div className="space-y-0">
              {[
                { name: "Standard", dep: "$10", spread: "1.4 pips", lev: "1:400", featured: false },
                { name: "Pro",      dep: "$2,000", spread: "1.0 pips", lev: "1:400", featured: true },
                { name: "Elite",   dep: "$20,000", spread: "0.0 pips", lev: "1:200", featured: false },
              ].map((acc, i) => (
                <div key={acc.name} className={`py-4 ${i > 0 ? "border-t border-white/6" : ""} ${acc.featured ? "relative" : ""}`}>
                  {acc.featured && (
                    <div className="absolute right-0 top-3">
                      <span className="text-[9px] bg-[#00CC44]/20 border border-[#00CC44]/30 text-[#00CC44] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Popular</span>
                    </div>
                  )}
                  <div className={`text-sm font-bold mb-2 ${acc.featured ? "text-white" : "text-white/55"}`}>{acc.name} Account</div>
                  <div className="grid grid-cols-3 gap-3 text-[11px]">
                    <div>
                      <div className="text-white/25 mb-0.5">Min. deposit</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#00CC44]" : "text-white/60"}`}>{acc.dep}</div>
                    </div>
                    <div>
                      <div className="text-white/25 mb-0.5">Spread</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#00CC44]" : "text-white/60"}`}>{acc.spread}</div>
                    </div>
                    <div>
                      <div className="text-white/25 mb-0.5">Leverage</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#00CC44]" : "text-white/60"}`}>{acc.lev}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Link href="https://direct.ollatrade.com/auth/register"
                className="w-full text-center bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold py-3 rounded-lg text-sm transition-colors">
                Open Account
              </Link>
              <Link href="/trading/accounts"
                className="w-full text-center text-white/35 hover:text-white/60 text-xs py-2 transition-colors">
                Compare all accounts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
