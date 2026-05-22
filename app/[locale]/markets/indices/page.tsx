import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconBarChart, IconNewspaper, IconRefresh, IconDroplet, IconPercent, IconCalculator } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Stock Market Indices — CFD Trading",
  description: "Trade global stock market indices including US30, NASDAQ, S&P500, DAX40 and FTSE100 with Olla Trade. Leverage up to 1:100.",
};

const WHY_ICONS = [IconBarChart, IconNewspaper, IconRefresh, IconDroplet, IconPercent, IconCalculator];

const conditions = [
  { Index: "US30 (Dow Jones)",    Region: "USA",     "Spread From": "1 pt",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
  { Index: "NASDAQ",              Region: "USA",     "Spread From": "1 pt",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
  { Index: "SPX500 (S&P 500)",    Region: "USA",     "Spread From": "1 pt",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
  { Index: "DAX40",               Region: "Germany", "Spread From": "2 pts", Leverage: "1:100", "Min Size": "0.01 lots", Hours: "EU hours" },
  { Index: "FTSE100",             Region: "UK",      "Spread From": "1 pt",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "UK hours" },
  { Index: "NAS100 (Nasdaq 100)", Region: "USA",     "Spread From": "1 pt",  Leverage: "1:100", "Min Size": "0.01 lots", Hours: "US hours" },
];

const INDEX_COLORS = ["#1E88E5","#7C3AED","#00CC44","#F59E0B","#EF4444","#06B6D4"];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function IndicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "markets.indices" });
  const pc = await getTranslations({ locale, namespace: "page_content.indices" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  const indexData   = pc.raw("index_data")    as { name:string; region:string; desc:string; composition:string; sectors:string; hours:string }[];
  const marketMovers= pc.raw("market_movers") as { factor:string; desc:string }[];
  const cfdVsEtf    = pc.raw("cfd_vs_etf")   as string[][];
  const whyFeats    = pc.raw("why_features")  as { title:string; desc:string }[];

  const faqs = fq.raw("indices") as { q:string; a:string }[];

  const whyFeatures = whyFeats.map((f, i) => ({ Icon: WHY_ICONS[i], title: f.title, desc: f.desc }));

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Indices" }]}
        cta={{ label: locale === "pt" ? "Começar a Operar Índices" : "Start Trading Indices", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[
          { value: "10+",   label: locale === "pt" ? "Índices" : "Indices" },
          { value: "1 pt",  label: locale === "pt" ? "Spread a Partir de" : "Spread From" },
          { value: "1:100", label: locale === "pt" ? "Alavancagem Máxima" : "Max Leverage" },
        ]}
      />

      {/* ── Major indices overview ────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("overview_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("overview_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">{pc("overview_desc")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {indexData.map((idx, i) => (
              <div key={idx.name} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{idx.region}</div>
                    <h3 className="text-[14px] font-bold text-[#111827]">{idx.name}</h3>
                  </div>
                  <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: INDEX_COLORS[i] }} />
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-3">{idx.desc}</p>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between"><span className="text-gray-400">{pc("composition_label")}</span><span className="text-gray-600 text-right max-w-[55%]">{idx.composition}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">{pc("sectors_label")}</span><span className="text-gray-600 text-right max-w-[55%]">{idx.sectors}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">{pc("hours_label")}</span><span className="font-semibold" style={{ color: INDEX_COLORS[i] }}>{idx.hours}</span></div>
                </div>
              </div>
            ))}
          </div>
          <TradingConditionsTable
            title={pc("conditions_title")}
            headers={["Index","Region","Spread From","Leverage","Min Size","Hours"]}
            rows={conditions}
            highlightCol={3}
          />
          <p className="text-[11px] text-gray-400 text-center mt-3">{pc("conditions_note")}</p>
        </div>
      </section>

      {/* ── What moves indices — dark section ────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("movers_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("movers_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">{pc("movers_desc")}</p>
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
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("comparison_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("comparison_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{pc("comparison_desc")}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[540px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{pc("feature_col")}</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#00CC44" }}>{pc("cfd_col")}</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">{pc("etf_col")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {cfdVsEtf.map(([feature, cfd, etf]) => (
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
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("why_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{pc("why_subtitle")}</p>
          <FeatureGrid features={whyFeatures} cols={3} />
        </div>
      </section>

      {/* ── Risk warning ─────────────────────────────────────────── */}
      <section className="py-8 bg-white border-t border-gray-100">
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
        secondaryLabel={locale === "pt" ? "Comparar Contas" : "Compare Accounts"}
        secondaryHref="/trading/accounts"
      />
    </>
  );
}
