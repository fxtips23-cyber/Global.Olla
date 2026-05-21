import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconShieldCheck, IconBuilding, IconTrendingUp, IconBarChart, IconBolt, IconRefresh } from "../../../components/ui/Icons";
import { metalsFaqs } from "../../../data/faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Gold & Silver Trading — Precious Metals CFDs",
  description: "Trade Gold (XAUUSD) and Silver (XAGUSD) CFDs with Olla Trade. Competitive spreads and leverage up to 1:200. No physical ownership required.",
};

const conditions = [
  { Instrument: "XAUUSD — Gold",   "Spread From": "25 points", Leverage: "1:200", "Min Size": "0.01 lots", Hours: "Mon–Fri, 24h" },
  { Instrument: "XAGUSD — Silver", "Spread From": "50 points", Leverage: "1:100", "Min Size": "0.01 lots", Hours: "Mon–Fri, 24h" },
];

const whyFeatures = [
  { Icon: IconShieldCheck, title: "Safe-Haven Asset",    desc: "Gold is historically sought during economic uncertainty, geopolitical stress, and market volatility — often moving counter to equities." },
  { Icon: IconBuilding,    title: "Industrial Demand",   desc: "Silver has significant industrial applications in electronics, solar panels, and medical devices, adding fundamental demand drivers." },
  { Icon: IconTrendingUp,  title: "Inflation Hedge",     desc: "Precious metals are widely regarded as a potential store of value and hedge against currency devaluation over longer time horizons." },
  { Icon: IconBarChart,    title: "USD Sensitivity",     desc: "Gold and Silver are priced in USD — directly sensitive to US Dollar strength, Fed policy, and real interest rate movements." },
  { Icon: IconBolt,        title: "Active Volatility",   desc: "Metals can move sharply on economic data, central bank decisions, and geopolitical events — creating active swing trading conditions." },
  { Icon: IconRefresh,     title: "Long or Short",       desc: "CFD structure allows you to trade in both directions — profit from rising prices (long) or falling prices (short) on Gold and Silver." },
];

const priceDrivers = [
  { factor: "USD Strength / Weakness",       impact: "High",   desc: "Gold and Silver are priced in USD. A stronger dollar reduces their appeal to non-USD investors, typically pushing prices lower and vice versa." },
  { factor: "Real Interest Rates",           impact: "High",   desc: "Lower real rates reduce the opportunity cost of holding non-yielding assets like gold, supporting prices. Rising real rates tend to weigh on metals." },
  { factor: "Inflation Expectations",        impact: "High",   desc: "Gold is a traditional inflation hedge. Rising CPI expectations often boost demand for precious metals as a store of value." },
  { factor: "Central Bank Purchases",        impact: "Medium", desc: "Global central banks hold gold as a reserve asset. Large-scale purchases by central banks (especially emerging market) can shift supply/demand dynamics." },
  { factor: "Geopolitical Tension",          impact: "Medium", desc: "Wars, sanctions, and political instability drive safe-haven flows into Gold, often causing sharp short-term spikes." },
  { factor: "Industrial & Tech Demand",      impact: "Medium", desc: "Silver's dual role as precious metal and industrial commodity means demand from solar panels, EVs, and electronics adds unique price drivers absent in gold." },
  { factor: "Mining Supply",                 impact: "Low",    desc: "Mine production levels, ore grade changes, and labour disruptions at major mines can affect medium-term supply balance." },
  { factor: "Investor Sentiment / ETF Flows",impact: "Medium", desc: "Large ETF inflows or outflows (e.g. SPDR Gold Trust) reflect institutional demand and can trigger meaningful price moves." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function MetalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "markets.metals" });
  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Metals" }]}
        cta={{ label: "Start Trading Metals", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[{ value: "2", label: "Instruments" }, { value: "25 pts", label: "Gold Spread" }, { value: "1:200", label: "Max Leverage" }]}
      />

      {/* ── Instrument cards ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Tradable Instruments</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Gold & Silver CFDs</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">
            Access the two most actively traded precious metals through spot CFDs. Trade on price without physical ownership.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                sym: "XAUUSD", name: "Gold", badge: "Most Traded", color: "#F59E0B",
                desc: "Gold is the world's most recognised store of value and the premier safe-haven financial asset. Its price is influenced by USD movements, real interest rates, inflation expectations, central bank reserve activity, and global risk sentiment. Gold tends to rise during periods of economic uncertainty and fall when the USD strengthens or real yields rise.",
                specs: [["Spread","From 25 points"],["Leverage","Up to 1:200"],["Min Trade","0.01 lots"],["Quote Unit","USD per troy oz"],["Session","Mon–Fri, 24h"]]
              },
              {
                sym: "XAGUSD", name: "Silver", badge: "Dual Role", color: "#9CA3AF",
                desc: "Silver is both a precious metal and an industrial commodity, with significant demand from the solar energy, electronics, and medical sectors. This dual role creates unique price dynamics — Silver often follows Gold's directional moves but with higher volatility. It is commonly used as a higher-beta alternative to Gold by traders seeking larger swings.",
                specs: [["Spread","From 50 points"],["Leverage","Up to 1:100"],["Min Trade","0.01 lots"],["Quote Unit","USD per troy oz"],["Session","Mon–Fri, 24h"]]
              },
            ].map((m) => (
              <div key={m.sym} className="bg-white rounded-2xl border border-gray-100 p-7">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="text-2xl font-extrabold text-[#111827]">{m.sym}</div>
                    <div className="text-[13px] text-gray-400 mt-0.5">{m.name}</div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: `${m.color}15`, color: m.color, border: `1px solid ${m.color}40` }}>
                    {m.badge}
                  </span>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-5">{m.desc}</p>
                <div className="space-y-2">
                  {m.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-gray-50 text-[13px]">
                      <span className="text-gray-400">{k}</span>
                      <span className="font-semibold text-[#111827]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <TradingConditionsTable title="Metals CFD Trading Conditions" headers={["Instrument","Spread From","Leverage","Min Size","Hours"]} rows={conditions} highlightCol={2} />
        </div>
      </section>

      {/* ── Gold vs Silver comparison ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Comparison</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Gold vs Silver — Key Differences</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Both metals offer unique opportunities. Understanding the differences helps traders select the right instrument for their strategy.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Characteristic</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#F59E0B" }}>Gold (XAUUSD)</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">Silver (XAGUSD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Primary Role",          "Safe-haven / reserve asset",           "Precious metal + industrial commodity"],
                  ["Price Level",           "~$2,000–3,500 per troy oz",            "~$25–35 per troy oz"],
                  ["Volatility",            "Moderate",                             "Higher (often 2–3x gold's moves)"],
                  ["Industrial Demand",     "Minimal (~10% of demand)",             "Significant (~55% of demand)"],
                  ["Market Correlation",    "High with risk-off sentiment",         "Follows gold + tech/solar sectors"],
                  ["Gold:Silver Ratio",     "Benchmark ratio",                      "Compared to gold for relative value"],
                  ["Central Bank Demand",   "Significant (reserve holdings)",       "Minimal"],
                  ["Max Leverage",          "1:200",                                "1:100"],
                ].map(([feature, gold, silver]) => (
                  <tr key={feature} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3.5 font-semibold text-[#111827] text-[13px]">{feature}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] text-gray-600">{gold}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] text-gray-600">{silver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Price drivers ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Market Analysis</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">What Drives Precious Metal Prices?</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Metals prices are shaped by a combination of macroeconomic policy, dollar dynamics, industrial demand, and investor sentiment. Understanding these factors is essential for developing a metals trading strategy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {priceDrivers.map(({ factor, impact, desc }) => (
              <div key={factor} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      color: impact === "High" ? "#00CC44" : impact === "Medium" ? "#F59E0B" : "#6B7280",
                      background: impact === "High" ? "rgba(0,204,68,0.12)" : impact === "Medium" ? "rgba(245,158,11,0.12)" : "rgba(107,114,128,0.12)",
                    }}>
                    {impact} Impact
                  </span>
                </div>
                <h4 className="text-[13px] font-bold text-white mb-2">{factor}</h4>
                <p className="text-[11px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why trade metals ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Why Trade Precious Metals?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Gold and Silver offer unique characteristics driven by macro forces, safe-haven demand, and industrial fundamentals.</p>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Metals Trading Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Precious metals prices can be highly volatile and subject to sudden large movements driven by macroeconomic events, central bank actions, and geopolitical developments. Leverage amplifies both potential profits and losses. It is possible to lose your entire deposited capital. Past performance is not indicative of future results. Spreads may vary under different market conditions.</p>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} faqs={metalsFaqs} />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel="Open Account"
        secondaryLabel="View All Markets"
        secondaryHref="/markets"
      />
    </>
  );
}
