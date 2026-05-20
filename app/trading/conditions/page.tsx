import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = { title: "Trading Conditions", description: "Olla Trade trading conditions: spreads from 0.0 pips, leverage up to 1:500, negative balance protection, and more." };

export default function ConditionsPage() {
  return (
    <>
      <PageHero badge="Professional Conditions" title="Trading Conditions" subtitle="Transparent and competitive trading conditions across all instruments. No hidden fees, no requotes." breadcrumbs={[{label:"Trading"},{label:"Trading Conditions"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[["1:500","Max Leverage"],["0.0 pips","Spreads From"],["$10","Min. Deposit"],["0.01 lots","Min. Trade Size"],["50%","Margin Call"],["20%","Stop Out Level"]].map(([v,l])=>(
              <div key={l} className="bg-white rounded-xl border border-gray-100 p-6 text-center"><div className="text-2xl font-extrabold text-[#00CC44] mb-1">{v}</div><div className="text-sm text-gray-500">{l}</div></div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[{title:"Spreads",body:"Spreads on major Forex pairs start from 0.0 pips on the Elite account and from 1.0 pips on the Standard account. Spreads are variable and may widen during periods of high market volatility, major economic announcements, or low liquidity."},{title:"Leverage",body:"Maximum leverage up to 1:500 on Forex. Leverage varies by instrument: 1:500 for Forex, 1:200 for Metals, 1:100 for Indices and Energies, and 1:10 for Crypto and Stocks. Higher leverage increases both potential profits and losses."},{title:"Order Execution",body:"Olla Trade uses market execution for all accounts. Orders are filled at the best available market price. We do not requote orders. Expert Advisors (EAs) are fully supported on all account types."},{title:"Negative Balance Protection",body:"Negative balance protection is applied to all client accounts. Your losses cannot exceed your deposited balance. If your account falls below zero due to extreme market conditions, the negative balance is reset to zero."}].map(s=>(
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-[#F8FAFC] border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Conditions by Asset Class</h3>
            </div>
            <table className="w-full text-sm">
              <thead className="border-b border-gray-50">
                <tr>{["Asset","Min. Spread","Max Leverage","Margin Call","Stop Out"].map(h=><th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[["Forex","From 0.0 pips","1:500","50%","20%"],["Metals","From 25 pts","1:200","50%","20%"],["Indices","From 1 pt","1:100","50%","20%"],["Energies","From 3 pts","1:100","50%","20%"],["Crypto","From 50 pts","1:10","50%","20%"],["Stocks","Market spread","1:10","50%","20%"]].map(r=>(
                  <tr key={r[0]} className="hover:bg-[#F8FAFC]">
                    {r.map((v,i)=><td key={i} className={`px-5 py-3.5 ${i===0?"font-bold text-gray-900":"text-gray-600"}`}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CTASection title="Trade with Professional Conditions" subtitle="Open an account and experience tight spreads, fast execution, and full MT4 access." />
    </>
  );
}
