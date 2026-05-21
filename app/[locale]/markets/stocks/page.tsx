import { stocksFaqs } from "../../../data/faqs";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconBarChart, IconRefresh, IconPercent, IconGlobe, IconDollar, IconNewspaper } from "../../../components/ui/Icons";

export const metadata: Metadata = {
  title: "Global Stock CFD Trading — 1,000+ Equities",
  description: "Trade 1,000+ global stock CFDs including Apple, Tesla, Amazon, Google and Microsoft with Olla Trade. Long or short, leverage up to 1:10.",
};

const popularStocks = [
  { Symbol: "AAPL",  Company: "Apple Inc.",        Sector: "Technology",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "TSLA",  Company: "Tesla Inc.",         Sector: "EV / Technology", Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "AMZN",  Company: "Amazon.com Inc.",    Sector: "E-Commerce",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "GOOGL", Company: "Alphabet (Google)",  Sector: "Technology",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "MSFT",  Company: "Microsoft Corp.",    Sector: "Technology",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "META",  Company: "Meta Platforms",     Sector: "Social Media",    Exchange: "NASDAQ", Leverage: "1:10" },
];

const whyFeatures = [
  { Icon: IconBarChart,  title: "No Share Ownership Needed", desc: "Trade Apple, Tesla, Amazon and others on price movement — no share registry, no custodian, no settlement delay." },
  { Icon: IconRefresh,   title: "Long or Short",              desc: "Go long when you anticipate price rises; go short when you expect declines — full two-directional trading flexibility." },
  { Icon: IconPercent,   title: "Leverage on Equities",       desc: "Control larger stock positions with a fraction of the capital using leverage up to 1:10 on eligible stocks." },
  { Icon: IconGlobe,     title: "Global Coverage",            desc: "1,000+ stocks across US, UK, European, and Asian markets from a single Olla Trade MT4 account." },
  { Icon: IconDollar,    title: "No Commission Structure",    desc: "As CFDs, no traditional brokerage commission applies — the cost is embedded in the spread only." },
  { Icon: IconNewspaper, title: "Earnings Season Trading",    desc: "Company results, product launches, and corporate announcements create significant short-term price opportunities." },
];

const howCFDWorks = [
  { step: "01", title: "Choose a Stock",    desc: "Select from 1,000+ global stocks available in your MT4 instrument list. Search by company name or ticker symbol." },
  { step: "02", title: "Select Direction",  desc: "Decide whether you expect the stock's price to rise (Buy/Long) or fall (Sell/Short). CFDs allow both directions equally." },
  { step: "03", title: "Set Position Size", desc: "Choose your lot size (minimum 0.01 lots). Your required margin is automatically calculated based on leverage and position size." },
  { step: "04", title: "Set Risk Controls", desc: "Apply a Stop Loss to cap your maximum loss and a Take Profit to lock in gains at a target price. Both are optional but recommended." },
  { step: "05", title: "Monitor Position",  desc: "Track your open position in real-time via MT4. Floating P&L updates live as the stock price moves." },
  { step: "06", title: "Close the Trade",   desc: "Close manually when your target is reached, or allow Stop Loss / Take Profit to close automatically at predefined levels." },
];

const sectors = [
  { sector: "Technology",          examples: "Apple, Microsoft, Nvidia, AMD, Salesforce, Adobe",       note: "Highly sensitive to interest rates, Fed policy, and earnings growth expectations." },
  { sector: "Consumer Discretionary", examples: "Amazon, Tesla, Nike, McDonald's, Starbucks, Netflix", note: "Driven by consumer spending data, economic growth, and disposable income trends." },
  { sector: "Financial Services",  examples: "JPMorgan, Visa, Bank of America, Goldman Sachs",         note: "Sensitive to interest rate direction, credit conditions, and regulatory environment." },
  { sector: "Healthcare",          examples: "Johnson & Johnson, UnitedHealth, Pfizer, Abbott",         note: "Driven by clinical trial results, drug approvals, and healthcare policy changes." },
  { sector: "Energy",              examples: "ExxonMobil, Chevron, Shell, BP, TotalEnergies",          note: "Closely correlated with crude oil and natural gas prices." },
  { sector: "Communication Svcs.", examples: "Meta, Alphabet, T-Mobile, Walt Disney, Comcast",         note: "Advertising revenue trends, streaming adoption, and platform regulatory risk." },
];

export default function StocksPage() {
  return (
    <>
      <PageHero
        badge="Global Equities"
        title="Trade 1,000+ Stock CFDs"
        subtitle="Go long or short on leading global companies — Apple, Tesla, Amazon, and more — without owning physical shares. Leverage up to 1:10 on MT4."
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Stocks" }]}
        cta={{ label: "Start Trading Stocks", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[{ value: "1,000+", label: "Global Stocks" }, { value: "1:10", label: "Max Leverage" }, { value: "3 Regions", label: "US / EU / Asia" }]}
      />

      {/* ── Regional coverage ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Market Coverage</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Global Stock Coverage</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Access 1,000+ stocks from major exchanges across three regions — all from your single Olla Trade MT4 account.</p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { region: "United States",   flag: "🇺🇸", exchanges: "NYSE · NASDAQ", count: "700+", examples: "Apple, Tesla, Amazon, Google, Microsoft, Meta, Netflix, Nvidia, JPMorgan, Visa", hours: "14:30–21:00 UTC (Mon–Fri)" },
              { region: "Europe",          flag: "🇪🇺", exchanges: "LSE · DAX · CAC · AEX", count: "200+", examples: "HSBC, BP, Shell, Volkswagen, Siemens, LVMH, Airbus, SAP, Unilever, ASML", hours: "08:00–16:30 UTC (Mon–Fri)" },
              { region: "Asia & Other",    flag: "🌏", exchanges: "Hang Seng · ASX · Other", count: "100+", examples: "Alibaba, Tencent, Samsung, TSMC, Toyota, Sony, BHP, Commonwealth Bank", hours: "Varies by exchange" },
            ].map((m) => (
              <div key={m.region} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{m.flag}</span>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#111827]">{m.region}</h3>
                    <div className="text-[11px] text-[#1E88E5] font-semibold">{m.exchanges}</div>
                  </div>
                  <span className="ml-auto text-[13px] font-bold text-[#00CC44]">{m.count}</span>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-3">{m.examples}</p>
                <div className="text-[11px] text-gray-400">Hours: {m.hours}</div>
              </div>
            ))}
          </div>
          <TradingConditionsTable title="Popular Stock CFDs (Indicative)" headers={["Symbol","Company","Sector","Exchange","Leverage"]} rows={popularStocks} highlightCol={4} />
          <p className="text-[11px] text-gray-400 text-center mt-3">Full instrument list available in MT4. Stock CFD availability may vary. Trading follows underlying exchange hours.</p>
        </div>
      </section>

      {/* ── How stock CFDs work ───────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Trading Guide</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">How Stock CFD Trading Works</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Stock CFDs track the underlying company's share price. You speculate on price movement without owning shares, registering with a stock exchange, or waiting for settlement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {howCFDWorks.map(({ step, title, desc }) => (
              <div key={step} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                <div className="text-[28px] font-black text-white/8 mb-3 leading-none">{step}</div>
                <h4 className="text-[14px] font-bold text-white mb-2">{title}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector breakdown ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Market Sectors</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Trading by Sector</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Different sectors respond to different economic conditions. Understanding sector dynamics helps with stock selection and timing.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {sectors.map(({ sector, examples, note }) => (
              <div key={sector} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all">
                <h4 className="text-[13px] font-bold text-[#111827] mb-2">{sector}</h4>
                <p className="text-[11px] text-[#00AA38] font-medium mb-2 leading-relaxed">{examples}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          {/* Dividend adjustment explanation */}
          <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-7">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-3">Important: Dividend Adjustments</div>
            <div className="grid md:grid-cols-2 gap-6 text-[13px] text-gray-600 leading-relaxed">
              <div>
                <p className="mb-3">When a company pays a dividend, a corresponding adjustment is applied to open Stock CFD positions on the ex-dividend date. This reflects the dividend impact on the underlying share price.</p>
                <p>If you hold a <strong className="text-[#111827]">long position</strong> on ex-dividend date, a dividend credit is applied to your account (equivalent to the dividend amount per share).</p>
              </div>
              <div>
                <p className="mb-3">If you hold a <strong className="text-[#111827]">short position</strong>, a dividend debit is applied to your account — reflecting the obligation a short seller would have on the underlying shares.</p>
                <p className="text-[12px] text-gray-400">Dividend adjustments are made at end-of-day on the ex-dividend date and appear in the account statement. The amount depends on your position size and the declared dividend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why trade stocks ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Why Trade Stock CFDs?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Combine the price exposure of equity markets with the flexibility and efficiency of CFD trading.</p>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Stock CFD Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Individual stock prices can be highly volatile, especially around earnings announcements, corporate events, and macroeconomic releases. Stock CFD trading involves risk of substantial loss. Leverage amplifies both gains and losses. Trading follows underlying exchange hours — spreads may widen at open and close. Past performance is not indicative of future results.</p>
          </div>
        </div>
      </section>

      <FAQSection title="Stock CFD FAQs" faqs={stocksFaqs} />
      <CTASection
        title="Trade 1,000+ Global Stocks"
        subtitle="Open your Olla Trade account and access equity markets worldwide from MetaTrader 4 — long or short, with leverage up to 1:10."
        primaryLabel="Open Account"
        secondaryLabel="Compare Accounts"
        secondaryHref="/trading/accounts"
      />
    </>
  );
}
