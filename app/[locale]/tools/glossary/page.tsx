import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Forex Glossary", description: "Learn key Forex and trading terms with the Olla Trade Forex Glossary. From A to Z definitions for every trader." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function GlossaryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.glossary" });
  const terms = t.raw("terms") as { term: string; def: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Ferramentas" : "Tools", href: "/tools" }, { label: t("title") }]}
      />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {terms.map((item) => (
              <div key={item.term} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-[#29B5D4]/30 transition-colors">
                <div className="text-sm font-bold text-[#29B5D4] mb-1">{item.term}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{item.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
