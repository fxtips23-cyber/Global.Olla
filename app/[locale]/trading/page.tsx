import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import { IconMonitor, IconScale, IconActivity, IconCreditCard, IconDatabase, IconDollar, IconCalendar } from "../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Trading",
  description: "Everything you need to trade with Olla Trade — platform, accounts, conditions, deposits, and more.",
};

const LINK_ICONS: ComponentType<{ className?: string }>[] = [
  IconMonitor, IconScale, IconActivity, IconCreditCard, IconDatabase, IconDollar, IconCalendar, IconActivity,
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function TradingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "trading_pages.hub" });
  const links = t.raw("links") as { title: string; sub: string; href: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("badge") }]}
      />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {links.map(({ title, sub, href }, i) => {
              const Icon = LINK_ICONS[i % LINK_ICONS.length];
              return (
                <Link key={href} href={href}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00CC44]/25 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#111827] mb-1 group-hover:text-[#00AA38] transition-colors">{title}</h3>
                  <p className="text-[12px] text-gray-400">{sub}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
