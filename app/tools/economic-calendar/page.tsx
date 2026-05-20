import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import FAQSection from "../../components/ui/FAQSection";
import { IconCalendar, IconActivity, IconBarChart, IconClock, IconInfo } from "../../components/ui/Icons";
import { econCalFaqs } from "../../data/extra-faqs";

export const metadata: Metadata = {
  title: "Economic Calendar",
  description: "Track upcoming economic events, central bank decisions, and market-moving announcements. Use the economic calendar to plan your trading around high-impact events.",
};

const impactLevels = [
  { level: "High Impact", color: "bg-red-500", desc: "Events very likely to cause significant market movement. Includes central bank rate decisions, NFP, CPI, and major GDP releases.", examples: ["Federal Reserve FOMC decision","Non-Farm Payrolls (USA)","European Central Bank rate decision","UK CPI / US CPI inflation data"] },
  { level: "Medium Impact", color: "bg-amber-500", desc: "Events that may cause moderate market movement, particularly for directly affected currencies or assets.", examples: ["Retail Sales data","PMI index releases","Trade balance reports","Consumer confidence surveys"] },
  { level: "Low Impact", color: "bg-gray-400", desc: "Events unlikely to cause significant market movement on their own but worth monitoring in context.", examples: ["Minor economic reports","Low-tier speeches","Regional manufacturing data","Housing starts data"] },
];

export default function EconomicCalendarPage() {
  return (
    <>
      <PageHero badge="Free Tool" title="Economic Calendar" subtitle="Track upcoming economic events, central bank announcements, and market-moving data releases to plan and manage your trading effectively." breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Economic Calendar" }]} stats={[{ value: "24/7", label: "Updated continuously" }, { value: "3", label: "Impact levels" }, { value: "Free", label: "All accounts" }]} />

      {/* Calendar embed section */}
      <section className="py-14 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Live Calendar</div>
          <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-8 text-center">Upcoming Economic Events</h2>

          {/* MQL5 calendar embed */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-[#1F2937] shadow-sm mb-6" style={{ minHeight: 520 }}>
            <iframe
              src="https://www.mql5.com/en/economic-calendar/widget"
              title="Economic Calendar"
              width="100%"
              height="520"
              frameBorder="0"
              style={{ display: "block", background: "#fff" }}
            />
          </div>

          {/* Fallback CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-[13px] text-gray-500 dark:text-[#9CA3AF]">If the calendar does not load, access it directly:</p>
            <Link href="https://www.mql5.com/en/economic-calendar" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold px-5 py-2.5 rounded-xl text-[13px] transition-colors">
              <IconCalendar className="w-4 h-4" /> Open Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">How to Use</div>
              <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-5">Reading the Economic Calendar</h2>
              <div className="space-y-4 text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
                <p>The economic calendar lists upcoming economic data releases and events with the following information for each entry:</p>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["Date & Time",   "When the event is scheduled to be released (shown in your local or server time)"],
                  ["Country",       "The country or region the economic data relates to"],
                  ["Impact Level",  "How likely the event is to cause market movement: Low, Medium, or High"],
                  ["Forecast",      "The consensus expectation for the data, based on analyst estimates"],
                  ["Previous",      "The previous release value for comparison"],
                  ["Actual",        "The actual data, shown after the release"],
                ].map(([k,v])=>(
                  <div key={k} className="flex items-start gap-3 bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl px-4 py-3">
                    <span className="text-[12px] font-bold text-[#111827] dark:text-[#F9FAFB] min-w-[100px] flex-shrink-0">{k}</span>
                    <span className="text-[12px] text-gray-500 dark:text-[#9CA3AF]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Tips for Traders</div>
              <div className="space-y-4">
                {[
                  { t:"Review the calendar daily",       d:"Check the calendar at the start of each trading session to identify any high-impact events that may affect the instruments you trade." },
                  { t:"Pay attention to deviations",      d:"The market often reacts more strongly when actual data deviates significantly from the forecast, rather than from the previous value." },
                  { t:"Watch for correlated instruments", d:"A major US data release affects not just USD pairs, but also gold, indices, and other USD-denominated instruments." },
                  { t:"Consider widening spreads",        d:"Around high-impact events, spreads typically widen. Factor this into your entry and exit calculations." },
                ].map(({ t, d }) => (
                  <div key={t} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl p-4">
                    <div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">{t}</div>
                    <div className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact levels */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Impact Classification</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Understanding Event Impact Levels</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {impactLevels.map(({ level, color, desc, examples }) => (
              <div key={level} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-3 h-3 rounded-full ${color}`} />
                  <span className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB]">{level}</span>
                </div>
                <p className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed mb-4">{desc}</p>
                <div className="text-[10px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-wider mb-2">Examples</div>
                <ul className="space-y-1">
                  {examples.map(e=><li key={e} className="text-[12px] text-gray-600 dark:text-[#9CA3AF] flex items-center gap-2"><span className="text-gray-300 dark:text-[#374151]">·</span>{e}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volatility warning */}
      <section className="py-12 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:"rgba(245,158,11,0.12)", border:"1px solid rgba(245,158,11,0.25)" }}>
              <IconInfo className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-amber-900 dark:text-amber-300 mb-2">Volatility Warning</div>
              <p className="text-[13px] text-amber-800 dark:text-amber-200/60 leading-relaxed">During high-impact economic events, market prices can move rapidly and significantly. Spreads may widen, slippage may increase, and stop-loss orders may be executed at prices different from those requested. Always ensure you have appropriate risk management in place before trading around major news events. Past performance is not indicative of future results.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Economic Calendar FAQs" faqs={econCalFaqs} />
    </>
  );
}
