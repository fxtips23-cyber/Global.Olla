import type { Metadata } from "next";
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

const DRIVER_ICONS = [IconBuilding, IconBarChart, IconGlobe, IconDollar, IconActivity, IconRefresh];

const conditions = [
  { Instrument: "Brent Crude (XBRENT)", Type: "Crude Oil CFD", "Spread From": "3 pts", Leverage: "1:100", "Min Size": "0.01 lots", Quote: "USD/barrel" },
  { Instrument: "WTI Crude (XWTI)",     Type: "Crude Oil CFD", "Spread From": "3 pts", Leverage: "1:100", "Min Size": "0.01 lots", Quote: "USD/barrel" },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function EnergiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "markets.energies" });
  const pc = await getTranslations({ locale, namespace: "page_content.energies" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  const drivers      = pc.raw("drivers")       as { title:string; desc:string }[];
  const oilCalendar  = pc.raw("oil_calendar")  as { event:string; frequency:string; impact:string; note:string }[];
  const compRows     = pc.raw("comparison_rows") as string[][];
  const faqs         = fq.raw("energies") as { q:string; a:string }[];

  const driverFeatures = drivers.map((d, i) => ({ Icon: DRIVER_ICONS[i], title: d.title, desc: d.desc }));

  // Instrument specs (translated labels)
  const brentSpecs = [
    [pc("spread_label"), "From 3 pts"],
    [pc("leverage_label"), "Up to 1:100"],
    [pc("quote_label"), "USD/barrel"],
    [pc("origin_label"), "North Sea (UK/Norway)"],
    [pc("lot_label"), "1,000 barrels"],
    [pc("session_label"), "Mon–Fri, ~24h"],
  ];
  const wtiSpecs = [
    [pc("spread_label"), "From 3 pts"],
    [pc("leverage_label"), "Up to 1:100"],
    [pc("quote_label"), "USD/barrel"],
    [pc("origin_label"), "Permian Basin, USA"],
    [pc("lot_label"), "1,000 barrels"],
    [pc("session_label"), "Mon–Fri, ~24h"],
  ];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Energies" }]}
        cta={{ label: locale === "pt" ? "Começar a Operar Energias" : "Start Trading Energies", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[
          { value: "2",     label: locale === "pt" ? "Instrumentos de Energia" : "Energy Instruments" },
          { value: "3 pts", label: locale === "pt" ? "Spread a Partir de" : "Spread From" },
          { value: "1:100", label: locale === "pt" ? "Alavancagem Máxima" : "Max Leverage" },
        ]}
      />

      {/* ── Instrument deep-dive ──────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("instruments_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("instruments_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">{pc("instruments_desc")}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { sym: "XBRENT", name: "Brent Crude Oil", badge: pc("badge_brent"), color: "#1E88E5", desc: pc("brent_desc"), specs: brentSpecs },
              { sym: "XWTI",   name: "WTI Crude Oil",   badge: pc("badge_wti"),   color: "#FF7043", desc: pc("wti_desc"),   specs: wtiSpecs },
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

          <TradingConditionsTable
            title={locale === "pt" ? "Condições de CFD de Petróleo Bruto" : "Crude Oil CFD Conditions"}
            headers={["Instrument","Type","Spread From","Leverage","Min Size","Quote"]}
            rows={conditions}
            highlightCol={3}
          />
        </div>
      </section>

      {/* ── Brent vs WTI comparison ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("comparison_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("comparison_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">
            {locale === "pt" ? "Ambos os benchmarks rastreiam os preços do petróleo bruto, mas com diferenças estruturais. Conhecer as diferenças ajuda na seleção do instrumento." : "Both benchmarks track crude oil price but differ in origin, quality, and regional sensitivity. Knowing the difference helps with instrument selection."}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    {locale === "pt" ? "Característica" : "Characteristic"}
                  </th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#1E88E5" }}>{pc("brent_col")}</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#FF7043" }}>{pc("wti_col")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {compRows.map(([feature, brent, wti]) => (
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
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("drivers_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">
            {locale === "pt" ? "Os preços do petróleo bruto estão entre os mais sensíveis geopoliticamente nos mercados financeiros. Múltiplos fatores macro e de oferta interagem para determinar a direção." : "Crude oil prices are among the most geopolitically sensitive in financial markets. Multiple macro and supply factors interact to drive direction."}
          </p>
          <FeatureGrid features={driverFeatures} cols={3} />
        </div>
      </section>

      {/* ── Oil market calendar ───────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("calendar_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("calendar_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              {pc("calendar_desc")}
            </p>
          </div>
          <div className="space-y-3">
            {oilCalendar.map(({ event, frequency, impact, note }) => {
              const isHigh   = impact === "High"   || impact === "Alto";
              const isMedium = impact === "Medium" || impact === "Médio";
              const color    = isHigh ? "#00CC44" : isMedium ? "#F59E0B" : "#6B7280";
              const bg       = isHigh ? "rgba(0,204,68,0.12)" : isMedium ? "rgba(245,158,11,0.12)" : "rgba(107,114,128,0.12)";
              const impactLabel = isHigh ? pc("high_impact") : isMedium ? pc("medium_impact") : pc("low_impact");
              return (
                <div key={event} className="bg-white/4 border border-white/8 rounded-xl p-5 flex flex-col sm:flex-row items-start gap-4">
                  <div className="sm:w-48 flex-shrink-0">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ color, background: bg }}>
                      {impactLabel}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-bold text-white mb-0.5">{event}</div>
                    <div className="text-[11px] text-white/35 mb-1.5">{frequency}</div>
                    <p className="text-[12px] text-white/45 leading-relaxed">{note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-amber-800 mb-2">{t("risk_title")}</div>
            <p className="text-[12px] text-amber-700 leading-relaxed">{t("risk_text")}</p>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} faqs={faqs} />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel={locale === "pt" ? "Abrir Conta" : "Open Account"}
        secondaryLabel={locale === "pt" ? "Ver Todos os Mercados" : "View All Markets"}
        secondaryHref="/markets"
      />
    </>
  );
}
