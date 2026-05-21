import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconUsers, IconCreditCard, IconMonitor, IconShieldCheck, IconBook, IconSettings, IconActivity, IconMail, IconPhone, IconArrowRight } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Get Help",
  description: "Olla Trade support centre — find answers to common questions about accounts, deposits, withdrawals, MT4 platform, verification, and more.",
};

const categories = [
  { Icon: IconUsers,       title: "Account Support",        desc: "Opening an account, login issues, account upgrades, and profile updates.", href: "/contact-us", links: [["Open an account","https://direct.ollatrade.com/auth/register"],["Login help","/contact-us"],["Account types","/trading/accounts"]] },
  { Icon: IconCreditCard,  title: "Deposits & Withdrawals", desc: "Funding your account, withdrawal requests, payment methods, and processing times.", href: "/funding-and-withdrawals", links: [["Deposit funds","/funding-and-withdrawals"],["Request withdrawal","/funding-and-withdrawals"],["Payment methods","/funding-and-withdrawals"]] },
  { Icon: IconMonitor,     title: "Trading Platform",       desc: "MetaTrader 4 installation, login, EA setup, technical issues, and downloads.", href: "/trading/platform", links: [["Download MT4","/trading/platform"],["MT4 setup","/trading/platform"],["VPS guide","/tools/vps"]] },
  { Icon: IconShieldCheck, title: "Verification / KYC",     desc: "Identity verification requirements, document submission, and KYC/AML queries.", href: "/legal/kyc-aml", links: [["KYC requirements","/legal/kyc-aml"],["Submit docs","https://direct.ollatrade.com/auth/login"],["Verification status","https://direct.ollatrade.com/auth/login"]] },
  { Icon: IconBook,        title: "Partner Program",        desc: "Affiliate applications, commission models, tracking links, and partner portal.", href: "/company/affiliate", links: [["Apply as partner","/company/affiliate"],["Commission models","/company/affiliate"],["Partner portal","https://direct.ollatrade.com/auth/login"]] },
  { Icon: IconSettings,    title: "Technical Support",      desc: "Platform connectivity, order execution questions, and EA troubleshooting.", href: "/contact-us", links: [["Execution info","/execution-information"],["MT4 platform","/trading/platform"],["Contact support","/contact-us"]] },
  { Icon: IconActivity,    title: "Complaints",             desc: "Submit a formal complaint and view our complaint handling process.", href: "/company/complaints", links: [["Submit complaint","/company/complaints"],["Complaint process","/company/complaints"],["Legal docs","/company/legal"]] },
];

const faqs = [
  { q: "How do I open a live account?", a: "Click 'Open Account', complete the registration form (approximately 2 minutes), submit KYC documents, and deposit funds. Your account activates once verification is approved — typically within 1–2 business days." },
  { q: "What is the minimum deposit?", a: "Standard: $10 · Pro: $2,000 · Elite: $20,000. These are the minimum amounts required to activate each account type and begin trading." },
  { q: "How long does a withdrawal take?", a: "Withdrawal requests are processed within 24–48 business hours after approval. Crypto withdrawals are additionally subject to blockchain network confirmation times. Times may vary based on verification status." },
  { q: "How do I install MetaTrader 4?", a: "Download MT4 from the Olla Trade website or MetaQuotes. Install on Windows (or use WebTrader). Log in with your account number, password, and the Olla Trade server address from your welcome email." },
  { q: "Why is my verification taking longer than expected?", a: "Verification typically takes 1–2 business days. Delays may occur if documents are unclear or if the address doesn't match your registration details. Our team will contact you if more information is needed." },
  { q: "How do I contact Olla Trade support?", a: "Email info@ollatrade.com or cst@ollatrade.com, or call +44 7418 641736. Our team is available 24/5, Monday to Friday. You can also use the contact form on our Contact Us page." },
  { q: "Where can I view my transaction history?", a: "Log in to your Olla Trade client portal and go to the Transaction History section. Filter by date range, type, or status to view all deposits, withdrawals, and account activity." },
  { q: "How do I become an affiliate?", a: "Visit the Partner Programme page or email info@ollatrade.com with your details and traffic source. Our team will respond within 2–3 business days." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function HelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.help" });
  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")} breadcrumbs={[{ label: "Company", href: "/company" }, { label: "Get Help" }]} stats={[{ value: "24/5", label: "Support hours" }, { value: "1 day", label: "Typical response" }, { value: "Email+Phone", label: "Channels" }]} />

      {/* Categories */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Browse by Topic</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">Support Categories</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map(({ Icon, title, desc, links }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col hover:border-[#00CC44]/20 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-3"><Icon className="w-4 h-4" /></div>
                <h3 className="text-[13px] font-bold text-[#111827] mb-1.5">{title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="space-y-1 border-t border-gray-50 pt-3">
                  {links.map(([label, url]) => (
                    <Link key={label} href={url} className="flex items-center justify-between text-[11px] text-gray-500 hover:text-[#00CC44] transition-colors py-0.5 group">
                      <span>{label}</span>
                      <IconArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Process</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">Getting Your Issue Resolved</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[["01","Check the FAQs","Most common questions are answered in the FAQs on this page and throughout the website."],["02","Contact Support","Email or call our team with your account number and a clear description of your query."],["03","We Respond","Our team aims to respond within one business day via the contact method you used."],["04","Issue Resolved","Our team will work with you to resolve your query and confirm the outcome in writing."]].map(([n,t,d])=>(
              <div key={n} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-extrabold text-[#00CC44] mb-3">{n}</div>
                <h4 className="text-[14px] font-bold text-[#111827] mb-2">{t}</h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Direct Contact</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">Still Need Help?</h2>
            <p className="text-gray-500 text-[15px]">Our support team is available Monday to Friday, 24 hours a day.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {[
              { Icon: IconMail,  title: "Email",       detail: "info@ollatrade.com", sub: "cst@ollatrade.com", href: "mailto:info@ollatrade.com", cta: "Send Email" },
              { Icon: IconPhone, title: "Phone (24/5)", detail: "+44 7418 641736",   sub: "Monday – Friday, 24/5",   href: "tel:+447418641736",         cta: "Call Now" },
            ].map(({ Icon, title, detail, sub, href, cta }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-3"><Icon className="w-4 h-4" /></div>
                <h3 className="text-[14px] font-bold text-[#111827] mb-1">{title}</h3>
                <div className="text-[13px] text-gray-600">{detail}</div>
                <div className="text-[12px] text-gray-400 mb-4">{sub}</div>
                <Link href={href} className="w-full flex items-center justify-center border border-[#00CC44]/25 hover:bg-[#00CC44] hover:text-black hover:border-[#00CC44] text-[#00CC44] font-semibold py-2.5 rounded-xl text-[12px] transition-all">{cta}</Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact-us" className="text-[13px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors underline underline-offset-4">Visit our full Contact Us page →</Link>
          </div>
        </div>
      </section>

      {/* Common issues guide */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Self-Service Guide</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Common Issues & Solutions</h2>
            <p className="text-white/40 text-[15px] max-w-xl mx-auto">Most issues can be resolved without contacting support. Find your issue below and follow the steps before reaching out.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                issue: "Cannot log in to MT4",
                steps: ["Check your account number (not email) is used as the MT4 login","Verify you have selected the correct Olla Trade server","Confirm the password is the MT4 password (not portal password)","Reset MT4 password from your client portal if needed"],
              },
              {
                issue: "Withdrawal not received",
                steps: ["Check processing time: crypto 24–48h, bank 3–5 days","Confirm your withdrawal method matches your deposit method","Verify your wallet address or bank details are correct","Check your portal transaction history for status updates"],
              },
              {
                issue: "KYC document rejected",
                steps: ["Ensure the document is valid and not expired","Check the full name matches your registration exactly","Ensure document edges and all four corners are visible","Use a recent utility bill or bank statement (within 3 months)"],
              },
              {
                issue: "EA (Expert Advisor) not running",
                steps: ["Enable AutoTrading in the MT4 toolbar (Ctrl+E)","Check EA is attached to chart — look for EA icon on chart corner","Ensure 'Allow live trading' is checked in EA settings","Check the EA journal tab for error messages"],
              },
              {
                issue: "Account not verified yet",
                steps: ["Check email (including spam) for verification status update","Log in to your portal to see pending document status","Allow 1–2 business days after document submission","Contact support with your account number if beyond 2 days"],
              },
              {
                issue: "Deposit not credited",
                steps: ["Crypto: wait for blockchain confirmations (network dependent)","Check you sent to the correct wallet address/network","Confirm the deposit currency matches your account currency","Contact support with transaction ID/hash if not credited after 24h"],
              },
            ].map(({ issue, steps }) => (
              <div key={issue} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                <h4 className="text-[13px] font-bold text-white mb-4">{issue}</h4>
                <ol className="space-y-2">
                  {steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[12px] text-white/45">
                      <span className="text-[10px] font-bold text-[#00CC44] w-4 flex-shrink-0 mt-0.5">{i + 1}.</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response times table */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Support Availability</div>
          <h2 className="text-2xl font-extrabold text-[#111827] mb-8 text-center">Response Times by Enquiry Type</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {["Enquiry Type","Contact Method","Expected Response","Priority"].map(h => (
                    <th key={h} className="px-5 py-3.5 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Account Support",        "Email / Phone", "Same business day",  "High"],
                  ["General Enquiry",        "Email / Form",  "1 business day",     "Standard"],
                  ["Deposit / Withdrawal",   "Email",         "1 business day",     "High"],
                  ["KYC / Verification",     "Email",         "1–2 business days",  "Standard"],
                  ["Technical Platform",     "Email / Phone", "Same business day",  "High"],
                  ["Partnership / Affiliate","Email",         "2–3 business days",  "Standard"],
                  ["Formal Complaints",      "Email",         "2 business days (acknowledgement)", "Compliance"],
                ].map(([type, method, response, priority]) => (
                  <tr key={type} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3 font-semibold text-[#111827] text-[13px]">{type}</td>
                    <td className="px-5 py-3 text-gray-500 text-[13px]">{method}</td>
                    <td className="px-5 py-3 text-[#00CC44] font-semibold text-[13px]">{response}</td>
                    <td className="px-5 py-3 text-[12px]">
                      <span className="px-2.5 py-0.5 rounded-full font-semibold"
                        style={{
                          background: priority === "High" ? "rgba(0,204,68,0.1)" : priority === "Compliance" ? "rgba(30,136,229,0.1)" : "rgba(107,114,128,0.1)",
                          color: priority === "High" ? "#00AA38" : priority === "Compliance" ? "#1E88E5" : "#6B7280",
                        }}>
                        {priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-3 text-center">Response times are targets during business hours (Monday–Friday). Weekend availability may be limited.</p>
        </div>
      </section>

      <FAQSection title={t("faq_title")} subtitle="Answers to the most common questions from Olla Trade clients." faqs={faqs} />
    </>
  );
}
