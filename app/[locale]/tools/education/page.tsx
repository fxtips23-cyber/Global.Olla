import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import { IconCheck } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Trading Education", description: "Learn to trade Forex and CFDs with Olla Trade's structured education — Basic, Advanced, and Professional levels." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function EducationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.education" });
  const levels = t.raw("levels") as { badge: string; title: string; topics: string[] }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Ferramentas" : "Tools", href: "/tools" }, { label: t("title") }]}
      />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {levels.map((l) => (
              <div key={l.title} className="bg-white rounded-2xl border border-gray-100 p-7">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{l.badge}</div>
                <h2 className="text-2xl font-extrabold text-[#111827] mb-5">{l.title}</h2>
                <ul className="space-y-2.5">
                  {l.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                      <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-[#00CC44] mt-0.5">
                        <IconCheck className="w-3 h-3" />
                      </div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-[13px] text-gray-500 mb-4">{t("disclaimer")}</p>
            <Link href="/tools/glossary" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">
              {t("glossary_link")}
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel={t("cta_primary")}
        secondaryLabel={t("cta_secondary")}
        secondaryHref="/tools/glossary"
      />
    </>
  );
}
