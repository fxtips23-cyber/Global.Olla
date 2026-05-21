"use client";
import { useTranslations } from "next-intl";
import { IconShield, IconBolt, IconGlobe, IconHeadset, IconMonitor, IconLock } from "../ui/Icons";

const ICONS = [IconShield, IconBolt, IconGlobe, IconHeadset, IconMonitor, IconLock];
const KEYS = ["portal", "execution", "instruments", "support", "platform", "protection"] as const;

export default function WhyOllaTrade() {
  const t = useTranslations("home.why");

  const stats = [
    { value: t("stats.clients_value"),     label: t("stats.clients_label"),     sub: t("stats.clients_sub") },
    { value: t("stats.instruments_value"), label: t("stats.instruments_label"), sub: t("stats.instruments_sub") },
    { value: t("stats.access_value"),      label: t("stats.access_label"),      sub: t("stats.access_sub") },
    { value: t("stats.accounts_value"),    label: t("stats.accounts_label"),    sub: t("stats.accounts_sub") },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky */}
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">{t("label")}</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-5 leading-tight">
              {t("title")}<br />{t("title2")}
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-10">{t("desc")}</p>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="border border-gray-100 rounded-2xl p-5 bg-[#F5F7FA]">
                  <div className="text-3xl font-extrabold text-[#111827] mb-0.5 leading-none">{s.value}</div>
                  <div className="text-[13px] font-semibold text-[#111827] mt-1">{s.label}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {KEYS.map((key, i) => {
              const Icon = ICONS[i];
              return (
                <div key={key} className="group border border-gray-100 rounded-2xl p-6 bg-[#F5F7FA] hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-5 group-hover:bg-[#00CC44] group-hover:text-black transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-[14px] font-bold text-[#111827] mb-2">{t(`features.${key}_title`)}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{t(`features.${key}_desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
