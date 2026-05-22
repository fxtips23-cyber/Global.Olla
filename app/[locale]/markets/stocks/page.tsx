import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconBarChart, IconRefresh, IconPercent, IconGlobe, IconDollar, IconNewspaper } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Global Stock CFD Trading — 1,000+ Equities",
  description: "Trade 1,000+ global stock CFDs including Apple, Tesla, Amazon, Google and Microsoft with Olla Trade. Long or short, leverage up to 1:10.",
};

const WHY_ICONS = [IconBarChart, IconRefresh, IconPercent, IconGlobe, IconDollar, IconNewspaper];

const popularStocks = [
  { Symbol: "AAPL",  Company: "Apple Inc.",        Sector: "Technology",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "TSLA",  Company: "Tesla Inc.",         Sector: "EV / Technology", Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "AMZN",  Company: "Amazon.com Inc.",    Sector: "E-Commerce",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "GOOGL", Company: "Alphabet (Google)",  Sector: "Technology",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "MSFT",  Company: "Microsoft Corp.",    Sector: "Technology",      Exchange: "NASDAQ", Leverage: "1:10" },
  { Symbol: "META",  Company: "Meta Platforms",     Sector: "Social Media",    Exchange: "NASDAQ", Leverage: "1:10" },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function StocksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "markets.stocks" });
  const pc = await getTranslations({ locale, namespace: "page_content.stocks" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  const howCFDWorks  = pc.raw("how_cfd_works")  as { step:string; title:string; desc:string }[];
  const sectors      = pc.raw("sectors")        as { sector:string; examples:string; note:string }[];
  const whyFeats     = pc.raw("why_features")   as { title:string; desc:string }[];
  const faqs         = fq.raw("stocks") as { q:string; a:string }[];

  const whyFeatures = whyFeats.map((f, i) => ({ Icon: WHY_ICONS[i], title: f.title, desc: f.desc }));

  const regions = [
    { region: pc("us_label"),   flag: "🇺🇸", exchanges: pc("us_exchanges"),   count: pc("us_count"),   examples: pc("us_examples"),   hours: pc("us_hours") },
    { region: pc("eu_label"),   flag: "🇪🇺", exchanges: pc("eu_exchanges"),   count: pc("eu_count"),   examples: pc("eu_examples"),   hours: pc("eu_hours") },
    { region: pc("asia_label"), flag: "🌏", exchanges: pc("asia_exchanges"), count: pc("asia_count"), examples: pc("asia_examples"), hours: pc("asia_hours") },
  ];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Stocks" }]}
        cta={{ label: locale === "pt" ? "Começar a Operar Ações" : "Start Trading Stocks", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[
          { value: "1,000+", label: locale === "pt" ? "Ações Globais" : "Global Stocks" },
          { value: "1:10",   label: locale === "pt" ? "Alavancagem Máxima" : "Max Leverage" },
          { value: "3",      label: locale === "pt" ? "Regiões (EUA/EU/Ásia)" : "Regions (US/EU/Asia)" },
        ]}
      />

      {/* ── Regional coverage ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("coverage_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("coverage_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{pc("coverage_desc")}</p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {regions.map((r) => (
              <div key={r.region} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{r.flag}</span>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#111827]">{r.region}</h3>
                    <div className="text-[11px] text-[#1E88E5] font-semibold">{r.exchanges}</div>
                  </div>
                  <span className="ml-auto text-[13px] font-bold text-[#00CC44]">{r.count}</span>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-3">{r.examples}</p>
                <div className="text-[11px] text-gray-400">{locale === "pt" ? "Horário:" : "Hours:"} {r.hours}</div>
              </div>
            ))}
          </div>
          <TradingConditionsTable
            title={locale === "pt" ? "CFDs de Ações Populares (Indicativo)" : "Popular Stock CFDs (Indicative)"}
            headers={["Symbol","Company","Sector","Exchange","Leverage"]}
            rows={popularStocks}
            highlightCol={4}
          />
          <p className="text-[11px] text-gray-400 text-center mt-3">{pc("conditions_note")}</p>
        </div>
      </section>

      {/* ── How stock CFDs work ───────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("workflow_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("workflow_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">{pc("workflow_desc")}</p>
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
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("sectors_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("sectors_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{pc("sectors_desc")}</p>
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
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-3">{pc("dividend_label")}</div>
            <h3 className="text-[17px] font-bold text-[#111827] mb-4">{pc("dividend_title")}</h3>
            <div className="grid md:grid-cols-2 gap-6 text-[13px] text-gray-600 leading-relaxed">
              <div>
                <p className="mb-3">{pc("dividend_long")}</p>
                <p>{pc("dividend_short")}</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 leading-relaxed">{pc("dividend_note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why trade stocks ─────────────────────────────────────── */}
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
