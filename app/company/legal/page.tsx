import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import { IconBook, IconShieldCheck, IconInfo, IconLock, IconArrowRight, IconSettings, IconBell, IconDatabase } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "Legal Documents", description: "Access all Olla Trade legal documents including Terms & Conditions, Privacy Policy, Risk Disclosures, and more." };

const docs = [
  { Icon: IconBook,        title: "Terms & Conditions",   desc: "The complete terms governing your use of Olla Trade services, account registration, and trading.",         href: "/legal/terms" },
  { Icon: IconShieldCheck, title: "Privacy Policy",        desc: "How Olla Trade collects, uses, and protects your personal data in compliance with applicable privacy laws.", href: "/legal/privacy" },
  { Icon: IconInfo,        title: "Risk Disclosures",      desc: "Important risk warnings for trading Forex and CFDs. Please read before opening an account.",                href: "/legal/risk-disclosures" },
  { Icon: IconDatabase,    title: "KYC / AML Policy",      desc: "Our Know Your Customer and Anti-Money Laundering compliance procedures.",                                  href: "/legal/kyc-aml" },
  { Icon: IconArrowRight,  title: "Withdrawal Conditions", desc: "Terms and conditions governing withdrawal requests from your Olla Trade account.",                          href: "/legal/withdrawal-conditions" },
  { Icon: IconSettings,    title: "Cookies Policy",        desc: "How we use cookies and similar technologies on our website.",                                               href: "/legal/cookies" },
  { Icon: IconLock,        title: "Order Execution Policy",desc: "Our approach to executing client orders and achieving best execution.",                                     href: "/legal/execution-policy" },
  { Icon: IconBell,        title: "Complaint Management",  desc: "Our formal complaint handling procedures and escalation process.",                                          href: "/legal/complaint-management" },
];

export default function LegalPage() {
  return (
    <>
      <PageHero badge="Legal & Compliance" title="Legal Documents" subtitle="All Olla Trade legal documents, policies, and compliance information in one place." breadcrumbs={[{ label: "Company", href: "/company" }, { label: "Legal Documents" }]} />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {docs.map((d) => (
              <Link key={d.title} href={d.href}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-400 flex items-center justify-center flex-shrink-0 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                  <d.Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[13px] font-bold text-[#111827] mb-1 group-hover:text-[#00AA38] transition-colors">{d.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#00CC44] mt-1 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
