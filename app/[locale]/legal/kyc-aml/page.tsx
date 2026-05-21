import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconShieldCheck, IconUsers, IconLock, IconDatabase, IconCheck, IconActivity } from "../../../components/ui/Icons";
import { kycAmlFaqs } from "../../../data/extra-faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "KYC / AML Policy", description: "Olla Trade's Know Your Customer and Anti-Money Laundering policy — identity verification requirements, document acceptance, and compliance procedures." };

const sections = [{ id:"why", title:"Why KYC/AML?" },{ id:"identity", title:"Identity Verification" },{ id:"address", title:"Proof of Address" },{ id:"aml", title:"AML Compliance" },{ id:"source", title:"Source of Funds" },{ id:"monitoring", title:"Ongoing Monitoring" },{ id:"security", title:"Data Security" }];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function KYCAMLPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.kyc" });
  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle="Olla Trade is committed to preventing financial crime and complying with applicable Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations." breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: "KYC/AML Policy" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</div>
                <nav className="space-y-0.5">{sections.map(s=><a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">{s.title}</a>)}</nav>
              </div>
            </div>
            <div className="space-y-10">
              {[
                { id:"why", Icon:IconShieldCheck, title:"Why KYC and AML Compliance Is Required",
                  body: <><p>Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance is a legal and regulatory requirement for all financial services firms. Olla Trade is committed to preventing its services from being used for financial crime, money laundering, terrorist financing, or fraud.</p><p className="mt-3">KYC procedures allow us to verify client identities and ensure that only legitimate clients can access our services. AML procedures allow us to monitor for unusual activity that may indicate financial crime. These processes protect our clients, our business, and the integrity of the financial system.</p></> },
                { id:"identity", Icon:IconUsers, title:"Identity Verification Process",
                  body: <><p>All clients are required to complete identity verification before a live account can be activated or withdrawals processed. The following documents are accepted:</p><div className="mt-4 space-y-2">{[["Valid Passport","Government-issued passport, must be in date"],["National ID Card","Government-issued national identity card, both sides required"],["Driver's Licence","Government-issued driver's licence with photo, both sides required"]].map(([t,d])=><div key={t} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-3"><IconCheck className="w-4 h-4 text-[#00CC44] flex-shrink-0 mt-0.5" /><div><div className="text-[13px] font-bold text-[#111827]">{t}</div><div className="text-[11px] text-gray-500">{d}</div></div></div>)}</div><p className="mt-4 text-[13px] text-gray-500">Documents must be clear, fully visible, and in date. Expired documents will not be accepted. All four corners of the document must be visible in the image.</p></> },
                { id:"address", Icon:IconLock, title:"Proof of Address Requirements",
                  body: <><p>In addition to identity verification, clients must provide proof of their residential address. Accepted documents include:</p><div className="mt-4 space-y-2">{[["Utility Bill","Gas, electricity, water, or internet bill — issued within the last 3 months"],["Bank Statement","Official bank or financial institution statement — issued within 3 months"],["Government Letter","Official correspondence from a government body, tax authority, or similar — within 3 months"],["Tenancy Agreement","Officially registered tenancy agreement showing your residential address"]].map(([t,d])=><div key={t} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-3"><IconCheck className="w-4 h-4 text-[#00CC44] flex-shrink-0 mt-0.5" /><div><div className="text-[13px] font-bold text-[#111827]">{t}</div><div className="text-[11px] text-gray-500">{d}</div></div></div>)}</div></> },
                { id:"aml", Icon:IconActivity, title:"Anti-Money Laundering (AML) Overview",
                  body: <><p>Olla Trade maintains an AML compliance programme designed to detect and prevent money laundering and other financial crimes. Our AML measures include:</p><div className="mt-4 space-y-2">{["Customer Due Diligence (CDD) on all new clients","Enhanced Due Diligence (EDD) for higher-risk clients or transactions","Transaction monitoring for unusual patterns","Reporting of suspicious activity to relevant authorities where required by law","Ongoing staff training on AML obligations and red flags"].map(i=><div key={i} className="flex items-center gap-2 text-[13px] text-gray-600"><IconCheck className="w-3.5 h-3.5 text-[#00CC44] flex-shrink-0" />{i}</div>)}</div></> },
                { id:"source", Icon:IconDatabase, title:"Source of Funds",
                  body: <p>For larger deposits or where our compliance team determines it appropriate, Olla Trade may request information about the source of funds being deposited. Clients may be asked to provide documentation demonstrating the legitimate origin of funds (e.g. payslips, business accounts, investment statements). This is standard practice in regulated financial services and is designed to prevent money laundering. Failure to provide requested source-of-funds documentation may result in account restrictions.</p> },
                { id:"monitoring", Icon:IconActivity, title:"Ongoing Monitoring and Compliance",
                  body: <p>KYC and AML compliance is not a one-time process. Olla Trade monitors accounts and transactions on an ongoing basis. If unusual activity is detected, or if our risk assessment changes, we may request additional documentation, restrict account activity, or in serious cases, close an account and report to relevant authorities. Clients have an obligation to keep their account information up to date and to notify us of any material changes to their circumstances.</p> },
                { id:"security", Icon:IconLock, title:"Data Security and Privacy",
                  body: <><p>All documents and personal information submitted for KYC purposes are handled in accordance with Olla Trade's Privacy Policy and applicable data protection laws. Documents are stored securely with access limited to authorised compliance personnel only. We do not share your personal information with third parties except as required by law, regulation, or to comply with legal obligations.</p><p className="mt-3">For privacy-related queries, contact us at <a href="mailto:info@ollatrade.com" className="text-[#00CC44] hover:underline">info@ollatrade.com</a>.</p></> },
              ].map(({ id, Icon, title, body }) => (
                <div key={id} id={id}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4" /></div>
                    <h2 className="text-xl font-extrabold text-[#111827]">{title}</h2>
                  </div>
                  <div className="text-[14px] text-gray-600 leading-relaxed">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="KYC/AML FAQs" faqs={kycAmlFaqs} />
    </>
  );
}
