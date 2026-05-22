import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import { IconUsers, IconCreditCard, IconMonitor, IconShieldCheck, IconBook, IconSettings, IconActivity, IconMail, IconPhone, IconArrowRight } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Get Help",
  description: "Olla Trade support centre — find answers to common questions about accounts, deposits, withdrawals, MT4 platform, verification, and more.",
};

const CAT_ICONS: ComponentType<{ className?: string }>[] = [IconUsers, IconCreditCard, IconMonitor, IconShieldCheck, IconBook, IconSettings, IconActivity];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function HelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.help" });

  const categories    = t.raw("categories")     as { title: string; desc: string; links: string[][] }[];
  const processSteps  = t.raw("process_steps")  as string[][];
  const issues        = t.raw("issues")         as { issue: string; steps: string[] }[];
  const tableHeaders  = t.raw("table_headers")  as string[];
  const responseRows  = t.raw("response_rows")  as string[][];
  const faqs          = t.raw("faqs")           as { q: string; a: string }[];

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Empresa" : "Company", href: "/company" }, { label: t("title") }]}
        stats={[
          { value: "24/5",   label: locale === "pt" ? "Horas de suporte" : "Support hours" },
          { value: locale === "pt" ? "1 dia" : "1 day", label: locale === "pt" ? "Resposta típica" : "Typical response" },
          { value: "Email+Phone", label: locale === "pt" ? "Canais" : "Channels" },
        ]}
      />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("categories_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("categories_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map(({ title, desc, links }, i) => {
              const Icon = CAT_ICONS[i % CAT_ICONS.length];
              return (
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("process_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("process_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map(([n, title, desc]) => (
              <div key={n} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5 text-center">
                <div className="text-2xl font-extrabold text-[#00CC44] mb-3">{n}</div>
                <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("contact_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("contact_title")}</h2>
            <p className="text-gray-500 text-[15px]">{t("contact_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {[
              { Icon: IconMail,  title: t("contact_email_label"), detail: "info@ollatrade.com", sub: t("contact_email_sub"), href: "mailto:info@ollatrade.com", cta: t("contact_send_email") },
              { Icon: IconPhone, title: t("contact_phone_label"), detail: "+44 7418 641736",    sub: t("contact_phone_sub"),  href: "tel:+447418641736",        cta: t("contact_call_now") },
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
            <Link href="/contact-us" className="text-[13px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors underline underline-offset-4">{t("contact_full_link")}</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("issues_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("issues_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {issues.map(({ issue, steps }) => (
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

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("times_label")}</div>
          <h2 className="text-2xl font-extrabold text-[#111827] mb-8 text-center">{t("times_title")}</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {tableHeaders.map(h => (
                    <th key={h} className="px-5 py-3.5 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {responseRows.map(([type, method, response, priority]) => (
                  <tr key={type} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3 font-semibold text-[#111827] text-[13px]">{type}</td>
                    <td className="px-5 py-3 text-gray-500 text-[13px]">{method}</td>
                    <td className="px-5 py-3 text-[#00CC44] font-semibold text-[13px]">{response}</td>
                    <td className="px-5 py-3 text-[12px]">
                      <span className="px-2.5 py-0.5 rounded-full font-semibold"
                        style={{
                          background: priority === "High" || priority === "Alta" ? "rgba(0,204,68,0.1)" : priority === "Compliance" || priority === "Conformidade" ? "rgba(30,136,229,0.1)" : "rgba(107,114,128,0.1)",
                          color: priority === "High" || priority === "Alta" ? "#00AA38" : priority === "Compliance" || priority === "Conformidade" ? "#1E88E5" : "#6B7280",
                        }}>
                        {priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-3 text-center">{t("response_note")}</p>
        </div>
      </section>

      <FAQSection title={t("faq_title")} subtitle={locale === "pt" ? "Respostas às perguntas mais comuns dos clientes da Olla Trade." : "Answers to the most common questions from Olla Trade clients."} faqs={faqs} />
    </>
  );
}
