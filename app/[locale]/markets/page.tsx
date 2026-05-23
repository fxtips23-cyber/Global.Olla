import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Markets", description: "Trade 500+ instruments across Forex, Metals, Indices, Energies, Crypto and Stocks with Olla Trade." };

const MARKET_META = [
  { icon: "💱", href: "/markets/forex" },
  { icon: "🥇", href: "/markets/metals" },
  { icon: "📈", href: "/markets/indices" },
  { icon: "⚡", href: "/markets/energies" },
  { icon: "₿",  href: "/markets/crypto" },
  { icon: "🏢", href: "/markets/stocks" },
];

const INSTRUMENTS = [
  "EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD and 65+ more",
  "Gold (XAUUSD), Silver (XAGUSD)",
  "US30, NASDAQ, S&P 500, DAX 40, FTSE 100",
  "Brent Crude Oil, WTI Crude Oil, Natural Gas",
  "Bitcoin, Ethereum, Litecoin, Ripple",
  "Apple, Tesla, Amazon, Google, Microsoft & more",
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function MarketsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "markets.hub" });
  const markets = t.raw("markets") as { label: string; sub: string; pip: string; leverage: string }[];
  const explorePrefix = t("explore_prefix");

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")} breadcrumbs={[{ label: locale === "pt" ? "Mercados" : "Markets" }]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((m, i) => {
              const meta = MARKET_META[i];
              return (
                <Link key={meta.href} href={meta.href} className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#00CC44]/30 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className="text-4xl mb-4">{meta.icon}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#00AA38] transition-colors">{m.label}</h2>
                  <p className="text-sm text-gray-400 mb-4">{m.sub}</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">{INSTRUMENTS[i]}</p>
                  <div className="flex gap-3 flex-wrap text-xs mb-5">
                    <span className="bg-[#00CC44]/8 text-[#00AA38] px-2.5 py-1 rounded-full font-medium">{m.pip}</span>
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{m.leverage}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#00CC44] group-hover:text-[#00DD4A] transition-colors">{explorePrefix} {m.label} →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection title={t("cta_title")} subtitle={t("cta_subtitle")} />
    </>
  );
}
