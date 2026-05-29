import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Expiration & Holidays", description: "Trading schedule, market hours, expiration dates, and public holidays for all instruments at Olla Trade." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ExpirationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "trading_pages.expiration" });
  const sections = t.raw("sections") as { title: string; rows: [string, string][] }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Trading", href: "/trading" }, { label: locale === "pt" ? "Vencimento e Feriados" : "Expiration & Holidays" }]}
      />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{s.title}</h3>
                <div className="space-y-2">
                  {s.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                      <span className="text-gray-400">{k}</span>
                      <span className="text-gray-800 font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0A0D14] rounded-xl p-6 text-white/60 text-sm">
            <strong className="text-white">{t("important_label")}</strong>{" "}{t("important")}
          </div>
        </div>
      </section>
    </>
  );
}
