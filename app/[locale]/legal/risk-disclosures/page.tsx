import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import CTASection from "../../../components/CTASection";
import { IconShield, IconActivity, IconRefresh, IconDroplet, IconServer, IconInfo, IconBarChart } from "../../../components/ui/Icons";
import { riskFaqs } from "../../../data/extra-faqs";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Risk Disclosures",
  description: "Important risk disclosures for trading Forex, CFDs, and other financial instruments with Olla Trade. Please read carefully before opening a live account.",
};

const riskCategories = [
  { Icon: IconInfo,     id:"general",    title: "General Trading Risk",          color:"border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-900/10", tc:"text-red-800 dark:text-red-300", desc:"Trading financial instruments including Forex, CFDs, metals, indices, and cryptocurrencies involves a high level of risk and may not be suitable for all investors. It is possible to lose all of your invested capital, or more than your initial deposit in some cases. You should only trade with funds you can afford to lose entirely. Past performance of any financial instrument is not indicative of future results and no forecasts of future performance should be relied upon." },
  { Icon: IconBarChart, id:"leverage",   title: "Leverage and Margin Risk",       color:"border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-900/10", tc:"text-orange-800 dark:text-orange-300", desc:"The use of leverage magnifies both potential gains and potential losses. Leveraged trading means a relatively small movement in the underlying asset can result in a disproportionately large impact on your account balance. At higher leverage levels, a small adverse price movement can eliminate your entire margin for a position. You must understand how leverage works and manage your exposure carefully." },
  { Icon: IconActivity, id:"volatility", title: "Market Volatility Risk",         color:"border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10", tc:"text-amber-800 dark:text-amber-300", desc:"Financial markets can experience sudden, rapid, and significant price movements due to economic data releases, geopolitical events, central bank decisions, and other factors. During these volatile periods, losses can accumulate quickly and significantly. High volatility may also make it difficult to exit a position at your desired price." },
  { Icon: IconRefresh,  id:"slippage",   title: "Slippage and Execution Risk",    color:"border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10", tc:"text-amber-800 dark:text-amber-300", desc:"Slippage occurs when an order is executed at a price different from the price requested. This can happen during periods of high volatility, around major news events, or when market liquidity is low. Stop-loss orders do not guarantee execution at the specified price — in fast-moving markets, execution may occur at a significantly different price." },
  { Icon: IconDroplet,  id:"liquidity",  title: "Liquidity Risk",                 color:"border-yellow-200 dark:border-yellow-900/40 bg-yellow-50 dark:bg-yellow-900/10", tc:"text-yellow-800 dark:text-yellow-300", desc:"Some instruments may have limited liquidity at certain times — particularly outside regular market hours, around public holidays, or during market stress events. Low liquidity can result in wider spreads, difficulty entering or exiting positions at desired prices, and increased slippage. This risk is heightened for less commonly traded instruments." },
  { Icon: IconBarChart, id:"gap",        title: "Market Gap Risk",                 color:"border-yellow-200 dark:border-yellow-900/40 bg-yellow-50 dark:bg-yellow-900/10", tc:"text-yellow-800 dark:text-yellow-300", desc:"Markets can 'gap' — meaning prices jump from one level to another without trading through intermediate prices. This typically occurs when markets reopen after closures (weekends, public holidays) to reflect news or events that occurred during the closure. Stop-loss orders may be executed at significantly different prices than specified during a gap event." },
  { Icon: IconServer,   id:"technical",  title: "Technical and Platform Risk",    color:"border-blue-200 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/10", tc:"text-blue-800 dark:text-blue-300", desc:"Trading is conducted via electronic platforms and internet connectivity. Technical failures including internet outages, platform downtime, hardware failures, and software issues can prevent you from accessing your account, monitoring positions, or executing orders. Olla Trade cannot guarantee continuous platform availability and is not responsible for losses resulting from technical issues outside our control." },
  { Icon: IconActivity, id:"crypto",     title: "Cryptocurrency CFD Risk",        color:"border-purple-200 dark:border-purple-900/40 bg-purple-50 dark:bg-purple-900/10", tc:"text-purple-800 dark:text-purple-300", desc:"Cryptocurrency markets are particularly volatile, largely unregulated, and can experience extreme price movements within very short periods. The value of cryptocurrencies can be highly sensitive to regulatory news, technological developments, market sentiment, and liquidity conditions. Crypto CFD trading is speculative and not appropriate for most retail investors. Only trade crypto CFDs with funds you can fully afford to lose." },
];

const sections = [
  { id: "general",    title: "General Risk" },
  { id: "leverage",   title: "Leverage Risk" },
  { id: "volatility", title: "Volatility Risk" },
  { id: "slippage",   title: "Execution Risk" },
  { id: "liquidity",  title: "Liquidity Risk" },
  { id: "gap",        title: "Market Gap Risk" },
  { id: "technical",  title: "Technical Risk" },
  { id: "crypto",     title: "Crypto CFD Risk" },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function RiskDisclosuresPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PageHero badge="Important — Please Read" title="Risk Disclosures" subtitle="Trading financial instruments involves significant risk. Please read and understand the following risk disclosures in full before opening a live account with Olla Trade." breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: "Risk Disclosures" }]} />

      {/* High-risk banner */}
      <section className="py-8 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/15 rounded-2xl p-6 text-center">
            <div className="text-[15px] font-extrabold text-red-800 dark:text-red-300 mb-2">HIGH RISK INVESTMENT WARNING</div>
            <p className="text-[13px] text-red-700 dark:text-red-300/80 leading-relaxed max-w-2xl mx-auto">CFD and Forex trading involves a high degree of risk. <strong>It is possible to lose all of your invested capital.</strong> You should only trade with money you can afford to lose. Ensure you fully understand the risks involved and seek independent financial advice if necessary.</p>
          </div>
        </div>
      </section>

      {/* Risk categories with TOC */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            {/* Sticky TOC */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-widest mb-4">Risk Categories</div>
                <nav className="space-y-0.5">
                  {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 dark:text-[#9CA3AF] hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors">{s.title}</a>
                  ))}
                </nav>
              </div>
            </div>
            {/* Content */}
            <div className="space-y-5">
              {riskCategories.map(({ Icon, id, title, color, tc, desc }) => (
                <div key={id} id={id} className={`border rounded-2xl p-6 ${color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 flex-shrink-0 ${tc}`} />
                    <h3 className={`text-[15px] font-bold ${tc}`}>{title}</h3>
                  </div>
                  <p className={`text-[13px] leading-relaxed ${tc.replace("800","700").replace("300","200/70")}`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before you trade checklist — dark section */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Self-Assessment</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Before You Start Trading</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              CFD and Forex trading is not suitable for everyone. Before opening a live account, consider whether you can honestly answer yes to each of the following questions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { q: "Do you understand how CFDs and leverage work?",               warn: "If not: study our Trading Conditions and Execution Information pages before proceeding." },
              { q: "Can you afford to lose all of the money you plan to trade?",  warn: "If no: do not trade. CFDs carry risk of total loss. Never trade with essential funds." },
              { q: "Do you understand that past performance is not indicative of future results?", warn: "If not: no strategy, signal, or EA guarantees future profits." },
              { q: "Do you have a written risk management plan (stop losses, position sizing)?", warn: "If not: develop one before live trading. Undisciplined trading accelerates losses." },
              { q: "Are you trading with funds you can keep invested for the medium term?",      warn: "If no: short-term financial pressure leads to emotional, high-risk decisions." },
              { q: "Do you understand the impact of overnight swap charges on open positions?",  warn: "If not: overnight positions carry daily financing costs that affect P&L." },
            ].map(({ q, warn }) => (
              <div key={q} className="bg-white/4 border border-white/8 rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded border border-[#00CC44]/30 bg-[#00CC44]/10 flex-shrink-0 mt-0.5" />
                  <p className="text-[13px] font-semibold text-white leading-relaxed">{q}</p>
                </div>
                <p className="text-[11px] text-white/35 leading-relaxed pl-8">{warn}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-500/8 border border-red-500/20 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-[13px] text-red-300/80 leading-relaxed">
              If you answered <strong className="text-red-300">No</strong> to any of the above questions, we strongly recommend seeking independent financial advice before trading. Opening an account does not obligate you to trade. You can also practise with a demo account first.
            </p>
          </div>
        </div>
      </section>

      {/* General disclaimer */}
      <section className="py-14 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-7">
            <h3 className="text-[15px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-4">General Disclaimer</h3>
            <div className="space-y-3 text-[13px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
              <p>Olla Trade Ltd. operates as an execution-only service and does not provide investment advice, portfolio management, or any personalised financial recommendations. Nothing on this website constitutes investment advice or a solicitation to trade.</p>
              <p>Trading involves risk. The value of your investments may go up or down. You may lose all or more than your initial investment. CFD trading with leverage carries a high level of risk and is not suitable for all investors.</p>
              <p>These risk disclosures do not constitute a complete description of all risks associated with trading. You should seek independent financial advice from a qualified professional before making any trading decisions.</p>
              <p><strong className="text-[#111827] dark:text-[#E5E7EB]">Olla Trade Ltd.</strong> is incorporated in Anguilla (Reg. No. A000001849). Registered address: Grace Complex, The Valley, AI 2640, Anguilla.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Risk Disclosure FAQs" faqs={riskFaqs} />
      <CTASection title="Understand the Risks Before You Trade" subtitle="If you are comfortable with the risks and have read all disclosures, open an account to begin trading." primaryLabel="Open Account" secondaryLabel="Contact Support" secondaryHref="/contact-us" />
    </>
  );
}
