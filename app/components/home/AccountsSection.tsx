"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconCheck } from "../ui/Icons";

const ACCOUNT_KEYS = ["std", "pro", "eli"] as const;
const DEPOSITS  = ["$10", "$2,000", "$20,000"];
const SPREADS   = ["1.4 pips", "1.0 pips", "0.0 pips"];
const LEVERAGES = ["1:400", "1:400", "1:200"];
const COMMISSIONS = ["None", "None", "$3.5/lot per side"];
const FEAT_COUNT = 6;
const HREF = "https://direct.ollatrade.com/auth/register";

const COMPARE_ACCOUNTS = [
  { key: "std", dep: "$10",    spread: "1.4 pips", lev: "1:400" },
  { key: "pro", dep: "$2,000", spread: "1.0 pips", lev: "1:400", featured: true },
  { key: "eli", dep: "$20,000",spread: "0.0 pips", lev: "1:200" },
] as const;

export default function AccountsSection() {
  const t = useTranslations("home.accounts");

  const accounts = ACCOUNT_KEYS.map((k, i) => ({
    key: k,
    name:       t(`${k}_name`),
    badge:      t(`${k}_badge`),
    cta:        t(`${k}_cta`),
    featured:   k === "pro",
    deposit:    DEPOSITS[i],
    spread:     SPREADS[i],
    leverage:   LEVERAGES[i],
    commission: COMMISSIONS[i],
    features:   Array.from({ length: FEAT_COUNT }, (_, j) => t(`${k}_feat${j + 1}`)),
  }));

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("badge")}</div>
            <h2 className="text-4xl font-extrabold text-[#111827]">{t("title")}</h2>
            <p className="text-gray-500 mt-3 max-w-lg">{t("subtitle")}</p>
          </div>
          <Link href="/trading/accounts" className="text-sm font-semibold text-[#111827] hover:text-[#00CC44] transition-colors flex items-center gap-1 flex-shrink-0">
            {t("compareAll")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {accounts.map((acc) => (
            <div key={acc.key}
              className={`relative rounded-2xl border flex flex-col ${acc.featured
                ? "bg-[#081018] border-white/12 shadow-2xl shadow-black/40"
                : "bg-white border-gray-100"
              }`}
            >
              {acc.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00CC44] text-black text-[11px] font-bold px-5 py-1.5 rounded-full tracking-wide">{t("popular")}</span>
                </div>
              )}

              <div className="p-7 flex-1">
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${acc.featured ? "text-white/30" : "text-gray-400"}`}>
                  {acc.badge}
                </div>
                <h3 className={`text-2xl font-extrabold mb-1 ${acc.featured ? "text-white" : "text-[#111827]"}`}>{acc.name}</h3>
                <div className={`text-5xl font-black leading-none mb-1 tracking-tight ${acc.featured ? "text-[#00CC44]" : "text-[#111827]"}`}>{acc.deposit}</div>
                <div className={`text-[11px] mb-7 ${acc.featured ? "text-white/25" : "text-gray-400"}`}>{t("minDeposit")}</div>

                <div className={`space-y-0 border-t mb-6 ${acc.featured ? "border-white/10" : "border-gray-100"}`}>
                  {[
                    [t("spread"),     acc.spread],
                    [t("leverage"),   acc.leverage],
                    [t("commission"), acc.commission],
                  ].map(([k, v]) => (
                    <div key={k} className={`flex justify-between py-3 border-b text-sm ${acc.featured ? "border-white/8" : "border-gray-50"}`}>
                      <span className={acc.featured ? "text-white/30" : "text-gray-400"}>{k}</span>
                      <span className={`font-semibold ${acc.featured ? "text-white" : "text-[#111827]"}`}>{v}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2">
                  {acc.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-[13px] ${acc.featured ? "text-white/40" : "text-gray-500"}`}>
                      <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-[#00CC44]">
                        <IconCheck className="w-3 h-3" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-7">
                <Link href={HREF}
                  className={`w-full flex items-center justify-center font-bold py-3.5 rounded-xl text-sm transition-all ${acc.featured
                    ? "bg-[#00CC44] hover:bg-[#00DD4A] text-black"
                    : "bg-[#111827] hover:bg-[#1a2540] text-white"
                  }`}
                >
                  {acc.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          {t("risk_text")}{" "}
          <Link href="/legal/risk-disclosures" className="underline hover:text-gray-600">{t("risk_link")}</Link>{" "}
          {t("risk_text2")}
        </p>
      </div>
    </section>
  );
}
