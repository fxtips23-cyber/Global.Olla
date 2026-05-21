import { energiesFaqs } from "../../../data/faqs";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconBuilding, IconBarChart, IconGlobe, IconDollar, IconActivity, IconRefresh } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Oil & Energy CFD Trading — Brent & WTI Crude",
  description: "Trade Brent Crude and WTI Crude Oil CFDs with Olla Trade. No physical delivery — competitive spreads and leverage up to 1:100.",
};

const conditions = [
  { Instrument: "Brent Crude (XBRENT)", Type: "Crude Oil CFD", "Spread From": "3 points", Leverage: "1:100", "Min Size": "0.01 lots", "Quote": "USD/barrel" },
  { Instrument: "WTI Crude (XWTI)",     Type: "Crude Oil CFD", "Spread From": "3 points", Leverage: "1:100", "Min Size": "0.01 lots", "Quote": "USD/barrel" },
];

const drivers = [
  { Icon: IconBuilding, title: "OPEC+ Production Quotas", desc: "OPEC+ member countries collectively manage global supply. Production cut or increase decisions have immediate and direct impact on crude oil prices." },
  { Icon: IconBarChart, title: "US EIA Inventory Reports", desc: "Weekly US crude oil inventory data (published every Wednesday) is one of the most closely watched short-term price catalysts for WTI and Brent." },
  { Icon: IconGlobe,    title: "Geopolitical Risk",       desc: "Conflicts, sanctions, and political instability in major oil-producing regions (Middle East, Russia) create supply disruption concerns and price spikes." },
  { Icon: IconDollar,   title: "USD Correlation",         desc: "Oil is priced in US Dollars globally. A stronger USD reduces purchasing power for non-USD buyers, typically creating downward pressure on oil prices." },
  { Icon: IconActivity, title: "Global Demand Outlook",   desc: "Economic growth data from China (world's largest oil importer) and the US directly influences energy demand projections and price direction." },
  { Icon: IconRefresh,  title: "Seasonal Demand Cycles",  desc: "Driving season (US summer), heating oil demand (winter), and refinery maintenance cycles create predictable seasonal patterns in energy markets." },
];

const oilCalendar = [
  { event: "EIA Crude Oil Inventory Report", frequency: "Weekly — every Wednesday ~15:30 UTC", impact: "High",   note: "Most closely watched US oil supply data. Large inventory builds typically weigh on WTI prices." },
  { event: "OPEC+ Meeting",                  frequency: "Scheduled — typically bi-annually",   impact: "High",   note: "Production quota decisions. Surprise cuts are generally bullish; increases bearish for oil." },
  { event: "API Crude Oil Stock Change",     frequency: "Weekly — every Tuesday ~20:30 UTC",   impact: "Medium", note: "Private sector estimate, released night before EIA. Provides early directional signal." },
  { event: "US Rig Count (Baker Hughes)",    frequency: "Weekly — every Friday ~17:00 UTC",    impact: "Low",    note: "Indicator of US production activity. Rising rig count may signal future supply increases." },
  { event: "China Trade Data",               frequency: "Monthly",                              impact: "Medium", note: "Crude oil import volumes from China reflect demand trends from the world's largest importer." },
  { event: "US Non-Farm Payrolls",           frequency: "Monthly — first Friday",               impact: "Medium", note: "Strong jobs data suggests economic growth and higher energy demand; weak data implies lower demand." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function EnergiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "markets.energies" });
  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Energies" }]}
        cta={{ label: "Start Trading Energies", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[{ value: "2", label: "Energy Instruments" }, { value: "3 pts", label: "Spread From" }, { value: "1:100", label: "Max Leverage" }]}
      />

      {/* ── Instrument deep-dive ──────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Oil Benchmarks</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Brent & WTI Crude Oil</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">
            Brent and WTI are the world's two primary crude oil benchmarks. Both are quoted in USD per barrel and accessible as CFDs — speculate on price movements without physical delivery.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                sym: "XBRENT", name: "Brent Crude Oil", badge: "Global Benchmark", color: "#1E88E5",
                desc: "Brent Crude is extracted from the North Sea and serves as the global oil pricing benchmark. It represents over two-thirds of internationally traded crude oil contracts. Brent is the reference price for oil produced in Europe, Africa, and the Middle East.",
                specs: [["Spread","From 3 points"],["Leverage","Up to 1:100"],["Quote","USD per barrel"],["Origin","North Sea (UK/Norway)"],["Standard lot","1,000 barrels"],["Session","Mon–Fri, ~24h"]]
              },
              {
                sym: "XWTI",   name: "WTI Crude Oil",   badge: "US Benchmark",    color: "#FF7043",
                desc: "West Texas Intermediate (WTI) is the primary North American crude oil benchmark, traded on the NYMEX. It is lighter and sweeter than Brent, extracted from US shale basins. WTI is the key domestic reference price for US oil production and closely followed for signals on American energy output.",
                specs: [["Spread","From 3 points"],["Leverage","Up to 1:100"],["Quote","USD per barrel"],["Origin","Permian Basin, USA"],["Standard lot","1,000 barrels"],["Session","Mon–Fri, ~24h"]]
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
          <TradingConditionsTable title="Crude Oil CFD Conditions" headers={["Instrument","Type","Spread From","Leverage","Min Size","Quote"]} rows={conditions} highlightCol={3} />
        </div>
      </section>

      {/* ── Brent vs WTI comparison ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Benchmark Comparison</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Brent vs WTI: Key Differences</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Both benchmarks track crude oil price but differ in origin, quality, and regional sensitivity. Knowing the difference helps with instrument selection.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Characteristic</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#1E88E5" }}>Brent Crude</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#FF7043" }}>WTI Crude</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Origin",                  "North Sea (UK, Norway)",                 "Texas, Permian Basin, USA"],
                  ["Global Usage",            "~65% of world oil priced on Brent",      "Primarily North American reference"],
                  ["Oil Grade",               "Light sweet crude",                       "Light sweet crude (slightly lighter)"],
                  ["API Gravity",             "~38°",                                    "~39.6°"],
                  ["Sulfur Content",          "~0.37% (sweet)",                          "~0.24% (very sweet)"],
                  ["Typical Premium/Discount","Usually trades at premium to WTI",        "Usually at slight discount to Brent"],
                  ["Key Sensitivity",         "Middle East geopolitics, OPEC decisions", "US rig count, EIA inventories, USD"],
                  ["Exchange",                "ICE Futures Europe",                      "CME / NYMEX"],
                ].map(([feature, brent, wti]) => (
                  <tr key={feature} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3.5 font-semibold text-[#111827] text-[13px]">{feature}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] text-gray-600">{brent}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] text-gray-600">{wti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Price drivers ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">What Drives Oil Prices?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Crude oil prices are among the most geopolitically sensitive in financial markets. Multiple macro and supply factors interact to drive direction.</p>
          <FeatureGrid features={drivers} cols={3} />
        </div>
      </section>

      {/* ── Oil market calendar ───────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Market Calendar</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Key Oil Market Events</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              These recurring events regularly create significant volatility in oil prices. Traders use them as anchors for scheduling positions and managing risk around data releases.
            </p>
          </div>
          <div className="space-y-3">
            {oilCalendar.map(({ event, frequency, impact, note }) => (
              <div key={event} className="bg-white/4 border border-white/8 rounded-xl p-5 flex flex-col sm:flex-row items-start gap-4">
                <div className="sm:w-48 flex-shrink-0">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      color: impact === "High" ? "#00CC44" : impact === "Medium" ? "#F59E0B" : "#6B7280",
                      background: impact === "High" ? "rgba(0,204,68,0.12)" : impact === "Medium" ? "rgba(245,158,11,0.12)" : "rgba(107,114,128,0.12)",
                    }}>
                    {impact} Impact
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-bold text-white mb-0.5">{event}</div>
                  <div className="text-[11px] text-white/35 mb-1.5">{frequency}</div>
                  <p className="text-[12px] text-white/45 leading-relaxed">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">Energy CFD Risk Warning</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">Energy commodity prices are highly volatile and sensitive to geopolitical events, OPEC+ decisions, and macroeconomic data. Prices can move rapidly and sharply, particularly around scheduled data releases. Leverage amplifies both gains and losses proportionally. Trading energy CFDs may not be suitable for all investors. Spreads may vary under different market conditions.</p>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} faqs={energiesFaqs} />
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
