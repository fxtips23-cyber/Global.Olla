import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { SITE } from "../../../lib/constants";
import { IconTarget, IconShieldCheck, IconLock, IconBook, IconGlobe, IconUsers } from "../../../components/ui/Icons";
import GlobalMarketsVisual from "../../../components/visuals/GlobalMarketsVisual";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = { title: "About Us", description: "Learn about Olla Trade — our mission, vision, platform, and commitment to providing professional online trading services worldwide." };

const VALUE_ICONS: ComponentType<{ className?: string }>[] = [IconTarget, IconShieldCheck, IconLock, IconBook, IconGlobe, IconUsers];
const OFFER_ICONS: ComponentType<{ className?: string }>[] = [IconGlobe, IconLock, IconShieldCheck, IconTarget, IconBook, IconUsers];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.about" });

  const offerings = (t.raw("offerings") as { title: string; desc: string }[]).map((o, i) => ({
    Icon: OFFER_ICONS[i % OFFER_ICONS.length], ...o,
  }));
  const values = (t.raw("values") as { title: string; desc: string }[]).map((v, i) => ({
    Icon: VALUE_ICONS[i % VALUE_ICONS.length], ...v,
  }));

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Empresa" : "Company", href: "/company" }, { label: locale === "pt" ? "Sobre Nós" : "About Us" }]} />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">{t("who_title")}</h2>
              <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
                <p>{t("who_p1")}</p>
                <p>{t("who_p2")}</p>
                <p>{t("who_p3")}</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: t("vision_title"),     body: t("vision_body") },
                { title: t("mission_title"),    body: t("mission_body") },
                { title: t("commitment_title"), body: t("commitment_body") },
              ].map((v) => (
                <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="text-[14px] font-bold text-[#111827] mb-2">{v.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#050C15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("global_label")}</div>
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">{t("global_title")}</h2>
          <GlobalMarketsVisual />
          <p className="text-[11px] text-white/25 text-center mt-4 leading-relaxed">{t("global_note")}</p>
        </div>
      </section>

      <section className="py-14 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[[SITE.activeClients, t("stat_clients")],[SITE.instruments, t("stat_instruments")],["24/5", t("stat_support")],[SITE.minDeposit, t("stat_deposit")]].map(([v,l])=>(
              <div key={String(l)}><div className="text-4xl font-black text-[#00CC44] mb-2">{v}</div><div className="text-[12px] text-white/35">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("offer_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{t("offer_subtitle")}</p>
          <FeatureGrid features={offerings} cols={3} />
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">{t("values_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{t("values_subtitle")}</p>
          <FeatureGrid features={values} cols={3} />
        </div>
      </section>

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F7FA] rounded-2xl border border-gray-100 p-6">
            <h3 className="text-[14px] font-bold text-[#111827] mb-3">{t("legal_title")}</h3>
            <div className="space-y-2 text-[13px] text-gray-600 leading-relaxed">
              <p><strong className="text-[#111827]">{locale === "pt" ? "Empresa:" : "Company:"}</strong> {t("legal_company")}</p>
              <p><strong className="text-[#111827]">{locale === "pt" ? "Endereço Registrado:" : "Registered Address:"}</strong> {t("legal_address")}</p>
              <p><strong className="text-[#111827]">{locale === "pt" ? "Execução Exclusiva:" : "Execution Only:"}</strong> {t("legal_execution")}</p>
              <p><strong className="text-[#111827]">{locale === "pt" ? "Países Restritos:" : "Restricted Countries:"}</strong> {t("legal_restricted")}</p>
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <Link href="/legal/terms" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">{locale === "pt" ? "Termos e Condições" : "Terms & Conditions"}</Link>
              <Link href="/legal/risk-disclosures" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">{locale === "pt" ? "Divulgações de Risco" : "Risk Disclosures"}</Link>
              <Link href="/legal/privacy" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">{locale === "pt" ? "Política de Privacidade" : "Privacy Policy"}</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={t("cta_title")} subtitle={t("cta_subtitle")} primaryLabel={t("cta_label_open")} secondaryLabel={t("cta_label_contact")} secondaryHref="/company/contact" />
    </>
  );
}
