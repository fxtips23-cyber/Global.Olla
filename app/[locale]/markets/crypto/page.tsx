import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import { cryptoFaqs } from "../../../data/faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Cryptocurrency CFD Trading — Bitcoin, Ethereum & More",
  description: "Trade Bitcoin, Ethereum, Litecoin, and Ripple as CFDs with Olla Trade. No wallet required — speculate on crypto prices directly from MT4.",
};

const conditions = [
  { Symbol: "BTC/USD", Cryptocurrency: "Bitcoin",  "Spread From": "50 points", Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
  { Symbol: "ETH/USD", Cryptocurrency: "Ethereum", "Spread From": "10 points", Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
  { Symbol: "LTC/USD", Cryptocurrency: "Litecoin", "Spread From": "5 points",  Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
  { Symbol: "XRP/USD", Cryptocurrency: "Ripple",   "Spread From": "1 point",   Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
];

const cryptos = [
  {
    sym: "BTC/USD", name: "Bitcoin", color: "#F59E0B",
    marketCap: "Largest by market cap",
    desc: "Bitcoin is the world's first and most recognised cryptocurrency. Created in 2009, it operates on a deflationary model with a capped supply of 21 million coins. Bitcoin's price is driven by institutional adoption, halving cycles (supply reduction events occurring every ~4 years), macroeconomic sentiment, and regulatory developments.",
    keyDrivers: ["Bitcoin halving cycles", "Institutional adoption (ETFs, corporate treasuries)", "Macro risk-on/off sentiment", "Regulatory news and exchange activity"],
  },
  {
    sym: "ETH/USD", name: "Ethereum", color: "#6366F1",
    marketCap: "2nd largest by market cap",
    desc: "Ethereum is the leading smart contract platform, enabling decentralised applications (dApps), DeFi protocols, and NFT infrastructure. ETH's price is influenced by network activity, developer adoption, protocol upgrades, and its transition from proof-of-work to proof-of-stake (\"The Merge\").",
    keyDrivers: ["DeFi and dApp activity", "Network upgrades and protocol changes", "ETH staking and supply dynamics", "Layer 2 adoption"],
  },
  {
    sym: "LTC/USD", name: "Litecoin", color: "#9CA3AF",
    marketCap: "Mid-tier by market cap",
    desc: "Litecoin was one of the first alternative cryptocurrencies to Bitcoin. It offers faster transaction processing (2.5 min blocks vs Bitcoin's 10 min) and uses a different hashing algorithm. It often follows Bitcoin's price trajectory with higher volatility characteristics.",
    keyDrivers: ["Bitcoin price direction", "Transaction speed and fee competition", "Network adoption and payment use cases", "Market sentiment cycles"],
  },
  {
    sym: "XRP/USD", name: "Ripple", color: "#00BFA5",
    marketCap: "Top 10 by market cap",
    desc: "XRP is designed for fast, low-cost international payments and settlement between financial institutions. Its price has historically been heavily influenced by regulatory developments — particularly Ripple Labs' legal proceedings — as well as institutional adoption of the XRP Ledger for cross-border payment rails.",
    keyDrivers: ["Regulatory developments (SEC litigation history)", "Institutional payment network adoption", "Cross-border remittance trends", "Partnership announcements with banks/fintechs"],
  },
];

const cryptoRisks = [
  { label: "Extreme Volatility",       desc: "Crypto prices can move 10–30% in a single day. Position sizing and stop-loss orders are critical risk management tools." },
  { label: "24/7 Underlying Market",   desc: "While Olla Trade crypto CFDs trade Mon–Fri, the underlying crypto markets trade 24/7. Significant weekend price gaps may occur when markets reopen Monday." },
  { label: "Regulatory Uncertainty",   desc: "Cryptocurrency regulation varies significantly by jurisdiction and continues to evolve. Regulatory announcements can trigger sharp price movements." },
  { label: "Liquidity Variation",      desc: "Crypto liquidity can vary significantly between altcoins. During market stress, spreads may widen substantially even on major pairs." },
  { label: "No Physical Ownership",    desc: "Crypto CFDs do not involve ownership of actual cryptocurrency. You cannot transfer, store, or use crypto CFD positions as real coins." },
  { label: "Leverage Amplification",   desc: "Even conservative 1:10 leverage on a volatile 15% crypto move can result in a 150% loss on margin. Only risk capital you can afford to lose entirely." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function CryptoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "markets.crypto" });
  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Crypto" }]}
        cta={{ label: "Start Trading Crypto", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[{ value: "4+", label: "Crypto CFDs" }, { value: "1:10", label: "Max Leverage" }, { value: "No wallet", label: "Required" }]}
      />

      {/* ── High-risk warning — always first for crypto ───────────── */}
      <section className="py-8 bg-white border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-red-200 bg-red-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-red-800 mb-2">High Risk Warning — Cryptocurrency CFDs</div>
            <p className="text-[12px] text-red-700 leading-relaxed">Cryptocurrency CFD trading carries a significantly higher risk than most other financial instruments. Prices can move 10–30% or more within a single trading session. It is possible to lose your entire deposited capital. Crypto CFDs are not suitable for inexperienced traders or those who cannot afford the total loss of funds used for trading. Only trade with capital you can fully afford to lose.</p>
          </div>
        </div>
      </section>

      {/* ── CFD vs Physical Crypto ───────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">How It Works</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">What Are Cryptocurrency CFDs?</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Speculate on crypto price movements without owning the underlying coins. No exchange account, no wallet, no private keys — just a position on MT4.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm mb-10">
            <table className="w-full text-sm min-w-[480px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Feature</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#00CC44" }}>Crypto CFD (Olla Trade)</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">Physical Crypto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Coin Ownership",        "No — price speculation only",           "Yes — you own coins"],
                  ["Wallet Required",       "Not required",                          "Required (hot or cold wallet)"],
                  ["Short Selling",         "Supported — profit from falling prices","Complex / exchange-dependent"],
                  ["Leverage",              "Up to 1:10",                            "Typically not available"],
                  ["Security Risk",         "No wallet hack risk",                   "Private key / exchange hack risk"],
                  ["Platform",              "MetaTrader 4",                          "Crypto exchange (Binance, Coinbase)"],
                  ["Regulatory Framework",  "Execution-only CFD provider",           "Varies by exchange / jurisdiction"],
                  ["Tax Treatment",         "CFD regulations apply",                 "Cryptocurrency tax rules apply"],
                ].map(([f, cfd, phys]) => (
                  <tr key={f} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3.5 font-semibold text-[#111827] text-[13px]">{f}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] font-medium" style={{ color: "#00AA38" }}>{cfd}</td>
                    <td className="px-5 py-3.5 text-center text-[13px] text-gray-500">{phys}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Individual crypto deep-dive ───────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Available Instruments</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">Cryptocurrency CFD Details</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Each cryptocurrency has distinct characteristics, use cases, and price drivers. Understanding what moves each asset helps with strategy selection.</p>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {cryptos.map((c) => (
              <div key={c.sym} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[20px] font-extrabold text-[#111827]">{c.sym}</div>
                    <div className="text-[12px] text-gray-400 mt-0.5">{c.name}</div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}40` }}>
                    {c.marketCap}
                  </span>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{c.desc}</p>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Key Price Drivers</div>
                <div className="space-y-1">
                  {c.keyDrivers.map((d) => (
                    <div key={d} className="flex items-start gap-2 text-[12px] text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: c.color }} />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <TradingConditionsTable title="Cryptocurrency CFD Conditions" headers={["Symbol","Cryptocurrency","Spread From","Leverage","Min Size","Market Hours"]} rows={conditions} highlightCol={3} />
          <p className="text-[11px] text-gray-400 text-center mt-3">Crypto markets are highly volatile. Spreads may widen significantly during low-liquidity or high-volatility periods. Crypto CFDs trade Mon–Fri only. Weekend price gaps may occur.</p>
        </div>
      </section>

      {/* ── Crypto-specific risks — dark ─────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-red-400 uppercase tracking-widest mb-4">Risk Awareness</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Cryptocurrency-Specific Risks</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Crypto CFDs carry risks beyond standard CFD trading. Understanding these risks before trading is essential.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cryptoRisks.map(({ label, desc }) => (
              <div key={label} className="bg-white/4 border border-red-500/15 rounded-2xl p-5 hover:border-red-500/25 transition-all">
                <div className="w-2 h-2 rounded-full bg-red-400 mb-3" />
                <h4 className="text-[13px] font-bold text-white mb-2">{label}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-red-500/8 border border-red-500/20 rounded-2xl p-5 text-center">
            <p className="text-[13px] text-red-300/80 leading-relaxed">
              Cryptocurrency CFD trading is not suitable for all investors. Only trade with capital you can afford to lose in full. Read our <Link href="/legal/risk-disclosures" className="text-red-300 font-semibold hover:underline">Risk Disclosures</Link> before trading.
            </p>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} faqs={cryptoFaqs} />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel="Open Account"
        secondaryLabel="View All Markets"
        secondaryHref="/markets"
      />
    </>
  );
}
