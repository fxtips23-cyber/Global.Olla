import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/constants";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Trading Conditions",
  description: "Olla Trade trading conditions: spreads from 0.0 pips, leverage up to 1:500, market execution, and negative balance protection across all instruments.",
};

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#0F1720] border border-white/8 rounded-2xl p-6 text-center">
      <div className="text-3xl font-black text-[#29B5D4] mb-1">{value}</div>
      <div className="text-[12px] text-white/35 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{text}</div>;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ConditionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "trading.conditions" });
  const tp = await getTranslations({ locale, namespace: "trading_pages.conditions" });
  const overviewCards  = tp.raw("overview_cards")    as { title:string; body:string }[];
  const orderItems     = tp.raw("order_items")       as { name:string; desc:string }[];
  const execCards      = tp.raw("exec_cards")        as { title:string; desc:string }[];
  const instrDescs     = tp.raw("instruments_desc")  as { asset:string; count:string; desc:string }[];

  const HOURS_ROWS = [
    ["Forex",    "00:00 – 24:00", "Mon – Fri", locale === "pt" ? "Mercado abre domingo 22:00 GMT" : "Market open Sunday 22:00 GMT"],
    ["Metals",   "01:00 – 24:00", "Mon – Fri", locale === "pt" ? "Segue as sessões COMEX / LBMA" : "Follows COMEX / LBMA sessions"],
    ["Indices",  locale === "pt" ? "Varia" : "Varies", "Mon – Fri", locale === "pt" ? "Segue os horários das bolsas regionais" : "Follows regional exchange hours"],
    ["Energies", "01:00 – 24:00", "Mon – Fri", locale === "pt" ? "Segue a sessão CME NYMEX" : "Follows CME NYMEX session"],
    ["Crypto",   "00:00 – 24:00", "Mon – Fri", locale === "pt" ? "Trading no fim de semana não disponível" : "Weekend trading not available"],
    ["Stocks",   locale === "pt" ? "Varia" : "Varies", "Mon – Fri", locale === "pt" ? "Segue a listagem da bolsa principal" : "Follows primary exchange listing"],
  ];

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(41,181,212,0.06) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">{locale === "pt" ? "Início" : "Home"}</Link>
            <span className="text-white/10">/</span>
            <Link href="/trading" className="hover:text-white/45 transition-colors">{locale === "pt" ? "Trading" : "Trading"}</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">{locale === "pt" ? "Condições de Trading" : "Trading Conditions"}</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-5">{tp("hero_badge")}</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">{tp("hero_title")}</h1>
          <p className="text-[17px] text-white/40 max-w-2xl leading-relaxed mb-9">{tp("hero_subtitle")}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="https://portal.ollatrade.com/auth/register"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
              style={{ background: "#29B5D4", color: "#000" }}>
              {tp("hero_cta1")}
            </Link>
            <Link href="/trading/accounts"
              className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/65 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              {tp("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Key stats bar ─────────────────────────────────────── */}
      <section className="bg-[#081018] border-b border-white/6 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              [SITE.maxLeverage, tp("stats_label")],
              ["0.0 pips",       tp("stats_spread")],
              [SITE.minDeposit,  tp("stats_deposit")],
              ["0.01 lots",      tp("stats_lot")],
              ["80%",            tp("stats_mc")],
              ["20%",            tp("stats_so")],
            ].map(([v, l]) => <StatCard key={l} value={v} label={l} />)}
          </div>
        </div>
      </section>

      {/* ── 3. Conditions overview cards ─────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={tp("overview_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("overview_title")}</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">{tp("overview_desc")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {overviewCards.map(({ title, body }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Account conditions table ──────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={tp("accounts_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("accounts_title")}</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">{tp("accounts_desc")}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#F5F7FA] border-b border-gray-100">
                  <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{tp("table_condition")}</th>
                  <th className="px-6 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">{tp("table_standard")}</th>
                  <th className="px-6 py-4 text-center text-[12px] font-bold uppercase tracking-wider" style={{ color: "#29B5D4", background: "rgba(41,181,212,0.04)" }}>{tp("table_pro")}</th>
                  <th className="px-6 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">{tp("table_elite")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  [tp("row_deposit"),    "$10",        "$2,000",     "$20,000"],
                  [tp("row_spreads"),    "1.4 pips",   "1.0 pips",   "0.0 pips"],
                  [tp("row_commission"), "None",        "None",        "$3.5/lot"],
                  [tp("row_leverage"),   "1:400",       "1:400",       "1:200"],
                  [tp("row_lot"),        "0.01 lots",   "0.01 lots",   "0.01 lots"],
                  [tp("row_ea"),         tp("row_ea_val"), tp("row_ea_val"), tp("row_ea_val")],
                  [tp("row_mc"),         "80%",         "80%",         "80%"],
                  [tp("row_so"),         "20%",         "20%",         "20%"],
                  [tp("row_nbp"),        tp("row_nbp_val"), tp("row_nbp_val"), tp("row_nbp_val")],
                  [tp("row_platform"),   "MT4",         "MT4",         "MT4"],
                ].map(([cond, std, pro, elite]) => (
                  <tr key={cond} className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3.5 font-semibold text-[#111827] text-[13px]">{cond}</td>
                    <td className="px-6 py-3.5 text-center text-gray-600 text-[13px]">{std}</td>
                    <td className="px-6 py-3.5 text-center font-semibold text-[13px]" style={{ color: "#29B5D4", background: "rgba(41,181,212,0.03)" }}>{pro}</td>
                    <td className="px-6 py-3.5 text-center text-gray-600 text-[13px]">{elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-4">{tp("accounts_note")}</p>
        </div>
      </section>

      {/* ── 5. Spreads & pricing ─────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={tp("spreads_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">{tp("spreads_title")}</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {[tp("spreads_col1"), tp("spreads_col2"), tp("spreads_col3"), tp("spreads_col4"), tp("spreads_col5")].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Forex",    "From 0.0 pips", "1:500",  "80%", "20%"],
                  [locale === "pt" ? "Metais" : "Metals",   "From 25 pts",   "1:200",  "80%", "20%"],
                  [locale === "pt" ? "Índices" : "Indices",  "From 1 pt",     "1:100",  "80%", "20%"],
                  [locale === "pt" ? "Energias" : "Energies","From 3 pts",    "1:100",  "80%", "20%"],
                  ["Crypto",   "From 50 pts",   "1:10",   "80%", "20%"],
                  [locale === "pt" ? "Ações" : "Stocks",   "Market spread", "1:10",   "80%", "20%"],
                ].map(r => (
                  <tr key={r[0]} className="hover:bg-[#F9FAFB]">
                    {r.map((v, i) => (
                      <td key={i} className={`px-5 py-3.5 text-[13px] ${i === 0 ? "font-bold text-[#111827]" : "text-gray-600"}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-4">{tp("spreads_note")}</p>
        </div>
      </section>

      {/* ── 6. Leverage & margin ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel text={tp("leverage_label")} />
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">{tp("leverage_title")}</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{tp("leverage_desc1")}</p>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{tp("leverage_desc2")}</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[12px] text-amber-800">
                <strong>{tp("margin_warning_title")}</strong> {tp("margin_warning_body")}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { asset: locale === "pt" ? "Forex" : "Forex",         leverage: "1:500",  icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" },
                { asset: locale === "pt" ? "Metais" : "Metals",       leverage: "1:200",  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                { asset: locale === "pt" ? "Índices" : "Indices",     leverage: "1:100",  icon: "M18 20V10M12 20V4M6 20v-6" },
                { asset: locale === "pt" ? "Energias" : "Energies",   leverage: "1:100",  icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
                { asset: locale === "pt" ? "Cripto" : "Crypto",       leverage: "1:10",   icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v20M2 12h20" },
                { asset: locale === "pt" ? "Ações" : "Stocks",        leverage: "1:10",   icon: "M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" },
              ].map(({ asset, leverage, icon }) => (
                <div key={asset} className="flex items-center justify-between bg-[#F5F7FA] border border-gray-100 rounded-xl px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                      </svg>
                    </div>
                    <span className="text-[14px] font-semibold text-[#111827]">{asset}</span>
                  </div>
                  <span className="text-[14px] font-bold text-[#29B5D4]">{leverage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Execution model ───────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel text={tp("exec_label")} />
            <h2 className="text-3xl font-extrabold text-white mb-3">{tp("exec_title")}</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-[15px] leading-relaxed">{tp("exec_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {execCards.map(({ title, desc }) => (
              <div key={title} className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:bg-white/6 hover:border-white/14 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#29B5D4]/10 border border-[#29B5D4]/20 text-[#29B5D4] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-[14px] font-bold text-white mb-2">{title}</h3>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/execution-information" className="text-[13px] font-semibold text-[#29B5D4] hover:text-[#1FA5C4] transition-colors">
              {tp("exec_link")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. Order types ───────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={tp("orders_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">{tp("orders_title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orderItems.map(({ name, desc }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#29B5D4] flex-shrink-0 mt-2" />
                <div>
                  <h4 className="text-[14px] font-bold text-[#111827] mb-1">{name}</h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Trading hours ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={tp("hours_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4">{tp("hours_title")}</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">{tp("hours_desc")}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[540px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {[tp("hours_col1"), tp("hours_col2"), tp("hours_col3"), tp("hours_col4")].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {HOURS_ROWS.map(r => (
                  <tr key={r[0]} className="hover:bg-[#F9FAFB]">
                    {r.map((v, i) => (
                      <td key={i} className={`px-5 py-3.5 text-[13px] ${i === 0 ? "font-bold text-[#111827]" : "text-gray-600"}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-4">{tp("hours_note")}</p>
        </div>
      </section>

      {/* ── 10. Instruments ──────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={tp("instruments_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">{SITE.instruments} {locale === "pt" ? "Instrumentos Negociáveis" : "Tradable Instruments"}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {instrDescs.map(({ asset, count, desc }) => (
              <div key={asset} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[15px] font-bold text-[#111827]">{asset}</h3>
                  <span className="text-[13px] font-bold text-[#29B5D4] bg-[#29B5D4]/8 border border-[#29B5D4]/12 px-2.5 py-1 rounded-full">{count}</span>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                <Link href={`/markets/${asset.toLowerCase().replace("criptomoedas","crypto").replace("ações","stocks").replace("metais","metals").replace("índices","indices").replace("energias","energies")}`}
                  className="text-[12px] font-semibold text-[#29B5D4] hover:text-[#29B5D4] transition-colors mt-3 block">
                  {tp("view_market")} {asset} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Risk note ────────────────────────────────────────── */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7">
            <h3 className="text-[15px] font-bold text-amber-900 mb-3">{tp("risk_label")}</h3>
            <div className="space-y-2 text-[13px] text-amber-800 leading-relaxed">
              <p>{tp("risk_p1")}</p>
              <p>{tp("risk_p2")}</p>
              <p>{tp("risk_p3")}{" "}<Link href="/legal/risk-disclosures" className="font-semibold underline hover:no-underline">{tp("risk_link")}</Link>{" "}{tp("risk_p3b")}</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── 13. CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#050C15]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-5">{locale === "pt" ? "Começar" : "Get Started"}</div>
          <h2 className="text-4xl font-extrabold text-white mb-4">{tp("cta_title")}</h2>
          <p className="text-white/40 text-[16px] mb-8 leading-relaxed">{tp("cta_subtitle")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="https://portal.ollatrade.com/auth/register"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-[15px] transition-colors"
              style={{ background: "#29B5D4", color: "#000" }}>
              {tp("hero_cta1")}
            </Link>
            <Link href="/trading/accounts"
              className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-xl text-[14px] text-white/65 hover:text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              {tp("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
