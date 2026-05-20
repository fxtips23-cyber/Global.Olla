import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import TradingConditionsTable from "../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../components/ui/FeatureGrid";
import { indicesFaqs } from "../../data/faqs";
import { IconBarChart, IconNewspaper, IconRefresh, IconDroplet, IconPercent, IconCalculator } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "Indices Trading", description: "Trade global stock market indices including US30, NASDAQ, S&P500, DAX40 and FTSE100 with Olla Trade." };

const conditions = [
  { Index: "US30 (Dow Jones)",    Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots" },
  { Index: "NASDAQ",              Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots" },
  { Index: "SPX500 (S&P 500)",    Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots" },
  { Index: "DAX40",               Region: "Germany", "Spread From": "2 points", Leverage: "1:100", "Min Size": "0.01 lots" },
  { Index: "FTSE100",             Region: "UK",      "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots" },
  { Index: "NAS100 (Nasdaq 100)", Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots" },
];

const whyFeatures = [
  { Icon: IconBarChart,    title: "Broad Market Exposure", desc: "Trade the performance of entire economies or sectors with a single instrument." },
  { Icon: IconNewspaper,   title: "Event-Driven Moves",    desc: "Indices react sharply to earnings, central bank decisions, and geopolitical events." },
  { Icon: IconRefresh,     title: "Long or Short",         desc: "Go long if you expect markets to rise, or short if you anticipate a downturn." },
  { Icon: IconDroplet,     title: "Good Liquidity",        desc: "Major indices are among the most liquid instruments during their primary sessions." },
  { Icon: IconPercent,     title: "Leverage Available",    desc: "Access index positions with up to 1:100 leverage on eligible accounts." },
  { Icon: IconCalculator,  title: "Transparent Pricing",   desc: "Index prices are derived from the underlying basket of stocks — fully trackable." },
];

/* FAQs imported from data/faqs.ts */

export default function IndicesPage() {
  return (
    <>
      <PageHero badge="Global Indices" title="Trade World Stock Market Indices" subtitle="Access CFDs on the world's most important stock indices. Broad market exposure without buying individual stocks — leverage up to 1:100." breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Indices" }]} cta={{ label: "Start Trading Indices", href: "https://direct.ollatrade.com/auth/register" }} stats={[{ value: "10+", label: "Indices" }, { value: "1 pt", label: "Spread From" }, { value: "1:100", label: "Max Leverage" }]} />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">What are Stock Market Indices?</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { name: "US30 — Dow Jones",   region: "United States", desc: "Tracks 30 of the largest publicly traded US companies. One of the most watched barometers of US economic health." },
              { name: "NASDAQ",             region: "United States", desc: "Heavily weighted towards technology companies including Apple, Microsoft, Amazon, and Alphabet." },
              { name: "DAX40",              region: "Germany",       desc: "Represents 40 of the largest German companies — a key indicator of European economic performance." },
              { name: "SPX500 — S&P 500",   region: "United States", desc: "Tracks 500 large US companies across all sectors. Widely considered the most comprehensive US market measure." },
              { name: "FTSE100",            region: "United Kingdom",desc: "The 100 largest companies on the London Stock Exchange across finance, energy, and consumer goods." },
              { name: "NAS100 — Nasdaq 100",region: "United States", desc: "The 100 largest non-financial companies on the Nasdaq — concentrated in technology." },
            ].map((idx) => (
              <div key={idx.name} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{idx.region}</div>
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{idx.name}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{idx.desc}</p>
              </div>
            ))}
          </div>
          <TradingConditionsTable title="Index CFD Trading Conditions" headers={["Index","Region","Spread From","Leverage","Min Size"]} rows={conditions} highlightCol={3} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">Why Trade Indices?</h2>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      <section className="py-8 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Index CFD Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Index CFD trading involves risk of loss. Leverage amplifies both gains and losses. Markets can gap on open, especially after weekend closures. Availability follows underlying exchange schedules.</p>
          </div>
        </div>
      </section>

      <FAQSection title="Indices Trading FAQs" faqs={indicesFaqs} />
      <CTASection title="Trade Global Indices with Olla Trade" subtitle="Open your account and speculate on world markets with competitive spreads." primaryLabel="Open Account" secondaryLabel="Compare Accounts" secondaryHref="/trading/accounts" />
    </>
  );
}
