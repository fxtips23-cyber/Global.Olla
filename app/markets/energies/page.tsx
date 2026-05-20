import { energiesFaqs } from '../../data/faqs';
import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import TradingConditionsTable from "../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../components/ui/FeatureGrid";
import { IconBuilding, IconBarChart, IconGlobe, IconDollar, IconActivity, IconRefresh } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "Energies Trading — Oil & Gas CFDs", description: "Trade Brent Crude and WTI Crude Oil CFDs with Olla Trade. Competitive spreads and leverage up to 1:100." };

const conditions = [
  { Instrument: "Brent Crude (XBRENT)", Type: "Crude Oil CFD", "Spread From": "3 points", Leverage: "1:100", "Min Size": "0.01 lots", "Quote": "USD/barrel" },
  { Instrument: "WTI Crude (XWTI)",     Type: "Crude Oil CFD", "Spread From": "3 points", Leverage: "1:100", "Min Size": "0.01 lots", "Quote": "USD/barrel" },
];

const drivers = [
  { Icon: IconBuilding, title: "OPEC+ Decisions",   desc: "Production quotas set by OPEC+ members have a direct and immediate impact on global oil supply and prices." },
  { Icon: IconBarChart, title: "US Inventories",    desc: "Weekly EIA crude oil inventory reports are closely watched market-moving events for WTI and Brent prices." },
  { Icon: IconGlobe,    title: "Geopolitical Risk", desc: "Conflicts, sanctions, and political instability in oil-producing regions can cause sudden price spikes." },
  { Icon: IconDollar,   title: "USD Correlation",   desc: "Oil is priced in USD — a stronger dollar typically puts downward pressure on oil prices and vice versa." },
  { Icon: IconActivity, title: "Demand Outlook",    desc: "Economic growth data, particularly from China and the US, directly influences energy demand and price projections." },
  { Icon: IconRefresh,  title: "Supply Dynamics",   desc: "Seasonal patterns, refinery capacity, and strategic reserve levels all influence short-term oil price dynamics." },
];

const faqs = [
  { q: "What is the difference between Brent and WTI?", a: "Brent Crude is extracted from the North Sea and serves as the global benchmark. WTI is the North American benchmark — slightly lighter and sweeter. Brent typically trades at a slight premium to WTI." },
  { q: "What moves crude oil prices?", a: "Oil prices are driven by OPEC+ production decisions, US EIA inventory reports, geopolitical events in oil-producing regions, global growth data, USD strength, and seasonal demand factors." },
  { q: "Can I trade oil without physical delivery?", a: "Yes. Olla Trade offers oil CFDs — you speculate on price movements without any physical delivery. You simply profit or lose based on price direction." },
  { q: "What leverage is available on energy CFDs?", a: "Olla Trade offers leverage up to 1:100 on energy instruments. This amplifies both gains and losses in proportion to your position size." },
];

export default function EnergiesPage() {
  return (
    <>
      <PageHero badge="Energy Markets" title="Trade Oil & Energy CFDs" subtitle="Speculate on global energy markets with Brent Crude and WTI Crude Oil CFDs. Leverage up to 1:100 with no physical delivery required." breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Energies" }]} cta={{ label: "Start Trading Energies", href: "https://direct.ollatrade.com/auth/register" }} stats={[{ value: "2", label: "Energy Instruments" }, { value: "3 pts", label: "Spread From" }, { value: "1:100", label: "Max Leverage" }]} />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { sym: "XBRENT", name: "Brent Crude Oil", desc: "Brent Crude is the world's primary oil price benchmark, sourced from the North Sea. It represents over two-thirds of internationally traded crude oil contracts and is widely used as the global reference price.", specs: [["Spread","From 3 points"],["Leverage","Up to 1:100"],["Quote","USD per barrel"],["Benchmark","North Sea crude"],["Hours","Mon–Fri, 24h"]] },
              { sym: "XWTI",   name: "WTI Crude Oil",   desc: "West Texas Intermediate (WTI) is the primary North American oil benchmark, traded on the NYMEX. It is lighter and sweeter than Brent, produced in the US Permian Basin, and closely followed for signals about US domestic energy production.", specs: [["Spread","From 3 points"],["Leverage","Up to 1:100"],["Quote","USD per barrel"],["Benchmark","North American crude"],["Hours","Mon–Fri, 24h"]] },
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
          <TradingConditionsTable title="Crude Oil CFD Conditions" headers={["Instrument","Type","Spread From","Leverage","Min Size","Quote"]} rows={conditions} highlightCol={3} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">What Drives Oil Prices?</h2>
          <FeatureGrid features={drivers} cols={3} />
        </div>
      </section>

      <section className="py-8 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Energy CFD Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Energy prices are highly volatile and sensitive to geopolitical events, OPEC decisions, and economic data. Prices can move rapidly and sharply. Leverage amplifies losses. Not suitable for all investors.</p>
          </div>
        </div>
      </section>

      <FAQSection title="Energy Trading FAQs" faqs={energiesFaqs} />
      <CTASection title="Trade Crude Oil with Olla Trade" subtitle="Open your account and access energy markets with professional conditions." primaryLabel="Open Account" secondaryLabel="View All Markets" secondaryHref="/markets" />
    </>
  );
}
