import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";
import FAQSection from "../../../components/ui/FAQSection";
import CTASection from "../../../components/CTASection";
import { IconShield, IconActivity, IconRefresh, IconDroplet, IconServer, IconInfo, IconBarChart } from "../../../components/ui/Icons";
import { riskFaqs } from "../../../data/extra-faqs";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Risk Disclosures",
  description: "Important risk disclosures for trading Forex, CFDs, and other financial instruments with Olla Trade. Please read carefully before opening a live account.",
};

const RISK_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  general: IconInfo, leverage: IconBarChart, volatility: IconActivity,
  slippage: IconRefresh, liquidity: IconDroplet, gap: IconBarChart,
  technical: IconServer, crypto: IconActivity,
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RiskDisclosuresPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.risk" });

  const riskCategories = t.raw("risk_categories") as { id: string; title: string; color: string; tc: string; desc: string }[];
  const checklistItems = t.raw("checklist_items") as string[];

  const selfCheckQA = locale === "pt" ? [
    { q: "Você entende como os CFDs e a alavancagem funcionam?",         warn: "Se não: estude nossas páginas de Condições de Trading e Informações de Execução antes de prosseguir." },
    { q: "Você pode perder todo o dinheiro que planeja investir?",        warn: "Se não: não opere. CFDs carregam risco de perda total. Nunca opere com fundos essenciais." },
    { q: "Você entende que desempenho passado não indica resultados futuros?", warn: "Se não: nenhuma estratégia, sinal ou EA garante lucros futuros." },
    { q: "Você tem um plano de gestão de risco escrito (stop losses, dimensionamento)?", warn: "Se não: desenvolva um antes de operar ao vivo. Trading indisciplinado acelera perdas." },
    { q: "Você está operando com fundos que pode manter investidos a médio prazo?", warn: "Se não: pressão financeira de curto prazo leva a decisões emocionais e de alto risco." },
    { q: "Você entende o impacto das taxas de swap overnight em posições abertas?", warn: "Se não: posições overnight carregam custos de financiamento diários que afetam o P&L." },
  ] : [
    { q: "Do you understand how CFDs and leverage work?",                warn: "If not: study our Trading Conditions and Execution Information pages before proceeding." },
    { q: "Can you afford to lose all of the money you plan to trade?",  warn: "If no: do not trade. CFDs carry risk of total loss. Never trade with essential funds." },
    { q: "Do you understand that past performance is not indicative of future results?", warn: "If not: no strategy, signal, or EA guarantees future profits." },
    { q: "Do you have a written risk management plan (stop losses, position sizing)?", warn: "If not: develop one before live trading. Undisciplined trading accelerates losses." },
    { q: "Are you trading with funds you can keep invested for the medium term?", warn: "If no: short-term financial pressure leads to emotional, high-risk decisions." },
    { q: "Do you understand the impact of overnight swap charges on open positions?", warn: "If not: overnight positions carry daily financing costs that affect P&L." },
  ];

  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")}
        breadcrumbs={[{ label: "Legal", href: "/company/legal" }, { label: t("title") }]} />

      <section className="py-8 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-red-400 bg-red-50 rounded-2xl p-6 text-center">
            <div className="text-[15px] font-extrabold text-red-800 mb-2">{t("warning")}</div>
            <p className="text-[13px] text-red-700 leading-relaxed max-w-2xl mx-auto">{t("warning_text")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{t("toc_label")}</div>
                <nav className="space-y-0.5">
                  {riskCategories.map(s => (
                    <a key={s.id} href={`#${s.id}`} className="block text-[12px] text-gray-500 hover:text-[#00CC44] px-2 py-1.5 rounded-lg hover:bg-white transition-colors">{s.title}</a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-5">
              {riskCategories.map(({ id, title, color, tc, desc }) => {
                const Icon = RISK_ICONS[id] || IconInfo;
                return (
                  <div key={id} id={id} className={`border rounded-2xl p-6 ${color}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`w-5 h-5 flex-shrink-0 ${tc}`} />
                      <h3 className={`text-[15px] font-bold ${tc}`}>{title}</h3>
                    </div>
                    <p className={`text-[13px] leading-relaxed ${tc}`}>{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("checklist_label")}</div>
            <h2 className="text-3xl font-extrabold text-white mb-3">{t("checklist_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {checklistItems.map((item, i) => (
              <div key={i} className="bg-white/4 border border-white/8 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00CC44]/15 border border-[#00CC44]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#00CC44]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-[12px] text-white/55 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">
              {locale === "pt" ? "Avaliação Pessoal" : "Self-Assessment"}
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">
              {locale === "pt" ? "Antes de Começar a Operar" : "Before You Start Trading"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {selfCheckQA.map(({ q, warn }) => (
              <div key={q} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded border border-[#00CC44]/30 bg-[#00CC44]/10 flex-shrink-0 mt-0.5" />
                  <p className="text-[13px] font-semibold text-[#111827] leading-relaxed">{q}</p>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-8">{warn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-7">
            <h3 className="text-[15px] font-bold text-[#111827] mb-4">
              {locale === "pt" ? "Aviso Geral" : "General Disclaimer"}
            </h3>
            <div className="space-y-3 text-[13px] text-gray-600 leading-relaxed">
              {locale === "pt" ? <>
                <p>A Olla Trade Ltd. opera como um serviço de execução exclusiva e não fornece aconselhamento de investimento, gestão de carteiras ou quaisquer recomendações financeiras personalizadas. Nada neste site constitui aconselhamento de investimento ou uma solicitação para operar.</p>
                <p>O trading envolve risco. O valor dos seus investimentos pode subir ou descer. Você pode perder todo ou mais do que seu investimento inicial. O trading de CFDs com alavancagem carrega um alto nível de risco e não é adequado para todos os investidores.</p>
                <p>Estas divulgações de risco não constituem uma descrição completa de todos os riscos associados ao trading. Você deve buscar aconselhamento financeiro independente de um profissional qualificado antes de tomar qualquer decisão de trading.</p>
                <p><strong className="text-[#111827]">Olla Trade Ltd.</strong> está incorporada em Anguilla (Reg. Nº A000001849). Endereço registrado: Grace Complex, The Valley, AI 2640, Anguilla.</p>
              </> : <>
                <p>Olla Trade Ltd. operates as an execution-only service and does not provide investment advice, portfolio management, or any personalised financial recommendations. Nothing on this website constitutes investment advice or a solicitation to trade.</p>
                <p>Trading involves risk. The value of your investments may go up or down. You may lose all or more than your initial investment. CFD trading with leverage carries a high level of risk and is not suitable for all investors.</p>
                <p>These risk disclosures do not constitute a complete description of all risks associated with trading. You should seek independent financial advice from a qualified professional before making any trading decisions.</p>
                <p><strong className="text-[#111827]">Olla Trade Ltd.</strong> is incorporated in Anguilla (Reg. No. A000001849). Registered address: Grace Complex, The Valley, AI 2640, Anguilla.</p>
              </>}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={t("faq_title")}
        subtitle={t("faq_subtitle")}
        faqs={riskFaqs}
      />
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        primaryLabel={locale === "pt" ? "Abrir Conta" : "Open Account"}
        secondaryLabel={locale === "pt" ? "Contatar Suporte" : "Contact Support"}
        secondaryHref="/contact-us"
      />
    </>
  );
}
