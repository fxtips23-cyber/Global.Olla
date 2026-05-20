import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import { IconCheck } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "Trading Education", description: "Learn to trade Forex and CFDs with Olla Trade's structured education — Basic, Advanced, and Professional levels." };

const levels = [
  { badge: "Level 1", title: "Basic", topics: ["What is Forex Trading?","How Currency Pairs Work","Understanding Pips and Lots","Basic Order Types — Buy, Sell, Stop, Limit","What is Leverage and Margin?","Reading Basic Price Charts","Introduction to Risk Management","Demo Account Practice"] },
  { badge: "Level 2", title: "Advanced", topics: ["Technical Analysis Fundamentals","Support and Resistance Levels","Trend Lines and Channels","Moving Averages — SMA, EMA","RSI, MACD, Bollinger Bands","Fundamental Analysis Basics","Trading Economic News Events","Position Sizing and Money Management"] },
  { badge: "Level 3", title: "Professional", topics: ["Advanced Chart Patterns","Elliott Wave Theory","Multi-Timeframe Analysis","Building a Trading Plan","Algorithmic Trading with EAs","Backtesting Strategies on MT4","Portfolio Diversification","Advanced Risk Management"] },
];

export default function EducationPage() {
  return (
    <>
      <PageHero badge="Learn to Trade" title="Trading Education" subtitle="Structured learning from beginner to professional. Build your trading knowledge at your own pace." breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Education" }]} />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {levels.map((l) => (
              <div key={l.title} className="bg-white rounded-2xl border border-gray-100 p-7">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{l.badge}</div>
                <h2 className="text-2xl font-extrabold text-[#111827] mb-5">{l.title}</h2>
                <ul className="space-y-2.5">
                  {l.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                      <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-[#00CC44] mt-0.5">
                        <IconCheck className="w-3 h-3" />
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-[13px] text-gray-500 mb-4">All educational content is for informational purposes only and does not constitute investment advice.</p>
            <Link href="/tools/glossary" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">Browse the Forex Glossary →</Link>
          </div>
        </div>
      </section>
      <CTASection title="Put Your Knowledge to Work" subtitle="Open a demo account and practise your strategies risk-free before going live." primaryLabel="Open Account" secondaryLabel="View Forex Glossary" secondaryHref="/tools/glossary" />
    </>
  );
}
