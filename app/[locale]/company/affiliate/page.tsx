import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { IconDollar, IconBarChart, IconUsers, IconHeadset, IconTarget, IconBell, IconBook, IconGlobe, IconMonitor, IconNewspaper, IconActivity, IconSettings } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Partner / Affiliate Program",
  description: "Join the Olla Trade affiliate program. Earn commissions from eligible referred clients, track performance in real time, and access dedicated partner support.",
};

const WHY_ICONS: ComponentType<{ className?: string }>[] = [IconDollar, IconBarChart, IconNewspaper, IconHeadset, IconTarget, IconBell];
const MAT_ICONS: ComponentType<{ className?: string }>[] = [IconMonitor, IconGlobe, IconNewspaper, IconActivity, IconBook, IconSettings];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function AffiliatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.affiliate" });

  const whyPartner = (t.raw("why_partner") as { title: string; desc: string }[]).map((w, i) => ({ Icon: WHY_ICONS[i % WHY_ICONS.length], ...w }));
  const materials  = (t.raw("materials")  as { title: string; desc: string }[]).map((m, i) => ({ Icon: MAT_ICONS[i % MAT_ICONS.length], ...m }));
  const models     = t.raw("commission_models") as { name: string; full: string; best: string; desc: string; points: string[]; featured: boolean }[];
  const steps      = t.raw("steps")  as { n: string; t: string; d: string }[];
  const faqs       = t.raw("faqs")   as { q: string; a: string }[];

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Empresa" : "Company", href: "/company" }, { label: locale === "pt" ? "Parceiro / Afiliado" : "Partner / Affiliate" }]}
        cta={{ label: locale === "pt" ? "Candidatar-se como Parceiro" : "Apply to Become a Partner", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[
          { value: "3",         label: locale === "pt" ? "Modelos de Comissão" : "Commission Models" },
          { value: locale === "pt" ? "Tempo Real" : "Real-Time", label: locale === "pt" ? "Rastreamento" : "Tracking" },
          { value: "24/5",      label: locale === "pt" ? "Suporte ao Parceiro" : "Partner Support" },
        ]}
      />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("why_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{t("why_subtitle")}</p>
          <FeatureGrid features={whyPartner} cols={3} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("commission_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{t("commission_subtitle")}</p>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {models.map((m) => (
              <div key={m.name} className={`rounded-2xl border-2 flex flex-col p-7 ${m.featured ? "bg-[#050C15] border-[#00CC44]/25 shadow-xl" : "bg-[#F5F7FA] border-gray-100"}`}>
                {m.featured && <div className="text-[10px] font-bold text-[#00CC44]/60 uppercase tracking-widest mb-2">{t("commission_recommended")}</div>}
                <div className={`text-2xl font-extrabold mb-1 ${m.featured ? "text-white" : "text-[#111827]"}`}>{m.name}</div>
                <div className={`text-[11px] mb-1 ${m.featured ? "text-[#00CC44]/60" : "text-[#1E88E5]"}`}>{m.full}</div>
                <div className={`text-[11px] mb-4 ${m.featured ? "text-white/25" : "text-gray-400"}`}>{t("commission_best_for")} {m.best}</div>
                <p className={`text-[13px] leading-relaxed mb-5 flex-1 ${m.featured ? "text-white/45" : "text-gray-500"}`}>{m.desc}</p>
                <ul className="space-y-2 mb-5">
                  {m.points.map((p) => (
                    <li key={p} className={`text-[12px] flex items-center gap-2 ${m.featured ? "text-white/40" : "text-gray-500"}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00CC44] flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
                <Link href="mailto:info@ollatrade.com" className={`w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] transition-colors ${m.featured ? "bg-[#00CC44] hover:bg-[#00DD4A] text-black" : "bg-[#111827] hover:bg-[#00CC44] text-white hover:text-black"}`}>
                  {t("commission_enquire")} {m.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-4 text-[12px] text-amber-800 max-w-2xl mx-auto text-center">{t("commission_disclaimer")}</div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10 text-center">{t("how_title")}</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="flex items-start gap-5 bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 rounded-2xl bg-[#111827] text-[#00CC44] font-black text-[15px] flex items-center justify-center flex-shrink-0">{s.n}</div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#111827] mb-1">{s.t}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("materials_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{t("materials_subtitle")}</p>
          <FeatureGrid features={materials} cols={3} />
        </div>
      </section>

      <FAQSection
        title={locale === "pt" ? "Perguntas Frequentes — Afiliados" : "Affiliate Program FAQs"}
        faqs={faqs}
      />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel={t("cta_label_apply")}
        primaryHref="https://direct.ollatrade.com/auth/register"
        secondaryLabel={t("cta_label_contact")}
        secondaryHref="/company/contact"
      />

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F7FA] border border-gray-200 rounded-xl p-5">
            <p className="text-[12px] text-gray-500 leading-relaxed">
              <strong className="text-gray-700">{locale === "pt" ? "Aviso de Conformidade para Afiliados:" : "Affiliate Compliance Notice:"}</strong> {t("compliance_text")} {locale === "pt" ? "Contato:" : "Contact:"} <a href="mailto:info@ollatrade.com" className="text-[#1E88E5] hover:underline">info@ollatrade.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
