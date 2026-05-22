import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import VPSInfraVisual from "../../../components/visuals/VPSInfraVisual";
import FAQSection from "../../../components/ui/FAQSection";
import CTASection from "../../../components/CTASection";
import { IconClock, IconBolt, IconShield, IconServer, IconGlobe, IconDatabase, IconCheck } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "VPS Guide",
  description: "Learn how to use a Virtual Private Server (VPS) to run MetaTrader 4 Expert Advisors 24/5 without interruption. VPS setup guide, recommended specs, and security checklist.",
};

const BENEFIT_ICONS = [IconClock, IconBolt, IconShield, IconServer, IconGlobe, IconDatabase];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function VPSPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "tools.vps" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  const benefits      = t.raw("benefits")       as { title: string; desc: string }[];
  const infraItems    = t.raw("infra_items")    as { label: string; desc: string }[];
  const specs         = t.raw("specs")          as { label: string; value: string }[];
  const setupSteps    = t.raw("setup_steps")    as { n: string; t: string; d: string }[];
  const securityItems = t.raw("security_items") as string[];
  const vpsVsPcRows   = t.raw("vps_vs_pc_rows") as string[][];
  const vpsFaqs       = fq.raw("vps")           as { q: string; a: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Ferramentas" : "Tools", href: "/tools" }, { label: locale === "pt" ? "Guia VPS" : "VPS Guide" }]}
        stats={[
          { value: "24/5", label: locale === "pt" ? "Operação ininterrupta" : "Always-on operation" },
          { value: "EA",   label: locale === "pt" ? "Suporte a Expert Advisors" : "Expert Advisor support" },
          { value: "RDP",  label: locale === "pt" ? "Acesso remoto" : "Remote access" },
        ]}
      />

      {/* What is VPS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("what_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">{t("what_title")}</h2>
              <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
                <p>{t("what_p1")}</p>
                <p>{t("what_p2")}</p>
                <p>{t("what_p3")}</p>
              </div>
            </div>
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-6">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">{t("vps_vs_pc_title")}</div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="text-[11px] font-bold text-[#00CC44] uppercase tracking-wider">{t("vps_col")}</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{t("pc_col")}</div>
              </div>
              {vpsVsPcRows.map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-2 py-2 border-t border-gray-100">
                  <div className="text-[12px] text-[#00AA38] flex items-center gap-1.5"><IconCheck className="w-3 h-3" />{row[0]}</div>
                  <div className="text-[12px] text-gray-400">{row[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("benefits_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("benefits_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ title, desc }, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return (
                <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                  <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VPS infrastructure visual */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <VPSInfraVisual />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("infra_label")}</div>
              <h2 className="text-3xl font-extrabold text-white mb-5">{t("infra_title")}</h2>
              <p className="text-white/45 text-[14px] leading-relaxed mb-6">{t("infra_desc")}</p>
              <div className="space-y-3">
                {infraItems.map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00CC44]/15 border border-[#00CC44]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#00CC44]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white/75 mb-0.5">{label}</div>
                      <div className="text-[12px] text-white/35 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/20 mt-6 leading-relaxed">{t("infra_disclaimer")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("specs_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">{t("specs_title")}</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{t("specs_desc")}</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[12px] text-amber-800">
                {t("specs_note")}
              </div>
            </div>
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl overflow-hidden">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex justify-between items-start px-5 py-3.5 text-[13px] ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <span className="text-gray-400 font-medium">{s.label}</span>
                  <span className="text-[#111827] font-semibold text-right max-w-[200px]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("setup_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("setup_title")}</h2>
          </div>
          <div className="space-y-4">
            {setupSteps.map(({ n, t: title, d: desc }) => (
              <div key={n} className="flex items-start gap-5 bg-white border border-gray-100 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-[#111827] text-[#00CC44] font-black text-[13px] flex items-center justify-center flex-shrink-0">{n}</div>
                <div>
                  <div className="text-[14px] font-bold text-[#111827] mb-1">{title}</div>
                  <div className="text-[13px] text-gray-500 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("security_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("security_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {securityItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#F5F7FA] border border-gray-100 rounded-xl px-4 py-3">
                <div className="w-5 h-5 rounded-full bg-[#00CC44]/15 border border-[#00CC44]/25 text-[#00CC44] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconCheck className="w-3 h-3" />
                </div>
                <span className="text-[12px] text-gray-600 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title={t("faq_title")}
        subtitle={t("faq_subtitle")}
        faqs={vpsFaqs}
      />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel={locale === "pt" ? "Abrir Conta" : "Open Account"}
        secondaryLabel={locale === "pt" ? "Ver Plataforma MT4" : "View MT4 Platform"}
        secondaryHref="/trading/platform"
      />
    </>
  );
}
