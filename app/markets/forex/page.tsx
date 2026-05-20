import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import TradingConditionsTable from "../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../components/ui/FeatureGrid";
import { IconDroplet, IconClock, IconPercent, IconRefresh, IconCode, IconLayers } from "../../components/ui/Icons";
import { forexFaqs } from "../../data/faqs";

export const metadata: Metadata = {
  title: "Forex Trading",
  description: "Trade 70+ Forex currency pairs with Olla Trade. Spreads from 0.0 pips, leverage up to 1:500, and 24/5 market access on MetaTrader 4.",
};

const majors = [
  { Symbol: "EUR/USD", Description: "Euro / US Dollar",           Spread: "From 0.0 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "GBP/USD", Description: "British Pound / Dollar",     Spread: "From 0.0 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "USD/JPY", Description: "US Dollar / Japanese Yen",   Spread: "From 0.0 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "AUD/USD", Description: "Australian Dollar / Dollar", Spread: "From 0.1 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "USD/CAD", Description: "US Dollar / Canadian Dollar",Spread: "From 0.1 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "USD/CHF", Description: "US Dollar / Swiss Franc",    Spread: "From 0.1 pips", Leverage: "1:500", "Margin %": "0.20%" },
];

const sessions = [
  { session: "Sydney",   opens: "00:00 GMT+2", closes: "09:00 GMT+2", active: ["AUD/USD", "NZD/USD"] },
  { session: "Tokyo",    opens: "03:00 GMT+2", closes: "12:00 GMT+2", active: ["USD/JPY", "AUD/JPY"] },
  { session: "London",   opens: "10:00 GMT+2", closes: "19:00 GMT+2", active: ["EUR/USD", "GBP/USD"] },
  { session: "New York", opens: "15:00 GMT+2", closes: "24:00 GMT+2", active: ["EUR/USD", "USD/CAD"] },
];

const whyFeatures = [
  { Icon: IconDroplet, title: "Deepest Liquidity",  desc: "Over $6 trillion traded daily — enter and exit positions at any time with minimal price impact." },
  { Icon: IconClock,   title: "24/5 Market Access", desc: "Trade from Monday's Asian open through Friday's New York close across all major sessions." },
  { Icon: IconPercent, title: "Tight Spreads",      desc: "Major pairs like EUR/USD available from 0.0 pips — one of the most cost-efficient markets to trade." },
  { Icon: IconRefresh, title: "Go Long or Short",   desc: "CFD trading lets you profit from both rising and falling currency prices with equal ease." },
  { Icon: IconCode,    title: "EA-Friendly",        desc: "Forex's deep liquidity and tight spreads make it ideal for automated Expert Advisor strategies." },
  { Icon: IconLayers,  title: "70+ Pairs",          desc: "Trade majors, minors, and exotic pairs — each with different volatility and trading characteristics." },
];

/* FAQs imported from data/faqs.ts */

export default function ForexPage() {
  return (
    <>
      <PageHero
        badge="Forex Markets"
        title="Trade 70+ Forex Currency Pairs"
        subtitle="Access the world's most liquid market with tight spreads from 0.0 pips, leverage up to 1:500, and 24/5 trading on MetaTrader 4."
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Forex" }]}
        cta={{ label: "Start Trading Forex", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[{ value: "70+", label: "Currency Pairs" }, { value: "0.0", label: "Pips From" }, { value: "1:500", label: "Max Leverage" }]}
      />

      {/* Market overview */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[["$6.6 Trillion", "Daily trading volume"], ["70+", "Currency pairs available"], ["0.0 pips", "Min spread (Elite account)"], ["24/5", "Trading hours"]].map(([v, d]) => (
              <div key={v} className="border border-gray-100 rounded-xl p-5 text-center">
                <div className="text-xl font-extrabold text-[#111827] mb-1">{v}</div>
                <div className="text-[12px] text-gray-400 leading-snug">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pair categories */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">Currency Pair Categories</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { type: "Major Pairs",  desc: "Most traded pairs globally including USD as base or quote currency. Tightest spreads and deepest liquidity.", pairs: ["EUR/USD","GBP/USD","USD/JPY","USD/CAD","AUD/USD","USD/CHF"] },
              { type: "Minor Pairs",  desc: "Cross-currency pairs without USD. Still widely traded with good liquidity and moderate spreads.", pairs: ["EUR/GBP","EUR/JPY","GBP/JPY","AUD/JPY","EUR/AUD","CHF/JPY"] },
              { type: "Exotic Pairs", desc: "A major currency paired with an emerging market currency. Higher volatility and wider spreads.", pairs: ["USD/TRY","USD/ZAR","EUR/NOK","USD/MXN","USD/SGD","GBP/SEK"] },
            ].map((cat) => (
              <div key={cat.type} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-[#111827] mb-2">{cat.type}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.pairs.map((p) => (
                    <span key={p} className="text-[11px] bg-[#F5F7FA] border border-gray-200 text-gray-600 px-2.5 py-1 rounded-lg font-mono">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading conditions table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-8 text-center">Trading Conditions — Major Pairs</h2>
          <TradingConditionsTable headers={["Symbol","Description","Spread","Leverage","Margin %"]} rows={majors} highlightCol={2} />
          <p className="text-[11px] text-gray-400 text-center mt-3">Spreads are variable and may widen during high-volatility periods. Data is indicative only.</p>
        </div>
      </section>

      {/* Sessions */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Forex Trading Sessions</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">The Forex market operates 24/5. Different sessions offer different liquidity and volatility characteristics.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessions.map((s) => (
              <div key={s.session} className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="text-base font-bold text-[#111827] mb-3">{s.session}</h3>
                <div className="space-y-2 text-[13px] mb-4">
                  <div className="flex justify-between"><span className="text-gray-400">Opens</span><span className="font-medium text-[#111827]">{s.opens}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Closes</span><span className="font-medium text-[#111827]">{s.closes}</span></div>
                </div>
                <div className="text-[10px] text-gray-400 mb-2 uppercase tracking-wider">Most active</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.active.map((p) => <span key={p} className="text-[11px] bg-[#00CC44]/8 text-[#00AA38] border border-[#00CC44]/12 px-2 py-0.5 rounded font-mono">{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why trade Forex */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Why Trade Forex?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Forex is the world's largest and most liquid financial market — offering unmatched access, flexibility, and opportunity.</p>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      {/* Risk warning */}
      <section className="py-8 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Forex Trading Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Forex trading involves substantial risk of loss. Leverage amplifies both profits and losses. It is possible to lose more than your initial deposit. Only trade with funds you can afford to lose. Past performance is not indicative of future results. Olla Trade Ltd. operates as an execution-only service and does not provide investment advice.</p>
          </div>
        </div>
      </section>

      <FAQSection title="Forex Trading FAQs" faqs={forexFaqs} />
      <CTASection title="Start Trading Forex Today" subtitle="Open your account and access 70+ currency pairs with tight spreads and MT4." primaryLabel="Open Account" secondaryLabel="Compare Accounts" secondaryHref="/trading/accounts" />
    </>
  );
}
