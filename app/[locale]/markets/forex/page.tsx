import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconDroplet, IconClock, IconPercent, IconRefresh, IconCode, IconLayers } from "../../../components/ui/Icons";
import { forexFaqs } from "../../../data/faqs";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Forex Trading — 70+ Currency Pairs",
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
  { session: "Sydney",   opens: "00:00 GMT+2", closes: "09:00 GMT+2", pairs: ["AUD/USD","NZD/USD"],  color: "#1E88E5" },
  { session: "Tokyo",    opens: "03:00 GMT+2", closes: "12:00 GMT+2", pairs: ["USD/JPY","AUD/JPY"],  color: "#AB47BC" },
  { session: "London",   opens: "10:00 GMT+2", closes: "19:00 GMT+2", pairs: ["EUR/USD","GBP/USD"],  color: "#00CC44" },
  { session: "New York", opens: "15:00 GMT+2", closes: "24:00 GMT+2", pairs: ["EUR/USD","USD/CAD"],  color: "#FF7043" },
];

const whyFeatures = [
  { Icon: IconDroplet, title: "Deepest Liquidity",  desc: "Over $6 trillion traded daily — enter and exit positions at any time with minimal price impact on major pairs." },
  { Icon: IconClock,   title: "24/5 Market Access", desc: "Trade from Monday's Asian open through Friday's New York close across all four major sessions." },
  { Icon: IconPercent, title: "Tight Spreads",      desc: "Major pairs like EUR/USD from 0.0 pips — one of the most cost-efficient markets available to retail traders." },
  { Icon: IconRefresh, title: "Go Long or Short",   desc: "CFD structure lets you profit from both rising and falling currency prices — no restriction on direction." },
  { Icon: IconCode,    title: "EA-Friendly",        desc: "Deep liquidity and tight spreads make Forex ideal for automated Expert Advisor strategies on MT4." },
  { Icon: IconLayers,  title: "70+ Pairs",          desc: "Trade majors, minors, and exotic pairs — each with different volatility, spread, and session characteristics." },
];

const macroDrivers = [
  { label: "Interest Rate Decisions",   desc: "Central bank rate changes are the single biggest mover of currency pairs. Higher rates attract capital inflows and typically strengthen a currency." },
  { label: "Inflation Data (CPI/PPI)",  desc: "Inflation prints directly influence central bank expectations and currency strength. A hotter-than-expected CPI often boosts the base currency." },
  { label: "Employment Reports",        desc: "Non-Farm Payrolls (US), unemployment rate, and jobs data reflect economic health and drive USD pairs significantly." },
  { label: "GDP Growth",                desc: "Stronger economic output supports a currency's value. GDP beats vs expectations can trigger sharp moves in major pairs." },
  { label: "Political & Geopolitical",  desc: "Elections, sanctions, trade policies, and geopolitical conflicts create uncertainty that can sharply move safe-haven currencies like USD, JPY, and CHF." },
  { label: "Trade Balance / Current Account", desc: "A country's export/import balance reflects demand for its currency. Persistent trade deficits often weigh on currency value over time." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function ForexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
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

      {/* ── Market overview stats ─────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[["$6.6 Trillion","Daily global FX volume"],["70+","Currency pairs available"],["0.0 pips","Min spread (Elite account)"],["24/5","Market open hours"]].map(([v,d])=>(
              <div key={v} className="border border-gray-100 rounded-xl p-5 text-center hover:border-[#00CC44]/20 transition-colors">
                <div className="text-xl font-extrabold text-[#111827] mb-1">{v}</div>
                <div className="text-[12px] text-gray-400 leading-snug">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Currency pair categories ──────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Pair Categories</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Major, Minor & Exotic Pairs</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">Olla Trade offers access to all three Forex pair categories — each with distinct liquidity, spread, and volatility profiles.</p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { type: "Major Pairs",  badge: "Tightest Spreads", color: "#00CC44", bgColor: "rgba(0,204,68,0.06)", borderColor: "rgba(0,204,68,0.2)",  desc: "The most traded currency pairs globally, all including the USD as base or quote. Deepest liquidity, tightest spreads, and most active during US and London sessions.", pairs: ["EUR/USD","GBP/USD","USD/JPY","USD/CAD","AUD/USD","USD/CHF"] },
              { type: "Minor Pairs",  badge: "Cross Currencies", color: "#1E88E5", bgColor: "rgba(30,136,229,0.06)", borderColor: "rgba(30,136,229,0.2)", desc: "Cross-currency pairs that exclude USD. Well-traded during their regional sessions with good liquidity and moderate spreads. Include EUR, GBP, and JPY crosses.", pairs: ["EUR/GBP","EUR/JPY","GBP/JPY","AUD/JPY","EUR/AUD","CHF/JPY"] },
              { type: "Exotic Pairs", badge: "Higher Volatility", color: "#FF7043", bgColor: "rgba(255,112,67,0.06)",  borderColor: "rgba(255,112,67,0.2)",  desc: "A major currency paired with an emerging market currency. Characterised by higher spreads, wider volatility, and fewer active trading hours. Suitable for experienced traders.", pairs: ["USD/TRY","USD/ZAR","EUR/NOK","USD/MXN","USD/SGD","GBP/SEK"] },
            ].map((cat) => (
              <div key={cat.type} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[15px] font-bold text-[#111827]">{cat.type}</h3>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: cat.bgColor, color: cat.color, border: `1px solid ${cat.borderColor}` }}>
                    {cat.badge}
                  </span>
                </div>
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

      {/* ── Major pairs conditions table ──────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Live Conditions</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Major Pairs — Trading Conditions</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Spreads are variable. Figures shown are indicative under normal market conditions.</p>
          <TradingConditionsTable headers={["Symbol","Description","Spread","Leverage","Margin %"]} rows={majors} highlightCol={2} />
          <p className="text-[11px] text-gray-400 text-center mt-3">Spreads may widen during high-volatility periods, major news events, or outside primary market sessions.</p>
        </div>
      </section>

      {/* ── Trading sessions ─────────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Market Hours</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Four Global Trading Sessions</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Forex trades 24 hours a day, 5 days a week. Each session has distinct liquidity levels and most-active pairs. Overlap periods (London/New York) typically see the highest volume.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {sessions.map((s) => (
              <div key={s.session} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                <div className="w-3 h-3 rounded-full mb-4 flex-shrink-0" style={{ background: s.color }} />
                <h3 className="text-[15px] font-bold text-white mb-3">{s.session}</h3>
                <div className="space-y-1.5 text-[12px] mb-4">
                  <div className="flex justify-between"><span className="text-white/35">Opens</span><span className="text-white/65 font-medium">{s.opens}</span></div>
                  <div className="flex justify-between"><span className="text-white/35">Closes</span><span className="text-white/65 font-medium">{s.closes}</span></div>
                </div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Most active</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.pairs.map((p) => (
                    <span key={p} className="text-[11px] font-mono px-2 py-0.5 rounded" style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}30` }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/4 border border-white/8 rounded-2xl p-5 text-center">
            <div className="text-[13px] text-white/55 leading-relaxed">
              <strong className="text-white/75">Peak liquidity</strong> occurs during the London–New York overlap (15:00–19:00 GMT+2). During this window, EUR/USD, GBP/USD, and USD/JPY typically see the tightest spreads and largest volumes.
            </div>
          </div>
        </div>
      </section>

      {/* ── What moves Forex — macro drivers ─────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Market Analysis</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">What Moves Currency Prices?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">Forex prices are driven by macroeconomic fundamentals, central bank policy, and global capital flows. Understanding these forces is key to developing a sound trading approach.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {macroDrivers.map(({ label, desc }, i) => (
              <div key={label} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-[#00CC44]/8 border border-[#00CC44]/15 text-[#00CC44] flex items-center justify-center flex-shrink-0 text-[11px] font-black mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#111827] mb-1">{label}</h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Understanding pips & spreads ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Forex Fundamentals</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">Understanding Pips & Spreads</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                A <strong className="text-[#111827]">pip</strong> (percentage in point) is the smallest standard price movement in Forex. For most pairs, 1 pip = 0.0001. For JPY pairs, 1 pip = 0.01.
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                The <strong className="text-[#111827]">spread</strong> is the difference between the bid (sell) price and the ask (buy) price — it represents the cost of opening a trade. Variable spreads reflect live market conditions and may widen during news events or low-liquidity periods.
              </p>
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-xl p-5 text-[13px] text-gray-600 leading-relaxed">
                <strong className="text-[#111827] block mb-1">Example:</strong>
                EUR/USD Bid: 1.08420 | Ask: 1.08425 = <strong className="text-[#00CC44]">0.5 pip spread</strong><br/>
                If you buy 1 lot (100,000 units), 1 pip = $10 profit or loss.
              </div>
            </div>
            <div className="space-y-3">
              {[
                { term: "Pip",              def: "Smallest price movement. 0.0001 for most pairs (0.01 for JPY pairs)." },
                { term: "Pipette",          def: "1/10th of a pip. Many brokers quote prices to 5 decimal places." },
                { term: "Spread",           def: "Difference between bid and ask price. Represents the cost of opening a trade." },
                { term: "Lot Size",         def: "Standard lot = 100,000 units. Mini lot = 10,000. Micro lot = 1,000." },
                { term: "Margin",           def: "Collateral required to open a leveraged position. Expressed as a percentage of position size." },
                { term: "Swap / Rollover",  def: "Overnight financing cost or credit applied to positions held past market close." },
                { term: "Slippage",         def: "Difference between expected and actual execution price. Common during news events." },
              ].map(({ term, def }) => (
                <div key={term} className="flex items-start gap-3 border-b border-gray-50 pb-3">
                  <span className="text-[13px] font-bold text-[#111827] w-32 flex-shrink-0">{term}</span>
                  <span className="text-[13px] text-gray-500">{def}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why trade Forex ──────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Why Trade Forex?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">The world's largest and most liquid financial market — unmatched access, flexibility, and opportunity.</p>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Forex Trading Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Forex trading involves substantial risk of loss. Leverage amplifies both potential profits and potential losses. It is possible to lose more than your initial deposit. Only trade with funds you can afford to lose. Spreads may vary under different market conditions. Past performance is not indicative of future results. Olla Trade Ltd. operates as an execution-only service and does not provide investment advice.</p>
          </div>
        </div>
      </section>

      <FAQSection title="Forex Trading FAQs" faqs={forexFaqs} />
      <CTASection
        title="Start Trading Forex Today"
        subtitle="Open your account and access 70+ currency pairs with tight spreads, 1:500 leverage, and full MT4 support."
        primaryLabel="Open Account"
        secondaryLabel="Compare Accounts"
        secondaryHref="/trading/accounts"
      />
    </>
  );
}
