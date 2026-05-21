import type { Metadata } from "next";
import Link from "next/link";
import ExecutionFlowVisual from "../../components/visuals/ExecutionFlowVisual";
import FAQSection from "../../components/ui/FAQSection";
import CTASection from "../../components/CTASection";
import PageHero from "../../components/ui/PageHero";
import {
  IconActivity, IconClock, IconShield, IconCheck, IconRefresh,
  IconServer, IconBarChart, IconDroplet, IconBolt, IconTarget,
  IconLock, IconInfo, IconGlobe, IconSettings, IconDatabase,
} from "../../components/ui/Icons";
import { executionFaqs } from "../../data/faqs";
import type { ComponentType } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Execution Information",
  description:
    "Learn about order execution, pricing methodology, trading infrastructure, and execution policies at Olla Trade.",
};

/* ─── Shared icon card (matches homepage card style exactly) ──────────── */
function Card({
  Icon, title, desc,
}: { Icon: ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="group bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6 hover:border-gray-200 dark:hover:border-[#374151] hover:shadow-md transition-all duration-200">
      <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-5 group-hover:border-[#111827]/20 dark:group-hover:border-[#374151] group-hover:text-[#111827] dark:group-hover:text-[#E5E7EB] transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">{title}</h4>
      <p className="text-[13px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Inline feature row card ──────────────────────────────────────────── */
function FeatureRow({
  Icon, title, desc,
}: { Icon: ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl p-4">
      <div className="w-9 h-9 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">{title}</div>
        <div className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function ExecutionInformationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "trading.conditions" });
  return (
    <>
      {/* ── 1. Hero (always dark — same as every inner page) ─────────── */}
      <PageHero
        badge="Trading Infrastructure"
        title="Execution Information"
        subtitle="Learn about order execution, pricing methodology, trading infrastructure, and execution policies at Olla Trade."
        breadcrumbs={[{ label: "Execution Information" }]}
        stats={[
          { value: "Market",  label: "Execution Type" },
          { value: "MT4",     label: "Trading Platform" },
          { value: "24/5",    label: "Market Access" },
        ]}
      >
        <div className="flex flex-wrap gap-3 mt-7">
          <Link href="https://direct.ollatrade.com/auth/register"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
            style={{ background: "#00CC44", color: "#000" }}>
            Open Account
          </Link>
          <Link href="/contact-us"
            className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/65 hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
            Contact Support
          </Link>
        </div>
      </PageHero>

      {/* Cross-link to formal policy */}
      <div className="bg-[#0A1220] border-b border-white/6 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/35">
            Looking for the formal legal Order Execution Policy document?
          </p>
          <Link href="/legal/execution-policy"
            className="text-[12px] font-semibold text-[#00CC44] hover:text-[#00DD4A] transition-colors flex items-center gap-1.5 flex-shrink-0">
            View Order Execution Policy →
          </Link>
        </div>
      </div>

      {/* ── 2. Introduction — white section ─────────────────────────── */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">About Our Execution</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-5 leading-tight">
                How Olla Trade Executes Orders
              </h2>
              <div className="space-y-4 text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
                <p>Olla Trade operates as an execution-only service using a market execution model. When you place a trade, your order is processed through our trading infrastructure and submitted to available liquidity at the best price achievable under current market conditions.</p>
                <p>Prices displayed in MetaTrader 4 are derived from aggregated quotes provided by our liquidity providers. These prices are variable and reflect real-time market conditions including supply and demand, overall market liquidity, and the time of the active trading session.</p>
                <p>Execution quality may vary depending on market conditions. Olla Trade does not provide investment advice and does not guarantee execution at any specific price. Orders are subject to available liquidity and prevailing market conditions at the time of execution.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: IconActivity, title: "Market Execution",    desc: "Orders filled at best available market price in real time, subject to liquidity." },
                { Icon: IconGlobe,    title: "Global Markets",      desc: "Access to Forex, Metals, Indices, Energies, Crypto, and Stocks — all through MT4." },
                { Icon: IconServer,   title: "MT4 Infrastructure",  desc: "All orders processed through MetaTrader 4 — industry-standard trading platform." },
                { Icon: IconBarChart, title: "Variable Pricing",    desc: "Prices derived from liquidity providers and subject to prevailing market conditions." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5">
                  <div className="w-8 h-8 rounded-lg border border-gray-200 dark:border-[#1F2937] bg-white dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">{title}</div>
                  <div className="text-[12px] text-gray-500 dark:text-[#6B7280] leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Execution flow visual — content section ──────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Trading Infrastructure</div>
              <h2 className="text-3xl font-extrabold text-white mb-5">Order Routing & Execution Flow</h2>
              <p className="text-white/45 text-[14px] leading-relaxed mb-6">
                When you submit an order in MetaTrader 4, it is transmitted to Olla Trade's execution infrastructure, validated against available margin and risk parameters, then routed to our liquidity pool. The best available price is selected and the fill confirmation is returned to your terminal — the entire process completing in milliseconds under normal conditions.
              </p>
              <div className="space-y-3">
                {[
                  { label: "STP Routing",                  desc: "Orders are routed straight-through to liquidity providers without manual dealer intervention under normal conditions." },
                  { label: "Best Available Price",          desc: "Our pricing engine aggregates quotes from multiple liquidity providers to achieve the best available bid and ask at time of execution." },
                  { label: "Execution Subject to Liquidity",desc: "Final execution price depends on available market liquidity and conditions at the moment the order is processed." },
                  { label: "No Requotes",                   desc: "Market execution means all orders are accepted at the prevailing price — you will not be asked to confirm a different price." },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00CC44]/15 border border-[#00CC44]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#00CC44]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white/75 mb-0.5">{label}</div>
                      <div className="text-[12px] text-white/35 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <ExecutionFlowVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Order Execution Model — soft gray section ─────────────── */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Execution Model</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Order Execution Explained</h2>
            <p className="text-gray-500 dark:text-[#9CA3AF] max-w-2xl mx-auto text-[15px]">
              Understanding how different order types are processed. Execution quality may vary depending on market conditions and available liquidity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { Icon: IconBolt,     title: "Market Execution",    desc: "Market orders are filled at the best available price at the time of execution. The final price may differ from the quoted price at the moment the order was placed, particularly in fast-moving market conditions." },
              { Icon: IconClock,    title: "Pending Orders",      desc: "Pending orders instruct the platform to open a position when the market reaches a specified price. Types include Buy/Sell Limit and Buy/Sell Stop. Execution at the exact specified price is subject to available market liquidity." },
              { Icon: IconLock,     title: "Stop Loss Orders",    desc: "A Stop Loss order automatically closes a position at a specified loss level. Stop Loss orders help limit potential losses but do not guarantee closure at the exact requested price, particularly during rapid price movements or market gaps." },
              { Icon: IconTarget,   title: "Take Profit Orders",  desc: "A Take Profit order closes a position automatically when the market reaches a specified profit level. Like all order types, execution is subject to prevailing market liquidity and conditions at the time the price is reached." },
              { Icon: IconRefresh,  title: "Slippage",            desc: "Slippage refers to the difference between the expected execution price and the actual fill price. It can be positive or negative and is most common during high volatility, major economic announcements, or low market liquidity." },
              { Icon: IconInfo,     title: "No Requote Policy",   desc: "Olla Trade does not issue requotes on client orders. All orders are accepted and processed through our market execution model at the best available price. You will not receive a requote popup requesting confirmation at a different price." },
            ].map(({ Icon, title, desc }) => (
              <Card key={title} Icon={Icon} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Trading Infrastructure — white section ────────────────── */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Infrastructure</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Trading Infrastructure</h2>
            <p className="text-gray-500 dark:text-[#9CA3AF] max-w-2xl mx-auto text-[15px]">
              Olla Trade provides access to global financial markets through the MetaTrader 4 platform and integrated trading infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              { Icon: IconServer,   title: "MetaTrader 4 Platform",  desc: "All client orders are placed and managed through the MetaTrader 4 trading platform. MT4 provides direct access to your account, pricing feeds, order management, and position monitoring across desktop, web, iOS, and Android." },
              { Icon: IconDatabase, title: "Order Processing",        desc: "Orders submitted through MT4 are routed to our trading servers for processing. The server validates the order against current market conditions and available liquidity before executing at the best achievable price." },
              { Icon: IconGlobe,    title: "Liquidity Routing",       desc: "Olla Trade aggregates pricing from liquidity providers to present competitive bid and ask prices in MT4. Orders are matched against available liquidity from the pool at the time of execution." },
              { Icon: IconBarChart, title: "Pricing Feeds",           desc: "Real-time price feeds from liquidity providers are aggregated and streamed to client MT4 platforms. Prices are variable and update continuously during market hours." },
              { Icon: IconActivity, title: "Execution Environment",   desc: "Olla Trade's execution environment is designed to process orders efficiently under normal market conditions. During periods of extreme volatility, execution conditions may deviate from normal." },
              { Icon: IconSettings, title: "Platform Availability",   desc: "While Olla Trade aims to maintain consistent platform availability, no trading platform can guarantee 100% uptime. Clients are responsible for maintaining adequate internet connectivity." },
            ].map(({ Icon, title, desc }) => (
              <Card key={title} Icon={Icon} title={title} desc={desc} />
            ))}
          </div>

          {/* Order flow diagram */}
          <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
            <div className="text-[11px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-widest mb-6 text-center">Order Flow</div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {[
                { label: "Client MT4",        sub: "Desktop / Web / Mobile" },
                { arrow: true },
                { label: "Trading Server",    sub: "Order Processing" },
                { arrow: true },
                { label: "Liquidity Pool",    sub: "Price Aggregation" },
                { arrow: true },
                { label: "Market Execution",  sub: "Best Available Price" },
              ].map((item, i) =>
                "arrow" in item ? (
                  <span key={i} className="text-gray-300 dark:text-[#374151] text-xl hidden sm:block">→</span>
                ) : (
                  <div key={i} className="flex flex-col items-center text-center px-4 py-3 bg-white dark:bg-[#0A1220] border border-gray-100 dark:border-[#1F2937] rounded-xl min-w-[110px]">
                    <div className="text-[12px] font-bold text-[#111827] dark:text-[#E5E7EB]">{item.label}</div>
                    {item.sub && <div className="text-[10px] text-gray-400 dark:text-[#6B7280] mt-0.5">{item.sub}</div>}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Pricing & Liquidity — soft gray section ───────────────── */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Pricing & Spreads</div>
              <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-5 leading-tight">
                How Pricing and Spreads Work
              </h2>
              <div className="space-y-4 text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
                <p>The prices displayed in MT4 reflect the aggregated best bid and ask prices from our liquidity providers. The spread — the difference between the bid and ask price — represents the cost of trading and fluctuates based on current market conditions.</p>
                <p>Spreads are variable. They are typically tighter during the main market sessions when liquidity is highest. Spreads may widen significantly during economic news releases, outside regular trading hours, during low-liquidity periods such as public holidays, and during periods of exceptional market volatility.</p>
                <p>The spreads shown on the Olla Trade website represent typical minimum spreads achievable under normal market conditions. These figures are indicative and are not guaranteed to be available at all times.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { Icon: IconBarChart, title: "Variable Spreads",    desc: "Spreads fluctuate in real time based on available liquidity and current market activity. Tighter spreads are generally available during peak market hours." },
                { Icon: IconDroplet,  title: "Liquidity Impact",    desc: "Market liquidity affects both pricing and execution. Lower liquidity — such as during off-hours or thinly traded instruments — can result in wider spreads and higher slippage risk." },
                { Icon: IconClock,    title: "Market Hours Effect", desc: "Different trading sessions (Sydney, Tokyo, London, New York) have varying levels of liquidity. Trading during session overlaps typically provides the best conditions." },
                { Icon: IconActivity, title: "News Events",         desc: "Major economic data releases can cause rapid price movements and temporary widening of spreads. Exercise caution around major scheduled announcements." },
              ].map(({ Icon, title, desc }) => (
                <FeatureRow key={title} Icon={Icon} title={title} desc={desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Slippage — white section ──────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Slippage</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Understanding Slippage</h2>
            <p className="text-gray-500 dark:text-[#9CA3AF] max-w-2xl mx-auto text-[15px]">
              Slippage is a normal feature of trading in real financial markets. Understanding when and why it occurs helps you manage your trades more effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Positive */}
            <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,204,68,0.10)", border: "1px solid rgba(0,204,68,0.22)" }}>
                  <IconCheck className="w-5 h-5 text-[#00CC44]" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB]">Positive Slippage</h3>
              </div>
              <p className="text-[13px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed mb-4">
                Positive slippage occurs when an order is filled at a <strong className="text-[#111827] dark:text-[#E5E7EB]">better price</strong> than requested. For example, if you place a buy order at 1.08500 but the order executes at 1.08490, you received a more favourable entry. This benefits the client.
              </p>
              <div className="bg-[#00CC44]/8 dark:bg-[#00CC44]/10 border border-[#00CC44]/15 rounded-xl px-4 py-3">
                <div className="text-[12px] text-[#00AA38] font-semibold">Example: Better fill than requested</div>
                <div className="text-[11px] text-gray-500 dark:text-[#6B7280] mt-0.5">Requested: Buy at 1.08500 → Filled at 1.08490</div>
              </div>
            </div>
            {/* Negative */}
            <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.22)" }}>
                  <IconRefresh className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB]">Negative Slippage</h3>
              </div>
              <p className="text-[13px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed mb-4">
                Negative slippage occurs when an order is filled at a <strong className="text-[#111827] dark:text-[#E5E7EB]">worse price</strong> than requested. This is more common during rapid price movement or reduced liquidity. Olla Trade executes at the best available price but cannot guarantee the requested price under all conditions.
              </p>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl px-4 py-3">
                <div className="text-[12px] text-red-700 dark:text-red-400 font-semibold">Example: Worse fill due to market movement</div>
                <div className="text-[11px] text-gray-500 dark:text-[#6B7280] mt-0.5">Requested: Buy at 1.08500 → Filled at 1.08520</div>
              </div>
            </div>
          </div>

          {/* When slippage occurs */}
          <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-7">
            <h3 className="text-base font-bold text-[#111827] dark:text-[#F9FAFB] mb-5">When Slippage Is More Likely</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { Icon: IconActivity, title: "High Volatility",   desc: "Periods when prices move rapidly — common around major economic releases or geopolitical events." },
                { Icon: IconDroplet,  title: "Low Liquidity",     desc: "When fewer buyers and sellers are active — such as outside peak trading sessions or during thin markets." },
                { Icon: IconBarChart, title: "Major News Events", desc: "Scheduled data releases cause sudden, sharp price movements that can cause fills at different prices." },
                { Icon: IconClock,    title: "Market Openings",   desc: "When markets reopen after closures, prices may gap to reflect news that occurred while the market was closed." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white dark:bg-[#0A1220] border border-gray-100 dark:border-[#1F2937] rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0F1720] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">{title}</div>
                  <div className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Order Types — soft gray section ───────────────────────── */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Order Types</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Available Order Types</h2>
            <p className="text-gray-500 dark:text-[#9CA3AF] max-w-2xl mx-auto text-[15px]">
              MetaTrader 4 supports a range of order types to help you manage your trading positions. All order types are subject to prevailing market conditions and available liquidity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { Icon: IconBolt,   name: "Market Order",    desc: "Executed immediately at the best available current market price. The fill price may differ from the quoted price at the moment the order is placed.",                                                                               tag: "Immediate",      tc: "bg-[#00CC44]/8 text-[#00AA38] border-[#00CC44]/12" },
              { Icon: IconTarget, name: "Buy/Sell Limit",  desc: "Pending order to open at a more favourable price than current market. A Buy Limit opens below current price; a Sell Limit opens above.",                                                                                      tag: "Better Price",   tc: "bg-blue-50 dark:bg-blue-900/15 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800" },
              { Icon: IconActivity,name:"Buy/Sell Stop",  desc: "Pending order to open beyond the current market level. A Buy Stop triggers above current price; a Sell Stop triggers below.",                                                                                                   tag: "Breakout",       tc: "bg-purple-50 dark:bg-purple-900/15 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800" },
              { Icon: IconLock,   name: "Stop Loss",       desc: "Automatically closes a losing position when the market reaches a specified level. Helps manage downside risk. Execution is not guaranteed at the exact price during rapid price movements.",                                   tag: "Risk Management",tc: "bg-amber-50 dark:bg-amber-900/15 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800" },
              { Icon: IconCheck,  name: "Take Profit",     desc: "Automatically closes a profitable position when the market reaches a target price. Subject to market conditions and available liquidity at the time of execution.",                                                           tag: "Profit Target",  tc: "bg-[#00CC44]/8 text-[#00AA38] border-[#00CC44]/12" },
            ].map(({ Icon, name, desc, tag, tc }) => (
              <div key={name} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5 flex flex-col">
                <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3 inline-block w-fit ${tc}`}>{tag}</span>
                <h4 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">{name}</h4>
                <p className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Risk Warning — white section with amber box ───────────── */}
      <section className="py-14 bg-white dark:bg-[#050A0F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Compliance</div>
            <h2 className="text-2xl font-extrabold text-[#111827] dark:text-[#F9FAFB]">Execution Risk Warning</h2>
          </div>
          <div className="border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
                <IconInfo className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="space-y-2.5 text-[13px] text-amber-800 dark:text-amber-200/60 leading-relaxed">
                <p>Trading financial instruments involves a significant level of risk and is not suitable for all investors. You may lose all or more than your initial investment.</p>
                <p>In volatile market conditions, prices may move rapidly and significantly. Execution of orders — including Stop Loss and Take Profit orders — may occur at prices different from those requested. Price gapping can occur when markets reopen after closures.</p>
                <p>Spreads may widen substantially around major economic events, outside regular market hours, and during periods of low liquidity. These widened spreads reflect actual market conditions and are not within Olla Trade&apos;s control.</p>
                <p>Olla Trade Ltd. operates as an execution-only service and does not provide investment advice. You are responsible for your own trading decisions. Please ensure you fully understand the risks involved before trading.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ─────────────────────────────────────────────────────── */}
      <FAQSection
        title="Execution FAQs"
        subtitle="Common questions about order execution, pricing, and trading conditions at Olla Trade."
        faqs={executionFaqs}
      />

      {/* ── 10. Final CTA (always dark — same as every page) ────────────── */}
      <CTASection
        title="Ready to Trade with Olla Trade?"
        subtitle="Open a live account and experience transparent market execution on MetaTrader 4."
        primaryLabel="Open Account"
        primaryHref="https://direct.ollatrade.com/auth/register"
        secondaryLabel="Contact Us"
        secondaryHref="/contact-us"
      />
    </>
  );
}
