import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import SessionClock from "../../components/widgets/SessionClock";
import MarketStatus from "../../components/widgets/MarketStatus";
import SpreadTable from "../../components/widgets/SpreadTable";
import { IconCalendar, IconCalculator, IconBell, IconServer, IconBook, IconNewspaper, IconActivity } from "../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Trading Tools",
  description: "Free professional trading tools from Olla Trade — economic calendar, forex calculator, trading alerts, VPS guide, and education.",
};

const TOOL_ICONS: ComponentType<{ className?: string }>[] = [
  IconCalendar, IconCalculator, IconBell, IconServer, IconBook, IconActivity, IconNewspaper,
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ToolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.hub" });
  const tools = t.raw("tools") as { title: string; sub: string; href: string }[];
  const quickLinks = t.raw("quick_links") as { label: string; href: string; desc: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Ferramentas" : "Tools" }]}
      />

      {/* ── Live Market Widgets ────────────────────────────────────── */}
      <section className="py-12 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-6 text-center">{t("live_data_label")}</div>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-1">
              <MarketStatus />
            </div>
            <div className="lg:col-span-1">
              <SessionClock />
            </div>
            <div className="lg:col-span-1">
              <div className="bg-[#050C15] border border-white/8 rounded-2xl p-5 h-full flex flex-col">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">{t("quick_links_label")}</div>
                <div className="space-y-2 flex-1">
                  {quickLinks.map(({ label, href, desc }) => (
                    <Link key={href} href={href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#29B5D4] flex-shrink-0 mt-1.5" />
                      <div>
                        <div className="text-[12px] font-semibold text-white/65 group-hover:text-white transition-colors">{label}</div>
                        <div className="text-[10px] text-white/25">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <p className="text-[9px] text-white/15 mt-3 leading-relaxed">{t("market_data_note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Indicative Spreads ────────────────────────────────────── */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-3 text-center">{t("spreads_label")}</div>
          <h2 className="text-2xl font-extrabold text-[#111827] mb-6 text-center">{t("spreads_title")}</h2>
          <SpreadTable />
        </div>
      </section>

      {/* ── Tool cards ────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4 text-center">{t("all_tools_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10 text-center">{t("all_tools_title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map(({ title, sub, href }, i) => {
              const Icon = TOOL_ICONS[i % TOOL_ICONS.length];
              return (
                <Link key={href} href={href}
                  className="group bg-[#F5F7FA] border border-gray-100 rounded-2xl p-6 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-white text-gray-400 flex items-center justify-center mb-5 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="text-[14px] font-bold text-[#111827] mb-2 group-hover:text-[#29B5D4] transition-colors">{title}</h2>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{sub}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
