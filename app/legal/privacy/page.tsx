import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy Policy", description: "Olla Trade Privacy Policy — how we collect, use, store, and protect your personal data in compliance with applicable data protection laws." };

const sections = [
  { id:"intro",     title:"1. Introduction",           content: "Olla Trade Ltd. ('we', 'us', 'Company') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal information when you use our services. This policy applies to all clients, visitors, and users of Olla Trade services. By using our services, you consent to the data practices described in this policy." },
  { id:"collect",   title:"2. Information We Collect", content: "We collect personal information including: full name and date of birth; contact details (email address, phone number, residential address); government-issued identity documents and proof of address for KYC/AML purposes; financial information including account activity and transaction history; trading data and account preferences; device and browser information when you access our platforms; and any communications you send to us via email, phone, or contact forms." },
  { id:"use",       title:"3. How We Use Your Information", content: "We use your personal information to: verify your identity and comply with KYC/AML regulatory obligations; create and manage your trading account; process deposits, withdrawals, and account transactions; provide customer support and respond to enquiries; send account-related communications (security alerts, policy updates, transaction confirmations); comply with legal and regulatory requirements; detect and prevent fraud, money laundering, and other financial crime; and improve our services and platform." },
  { id:"sharing",   title:"4. Sharing Your Information", content: "We do not sell your personal data to third parties. We may share your information with: identity verification service providers for KYC/AML compliance; payment processors to handle deposit and withdrawal transactions; regulatory authorities and law enforcement when required by applicable law; legal and professional advisors as necessary; and technology service providers who assist in operating our platform (subject to strict confidentiality obligations). Any third parties who process your data on our behalf are required to comply with applicable data protection law." },
  { id:"security",  title:"5. Data Security",            content: "We implement industry-standard security measures to protect your personal information including: SSL/TLS encryption for data transmission; secure, access-controlled data storage; role-based access controls limiting data access to authorised personnel only; regular security assessments and audits; and incident response procedures. Despite these measures, no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security." },
  { id:"retention", title:"6. Data Retention",           content: "We retain your personal data for as long as your account is active and for a minimum of 5 years after account closure, as required by applicable anti-money laundering regulations. Transaction records are retained as required by financial regulations. You may request deletion of certain data subject to legal retention requirements. We will not retain data longer than necessary for the stated purposes." },
  { id:"rights",    title:"7. Your Rights",              content: "Depending on your jurisdiction, you may have the following rights: the right to access the personal data we hold about you; the right to correct inaccurate or incomplete data; the right to request deletion of your data (subject to legal obligations); the right to object to certain processing activities; and the right to data portability. To exercise these rights, contact us at info@ollatrade.com. We will respond within a reasonable timeframe and in accordance with applicable law." },
  { id:"cookies",   title:"8. Cookies",                  content: "Our website uses cookies and similar tracking technologies to improve your browsing experience, analyse site traffic, and personalise content. Essential cookies are required for the website to function. Analytics and preference cookies may be disabled through your browser settings. By continuing to use our website, you consent to our use of cookies as described in our Cookies Policy." },
  { id:"contact",   title:"9. Contact",                  content: "For privacy-related enquiries, data access requests, or to exercise your data protection rights, contact: info@ollatrade.com | Olla Trade Ltd., Grace Complex, The Valley, AI 2640, Anguilla. We aim to respond to all privacy-related requests within 30 days." },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero badge="Privacy" title="Privacy Policy" subtitle="Your privacy is important to us. This policy explains how Olla Trade collects, uses, and protects your personal information." breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: "Privacy Policy" }]} />

      <section className="py-8 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-blue-200 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-5 text-center">
            <p className="text-[13px] text-blue-800 dark:text-blue-300">This Privacy Policy was last reviewed in 2025. We will notify clients of any material changes by updating this page.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-widest mb-4">Contents</div>
                <nav className="space-y-0.5">{sections.map(s=><a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 dark:text-[#9CA3AF] hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">{s.title}</a>)}</nav>
              </div>
            </div>
            <div className="space-y-6">
              {sections.map(({ id, title, content }) => (
                <div key={id} id={id} className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                  <h2 className="text-[16px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-3">{title}</h2>
                  <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
