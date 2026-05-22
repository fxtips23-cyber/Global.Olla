import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconInfo } from "../../../components/ui/Icons";
import EconomicCalendarWidget from "./EconomicCalendarWidget";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Economic Calendar — Live Market Events",
  description: "Track upcoming economic events, central bank decisions, and market-moving announcements. Use the live economic calendar to plan your trading around high-impact releases.",
};

const EVENT_COLORS: Record<string, string> = {
  High: "#EF4444", Alto: "#EF4444",
  Medium: "#F59E0B", Médio: "#F59E0B",
  "Medium–High": "#F59E0B", "Médio–Alto": "#F59E0B",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function EconomicCalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "tools.calendar" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  const howCols     = t.raw("how_cols")      as { col: string; desc: string }[];
  const tips        = t.raw("tips")          as { t: string; d: string }[];
  const impactLvls  = t.raw("impact_levels") as { level: string; desc: string; examples: string[] }[];
  const majorEvents = t.raw("major_events")  as { name: string; currency: string; freq: string; impact: string; desc: string; tip: string }[];
  const calFaqs     = fq.raw("calendar")     as { q: string; a: string }[];

  const IMPACT_COLORS: Record<string, string> = {
    "High": "rgba(239,68,68,0.08)",   "Alto": "rgba(239,68,68,0.08)",
    "Medium": "rgba(245,158,11,0.08)", "Médio": "rgba(245,158,11,0.08)",
    "Low": "rgba(107,114,128,0.08)",   "Baixo": "rgba(107,114,128,0.08)",
  };
  const IMPACT_BORDERS: Record<string, string> = {
    "High": "rgba(239,68,68,0.2)",   "Alto": "rgba(239,68,68,0.2)",
    "Medium": "rgba(245,158,11,0.2)", "Médio": "rgba(245,158,11,0.2)",
    "Low": "rgba(107,114,128,0.2)",   "Baixo": "rgba(107,114,128,0.2)",
  };
  const IMPACT_DOT: Record<string, string> = {
    "High": "#EF4444", "Alto": "#EF4444",
    "Medium": "#F59E0B", "Médio": "#F59E0B",
    "Low": "#6B7280", "Baixo": "#6B7280",
  };

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Ferramentas" : "Tools", href: "/tools" }, { label: t("title") }]}
        stats={[
          { value: "Live", label: locale === "pt" ? "Atualizações em tempo real" : "Real-time updates" },
          { value: "3",    label: locale === "pt" ? "Níveis de impacto" : "Impact levels" },
          { value: locale === "pt" ? "Grátis" : "Free", label: locale === "pt" ? "Todas as contas" : "All accounts" },
        ]}
      />

      {/* ── Live widget ──────────────────────────────────────────── */}
      <section className="py-14 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("live_label")}</div>
          <h2 className="text-3xl font-extrabold text-white mb-4 text-center">{t("live_title")}</h2>
          <p className="text-white/40 text-[15px] text-center mb-8 max-w-xl mx-auto">{t("live_desc")}</p>
          <EconomicCalendarWidget />
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="https://www.mql5.com/en/economic-calendar" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#00CC44] hover:text-[#00DD4A] transition-colors border border-[#00CC44]/25 hover:border-[#00CC44]/50 px-5 py-2.5 rounded-xl">
              MQL5 {locale === "pt" ? "Calendário Completo" : "Full Calendar"} →
            </Link>
            <Link href="https://www.tradingview.com/economic-calendar/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/45 hover:text-white/65 transition-colors border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-xl">
              TradingView {locale === "pt" ? "Calendário" : "Calendar"} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How to read the calendar ─────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("how_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">{t("how_title")}</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{t("how_desc")}</p>
              <div className="space-y-2">
                {howCols.map(({ col, desc }) => (
                  <div key={col} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3">
                    <span className="text-[12px] font-bold text-[#111827] min-w-[90px] flex-shrink-0">{col}</span>
                    <span className="text-[12px] text-gray-500 leading-relaxed">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("tips_label")}</div>
              <div className="space-y-3">
                {tips.map(({ t: title, d: desc }) => (
                  <div key={title} className="bg-white border border-gray-100 rounded-xl p-4">
                    <div className="text-[13px] font-bold text-[#111827] mb-1">{title}</div>
                    <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact levels ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("impact_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("impact_title")}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">{t("impact_desc")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {impactLvls.map(({ level, desc, examples }) => {
              const bg  = IMPACT_COLORS[level]  || "rgba(107,114,128,0.08)";
              const brd = IMPACT_BORDERS[level] || "rgba(107,114,128,0.2)";
              const dot = IMPACT_DOT[level]     || "#6B7280";
              return (
                <div key={level} className="rounded-2xl p-6" style={{ background: bg, border: `1px solid ${brd}` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: dot }} />
                    <span className="text-[14px] font-bold text-[#111827]">{level}</span>
                  </div>
                  <p className="text-[12px] text-gray-600 leading-relaxed mb-4">{desc}</p>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">{t("impact_key_label")}</div>
                  <ul className="space-y-1">
                    {examples.map(e => (
                      <li key={e} className="text-[12px] text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: dot }} />{e}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Major event types deep-dive ───────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("events_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("events_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">{t("events_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {majorEvents.map(({ name, currency, freq, impact, desc, tip }) => {
              const color = EVENT_COLORS[impact] || "#F59E0B";
              return (
                <div key={name} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: color }} />
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ml-auto"
                      style={{ color, background: `${color}20`, border: `1px solid ${color}30` }}>
                      {impact} {t("impact_badge")}
                    </span>
                  </div>
                  <h4 className="text-[13px] font-bold text-white mb-1">{name}</h4>
                  <div className="flex flex-col gap-0.5 mb-3">
                    <span className="text-[10px] text-[#00CC44] font-semibold">{currency}</span>
                    <span className="text-[10px] text-white/30">{freq}</span>
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed mb-3 flex-1">{desc}</p>
                  <div className="bg-white/4 border border-white/6 rounded-lg p-2.5 mt-auto">
                    <div className="text-[9px] font-bold text-[#00CC44] uppercase tracking-wider mb-1">{locale === "pt" ? "Dica" : "Trader Tip"}</div>
                    <p className="text-[10px] text-white/50 leading-relaxed">{tip}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Volatility warning ────────────────────────────────────── */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
              <IconInfo className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-amber-900 mb-2">{t("warning_title")}</div>
              <p className="text-[13px] text-amber-800 leading-relaxed">{t("warning_text")}</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={t("faq_title")}
        subtitle={t("faq_subtitle")}
        faqs={calFaqs}
      />
    </>
  );
}
