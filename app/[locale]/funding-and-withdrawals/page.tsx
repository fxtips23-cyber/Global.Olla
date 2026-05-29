import type { Metadata } from "next";
import FundingVisual from "../../components/visuals/FundingVisual";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import {
  IconBitcoin,
  IconCoin,
  IconEthereum,
  IconShield,
  IconLock,
  IconShieldCheck,
  IconCheck,
  IconClock,
  IconActivity,
  IconUsers,
  IconInfo,
  IconDatabase,
} from "../../components/ui/Icons";
import type { ComponentType } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Funding and Withdrawals",
  description: "Deposit and withdraw funds securely through the Olla Trade client portal. Multiple crypto payment methods, no Olla Trade fees, fast processing.",
};

/* ─── Inline step number ──────────────────────────────────────────── */
function StepNum({ n }: { n: number }) {
  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[12px] font-extrabold text-black"
      style={{ background: "#29B5D4" }}>
      {n}
    </div>
  );
}

/* ─── Icon card (same style as homepage Markets section) ───────────── */
function IconCard({
  Icon,
  title,
  desc,
}: {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
      <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Crypto method cards ──────────────────────────────────────────── */
interface CryptoMethod {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  network: string;
  depositTime: string;
  withdrawalTime: string;
  minDeposit: string;
  notes: string;
}

const cryptoMethods: CryptoMethod[] = [
  {
    Icon: IconCoin,
    name: "USDT",
    network: "TRC20 (Tron)",
    depositTime: "~1 minute",
    withdrawalTime: "24–48 business hours",
    minDeposit: "$50",
    notes: "Fastest network. Low network fees.",
  },
  {
    Icon: IconCoin,
    name: "USDT",
    network: "ERC20 (Ethereum)",
    depositTime: "~3 minutes",
    withdrawalTime: "24–48 business hours",
    minDeposit: "$50",
    notes: "Subject to Ethereum network fees and confirmation times.",
  },
  {
    Icon: IconBitcoin,
    name: "Bitcoin",
    network: "BTC Network",
    depositTime: "~20 minutes",
    withdrawalTime: "24–48 business hours",
    minDeposit: "$50",
    notes: "Processing subject to network confirmations.",
  },
  {
    Icon: IconEthereum,
    name: "Ethereum",
    network: "ETH Network",
    depositTime: "~5 minutes",
    withdrawalTime: "24–48 business hours",
    minDeposit: "$50",
    notes: "Subject to Ethereum network confirmation times.",
  },
];

/* ─── Processing times table rows ─────────────────────────────────── */
const processingRows = [
  { Method: "USDT (TRC20)",   Deposit: "~1 min",    Withdrawal: "24–48 business hours", "Olla Trade Fee": "None", Notes: "Network fees apply" },
  { Method: "USDT (ERC20)",   Deposit: "~3 min",    Withdrawal: "24–48 business hours", "Olla Trade Fee": "None", Notes: "ETH gas fees apply" },
  { Method: "Bitcoin (BTC)",  Deposit: "~20 min",   Withdrawal: "24–48 business hours", "Olla Trade Fee": "None", Notes: "Network confirmation required" },
  { Method: "Ethereum (ETH)", Deposit: "~5 min",    Withdrawal: "24–48 business hours", "Olla Trade Fee": "None", Notes: "Network confirmation required" },
];

/* ─── Rules cards ─────────────────────────────────────────────────── */
const rulesCards = [
  { Icon: IconUsers,      title: "Account Verification Required",         desc: "Withdrawal requests require completed KYC/AML account verification. Ensure your identity documents and proof of address are submitted and approved." },
  { Icon: IconLock,       title: "Submit via Client Portal Only",          desc: "All withdrawal requests must be submitted through your official Olla Trade client portal. Requests made via email or chat cannot be accepted for security reasons." },
  { Icon: IconActivity,   title: "Blockchain Confirmations",               desc: "Crypto deposits are credited after sufficient blockchain network confirmations. Processing times vary by network and current congestion conditions." },
  { Icon: IconShieldCheck,title: "Additional Documents May Be Requested",  desc: "Olla Trade may request additional documentation for security, compliance, or anti-money laundering verification purposes before processing your withdrawal." },
  { Icon: IconInfo,       title: "Bonus Credit Withdrawal",                desc: "Bonus trading credit cannot be withdrawn directly unless explicitly stated in the relevant promotion's official terms and conditions." },
  { Icon: IconDatabase,   title: "Same Method Policy",                     desc: "Where possible, withdrawals are processed back to the same method used for the original deposit. This is a standard financial security requirement." },
];

/* ─── Security features ────────────────────────────────────────────── */
const securityFeatures = [
  { Icon: IconShield,      title: "Secure Client Portal",          desc: "All funding and withdrawal operations are conducted through your SSL-encrypted Olla Trade client portal — never via email or third-party links." },
  { Icon: IconUsers,       title: "Identity Verification (KYC)",   desc: "Account verification ensures that only the registered account holder can request or receive funds, protecting you from unauthorised withdrawals." },
  { Icon: IconActivity,    title: "Transaction History",            desc: "A complete record of all deposits, withdrawals, and transactions is available in your client portal at all times for your review." },
  { Icon: IconShieldCheck, title: "Compliance Review",              desc: "All transactions are subject to standard compliance and anti-money laundering screening in line with applicable financial regulations." },
  { Icon: IconLock,        title: "Segregated Client Funds",        desc: "Client funds are held separately from company operational funds, providing an additional layer of financial security for your deposits." },
  { Icon: IconClock,       title: "Processing Oversight",           desc: "Withdrawal requests are reviewed and approved by our operations team during business hours to ensure accuracy and security before processing." },
];


/* ═══════════════════════════════════════════════════════════════════ */
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function FundingAndWithdrawalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "trading.funding" });
  const tp = await getTranslations({ locale, namespace: "trading_pages.funding" });
  const tpFlowFeats  = tp.raw("flow_features")   as { label:string; desc:string }[];
  const tpRules      = tp.raw("rules")            as { title:string; desc:string }[];
  const tpSecFeats   = tp.raw("security_features") as { title:string; desc:string }[];
  const depositSteps = tp.raw("deposit_steps")   as [string,string][];
  const withdrawSteps= tp.raw("withdraw_steps")  as [string,string][];
  return (
    <>
      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Depósito e Saque" : "Funding and Withdrawals" }]}
        stats={[
          { value: "0%",    label: tp("stats_fees") },
          { value: "4+",    label: tp("stats_methods") },
          { value: "24–48h",label: tp("stats_time") },
          { value: locale === "pt" ? "Seguro" : "Secure", label: tp("stats_secure") },
        ]}
      >
        <div className="flex flex-wrap gap-3 mt-7">
          <Link href="https://portal.ollatrade.com/auth/login"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
            style={{ background: "#29B5D4", color: "#000" }}>
            {tp("cta_deposit")}
          </Link>
          <Link href="https://portal.ollatrade.com/auth/login"
            className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/65 hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
            {tp("cta_withdraw")}
          </Link>
        </div>
      </PageHero>

      {/* ── 2. Funding methods ─────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("methods_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("methods_title")}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">{tp("methods_subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {cryptoMethods.map(({ Icon, name, network, depositTime, withdrawalTime, minDeposit, notes }) => (
              <div key={`${name}-${network}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#29B5D4]/25 hover:shadow-md transition-all duration-200">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[15px] font-extrabold text-[#111827]">{name}</div>
                <div className="text-[11px] font-semibold text-[#29B5D4] mb-4">{network}</div>
                <div className="space-y-2 text-[12px] text-gray-500">
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span>{tp("label_deposit")}</span>
                    <span className="font-semibold text-[#111827]">{depositTime}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span>{tp("label_withdrawal")}</span>
                    <span className="font-semibold text-[#111827]">{withdrawalTime}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span>{tp("label_min")}</span>
                    <span className="font-semibold text-[#111827]">{minDeposit}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>{locale === "pt" ? "Taxa Olla Trade" : "Olla Trade fee"}</span>
                    <span className="font-semibold text-[#29B5D4]">{tp("val_none")}</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed mt-3 pt-3 border-t border-gray-50">{notes}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F5F7FA] border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-[12px] text-gray-500">
              {tp("support_note")}{" "}
              <Link href="/contact-us" className="text-[#29B5D4] hover:underline font-semibold">{tp("contact_support")}</Link> {tp("support_note2")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Secure funding visual — content section ──────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("flow_label")}</div>
              <h2 className="text-3xl font-extrabold text-white mb-5">{tp("flow_title")}</h2>
              <p className="text-white/45 text-[14px] leading-relaxed mb-6">{tp("flow_desc")}</p>
              <div className="space-y-3">
                {tpFlowFeats.map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#29B5D4]/15 border border-[#29B5D4]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#29B5D4]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white/75 mb-0.5">{label}</div>
                      <div className="text-[12px] text-white/35 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <FundingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 + 4. Deposit + Withdrawal process ─────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">Step-by-Step</div>
            <h2 className="text-3xl font-extrabold text-[#111827]">How to Deposit &amp; Withdraw</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Deposit steps */}
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-white text-gray-500 flex items-center justify-center">
                  <IconCoin className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">{tp("deposit_title")}</h3>
              </div>
              <div className="space-y-4">
                {depositSteps.map(([title, detail], i) => (
                  <div key={i} className="flex items-start gap-3">
                    <StepNum n={i + 1} />
                    <div>
                      <div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Withdrawal steps */}
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-white text-gray-500 flex items-center justify-center">
                  <IconActivity className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">{tp("withdraw_title")}</h3>
              </div>
              <div className="space-y-4">
                {withdrawSteps.map(([title, detail], i) => (
                  <div key={i} className="flex items-start gap-3">
                    <StepNum n={i + 1} />
                    <div>
                      <div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Processing times table ───────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("times_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("times_title")}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
              {locale === "pt" ? "Os prazos mostrados são estimativas. Os tempos de processamento podem variar com base nas condições da rede, status de verificação da conta e volume de solicitações." : "Times shown are estimates. Processing times may vary based on network conditions, account verification status, and request volume."}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white mb-6">
            <table className="w-full text-[13px] min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-100 bg-[#F5F7FA]">
                  {[tp("times_col1"), tp("times_col2"), tp("times_col3"), tp("times_col4"), tp("times_col5")].map((h) => (
                    <th key={h} className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {processingRows.map((row) => (
                  <tr key={row.Method} className="hover:bg-[#F5F7FA] transition-colors">
                    <td className="px-5 py-4 font-bold text-[#111827]">{row.Method}</td>
                    <td className="px-5 py-4 text-gray-600">{row.Deposit}</td>
                    <td className="px-5 py-4 text-gray-600">{row.Withdrawal}</td>
                    <td className="px-5 py-4 font-semibold text-[#29B5D4]">{row["Olla Trade Fee"]}</td>
                    <td className="px-5 py-4 text-gray-400 text-[12px]">{row.Notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Processing time may vary depending on network conditions and transaction volume.",
              "Deposits are subject to blockchain/network confirmation requirements.",
              "Withdrawals are subject to account verification and compliance approval.",
              "Third-party provider or network fees may apply and are outside Olla Trade's control.",
              "Olla Trade does not guarantee specific processing times for any method.",
              "Weekends and public holidays may extend processing timelines.",
            ].map((note) => (
              <div key={note} className="flex items-start gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} />
                </svg>
                <span className="text-[12px] text-gray-500 leading-relaxed">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Important rules ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("rules_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("rules_title")}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
              {locale === "pt" ? "Por favor, leia e compreenda as seguintes condições antes de solicitar um depósito ou saque." : "Please read and understand the following conditions before requesting a deposit or withdrawal."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tpRules.map(({ title, desc }) => (
              <div key={title} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Security section ─────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("security_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{tp("security_title")}</h2>
            <p className="text-white/40 max-w-xl mx-auto text-[15px]">
              {locale === "pt" ? "Toda transação de financiamento e saque é protegida por múltiplas camadas de segurança dentro do portal do cliente da Olla Trade." : "Every funding and withdrawal transaction is protected by multiple layers of security within the Olla Trade client portal."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tpSecFeats.map(({ title, desc }) => (
              <div key={title} className="group border border-white/8 bg-white/[0.03] rounded-2xl p-6 hover:border-[#29B5D4]/20 hover:bg-white/[0.05] transition-all duration-200">
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/40 flex items-center justify-center mb-4 group-hover:text-[#29B5D4] group-hover:border-[#29B5D4]/25 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-[14px] font-bold text-white/80 mb-2">{title}</h4>
                <p className="text-[13px] text-white/38 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 9. Final CTA ────────────────────────────────────────── */}
      <CTASection
        title={tp("cta_title")}
        subtitle={tp("cta_subtitle")}
        primaryLabel={locale === "pt" ? "Login no Portal" : "Login to Portal"}
        primaryHref="https://portal.ollatrade.com/auth/login"
        secondaryLabel={locale === "pt" ? "Abrir Conta Ao Vivo" : "Open Live Account"}
        secondaryHref="https://portal.ollatrade.com/auth/register"
      />

      {/* Compliance footer note */}
      <div className="bg-[#050C15] border-t border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-white/20 text-center leading-relaxed">
            <strong className="text-white/30">Risk & Processing Disclaimer:</strong> All funding and withdrawal operations are subject to Olla Trade&apos;s terms and conditions, account verification requirements, and applicable compliance checks. Processing times are estimates only and cannot be guaranteed. Olla Trade does not guarantee instant processing, guaranteed approval, or fixed returns on any trading account. Crypto transactions are irreversible once broadcast to the network — always verify wallet addresses carefully. Olla Trade is not responsible for funds sent to incorrect addresses.
          </p>
        </div>
      </div>
    </>
  );
}
