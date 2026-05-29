import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import {
  IconCreditCard, IconBankTransfer, IconBitcoin, IconCoin, IconWallet,
  IconDollar, IconEthereum, IconBolt, IconShield, IconCheck, IconLock,
} from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Deposit",
  description: "Fund your Olla Trade account with multiple payment methods. Fast, secure deposits with no fees.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

const GUARANTEE_ICONS: ComponentType<{ className?: string }>[] = [IconBolt, IconShield, IconCheck, IconLock];

interface MethodMeta {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  timeKey: "time_instant" | "time_network" | "time_wire";
  min: string;
}

const METHOD_META: MethodMeta[] = [
  { Icon: IconCreditCard,   name: "Visa / Mastercard",    timeKey: "time_instant",  min: "$10"  },
  { Icon: IconBankTransfer, name: "Bank Wire Transfer",   timeKey: "time_wire",     min: "$100" },
  { Icon: IconBitcoin,      name: "Bitcoin (BTC)",        timeKey: "time_network",  min: "$50"  },
  { Icon: IconCoin,         name: "USDT (TRC20 / ERC20)", timeKey: "time_network",  min: "$50"  },
  { Icon: IconWallet,       name: "Skrill",               timeKey: "time_instant",  min: "$10"  },
  { Icon: IconDollar,       name: "Neteller",             timeKey: "time_instant",  min: "$10"  },
  { Icon: IconCoin,         name: "Perfect Money",        timeKey: "time_instant",  min: "$10"  },
  { Icon: IconEthereum,     name: "Ethereum (ETH)",       timeKey: "time_network",  min: "$50"  },
];

export default async function DepositPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "trading_pages.deposit" });
  const guarantees = t.raw("guarantees") as string[];
  const steps = t.raw("steps") as string[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Trading" : "Trading", href: "/trading" }, { label: locale === "pt" ? "Depósito" : "Deposit" }]}
        cta={{ label: t("cta_login"), href: "https://portal.ollatrade.com/auth/login" }}
        stats={[{ value: "$10", label: t("stat_min_label") }, { value: "0%", label: t("stat_fee_label") }, { value: t("stat_card_val"), label: t("stat_card_label") }]}
      />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Guarantee strip */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {guarantees.map((label, i) => {
              const Icon = GUARANTEE_ICONS[i % GUARANTEE_ICONS.length];
              return (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5">
                  <div className="w-8 h-8 rounded-lg border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[12px] text-gray-600 leading-snug">{label}</span>
                </div>
              );
            })}
          </div>

          {/* Payment method cards */}
          <h2 className="text-2xl font-bold text-[#111827] mb-6">{t("methods_title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {METHOD_META.map(({ Icon, name, timeKey, min }) => (
              <div key={name} className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#29B5D4]/30 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[13px] font-bold text-[#111827] mb-3">{name}</div>
                <div className="space-y-1.5 text-[12px] text-gray-500">
                  <div className="flex justify-between">
                    <span>{t("col_processing")}</span>
                    <span className="text-gray-700 font-medium">{t(timeKey)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("col_fee")}</span>
                    <span className="text-[#29B5D4] font-semibold">{t("fee_val")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("col_min")}</span>
                    <span className="text-gray-700 font-medium">{min}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How to deposit */}
          <div className="bg-[#111827] rounded-2xl p-7 text-white">
            <h3 className="text-base font-bold mb-4">{t("how_title")}</h3>
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] text-white/60">
                  <span className="w-5 h-5 rounded-full bg-[#29B5D4] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-[11px] text-white/30">{t("disclaimer")}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t("cta_title")}
        primaryLabel={t("cta_login2")}
        primaryHref="https://portal.ollatrade.com/auth/login"
        secondaryLabel={t("cta_open")}
        secondaryHref="https://portal.ollatrade.com/auth/register"
      />
    </>
  );
}
