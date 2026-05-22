import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import CTASection from "../../../components/CTASection";
import { IconBell, IconMonitor, IconPhone, IconMail, IconShield, IconActivity, IconClock, IconSettings, IconInfo } from "../../../components/ui/Icons";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Trading Alerts",
  description: "Set custom price and indicator alerts in MetaTrader 4. Monitor the markets efficiently with trading alerts on desktop, mobile, and email — free for all Olla Trade clients.",
};

const ALERT_TYPE_ICONS = [IconActivity, IconSettings, IconClock, IconInfo];
const DELIVERY_ICONS   = [IconMonitor, IconPhone, IconMail, IconBell];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function AlertsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t  = await getTranslations({ locale, namespace: "tools.alerts" });
  const fq = await getTranslations({ locale, namespace: "faq" });

  const overviewCards    = t.raw("overview_cards")    as { t: string; d: string }[];
  const alertTypes       = t.raw("alert_types")       as { title: string; desc: string }[];
  const deliveryChannels = t.raw("delivery_channels") as { title: string; desc: string }[];
  const setupDesktop     = t.raw("setup_desktop")     as { platform: string; steps: string[] };
  const setupMobile      = t.raw("setup_mobile")      as { platform: string; steps: string[] };
  const useCases         = t.raw("use_cases")         as { step: string; title: string; desc: string }[];
  const alertFaqs        = fq.raw("alerts")           as { q: string; a: string }[];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: locale === "pt" ? "Ferramentas" : "Tools", href: "/tools" }, { label: t("title") }]}
        stats={[
          { value: "MT4", label: locale === "pt" ? "Plataforma" : "Platform" },
          { value: locale === "pt" ? "Grátis" : "Free", label: locale === "pt" ? "Todas as contas" : "All accounts" },
          { value: "3", label: locale === "pt" ? "Canais de alerta" : "Alert channels" },
        ]}
      />

      {/* What are alerts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("overview_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5 leading-tight">{t("overview_title")}</h2>
              <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
                <p>{t("overview_p1")}</p>
                <p>{t("overview_p2")}</p>
                <p>{t("overview_p3")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {overviewCards.map(({ t: title, d: desc }) => (
                <div key={title} className="bg-[#F5F7FA] border border-gray-100 rounded-xl p-4">
                  <div className="text-[13px] font-bold text-[#111827] mb-1">{title}</div>
                  <div className="text-[12px] text-gray-500">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alert types */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("types_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("types_title")}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">{t("types_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {alertTypes.map(({ title, desc }, i) => {
              const Icon = ALERT_TYPE_ICONS[i % ALERT_TYPE_ICONS.length];
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

      {/* Delivery channels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("delivery_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("delivery_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryChannels.map(({ title, desc }, i) => {
              const Icon = DELIVERY_ICONS[i % DELIVERY_ICONS.length];
              return (
                <div key={title} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-500 flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                  <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to set up */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("setup_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("setup_title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[setupDesktop, setupMobile].map(({ platform, steps }) => (
              <div key={platform} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-[15px] font-bold text-[#111827] mb-4">{platform}</h3>
                <ol className="space-y-2.5">
                  {steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-[#00CC44] text-black text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("usecases_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("usecases_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-6">
                <div className="text-2xl font-extrabold text-[#00CC44] mb-3">{step}</div>
                <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk reminder */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-amber-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
              <IconShield className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-amber-900 mb-2">{t("risk_title")}</div>
              <p className="text-[13px] text-amber-800 leading-relaxed">{t("risk_text")}</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={t("faq_title")}
        subtitle={t("faq_subtitle")}
        faqs={alertFaqs}
      />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel={locale === "pt" ? "Abrir Conta" : "Open Account"}
        secondaryLabel={locale === "pt" ? "Baixar MT4" : "Download MT4"}
        secondaryHref="/trading/platform"
      />
    </>
  );
}
