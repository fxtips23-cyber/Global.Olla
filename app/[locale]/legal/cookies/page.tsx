import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Cookies Policy", description: "Learn how Olla Trade uses cookies on its website and how you can manage your cookie preferences." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.cookies" });
  const types = t.raw("types") as { name: string; desc: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Legal" }, { label: t("title") }]}
      />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">{t("what_title")}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t("what_body")}</p>
            </div>
            {types.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">{t("managing_title")}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t("managing_body")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
