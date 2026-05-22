import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import TradingConditionsTable from "../../../components/ui/TradingConditionsTable";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Cryptocurrency CFD Trading — Bitcoin, Ethereum & More",
  description: "Trade Bitcoin, Ethereum, Litecoin, and Ripple as CFDs with Olla Trade. No wallet required — speculate on crypto prices directly from MT4.",
};

const conditions = [
  { Symbol: "BTC/USD", Cryptocurrency: "Bitcoin",  "Spread From": "50 pts", Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
  { Symbol: "ETH/USD", Cryptocurrency: "Ethereum", "Spread From": "10 pts", Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
  { Symbol: "LTC/USD", Cryptocurrency: "Litecoin", "Spread From": "5 pts",  Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
  { Symbol: "XRP/USD", Cryptocurrency: "Ripple",   "Spread From": "1 pt",   Leverage: "1:10", "Min Size": "0.01 lots", "Market Hours": "Mon–Fri" },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function CryptoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "markets.crypto" });
  const pc = await getTranslations({ locale, namespace: "page_content.crypto" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  const cryptos      = pc.raw("cryptos")       as { sym:string; name:string; color:string; marketCap:string; desc:string; keyDrivers:string[] }[];
  const cryptoRisks  = pc.raw("crypto_risks")  as { label:string; desc:string }[];
  const cfdVsPhys    = pc.raw("cfd_vs_physical") as string[][];
  const faqs         = fq.raw("crypto") as { q:string; a:string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Markets", href: "/markets" }, { label: "Crypto" }]}
        cta={{ label: locale === "pt" ? "Começar a Operar Cripto" : "Start Trading Crypto", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[
          { value: "4+",       label: locale === "pt" ? "CFDs de Cripto" : "Crypto CFDs" },
          { value: "1:10",     label: locale === "pt" ? "Alavancagem Máxima" : "Max Leverage" },
          { value: locale === "pt" ? "Sem Carteira" : "No wallet", label: locale === "pt" ? "Necessária" : "Required" },
        ]}
      />

      {/* ── High-risk warning ─────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-red-200 bg-red-50 rounded-xl p-5">
            <div className="text-[12px] font-bold text-red-800 mb-2">{t("risk_title")}</div>
            <p className="text-[12px] text-red-700 leading-relaxed">{t("risk_text")}</p>
          </div>
        </div>
      </section>

      {/* ── CFD vs Physical Crypto ───────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("how_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("how_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{pc("how_desc")}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm mb-10">
            <table className="w-full text-sm min-w-[480px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{pc("comparison_col_feature")}</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: "#00CC44" }}>{pc("comparison_col_cfd")}</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">{pc("comparison_col_physical")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {cfdVsPhys.map(([f, cfd, phys]) => (
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
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">{t("instruments_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("instruments_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">{pc("instruments_desc")}</p>
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
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">{pc("key_drivers_label")}</div>
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
          <TradingConditionsTable
            title={locale === "pt" ? "Condições dos CFDs de Criptomoedas" : "Cryptocurrency CFD Conditions"}
            headers={["Symbol","Cryptocurrency","Spread From","Leverage","Min Size","Market Hours"]}
            rows={conditions}
            highlightCol={3}
          />
          <p className="text-[11px] text-gray-400 text-center mt-3">{pc("conditions_note")}</p>
        </div>
      </section>

      {/* ── Crypto-specific risks ─────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-red-400 uppercase tracking-widest mb-4">{pc("risks_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{pc("risks_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">{pc("risks_desc")}</p>
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
              {pc("read_full_risk")}{" "}
              <Link href="/legal/risk-disclosures" className="text-red-300 font-semibold hover:underline">{pc("risk_disclosures")}</Link>{" "}
              {pc("before_trading")}
            </p>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} faqs={faqs} />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel={locale === "pt" ? "Abrir Conta" : "Open Account"}
        secondaryLabel={locale === "pt" ? "Ver Todos os Mercados" : "View All Markets"}
        secondaryHref="/markets"
      />
    </>
  );
}
