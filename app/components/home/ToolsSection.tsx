"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IconCalendar, IconCalculator, IconBell, IconServer, IconBook, IconNewspaper } from "../ui/Icons";

const TOOLS = [
  { key: "calendar",   Icon: IconCalendar,   href: "/tools/economic-calendar" },
  { key: "calculator", Icon: IconCalculator, href: "/tools/forex-calculator" },
  { key: "alerts",     Icon: IconBell,       href: "/tools/alerts" },
  { key: "vps",        Icon: IconServer,     href: "/tools/vps" },
  { key: "glossary",   Icon: IconBook,       href: "/tools/glossary" },
  { key: "news",       Icon: IconNewspaper,  href: "/tools/news" },
] as const;

export default function ToolsSection() {
  const t = useTranslations("home.tools");

  return (
    <section className="py-24 lg:py-32 relative" style={{ background: "#08111F" }}>

      <div className="max-w-[1380px] mx-auto px-5 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full"
              style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
              <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">{t("label")}</span>
            </div>
            <h2 className="font-bold text-white leading-tight mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
              {t("title")}
            </h2>
            <p className="text-[15px] leading-relaxed max-w-lg" style={{ color: "#8B9DB0" }}>{t("desc")}</p>
          </div>
          <Link href="/tools"
            className="flex-shrink-0 flex items-center gap-2 text-[13px] font-semibold transition-colors group"
            style={{ color: "#5A6A7A" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#38BDF8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#5A6A7A"; }}>
            {t("viewAll")}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Tool cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map(({ key, Icon, href }) => (
            <Link key={key} href={href}
              className="group flex flex-col p-6 rounded-2xl transition-all duration-300 card-hover"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>

              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.20)", color: "#38BDF8" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <svg className="w-4 h-4 mt-1 transition-all duration-300 group-hover:translate-x-0.5"
                  style={{ color: "#5A6A7A" }}
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </div>

              <h3 className="text-[14px] font-semibold mb-2 transition-colors group-hover:text-[#38BDF8]"
                style={{ color: "rgba(255,255,255,0.85)" }}>
                {t(`${key}_title`)}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "#5A6A7A" }}>
                {t(`${key}_desc`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
