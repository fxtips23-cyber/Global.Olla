import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Olla Trade Terms and Conditions — governing the use of our trading services, account registration, deposits, withdrawals, and client obligations." };

const sections = [
  { id:"intro",        title:"1. Introduction",           content: "These Terms and Conditions ('Terms') govern the relationship between Olla Trade Ltd. ('the Company', 'we', 'us') and the client ('you', 'the Client') and form an integral part of the Client Agreement. By registering an account with Olla Trade, you confirm that you have read, understood, and agreed to be bound by these Terms. Olla Trade Ltd. is incorporated in Anguilla (Registration No. A000001849) as an International Business Company, providing Forex and CFD trading services through the MetaTrader 4 platform." },
  { id:"eligibility",  title:"2. Eligibility",             content: "You must be at least 18 years of age and have the full legal capacity to enter into binding agreements. You confirm that you are not a resident of a jurisdiction where Forex or CFD trading is prohibited, including but not limited to: the United States, Russia, Myanmar, UAE, Canada, Israel, New Zealand, Iran, and North Korea (DPRK). The Company reserves the right to decline applications from clients in any jurisdiction at its discretion." },
  { id:"account",      title:"3. Account Registration",    content: "You must provide complete, accurate, and up-to-date personal information during registration. You are required to complete identity verification (KYC/AML) before your account can be fully activated. You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorised access to your account at info@ollatrade.com. You must not open more than one live account per person without prior written consent from the Company." },
  { id:"services",     title:"4. Services",                content: "Olla Trade provides execution-only trading services across Forex, Metals, Indices, Energies, Cryptocurrencies, and Stocks through the MetaTrader 4 platform. We also provide market information, deposit and withdrawal processing, and platform access. Olla Trade does not provide investment advice, portfolio management, or personalised financial recommendations. Nothing on our website constitutes a solicitation to trade." },
  { id:"risk",         title:"5. Risk Warning",            content: "Forex and CFD trading is highly speculative and involves a significant level of risk. It is possible to lose all or a substantial amount of your invested capital. You should only trade with funds you can afford to lose. The Company does not guarantee profits or the preservation of capital. Please read our Risk Disclosures in full before trading." },
  { id:"deposits",     title:"6. Deposits and Withdrawals", content: "Deposits are processed in accordance with our Funding and Withdrawals policy. Withdrawals are subject to completed KYC verification, account standing, and compliance review. Olla Trade does not charge its own fees on deposits or withdrawals; however, third-party network fees may apply for crypto transactions. Processing times are estimates and cannot be guaranteed. See our Withdrawal Conditions for full details." },
  { id:"prohibited",   title:"7. Prohibited Activities",  content: "The following activities are strictly prohibited: money laundering or terrorist financing; fraud or misrepresentation; market manipulation or abusive trading strategies; providing false or misleading documentation; opening accounts on behalf of third parties without disclosure; using automated strategies that abuse latency or pricing imperfections; and any activity that violates applicable laws or regulations." },
  { id:"termination",  title:"8. Account Termination",    content: "Olla Trade reserves the right to suspend or terminate client accounts at any time and without prior notice in circumstances including: breach of these Terms; suspicious activity or fraud; failure to complete or maintain KYC requirements; non-compliance with applicable regulations; or any other reason at the Company's sole discretion. On termination, any pending withdrawal requests will be processed in accordance with applicable policies." },
  { id:"liability",    title:"9. Limitation of Liability", content: "Olla Trade shall not be liable for any losses arising from: force majeure events; third-party service failures outside our control; market volatility or gapping; client errors in order placement; or losses resulting from technical issues with internet connectivity or client devices. The Company's total liability to any client shall not exceed the funds held in that client's account at the time the liability arose." },
  { id:"governing",    title:"10. Governing Law",          content: "These Terms are governed by the laws of Anguilla. Any disputes shall be subject to the jurisdiction of the courts of Anguilla. The Company encourages clients to use our formal complaint process before initiating legal proceedings. Contact: info@ollatrade.com | Olla Trade Ltd., Grace Complex, The Valley, AI 2640, Anguilla." },
];

export default function TermsPage() {
  return (
    <>
      <PageHero badge="Legal" title="Terms & Conditions" subtitle="Please read these Terms and Conditions carefully before using Olla Trade services. By registering an account, you confirm your acceptance of these Terms." breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: "Terms & Conditions" }]} />

      {/* Important notice */}
      <section className="py-8 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-blue-200 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-5 text-center">
            <p className="text-[13px] text-blue-800 dark:text-blue-300">By opening an account with Olla Trade, you confirm you have read, understood, and agreed to these Terms and Conditions. Last reviewed: 2025.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-widest mb-4">Sections</div>
                <nav className="space-y-0.5">{sections.map(s=><a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 dark:text-[#9CA3AF] hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">{s.title}</a>)}</nav>
              </div>
            </div>
            <div className="space-y-8">
              {sections.map(({ id, title, content }) => (
                <div key={id} id={id} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                  <h2 className="text-[16px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-3">{title}</h2>
                  <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">{content}</p>
                </div>
              ))}
              <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <h3 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">Company Details</h3>
                <div className="text-[13px] text-gray-600 dark:text-[#9CA3AF] space-y-1">
                  <p>Olla Trade Ltd. · Incorporated in Anguilla · Registration No. A000001849</p>
                  <p>Registered Address: Grace Complex, The Valley, AI 2640, Anguilla</p>
                  <p>Contact: <a href="mailto:info@ollatrade.com" className="text-[#00CC44] hover:underline">info@ollatrade.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
