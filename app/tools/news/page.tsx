import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = { title: "Market News", description: "Stay updated with the latest market news, analysis, and trading insights from Olla Trade." };

const articles = [
  { cat: "Forex",      title: "USD Holds Steady Ahead of Fed Minutes",             date: "May 2026", summary: "The US Dollar maintained its position against major peers as traders await the Federal Reserve's meeting minutes for clues on future rate direction." },
  { cat: "Commodities",title: "Gold Retreats from Record Highs on Dollar Strength", date: "May 2026", summary: "Gold prices pulled back from recent record highs as a stronger US Dollar reduced demand for the safe-haven metal." },
  { cat: "Crypto",     title: "Bitcoin Tests Key Resistance as Institutional Demand Grows", date: "May 2026", summary: "Bitcoin approached key technical resistance levels amid reports of growing institutional adoption and ETF inflows." },
  { cat: "Indices",    title: "European Indices Rise on Positive Earnings Season",  date: "May 2026", summary: "Major European stock indices posted gains as corporate earnings reports exceeded analyst expectations across the technology and energy sectors." },
];

export default function NewsPage() {
  return (
    <>
      <PageHero badge="Market Analysis" title="Market News" subtitle="Stay informed with the latest market developments, economic analysis, and trading insights." breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Market News" }]} />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {articles.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] bg-[#00CC44]/8 text-[#00AA38] border border-[#00CC44]/12 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{a.cat}</span>
                  <span className="text-[11px] text-gray-400">{a.date}</span>
                </div>
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{a.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{a.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-[12px] text-amber-800">
            <strong>Disclaimer:</strong> Market news and analysis is for informational purposes only. It does not constitute investment advice or a recommendation to trade. Past performance is not indicative of future results. Trading involves risk of loss.
          </div>
        </div>
      </section>
    </>
  );
}
