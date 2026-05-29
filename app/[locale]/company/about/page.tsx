import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  ScaleIn,
  StaggerChildren,
  fadeUpItem,
} from "../../../components/ui/Animate";

/* ─────────────────────────────────────────────
   Static metadata
───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale !== "pt";
  return {
    title: isEn
      ? "About Olla Capital Financial Services | UAE SCA Regulated Broker"
      : "Sobre a Olla Capital Financial Services | Broker Regulado UAE SCA",
    description: isEn
      ? "Olla Capital Financial Services L.L.C. is a Dubai-based forex broker regulated by the UAE Securities and Commodities Authority (SCA). License No. 20200000416."
      : "Olla Capital Financial Services L.L.C. é uma corretora de forex sediada em Dubai, regulada pela Autoridade de Valores Mobiliários e Commodities dos Emirados Árabes Unidos (SCA).",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─────────────────────────────────────────────
   Inline SVG icons (no external dependency)
───────────────────────────────────────────── */
function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 2l7 3v5c0 5.5-3.5 10-7 11C8.5 20 5 15.5 5 10V5l7-3z" />
    </svg>
  );
}
function IconEye({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconUsers({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconZap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconGlobe({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function IconCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconBuilding({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}
function IconChart({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale !== "pt";

  /* ── Localised copy ─────────────────────────────────────── */
  const copy = {
    /* Section 1 — Hero */
    hero_badge:    isEn ? "About Us"                           : "Sobre Nós",
    hero_h1_a:     isEn ? "Regulated Broker."                  : "Corretora Regulada.",
    hero_h1_b:     isEn ? "Transparent Trading."               : "Trading Transparente.",
    hero_sub:      isEn
      ? "Olla Capital Financial Services L.L.C. is a Dubai-based forex and CFD broker licensed and regulated by the UAE Securities and Commodities Authority (SCA)."
      : "A Olla Capital Financial Services L.L.C. é uma corretora de forex e CFDs sediada em Dubai, licenciada e regulada pela Autoridade de Valores Mobiliários e Commodities dos Emirados Árabes Unidos (SCA).",

    /* Hero facts */
    fact1_label:   isEn ? "UAE SCA Regulated"    : "Regulada pela UAE SCA",
    fact2_label:   isEn ? "Dubai, UAE"            : "Dubai, EAU",
    fact3_label:   isEn ? "MT5 Platform"          : "Plataforma MT5",
    fact4_label:   isEn ? "500+ Instruments"      : "500+ Instrumentos",

    /* Section 2 — Our story */
    story_label:   isEn ? "Our Story"             : "Nossa História",
    story_title:   isEn ? "Who We Are"            : "Quem Somos",
    story_p1:      isEn
      ? "Olla Capital Financial Services L.L.C. is incorporated and headquartered in Dubai, United Arab Emirates. Operating under a licence issued by the UAE Securities and Commodities Authority (SCA), we provide retail and professional clients with direct access to global financial markets."
      : "A Olla Capital Financial Services L.L.C. está constituída e sediada em Dubai, Emirados Árabes Unidos. Operando sob licença emitida pela Autoridade de Valores Mobiliários e Commodities dos EAU (SCA), oferecemos a clientes de retalho e profissionais acesso direto aos mercados financeiros globais.",
    story_p2:      isEn
      ? "Our platform, MetaTrader 5, gives traders access to 500+ instruments spanning forex, indices, commodities, equities, and crypto CFDs. We are committed to fair execution, transparent pricing, and a client-first approach — with no hidden fees and clear trading conditions."
      : "Nossa plataforma, MetaTrader 5, oferece aos traders acesso a mais de 500 instrumentos, incluindo forex, índices, commodities, ações e CFDs de criptomoedas. Comprometemo-nos com execução justa, preços transparentes e uma abordagem centrada no cliente — sem taxas ocultas e com condições de trading claras.",
    story_p3:      isEn
      ? "Regulation by the SCA means we adhere to the financial services standards required under UAE law, including requirements around client money handling, disclosure, and conduct of business."
      : "A regulação pela SCA significa que aderimos aos padrões de serviços financeiros exigidos pela legislação dos EAU, incluindo requisitos relativos ao tratamento de fundos de clientes, divulgação e conduta nos negócios.",

    /* Company details card */
    card_title:       isEn ? "Company Details"                : "Detalhes da Empresa",
    card_reg_name:    isEn ? "Registered Name"                : "Nome Registado",
    card_regulator:   isEn ? "Regulator"                     : "Regulador",
    card_license:     isEn ? "License No."                   : "Número de Licença",
    card_address:     isEn ? "Registered Address"            : "Endereço Registado",
    card_contact:     isEn ? "Contact"                       : "Contacto",
    card_reg_name_v:  "Olla Capital Financial Services L.L.C.",
    card_regulator_v: "UAE Securities and Commodities Authority (SCA)",
    card_license_v:   "20200000416",
    card_address_v:   "Empire Heights Tower B, Business Bay, Dubai, UAE",
    card_contact_v:   "+971 4 236 4367",

    /* Section 3 — Values */
    values_label:  isEn ? "Our Values"            : "Nossos Valores",
    values_title:  isEn ? "What We Stand For"     : "O Que Defendemos",
    values_sub:    isEn
      ? "Four principles guide every decision we make at Olla Capital."
      : "Quatro princípios orientam todas as decisões que tomamos na Olla Capital.",

    /* Section 4 — Regulatory */
    reg_label:     isEn ? "Regulation"            : "Regulação",
    reg_title:     isEn ? "Regulatory Information" : "Informação Regulatória",
    reg_sub:       isEn
      ? "Understanding our regulatory status helps you trade with confidence."
      : "Compreender o nosso estatuto regulatório ajuda-o a operar com confiança.",
    reg_sca_title: isEn ? "UAE Securities and Commodities Authority"  : "Autoridade de Valores Mobiliários e Commodities dos EAU",
    reg_sca_desc:  isEn
      ? "The SCA is the federal financial regulatory authority responsible for regulating and developing the UAE's capital markets and investment services sector. Brokers licensed by the SCA are subject to ongoing supervision, capital requirements, and conduct-of-business rules designed to protect market participants."
      : "A SCA é a autoridade regulatória financeira federal responsável por regular e desenvolver os mercados de capitais dos EAU e o setor de serviços de investimento. Os corretores licenciados pela SCA estão sujeitos a supervisão contínua, requisitos de capital e regras de conduta empresarial destinadas a proteger os participantes no mercado.",
    reg_funds_title: isEn ? "Client Funds"        : "Fundos de Clientes",
    reg_funds_desc:  isEn
      ? "Client money is handled in accordance with UAE SCA requirements. Please review our Terms and Conditions and Risk Disclosures for full details on our client money arrangements."
      : "O dinheiro dos clientes é tratado de acordo com os requisitos da SCA dos EAU. Consulte os nossos Termos e Condições e Divulgações de Risco para obter detalhes completos sobre os nossos procedimentos de fundos de clientes.",
    reg_restrict_title: isEn ? "Restricted Jurisdictions" : "Jurisdições Restritas",
    reg_restrict_desc:  isEn
      ? "We do not provide services to residents of the United States, Canada, North Korea, Iran, or any jurisdiction where the distribution of our services would be contrary to local law or regulation. It is your responsibility to ensure that using our services is lawful in your jurisdiction."
      : "Não fornecemos serviços a residentes dos Estados Unidos, Canadá, Coreia do Norte, Irão ou qualquer jurisdição onde a distribuição dos nossos serviços seja contrária à legislação ou regulamentação local. É da sua responsabilidade garantir que a utilização dos nossos serviços é lícita na sua jurisdição.",
    reg_risk_title: isEn ? "Risk Warning"         : "Aviso de Risco",
    reg_risk_desc:  isEn
      ? "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Trading foreign exchange and other leveraged products involves significant risk and may not be suitable for all investors."
      : "Os CFDs são instrumentos complexos e apresentam um elevado risco de perda rápida de dinheiro devido à alavancagem. Deve considerar se compreende o funcionamento dos CFDs e se pode suportar o elevado risco de perder o seu dinheiro. O trading de câmbio estrangeiro e outros produtos alavancados envolve riscos significativos e pode não ser adequado para todos os investidores.",

    /* Section 5 — Why choose */
    why_label:     isEn ? "Why Olla"             : "Por Que Olla",
    why_title:     isEn ? "Why Choose Olla Trade" : "Por Que Escolher a Olla Trade",
    why_sub:       isEn
      ? "A regulated, transparent, and technology-driven trading environment."
      : "Um ambiente de trading regulado, transparente e orientado pela tecnologia.",

    /* Section 6 — CTA */
    cta_title:     isEn ? "Open an Account with a Regulated Broker" : "Abra uma Conta com uma Corretora Regulada",
    cta_sub:       isEn
      ? "Join traders who benefit from UAE SCA regulation, the MetaTrader 5 platform, and 500+ instruments."
      : "Junte-se a traders que beneficiam da regulação da SCA dos EAU, da plataforma MetaTrader 5 e de mais de 500 instrumentos.",
    cta_open:      isEn ? "Open Live Account"     : "Abrir Conta Real",
    cta_demo:      isEn ? "Try Demo First"        : "Experimentar Demo",

    /* Nav */
    crumb_company: isEn ? "Company"               : "Empresa",
    crumb_about:   isEn ? "About Us"              : "Sobre Nós",
  };

  const values = [
    {
      Icon: IconEye,
      title: isEn ? "Transparency" : "Transparência",
      desc:  isEn
        ? "Clear pricing, competitive spreads, and no hidden fees. What you see in our trading conditions is what you get."
        : "Preços claros, spreads competitivos e sem taxas ocultas. O que vê nas nossas condições de trading é o que recebe.",
    },
    {
      Icon: IconShield,
      title: isEn ? "Regulation" : "Regulação",
      desc:  isEn
        ? "Licensed and continuously supervised by the UAE Securities and Commodities Authority (SCA), License No. 20200000416."
        : "Licenciados e supervisionados continuamente pela Autoridade de Valores Mobiliários e Commodities dos EAU (SCA), Licença N.º 20200000416.",
    },
    {
      Icon: IconUsers,
      title: isEn ? "Client First" : "Cliente em Primeiro",
      desc:  isEn
        ? "Multilingual support, a straightforward onboarding process, and client protections embedded in our operating standards."
        : "Suporte multilíngue, um processo de integração simples e proteções ao cliente incorporadas nos nossos padrões operacionais.",
    },
    {
      Icon: IconZap,
      title: isEn ? "Innovation" : "Inovação",
      desc:  isEn
        ? "MetaTrader 5 platform, advanced charting, Expert Advisors, and a continuously expanding suite of tradeable instruments."
        : "Plataforma MetaTrader 5, análise técnica avançada, Expert Advisors e uma suite de instrumentos negociáveis em expansão contínua.",
    },
  ];

  const whyReasons = [
    {
      Icon: IconShield,
      title: isEn ? "UAE SCA Regulated"          : "Regulada pela SCA dos EAU",
      desc:  isEn
        ? "Licensed by the UAE Securities and Commodities Authority. Our regulatory status provides a framework of client protection and business conduct standards."
        : "Licenciada pela Autoridade de Valores Mobiliários e Commodities dos EAU. O nosso estatuto regulatório proporciona um enquadramento de proteção ao cliente e padrões de conduta empresarial.",
    },
    {
      Icon: IconChart,
      title: isEn ? "MetaTrader 5 Platform"       : "Plataforma MetaTrader 5",
      desc:  isEn
        ? "Trade on the industry-leading MT5 platform — available on desktop, web browser, iOS, and Android with full charting and EA support."
        : "Opere na plataforma MT5 líder do setor — disponível em desktop, browser, iOS e Android com análise técnica completa e suporte a EA.",
    },
    {
      Icon: IconGlobe,
      title: isEn ? "500+ Tradeable Instruments"  : "500+ Instrumentos Negociáveis",
      desc:  isEn
        ? "Access forex pairs, global indices, commodities, equities, and crypto CFDs — all from a single trading account."
        : "Aceda a pares de forex, índices globais, commodities, ações e CFDs de criptomoedas — tudo a partir de uma única conta de trading.",
    },
    {
      Icon: IconEye,
      title: isEn ? "Transparent Pricing"         : "Preços Transparentes",
      desc:  isEn
        ? "Competitive spreads with no hidden fees. Our pricing structure is disclosed upfront so you know your trading costs before you trade."
        : "Spreads competitivos sem taxas ocultas. A nossa estrutura de preços é divulgada antecipadamente para que conheça os seus custos de trading antes de operar.",
    },
    {
      Icon: IconBuilding,
      title: isEn ? "Dubai-Based Operations"      : "Operações Sediadas em Dubai",
      desc:  isEn
        ? "Headquartered at Empire Heights Tower B, Business Bay, Dubai — operating under the regulatory framework of the UAE financial system."
        : "Com sede no Empire Heights Tower B, Business Bay, Dubai — operando sob o enquadramento regulatório do sistema financeiro dos EAU.",
    },
    {
      Icon: IconUsers,
      title: isEn ? "Multi-Lingual Support"       : "Suporte Multilíngue",
      desc:  isEn
        ? "Our client support team is available 24/5 and communicates in multiple languages to serve our internationally diverse client base."
        : "A nossa equipa de suporte ao cliente está disponível 24/5 e comunica em múltiplos idiomas para servir a nossa base de clientes internacionalmente diversificada.",
    },
  ];

  /* ── Hero key facts ─────────────────────────────────────── */
  const heroFacts = [
    { label: copy.fact1_label, icon: <IconShield className="w-4 h-4" /> },
    { label: copy.fact2_label, icon: <IconBuilding className="w-4 h-4" /> },
    { label: copy.fact3_label, icon: <IconChart className="w-4 h-4" /> },
    { label: copy.fact4_label, icon: <IconGlobe className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="hero-bg relative overflow-hidden bg-white">
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,144,195,1) 1px,transparent 1px),linear-gradient(90deg,rgba(26,144,195,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse,rgba(26,144,195,0.07) 0%,transparent 70%)" }}
        />

        {/* Breadcrumb */}
        <div className="relative container-wide section-py pb-0 pt-6">
          <nav className="flex items-center gap-1.5 text-[12px] text-[#6B7280] mb-8">
            <Link href="/" className="hover:text-[#1A90C3] transition-colors">
              {isEn ? "Home" : "Início"}
            </Link>
            <span className="text-[#E5E7EB]">/</span>
            <Link href="/company" className="hover:text-[#1A90C3] transition-colors">
              {copy.crumb_company}
            </Link>
            <span className="text-[#E5E7EB]">/</span>
            <span className="text-[#111827] font-medium">{copy.crumb_about}</span>
          </nav>
        </div>

        <div className="relative container-narrow section-py pt-4 pb-16 text-center">
          <FadeUp>
            <span className="badge badge-navy mb-5 inline-flex">
              {copy.hero_badge}
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#07111F] leading-tight mb-6">
              <span className="text-gradient">{copy.hero_h1_a}</span>
              <br />
              {copy.hero_h1_b}
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-[17px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-10">
              {copy.hero_sub}
            </p>
          </FadeUp>

          {/* Key facts bar */}
          <FadeIn delay={0.22}>
            <div className="inline-flex flex-wrap justify-center gap-3">
              {heroFacts.map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-[#EBF5FB] border border-[#1A90C3]/20 text-[#07111F] text-[13px] font-semibold px-4 py-2 rounded-full"
                >
                  <span className="text-[#1A90C3]">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — OUR STORY  (split layout)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — narrative */}
            <SlideLeft>
              <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4">
                {copy.story_label}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-6 leading-tight">
                {copy.story_title}
              </h2>
              <div className="space-y-4 text-[15px] text-[#6B7280] leading-relaxed">
                <p>{copy.story_p1}</p>
                <p>{copy.story_p2}</p>
                <p>{copy.story_p3}</p>
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary btn-sm"
                >
                  {isEn ? "Open Account" : "Abrir Conta"}
                </Link>
                <Link href="/company/contact" className="btn-secondary btn-sm">
                  {isEn ? "Contact Us" : "Contacte-Nos"}
                </Link>
              </div>
            </SlideLeft>

            {/* Right — company details card */}
            <SlideRight>
              <div className="card rounded-2xl p-7 border border-[#E5E7EB] bg-[#F6F8FB] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] border border-[#1A90C3]/20 flex items-center justify-center text-[#1A90C3] flex-shrink-0">
                    <IconShield className="w-5 h-5" />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#111827]">{copy.card_title}</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: copy.card_reg_name,   value: copy.card_reg_name_v   },
                    { label: copy.card_regulator,  value: copy.card_regulator_v  },
                    { label: copy.card_license,    value: copy.card_license_v    },
                    { label: copy.card_address,    value: copy.card_address_v    },
                    { label: copy.card_contact,    value: copy.card_contact_v    },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5 pb-4 border-b border-[#E5E7EB] last:border-b-0 last:pb-0">
                      <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="text-[14px] font-semibold text-[#111827] leading-snug">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                {/* SCA verification note */}
                <div className="mt-5 flex items-start gap-2 bg-[#EBF5FB] rounded-xl px-4 py-3 border border-[#1A90C3]/15">
                  <IconCheck className="w-4 h-4 text-[#1A90C3] flex-shrink-0 mt-0.5" />
                  <p className="text-[12px] text-[#07111F] leading-relaxed">
                    {isEn
                      ? "Regulated and supervised by the UAE Securities and Commodities Authority (SCA)"
                      : "Regulada e supervisionada pela Autoridade de Valores Mobiliários e Commodities dos EAU (SCA)"}
                  </p>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — OUR VALUES
      ══════════════════════════════════════════════════════ */}
      <section className="section-gray section-py">
        <div className="container-wide">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest block mb-3">
                {copy.values_label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4 leading-tight">
                {copy.values_title}
              </h2>
              <p className="text-[16px] text-[#6B7280] max-w-xl mx-auto">
                {copy.values_sub}
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="card card-hover bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col gap-4"
                // @ts-expect-error framer-motion variant
                variants={fadeUpItem}
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] border border-[#1A90C3]/20 flex items-center justify-center text-[#1A90C3] flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — REGULATORY INFORMATION
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest block mb-3">
                {copy.reg_label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4 leading-tight">
                {copy.reg_title}
              </h2>
              <p className="text-[16px] text-[#6B7280] max-w-xl mx-auto">
                {copy.reg_sub}
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* SCA block */}
            <ScaleIn>
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F6F8FB] p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] border border-[#1A90C3]/20 flex items-center justify-center text-[#1A90C3] flex-shrink-0">
                    <IconShield className="w-4 h-4" />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#111827]">{copy.reg_sca_title}</h3>
                </div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4">
                  {copy.reg_sca_desc}
                </p>
                <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-3 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">
                    {isEn ? "Olla Capital Financial Services L.L.C." : "Olla Capital Financial Services L.L.C."}
                  </span>
                  <span className="text-[13px] font-semibold text-[#111827]">
                    {isEn ? "License No. 20200000416" : "Licença N.º 20200000416"}
                  </span>
                </div>
              </div>
            </ScaleIn>

            {/* Client funds block */}
            <ScaleIn delay={0.08}>
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F6F8FB] p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] border border-[#1A90C3]/20 flex items-center justify-center text-[#1A90C3] flex-shrink-0">
                    <IconUsers className="w-4 h-4" />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#111827]">{copy.reg_funds_title}</h3>
                </div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4">
                  {copy.reg_funds_desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/legal/terms" className="text-[12px] font-semibold text-[#1A90C3] hover:text-[#07111F] transition-colors underline underline-offset-4">
                    {isEn ? "Terms & Conditions" : "Termos e Condições"}
                  </Link>
                  <Link href="/legal/risk-disclosures" className="text-[12px] font-semibold text-[#1A90C3] hover:text-[#07111F] transition-colors underline underline-offset-4">
                    {isEn ? "Risk Disclosures" : "Divulgações de Risco"}
                  </Link>
                </div>
              </div>
            </ScaleIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Restricted jurisdictions */}
            <FadeUp delay={0.05}>
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F6F8FB] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] border border-[#1A90C3]/20 flex items-center justify-center text-[#1A90C3] flex-shrink-0">
                    <IconGlobe className="w-4 h-4" />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#111827]">{copy.reg_restrict_title}</h3>
                </div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">
                  {copy.reg_restrict_desc}
                </p>
              </div>
            </FadeUp>

            {/* Risk warning */}
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <h3 className="text-[14px] font-bold text-[#111827]">{copy.reg_risk_title}</h3>
                </div>
                <p className="text-[13px] text-amber-800/80 leading-relaxed">
                  {copy.reg_risk_desc}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — WHY CHOOSE Olla
      ══════════════════════════════════════════════════════ */}
      <section className="section-gray section-py">
        <div className="container-wide">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest block mb-3">
                {copy.why_label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4 leading-tight">
                {copy.why_title}
              </h2>
              <p className="text-[16px] text-[#6B7280] max-w-xl mx-auto">
                {copy.why_sub}
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyReasons.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="card card-hover bg-white rounded-2xl border border-[#E5E7EB] p-6"
                // @ts-expect-error framer-motion variant
                variants={fadeUpItem}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] border border-[#1A90C3]/20 flex items-center justify-center text-[#1A90C3] flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#111827] mb-1.5">{title}</h3>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — CTA (dark navy)
      ══════════════════════════════════════════════════════ */}
      <section className="hero-navy bg-[#07111F] section-py relative overflow-hidden">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: "radial-gradient(ellipse,rgba(26,144,195,0.12) 0%,transparent 70%)" }}
        />

        <div className="relative container-narrow text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 bg-[#1A90C3]/15 border border-[#1A90C3]/25 text-[#1A90C3] text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <IconShield className="w-3.5 h-3.5" />
              {isEn ? "UAE SCA Regulated" : "Regulada UAE SCA"}
            </span>
          </FadeUp>

          <FadeUp delay={0.07}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              {copy.cta_title}
            </h2>
          </FadeUp>

          <FadeUp delay={0.13}>
            <p className="text-[17px] text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
              {copy.cta_sub}
            </p>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#1A90C3] hover:bg-[#1580b0] text-white font-bold px-8 py-3.5 rounded-xl text-[15px] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1A90C3]/25"
              >
                {copy.cta_open}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="https://portal.ollatrade.com/auth/register?demo=1"
                className="inline-flex items-center gap-2 border border-white/15 text-white/75 hover:text-white hover:border-white/30 font-semibold px-8 py-3.5 rounded-xl text-[15px] transition-all"
              >
                {copy.cta_demo}
              </Link>
            </div>
          </FadeUp>

          {/* Regulatory footer note */}
          <FadeIn delay={0.25}>
            <p className="mt-10 text-[12px] text-white/25 max-w-2xl mx-auto leading-relaxed">
              {isEn
                ? "Olla Capital Financial Services L.L.C. — Regulated by the UAE Securities and Commodities Authority (SCA), License No. 20200000416. Registered at Empire Heights Tower B, Business Bay, Dubai, UAE. Trading CFDs involves significant risk. Please read our Risk Disclosures before opening an account."
                : "Olla Capital Financial Services L.L.C. — Regulada pela Autoridade de Valores Mobiliários e Commodities dos EAU (SCA), Licença N.º 20200000416. Registada no Empire Heights Tower B, Business Bay, Dubai, EAU. O trading de CFDs envolve riscos significativos. Leia as nossas Divulgações de Risco antes de abrir uma conta."}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
