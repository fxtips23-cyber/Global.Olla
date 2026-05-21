import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconInfo } from "../../../components/ui/Icons";
import { econCalFaqs } from "../../../data/extra-faqs";
import EconomicCalendarWidget from "./EconomicCalendarWidget";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Economic Calendar — Live Market Events",
  description: "Track upcoming economic events, central bank decisions, and market-moving announcements. Use the live economic calendar to plan your trading around high-impact releases.",
};

const majorEventTypes = [
  {
    name: "Non-Farm Payrolls (NFP)",
    currency: "USD",
    freq: "Monthly — First Friday",
    impact: "High",
    color: "#EF4444",
    desc: "The most market-moving US labour report. Measures net job creation outside the farming sector. A significant beat vs forecast typically strengthens USD; a miss weakens it. Affects EUR/USD, GBP/USD, Gold, and US indices simultaneously.",
    tip: "Stand aside or reduce exposure 30 min before release. Major slippage and gap risk.",
  },
  {
    name: "Consumer Price Index (CPI)",
    currency: "USD / EUR / GBP",
    freq: "Monthly",
    impact: "High",
    color: "#EF4444",
    desc: "Primary inflation measure used by central banks to guide interest rate decisions. A hotter-than-expected CPI typically supports the base currency (rate hike expectations). A weak print may trigger selling and rate cut expectations.",
    tip: "Watch the month-on-month figure — it captures the current trend better than year-on-year.",
  },
  {
    name: "Interest Rate Decision",
    currency: "USD / EUR / GBP / JPY",
    freq: "6–8 times per year (per central bank)",
    impact: "High",
    color: "#EF4444",
    desc: "The most significant scheduled event for each currency. The Federal Reserve (FOMC), ECB, Bank of England, and Bank of Japan set overnight lending rates. Rate changes or hawkish/dovish guidance create large, sustained directional moves.",
    tip: "The press conference and statement wording often moves markets more than the rate decision itself.",
  },
  {
    name: "Gross Domestic Product (GDP)",
    currency: "USD / EUR / GBP",
    freq: "Quarterly (preliminary, revised, final)",
    impact: "High",
    color: "#EF4444",
    desc: "Measures total economic output. Stronger growth supports the currency; contraction (two negative quarters = recession) weighs on it. GDP preliminary readings move markets most — revisions tend to have smaller impact.",
    tip: "GDP data is backward-looking. Forward guidance and PMI data often signal GDP trends in advance.",
  },
  {
    name: "Purchasing Managers' Index (PMI)",
    currency: "USD / EUR / GBP",
    freq: "Monthly (flash and final)",
    impact: "Medium",
    color: "#F59E0B",
    desc: "Forward-looking survey of business conditions in manufacturing and services. A reading above 50 signals expansion; below 50 signals contraction. Often used as a leading indicator for GDP and employment trends.",
    tip: "Services PMI matters more than manufacturing PMI in most developed economies.",
  },
  {
    name: "Retail Sales",
    currency: "USD / GBP / EU",
    freq: "Monthly",
    impact: "Medium",
    color: "#F59E0B",
    desc: "Measures consumer spending, which drives ~70% of US GDP. A strong retail sales print signals healthy consumer demand and supports the base currency. Weak prints may signal economic slowdown and weigh on the currency.",
    tip: "Core retail sales (excluding autos) is watched more closely than the headline figure.",
  },
  {
    name: "Central Bank Speeches",
    currency: "All major currencies",
    freq: "Multiple times per month",
    impact: "Medium–High",
    color: "#F59E0B",
    desc: "Speeches from Federal Reserve governors, ECB officials, and other central bank members can shift market expectations materially. Hawkish comments (rate hike bias) support the currency; dovish comments (rate cut bias) weaken it.",
    tip: "Speeches from Fed Chair and ECB President carry the most weight. Others have more limited impact.",
  },
  {
    name: "Unemployment Rate",
    currency: "USD / EUR / GBP",
    freq: "Monthly",
    impact: "Medium",
    color: "#F59E0B",
    desc: "A key labour market indicator alongside NFP. Rising unemployment signals economic weakness; falling unemployment supports rate hike expectations. The US unemployment rate is released alongside NFP on the first Friday of each month.",
    tip: "The participation rate provides important context — falling unemployment with falling participation can be misleading.",
  },
];

const calendarColumns = [
  { col: "Time",     desc: "Scheduled release time in server time (GMT+2 or GMT+3 depending on DST). Actual release may vary by a few minutes." },
  { col: "Currency", desc: "The currency most directly affected by the event (e.g. USD for US data, EUR for ECB events)." },
  { col: "Impact",   desc: "Expected market impact: High (red), Medium (yellow), Low (grey). Based on historical volatility and market significance." },
  { col: "Event",    desc: "Name of the economic release or event. Click for detailed description in the calendar." },
  { col: "Actual",   desc: "The released figure — shown after the event fires. Green = beat forecast, red = missed forecast." },
  { col: "Forecast", desc: "Consensus estimate from economists. The deviation between Actual and Forecast typically drives the market reaction." },
  { col: "Previous", desc: "The prior period's released value. Provides trend context when comparing with the new actual figure." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function EconomicCalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.calendar" });
  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Economic Calendar" }]}
        stats={[{ value: "Live", label: "Real-time updates" }, { value: "3", label: "Impact levels" }, { value: "Free", label: "All accounts" }]}
      />

      {/* ── Live widget ──────────────────────────────────────────── */}
      <section className="py-14 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Live Data</div>
          <h2 className="text-3xl font-extrabold text-white mb-4 text-center">Upcoming Economic Events</h2>
          <p className="text-white/40 text-[15px] text-center mb-8 max-w-xl mx-auto">
            Filter by impact level and currency. High-impact events (red) are the most market-moving — plan your trades accordingly.
          </p>
          <EconomicCalendarWidget />
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="https://www.mql5.com/en/economic-calendar" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#00CC44] hover:text-[#00DD4A] transition-colors border border-[#00CC44]/25 hover:border-[#00CC44]/50 px-5 py-2.5 rounded-xl">
              MQL5 Full Calendar →
            </Link>
            <Link href="https://www.tradingview.com/economic-calendar/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/45 hover:text-white/65 transition-colors border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-xl">
              TradingView Calendar →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How to read the calendar ─────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">How to Read</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">Understanding the Calendar Columns</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                Each row in the economic calendar represents a scheduled data release or event. Understanding what each column means helps you interpret the information and assess its relevance to your trades.
              </p>
              <div className="space-y-2">
                {calendarColumns.map(({ col, desc }) => (
                  <div key={col} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3">
                    <span className="text-[12px] font-bold text-[#111827] min-w-[90px] flex-shrink-0">{col}</span>
                    <span className="text-[12px] text-gray-500 leading-relaxed">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Trader Tips</div>
              <div className="space-y-3">
                {[
                  { t: "Focus on the deviation, not just the number", d: "Markets react to how the actual figure differs from the forecast — not from the previous release. A CPI that is 0.3% above forecast moves markets more than one that is 0.3% above prior." },
                  { t: "Check the calendar every morning",             d: "Review the day's high-impact events before your session opens. Know which pairs and instruments could see volatility and at what time." },
                  { t: "Factor in correlated markets",                 d: "US data affects not just USD pairs — it moves Gold (XAUUSD), US indices (US30, NAS100), and all major pairs simultaneously." },
                  { t: "Spreads widen around key events",              d: "During and immediately after high-impact releases, spreads may widen significantly. Factor this into stop loss placement and trade sizing." },
                  { t: "Use the previous value for trend context",     d: "A series of improving GDP or CPI readings can confirm a trend, giving greater weight to the current release and its market impact." },
                ].map(({ t, d }) => (
                  <div key={t} className="bg-white border border-gray-100 rounded-xl p-4">
                    <div className="text-[13px] font-bold text-[#111827] mb-1">{t}</div>
                    <div className="text-[12px] text-gray-500 leading-relaxed">{d}</div>
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
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Impact Levels</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">Understanding Event Impact</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">Each event is rated by its expected market impact. Use these ratings to prioritise which events to monitor and plan for.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { level: "High Impact",   color: "#EF4444", bgColor: "rgba(239,68,68,0.08)",   borderColor: "rgba(239,68,68,0.2)",  desc: "Events very likely to cause significant and rapid price movements. Requires active risk management.", examples: ["FOMC Rate Decision","Non-Farm Payrolls (US)","ECB Rate Decision","US CPI / Core CPI","UK Budget / BoE Decision"] },
              { level: "Medium Impact", color: "#F59E0B", bgColor: "rgba(245,158,11,0.08)",  borderColor: "rgba(245,158,11,0.2)", desc: "Events that may cause moderate market movement, particularly for directly affected currency pairs.", examples: ["Retail Sales","PMI (Manufacturing/Services)","Trade Balance","Consumer Confidence","JOLTS Job Openings"] },
              { level: "Low Impact",    color: "#6B7280", bgColor: "rgba(107,114,128,0.08)", borderColor: "rgba(107,114,128,0.2)",desc: "Minor data releases unlikely to cause significant moves on their own, but worth noting in context.", examples: ["Housing Starts","Building Permits","Wholesale Inventories","Regional Manufacturing","Minor Speeches"] },
            ].map(({ level, color, bgColor, borderColor, desc, examples }) => (
              <div key={level} className="rounded-2xl p-6" style={{ background: bgColor, border: `1px solid ${borderColor}` }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                  <span className="text-[14px] font-bold text-[#111827]">{level}</span>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-4">{desc}</p>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Key Examples</div>
                <ul className="space-y-1">
                  {examples.map(e => (
                    <li key={e} className="text-[12px] text-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Major event types deep-dive ───────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Event Guide</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Major Economic Event Types</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Understanding the purpose and market impact of key economic releases is essential for trading around news events effectively. Here are the most closely watched events.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {majorEventTypes.map(({ name, currency, freq, impact, color, desc, tip }) => (
              <div key={name} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: color }} />
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ml-auto"
                    style={{ color, background: `${color}20`, border: `1px solid ${color}30` }}>
                    {impact} Impact
                  </span>
                </div>
                <h4 className="text-[13px] font-bold text-white mb-1">{name}</h4>
                <div className="flex flex-col gap-0.5 mb-3">
                  <span className="text-[10px] text-[#00CC44] font-semibold">{currency}</span>
                  <span className="text-[10px] text-white/30">{freq}</span>
                </div>
                <p className="text-[11px] text-white/40 leading-relaxed mb-3 flex-1">{desc}</p>
                <div className="bg-white/4 border border-white/6 rounded-lg p-2.5 mt-auto">
                  <div className="text-[9px] font-bold text-[#00CC44] uppercase tracking-wider mb-1">Trader Tip</div>
                  <p className="text-[10px] text-white/50 leading-relaxed">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volatility warning ────────────────────────────────────── */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 flex-shrink-0"
              style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
              <IconInfo className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-amber-900 mb-2">Volatility & Risk Warning</div>
              <p className="text-[13px] text-amber-800 leading-relaxed">
                During high-impact economic events, market prices can move rapidly and significantly within seconds of a data release. Spreads may widen substantially, slippage may occur, and stop-loss orders may be executed at prices different from those requested. Always ensure adequate risk management is in place before trading around major news releases. Economic calendar data is for informational purposes only and does not constitute investment advice. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={t("faq_title")}
        subtitle="Common questions about using the economic calendar for trading."
        faqs={econCalFaqs}
      />
    </>
  );
}
