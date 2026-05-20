import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = { title: "Expiration & Holidays", description: "Trading schedule, market hours, expiration dates, and public holidays for all instruments at Olla Trade." };

export default function ExpirationPage() {
  return (
    <>
      <PageHero badge="Trading Schedule" title="Expiration & Market Holidays" subtitle="Stay informed about trading hours, contract expiration dates, and market closures to plan your trading accordingly." breadcrumbs={[{label:"Trading"},{label:"Expiration & Holidays"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[{title:"Forex Market Hours",body:[["Monday","00:00 – Friday 23:59 (server time)"],["Trading Week","5 days a week, 24 hours a day"],["Market Open","Sunday 22:00 server time"],["Market Close","Friday 22:00 server time"]]},{title:"Metals (Gold & Silver)",body:[["Trading Hours","Monday–Friday (24 hours)"],["Exceptions","Reduced liquidity during Asian session"],["US Holidays","Spreads may widen"]]},{title:"Indices",body:[["US30 / SPX500","Monday–Friday, session hours"],["DAX40","Monday–Friday, European session"],["Holiday Closures","Varies by exchange"]]},{title:"Crypto",body:[["Availability","24/7 (subject to liquidity)"],["Weekend","Available but lower liquidity"],["Note","Spreads may be wider on weekends"]]}].map(s=>(
              <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{s.title}</h3>
                <div className="space-y-2">
                  {s.body.map(([k,v])=>(
                    <div key={k} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                      <span className="text-gray-400">{k}</span><span className="text-gray-800 font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0A0D14] rounded-xl p-6 text-white/60 text-sm">
            <strong className="text-white">Important:</strong> Trading hours are indicative and may be subject to change during public holidays or periods of low liquidity. Check the instrument specifications in your MT4 platform for the most up-to-date schedule. Spreads may widen during market openings, closings, and around major economic events.
          </div>
        </div>
      </section>
    </>
  );
}
