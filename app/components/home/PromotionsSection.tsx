import Link from "next/link";

const promos = [
  { status: "Active", badge: "bg-[#00CC44]/15 text-[#00CC44] border-[#00CC44]/25", title: "20% Deposit Bonus", amount: "20%", desc: "Deposit funds and receive 20% extra as trading bonus credit — increasing your available margin and trading flexibility.", cta: "Claim Now", href: "/company/promotions" },
  { status: "Coming Soon", badge: "bg-yellow-100 text-yellow-700 border-yellow-200", title: "No Deposit Bonus", amount: "$250", desc: "Start trading with up to $250 no deposit required bonus. Subject to eligibility and Olla Trade terms and conditions.", cta: "Register Interest", href: "/company/promotions" },
  { status: "Check Availability", badge: "bg-blue-100 text-[#1E88E5] border-blue-200", title: "Welcome Bonus", amount: "$1,000", desc: "Receive up to $1,000 bonus on your first deposit with Olla Trade. The more you deposit, the more trading credit you receive.", cta: "Learn More", href: "/company/promotions" },
];

export default function PromotionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#081018] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#00CC44]/15 border border-[#00CC44]/25 text-[#00CC44] text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">Special Offers</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Active Promotions</h2>
          <p className="text-white/40 max-w-xl mx-auto">Boost your trading capital with exclusive Olla Trade promotions. All bonuses subject to eligibility and terms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {promos.map((p) => (
            <div key={p.title} className="bg-[#0D1520] rounded-2xl border border-white/8 overflow-hidden flex flex-col hover:border-[#00CC44]/25 transition-all card-lift">
              <div className="p-6 text-center border-b border-white/8">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border mb-4 ${p.badge}`}>{p.status}</span>
                <div className="text-6xl font-black text-[#00CC44] mb-1">{p.amount}</div>
                <div className="text-white/25 text-sm">Trading Bonus</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1">{p.desc}</p>
                <Link href={p.href} className="w-full flex items-center justify-center bg-white/8 hover:bg-[#00CC44] text-white hover:text-black font-bold py-3 rounded-xl text-sm transition-all">{p.cta}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="https://ollatrade.com/promotions/" className="inline-flex items-center gap-2 border-2 border-[#00CC44] text-[#00CC44] hover:bg-[#00CC44] hover:text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-all">View All Promotions →</Link>
        </div>
        <p className="text-xs text-white/18 text-center mt-5">Bonus credits cannot be withdrawn directly. Profits may be withdrawn subject to Olla Trade terms. Eligibility applies.</p>
      </div>
    </section>
  );
}
