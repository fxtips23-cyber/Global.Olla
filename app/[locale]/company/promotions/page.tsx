import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import { IconCheck, IconShield, IconInfo, IconUsers, IconClock } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Promotions & Offers",
  description: "Explore Olla Trade's promotional offers. All promotions are subject to eligibility criteria and terms and conditions. Trading involves risk.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function PromotionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.promotions" });

  const eligibilityItems   = t.raw("eligibility_items")    as { title: string; desc: string }[];
  const participationSteps = t.raw("participation_steps")  as { n: string; title: string; desc: string }[];
  const creditCards        = t.raw("credit_cards")         as { title: string; desc: string }[];
  const tableHeaders       = t.raw("table_headers")        as string[];
  const tableRows          = t.raw("table_rows")           as string[][];

  const ELIGIBILITY_ICONS = [IconUsers, IconShield, IconClock, IconInfo];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Empresa" : "Company", href: "/company" }, { label: locale === "pt" ? "Promoções" : "Promotions" }]}
      />

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 flex items-start gap-3">
            <IconInfo className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-[12px] text-amber-800 leading-relaxed">
              <strong className="font-bold">{locale === "pt" ? "Importante:" : "Important:"}</strong> {t("important_text")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4 text-center">{t("current_label")}</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4 text-center">{t("current_title")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[15px] text-center mb-12">{t("current_subtitle")}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Active promotion */}
            <div className="relative bg-white rounded-2xl flex flex-col overflow-hidden border-2 border-[#29B5D4]/30 shadow-lg">
              <div className="h-1 bg-[#29B5D4]" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#29B5D4]/12 text-[#29B5D4] border border-[#29B5D4]/25">{t("offer1_badge")}</span>
                  <span className="text-[10px] text-[#29B5D4] font-bold">{t("offer1_featured")}</span>
                </div>
                <div className="text-5xl font-extrabold text-[#29B5D4] mb-1 leading-none">{t("offer1_amount")}</div>
                <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-1">{t("offer1_title")}</h3>
                <div className="text-[11px] text-gray-400 mb-4">{t("offer1_type")}</div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 flex-1">{t("offer1_desc")}</p>
                <div className="space-y-1.5 mb-6 border-t border-gray-100 pt-4">
                  {(t.raw("offer1_points") as string[]).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[11px] text-gray-500">
                      <IconCheck className="w-3.5 h-3.5 text-[#29B5D4] flex-shrink-0 mt-0.5" />{item}
                    </div>
                  ))}
                </div>
                <Link href="https://portal.ollatrade.com/auth/register"
                  className="w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] bg-[#29B5D4] hover:bg-[#1FA5C4] text-white transition-all">
                  {t("offer1_cta")}
                </Link>
              </div>
            </div>

            {/* Coming soon */}
            <div className="relative bg-white rounded-2xl flex flex-col overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">{t("offer2_badge")}</span>
                </div>
                <div className="text-5xl font-extrabold text-[#111827] mb-1 leading-none">{t("offer2_amount")}</div>
                <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-1">{t("offer2_title")}</h3>
                <div className="text-[11px] text-gray-400 mb-4">{t("offer2_type")}</div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 flex-1">{t("offer2_desc")}</p>
                <div className="space-y-1.5 mb-6 border-t border-gray-100 pt-4">
                  {(t.raw("offer2_points") as string[]).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[11px] text-gray-500">
                      <IconCheck className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" />{item}
                    </div>
                  ))}
                </div>
                <Link href="https://portal.ollatrade.com/auth/register"
                  className="w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] bg-[#F5F7FA] hover:bg-[#111827] hover:text-white text-[#111827] border border-gray-200 transition-all">
                  {t("offer2_cta")}
                </Link>
              </div>
            </div>

            {/* Check availability */}
            <div className="relative bg-white rounded-2xl flex flex-col overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{t("offer3_badge")}</span>
                </div>
                <div className="text-5xl font-extrabold text-[#111827] mb-1 leading-none">{t("offer3_amount")}</div>
                <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-1">{t("offer3_title")}</h3>
                <div className="text-[11px] text-gray-400 mb-4">{t("offer3_type")}</div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 flex-1">{t("offer3_desc")}</p>
                <div className="space-y-1.5 mb-6 border-t border-gray-100 pt-4">
                  {(t.raw("offer3_points") as string[]).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[11px] text-gray-500">
                      <IconCheck className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" />{item}
                    </div>
                  ))}
                </div>
                <Link href="/contact-us"
                  className="w-full flex items-center justify-center font-bold py-3 rounded-xl text-[13px] bg-[#F5F7FA] hover:bg-[#111827] hover:text-white text-[#111827] border border-gray-200 transition-all">
                  {t("offer3_cta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{t("eligibility_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">{t("eligibility_title")}</h2>
              <div className="space-y-3">
                {eligibilityItems.map(({ title, desc }, i) => {
                  const Icon = ELIGIBILITY_ICONS[i % ELIGIBILITY_ICONS.length];
                  return (
                    <div key={title} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div>
                        <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{t("participation_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">{t("participation_title")}</h2>
              <div className="space-y-4">
                {participationSteps.map(({ n, title, desc }) => (
                  <div key={n} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#29B5D4] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
                    <div>
                      <div className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{t("credit_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("credit_title")}</h2>
            <p className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed">{t("credit_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {creditCards.map(({ title, desc }) => (
              <div key={title} className="bg-white/4 border border-white/8 rounded-2xl p-5">
                <div className="w-2 h-2 rounded-full bg-[#29B5D4] mb-3" />
                <h4 className="text-[13px] font-bold text-white mb-2">{title}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="border-b border-white/8 bg-white/4">
                <tr>
                  {tableHeaders.map(h => (
                    <th key={h} className="px-5 py-3.5 text-left text-[10px] font-bold text-white/30 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {tableRows.map(([feat, credit, own]) => (
                  <tr key={feat} className="hover:bg-white/3">
                    <td className="px-5 py-3 text-[12px] font-semibold text-white/60">{feat}</td>
                    <td className="px-5 py-3 text-[12px] text-white/35">{credit}</td>
                    <td className="px-5 py-3 text-[12px] text-[#29B5D4] font-medium">{own}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">{t("disclaimer_title")}</div>
            <div className="space-y-2 text-[12px] text-gray-600 leading-relaxed">
              <p>{t("disclaimer_p1")}</p>
              <p>{t("disclaimer_p2")}</p>
              <p>{t("disclaimer_p3")}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
