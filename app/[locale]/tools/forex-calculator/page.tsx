import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import ForexCalculator from "./ForexCalculator";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Forex Calculator — Position Size, Pip Value, Margin & P&L",
  description: "Free professional Forex trading calculators — position size, pip value, margin requirements, and profit/loss. Calculate trade parameters before you open a position.",
};

const calculatorGuide = [
  {
    title: "Position Size Calculator",
    color: "#00CC44",
    inputs: ["Account balance", "Risk percentage (e.g. 1% or 2%)", "Stop loss in pips", "Instrument (EUR/USD, XAUUSD, etc.)"],
    output: "The correct lot size that limits your loss to your chosen percentage if the stop loss is hit.",
    example: "Account: $5,000 · Risk: 1% ($50) · Stop Loss: 20 pips on EUR/USD → Result: 0.25 lots",
    why: "Oversizing is one of the most common reasons traders lose accounts quickly. A position size calculator enforces discipline by making risk consistent across all trades.",
  },
  {
    title: "Pip Value Calculator",
    color: "#1E88E5",
    inputs: ["Instrument (currency pair or CFD)", "Lot size (e.g. 0.1, 1.0)", "Account currency (USD)"],
    output: "The exact USD value of 1 pip movement for your chosen instrument and lot size.",
    example: "EUR/USD · 1.0 lot → 1 pip = $10.00 | EUR/USD · 0.1 lot → 1 pip = $1.00",
    why: "Pip value varies by instrument and lot size. Knowing it precisely lets you calculate stop loss distances and take profit targets in dollar terms before entering a trade.",
  },
  {
    title: "Margin Calculator",
    color: "#AB47BC",
    inputs: ["Instrument", "Lot size", "Leverage (e.g. 1:100, 1:500)", "Account currency"],
    output: "The amount of margin (collateral) required to open and maintain the position.",
    example: "1 lot EUR/USD · Leverage 1:100 → Required margin: $1,084 (at 1.08400 price)",
    why: "Trading without knowing your margin requirement can result in unexpected margin calls. This calculator prevents overcommitting available margin across multiple open trades.",
  },
  {
    title: "Profit / Loss Calculator",
    color: "#F59E0B",
    inputs: ["Instrument", "Entry price", "Exit price", "Lot size", "Position direction (Buy/Sell)"],
    output: "Estimated profit or loss in USD for the trade, based on price movement.",
    example: "Buy 1 lot EUR/USD at 1.08400, close at 1.08700 → Profit: $300 (30 pips × $10/pip)",
    why: "Visualising the profit/loss before entering a trade helps you decide whether the risk-to-reward ratio justifies the position — a core step in any trade planning process.",
  },
];

const riskRules = [
  { rule: "1–2% Risk Per Trade",     desc: "Most professional traders risk between 1% and 2% of account balance on any single trade. This allows 50–100 consecutive losses before depleting an account — providing time to recover." },
  { rule: "Minimum 1:2 R:R Ratio",   desc: "For every $1 risked, target at least $2 in potential profit. A 1:2 risk-to-reward ratio means you only need to be right 34% of the time to break even over a series of trades." },
  { rule: "Set Stop Loss Before Entry", desc: "Determine your stop loss price before opening any trade. This prevents emotional decision-making after the position is open and price moves against you." },
  { rule: "Don't Move Stop Against You", desc: "Moving a stop loss further away from entry to avoid being stopped out increases your risk exposure. Only widen stops if your strategy explicitly calls for it." },
  { rule: "Consider Correlation",     desc: "Opening multiple positions in strongly correlated instruments (e.g. EUR/USD + GBP/USD) effectively multiplies your exposure. Account for this when calculating total risk." },
  { rule: "Use the Calculator Every Time", desc: "Consistent application of position sizing calculators removes guesswork from trade sizing. Even experienced traders use them to maintain disciplined risk management." },
];

const lotSizes = [
  { name: "Standard Lot",  size: "100,000 units", pipValue: "$10.00 (EUR/USD)",  notes: "Full-size position. Suitable for larger accounts." },
  { name: "Mini Lot",      size: "10,000 units",  pipValue: "$1.00 (EUR/USD)",   notes: "One-tenth of a standard lot. Good for medium accounts." },
  { name: "Micro Lot",     size: "1,000 units",   pipValue: "$0.10 (EUR/USD)",   notes: "Smallest standard unit. Suitable for small accounts and learning." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ForexCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.calculator" });
  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Forex Calculator" }]}
        stats={[{ value: "4", label: "Calculators" }, { value: "Free", label: "For All Traders" }, { value: "All FX", label: "& CFD Instruments" }]}
      />

      {/* ── Calculator component ──────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForexCalculator />
        </div>
      </section>

      {/* ── Calculator guide ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Calculator Guide</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">How to Use Each Calculator</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">Each calculator serves a specific purpose in the trade planning process. Use them together for a complete picture of any trade before opening it.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {calculatorGuide.map(({ title, color, inputs, output, example, why }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: color }} />
                  <h3 className="text-[15px] font-bold text-[#111827]">{title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Inputs Required</div>
                    <ul className="space-y-1">
                      {inputs.map(i => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: color }} />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Output</div>
                    <p className="text-[12px] text-gray-600">{output}</p>
                  </div>
                  <div className="bg-[#F5F7FA] rounded-xl p-3">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Example</div>
                    <p className="text-[12px] font-mono text-[#111827]">{example}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Why It Matters</div>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lot sizes reference ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Reference</div>
          <h2 className="text-2xl font-extrabold text-[#111827] mb-4 text-center">Lot Size Reference Table</h2>
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto text-[14px]">Lot size determines how many units of a currency or commodity you are buying or selling. Olla Trade supports micro lots from 0.01 — allowing precise position sizing for any account size.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {["Lot Type","Units per Lot","Pip Value (EUR/USD)","Notes"].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {lotSizes.map(({ name, size, pipValue, notes }) => (
                  <tr key={name} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3.5 font-bold text-[#111827] text-[13px]">{name}</td>
                    <td className="px-5 py-3.5 font-mono text-gray-600 text-[13px]">{size}</td>
                    <td className="px-5 py-3.5 font-mono text-[#00CC44] font-semibold text-[13px]">{pipValue}</td>
                    <td className="px-5 py-3.5 text-gray-500 text-[12px]">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-3 text-center">Pip values are approximate and vary by instrument and current exchange rate. Use the calculator above for precise values.</p>
        </div>
      </section>

      {/* ── Risk management rules — dark ─────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Risk Management</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Core Risk Management Rules</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">
              The calculator is only one part of disciplined trading. These risk management principles help protect your capital across all market conditions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {riskRules.map(({ rule, desc }) => (
              <div key={rule} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                <div className="w-2 h-2 rounded-full bg-[#00CC44] mb-3" />
                <h4 className="text-[13px] font-bold text-white mb-2">{rule}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/4 border border-white/8 rounded-2xl p-6 text-center">
            <p className="text-[13px] text-white/40 leading-relaxed max-w-2xl mx-auto">
              <strong className="text-white/60">Important:</strong> Trading calculators provide estimates based on inputs. Actual results may vary due to spreads, slippage, swap charges, and execution conditions. All trading involves risk of loss. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#F5F7FA] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="text-[15px] font-bold text-[#111827] mb-1">Ready to put your calculations into action?</div>
              <div className="text-[13px] text-gray-500">Open a live or demo account and trade with the conditions you calculated.</div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="https://direct.ollatrade.com/auth/register"
                className="inline-flex items-center font-bold px-6 py-3 rounded-xl text-[13px] transition-colors"
                style={{ background: "#00CC44", color: "#000" }}>
                Open Account
              </Link>
              <Link href="/trading/conditions"
                className="inline-flex items-center font-medium px-6 py-3 rounded-xl text-[13px] border border-gray-200 text-[#111827] hover:border-gray-300 transition-colors">
                View Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
