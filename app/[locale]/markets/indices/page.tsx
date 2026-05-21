import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconBarChart, IconNewspaper, IconRefresh, IconDroplet, IconPercent, IconCalculator } from "../../../components/ui/Icons";
import { indicesFaqs } from "../../../data/faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Stock Market Indices — CFD Trading",
  description: "Trade global stock market indices including US30, NASDAQ, S&P500, DAX40 and FTSE100 with Olla Trade. Leverage up to 1:100.",
};

const conditions = [
  { Index: "US30 (Dow Jones)",    Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
  { Index: "NASDAQ",              Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
  { Index: "SPX500 (S&P 500)",    Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
  { Index: "DAX40",               Region: "Germany", "Spread From": "2 points", Leverage: "1:100", "Min Size": "0.01 lots", Hours: "EU hours" },
  { Index: "FTSE100",             Region: "UK",      "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "UK hours" },
  { Index: "NAS100 (Nasdaq 100)", Region: "USA",     "Spread From": "1 point",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
];

const whyFeatures = [
  { Icon: IconBarChart,   title: "Broad Market Exposure",  desc: "Trade the performance of entire economies or sectors with a single instrument — no need to analyse individual stocks." },
  { Icon: IconNewspaper,  title: "Event-Driven Moves",     desc: "Earnings seasons, central bank decisions, and geopolitical events create significant index volatility and trading opportunity." },
  { Icon: IconRefresh,    title: "Long or Short",          desc: "Go long if you expect markets to rise, or short if you anticipate a market downturn — full directional flexibility." },
  { Icon: IconDroplet,    title: "Good Liquidity",         desc: "Major indices are among the most liquid instruments during their primary sessions — tight spreads and fast fills." },
  { Icon: IconPercent,    title: "Leverage Available",     desc: "Access index positions with up to 1:100 leverage — control larger positions with a fraction of full capital." },
  { Icon: IconCalculator, title: "Transparent Pricing",    desc: "Index prices are derived from the weighted basket of underlying stocks — fully transparent and trackable." },
];

const indexData = [
  { name: "US30 — Dow Jones",    region: "United States", color: "#1E88E5", composition: "30 large-cap US companies", sectors: "Finance, Industrials, Healthcare, Consumer", desc: "The oldest US index, tracking 30 blue-chip companies. Despite its smaller basket, it remains one of the world's most widely followed market indicators.", hours: "14:30–21:00 UTC" },
  { name: "NAS100 — Nasdaq 100", region: "United States", color: "#7C3AED", composition: "100 largest non-financial Nasdaq stocks", sectors: "Technology, Consumer Discretionary, Healthcare", desc: "Technology-heavy index covering companies like Apple, Microsoft, Amazon, Nvidia, and Meta. Highly sensitive to interest rates and tech sector performance.", hours: "14:30–21:00 UTC" },
  { name: "SPX500 — S&P 500",    region: "United States", color: "#00CC44", composition: "500 large US companies across all sectors", sectors: "All major sectors, diversified", desc: "The broadest US benchmark — 500 companies spanning all sectors. Widely regarded as the definitive gauge of US equity market performance.", hours: "14:30–21:00 UTC" },
  { name: "DAX40",               region: "Germany",        color: "#F59E0B", composition: "40 largest Frankfurt-listed companies", sectors: "Automotive, Finance, Chemicals, Industrial", desc: "Germany's flagship index. Key European market indicator. Sensitive to EUR/USD, global trade conditions, and European Central Bank policy.", hours: "08:00–16:30 UTC" },
  { name: "FTSE100",             region: "United Kingdom", color: "#EF4444", composition: "100 largest LSE-listed companies", sectors: "Finance, Energy, Consumer Goods, Mining", desc: "The UK's benchmark index. Internationally exposed — many components earn revenues globally, making it sensitive to GBP strength and commodity prices.", hours: "08:00–16:30 UTC" },
  { name: "NASDAQ",              region: "United States",  color: "#06B6D4", composition: "Composite of all Nasdaq-listed stocks", sectors: "Technology, Biotech, Consumer", desc: "Broader than NAS100, covering all Nasdaq listings. Reflects the performance of the entire Nasdaq exchange — tech-heavy but more diversified.", hours: "14:30–21:00 UTC" },
];

const marketMovers = [
  { factor: "Central Bank Policy",   desc: "Interest rate decisions from the Fed, ECB, and BoE directly affect equity valuations. Rate cuts are generally bullish for indices; rate hikes can weigh on equities." },
  { factor: "Corporate Earnings",    desc: "Quarterly earnings seasons drive significant index moves. Beats vs expectations from major index components can cause sharp directional moves." },
  { factor: "Economic Data Releases",desc: "GDP growth, employment figures, and manufacturing PMI data reflect economic health and directly influence equity market sentiment." },
  { factor: "Geopolitical Events",   desc: "Trade wars, military conflicts, and political instability create risk-off sentiment, typically pressuring equity indices lower." },
  { factor: "Currency Movements",    desc: "A weaker domestic currency often benefits export-heavy indices (DAX, FTSE). Currency strength can weigh on internationally-exposed companies." },
  { factor: "Commodity Prices",      desc: "Energy and materials prices significantly impact commodity-heavy indices like the FTSE100. Oil price moves affect energy sector weighting substantially." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function IndicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "markets.indices" });
  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Indices" }]}
        cta={{ label: "Start Trading Indices", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[{ value: "10+", label: "Indices" }, { value: "1 pt", label: "Spread From" }, { value: "1:100", label: "Max Leverage" }]}
      />

      {/* ── What are indices ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Index Overview</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Major Global Indices</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">Each index tracks a specific basket of stocks and reflects the performance of a market, economy, or sector. Trading index CFDs gives you exposure without purchasing individual shares.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {indexData.map((idx) => (
              <div key={idx.name} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{idx.region}</div>
                    <h3 className="text-[14px] font-bold text-[#111827]">{idx.name}</h3>
                  </div>
                  <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: idx.color }} />
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-3">{idx.desc}</p>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between"><span className="text-gray-400">Composition</span><span className="text-gray-600 text-right max-w-[55%]">{idx.composition}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Key Sectors</span><span className="text-gray-600 text-right max-w-[55%]">{idx.sectors}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Primary Hours</span><span className="font-semibold" style={{ color: idx.color }}>{idx.hours}</span></div>
                </div>
              </div>
            ))}
          </div>
          <TradingConditionsTable title="Index CFD Trading Conditions" headers={["Index","Region","Spread From","Leverage","Min Size","Hours"]} rows={conditions} highlightCol={3} />
          <p className="text-[11px] text-gray-400 text-center mt-3">Index CFD prices are derived from the underlying exchange. Trading hours follow primary exchange sessions. Spreads may widen at open/close.</p>
        </div>
      </section>

      {/* ── What moves markets — dark section ────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Market Analysis</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">What Moves Stock Indices?</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Index prices are driven by a combination of macroeconomic data, corporate performance, central bank policy, and global risk sentiment. Understanding these forces helps traders anticipate directional moves.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketMovers.map(({ factor, desc }) => (
              <div key={factor} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                <div className="w-2 h-2 rounded-full bg-[#00CC44] mb-3" />
                <h4 className="text-[13px] font-bold text-white mb-2">{factor}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Index CFD vs ETF ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">CFD vs ETF</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Index CFDs vs ETFs — Key Differences</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Both products track index performance, but with important structural differences for active traders.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[540px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Feature</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#00CC44" }}>Index CFD (Olla Trade)</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">Index ETF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Ownership",        "No ownership — price speculation",  "You own ETF units"],
                  ["Short Selling",    "Supported natively",                "Requires borrowing shares"],
                  ["Leverage",         "Up to 1:100",                       "Typically none (unless leveraged ETF)"],
                  ["Commission",       "Spread-based, no commissions",      "Brokerage commission applies"],
                  ["Minimum Capital",  "From $10 (micro lots)",             "Full share price"],
                  ["Overnight Cost",   "Swap/rollover applies",             "No overnight cost"],
                  ["Platform",         "MetaTrader 4",                      "Exchange or stock broker app"],
                ].map(([feature, cfd, etf]) => (
                  <tr key={feature} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3.5 font-semibold text-[#111827] text-[13px]">{feature}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] font-medium" style={{ color: "#00AA38" }}>{cfd}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] text-gray-500">{etf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why trade indices ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Why Trade Indices?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Index CFDs offer broad market exposure with built-in diversification and the ability to trade in both directions.</p>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Index CFD Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Index CFD trading involves risk of loss. Leverage amplifies both gains and losses. Markets may gap on open, particularly after weekend closures or major overnight events. Index availability follows underlying exchange schedules and may be restricted during holidays. Spreads may vary under different market conditions. Past performance is not indicative of future results.</p>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} faqs={indicesFaqs} />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel="Open Account"
        secondaryLabel="Compare Accounts"
        secondaryHref="/trading/accounts"
      />
    </>
  );
}
