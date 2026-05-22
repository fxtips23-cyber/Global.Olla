import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Olla Trade Terms and Conditions — governing the use of our trading services, account registration, deposits, withdrawals, and client obligations." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.terms" });
  const sections = t.raw("sections") as { id: string; title: string; content: string }[];
  const companyDetails = t.raw("company_details") as string[];

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Legal" : "Legal", href: "/company/legal" }, { label: t("title") }]} />

      <section className="py-8 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-blue-200 bg-blue-50 rounded-xl p-5 text-center">
            <p className="text-[13px] text-blue-800">{t("notice")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{t("toc_label")}</div>
                <nav className="space-y-0.5">
                  {sections.map(s => <a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">{s.title}</a>)}
                </nav>
              </div>
            </div>
            <div className="space-y-8">
              {sections.map(({ id, title, content }) => (
                <div key={id} id={id} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-6">
                  <h2 className="text-[16px] font-bold text-[#111827] mb-3">{title}</h2>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{content}</p>
                </div>
              ))}
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-6">
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{t("company_details_title")}</h3>
                <div className="text-[13px] text-gray-600 space-y-1">
                  {companyDetails.map((line, i) => <p key={i}>{line}</p>)}
                  <p>{locale === "pt" ? "Contato:" : "Contact:"} <a href="mailto:info@ollatrade.com" className="text-[#00CC44] hover:underline">info@ollatrade.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
