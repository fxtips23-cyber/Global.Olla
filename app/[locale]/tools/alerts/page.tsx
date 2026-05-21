import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import CTASection from "../../../components/CTASection";
import { IconBell, IconMonitor, IconPhone, IconMail, IconShield, IconActivity, IconClock, IconSettings, IconInfo } from "../../../components/ui/Icons";
import { alertsFaqs } from "../../../data/extra-faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Trading Alerts",
  description: "Set custom price and indicator alerts in MetaTrader 4. Monitor the markets efficiently with trading alerts on desktop, mobile, and email — free for all Olla Trade clients.",
};

const alertTypes = [
  { Icon: IconActivity, title: "Price Level Alerts",    desc: "Trigger a notification when an instrument's price reaches a specific bid or ask level. Ideal for monitoring key support, resistance, and breakout levels." },
  { Icon: IconSettings, title: "Indicator Alerts",      desc: "Set alerts based on technical indicator conditions — for example, when an MA crosses, RSI reaches a threshold, or Bollinger Bands are breached." },
  { Icon: IconClock,    title: "Time-Based Alerts",     desc: "Configure alerts to fire at a specific time — useful for reminding you of upcoming economic events or scheduled trading sessions." },
  { Icon: IconInfo,     title: "Margin Level Alerts",   desc: "MT4 can alert you when your account's margin level falls to a specified percentage, helping you manage risk before automatic stop-out occurs." },
];

const deliveryChannels = [
  { Icon: IconMonitor, title: "MT4 Desktop Popup", desc: "An on-screen popup appears in your MT4 desktop terminal when the alert condition is met. Available whenever MT4 is open and running." },
  { Icon: IconPhone,   title: "Mobile Push Notification", desc: "Receive a push notification on your iPhone or Android device via the MT4 mobile app — even when your computer is off." },
  { Icon: IconMail,    title: "Email Notification", desc: "MT4 can send an email when an alert fires. Configure your email address in MT4 → Tools → Options → Email." },
  { Icon: IconBell,    title: "Platform Sound Alert", desc: "Play a custom sound in MT4 when an alert triggers — useful for traders who are actively at their computer but monitoring other work." },
];

const useCases = [
  { step: "01", title: "Breakout Monitoring", desc: "Set price alerts at key support and resistance levels. When price approaches or breaks through a level, receive an alert to assess whether to enter, exit, or adjust a position." },
  { step: "02", title: "News Event Preparation", desc: "Set a time alert before a major economic release to remind yourself to review your open positions, adjust stop losses, or stand aside during high-volatility periods." },
  { step: "03", title: "Risk Management Monitoring", desc: "Configure margin level alerts to notify you before your account reaches the margin call level, giving you time to add funds or reduce position size." },
  { step: "04", title: "Re-entry Setups", desc: "After missing an entry, set a price alert at your preferred entry level. When price returns, you receive a notification to reassess whether the setup is still valid." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function AlertsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.alerts" });
  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")} breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Trading Alerts" }]} stats={[{ value: "MT4", label: "Platform" }, { value: "Free", label: "All accounts" }, { value: "3", label: "Alert channels" }]} />

      {/* What are alerts */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Overview</div>
              <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-5 leading-tight">What Are Trading Alerts?</h2>
              <div className="space-y-4 text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
                <p>Trading alerts are automated notifications that fire when a pre-set condition is met — such as a price reaching a specific level, a technical indicator crossing a threshold, or a time condition being triggered.</p>
                <p>In MetaTrader 4, alerts are a built-in feature available on all platforms: desktop, WebTrader, iOS, and Android. They allow you to step away from your screens while staying informed about critical market levels.</p>
                <p>Alerts are purely informational — they do not automatically execute trades. For automated trade execution, you would use an Expert Advisor (EA).</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["Price Alerts","Set notifications at any price level"],["Indicator Alerts","Trigger on MA crosses, RSI levels"],["Time Alerts","Remind yourself of scheduled events"],["Margin Alerts","Monitor your account risk level"]].map(([t,d])=>(
                <div key={t} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl p-4">
                  <div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">{t}</div>
                  <div className="text-[12px] text-gray-500 dark:text-[#9CA3AF]">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alert types */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Alert Types</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Types of Trading Alerts</h2>
            <p className="text-gray-500 dark:text-[#9CA3AF] max-w-xl mx-auto text-[15px]">MetaTrader 4 supports several types of alert conditions to suit different monitoring needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {alertTypes.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                <h3 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery channels */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Delivery</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">How Alerts Are Delivered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryChannels.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-white dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                <h3 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to set up */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Setup Guide</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">How to Set Up Alerts in MT4</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              { platform: "Desktop (Windows)", steps: ["Open MetaTrader 4 on your computer.","Right-click any price level on a chart — select 'Set Alert'.","Configure the alert condition, type, and notification method.","Click 'Add' to activate the alert.","Manage all alerts via View → Terminal → Alerts tab."] },
              { platform: "Mobile (iOS/Android)", steps: ["Open the MT4 mobile app and navigate to a chart.","Tap and hold on the price level where you want an alert.","Select 'Set Alert' from the context menu.","Choose the alert condition and enable push notifications.","Ensure push notifications are enabled in your device settings for MT4."] },
            ].map(({ platform, steps }) => (
              <div key={platform} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <h3 className="text-[15px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-4">{platform}</h3>
                <ol className="space-y-2.5">
                  {steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-gray-600 dark:text-[#9CA3AF]">
                      <span className="w-5 h-5 rounded-full bg-[#00CC44] text-black text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>{s}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">How Traders Use Alerts</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Practical Alert Strategies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <div className="text-2xl font-extrabold text-[#00CC44] mb-3">{step}</div>
                <h4 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">{title}</h4>
                <p className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert configuration reference */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Configuration Guide</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Real-World Alert Examples</h2>
            <p className="text-white/40 text-[15px] max-w-xl mx-auto">Concrete examples of how traders configure alerts for common trading scenarios in MT4.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-sm min-w-[680px]">
              <thead className="border-b border-white/8 bg-white/4">
                <tr>
                  {["Scenario","Instrument","Alert Type","Trigger Condition","Delivery Method","Purpose"].map(h => (
                    <th key={h} className="px-4 py-3.5 text-left text-[10px] font-bold text-white/30 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Resistance breakout",     "EUR/USD",  "Price Level",   "Ask ≥ 1.09500",                    "Desktop + Mobile", "Entry trigger for breakout strategy"],
                  ["Support level approach",  "GBP/USD",  "Price Level",   "Bid ≤ 1.26000",                    "Mobile Push",      "Watch for bounce from key support"],
                  ["Before NFP release",      "USD/JPY",  "Time Alert",    "08:25 UTC on NFP Friday",          "Desktop Popup",    "Reminder to check positions before data"],
                  ["Gold at key level",       "XAUUSD",   "Price Level",   "Bid ≥ 2,400",                      "Mobile + Email",   "Monitor key psychological resistance"],
                  ["MA crossover",            "EURUSD H4","Indicator",     "EMA(50) crosses EMA(200)",         "Desktop Popup",    "Signal for trend change on H4 chart"],
                  ["Margin level check",      "All",      "Margin Level",  "Margin level ≤ 150%",              "Mobile Push",      "Early warning before margin call"],
                  ["Pre-market open",         "US30",     "Time Alert",    "09:25 EST (5 min before US open)", "Desktop + Sound",  "Alert to prepare for US session open"],
                ].map(row => (
                  <tr key={row[0]} className="hover:bg-white/3 transition-colors">
                    {row.map((cell, i) => (
                      <td key={i} className={`px-4 py-3 text-[12px] ${i === 0 ? "font-semibold text-white/75" : i === 3 ? "font-mono text-[#00CC44] text-[11px]" : "text-white/40"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MT4 alert settings reference */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">MT4 Settings</div>
              <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-5">Configuring Alerts in MT4</h2>
              <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed mb-6">
                MT4 provides several configuration options for how alerts behave. Access these settings from <strong className="text-[#111827] dark:text-[#E5E7EB]">Tools → Options → Events</strong> in the MT4 desktop terminal.
              </p>
              <div className="space-y-3">
                {[
                  { setting: "Alert sound file",          value: "Select custom .wav file", path: "Tools → Options → Events" },
                  { setting: "Email notification",         value: "Configure SMTP server",   path: "Tools → Options → Email" },
                  { setting: "Push notification",          value: "MetaQuotes ID required",  path: "Tools → Options → Notifications" },
                  { setting: "Alert expiry",               value: "Unlimited / Once only",   path: "Alert configuration dialog" },
                  { setting: "Alert type (Bid/Ask)",       value: "Select Bid or Ask price", path: "Alert condition dropdown" },
                ].map(({ setting, value, path }) => (
                  <div key={setting} className="flex items-start gap-3 bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-bold text-[#111827] dark:text-[#F9FAFB]">{setting}</div>
                      <div className="text-[11px] text-gray-400 dark:text-[#6B7280] font-mono mt-0.5">{path}</div>
                    </div>
                    <span className="text-[11px] text-[#00CC44] font-medium flex-shrink-0">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Push Notification Setup</div>
              <h3 className="text-[20px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-4">Enable Mobile Push Alerts</h3>
              <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed mb-5">To receive push notifications on your phone from MT4 desktop:</p>
              <ol className="space-y-3">
                {[
                  "Install the MT4 mobile app on your iOS or Android device.",
                  "Open the mobile app, go to Settings (gear icon) → Messages → Enable push notifications.",
                  "Note your MetaQuotes ID — found in the mobile app under Settings → Messages.",
                  "In MT4 Desktop, go to Tools → Options → Notifications.",
                  "Enable 'Enable Push Notifications', enter your MetaQuotes ID, click Test to verify.",
                  "Now any desktop alert set to 'Push Notification' will appear on your phone instantly.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-gray-600 dark:text-[#9CA3AF]">
                    <span className="w-6 h-6 rounded-full bg-[#00CC44] text-black text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Risk reminder */}
      <section className="py-12 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
              <IconShield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-amber-900 dark:text-amber-300 mb-2">Risk Management Reminder</div>
              <p className="text-[13px] text-amber-800 dark:text-amber-200/60 leading-relaxed">Trading alerts are a tool to help you monitor markets — they do not remove trading risk. Receiving an alert does not guarantee that a trade will be profitable. Always apply appropriate risk management including stop-loss orders, position sizing, and never risk more than you can afford to lose. Past performance is not indicative of future results.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} subtitle="Common questions about setting up and using trading alerts in MetaTrader 4." faqs={alertsFaqs} />
      <CTASection title={t("cta_title")} subtitle="Open an account and access the full MT4 alert system at no extra cost." primaryLabel="Open Account" secondaryLabel="Download MT4" secondaryHref="/trading/platform" />
    </>
  );
}
