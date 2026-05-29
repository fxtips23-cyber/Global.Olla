import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import {
  IconCreditCard, IconBankTransfer, IconBitcoin, IconCoin, IconWallet, IconDollar, IconEthereum,
} from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Payment Methods",
  description: "View all deposit and withdrawal methods available at Olla Trade including cards, crypto, and wire transfers.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

interface PayItem {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  depKey: string;
  wdKey: string;
}

interface CategoryMeta {
  catIdx: number;
  items: PayItem[];
}

const CATEGORIES: CategoryMeta[] = [
  {
    catIdx: 0,
    items: [
      { Icon: IconCreditCard, name: "Visa",       depKey: "time_instant",   wdKey: "time_card_wd" },
      { Icon: IconCreditCard, name: "Mastercard", depKey: "time_instant",   wdKey: "time_card_wd" },
    ],
  },
  {
    catIdx: 1,
    items: [
      { Icon: IconWallet,  name: "Skrill",        depKey: "time_instant",   wdKey: "time_ewallet_wd" },
      { Icon: IconDollar,  name: "Neteller",      depKey: "time_instant",   wdKey: "time_ewallet_wd" },
      { Icon: IconCoin,    name: "Perfect Money", depKey: "time_instant",   wdKey: "time_ewallet_wd" },
    ],
  },
  {
    catIdx: 2,
    items: [
      { Icon: IconBitcoin,  name: "Bitcoin (BTC)",        depKey: "time_network", wdKey: "time_network" },
      { Icon: IconCoin,     name: "USDT (TRC20 / ERC20)", depKey: "time_network", wdKey: "time_network" },
      { Icon: IconEthereum, name: "Ethereum (ETH)",        depKey: "time_network", wdKey: "time_network" },
    ],
  },
  {
    catIdx: 3,
    items: [
      { Icon: IconBankTransfer, name: "Bank Wire Transfer", depKey: "time_wire_dep", wdKey: "time_wire_wd" },
    ],
  },
];

export default async function PaymentMethodsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "trading_pages.payment_methods" });
  const categories = t.raw("categories") as { cat: string; desc: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Trading", href: "/trading" }, { label: locale === "pt" ? "Métodos de Pagamento" : "Payment Methods" }]}
        stats={[{ value: "8+", label: t("stat_methods_label") }, { value: "0%", label: t("stat_fee_label") }, { value: t("stat_instant_val"), label: t("stat_instant_label") }]}
      />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {CATEGORIES.map(({ catIdx, items }) => {
            const { cat, desc } = categories[catIdx];
            return (
              <div key={catIdx} className="mb-12">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#111827]">{cat}</h2>
                  <p className="text-[13px] text-gray-500 mt-1">{desc}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {items.map(({ Icon, name, depKey, wdKey }) => (
                    <div key={name} className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#29B5D4]/30 hover:shadow-md transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-[13px] font-bold text-[#111827] mb-3">{name}</div>
                      <div className="space-y-1.5 text-[12px] text-gray-500">
                        <div className="flex justify-between py-1 border-b border-gray-50">
                          <span>{t("col_deposit")}</span>
                          <span className="text-gray-700 font-medium text-right max-w-[120px]">{t(depKey as Parameters<typeof t>[0])}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-gray-50">
                          <span>{t("col_withdrawal")}</span>
                          <span className="text-gray-700 font-medium text-right max-w-[120px]">{t(wdKey as Parameters<typeof t>[0])}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>{t("col_fee")}</span>
                          <span className="text-[#29B5D4] font-semibold">{t("fee_val")}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <p className="text-[12px] text-amber-800 leading-relaxed">{t("disclaimer")}</p>
          </div>
        </div>
      </section>

      <CTASection
        title={t("cta_title")}
        primaryLabel={t("cta_primary")}
        primaryHref="https://portal.ollatrade.com/auth/login"
        secondaryLabel={t("cta_secondary")}
        secondaryHref="https://portal.ollatrade.com/auth/register"
      />
    </>
  );
}
