import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = { title: "Order Execution Policy", description: "Olla Trade Order Execution Policy — how we execute client orders and achieve best execution." };

export default function ExecutionPolicyPage() {
  const sections=[{title:"Execution Basis",body:"Olla Trade executes all client orders on a market execution basis. This means orders are executed at the best available market price at the time of execution, which may differ slightly from the requested price."},{title:"Best Execution",body:"The Company is committed to achieving the best possible result for clients when executing orders. Factors considered include: price, cost, speed of execution, likelihood of execution, size of the order, and nature of the order."},{title:"Execution Venues",body:"Orders are executed through the Company's liquidity providers and pricing engines. The Company selects execution venues based on their ability to provide competitive pricing, fast execution, and reliable connectivity."},{title:"Conflict of Interest",body:"The Company acts as a principal in all transactions. We have procedures in place to identify and manage any conflicts of interest that may arise in order execution."},{title:"Order Types",body:"The Company accepts Market Orders, Limit Orders, Stop Orders, Stop Loss orders, and Take Profit orders. Pending orders are held on the Company's servers and triggered automatically when market conditions are met."},{title:"Slippage",body:"Slippage (execution at a different price than requested) may occur during periods of high volatility or low liquidity. The Company does not guarantee execution at the requested price. Slippage can be positive or negative."},{title:"Requotes",body:"The Company's market execution model means requotes do not occur. All orders are accepted and filled at the prevailing market price."},{title:"Policy Review",body:"This policy is reviewed regularly and updated as necessary. Clients will be notified of material changes. Contact: info@ollatrade.com"}];
  return (
    <>
      <PageHero badge="Legal" title="Order Execution Policy" subtitle="Our approach to executing client orders and achieving best possible execution outcomes." breadcrumbs={[{label:"Legal"},{label:"Order Execution Policy"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map(s=>(
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
