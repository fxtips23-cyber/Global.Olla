import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import TradingConditionsTable from "../../components/ui/TradingConditionsTable";
import { metalsFaqs } from "../../data/faqs";
import FeatureGrid from "../../components/ui/FeatureGrid";
import { IconShieldCheck, IconBuilding, IconTrendingUp, IconBarChart, IconBolt, IconRefresh } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "Metals Trading — Gold & Silver", description: "Trade Gold (XAUUSD) and Silver (XAGUSD) CFDs with Olla Trade. Competitive spreads and leverage up to 1:200." };

const conditions = [
  { Instrument: "XAUUSD — Gold",   "Spread From": "25 points", Leverage: "1:200", "Min Size": "0.01", Hours: "24/5 Mon–Fri" },
  { Instrument: "XAGUSD — Silver", "Spread From": "50 points", Leverage: "1:100", "Min Size": "0.01", Hours: "24/5 Mon–Fri" },
];

const whyFeatures = [
  { Icon: IconShieldCheck, title: "Safe-Haven Asset",    desc: "Gold is historically sought during economic uncertainty, geopolitical stress, and market volatility — often moving against equities." },
  { Icon: IconBuilding,    title: "Industrial Demand",   desc: "Silver has significant industrial applications in electronics, solar panels, and medical devices, adding fundamental demand drivers." },
  { Icon: IconTrendingUp,  title: "Inflation Hedge",     desc: "Precious metals are widely regarded as a potential hedge against inflation and currency devaluation over the long term." },
  { Icon: IconBarChart,    title: "USD Sensitivity",     desc: "Gold and Silver are priced in USD, making them directly sensitive to US Dollar movements and Federal Reserve policy." },
  { Icon: IconBolt,        title: "High Volatility",     desc: "Metals can move sharply on economic data, geopolitical events, and central bank decisions — creating active trading opportunities." },
  { Icon: IconRefresh,     title: "Long or Short",       desc: "Trade CFDs on Gold and Silver in both directions — profit from both rising and falling precious metal prices." },
];

/* FAQs imported from data/faqs.ts */

export default function MetalsPage() {
  return (
    <>
      <PageHero badge="Precious Metals" title="Trade Gold & Silver CFDs" subtitle="Speculate on Gold (XAUUSD) and Silver (XAGUSD) with tight spreads and leverage up to 1:200. No physical ownership required." breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Metals" }]} cta={{ label: "Start Trading Metals", href: "https://direct.ollatrade.com/auth/register" }} stats={[{ value: "2", label: "Instruments" }, { value: "25 pts", label: "Gold Spread" }, { value: "1:200", label: "Max Leverage" }]} />

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[["XAUUSD", "Gold vs US Dollar"], ["XAGUSD", "Silver vs US Dollar"], ["24/5", "Trading availability"], ["1:200", "Max leverage on Gold"]].map(([v, d]) => (
              <div key={v} className="border border-gray-100 rounded-xl p-5 text-center">
                <div className="text-xl font-extrabold text-[#111827] mb-1">{v}</div>
                <div className="text-[12px] text-gray-400">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">Tradable Metals Instruments</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { sym: "XAUUSD", name: "Gold", desc: "Gold is the world's most traded precious metal and a traditional safe-haven asset. Its price is influenced by USD strength, inflation expectations, central bank reserves, and global risk sentiment. Gold CFDs allow speculation on its price without physical ownership.", specs: [["Spread","From 25 points"],["Leverage","Up to 1:200"],["Min Trade","0.01 lots"],["Quote Unit","USD per troy oz"],["Hours","Mon–Fri, 24h"]] },
              { sym: "XAGUSD", name: "Silver", desc: "Silver is both a precious metal and an industrial commodity used extensively in electronics, solar technology, and medical applications. Silver often follows gold's movements with higher volatility, offering dynamic trading opportunities.", specs: [["Spread","From 50 points"],["Leverage","Up to 1:100"],["Min Trade","0.01 lots"],["Quote Unit","USD per troy oz"],["Hours","Mon–Fri, 24h"]] },
            ].map((m) => (
              <div key={m.sym} className="bg-white rounded-2xl border border-gray-100 p-7">
                <div className="mb-4">
                  <div className="text-2xl font-extrabold text-[#111827]">{m.sym}</div>
                  <div className="text-[13px] text-gray-400">{m.name}</div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-5">{m.desc}</p>
                <div className="space-y-2">
                  {m.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-gray-50 text-[13px]">
                      <span className="text-gray-400">{k}</span><span className="font-semibold text-[#111827]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <TradingConditionsTable title="Metals Trading Conditions" headers={["Instrument","Spread From","Leverage","Min Size","Hours"]} rows={conditions} highlightCol={2} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Why Trade Precious Metals?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Gold and Silver offer unique trading characteristics driven by macro forces, safe-haven demand, and industrial fundamentals.</p>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      <section className="py-8 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Metals Trading Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Precious metals prices can be highly volatile and subject to sudden large movements. Leverage amplifies both potential profits and losses. It is possible to lose your entire deposit. Past performance is not indicative of future results.</p>
          </div>
        </div>
      </section>

      <FAQSection title="Metals Trading FAQs" faqs={metalsFaqs} />
      <CTASection title="Trade Gold & Silver with Olla Trade" subtitle="Open your account and access precious metals markets with competitive conditions." primaryLabel="Open Account" secondaryLabel="View All Markets" secondaryHref="/markets" />
    </>
  );
}
