import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import TradingConditionsTable from "../../components/ui/TradingConditionsTable";
import { cryptoFaqs } from "../../data/faqs";

export const metadata: Metadata = { title: "Cryptocurrency CFD Trading", description: "Trade Bitcoin, Ethereum, Litecoin and other major crypto CFDs with Olla Trade. No wallet needed." };

const conditions = [
  { Symbol: "BTC/USD", Cryptocurrency: "Bitcoin",  "Spread From": "50 points", Leverage: "1:10", "Min Size": "0.01 lots" },
  { Symbol: "ETH/USD", Cryptocurrency: "Ethereum", "Spread From": "10 points", Leverage: "1:10", "Min Size": "0.01 lots" },
  { Symbol: "LTC/USD", Cryptocurrency: "Litecoin", "Spread From": "5 points",  Leverage: "1:10", "Min Size": "0.01 lots" },
  { Symbol: "XRP/USD", Cryptocurrency: "Ripple",   "Spread From": "1 point",   Leverage: "1:10", "Min Size": "0.01 lots" },
];

/* FAQs imported from data/faqs.ts */

export default function CryptoPage() {
  return (
    <>
      <PageHero badge="Cryptocurrencies" title="Trade Crypto CFDs — No Wallet Needed" subtitle="Speculate on Bitcoin, Ethereum, Litecoin, and other major cryptocurrencies as CFDs. No wallet required — just open a trade and take your position." breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Crypto" }]} cta={{ label: "Start Trading Crypto", href: "https://direct.ollatrade.com/auth/register" }} stats={[{ value: "4+", label: "Crypto CFDs" }, { value: "1:10", label: "Max Leverage" }, { value: "No wallet", label: "Required" }]} />

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-red-200 bg-red-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-red-800 mb-2">High Risk Warning — Cryptocurrency</div>
            <p className="text-[12px] text-red-700 leading-relaxed">Cryptocurrency markets are highly volatile and largely unregulated. Prices can move dramatically within very short periods. It is possible to lose your entire investment. Only trade crypto with funds you can fully afford to lose.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">What Are Cryptocurrency CFDs?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Speculate on the price of digital currencies without owning them. No wallet, no exchange account — trade directly from MT4.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { sym: "BTC/USD", name: "Bitcoin",  desc: "The world's first and largest cryptocurrency by market cap. Driven by halving cycles, institutional adoption, and regulatory developments." },
              { sym: "ETH/USD", name: "Ethereum", desc: "The leading smart contract platform. ETH is influenced by DeFi activity, network upgrades, and developer adoption." },
              { sym: "LTC/USD", name: "Litecoin", desc: "Faster transaction times than Bitcoin. Historically tracks Bitcoin's price movements with higher volatility." },
              { sym: "XRP/USD", name: "Ripple",   desc: "Designed for fast, low-cost international payments. Price heavily influenced by regulatory developments." },
            ].map((c) => (
              <div key={c.sym} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="text-lg font-bold text-[#111827] mb-0.5">{c.sym}</div>
                <div className="text-[11px] text-gray-400 mb-3">{c.name}</div>
                <p className="text-[12px] text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <TradingConditionsTable title="Cryptocurrency CFD Conditions" headers={["Symbol","Cryptocurrency","Spread From","Leverage","Min Size"]} rows={conditions} highlightCol={3} />
          <p className="text-[11px] text-gray-400 text-center mt-3">Crypto markets can be highly volatile. Spreads may widen significantly during low-liquidity periods or major market events.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">CFD vs Physical Crypto</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-[13px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Feature</th>
                  <th className="px-5 py-3.5 text-center text-[11px] font-bold text-[#00AA38] uppercase tracking-wider">Crypto CFD (Olla Trade)</th>
                  <th className="px-5 py-3.5 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">Physical Crypto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[["Ownership","No — speculation only","Yes — you own coins"],["Wallet required","Not required","Required"],["Short selling","Yes — supported","Complex"],["Leverage","Up to 1:10","Typically none"],["Platform","MetaTrader 4","Crypto exchange app"]].map(([f, cfd, phys]) => (
                  <tr key={f} className="hover:bg-[#F5F7FA]">
                    <td className="px-5 py-3.5 font-semibold text-[#111827]">{f}</td>
                    <td className="px-5 py-3.5 text-center text-[#00AA38] font-medium">{cfd}</td>
                    <td className="px-5 py-3.5 text-center text-gray-500">{phys}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection title="Crypto Trading FAQs" faqs={cryptoFaqs} />
      <CTASection title="Trade Crypto CFDs with Olla Trade" subtitle="Access Bitcoin, Ethereum and more from your MT4 account." primaryLabel="Open Account" secondaryLabel="View All Markets" secondaryHref="/markets" />
    </>
  );
}
