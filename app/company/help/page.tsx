import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import FAQSection from "../../components/ui/FAQSection";
import { IconUsers, IconCreditCard, IconMonitor, IconShieldCheck, IconBook, IconSettings, IconActivity, IconMail, IconPhone, IconArrowRight } from "../../components/ui/Icons";

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

export default function HelpPage() {
  return (
    <>
      <PageHero badge="Support Centre" title="How Can We Help?" subtitle="Find answers to common questions about accounts, trading, deposits, verification, and more. Our support team is available 24/5, Monday to Friday." breadcrumbs={[{ label: "Company", href: "/company" }, { label: "Get Help" }]} stats={[{ value: "24/5", label: "Support hours" }, { value: "1 day", label: "Typical response" }, { value: "Email+Phone", label: "Channels" }]} />

      {/* Categories */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Browse by Topic</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Support Categories</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map(({ Icon, title, desc, links }) => (
              <div key={title} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5 flex flex-col hover:border-[#00CC44]/20 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-3"><Icon className="w-4 h-4" /></div>
                <h3 className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1.5">{title}</h3>
                <p className="text-[11px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="space-y-1 border-t border-gray-50 dark:border-[#1F2937] pt-3">
                  {links.map(([label, url]) => (
                    <Link key={label} href={url} className="flex items-center justify-between text-[11px] text-gray-500 dark:text-[#9CA3AF] hover:text-[#00CC44] transition-colors py-0.5 group">
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
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Process</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Getting Your Issue Resolved</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[["01","Check the FAQs","Most common questions are answered in the FAQs on this page and throughout the website."],["02","Contact Support","Email or call our team with your account number and a clear description of your query."],["03","We Respond","Our team aims to respond within one business day via the contact method you used."],["04","Issue Resolved","Our team will work with you to resolve your query and confirm the outcome in writing."]].map(([n,t,d])=>(
              <div key={n} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5 text-center">
                <div className="text-2xl font-extrabold text-[#00CC44] mb-3">{n}</div>
                <h4 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">{t}</h4>
                <p className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Direct Contact</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Still Need Help?</h2>
            <p className="text-gray-500 dark:text-[#9CA3AF] text-[15px]">Our support team is available Monday to Friday, 24 hours a day.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {[
              { Icon: IconMail,  title: "Email",       detail: "info@ollatrade.com", sub: "cst@ollatrade.com", href: "mailto:info@ollatrade.com", cta: "Send Email" },
              { Icon: IconPhone, title: "Phone (24/5)", detail: "+44 7418 641736",   sub: "+996 312 962732",   href: "tel:+447418641736",         cta: "Call Now" },
            ].map(({ Icon, title, detail, sub, href, cta }) => (
              <div key={title} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <div className="w-9 h-9 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-3"><Icon className="w-4 h-4" /></div>
                <h3 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">{title}</h3>
                <div className="text-[13px] text-gray-600 dark:text-[#9CA3AF]">{detail}</div>
                <div className="text-[12px] text-gray-400 dark:text-[#6B7280] mb-4">{sub}</div>
                <Link href={href} className="w-full flex items-center justify-center border border-[#00CC44]/25 hover:bg-[#00CC44] hover:text-black hover:border-[#00CC44] text-[#00CC44] font-semibold py-2.5 rounded-xl text-[12px] transition-all">{cta}</Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact-us" className="text-[13px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors underline underline-offset-4">Visit our full Contact Us page →</Link>
          </div>
        </div>
      </section>

      <FAQSection title="Help Centre FAQs" subtitle="Answers to the most common questions from Olla Trade clients." faqs={faqs} />
    </>
  );
}
