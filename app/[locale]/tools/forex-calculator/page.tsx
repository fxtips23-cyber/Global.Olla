import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import ForexCalculator from "./ForexCalculator";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Forex Calculator — Position Size, Pip Value, Margin & P&L",
  description: "Free professional Forex trading calculators — position size, pip value, margin requirements, and profit/loss. Calculate trade parameters before you open a position.",
};

const CALC_COLORS = ["#29B5D4", "#1E88E5", "#AB47BC", "#F59E0B"];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ForexCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.calculator" });

  const calcGuide = t.raw("calc_guide") as { title: string; inputs: string[]; output: string; example: string; why: string }[];
  const lotSizes  = t.raw("lot_sizes")  as { name: string; size: string; pipValue: string; notes: string }[];
  const riskRules = t.raw("risk_rules") as { rule: string; desc: string }[];
  const lotsHdrs  = t.raw("lots_headers") as string[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Ferramentas" : "Tools", href: "/tools" }, { label: t("title") }]}
        stats={[
          { value: "4", label: locale === "pt" ? "Calculadoras" : "Calculators" },
          { value: locale === "pt" ? "Grátis" : "Free", label: locale === "pt" ? "Para Todos" : "For All Traders" },
          { value: "All FX", label: locale === "pt" ? "& CFDs" : "& CFD Instruments" },
        ]}
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
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4 text-center">{t("guide_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("guide_title")}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-[15px]">{t("guide_desc")}</p>
          <div className="grid md:grid-cols-2 gap-5">
            {calcGuide.map(({ title, inputs, output, example, why }, i) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: CALC_COLORS[i % CALC_COLORS.length] }} />
                  <h3 className="text-[15px] font-bold text-[#111827]">{title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">{t("guide_inputs_label")}</div>
                    <ul className="space-y-1">
                      {inputs.map((inp, j) => (
                        <li key={j} className="flex items-start gap-2 text-[12px] text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: CALC_COLORS[i % CALC_COLORS.length] }} />
                          {inp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t("guide_output_label")}</div>
                    <p className="text-[12px] text-gray-600">{output}</p>
                  </div>
                  <div className="bg-[#F5F7FA] rounded-xl p-3">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t("guide_example_label")}</div>
                    <p className="text-[12px] font-mono text-[#111827]">{example}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t("guide_why_label")}</div>
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
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4 text-center">{t("lots_label")}</div>
          <h2 className="text-2xl font-extrabold text-[#111827] mb-4 text-center">{t("lots_title")}</h2>
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto text-[14px]">{t("lots_desc")}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {lotsHdrs.map(h => (
                    <th key={h} className="px-5 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {lotSizes.map(({ name, size, pipValue, notes }) => (
                  <tr key={name} className="hover:bg-[#F9FAFB]">
                    <td className="px-5 py-3.5 font-bold text-[#111827] text-[13px]">{name}</td>
                    <td className="px-5 py-3.5 font-mono text-gray-600 text-[13px]">{size}</td>
                    <td className="px-5 py-3.5 font-mono text-[#29B5D4] font-semibold text-[13px]">{pipValue}</td>
                    <td className="px-5 py-3.5 text-gray-500 text-[12px]">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-3 text-center">{t("lots_note")}</p>
        </div>
      </section>

      {/* ── Risk management rules — dark ─────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{t("risk_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("risk_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">{t("risk_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {riskRules.map(({ rule, desc }) => (
              <div key={rule} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/6 transition-all">
                <div className="w-2 h-2 rounded-full bg-[#29B5D4] mb-3" />
                <h4 className="text-[13px] font-bold text-white mb-2">{rule}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/4 border border-white/8 rounded-2xl p-6 text-center">
            <p className="text-[13px] text-white/40 leading-relaxed max-w-2xl mx-auto">
              <strong className="text-white/60">{locale === "pt" ? "Importante:" : "Important:"}</strong> {t("risk_disclaimer")}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#F5F7FA] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="text-[15px] font-bold text-[#111827] mb-1">{t("cta_title")}</div>
              <div className="text-[13px] text-gray-500">{t("cta_subtitle")}</div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center font-bold px-6 py-3 rounded-xl text-[13px] transition-colors"
                style={{ background: "#29B5D4", color: "#000" }}>
                {t("cta_label_open")}
              </Link>
              <Link href="/trading/conditions"
                className="inline-flex items-center font-medium px-6 py-3 rounded-xl text-[13px] border border-gray-200 text-[#111827] hover:border-gray-300 transition-colors">
                {t("cta_label_conditions")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
