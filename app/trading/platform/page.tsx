import { platformFaqs } from '../../data/faqs';
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import FeatureGrid from "../../components/ui/FeatureGrid";
import { IconBarChart, IconCode, IconBell, IconLayers, IconClock, IconActivity, IconMonitor, IconGlobe, IconServer, IconSettings, IconShieldCheck } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "MetaTrader 4 (MT4) Platform", description: "Trade on MetaTrader 4 with Olla Trade. Available on Windows, WebTrader, iOS and Android. Advanced charting, EA support, and lightning execution." };

const features = [
  { Icon: IconBarChart,  title: "30+ Technical Indicators",  desc: "Built-in indicators including Moving Averages, MACD, RSI, Bollinger Bands, Ichimoku, and more." },
  { Icon: IconCode,      title: "Expert Advisors (EAs)",     desc: "Full EA and automated trading support. Backtest strategies on historical data before going live." },
  { Icon: IconBell,      title: "Custom Price Alerts",       desc: "Price, indicator, and margin level alerts via MT4 desktop, mobile push, or email." },
  { Icon: IconLayers,    title: "Multi-Chart Layout",        desc: "Monitor multiple instruments and timeframes simultaneously on one screen." },
  { Icon: IconClock,     title: "9 Chart Timeframes",        desc: "Trade across M1 through MN timeframes on candlestick, bar, and line chart types." },
  { Icon: IconActivity,  title: "One-Click Execution",       desc: "Execute orders directly from charts with a single click for instant market response." },
  { Icon: IconSettings,  title: "Full MQL4 Support",        desc: "Build, import, and run automated strategies written in MetaQuotes Language 4." },
  { Icon: IconServer,    title: "VPS Compatible",            desc: "Run MT4 and your EAs on a Virtual Private Server for 24/5 uninterrupted trading." },
];

const platforms = [
  { Icon: IconMonitor, name: "MT4 Desktop (Windows)", desc: "The full-featured client for Windows. Multi-chart layout, full EA support, and local backtesting.", tags: ["Full feature set","Multi-chart","EA support","Backtesting"] },
  { Icon: IconGlobe,   name: "MT4 WebTrader",         desc: "Trade from any modern browser. No downloads, no installations — full MT4 functionality on any device.", tags: ["No install needed","Mac compatible","Any browser","Full order types"] },
  { Icon: IconMonitor, name: "MT4 iOS",               desc: "The official mobile app for iPhone and iPad. Real-time quotes, interactive charts, and push notifications.", tags: ["iPhone & iPad","Push alerts","Live charts","App Store"] },
  { Icon: IconMonitor, name: "MT4 Android",           desc: "Trade on any Android device. Real-time prices, order management, and account monitoring on the go.", tags: ["Any Android","Full order management","Real-time data","Google Play"] },
];

const faqs = [
  { q: "Is MetaTrader 4 free to use?", a: "Yes. MT4 is provided free of charge to all Olla Trade account holders. Download and install on as many devices as needed using your Olla Trade credentials." },
  { q: "What is the Olla Trade server address for MT4?", a: "The MT4 server address is provided in your welcome email after account registration. You need this when setting up MT4 for the first time." },
  { q: "Can I trade on MT4 without downloading it?", a: "Yes. Olla Trade provides access to MT4 WebTrader, which runs in your browser with no installation required." },
  { q: "Are Expert Advisors supported?", a: "Yes. All Olla Trade accounts fully support automated trading through Expert Advisors. Copy .ex4 or .mq4 files to the MT4 Experts folder to deploy your strategy." },
  { q: "Can I backtest on MT4?", a: "Yes. MT4 includes a built-in Strategy Tester. Access it via View > Strategy Tester in the MT4 desktop application." },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero badge="MetaTrader 4" title="Trade on the World's Most Popular Platform" subtitle="MT4 gives you advanced charting, automated trading, real-time execution, and access to all global markets — on every device you own." breadcrumbs={[{ label: "Trading", href: "/trading" }, { label: "Platform" }]} cta={{ label: "Open MT4 Account", href: "https://direct.ollatrade.com/auth/register" }} stats={[{ value: "30+", label: "Indicators" }, { value: "9", label: "Chart Types" }, { value: "4", label: "Platforms" }]} />

      {/* Platform cards */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Available on All Your Devices</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Download or access MT4 on your preferred device. All versions sync to the same account with real-time data.</p>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {platforms.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-100 p-7">
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-5">
                  <p.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold text-[#111827] mb-2">{p.name}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => <span key={t} className="text-[11px] bg-[#00CC44]/8 text-[#00AA38] border border-[#00CC44]/12 px-2.5 py-1 rounded-full">{t}</span>)}
                </div>
                <Link href="https://direct.ollatrade.com/auth/register" className="text-[12px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors">Get Access →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">MT4 Platform Features</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Everything a professional trader needs — built into the world's most trusted trading platform.</p>
          <FeatureGrid features={features} cols={4} />
        </div>
      </section>

      {/* Why MT4 */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-3 text-center">Why MT4 is the Industry Standard</h2>
          <p className="text-white/40 text-center mb-10 max-w-xl mx-auto text-[15px]">Used by millions of traders and brokers worldwide — MT4 has earned its reputation over two decades.</p>
          <FeatureGrid features={[
            { Icon: IconShieldCheck, title: "Proven Reliability",   desc: "MT4 has been the market standard since 2005, trusted by millions of professional and retail traders worldwide." },
            { Icon: IconCode,        title: "Algorithmic Trading",  desc: "Build or deploy automated strategies using MQL4 programming with full backtesting capabilities." },
            { Icon: IconGlobe,       title: "Universal Access",     desc: "Available on every operating system and device — Windows, Mac (via WebTrader), iOS, and Android." },
            { Icon: IconLayers,      title: "Huge EA Ecosystem",    desc: "Access thousands of free and commercial Expert Advisors, indicators, and scripts from the MetaTrader marketplace." },
          ]} cols={4} dark />
        </div>
      </section>

      <FAQSection title="MT4 Platform FAQs" faqs={platformFaqs} />
      <CTASection title="Start Trading on MT4 Today" subtitle="Open your Olla Trade account and access MT4 on all your devices instantly." primaryLabel="Open Account" secondaryLabel="Compare Accounts" secondaryHref="/trading/accounts" />
    </>
  );
}
