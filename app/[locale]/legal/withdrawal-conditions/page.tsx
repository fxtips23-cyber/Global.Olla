import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import { IconCreditCard, IconShield, IconClock, IconDatabase, IconCheck, IconInfo } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Withdrawal Conditions", description: "Olla Trade withdrawal conditions — requirements, processing times, verification, crypto withdrawals, fees, and bonus restrictions." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function WithdrawalConditionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.withdrawal" });
  const sectionsNav = t.raw("sections_nav") as { id: string; title: string }[];
  const isPT = locale === "pt";

  const reqItems  = isPT ? t.raw("req_items") as string[] : ["Full KYC/AML account verification must be completed (identity + proof of address)","Account must be in good standing with no outstanding compliance issues","Withdrawal method must match an approved method on your account","Withdrawal amount must meet any applicable minimum withdrawal thresholds","Any open positions should be reviewed before requesting a large withdrawal that may affect your margin level"];
  const procSteps = isPT ? t.raw("process_steps") as string[][] : [["01","Log in to your client portal","Access your Olla Trade client portal at portal.ollatrade.com using your credentials."],["02","Navigate to Withdrawals","Go to the Funding and Withdrawals section and select 'Withdraw'."],["03","Select method & enter amount","Choose your withdrawal method, enter the withdrawal amount, and provide the required wallet address or account details."],["04","Submit your request","Review all details carefully and submit your withdrawal request. You should receive a confirmation notification."],["05","Processing and payment","Our team will review and process your request within 24–48 business hours. Payment processing time then depends on the method used."]];
  const timesHdrs = isPT ? t.raw("times_headers") as string[] : ["Method","Olla Trade Processing","Network/Bank Time","Notes"];
  const timesRows = isPT ? t.raw("times_rows") as string[][] : [["USDT TRC20","24–48 business hours","~1–5 min","Subject to network confirmation"],["USDT ERC20","24–48 business hours","~5–30 min","Subject to ETH network"],["Bitcoin (BTC)","24–48 business hours","~20–60 min","Subject to BTC network"],["Ethereum (ETH)","24–48 business hours","~5–30 min","Subject to ETH network"]];
  const cryptoItems = isPT ? t.raw("crypto_items") as string[] : ["Always double-check the wallet address before submitting — crypto transactions are irreversible once broadcast to the network","Ensure you provide the correct network (e.g. TRC20 for USDT TRC20 — sending to the wrong network may result in permanent loss of funds)","Olla Trade is not responsible for funds sent to incorrect addresses or wrong networks","Blockchain network confirmation times are outside Olla Trade's control and may vary significantly based on network congestion","Minimum withdrawal amounts may apply — check your client portal for current thresholds"];
  const feesItems = isPT ? t.raw("fees_items") as { title: string; desc: string }[] : [{title:"Blockchain Network Fees",desc:"Crypto withdrawals are subject to network fees (gas fees, miner fees) charged by the blockchain network. These fees may be deducted from your withdrawal amount. Fees vary by network and current congestion."},{title:"Third-Party Provider Fees",desc:"Where applicable, third-party payment providers may charge their own processing fees. These are outside Olla Trade's control. Check your client portal for any applicable fees before submitting."},{title:"Currency Conversion",desc:"If a currency conversion is required (e.g. account currency differs from withdrawal currency), an exchange rate may apply. You will be informed of any applicable conversion rates in your client portal."}];

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: t("title") }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{t("toc_label")}</div>
                <nav className="space-y-0.5">
                  {sectionsNav.map(s => <a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 hover:text-[#29B5D4] px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">{s.title}</a>)}
                </nav>
              </div>
            </div>
            <div className="space-y-10">

              <div id="requirements">
                <h2 className="text-xl font-extrabold text-[#111827] mb-4">{isPT ? t("req_title") : "Withdrawal Requirements"}</h2>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">{isPT ? t("req_intro") : "The following requirements must be met before a withdrawal request can be processed:"}</p>
                <div className="space-y-2">
                  {reqItems.map((r, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl px-4 py-3">
                      <IconCheck className="w-4 h-4 text-[#29B5D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] text-gray-600">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="process">
                <h2 className="text-xl font-extrabold text-[#111827] mb-4">{isPT ? t("process_title") : "Withdrawal Process"}</h2>
                <div className="space-y-3">
                  {procSteps.map(([n, title, desc]) => (
                    <div key={n} className="flex items-start gap-4 bg-[#F5F7FA] border border-gray-100 rounded-xl p-4">
                      <span className="w-7 h-7 rounded-full bg-[#29B5D4] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">{n}</span>
                      <div><div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div><div className="text-[12px] text-gray-500">{desc}</div></div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="timeframes">
                <h2 className="text-xl font-extrabold text-[#111827] mb-4">{isPT ? t("times_title") : "Processing Times"}</h2>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">{isPT ? t("times_note") : "Processing times are estimates only and may vary. Processing times cannot be guaranteed."}</p>
                <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl overflow-hidden">
                  <table className="w-full text-[13px]">
                    <thead className="bg-white border-b border-gray-100">
                      <tr>{timesHdrs.map(h => <th key={h} className="px-5 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {timesRows.map(r => (
                        <tr key={r[0]} className="hover:bg-white">
                          {r.map((v, i) => <td key={i} className={`px-5 py-3 ${i===0?"font-bold text-[#111827]":"text-gray-600"}`}>{v}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="crypto">
                <h2 className="text-xl font-extrabold text-[#111827] mb-4">{isPT ? t("crypto_title") : "Cryptocurrency Withdrawal Information"}</h2>
                <div className="space-y-3 text-[14px] text-gray-600 leading-relaxed">
                  <p>{isPT ? t("crypto_intro") : "Cryptocurrency withdrawals are processed to the wallet address provided. Please ensure the following:"}</p>
                  <div className="space-y-2">
                    {cryptoItems.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                        <IconInfo className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[12px] text-amber-800">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="fees">
                <h2 className="text-xl font-extrabold text-[#111827] mb-4">{isPT ? t("fees_title") : "Fees and Costs"}</h2>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">{isPT ? t("fees_intro") : "Olla Trade does not charge its own withdrawal fees. However, the following external costs may apply:"}</p>
                <div className="space-y-3">
                  {feesItems.map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center flex-shrink-0"><IconDatabase className="w-4 h-4" /></div>
                      <div><div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div><div className="text-[12px] text-gray-500">{desc}</div></div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="security">
                <h2 className="text-xl font-extrabold text-[#111827] mb-4">{isPT ? t("security_title") : "Security Review"}</h2>
                <p className="text-[14px] text-gray-600 leading-relaxed">{isPT ? t("security_p") : "All withdrawal requests are subject to standard security and compliance review before processing. Olla Trade may request additional documentation, delay processing, or decline a withdrawal request if: the account has not been fully verified; unusual activity has been detected; the withdrawal represents a significant change from previous patterns; or additional compliance checks are required under applicable regulations."}</p>
              </div>

              <div id="bonus">
                <h2 className="text-xl font-extrabold text-[#111827] mb-4">{isPT ? t("bonus_title") : "Bonus and Promotion Restrictions"}</h2>
                <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
                  <p className="text-[13px] text-amber-800 leading-relaxed">{isPT ? t("bonus_p") : <><strong>Bonus trading credit cannot be withdrawn directly.</strong> It is added to your account as trading margin only. Profits generated through trading activity using bonus credit may be eligible for withdrawal subject to the specific terms of the relevant promotion and Olla Trade&apos;s standard withdrawal policy. Please read the full terms of any promotion before accepting bonus credit.</>}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
