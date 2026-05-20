import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import { IconMonitor, IconScale, IconActivity, IconCreditCard, IconDatabase, IconDollar, IconCalendar } from "../components/ui/Icons";

export const metadata: Metadata = {
  title: "Trading",
  description: "Everything you need to trade with Olla Trade — platform, accounts, conditions, deposits, and more.",
};

const links = [
  { Icon: IconMonitor,  title: "Platform (MT4)",         sub: "MetaTrader 4 on all devices",   href: "/trading/platform" },
  { Icon: IconScale,    title: "Compare Accounts",        sub: "Standard, Pro, and Elite",       href: "/trading/accounts" },
  { Icon: IconActivity, title: "Trading Conditions",      sub: "Spreads, leverage & margin",     href: "/trading/conditions" },
  { Icon: IconCreditCard,title:"Deposit",                 sub: "Fund your account",              href: "/trading/deposit" },
  { Icon: IconDatabase,  title:"Withdrawal",              sub: "Fast and secure",                href: "/trading/withdrawal" },
  { Icon: IconDollar,    title:"Payment Methods",         sub: "Cards, crypto, wire",            href: "/trading/payment-methods" },
  { Icon: IconCalendar,  title:"Expiration & Holidays",   sub: "Trading schedule",               href: "/trading/expiration" },
  { Icon: IconActivity,  title:"Execution Information",   sub: "Order execution policy",         href: "/execution-information" },
];

export default function TradingPage() {
  return (
    <>
      <PageHero
        badge="Trading"
        title="Trading with Olla Trade"
        subtitle="Professional trading conditions, multiple account types, and the power of MetaTrader 4."
        breadcrumbs={[{ label: "Trading" }]}
      />
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {links.map(({ Icon, title, sub, href }) => (
              <Link key={title} href={href}
                className="group bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6 hover:border-[#00CC44]/25 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] dark:group-hover:text-[#E5E7EB] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1 group-hover:text-[#00AA38] dark:group-hover:text-[#00CC44] transition-colors">{title}</h3>
                <p className="text-[12px] text-gray-400 dark:text-[#6B7280]">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
