import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconDroplet, IconClock, IconPercent, IconRefresh, IconCode, IconLayers } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Forex Trading — 70+ Currency Pairs",
  description: "Trade 70+ Forex currency pairs with Olla Trade. Spreads from 0.0 pips, leverage up to 1:500, and 24/5 market access on MetaTrader 4.",
};

const FEATURE_ICONS = [IconDroplet, IconClock, IconPercent, IconRefresh, IconCode, IconLayers];

const majors = [
  { Symbol: "EUR/USD", Description: "Euro / US Dollar",           Spread: "From 0.0 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "GBP/USD", Description: "British Pound / Dollar",     Spread: "From 0.0 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "USD/JPY", Description: "US Dollar / Japanese Yen",   Spread: "From 0.0 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "AUD/USD", Description: "Australian Dollar / Dollar", Spread: "From 0.1 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "USD/CAD", Description: "US Dollar / Canadian Dollar",Spread: "From 0.1 pips", Leverage: "1:500", "Margin %": "0.20%" },
  { Symbol: "USD/CHF", Description: "US Dollar / Swiss Franc",    Spread: "From 0.1 pips", Leverage: "1:500", "Margin %": "0.20%" },
];

const sessionColors: Record<string, string> = {
  Sydney: "#1E88E5", Tokyo: "#AB47BC", London: "#00CC44", "New York": "#FF7043",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ForexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "markets.forex" });
  const pc = await getTranslations({ locale, namespace: "page_content.forex" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  // Translated sessions
  const sessions = [
    { session: "Sydney",    opens: "00:00 GMT+2", closes: "09:00 GMT+2", pairs: ["AUD/USD","NZD/USD"]  },
    { session: "Tokyo",     opens: "03:00 GMT+2", closes: "12:00 GMT+2", pairs: ["USD/JPY","AUD/JPY"]  },
    { session: "London",    opens: "10:00 GMT+2", closes: "19:00 GMT+2", pairs: ["EUR/USD","GBP/USD"]  },
    { session: "New York",  opens: "15:00 GMT+2", closes: "24:00 GMT+2", pairs: ["EUR/USD","USD/CAD"]  },
  ];

  // Translated macro drivers
  const drivers = pc.raw("drivers") as {label:string; desc:string}[];

  // Translated why-features
  const whyFeatures = (pc.raw("why_features") as {title:string;desc:string}[]).map((f, i) => ({
    Icon: FEATURE_ICONS[i],
    title: f.title,
    desc:  f.desc,
  }));

  // Translated glossary
  const glossaryTerms = pc.raw("glossary_terms") as {term:string; def:string}[];

  // FAQs — use PT if locale is pt, otherwise use English
  const faqs = locale === "pt"
    ? (fq.raw("forex") as {q:string; a:string}[])
    : [
        {q:"What is forex trading?", a:"Forex (foreign exchange) trading involves buying one currency while simultaneously selling another. With Olla Trade, you can trade 70+ currency pairs as CFDs on the MetaTrader 4 platform."},
        {q:"What are the spreads on forex pairs?", a:"Spreads on major forex pairs start from 0.0 pips on the Elite account and from 1.4 pips on the Standard account. Spreads are variable and may widen during periods of high market volatility or low liquidity."},
        {q:"What affects forex market prices?", a:"Forex prices are influenced by central bank interest rate decisions, economic data releases (GDP, CPI, employment), geopolitical events, trade balances, and overall market risk sentiment."},
      ];

  const pairCategories = [
    { type: t("majors"), badge: t("majors_badge"), color: "#00CC44", bgColor: "rgba(0,204,68,0.06)", borderColor: "rgba(0,204,68,0.2)",
      desc: locale === "pt" ? pc("major_desc") : "The most traded currency pairs globally, all including the USD. Deepest liquidity, tightest spreads.",
      pairs: ["EUR/USD","GBP/USD","USD/JPY","USD/CAD","AUD/USD","USD/CHF"] },
    { type: t("minors"), badge: t("minors_badge"), color: "#1E88E5", bgColor: "rgba(30,136,229,0.06)", borderColor: "rgba(30,136,229,0.2)",
      desc: locale === "pt" ? pc("minor_desc") : "Cross-currency pairs that exclude USD. Well-traded during regional sessions with good liquidity.",
      pairs: ["EUR/GBP","EUR/JPY","GBP/JPY","AUD/JPY","EUR/AUD","CHF/JPY"] },
    { type: t("exotics"), badge: t("exotics_badge"), color: "#FF7043", bgColor: "rgba(255,112,67,0.06)", borderColor: "rgba(255,112,67,0.2)",
      desc: locale === "pt" ? pc("exotic_desc") : "A major currency paired with an emerging market currency. Higher spreads and volatility.",
      pairs: ["USD/TRY","USD/ZAR","EUR/NOK","USD/MXN","USD/SGD","GBP/SEK"] },
  ];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Forex" }]}
        cta={{ label: locale === "pt" ? "Começar a Operar Forex" : "Start Trading Forex", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[
          { value: "70+",    label: locale === "pt" ? "Pares de Moedas" : "Currency Pairs" },
          { value: "0.0",    label: locale === "pt" ? "Pips a Partir de" : "Pips From" },
          { value: "1:500",  label: locale === "pt" ? "Alavancagem Máxima" : "Max Leverage" },
        ]}
      />

      {/* ── Market overview stats ─────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              ["$6.6 Trillion", locale === "pt" ? "Volume diário global de FX" : "Daily global FX volume"],
              ["70+",           locale === "pt" ? "Pares de moedas disponíveis" : "Currency pairs available"],
              ["0.0 pips",      locale === "pt" ? "Spread mínimo (conta Elite)" : "Min spread (Elite account)"],
              ["24/5",          locale === "pt" ? "Horários de mercado aberto" : "Market open hours"],
            ].map(([v,d]) => (
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
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("pairs_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("pairs_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">
            {locale === "pt" ? pc("pair_categories_desc") : "Olla Trade offers access to all three Forex pair categories — each with distinct liquidity, spread, and volatility profiles."}
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {pairCategories.map((cat) => (
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
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("conditions_title")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">
            {locale === "pt" ? "Condições de Negociação — Pares Principais" : "Major Pairs — Trading Conditions"}
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">
            {locale === "pt" ? pc("conditions_note") : "Spreads are variable. Figures shown are indicative under normal market conditions."}
          </p>
          <TradingConditionsTable
            headers={[
              "Symbol",
              locale === "pt" ? "Descrição" : "Description",
              locale === "pt" ? pc("spread_col") : "Spread",
              locale === "pt" ? pc("leverage_col") : "Leverage",
              locale === "pt" ? pc("margin_col") : "Margin %",
            ]}
            rows={majors}
            highlightCol={2}
          />
          <p className="text-[11px] text-gray-400 text-center mt-3">
            {t("conditions_note")}
          </p>
        </div>
      </section>

      {/* ── Trading sessions ─────────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("sessions_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("sessions_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">{t("sessions_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {sessions.map((s) => {
              const color = sessionColors[s.session] ?? "#00CC44";
              return (
                <div key={s.session} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                  <div className="w-3 h-3 rounded-full mb-4 flex-shrink-0" style={{ background: color }} />
                  <h3 className="text-[15px] font-bold text-white mb-3">{s.session}</h3>
                  <div className="space-y-1.5 text-[12px] mb-4">
                    <div className="flex justify-between"><span className="text-white/35">{locale === "pt" ? "Abre" : "Opens"}</span><span className="text-white/65 font-medium">{s.opens}</span></div>
                    <div className="flex justify-between"><span className="text-white/35">{locale === "pt" ? "Fecha" : "Closes"}</span><span className="text-white/65 font-medium">{s.closes}</span></div>
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">{locale === "pt" ? pc("most_active") : "Most active"}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.pairs.map((p) => (
                      <span key={p} className="text-[11px] font-mono px-2 py-0.5 rounded" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>{p}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-white/4 border border-white/8 rounded-2xl p-5 text-center">
            <div className="text-[13px] text-white/55 leading-relaxed">
              <strong className="text-white/75">{locale === "pt" ? pc("peak_liquidity") : "Peak liquidity"}</strong>{" "}
              {locale === "pt" ? pc("peak_liquidity_desc") : "occurs during the London–New York overlap (15:00–19:00 GMT+2). EUR/USD, GBP/USD, and USD/JPY typically see the tightest spreads and largest volumes."}
            </div>
          </div>
        </div>
      </section>

      {/* ── What moves Forex — macro drivers ─────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("drivers_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("drivers_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">{t("drivers_desc")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {drivers.map(({ label, desc }, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
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
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("pips_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">{t("pips_title")}</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                {locale === "pt" ? pc("pip_definition") : "A pip (percentage in point) is the smallest standard price movement in Forex. For most pairs, 1 pip = 0.0001. For JPY pairs, 1 pip = 0.01."}
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                {locale === "pt" ? pc("spread_definition") : "The spread is the difference between the bid (sell) price and the ask (buy) price — it represents the cost of opening a trade. Variable spreads reflect live market conditions."}
              </p>
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-xl p-5 text-[13px] text-gray-600 leading-relaxed">
                <strong className="text-[#111827] block mb-1">{locale === "pt" ? pc("example") : "Example:"}</strong>
                {locale === "pt" ? pc("pip_example") : "EUR/USD Bid: 1.08420 | Ask: 1.08425 = 0.5 pip spread. If you buy 1 lot (100,000 units), 1 pip = $10 profit or loss."}
              </div>
            </div>
            <div className="space-y-3">
              {glossaryTerms.map(({ term, def }) => (
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
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("why_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{t("why_subtitle")}</p>
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

      {/* ── FAQs ─────────────────────────────────────────────────── */}
      <FAQSection
        title={t("faq_title")}
        faqs={faqs}
      />

      {/* ── CTA ──────────────────────────────────────────────────── */}
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
