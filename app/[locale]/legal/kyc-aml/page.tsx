import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconShieldCheck, IconUsers, IconLock, IconDatabase, IconCheck, IconActivity } from "../../../components/ui/Icons";
import { kycAmlFaqs } from "../../../data/extra-faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "KYC / AML Policy", description: "Olla Trade's Know Your Customer and Anti-Money Laundering policy — identity verification requirements, document acceptance, and compliance procedures." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function KYCAMLPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.kyc" });
  const sectionsNav = t.raw("sections_nav") as { id: string; title: string }[];
  const isPT = locale === "pt";

  const identityDocs = isPT
    ? t.raw("identity_docs") as string[][]
    : [["Valid Passport","Government-issued passport, must be in date"],["National ID Card","Government-issued national identity card, both sides required"],["Driver's Licence","Government-issued driver's licence with photo, both sides required"]];

  const addressDocs = isPT
    ? t.raw("address_docs") as string[][]
    : [["Utility Bill","Gas, electricity, water, or internet bill — issued within the last 3 months"],["Bank Statement","Official bank or financial institution statement — issued within 3 months"],["Government Letter","Official correspondence from a government body, tax authority, or similar — within 3 months"],["Tenancy Agreement","Officially registered tenancy agreement showing your residential address"]];

  const amlItems = isPT
    ? t.raw("aml_items") as string[]
    : ["Customer Due Diligence (CDD) on all new clients","Enhanced Due Diligence (EDD) for higher-risk clients or transactions","Transaction monitoring for unusual patterns","Reporting of suspicious activity to relevant authorities where required by law","Ongoing staff training on AML obligations and red flags"];

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: isPT ? "KYC/AML" : "KYC/AML Policy" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{t("toc_label")}</div>
                <nav className="space-y-0.5">
                  {sectionsNav.map(s => <a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">{s.title}</a>)}
                </nav>
              </div>
            </div>
            <div className="space-y-10">
              {/* Why KYC/AML */}
              <div id="why">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><IconShieldCheck className="w-4 h-4" /></div>
                  <h2 className="text-xl font-extrabold text-[#111827]">{isPT ? t("why_title") : "Why KYC and AML Compliance Is Required"}</h2>
                </div>
                <div className="text-[14px] text-gray-600 leading-relaxed space-y-3">
                  <p>{isPT ? t("why_p1") : "Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance is a legal and regulatory requirement for all financial services firms. Olla Trade is committed to preventing its services from being used for financial crime, money laundering, terrorist financing, or fraud."}</p>
                  <p>{isPT ? t("why_p2") : "KYC procedures allow us to verify client identities and ensure that only legitimate clients can access our services. AML procedures allow us to monitor for unusual activity that may indicate financial crime. These processes protect our clients, our business, and the integrity of the financial system."}</p>
                </div>
              </div>

              {/* Identity Verification */}
              <div id="identity">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><IconUsers className="w-4 h-4" /></div>
                  <h2 className="text-xl font-extrabold text-[#111827]">{isPT ? t("identity_title") : "Identity Verification Process"}</h2>
                </div>
                <div className="text-[14px] text-gray-600 leading-relaxed">
                  <p>{isPT ? t("identity_intro") : "All clients are required to complete identity verification before a live account can be activated or withdrawals processed. The following documents are accepted:"}</p>
                  <div className="mt-4 space-y-2">
                    {identityDocs.map(([docTitle, docDesc]) => (
                      <div key={docTitle} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-3">
                        <IconCheck className="w-4 h-4 text-[#00CC44] flex-shrink-0 mt-0.5" />
                        <div><div className="text-[13px] font-bold text-[#111827]">{docTitle}</div><div className="text-[11px] text-gray-500">{docDesc}</div></div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[13px] text-gray-500">{isPT ? t("identity_note") : "Documents must be clear, fully visible, and in date. Expired documents will not be accepted. All four corners of the document must be visible in the image."}</p>
                </div>
              </div>

              {/* Proof of Address */}
              <div id="address">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><IconLock className="w-4 h-4" /></div>
                  <h2 className="text-xl font-extrabold text-[#111827]">{isPT ? t("address_title") : "Proof of Address Requirements"}</h2>
                </div>
                <div className="text-[14px] text-gray-600 leading-relaxed">
                  <p>{isPT ? t("address_intro") : "In addition to identity verification, clients must provide proof of their residential address. Accepted documents include:"}</p>
                  <div className="mt-4 space-y-2">
                    {addressDocs.map(([docTitle, docDesc]) => (
                      <div key={docTitle} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-3">
                        <IconCheck className="w-4 h-4 text-[#00CC44] flex-shrink-0 mt-0.5" />
                        <div><div className="text-[13px] font-bold text-[#111827]">{docTitle}</div><div className="text-[11px] text-gray-500">{docDesc}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AML */}
              <div id="aml">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><IconActivity className="w-4 h-4" /></div>
                  <h2 className="text-xl font-extrabold text-[#111827]">{isPT ? t("aml_title") : "Anti-Money Laundering (AML) Overview"}</h2>
                </div>
                <div className="text-[14px] text-gray-600 leading-relaxed">
                  <p>{isPT ? t("aml_intro") : "Olla Trade maintains an AML compliance programme designed to detect and prevent money laundering and other financial crimes. Our AML measures include:"}</p>
                  <div className="mt-4 space-y-2">
                    {amlItems.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[13px] text-gray-600">
                        <IconCheck className="w-3.5 h-3.5 text-[#00CC44] flex-shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Source of Funds */}
              <div id="source">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><IconDatabase className="w-4 h-4" /></div>
                  <h2 className="text-xl font-extrabold text-[#111827]">{isPT ? t("source_title") : "Source of Funds"}</h2>
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {isPT ? t("source_p") : "For larger deposits or where our compliance team determines it appropriate, Olla Trade may request information about the source of funds being deposited. Clients may be asked to provide documentation demonstrating the legitimate origin of funds (e.g. payslips, business accounts, investment statements). This is standard practice in regulated financial services and is designed to prevent money laundering. Failure to provide requested source-of-funds documentation may result in account restrictions."}
                </p>
              </div>

              {/* Ongoing Monitoring */}
              <div id="monitoring">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><IconActivity className="w-4 h-4" /></div>
                  <h2 className="text-xl font-extrabold text-[#111827]">{isPT ? t("monitoring_title") : "Ongoing Monitoring and Compliance"}</h2>
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {isPT ? t("monitoring_p") : "KYC and AML compliance is not a one-time process. Olla Trade monitors accounts and transactions on an ongoing basis. If unusual activity is detected, or if our risk assessment changes, we may request additional documentation, restrict account activity, or in serious cases, close an account and report to relevant authorities. Clients have an obligation to keep their account information up to date and to notify us of any material changes to their circumstances."}
                </p>
              </div>

              {/* Data Security */}
              <div id="security">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0"><IconLock className="w-4 h-4" /></div>
                  <h2 className="text-xl font-extrabold text-[#111827]">{isPT ? t("security_title") : "Data Security and Privacy"}</h2>
                </div>
                <div className="text-[14px] text-gray-600 leading-relaxed space-y-3">
                  <p>{isPT ? t("security_p1") : "All documents and personal information submitted for KYC purposes are handled in accordance with Olla Trade's Privacy Policy and applicable data protection laws. Documents are stored securely with access limited to authorised compliance personnel only. We do not share your personal information with third parties except as required by law, regulation, or to comply with legal obligations."}</p>
                  <p>{isPT ? t("security_contact") : "For privacy-related queries, contact us at"} <a href="mailto:info@ollatrade.com" className="text-[#00CC44] hover:underline">info@ollatrade.com</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} faqs={kycAmlFaqs} />
    </>
  );
}
