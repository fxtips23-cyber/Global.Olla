import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";

export const metadata: Metadata = { title: "Forex Glossary", description: "Learn key Forex and trading terms with the Olla Trade Forex Glossary. From A to Z definitions for every trader." };

const terms=[{term:"Ask Price",def:"The lowest price a seller is willing to accept for a currency pair. Also called the offer price."},{term:"Bid Price",def:"The highest price a buyer is willing to pay for a currency pair."},{term:"CFD",def:"Contract for Difference — a financial derivative that allows you to speculate on price movements without owning the underlying asset."},{term:"Expert Advisor (EA)",def:"An automated trading program that runs on MetaTrader 4 and can execute trades based on pre-set rules without manual intervention."},{term:"Leverage",def:"A mechanism that allows traders to control larger positions with a smaller amount of capital. Leverage amplifies both profits and losses."},{term:"Lot",def:"The standard unit of measurement for a Forex transaction. One standard lot equals 100,000 units of the base currency."},{term:"Margin",def:"The amount of funds required in your account to open and maintain a leveraged position."},{term:"Pip",def:"The smallest standard unit of price movement in a currency pair, typically the fourth decimal place (0.0001) for most pairs."},{term:"Spread",def:"The difference between the bid and ask price. It represents the cost of trading and is measured in pips."},{term:"Stop Loss",def:"An instruction to close a position automatically when it reaches a specified loss level, to limit further losses."},{term:"Take Profit",def:"An instruction to close a position automatically when it reaches a specified profit level."},{term:"Swap",def:"An overnight interest charge (or credit) applied to positions held open past the market close. Also called rollover."}];

export default function GlossaryPage() {
  return (
    <>
      <PageHero badge="Education" title="Forex Glossary" subtitle="Master the language of trading. Our comprehensive glossary covers every key term from A to Z." breadcrumbs={[{label:"Tools",href:"/tools"},{label:"Forex Glossary"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {terms.map(t=>(
              <div key={t.term} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-[#00CC44]/30 transition-colors">
                <div className="text-sm font-bold text-[#00AA38] mb-1">{t.term}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{t.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
