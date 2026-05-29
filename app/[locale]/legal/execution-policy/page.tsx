import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/constants";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Order Execution Policy",
  description: "Olla Trade formal Order Execution Policy — scope, execution approach, pricing, slippage, order handling, conflicts of interest, and policy review.",
};

const effective = "1 January 2025";
const reviewed  = "1 January 2026";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-[18px] font-bold text-[#111827] mb-4 pb-3 border-b border-gray-100">{title}</h2>
      <div className="text-[13px] text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ExecutionPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.execution" });
  const sectionsList = t.raw("sections_list") as string[];
  const isPT = locale === "pt";

  const relatedDocs = isPT ? [
    { label: "Informações de Execução",  href: "/execution-information",  desc: "Explicação amigável sobre execução de ordens e preços." },
    { label: "Termos e Condições",       href: "/legal/terms",            desc: "Termos completos que regem o uso dos serviços da Olla Trade." },
    { label: "Divulgações de Risco",     href: "/legal/risk-disclosures", desc: "Avisos de risco detalhados para trading de Forex e CFDs." },
    { label: "Condições de Trading",     href: "/trading/conditions",     desc: "Spreads, alavancagem e condições de conta por instrumento." },
  ] : [
    { label: "Execution Information",  href: "/execution-information",  desc: "Client-friendly explanation of order execution and pricing." },
    { label: "Terms & Conditions",     href: "/legal/terms",            desc: "Full terms governing your use of Olla Trade services." },
    { label: "Risk Disclosures",       href: "/legal/risk-disclosures", desc: "Detailed risk warnings for Forex and CFD trading." },
    { label: "Trading Conditions",     href: "/trading/conditions",     desc: "Spreads, leverage, and account conditions by instrument." },
  ];

  const contactRows = isPT ? [
    ["Empresa", SITE.companyName], ["E-mail", SITE.email], ["Telefone", SITE.phone], ["Endereço", SITE.address], ["Reg. Nº", `A${SITE.regNumber}`],
  ] : [
    ["Company", SITE.companyName], ["Email", SITE.email], ["Phone", SITE.phone], ["Address", SITE.address], ["Reg. No.", `A${SITE.regNumber}`],
  ];

  return (
    <>
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">{t("home_crumb")}</Link>
            <span className="text-white/10">/</span>
            <Link href="/company/legal" className="hover:text-white/45 transition-colors">{t("legal_crumb")}</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">{t("title")}</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-5">{t("hero_badge")}</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">{t("hero_title")}</h1>
          <p className="text-[16px] text-white/40 max-w-2xl leading-relaxed mb-8">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <div className="bg-white/4 border border-white/8 rounded-lg px-4 py-2">
              <span className="text-white/30">{t("effective_label")} </span>
              <span className="text-white/60 font-semibold">{effective}</span>
            </div>
            <div className="bg-white/4 border border-white/8 rounded-lg px-4 py-2">
              <span className="text-white/30">{t("reviewed_label")} </span>
              <span className="text-white/60 font-semibold">{reviewed}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#0A1220] border-b border-white/6 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/35">{t("crosslink_text")}</p>
          <Link href="/execution-information" className="text-[12px] font-semibold text-[#29B5D4] hover:text-[#1FA5C4] transition-colors flex items-center gap-1.5 flex-shrink-0">
            {t("crosslink_link")}
          </Link>
        </div>
      </div>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <aside className="lg:w-60 flex-shrink-0 lg:sticky lg:top-24">
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">{t("toc_label")}</div>
                <nav className="space-y-1">
                  {sectionsList.map((s, i) => (
                    <a key={s} href={`#s${i + 1}`} className="flex items-center gap-2 text-[12px] text-gray-500 hover:text-[#29B5D4] transition-colors py-0.5">
                      <span className="text-[10px] font-bold text-gray-300 w-5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      {s}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1 space-y-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-10">

                {isPT ? <>
                  <Section id="s1" title="1. Finalidade">
                    <p>Esta Política de Execução de Ordens (&quot;Política&quot;) estabelece a abordagem adotada pela Olla Trade Ltd. (&quot;a Empresa&quot;, &quot;nós&quot;) para a execução de ordens de clientes em instrumentos financeiros.</p>
                    <p>O objetivo desta Política é fornecer aos clientes uma explicação clara e transparente de como a Empresa executa ordens, os fatores que considera e as condições em que a execução ocorre.</p>
                    <p>Esta Política faz parte do contrato do cliente da Empresa e deve ser lida em conjunto com os Termos e Condições.</p>
                  </Section>
                  <Section id="s2" title="2. Âmbito">
                    <p>Esta Política aplica-se a todos os clientes da Olla Trade Ltd. que negociam instrumentos financeiros através da plataforma MetaTrader 4. Abrange todas as classes de ativos oferecidas pela Empresa, incluindo Forex, Metais, Índices, Energias, Criptomoedas e Ações.</p>
                    <p>Esta Política aplica-se a todos os tipos de ordem suportados pela Empresa, incluindo Ordens a Mercado, Ordens Limite, Ordens Stop, ordens Stop Loss e ordens Take Profit.</p>
                  </Section>
                  <Section id="s3" title="3. Abordagem de Execução de Ordens">
                    <p>A Olla Trade opera com base na execução a mercado para todas as contas de clientes. Neste modelo, as ordens são transmitidas e executadas ao melhor preço de mercado disponível no momento do processamento, conforme obtido dos provedores de liquidez da Empresa.</p>
                    <p>A Empresa atua como principal em todas as transações. As ordens não são enviadas para uma bolsa ou mercado regulamentado. Em vez disso, são executadas através do motor de preços interno da Empresa e do pool de liquidez.</p>
                    <p>A Empresa não usa uma mesa de operações para a execução rotineira de ordens. As ordens são processadas eletronicamente sem intervenção manual do operador sob condições normais de mercado.</p>
                  </Section>
                  <Section id="s4" title="4. Fatores de Execução">
                    <p>Para determinar o melhor resultado de execução para os clientes, a Empresa considera os seguintes fatores, listados em ordem de prioridade geral:</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong className="text-[#111827]">Preço:</strong> O preço ao qual a ordem é executada, em relação ao preço atual de mercado.</li>
                      <li><strong className="text-[#111827]">Custo:</strong> Quaisquer custos explícitos associados à execução, incluindo o spread. A Empresa não cobra comissões por operação.</li>
                      <li><strong className="text-[#111827]">Velocidade de execução:</strong> O tempo necessário para processar e preencher a ordem desde o momento do envio.</li>
                      <li><strong className="text-[#111827]">Probabilidade de execução:</strong> A probabilidade de que a ordem seja preenchida no preço solicitado ou próximo a ele, dada a liquidez atual.</li>
                      <li><strong className="text-[#111827]">Tamanho da ordem:</strong> Ordens maiores podem exigir execução em vários níveis de preço se a profundidade de mercado for insuficiente.</li>
                      <li><strong className="text-[#111827]">Natureza da ordem:</strong> Tipos diferentes de ordem (Mercado, Limite, Stop) são tratados de forma diferente em relação ao preço e tempo.</li>
                    </ul>
                  </Section>
                  <Section id="s5" title="5. Preços e Spreads">
                    <p>A Empresa deriva seus preços de cotações agregadas fornecidas por seus provedores de liquidez. Os preços de compra e venda exibidos na plataforma MetaTrader 4 refletem os melhores preços disponíveis desse pool de liquidez em qualquer momento.</p>
                    <p>Todos os spreads oferecidos pela Empresa são variáveis e refletem as condições de mercado vigentes. Os spreads indicativos mostrados no site da Empresa representam os spreads mínimos alcançáveis sob condições normais de mercado e não são garantidos em todos os momentos.</p>
                    <p>A receita da Empresa é derivada do spread entre o preço de compra e venda. Nenhuma comissão separada é cobrada em operações padrão.</p>
                  </Section>
                  <Section id="s6" title="6. Liquidez e Condições de Mercado">
                    <p>A qualidade da execução é diretamente afetada pela liquidez de mercado disponível. Durante períodos de alta volatilidade — incluindo grandes divulgações de dados econômicos, anúncios de bancos centrais, eventos geopolíticos e períodos de abertura e fechamento de mercado — a liquidez pode ser reduzida.</p>
                    <p>Sob condições de baixa liquidez, os spreads podem aumentar significativamente, e as ordens podem ser executadas a preços que diferem materialmente do preço solicitado. A Empresa não garante execução a qualquer preço específico sob todas as condições de mercado.</p>
                  </Section>
                  <Section id="s7" title="7. Derrapagem">
                    <p>A derrapagem refere-se à diferença entre o preço pelo qual um cliente solicita a execução de uma ordem e o preço ao qual ela é realmente preenchida. A derrapagem é uma característica inerente da execução a mercado e pode ser positiva (preenchida a um preço melhor) ou negativa (preenchida a um preço pior).</p>
                    <p>A derrapagem é mais provável de ocorrer durante períodos de alta volatilidade de mercado, baixa liquidez, movimento rápido de preços ou em torno de eventos significativos de notícias econômicas. A Empresa não garante execução ao preço exato solicitado pelo cliente sob nenhuma condição de mercado.</p>
                    <p>A Empresa não manipula artificialmente a derrapagem em seu favor. A derrapagem reflete condições genuínas de mercado no momento da execução da ordem.</p>
                  </Section>
                  <Section id="s8" title="8. Requotes">
                    <p>O modelo de execução a mercado da Empresa não envolve requotes. Todas as ordens enviadas pelos clientes são aceitas e executadas ao melhor preço de mercado disponível no momento do processamento. Os clientes não serão solicitados a aceitar um preço diferente antes que sua ordem seja preenchida.</p>
                  </Section>
                  <Section id="s9" title="9. Tipos de Ordem Suportados">
                    <p>A Empresa suporta os seguintes tipos de ordem na plataforma MetaTrader 4:</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong className="text-[#111827]">Ordem a Mercado:</strong> Executada imediatamente ao melhor preço de mercado disponível.</li>
                      <li><strong className="text-[#111827]">Ordem Limite:</strong> Executada ao preço especificado ou melhor.</li>
                      <li><strong className="text-[#111827]">Ordem Stop:</strong> Disparada quando o mercado atinge o preço especificado, então executada como uma ordem a mercado.</li>
                      <li><strong className="text-[#111827]">Stop Loss:</strong> Instrução para fechar automaticamente uma posição se o mercado se mover contra o cliente até um preço especificado.</li>
                      <li><strong className="text-[#111827]">Take Profit:</strong> Instrução para fechar automaticamente uma posição quando o mercado atingir uma meta de lucro especificada.</li>
                      <li><strong className="text-[#111827]">Stop Móvel:</strong> Um stop loss dinâmico que se ajusta conforme o mercado se move a favor do cliente.</li>
                    </ul>
                  </Section>
                  <Section id="s10" title="10. Instruções Específicas do Cliente">
                    <p>Quando um cliente fornece instruções específicas sobre a execução de uma ordem — como um preço, hora ou local específico — a Empresa seguirá essas instruções na medida do razoavelmente praticável.</p>
                    <p>Seguir instruções específicas do cliente pode impedir que a Empresa alcance o melhor resultado de execução possível em relação a fatores não cobertos por essas instruções.</p>
                  </Section>
                  <Section id="s11" title="11. Perturbação do Mercado">
                    <p>Em caso de perturbação do mercado, incluindo falhas técnicas, erros de comunicação, paralisações de bolsa ou condições extraordinárias de mercado, a Empresa reserva-se o direito de tomar medidas adequadas para proteger os interesses dos clientes e a integridade de seus sistemas.</p>
                  </Section>
                  <Section id="s12" title="12. Conflitos de Interesse">
                    <p>Como a Empresa atua como principal em todas as transações, existe um potencial conflito de interesse entre a Empresa e seus clientes em relação a preços e execução. A Empresa mantém procedimentos internos para identificar, gerenciar e mitigar conflitos de interesse.</p>
                    <p>Os preços são derivados de provedores de liquidez externos e refletem condições genuínas de mercado. O motor de preços da Empresa não é projetado para sistematicamente prejudicar os clientes.</p>
                  </Section>
                  <Section id="s13" title="13. Responsabilidade do Cliente">
                    <p>Os clientes são responsáveis por garantir que compreendem os tipos de ordem e o modelo de execução antes de operar. Os clientes são responsáveis por fornecer instruções de ordem precisas e por manter margem suficiente em suas contas.</p>
                  </Section>
                  <Section id="s14" title="14. Monitoramento e Revisão">
                    <p>A Empresa monitora regularmente sua qualidade de execução e desempenho dos provedores de liquidez para identificar qualquer degradação nos padrões de execução.</p>
                    <p>Esta Política é revisada pelo menos anualmente, e com mais frequência se ocorrerem mudanças materiais. Os clientes serão notificados sobre mudanças materiais nesta Política.</p>
                  </Section>
                  <Section id="s15" title="15. Divulgação de Risco">
                    <p>O trading de Forex e CFDs envolve risco significativo de perda. O trading alavancado amplifica tanto os lucros potenciais quanto as perdas potenciais. É possível perder mais do que o depósito inicial.</p>
                    <p>Os clientes devem ler as <Link href="/legal/risk-disclosures" className="text-[#29B5D4] hover:underline font-semibold">Divulgações de Risco</Link> completas antes de operar.</p>
                  </Section>
                  <Section id="s16" title="16. Informações de Contato">
                    <p>Para consultas sobre esta Política ou execução de ordens, entre em contato:</p>
                    <div className="bg-[#F5F7FA] border border-gray-100 rounded-xl p-5 not-prose">
                      <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
                        {contactRows.map(([label, value]) => (
                          <div key={label}>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                            <div className="text-gray-700">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Section>
                </> : <>
                  <Section id="s1" title="1. Purpose">
                    <p>This Order Execution Policy (&quot;Policy&quot;) sets out the approach adopted by Olla Trade Ltd. (&quot;the Company&quot;, &quot;we&quot;, &quot;us&quot;) for the execution of client orders in financial instruments.</p>
                    <p>The purpose of this Policy is to provide clients with a clear and transparent explanation of how the Company executes orders, the factors it takes into account, and the conditions under which execution takes place.</p>
                    <p>This Policy forms part of the Company&apos;s client agreement and should be read in conjunction with the Terms and Conditions.</p>
                  </Section>
                  <Section id="s2" title="2. Scope">
                    <p>This Policy applies to all clients of Olla Trade Ltd. who trade financial instruments through the MetaTrader 4 platform. It covers all asset classes offered by the Company, including Forex, Metals, Indices, Energies, Cryptocurrencies, and Stocks.</p>
                    <p>This Policy applies to all order types supported by the Company, including Market Orders, Limit Orders, Stop Orders, Stop Loss orders, and Take Profit orders.</p>
                  </Section>
                  <Section id="s3" title="3. Order Execution Approach">
                    <p>Olla Trade operates on a market execution basis for all client accounts. Orders are transmitted and executed at the best available market price at the time of processing, as sourced from the Company&apos;s liquidity providers.</p>
                    <p>The Company acts as principal in all transactions. Orders are not passed to an exchange or regulated market. They are executed through the Company&apos;s internal pricing engine and liquidity pool.</p>
                    <p>The Company does not use a dealing desk for routine order execution. Orders are processed electronically without manual dealer intervention under normal market conditions.</p>
                  </Section>
                  <Section id="s4" title="4. Execution Factors">
                    <p>In determining the best execution outcome for clients, the Company considers the following factors, listed in order of general priority:</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong className="text-[#111827]">Price:</strong> The price at which the order is executed, relative to the current market price.</li>
                      <li><strong className="text-[#111827]">Cost:</strong> Any explicit costs associated with execution, including the spread. The Company does not charge per-trade commissions.</li>
                      <li><strong className="text-[#111827]">Speed of execution:</strong> The time taken to process and fill the order from the moment of submission.</li>
                      <li><strong className="text-[#111827]">Likelihood of execution:</strong> The probability that the order will be filled at or near the requested price, given current liquidity.</li>
                      <li><strong className="text-[#111827]">Size of order:</strong> Larger orders may require execution across multiple price levels if market depth is insufficient.</li>
                      <li><strong className="text-[#111827]">Nature of the order:</strong> Different order types are handled differently with respect to price and timing.</li>
                    </ul>
                  </Section>
                  <Section id="s5" title="5. Pricing and Spreads">
                    <p>The Company derives its prices from aggregated quotes provided by its liquidity providers. All spreads are variable and reflect prevailing market conditions. Indicative spreads shown on the Company&apos;s website represent the minimum spreads achievable under normal market conditions and are not guaranteed at all times.</p>
                    <p>The Company&apos;s revenue is derived from the spread between the bid and ask price. No separate commission is charged on standard trades.</p>
                  </Section>
                  <Section id="s6" title="6. Liquidity and Market Conditions">
                    <p>Execution quality is directly affected by available market liquidity. During periods of high market volatility — including major economic data releases, central bank announcements, geopolitical events — liquidity may be reduced and execution conditions may differ from normal conditions.</p>
                    <p>Under low-liquidity conditions, spreads may widen significantly, and orders may be executed at prices that differ materially from the requested price.</p>
                  </Section>
                  <Section id="s7" title="7. Slippage">
                    <p>Slippage refers to the difference between the price at which a client requests an order to be executed and the price at which it is actually filled. Slippage can be positive (filled at a better price) or negative (filled at a worse price).</p>
                    <p>The Company does not artificially manipulate slippage in its favour. Slippage reflects genuine market conditions at the time of order execution.</p>
                  </Section>
                  <Section id="s8" title="8. Requotes">
                    <p>The Company&apos;s market execution model does not involve requotes. All orders submitted by clients are accepted and executed at the best available market price at the time of processing.</p>
                  </Section>
                  <Section id="s9" title="9. Supported Order Types">
                    <p>The Company supports the following order types on the MetaTrader 4 platform:</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong className="text-[#111827]">Market Order:</strong> Executed immediately at the current best available market price.</li>
                      <li><strong className="text-[#111827]">Limit Order:</strong> Executed at the specified price or better.</li>
                      <li><strong className="text-[#111827]">Stop Order:</strong> Triggered when the market reaches the specified price, then executed as a market order.</li>
                      <li><strong className="text-[#111827]">Stop Loss:</strong> Closes a position automatically if the market moves against the client to a specified price.</li>
                      <li><strong className="text-[#111827]">Take Profit:</strong> Closes a position automatically when the market reaches a specified profit target.</li>
                      <li><strong className="text-[#111827]">Trailing Stop:</strong> A dynamic stop loss that adjusts as the market moves in the client&apos;s favour.</li>
                    </ul>
                  </Section>
                  <Section id="s10" title="10. Specific Client Instructions">
                    <p>Where a client provides specific instructions regarding the execution of an order, the Company will follow those instructions to the extent reasonably practicable.</p>
                  </Section>
                  <Section id="s11" title="11. Market Disruption">
                    <p>In the event of market disruption, including technical failures, communication errors, or extraordinary market conditions, the Company reserves the right to take appropriate actions including temporarily suspending trading, widening spreads, or voiding transactions executed at erroneous prices.</p>
                  </Section>
                  <Section id="s12" title="12. Conflicts of Interest">
                    <p>As the Company acts as principal in all transactions, a potential conflict of interest exists. The Company maintains internal procedures to identify, manage, and mitigate conflicts of interest. Pricing is derived from external liquidity providers and reflects genuine market conditions.</p>
                  </Section>
                  <Section id="s13" title="13. Client Responsibility">
                    <p>Clients are responsible for ensuring they understand the order types and execution model before trading, and for maintaining sufficient margin in their accounts.</p>
                  </Section>
                  <Section id="s14" title="14. Monitoring and Review">
                    <p>The Company regularly monitors its execution quality and liquidity provider performance. This Policy is reviewed at least annually. Clients will be notified of material changes to this Policy.</p>
                  </Section>
                  <Section id="s15" title="15. Risk Disclosure">
                    <p>Trading Forex and CFDs involves significant risk of loss. It is possible to lose more than your initial deposit.</p>
                    <p>Clients should read the full <Link href="/legal/risk-disclosures" className="text-[#29B5D4] hover:underline font-semibold">Risk Disclosures</Link> before trading.</p>
                  </Section>
                  <Section id="s16" title="16. Contact Information">
                    <p>For queries regarding this Policy or order execution, please contact:</p>
                    <div className="bg-[#F5F7FA] border border-gray-100 rounded-xl p-5 not-prose">
                      <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
                        {contactRows.map(([label, value]) => (
                          <div key={label}>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                            <div className="text-gray-700">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Section>
                </>}

              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">
                  {isPT ? "Documentos Relacionados" : "Related Documents"}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {relatedDocs.map(({ label, href, desc }) => (
                    <Link key={label} href={href}
                      className="flex items-start gap-3 p-4 border border-gray-100 rounded-xl hover:border-[#29B5D4]/20 hover:bg-[#F5F7FA] transition-all group">
                      <div className="w-2 h-2 rounded-full bg-[#29B5D4] flex-shrink-0 mt-1.5" />
                      <div>
                        <div className="text-[13px] font-bold text-[#111827] group-hover:text-[#29B5D4] transition-colors">{label}</div>
                        <div className="text-[11px] text-gray-400 leading-relaxed mt-0.5">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
