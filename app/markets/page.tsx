import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import CTASection from "../components/CTASection";

export const metadata: Metadata = { title: "Markets", description: "Trade 500+ instruments across Forex, Metals, Indices, Energies, Crypto and Stocks with Olla Trade." };

const markets = [
  { icon: "💱", label: "Forex", sub: "70+ currency pairs", instruments: "EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD and 65+ more", pip: "From 0.0 pips", leverage: "Up to 1:500", href: "/markets/forex" },
  { icon: "🥇", label: "Metals", sub: "Precious metals", instruments: "Gold (XAUUSD), Silver (XAGUSD)", pip: "From 25 pts", leverage: "Up to 1:200", href: "/markets/metals" },
  { icon: "📈", label: "Indices", sub: "Global stock indices", instruments: "US30, NASDAQ, S&P 500, DAX 40, FTSE 100", pip: "From 1 pt", leverage: "Up to 1:100", href: "/markets/indices" },
  { icon: "⚡", label: "Energies", sub: "Commodities", instruments: "Brent Crude Oil, WTI Crude Oil, Natural Gas", pip: "From 3 pts", leverage: "Up to 1:100", href: "/markets/energies" },
  { icon: "₿", label: "Crypto", sub: "Cryptocurrencies", instruments: "Bitcoin, Ethereum, Litecoin, Ripple", pip: "From 50 pts", leverage: "Up to 1:10", href: "/markets/crypto" },
  { icon: "🏢", label: "Stocks", sub: "1,000+ equities", instruments: "Apple, Tesla, Amazon, Google, Microsoft & more", pip: "Market spread", leverage: "Up to 1:10", href: "/markets/stocks" },
];

export default function MarketsPage() {
  return (
    <>
      <PageHero badge="500+ Instruments" title="Global Markets at Your Fingertips" subtitle="Access six major asset classes from a single Olla Trade account. Professional conditions, competitive spreads, and the full power of MT4." breadcrumbs={[{ label: "Markets" }]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((m) => (
              <Link key={m.label} href={m.href} className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#00CC44]/30 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#00AA38] transition-colors">{m.label}</h2>
                <p className="text-sm text-gray-400 mb-4">{m.sub}</p>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{m.instruments}</p>
                <div className="flex gap-3 flex-wrap text-xs mb-5">
                  <span className="bg-[#00CC44]/8 text-[#00AA38] px-2.5 py-1 rounded-full font-medium">{m.pip}</span>
                  <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{m.leverage}</span>
                </div>
                <span className="text-sm font-semibold text-[#00CC44] group-hover:text-[#00DD4A] transition-colors">Explore {m.label} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Start Trading Global Markets" subtitle="Open an account in minutes and access all 500+ instruments from one platform." />
    </>
  );
}
