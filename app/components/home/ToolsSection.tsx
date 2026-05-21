"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconCalendar, IconCalculator, IconBell, IconServer, IconBook, IconNewspaper } from "../ui/Icons";

const TOOL_KEYS = ["calendar", "calculator", "alerts", "vps", "glossary", "news"] as const;
const ICONS = [IconCalendar, IconCalculator, IconBell, IconServer, IconBook, IconNewspaper];
const HREFS = [
  "/tools/economic-calendar",
  "/tools/forex-calculator",
  "/tools/alerts",
  "/tools/vps",
  "/tools/glossary",
  "/tools/news",
];

export default function ToolsSection() {
  const t = useTranslations("home.tools");

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("label")}</div>
            <h2 className="text-4xl font-extrabold text-[#111827]">{t("title")}</h2>
            <p className="text-gray-500 mt-3 max-w-lg">{t("desc")}</p>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-[#111827] hover:text-[#00CC44] transition-colors flex items-center gap-1 flex-shrink-0">
            {t("viewAll")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOL_KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <Link key={key} href={HREFS[i]}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-400 flex items-center justify-center group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#00CC44] transition-colors mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#111827] mb-2 group-hover:text-[#00AA38] transition-colors">
                  {t(`${key}_title`)}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`${key}_desc`)}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
