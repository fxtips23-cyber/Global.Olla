import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import { IconBook, IconShieldCheck, IconInfo, IconLock, IconArrowRight, IconSettings, IconBell, IconDatabase } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = { title: "Legal Documents", description: "Access all Olla Trade legal documents including Terms & Conditions, Privacy Policy, Risk Disclosures, and more." };

const DOC_ICONS: ComponentType<{ className?: string }>[] = [
  IconBook, IconShieldCheck, IconInfo, IconDatabase, IconArrowRight, IconSettings, IconLock, IconBell,
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.legal" });
  const docs = t.raw("docs") as { title: string; desc: string; href: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("company_crumb"), href: "/company" }, { label: t("title") }]}
      />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {docs.map(({ title, desc, href }, i) => {
              const Icon = DOC_ICONS[i % DOC_ICONS.length];
              return (
                <Link key={href} href={href}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-400 flex items-center justify-center flex-shrink-0 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[13px] font-bold text-[#111827] mb-1 group-hover:text-[#00AA38] transition-colors">{title}</h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#00CC44] mt-1 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
