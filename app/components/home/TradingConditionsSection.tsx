"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconActivity, IconLock, IconBolt, IconShield } from "../ui/Icons";

const SPEC_KEYS = ["spec1","spec2","spec3","spec4","spec5","spec6","spec7","spec8"] as const;
const SPEC_VALUES = ["0.0 pips","1:500","$10","0.01 lots","80%","20%","Market","500+"];
const TRUST_KEYS  = ["trust1","trust2","trust3","trust4"] as const;
const TRUST_ICONS = [IconBolt, IconShield, IconLock, IconActivity];

const COMPARE = [
  { key: "std", dep: "$10",    spread: "1.4 pips", lev: "1:400", featured: false },
  { key: "pro", dep: "$2,000", spread: "1.0 pips", lev: "1:400", featured: true  },
  { key: "eli", dep: "$20,000",spread: "0.0 pips", lev: "1:200", featured: false },
] as const;

export default function TradingConditionsSection() {
  const t = useTranslations("home.conditions");

  return (
    <section className="py-20 lg:py-24 bg-[#050C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("badge")}</div>
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            {t("title")}<br />{t("title2")}
          </h2>
          <p className="text-white/40 leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* Conditions grid */}
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/8">
              {SPEC_KEYS.map((key, i) => (
                <div key={key} className="bg-[#0D1520] px-5 py-5">
                  <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">{t(`${key}_label`)}</div>
                  <div className="text-2xl font-extrabold text-white mb-1">{SPEC_VALUES[i]}</div>
                  <div className="text-[10px] text-[#00CC44]/70">{t(`${key}_note`)}</div>
                </div>
              ))}
            </div>

            {/* Trust pillars */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {TRUST_KEYS.map((key, i) => {
                const Icon = TRUST_ICONS[i];
                return (
                  <div key={key} className="flex items-start gap-3 bg-white/3 border border-white/6 rounded-xl px-4 py-4">
                    <div className="text-white/35 mt-0.5 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white/80 mb-0.5">{t(`${key}_title`)}</div>
                      <div className="text-[12px] text-white/35 leading-relaxed">{t(`${key}_desc`)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Account summary card */}
          <div className="bg-[#0D1520] border border-white/10 rounded-2xl p-6">
            <div className="text-[11px] font-bold text-white/25 uppercase tracking-widest mb-5">{t("compare_title")}</div>
            <div className="space-y-0">
              {COMPARE.map((acc, i) => (
                <div key={acc.key} className={`py-4 ${i > 0 ? "border-t border-white/6" : ""} relative`}>
                  {acc.featured && (
                    <div className="absolute right-0 top-3">
                      <span className="text-[9px] bg-[#00CC44]/20 border border-[#00CC44]/30 text-[#00CC44] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                        {t("popular_badge")}
                      </span>
                    </div>
                  )}
                  <div className={`text-sm font-bold mb-2 ${acc.featured ? "text-white" : "text-white/55"}`}>
                    {t(`${acc.key}_account`)}
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-[11px]">
                    <div>
                      <div className="text-white/25 mb-0.5">{t("dep_label")}</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#00CC44]" : "text-white/60"}`}>{acc.dep}</div>
                    </div>
                    <div>
                      <div className="text-white/25 mb-0.5">{t("spread_label")}</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#00CC44]" : "text-white/60"}`}>{acc.spread}</div>
                    </div>
                    <div>
                      <div className="text-white/25 mb-0.5">{t("lev_label")}</div>
                      <div className={`font-semibold ${acc.featured ? "text-[#00CC44]" : "text-white/60"}`}>{acc.lev}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Link href="https://direct.ollatrade.com/auth/register"
                className="w-full text-center bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold py-3 rounded-lg text-sm transition-colors">
                {t("cta_open")}
              </Link>
              <Link href="/trading/accounts"
                className="w-full text-center text-white/35 hover:text-white/60 text-xs py-2 transition-colors">
                {t("cta_compare")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
