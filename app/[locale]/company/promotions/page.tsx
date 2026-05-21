import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconCheck, IconShield, IconInfo, IconUsers, IconClock } from "../../../components/ui/Icons";
import { promotionsFaqs } from "../../../data/faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
 title: "Promotions",
 description: "Explore Olla Trade's active promotions and trading bonuses. All promotions are subject to eligibility criteria and terms and conditions.",
};

const promos = [
 {
 status: "Active",
 statusStyle: "bg-[#00CC44]/15 text-[#00CC44] border-[#00CC44]/25",
 title: "20% Deposit Bonus",
 amount: "20%",
 desc: "Receive a 20% trading bonus on your qualifying deposit. The bonus is added as trading credit to increase your available margin and trading flexibility.",
 terms: ["Bonus credited as trading margin only","Minimum qualifying deposit applies","Subject to eligibility and full T&C","Bonus credit cannot be withdrawn directly","Profits generated may be withdrawable per policy"],
 cta: "Claim Bonus",
 href: "https://direct.ollatrade.com/auth/register",
 featured: true,
 },
 {
 status: "Coming Soon",
 statusStyle: "bg-yellow-100 text-yellow-700 border-yellow-200",
 title: "No Deposit Bonus",
 amount: "Up to $250",
 desc: "Start trading with a no-deposit bonus. No initial deposit required to claim. Subject to eligibility, verification, and terms and conditions.",
 terms: ["Account verification required","Trading volume conditions apply","Subject to eligibility criteria","Bonus credit is non-withdrawable","Full T&C apply"],
 cta: "Register Interest",
 href: "https://direct.ollatrade.com/auth/register",
 featured: false,
 },
 {
 status: "Check Availability",
 statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
 title: "Welcome Bonus",
 amount: "Up to $1,000",
 desc: "Receive a welcome bonus on your first qualifying deposit with Olla Trade. The more you deposit, the more trading credit you may receive.",
 terms: ["First deposit only","Minimum deposit threshold applies","Bonus added as trading margin","Subject to full terms and conditions","Eligibility at Olla Trade discretion"],
 cta: "Learn More",
 href: "https://direct.ollatrade.com/auth/register",
 featured: false,
 },
];

export function generateStaticParams() {
 return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function PromotionsPage({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params;
 setRequestLocale(locale);
 const t = await getTranslations({ locale, namespace: "company.promotions" });
 return (
 <>
 <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")} breadcrumbs={[{ label: "Company", href: "/company" }, { label: "Promotions" }]} />

 {/* Promotions grid */}
 <section className="py-16 bg-[#F5F7FA]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Current Offers</div>
 <h2 className="text-3xl font-extrabold text-[#111827] mb-3">Available Promotions</h2>
 <p className="text-gray-500 max-w-xl mx-auto text-[15px]">All promotions are subject to eligibility and Olla Trade terms. Please read all terms before participating.</p>
 </div>

 <div className="grid md:grid-cols-3 gap-6">
 {promos.map((p) => (
 <div key={p.title} className={`relative bg-white rounded-2xl flex flex-col overflow-hidden ${p.featured ? "border-2 border-[#00CC44]/35 shadow-xl shadow-[#00CC44]/8" : "border border-gray-100 shadow-sm"}`}>
 {/* Top accent */}
 {p.featured && <div className="h-1 bg-[#00CC44]" />}

 <div className="p-6 flex flex-col flex-1">
 <div className="flex items-center justify-between mb-4">
 <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${p.statusStyle}`}>{p.status}</span>
 {p.featured && <span className="text-[10px] text-[#00CC44] font-bold">★ Featured</span>}
 </div>

 <div className="text-5xl font-extrabold text-[#00CC44] mb-1 leading-none">{p.amount}</div>
 <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-3">{p.title}</h3>
 <p className="text-[13px] text-gray-500 leading-relaxed mb-5 flex-1">{p.desc}</p>

 {/* Key terms */}
 <div className="space-y-1.5 mb-5">
 {p.terms.map((t) => (
 <div key={t} className="flex items-start gap-2 text-[11px] text-gray-500">
 <IconCheck className="w-3.5 h-3.5 text-[#00CC44] flex-shrink-0 mt-0.5" />{t}
 </div>
 ))}
 </div>

 <Link href={p.href} className={`w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] transition-all ${p.featured ? "bg-[#00CC44] hover:bg-[#00DD4A] text-black" : "bg-[#111827] hover:bg-[#00CC44] text-white hover:text-black"}`}>
 {p.cta}
 </Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Eligibility */}
 <section className="py-16 bg-white">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 items-start">
 <div>
 <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Eligibility</div>
 <h2 className="text-3xl font-extrabold text-[#111827] mb-5">Who Can Claim Promotions?</h2>
 <div className="space-y-3">
 {[
 { Icon: IconUsers, t:"Verified clients only", d:"Account KYC/AML verification must be completed before any promotion can be claimed or bonus credited." },
 { Icon: IconShield, t:"Eligible account types", d:"Some promotions are restricted to specific account types. Check the full promotion terms for account eligibility." },
 { Icon: IconClock, t:"One promotion at a time", d:"In general, promotions cannot be combined unless explicitly stated in the individual promotion terms." },
 { Icon: IconInfo, t:"Olla Trade resident restrictions", d:"Promotions are not available in all jurisdictions. Olla Trade reserves the right to limit availability." },
 ].map(({ Icon, t, d }) => (
 <div key={t} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-4">
 <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4" /></div>
 <div><div className="text-[13px] font-bold text-[#111827] mb-0.5">{t}</div><div className="text-[12px] text-gray-500 leading-relaxed">{d}</div></div>
 </div>
 ))}
 </div>
 </div>
 <div>
 <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">How to Claim</div>
 <div className="space-y-4">
 {[
 { n:"01", t:"Open or log in to your account", d:"Ensure your account is verified and in good standing before attempting to claim any promotion." },
 { n:"02", t:"Navigate to Promotions", d:"Log in to your Olla Trade client portal and go to the Promotions section to view available offers." },
 { n:"03", t:"Read the full terms", d:"Read and understand the complete terms and conditions of the specific promotion before opting in." },
 { n:"04", t:"Meet the qualifying conditions", d:"Complete any required qualifying actions such as a minimum deposit or other specified requirements." },
 { n:"05", t:"Bonus credited", d:"Qualifying bonus credit will be applied to your account after all conditions have been met and verified." },
 ].map(({ n, t, d }) => (
 <div key={n} className="flex items-start gap-3">
 <span className="w-7 h-7 rounded-full bg-[#00CC44] text-black text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
 <div><div className="text-[13px] font-bold text-[#111827] mb-0.5">{t}</div><div className="text-[12px] text-gray-500 leading-relaxed">{d}</div></div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* How bonuses work */}
 <section className="py-16 bg-[#050C15]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Bonus Mechanics</div>
 <h2 className="text-3xl font-extrabold text-white mb-3">How Trading Bonuses Work</h2>
 <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">Understanding how bonus credit works helps you trade responsibly and know exactly what to expect before claiming any promotion.</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
 {[
 { title: "Bonus is Trading Credit", desc: "All promotional bonuses are added as trading margin — they increase your available balance to open positions but are not cash in your account." },
 { title: "Not Directly Withdrawable",desc: "Bonus credit cannot be withdrawn directly. Only profits generated through your own trading activity may be withdrawable, subject to the applicable promotion terms." },
 { title: "Increases Margin Capacity", desc: "With more margin available, you can open more or larger positions. However, leverage and trading risk remain unchanged — position sizing discipline is essential." },
 { title: "Subject to Volume Conditions",desc: "Some promotions require a minimum trading volume before profits become withdrawable. Always read the full terms before opting in to any promotion." },
 ].map(({ title, desc }) => (
 <div key={title} className="bg-white/4 border border-white/8 rounded-2xl p-5">
 <div className="w-2 h-2 rounded-full bg-[#00CC44] mb-3" />
 <h4 className="text-[13px] font-bold text-white mb-2">{title}</h4>
 <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
 </div>
 ))}
 </div>
 <div className="overflow-x-auto rounded-2xl border border-white/8">
 <table className="w-full text-sm min-w-[560px]">
 <thead className="border-b border-white/8 bg-white/4">
 <tr>
 {["Feature","Bonus Credit","Your Own Funds"].map(h => (
 <th key={h} className="px-5 py-3.5 text-left text-[10px] font-bold text-white/30 uppercase tracking-wider">{h}</th>
 ))}
 </tr>
 </thead>
 <tbody className="divide-y divide-white/6">
 {[
 ["Deposited by you", "No — credited by Olla Trade", "Yes — your capital"],
 ["Withdrawable directly", "No", "Yes, per withdrawal policy"],
 ["Used for margin", "Yes — increases available margin", "Yes — your primary margin"],
 ["Shown in account", "Yes — as trading credit balance", "Yes — as account balance"],
 ["At risk from trading", "Can be reduced by trading losses", "Can be reduced by trading losses"],
 ["Volume conditions", "May apply (per promotion terms)", "None"],
 ].map(([feat, bonus, own]) => (
 <tr key={feat} className="hover:bg-white/3">
 <td className="px-5 py-3 text-[13px] font-semibold text-white/65">{feat}</td>
 <td className="px-5 py-3 text-[13px] text-white/40">{bonus}</td>
 <td className="px-5 py-3 text-[13px] text-[#00CC44] font-medium">{own}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* Disclaimer */}
 <section className="py-12 bg-[#F5F7FA]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="border border-amber-200 bg-amber-50 rounded-2xl p-6">
 <div className="text-[13px] font-bold text-amber-900 mb-3">Important Promotion Notice</div>
 <div className="space-y-2 text-[12px] text-amber-800 leading-relaxed">
 <p>All bonuses and promotions are subject to eligibility criteria and Olla Trade's full terms and conditions. Bonus credits are added as trading margin and <strong>cannot be withdrawn directly</strong>. Profits generated through trading activity may be withdrawable subject to Olla Trade's withdrawal policy and the specific promotion terms.</p>
 <p>Promotions cannot be combined unless explicitly stated. Olla Trade reserves the right to modify, suspend, or cancel any promotion at its discretion. Trading involves risk. Bonus credit does not reduce or eliminate trading risk. Only trade with funds you can afford to lose.</p>
 <p>Do not trade solely based on promotional incentives. All clients should carefully consider their financial situation and risk tolerance before trading, regardless of any active promotions.</p>
 </div>
 </div>
 </div>
 </section>

 <FAQSection title={t("faq_title")} faqs={promotionsFaqs} />
 </>
 );
}
