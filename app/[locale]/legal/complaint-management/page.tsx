import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Complaint Management", description: "Olla Trade formal complaint management policy and procedures for client disputes." };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ComplaintManagementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.complaint_management" });
  const sections = t.raw("sections") as { title: string; body: string }[];

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
            {sections.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
