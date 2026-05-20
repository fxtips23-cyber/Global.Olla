import { stocksFaqs } from '../../data/faqs';
import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import TradingConditionsTable from "../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../components/ui/FeatureGrid";
import { IconBarChart, IconRefresh, IconPercent, IconGlobe, IconDollar, IconNewspaper } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "Stocks CFD Trading", description: "Trade 1,000+ global stock CFDs including Apple, Tesla, Amazon, Google and Microsoft with Olla Trade." };

const popularStocks = [
  { Symbol: "AAPL", Company: "Apple Inc.",       Sector: "Technology",     Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "TSLA", Company: "Tesla Inc.",        Sector: "EV / Technology",Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "AMZN", Company: "Amazon.com Inc.",   Sector: "E-Commerce",     Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "GOOGL",Company: "Alphabet (Google)", Sector: "Technology",     Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "MSFT", Company: "Microsoft Corp.",   Sector: "Technology",     Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "META", Company: "Meta Platforms",    Sector: "Social Media",   Exchange: "NASDAQ", Leverage: "1:10" },
];

const whyFeatures = [
  { Icon: IconBarChart,  title: "No Share Ownership Required", desc: "Trade on price of Apple, Tesla, and others without the complexity of buying actual shares." },
  { Icon: IconRefresh,   title: "Long or Short",               desc: "Profit from rising prices by buying or from falling prices by selling — full directional flexibility." },
  { Icon: IconPercent,   title: "Leverage on Equities",        desc: "Control larger stock positions with a fraction of the capital needed using leverage up to 1:10." },
  { Icon: IconGlobe,     title: "Global Exposure",             desc: "Access 1,000+ stocks across US, European, and Asian markets from a single MT4 account." },
  { Icon: IconDollar,    title: "No Share Purchase Commission", desc: "As CFDs, you don't pay a traditional broker commission — only the spread applies." },
  { Icon: IconNewspaper, title: "Trade Earnings Season",       desc: "Company results, product launches, and corporate news create significant short-term price movements." },
];

const faqs = [
  { q: "What is a stock CFD?", a: "A stock CFD allows you to speculate on the price of a company's share without owning the underlying stock. You profit or lose based on price direction." },
  { q: "Do I receive dividends on stock CFDs?", a: "Stock CFD traders may receive dividend adjustments (credited or debited) when a company pays a dividend, depending on long or short position at the ex-dividend date." },
  { q: "What leverage is available on stock CFDs?", a: "Olla Trade offers leverage up to 1:10 on stock CFDs. Due to the volatility of individual equities, conservative position sizing and stop-loss orders are strongly recommended." },
  { q: "Can I short a stock with Olla Trade?", a: "Yes. With stock CFDs you can go short if you believe a company's share price will fall — a key advantage over buying physical shares." },
  { q: "What hours can I trade stocks?", a: "Stock CFD trading follows the hours of the underlying exchange (NYSE/NASDAQ for US stocks, LSE for UK stocks). Check your MT4 instrument specifications for current hours." },
];

export default function StocksPage() {
  return (
    <>
      <PageHero badge="Global Equities" title="Trade 1,000+ Stock CFDs" subtitle="Go long or short on leading global companies — Apple, Tesla, Amazon, and more — without owning physical shares. Leverage up to 1:10." breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Stocks" }]} cta={{ label: "Start Trading Stocks", href: "https://direct.ollatrade.com/auth/register" }} stats={[{ value: "1,000+", label: "Global Stocks" }, { value: "1:10", label: "Max Leverage" }, { value: "3 Regions", label: "US / EU / Asia" }]} />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Markets Coverage</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Access 1,000+ stocks from major global exchanges — all from your single Olla Trade MT4 account.</p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { region: "United States",      exchanges: "NYSE, NASDAQ",        examples: "Apple, Tesla, Amazon, Google, Microsoft, Meta, Netflix, JPMorgan, Nvidia, Visa" },
              { region: "Europe",             exchanges: "LSE, DAX, CAC, AEX",  examples: "HSBC, BP, Shell, Volkswagen, Siemens, LVMH, Airbus, SAP, Unilever, Nestlé" },
              { region: "Asia & Emerging",    exchanges: "Hang Seng, ASX",      examples: "Alibaba, Tencent, Samsung, TSMC, Toyota, Sony, BHP, Commonwealth Bank" },
            ].map((m) => (
              <div key={m.region} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-[14px] font-bold text-[#111827] mb-1">{m.region}</h3>
                <div className="text-[11px] text-[#1E88E5] font-semibold mb-3">{m.exchanges}</div>
                <p className="text-[13px] text-gray-500 leading-relaxed">{m.examples}</p>
              </div>
            ))}
          </div>
          <TradingConditionsTable title="Popular Stock CFDs (Indicative)" headers={["Symbol","Company","Sector","Exchange","Leverage"]} rows={popularStocks} highlightCol={4} />
          <p className="text-[11px] text-gray-400 text-center mt-3">Full instrument list available in your MT4 platform. Availability may vary.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">Why Trade Stock CFDs?</h2>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      <section className="py-8 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Stock CFD Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Individual stock prices can be highly volatile, especially around earnings and corporate events. Stock CFD trading involves risk of substantial loss. Leverage amplifies both gains and losses.</p>
          </div>
        </div>
      </section>

      <FAQSection title="Stock CFD FAQs" faqs={stocksFaqs} />
      <CTASection title="Trade 1,000+ Global Stocks" subtitle="Open your Olla Trade account and access equity markets worldwide from MT4." primaryLabel="Open Account" secondaryLabel="Compare Accounts" secondaryHref="/trading/accounts" />
    </>
  );
}
