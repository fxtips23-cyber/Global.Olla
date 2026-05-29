import type { Metadata } from "next";
import Link from "next/link";
import ExecutionFlowVisual from "../../components/visuals/ExecutionFlowVisual";
import CTASection from "../../components/CTASection";
import PageHero from "../../components/ui/PageHero";
import {
 IconActivity, IconBolt, IconTarget, IconLock, IconCheck,
 IconInfo,
} from "../../components/ui/Icons";
import type { ComponentType } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
 title: "Execution Information",
 description:
 "Learn about order execution, pricing methodology, trading infrastructure, and execution policies at Olla Trade.",
};

/* ─── Shared icon card (matches homepage card style exactly) ──────────── */
function Card({
 Icon, title, desc,
}: { Icon: ComponentType<{ className?: string }>; title: string; desc: string }) {
 return (
 <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-md transition-all duration-200">
 <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-5 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
 <Icon className="w-5 h-5" />
 </div>
 <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
 <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
 </div>
 );
}

/* ─── Inline feature row card ──────────────────────────────────────────── */
function FeatureRow({
 Icon, title, desc,
}: { Icon: ComponentType<{ className?: string }>; title: string; desc: string }) {
 return (
 <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4">
 <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0">
 <Icon className="w-4 h-4" />
 </div>
 <div>
 <div className="text-[13px] font-bold text-[#111827] mb-1">{title}</div>
 <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
 </div>
 </div>
 );
}

/* ══════════════════════════════════════════════════════════════════════ */
export function generateStaticParams() {
 return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ExecutionInformationPage({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params;
 setRequestLocale(locale);
 const t  = await getTranslations({ locale, namespace: "trading.conditions" });
 const tp = await getTranslations({ locale, namespace: "trading_pages.execution" });
 const introCards   = tp.raw("intro_cards")    as {title:string;desc:string}[];
 const flowFeats    = tp.raw("flow_features")   as {label:string;desc:string}[];
 const modelCards   = tp.raw("model_cards")     as {title:string;desc:string}[];
 const slipCards    = tp.raw("slippage_cards")  as {title:string;desc:string}[];
 const infraCards   = tp.raw("infra_cards")     as {title:string;desc:string}[];
 const pricingPts   = tp.raw("pricing_points")  as string[];
 const orderTypes   = tp.raw("order_types")     as {name:string;desc:string;tag:string}[];
 return (
 <>
 {/* ── 1. Hero (always dark — same as every inner page) ─────────── */}
 <PageHero
 badge={locale === "pt" ? "Infraestrutura de Trading" : "Trading Infrastructure"}
 title={locale === "pt" ? "Informações de Execução" : "Execution Information"}
 subtitle={locale === "pt" ? "Saiba sobre execução de ordens, metodologia de preços, infraestrutura de trading e políticas de execução na Olla Trade." : "Learn about order execution, pricing methodology, trading infrastructure, and execution policies at Olla Trade."}
 breadcrumbs={[{ label: locale === "pt" ? "Informações de Execução" : "Execution Information" }]}
 stats={[
 { value: locale === "pt" ? "Mercado" : "Market", label: locale === "pt" ? "Tipo de Execução" : "Execution Type" },
 { value: "MT4", label: locale === "pt" ? "Plataforma de Trading" : "Trading Platform" },
 { value: "24/5", label: locale === "pt" ? "Acesso ao Mercado" : "Market Access" },
 ]}
 >
 <div className="flex flex-wrap gap-3 mt-7">
 <Link href="https://portal.ollatrade.com/auth/register"
 className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
 style={{ background: "#29B5D4", color: "#000" }}>
 {locale === "pt" ? "Abrir Conta" : "Open Account"}
 </Link>
 <Link href="/contact-us"
 className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/65 hover:text-white"
 style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
 {locale === "pt" ? "Contatar Suporte" : "Contact Support"}
 </Link>
 </div>
 </PageHero>

 {/* Cross-link to formal policy */}
 <div className="bg-[#0A1220] border-b border-white/6 py-4">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
 <p className="text-[12px] text-white/35">{tp("crosslink_text")}</p>
 <Link href="/legal/execution-policy"
 className="text-[12px] font-semibold text-[#29B5D4] hover:text-[#1FA5C4] transition-colors flex items-center gap-1.5 flex-shrink-0">
 {tp("crosslink_link")}
 </Link>
 </div>
 </div>

 {/* ── 2. Introduction — white section ─────────────────────────── */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-14 items-start">
 <div>
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("intro_label")}</div>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-5 leading-tight">{tp("intro_title")}</h2>
 <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
 <p>{tp("intro_p1")}</p>
 <p>{tp("intro_p2")}</p>
 <p>{tp("intro_p3")}</p>
 </div>
 </div>
 <div className="grid grid-cols-2 gap-4">
 {introCards.map(({ title, desc }) => (
 <div key={title} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
 <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center mb-3">
 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
 </div>
 <div className="text-[13px] font-bold text-[#111827] mb-1">{title}</div>
 <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── Execution flow visual — content section ──────────────────── */}
 <section className="py-16 bg-[#050C15]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("flow_label")}</div>
 <h2 className="text-3xl font-extrabold text-white mb-5">{tp("flow_title")}</h2>
 <p className="text-white/45 text-[14px] leading-relaxed mb-6">{tp("flow_desc")}</p>
 <div className="space-y-3">
 {flowFeats.map(({ label, desc }) => (
 <div key={label} className="flex items-start gap-3">
 <div className="w-5 h-5 rounded-full bg-[#29B5D4]/15 border border-[#29B5D4]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
 <svg className="w-3 h-3 text-[#29B5D4]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
 </div>
 <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
 <ExecutionFlowVisual />
 </div>
 </div>
 </div>
 </section>

 {/* ── 3. Order Execution Model — soft gray section ─────────────── */}
 <section className="py-16 bg-[#F5F7FA]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("model_label")}</div>
 <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("model_title")}</h2>
 <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{tp("model_desc")}</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
 {modelCards.map(({ title, desc }) => (
 <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5">
 <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
 <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── 4. Trading Infrastructure — white section ────────────────── */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("infra_label")}</div>
 <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("infra_title")}</h2>
 <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{tp("infra_desc")}</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {infraCards.map(({ title, desc }) => (
 <div key={title} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
 <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
 <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── 5. Pricing & Liquidity — soft gray section ───────────────── */}
 <section className="py-16 bg-[#F5F7FA]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-14 items-start">
 <div>
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("pricing_label")}</div>
 <h2 className="text-3xl font-extrabold text-[#111827] mb-5 leading-tight">{tp("pricing_title")}</h2>
 <p className="text-[14px] text-gray-600 leading-relaxed mb-5">{tp("pricing_desc")}</p>
 <ul className="space-y-2 mb-5">
 {pricingPts.map((pt_item, i) => (
 <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
 <span className="text-[#29B5D4] font-bold mt-0.5 flex-shrink-0">›</span>
 {pt_item}
 </li>
 ))}
 </ul>
 <a href="/legal/execution-policy" className="text-[13px] font-semibold text-[#29B5D4] hover:text-[#1FA5C4] transition-colors">{tp("pricing_link")}</a>
 </div>
 <div className="space-y-4">
 {slipCards.map(({ title, desc }) => (
 <div key={title} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4">
 <div className="w-2 h-2 rounded-full bg-[#29B5D4] flex-shrink-0 mt-2" />
 <div>
 <div className="text-[13px] font-bold text-[#111827] mb-1">{title}</div>
 <div className="text-[12px] text-gray-500 leading-relaxed">{desc}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── 6. Slippage — white section ──────────────────────────────── */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("slippage_label")}</div>
 <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("slippage_title")}</h2>
 <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{tp("slippage_desc")}</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {slipCards.map(({ title, desc }) => (
 <div key={title} className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5">
 <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
 <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── 7. Order Types — soft gray section ───────────────────────── */}
 <section className="py-16 bg-[#F5F7FA]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">{tp("order_types_label")}</div>
 <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{tp("order_types_title")}</h2>
 <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{tp("order_types_desc")}</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
 {orderTypes.map(({ name, desc, tag }, i) => {
 const ICONS = [IconBolt, IconTarget, IconActivity, IconLock, IconCheck];
 const COLORS = [
 "bg-[#29B5D4]/8 text-[#29B5D4] border-[#29B5D4]/12",
 "bg-blue-50 text-blue-700 border-blue-200",
 "bg-purple-50 text-purple-700 border-purple-200",
 "bg-amber-50 text-amber-700 border-amber-200",
 "bg-[#29B5D4]/8 text-[#29B5D4] border-[#29B5D4]/12",
 ];
 const Icon = ICONS[i % ICONS.length];
 const tc = COLORS[i % COLORS.length];
 return (
 <div key={name} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col">
 <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4">
 <Icon className="w-5 h-5" />
 </div>
 <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3 inline-block w-fit ${tc}`}>{tag}</span>
 <h4 className="text-[14px] font-bold text-[#111827] mb-2">{name}</h4>
 <p className="text-[12px] text-gray-500 leading-relaxed flex-1">{desc}</p>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ── 8. Risk Warning — white section with amber box ───────────── */}
 <section className="py-14 bg-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-8">
 <div className="text-[11px] font-semibold text-[#29B5D4] uppercase tracking-widest mb-4">Compliance</div>
 <h2 className="text-2xl font-extrabold text-[#111827]">Execution Risk Warning</h2>
 </div>
 <div className="border border-amber-200 bg-amber-50 rounded-2xl p-7">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
 style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
 <IconInfo className="w-5 h-5 text-amber-600" />
 </div>
 <div className="space-y-2.5 text-[13px] text-amber-800 leading-relaxed">
 <p>Trading financial instruments involves a significant level of risk and is not suitable for all investors. You may lose all or more than your initial investment.</p>
 <p>In volatile market conditions, prices may move rapidly and significantly. Execution of orders — including Stop Loss and Take Profit orders — may occur at prices different from those requested. Price gapping can occur when markets reopen after closures.</p>
 <p>Spreads may widen substantially around major economic events, outside regular market hours, and during periods of low liquidity. These widened spreads reflect actual market conditions and are not within Olla Trade&apos;s control.</p>
 <p>Olla Trade Ltd. operates as an execution-only service and does not provide investment advice. You are responsible for your own trading decisions. Please ensure you fully understand the risks involved before trading.</p>
 </div>
 </div>
 </div>
 </div>
 </section>


 <CTASection
 title={tp("cta_title")}
 subtitle={tp("cta_subtitle")}
 primaryLabel={locale === "pt" ? "Abrir Conta" : "Open Account"}
 primaryHref="https://portal.ollatrade.com/auth/register"
 secondaryLabel={locale === "pt" ? "Contato" : "Contact Us"}
 secondaryHref="/contact-us"
 />
 </>
 );
}
