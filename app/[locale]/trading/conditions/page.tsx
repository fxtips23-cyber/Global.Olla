import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/constants";
import FAQSection from "../../../components/ui/FAQSection";
import { conditionsFaqs } from "../../../data/faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Trading Conditions",
  description: "Olla Trade trading conditions: spreads from 0.0 pips, leverage up to 1:500, market execution, and negative balance protection across all instruments.",
};

/* ─── sub-components ──────────────────────────────────────────────────── */
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#0F1720] border border-white/8 rounded-2xl p-6 text-center">
      <div className="text-3xl font-black text-[#00CC44] mb-1">{value}</div>
      <div className="text-[12px] text-white/35 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{text}</div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
      <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
      <p className="text-[13px] text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ConditionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "trading.conditions" });
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(0,204,68,0.06) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <Link href="/trading" className="hover:text-white/45 transition-colors">Trading</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">Trading Conditions</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Professional Conditions</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
            Transparent Trading Conditions
          </h1>
          <p className="text-[17px] text-white/40 max-w-2xl leading-relaxed mb-9">
            Competitive spreads, flexible leverage, and market execution across 500+ instruments. All conditions are disclosed upfront — no hidden fees, no surprises.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={SITE.registerUrl}
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
              style={{ background: "#00CC44", color: "#000" }}>
              Open Account
            </Link>
            <Link href="/trading/accounts"
              className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/65 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              Compare Accounts
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Key stats bar ─────────────────────────────────────── */}
      <section className="bg-[#081018] border-b border-white/6 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              [SITE.maxLeverage,  "Max Leverage"],
              ["0.0 pips",        "Spreads From"],
              [SITE.minDeposit,   "Min. Deposit"],
              ["0.01 lots",       "Min. Trade Size"],
              ["80%",             "Margin Call"],
              ["20%",             "Stop Out Level"],
            ].map(([v, l]) => <StatCard key={l} value={v} label={l} />)}
          </div>
        </div>
      </section>

      {/* ── 3. Conditions overview cards ─────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={t("overview_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3">How We Execute Your Trades</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">
            Olla Trade uses market execution across all accounts. Orders are filled at the best available market price at the time of submission, subject to available liquidity and market conditions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <InfoCard title="Variable Spreads" body="Spreads are variable and reflect live market conditions. Major Forex pairs start from 0.0 pips on the Elite account and from 1.4 pips on the Standard account. Spreads may widen during major economic announcements, market open/close, or periods of reduced liquidity." />
            <InfoCard title="Market Execution" body="All orders are executed at the best available market price. No dealer intervention occurs in the order execution process. Expert Advisors (EAs) and automated trading strategies are fully supported on all account types." />
            <InfoCard title="Flexible Leverage" body="Leverage up to 1:500 is available on Forex pairs. Leverage varies by instrument class. Higher leverage increases both potential gains and losses. Clients should use leverage carefully and in accordance with their risk tolerance." />
            <InfoCard title="Negative Balance Protection" body="Olla Trade applies negative balance protection to all client accounts. In most market conditions, your losses will not exceed your deposited balance. Where an account falls into a negative balance due to exceptional market events, Olla Trade will reset the balance to zero at no charge to the client." />
            <InfoCard title="No Requotes" body="The market execution model means orders are not subject to requotes. All orders are accepted and executed at prevailing market prices. Slippage — execution at a price different from the requested price — may occur in fast-moving markets." />
            <InfoCard title="EA & Scalping Allowed" body="Expert Advisors, scalping strategies, news trading, and hedging are permitted on all Olla Trade accounts. There are no restrictions on trading styles. All strategies must remain within the bounds of the account terms and conditions." />
          </div>
        </div>
      </section>

      {/* ── 4. Account conditions table ──────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={t("accounts_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3">Conditions by Account Type</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">
            Three account types designed for different experience levels and capital sizes — all on MetaTrader 4.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#F5F7FA] border-b border-gray-100">
                  <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Condition</th>
                  <th className="px-6 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">Standard</th>
                  <th className="px-6 py-4 text-center text-[12px] font-bold uppercase tracking-wider" style={{ color: "#00CC44", background: "rgba(0,204,68,0.04)" }}>Pro ★</th>
                  <th className="px-6 py-4 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Min. Deposit",         "$10",       "$2,000",   "$20,000"],
                  ["Spreads From",         "1.4 pips",  "1.0 pips", "0.0 pips"],
                  ["Commission",          "None",      "None",     "$3.5 / lot"],
                  ["Max Leverage",        "1:400",     "1:400",    "1:200"],
                  ["Min. Trade Size",     "0.01 lots", "0.01 lots","0.01 lots"],
                  ["EA / Scalping",       "Allowed",   "Allowed",  "Allowed"],
                  ["Margin Call",         "80%",       "80%",      "80%"],
                  ["Stop Out Level",      "20%",       "20%",      "20%"],
                  ["Negative Bal. Prot.", "Yes",       "Yes",      "Yes"],
                  ["Platform",            "MT4",       "MT4",      "MT4"],
                ].map(([cond, std, pro, elite]) => (
                  <tr key={cond} className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3.5 font-semibold text-[#111827] text-[13px]">{cond}</td>
                    <td className="px-6 py-3.5 text-center text-gray-600 text-[13px]">{std}</td>
                    <td className="px-6 py-3.5 text-center font-semibold text-[13px]" style={{ color: "#00CC44", background: "rgba(0,204,68,0.03)" }}>{pro}</td>
                    <td className="px-6 py-3.5 text-center text-gray-600 text-[13px]">{elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-4">* Spreads are variable. Figures shown are indicative minimum spreads under normal market conditions. Actual spreads may be wider during low-liquidity periods or major news events.</p>
        </div>
      </section>

      {/* ── 5. Spreads & pricing ─────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={t("spreads_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">Spreads by Instrument Class</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {["Asset Class", "Typical Spread", "Max Leverage", "Margin Call", "Stop Out"].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Forex",       "From 0.0 pips", "1:500",  "80%", "20%"],
                  ["Metals",      "From 25 pts",   "1:200",  "80%", "20%"],
                  ["Indices",     "From 1 pt",     "1:100",  "80%", "20%"],
                  ["Energies",    "From 3 pts",    "1:100",  "80%", "20%"],
                  ["Crypto",      "From 50 pts",   "1:10",   "80%", "20%"],
                  ["Stocks",      "Market spread", "1:10",   "80%", "20%"],
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
          <p className="text-[11px] text-gray-400 mt-4">Spreads are variable and depend on market liquidity. They may widen during low-liquidity sessions, major economic events, or market open and close periods.</p>
        </div>
      </section>

      {/* ── 6. Leverage & margin ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel text={t("leverage_label")} />
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">Leverage up to 1:500</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                Leverage allows traders to control a larger position with a smaller amount of capital. Olla Trade offers leverage up to 1:500 on Forex pairs. Leverage is not fixed — different instruments have different maximum leverage limits based on risk characteristics.
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                Higher leverage amplifies both potential profits and potential losses. Clients are responsible for maintaining sufficient margin in their accounts. Olla Trade does not guarantee that margin calls will always prevent losses exceeding the account balance under all market conditions.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[12px] text-amber-800">
                <strong>Margin Warning:</strong> When your account equity falls to 80% of the required margin (Margin Call level), you will receive a margin call notification. At 20% (Stop Out level), positions may begin to be closed automatically to protect remaining equity. Clients are responsible for monitoring margin levels at all times.
              </div>
            </div>
            <div className="space-y-3">
              {[
                { asset: "Forex",    leverage: "1:500",  icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" },
                { asset: "Metals",   leverage: "1:200",  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                { asset: "Indices",  leverage: "1:100",  icon: "M18 20V10M12 20V4M6 20v-6" },
                { asset: "Energies", leverage: "1:100",  icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
                { asset: "Crypto",   leverage: "1:10",   icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v20M2 12h20" },
                { asset: "Stocks",   leverage: "1:10",   icon: "M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" },
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
                  <span className="text-[14px] font-bold text-[#00CC44]">{leverage}</span>
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
            <SectionLabel text={t("execution_label")} />
            <h2 className="text-3xl font-extrabold text-white mb-3">Market Execution Model</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-[15px] leading-relaxed">
              All Olla Trade accounts use market execution. Orders are transmitted directly to liquidity providers at the best available price.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Market Execution",    desc: "Orders are filled at the best available market price at the time of execution — no dealer confirmation required.",           icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
              { title: "No Requotes",         desc: "The market execution model eliminates requotes. Every order submitted is accepted and filled at prevailing market prices.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Slippage Disclosure", desc: "Execution price may differ from the requested price, particularly during fast-moving markets or major economic releases. Slippage can be positive or negative.", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "EA Support",          desc: "Fully supports Expert Advisors, automated strategies, scalping, hedging, and all standard MT4 trading approaches.",          icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:bg-white/6 hover:border-white/14 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00CC44]/10 border border-[#00CC44]/20 text-[#00CC44] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <h3 className="text-[14px] font-bold text-white mb-2">{title}</h3>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/execution-information" className="text-[13px] font-semibold text-[#00CC44] hover:text-[#00DD4A] transition-colors">
              Full Execution Information →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. Order types ───────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={t("orders_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">Supported Order Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Market Order",  desc: "Execute immediately at the current best available market price." },
              { name: "Limit Order",   desc: "Execute at a specified price or better. Used to enter or exit at a pre-defined level." },
              { name: "Stop Order",    desc: "Triggered when price reaches a specified level, then executed as a market order." },
              { name: "Stop Loss",     desc: "Automatically closes a position at a defined price to limit potential loss." },
              { name: "Take Profit",   desc: "Automatically closes a position at a defined price when a profit target is reached." },
              { name: "Trailing Stop", desc: "A dynamic stop loss that follows price movements, locking in profit as the market moves in your favour." },
            ].map(({ name, desc }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#00CC44] flex-shrink-0 mt-2" />
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
          <SectionLabel text={t("hours_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4">Market Hours by Asset</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">
            Olla Trade follows standard international market hours. All times are in server time (GMT+2 during daylight saving, GMT+3 in winter).
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm min-w-[540px]">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {["Asset Class", "Market Hours (Server Time)", "Days", "Notes"].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Forex",    "00:00 – 24:00", "Mon – Fri", "Market open Sunday 22:00 GMT"],
                  ["Metals",   "01:00 – 24:00", "Mon – Fri", "Follows COMEX / LBMA sessions"],
                  ["Indices",  "Varies",        "Mon – Fri", "Follows regional exchange hours"],
                  ["Energies", "01:00 – 24:00", "Mon – Fri", "Follows CME NYMEX session"],
                  ["Crypto",   "00:00 – 24:00", "Mon – Fri", "Weekend trading not available"],
                  ["Stocks",   "Varies",        "Mon – Fri", "Follows primary exchange listing"],
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
          <p className="text-[11px] text-gray-400 mt-4">Trading hours may be affected by public holidays and extraordinary market events. Spreads may widen at market open and close. Check your MT4 platform for live session information.</p>
        </div>
      </section>

      {/* ── 10. Instruments ──────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="Instruments" />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">{SITE.instruments} Tradable Instruments</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { asset: "Forex",          count: "70+",   desc: "Major, minor, and exotic currency pairs including EUR/USD, GBP/USD, USD/JPY, USD/CHF, and more." },
              { asset: "Metals",         count: "4+",    desc: "Gold (XAU/USD), Silver (XAG/USD), and other precious metals via CFDs." },
              { asset: "Indices",        count: "15+",   desc: "Global stock indices including US30, SPX500, NAS100, GER30, UK100, and more." },
              { asset: "Energies",       count: "5+",    desc: "Oil (Brent & WTI), Natural Gas, and other energy CFDs." },
              { asset: "Cryptocurrency", count: "10+",   desc: "Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and other major crypto CFDs." },
              { asset: "Stocks",         count: "1,000+",desc: "Single stock CFDs from the US, UK, EU, and other major markets including Apple, Amazon, Tesla, and more." },
            ].map(({ asset, count, desc }) => (
              <div key={asset} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[15px] font-bold text-[#111827]">{asset}</h3>
                  <span className="text-[13px] font-bold text-[#00CC44] bg-[#00CC44]/8 border border-[#00CC44]/12 px-2.5 py-1 rounded-full">{count}</span>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                <Link href={`/markets/${asset.toLowerCase().replace("cryptocurrency","crypto")}`} className="text-[12px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors mt-3 block">
                  View {asset} →
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
            <h3 className="text-[15px] font-bold text-amber-900 mb-3">Risk Disclosure</h3>
            <div className="space-y-2 text-[13px] text-amber-800 leading-relaxed">
              <p>Trading Forex and CFDs involves significant risk of loss and may not be suitable for all investors. Leveraged trading amplifies both potential profits and potential losses — you could lose more than your initial deposit.</p>
              <p>Spreads are variable and may widen during periods of market volatility, reduced liquidity, or major economic announcements. Slippage may occur during fast-moving markets. Past performance is not indicative of future results.</p>
              <p>You should ensure you understand how CFDs work and whether you can afford to take the risk. Please read our <Link href="/legal/risk-disclosures" className="font-semibold underline hover:no-underline">Risk Disclosures</Link> before trading.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ──────────────────────────────────────────────── */}
      <FAQSection
        title={t("faq_title")}
        subtitle="Common questions about Olla Trade's spreads, leverage, execution, and account conditions."
        faqs={conditionsFaqs}
      />

      {/* ── 13. CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#050C15]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Get Started</div>
          <h2 className="text-4xl font-extrabold text-white mb-4">Trade with Professional Conditions</h2>
          <p className="text-white/40 text-[16px] mb-8 leading-relaxed">
            Open an account in minutes and access 500+ instruments with tight spreads, fast execution, and full MetaTrader 4 support.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={SITE.registerUrl}
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-[15px] transition-colors"
              style={{ background: "#00CC44", color: "#000" }}>
              Open Account Free
            </Link>
            <Link href="/trading/accounts"
              className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-xl text-[14px] text-white/65 hover:text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              Compare Accounts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
