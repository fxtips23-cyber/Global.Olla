import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import ForexCalculator from "./ForexCalculator";

export const metadata: Metadata = {
  title: "Forex Calculator",
  description:
    "Free professional Forex trading calculators — position size, pip value, margin, and profit/loss. Calculate trade parameters for Forex, Metals, Crypto, and Indices.",
};

export default function ForexCalculatorPage() {
  return (
    <>
      <PageHero
        badge="Free Tool"
        title="Forex Calculator"
        subtitle="Calculate position size, pip value, margin requirements, and potential profit or loss for any instrument before you trade."
        breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Forex Calculator" }]}
      />

      {/* ── Main calculator — white background ── */}
      <section className="py-14 bg-white dark:bg-[#050A0F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForexCalculator />
        </div>
      </section>

      {/* ── Quick reference — soft gray section ── */}
      <section className="py-14 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-3">Quick Reference</div>
            <h2 className="text-2xl font-extrabold text-[#111827] dark:text-[#F9FAFB]">What Each Calculator Does</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                title: "Position Size",
                desc: "Find the right lot size based on your account balance, risk tolerance, and stop loss distance.",
              },
              {
                title: "Pip Value",
                desc: "Find the exact monetary value of one pip for any instrument and lot size in USD.",
              },
              {
                title: "Margin",
                desc: "Calculate the deposit required to open a position at your chosen leverage level.",
              },
              {
                title: "Profit / Loss",
                desc: "Estimate the outcome of a trade before you open it — based on entry, exit, and lot size.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl p-5">
                <div className="text-[13px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1.5">{title}</div>
                <div className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB]">Ready to apply your calculations?</div>
              <div className="text-[12px] text-gray-500 dark:text-[#9CA3AF] mt-0.5">Open a live account and start trading with the conditions you calculated.</div>
            </div>
            <Link
              href="https://direct.ollatrade.com/auth/register"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-[13px] transition-colors flex-shrink-0"
              style={{ background: "#00CC44", color: "#000" }}
            >
              Open Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
