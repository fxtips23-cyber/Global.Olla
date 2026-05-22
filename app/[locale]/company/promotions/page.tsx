import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconCheck, IconShield, IconInfo, IconUsers, IconClock } from "../../../components/ui/Icons";
import { promotionsFaqs } from "../../../data/faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Promotions & Offers",
  description: "Explore Olla Trade's promotional offers. All promotions are subject to eligibility criteria and terms and conditions. Trading involves risk.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function PromotionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.promotions" });

  return (
    <>
      <PageHero
        badge="Limited-Time Offers"
        title="Promotional Offers"
        subtitle="Olla Trade periodically makes promotional trading credit available to eligible clients. All offers are subject to eligibility criteria, verification requirements, and full terms and conditions."
        breadcrumbs={[{ label: "Company", href: "/company" }, { label: "Promotions" }]}
      />

      {/* ── Important notice ─────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 flex items-start gap-3">
            <IconInfo className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-[12px] text-amber-800 leading-relaxed">
              <strong className="font-bold">Important:</strong> Promotional trading credit is not cash and cannot be withdrawn directly. Participation in any promotion is entirely voluntary and subject to completion of account verification (KYC). Trading involves risk — promotions do not reduce or eliminate trading risk. All promotional offers are limited-time and subject to change or withdrawal without notice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Active offers ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Current Offers</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Available Promotions</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[15px] text-center mb-12">
            Subject to eligibility. Read all terms and conditions before participating. Promotional trading credit is applied to your margin balance only.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Active promotion */}
            <div className="relative bg-white rounded-2xl flex flex-col overflow-hidden border-2 border-[#00CC44]/30 shadow-lg">
              <div className="h-1 bg-[#00CC44]" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#00CC44]/12 text-[#00CC44] border border-[#00CC44]/25">Active</span>
                  <span className="text-[10px] text-[#00CC44] font-bold">★ Featured Offer</span>
                </div>
                <div className="text-5xl font-extrabold text-[#00CC44] mb-1 leading-none">20%</div>
                <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-1">Deposit Bonus Offer</h3>
                <div className="text-[11px] text-gray-400 mb-4">Promotional Trading Credit</div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 flex-1">
                  Eligible clients may receive promotional trading credit equivalent to 20% of a qualifying deposit. The credit is applied to your margin balance to support trading activity and is subject to the terms below.
                </p>
                <div className="space-y-1.5 mb-6 border-t border-gray-100 pt-4">
                  {[
                    "Promotional credit applied to margin balance only",
                    "Minimum qualifying deposit threshold applies",
                    "Account KYC verification required",
                    "Credit is non-withdrawable",
                    "Trading activity conditions apply",
                    "Subject to full terms and conditions",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[11px] text-gray-500">
                      <IconCheck className="w-3.5 h-3.5 text-[#00CC44] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="https://direct.ollatrade.com/auth/register"
                  className="w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] bg-[#00CC44] hover:bg-[#00DD4A] text-black transition-all">
                  Register to Participate
                </Link>
              </div>
            </div>

            {/* Coming soon */}
            <div className="relative bg-white rounded-2xl flex flex-col overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">Coming Soon</span>
                </div>
                <div className="text-5xl font-extrabold text-[#111827] mb-1 leading-none">$250</div>
                <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-1">Welcome Credit Offer</h3>
                <div className="text-[11px] text-gray-400 mb-4">No-Deposit Promotional Credit</div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 flex-1">
                  A no-deposit promotional credit offer is planned for eligible new clients. No initial deposit is required to apply. Subject to eligibility verification and trading volume conditions. Full terms will be published when available.
                </p>
                <div className="space-y-1.5 mb-6 border-t border-gray-100 pt-4">
                  {[
                    "Full account verification required",
                    "Minimum trading volume applies",
                    "Credit is non-withdrawable",
                    "Eligibility at Olla Trade discretion",
                    "Terms will be published on launch",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[11px] text-gray-500">
                      <IconCheck className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="https://direct.ollatrade.com/auth/register"
                  className="w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] bg-[#F5F7FA] hover:bg-[#111827] hover:text-white text-[#111827] border border-gray-200 transition-all">
                  Register Interest
                </Link>
              </div>
            </div>

            {/* Check availability */}
            <div className="relative bg-white rounded-2xl flex flex-col overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Check Availability</span>
                </div>
                <div className="text-5xl font-extrabold text-[#111827] mb-1 leading-none">$1,000</div>
                <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-1">First Deposit Credit</h3>
                <div className="text-[11px] text-gray-400 mb-4">Tiered Promotional Credit</div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 flex-1">
                  A tiered promotional credit offer based on first deposit size may be available to eligible clients. Contact our team to check current availability and applicable terms for your account type.
                </p>
                <div className="space-y-1.5 mb-6 border-t border-gray-100 pt-4">
                  {[
                    "First qualifying deposit only",
                    "Minimum deposit threshold applies",
                    "Promotional credit added to margin",
                    "Account eligibility at Olla Trade discretion",
                    "Full terms and conditions apply",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[11px] text-gray-500">
                      <IconCheck className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact-us"
                  className="w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] bg-[#F5F7FA] hover:bg-[#111827] hover:text-white text-[#111827] border border-gray-200 transition-all">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eligibility & process ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Eligibility Requirements</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">Who Can Participate?</h2>
              <div className="space-y-3">
                {[
                  { Icon: IconUsers,  title: "Verified accounts only",          desc: "All KYC/AML documentation must be submitted and approved before any promotional credit is applied." },
                  { Icon: IconShield, title: "Eligible account types",           desc: "Some offers are restricted to specific account types or new clients only. Refer to individual promotion terms." },
                  { Icon: IconClock,  title: "One active promotion at a time",   desc: "Promotional offers cannot generally be combined unless explicitly stated in the individual terms." },
                  { Icon: IconInfo,   title: "Jurisdictional restrictions",      desc: "Promotions are not available in all jurisdictions. Olla Trade reserves the right to restrict eligibility." },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">How to Participate</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">Step-by-Step</h2>
              <div className="space-y-4">
                {[
                  { n: "01", title: "Open or log in to your account",   desc: "Your account must be in good standing and fully verified before you can claim any promotional offer." },
                  { n: "02", title: "Locate the offer in your portal",  desc: "Log in to your Olla Trade client portal and navigate to the Promotions section to see available offers." },
                  { n: "03", title: "Read the complete terms",           desc: "Read, understand, and accept the full terms and conditions of the specific promotion before opting in." },
                  { n: "04", title: "Complete qualifying conditions",   desc: "Make any required qualifying deposit or fulfil other conditions specified in the promotion terms." },
                  { n: "05", title: "Credit applied to margin",         desc: "Upon verification, promotional trading credit will be applied to your margin balance. It is not withdrawable cash." },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#00CC44] text-black text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
                    <div>
                      <div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How promotional credit works ─────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Understanding Promotional Credit</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">How Promotional Trading Credit Works</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Before participating in any promotion, ensure you understand how promotional credit operates. It is not the same as deposited funds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Applied as Trading Margin",     desc: "Promotional credit is added to your available trading margin. It allows you to open larger positions but is not cash in your account." },
              { title: "Non-Withdrawable Credit",       desc: "The credit itself cannot be withdrawn at any point. Only net profits generated through your own trading activity may be withdrawable, subject to promotion terms." },
              { title: "Increases Position Capacity",   desc: "With additional margin available, you can support more or larger open positions. Your trading risk, leverage, and responsibility remain unchanged." },
              { title: "Subject to Volume Conditions",  desc: "Some promotions require a minimum trading volume before any profits become eligible for withdrawal. Always verify applicable conditions." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/4 border border-white/8 rounded-2xl p-5">
                <div className="w-2 h-2 rounded-full bg-[#00CC44] mb-3" />
                <h4 className="text-[13px] font-bold text-white mb-2">{title}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="border-b border-white/8 bg-white/4">
                <tr>
                  {["Feature", "Promotional Credit", "Your Deposited Funds"].map(h => (
                    <th key={h} className="px-5 py-3.5 text-left text-[10px] font-bold text-white/30 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Deposited by you",        "No — credited by Olla Trade",   "Yes — your own capital"],
                  ["Directly withdrawable",   "No",                            "Yes, per withdrawal policy"],
                  ["Used for margin",         "Yes — increases margin capacity","Yes — primary margin source"],
                  ["Shown in account",        "Yes — as bonus/credit balance", "Yes — as account balance"],
                  ["Volume conditions",       "May apply (see promo terms)",   "None"],
                  ["At risk from trading",    "Can be reduced by losses",      "Can be reduced by losses"],
                ].map(([feat, credit, own]) => (
                  <tr key={feat} className="hover:bg-white/3">
                    <td className="px-5 py-3 text-[12px] font-semibold text-white/60">{feat}</td>
                    <td className="px-5 py-3 text-[12px] text-white/35">{credit}</td>
                    <td className="px-5 py-3 text-[12px] text-[#00CC44] font-medium">{own}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Risk disclaimer ──────────────────────────────────────── */}
      <section className="py-10 bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Important Promotion Notice</div>
            <div className="space-y-2 text-[12px] text-gray-600 leading-relaxed">
              <p>All bonuses and promotions offered by Olla Trade are promotional trading credit only. They are subject to eligibility criteria and Olla Trade's full terms and conditions. <strong className="text-[#111827]">Promotional credit cannot be withdrawn directly under any circumstances.</strong> Profits generated through trading activity may be withdrawable subject to Olla Trade's withdrawal policy and the specific promotion terms.</p>
              <p>Promotions cannot be combined unless explicitly stated. Olla Trade reserves the right to modify, suspend, or withdraw any promotion at its discretion without prior notice. Trading involves risk. Promotional credit does not reduce or eliminate trading risk. Only trade with capital you can afford to lose.</p>
              <p>Do not open an account or make a deposit solely because of a promotional offer. Ensure you understand the risks involved in trading CFDs and leveraged instruments before participating.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Promotions FAQ"
        subtitle="Common questions about our promotional offers and trading credit."
        faqs={promotionsFaqs}
      />
    </>
  );
}
