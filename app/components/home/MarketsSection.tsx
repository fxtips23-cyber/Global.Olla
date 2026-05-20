import Link from "next/link";
import { IconBarChart, IconTrendingUp, IconLayers, IconActivity, IconGlobe, IconMonitor } from "../ui/Icons";

const markets = [
  { Icon: IconBarChart,   label: "Forex",    tag: "70+ Pairs",     instruments: "EUR/USD · GBP/USD · USD/JPY · AUD/USD", spread: "From 0.0 pips", lev: "1:500", href: "/markets/forex" },
  { Icon: IconTrendingUp, label: "Metals",   tag: "Gold & Silver", instruments: "XAUUSD · XAGUSD",                       spread: "From 25 pts",   lev: "1:200", href: "/markets/metals" },
  { Icon: IconLayers,     label: "Indices",  tag: "Global",        instruments: "US30 · NASDAQ · S&P500 · DAX40",        spread: "From 1 pt",     lev: "1:100", href: "/markets/indices" },
  { Icon: IconActivity,   label: "Energies", tag: "Oil & Gas",     instruments: "Brent Crude · WTI Crude",               spread: "From 3 pts",    lev: "1:100", href: "/markets/energies" },
  { Icon: IconGlobe,      label: "Crypto",   tag: "Major Coins",   instruments: "BTC · ETH · LTC · XRP",                spread: "From 50 pts",   lev: "1:10",  href: "/markets/crypto" },
  { Icon: IconMonitor,    label: "Stocks",   tag: "1,000+ Equities",instruments: "Apple · Tesla · Amazon · Google",      spread: "Market",        lev: "1:10",  href: "/markets/stocks" },
];

export default function MarketsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">500+ Instruments</div>
            <h2 className="text-4xl font-extrabold text-[#111827]">One Account. All Markets.</h2>
          </div>
          <Link href="/markets" className="text-sm font-semibold text-[#111827] hover:text-[#00CC44] transition-colors flex items-center gap-1 flex-shrink-0">
            View all markets
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map(({ Icon, label, tag, instruments, spread, lev, href }) => (
            <Link
              key={label}
              href={href}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#111827]/15 hover:shadow-lg transition-all duration-300"
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-gray-400 border border-gray-100 px-2.5 py-1 rounded-full">{tag}</span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#111827] mb-1.5 group-hover:text-[#00AA38] transition-colors">{label}</h3>

              {/* Instruments */}
              <p className="text-[13px] text-gray-400 mb-5 leading-relaxed">{instruments}</p>

              {/* Conditions pills */}
              <div className="flex gap-2">
                <span className="text-[11px] font-semibold text-[#00AA38] bg-[#00CC44]/8 border border-[#00CC44]/12 px-2.5 py-1 rounded-full">{spread}</span>
                <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">Lev. {lev}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
