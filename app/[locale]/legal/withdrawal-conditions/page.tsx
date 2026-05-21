import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconCreditCard, IconShield, IconClock, IconDatabase, IconCheck, IconInfo } from "../../../components/ui/Icons";
import { withdrawalCondFaqs } from "../../../data/extra-faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Withdrawal Conditions", description: "Olla Trade withdrawal conditions — requirements, processing times, verification, crypto withdrawals, fees, and bonus restrictions." };

const sections = [{ id:"requirements", title:"Requirements" },{ id:"process", title:"Withdrawal Process" },{ id:"timeframes", title:"Processing Times" },{ id:"crypto", title:"Crypto Withdrawals" },{ id:"fees", title:"Fees & Costs" },{ id:"security", title:"Security Review" },{ id:"bonus", title:"Bonus Restrictions" }];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function WithdrawalConditionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.withdrawal" });
  return (
    <>
      <PageHero badge="Policy" title={t("title")} subtitle="All terms and conditions governing withdrawal requests from your Olla Trade account. Please read before submitting a withdrawal." breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: "Withdrawal Conditions" }]} />

      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-widest mb-4">Contents</div>
                <nav className="space-y-0.5">{sections.map(s=><a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 dark:text-[#9CA3AF] hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">{s.title}</a>)}</nav>
              </div>
            </div>
            <div className="space-y-10">

              <div id="requirements">
                <h2 className="text-xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-4">Withdrawal Requirements</h2>
                <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed mb-4">The following requirements must be met before a withdrawal request can be processed:</p>
                <div className="space-y-2">
                  {["Full KYC/AML account verification must be completed (identity + proof of address)","Account must be in good standing with no outstanding compliance issues","Withdrawal method must match an approved method on your account","Withdrawal amount must meet any applicable minimum withdrawal thresholds","Any open positions should be reviewed before requesting a large withdrawal that may affect your margin level"].map(r=>(
                    <div key={r} className="flex items-start gap-3 bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl px-4 py-3">
                      <IconCheck className="w-4 h-4 text-[#00CC44] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] text-gray-600 dark:text-[#9CA3AF]">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="process">
                <h2 className="text-xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-4">Withdrawal Process</h2>
                <div className="space-y-3">
                  {[["01","Log in to your client portal","Access your Olla Trade client portal at direct.ollatrade.com using your credentials."],["02","Navigate to Withdrawals","Go to the Funding and Withdrawals section and select 'Withdraw'."],["03","Select method & enter amount","Choose your withdrawal method, enter the withdrawal amount, and provide the required wallet address or account details."],["04","Submit your request","Review all details carefully and submit your withdrawal request. You should receive a confirmation notification."],["05","Processing and payment","Our team will review and process your request within 24–48 business hours. Payment processing time then depends on the method used."]].map(([n,t,d])=>(
                    <div key={n} className="flex items-start gap-4 bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl p-4">
                      <span className="w-7 h-7 rounded-full bg-[#00CC44] text-black text-[11px] font-bold flex items-center justify-center flex-shrink-0">{n}</span>
                      <div><div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-0.5">{t}</div><div className="text-[12px] text-gray-500 dark:text-[#9CA3AF]">{d}</div></div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="timeframes">
                <h2 className="text-xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-4">Processing Times</h2>
                <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed mb-4">Processing times are estimates only and may vary. Processing times cannot be guaranteed.</p>
                <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl overflow-hidden">
                  <table className="w-full text-[13px]">
                    <thead className="bg-white dark:bg-[#0A1220] border-b border-gray-100 dark:border-[#1F2937]">
                      <tr>{["Method","Olla Trade Processing","Network/Bank Time","Notes"].map(h=><th key={h} className="px-5 py-3 text-left text-[11px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-wider">{h}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-[#1F2937]">
                      {[["USDT TRC20","24–48 business hours","~1–5 min","Subject to network confirmation"],["USDT ERC20","24–48 business hours","~5–30 min","Subject to ETH network"],["Bitcoin (BTC)","24–48 business hours","~20–60 min","Subject to BTC network"],["Ethereum (ETH)","24–48 business hours","~5–30 min","Subject to ETH network"]].map(r=>(
                        <tr key={r[0]} className="hover:bg-white dark:hover:bg-[#0A1220]">
                          {r.map((v,i)=><td key={i} className={`px-5 py-3 ${i===0?"font-bold text-[#111827] dark:text-[#F9FAFB]":"text-gray-600 dark:text-[#9CA3AF]"}`}>{v}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="crypto">
                <h2 className="text-xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-4">Cryptocurrency Withdrawal Information</h2>
                <div className="space-y-3 text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
                  <p>Cryptocurrency withdrawals are processed to the wallet address provided. Please ensure the following:</p>
                  <div className="space-y-2">
                    {["Always double-check the wallet address before submitting — crypto transactions are irreversible once broadcast to the network","Ensure you provide the correct network (e.g. TRC20 for USDT TRC20 — sending to the wrong network may result in permanent loss of funds)","Olla Trade is not responsible for funds sent to incorrect addresses or wrong networks","Blockchain network confirmation times are outside Olla Trade's control and may vary significantly based on network congestion","Minimum withdrawal amounts may apply — check your client portal for current thresholds"].map(r=>(
                      <div key={r} className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/40 rounded-xl px-4 py-3">
                        <IconInfo className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[12px] text-amber-800 dark:text-amber-200/70">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="fees">
                <h2 className="text-xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-4">Fees and Costs</h2>
                <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed mb-4">Olla Trade does not charge its own withdrawal fees. However, the following external costs may apply:</p>
                <div className="space-y-3">
                  {[{Icon:IconDatabase,t:"Blockchain Network Fees",d:"Crypto withdrawals are subject to network fees (gas fees, miner fees) charged by the blockchain network. These fees may be deducted from your withdrawal amount. Fees vary by network and current congestion."},
                    {Icon:IconCreditCard,t:"Third-Party Provider Fees",d:"Where applicable, third-party payment providers may charge their own processing fees. These are outside Olla Trade's control. Check your client portal for any applicable fees before submitting."},
                    {Icon:IconShield,t:"Currency Conversion",d:"If a currency conversion is required (e.g. account currency differs from withdrawal currency), an exchange rate may apply. You will be informed of any applicable conversion rates in your client portal."}].map(({Icon,t,d})=>(
                    <div key={t} className="flex items-start gap-3 bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 dark:border-[#1F2937] bg-white dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4" /></div>
                      <div><div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-0.5">{t}</div><div className="text-[12px] text-gray-500 dark:text-[#9CA3AF]">{d}</div></div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="security">
                <h2 className="text-xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-4">Security Review</h2>
                <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">All withdrawal requests are subject to standard security and compliance review before processing. Olla Trade may request additional documentation, delay processing, or decline a withdrawal request if: the account has not been fully verified; unusual activity has been detected; the withdrawal represents a significant change from previous patterns; or additional compliance checks are required under applicable regulations. Clients will be notified if additional information is needed. Processing times may vary depending on the outcome of security review.</p>
              </div>

              <div id="bonus">
                <h2 className="text-xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-4">Bonus and Promotion Restrictions</h2>
                <div className="border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10 rounded-xl p-5">
                  <p className="text-[13px] text-amber-800 dark:text-amber-200/70 leading-relaxed">Bonus trading credit <strong>cannot be withdrawn directly</strong>. It is added to your account as trading margin only. Profits generated through trading activity using bonus credit may be eligible for withdrawal subject to: the specific terms of the relevant promotion; any applicable trading volume requirements; and Olla Trade's standard withdrawal policy. Please read the full terms of any promotion before accepting bonus credit. Olla Trade reserves the right to remove bonus credit at any time in accordance with promotion terms.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Withdrawal Conditions FAQs" faqs={withdrawalCondFaqs} />
    </>
  );
}
