import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Company", description: "Learn about Olla Trade — our mission, promotions, affiliate program, and how to contact us." };

const ICONS = ["🏢","🤝","🎁","📞","❓","📝","📃"] as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.hub" });
  const links = t.raw("links") as { title: string; sub: string; href: string }[];

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")} breadcrumbs={[{ label: t("badge") }]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {links.map((l, i) => (
              <Link key={l.href} href={l.href} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#00CC44]/30 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="text-3xl mb-4">{ICONS[i % ICONS.length]}</div>
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#00AA38] transition-colors">{l.title}</h3>
                <p className="text-xs text-gray-400">{l.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
