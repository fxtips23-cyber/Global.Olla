import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { SITE } from "../../../lib/constants";
import { IconTarget, IconShieldCheck, IconLock, IconBook, IconGlobe, IconUsers } from "../../../components/ui/Icons";
import GlobalMarketsVisual from "../../../components/visuals/GlobalMarketsVisual";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "About Us", description: "Learn about Olla Trade — our mission, vision, platform, and commitment to providing professional online trading services worldwide." };

const values = [
  { Icon: IconTarget,      title: "Client First",    desc: "Every decision starts with one question: does this improve the client's trading experience?" },
  { Icon: IconShieldCheck, title: "Transparency",     desc: "Clear pricing, no hidden fees, honest risk communication, and open account information — always." },
  { Icon: IconLock,        title: "Reliability",      desc: "Our infrastructure is built for stability and speed — consistent, dependable service across all market conditions." },
  { Icon: IconBook,        title: "Education",        desc: "We believe informed traders trade better. We invest in resources at every level — from beginner to professional." },
  { Icon: IconGlobe,       title: "Accessibility",    desc: "Minimum deposits from $10 mean professional trading tools are within reach for traders everywhere." },
  { Icon: IconUsers,       title: "Client Support",   desc: "Dedicated support, transparent policies, and a team that genuinely supports client growth as market participants." },
];

const offerings = [
  { Icon: IconGlobe,       title: "Multi-Asset Trading",     desc: "Access Forex, Metals, Indices, Energies, Cryptocurrencies, and Stocks — 500+ instruments from one account." },
  { Icon: IconLock,        title: "MetaTrader 4",            desc: "Industry-standard MT4 platform on desktop, WebTrader, iOS, and Android." },
  { Icon: IconShieldCheck, title: "Three Account Types",     desc: "Standard, Pro, and Elite accounts with minimum deposits from $10 — for every trader level." },
  { Icon: IconTarget,      title: "Multiple Payment Methods",desc: "Fast deposits and withdrawals via cards, crypto, e-wallets, and bank wire — no Olla Trade fees." },
  { Icon: IconBook,        title: "Educational Resources",   desc: "Structured learning from basic to professional level, plus Forex glossary, calendar, and market news." },
  { Icon: IconUsers,       title: "24/5 Customer Support",   desc: "Dedicated support available Monday to Friday via phone and email." },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.about" });
  return (
    <>
      <PageHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")} breadcrumbs={[{ label: "Company", href: "/company" }, { label: "About Us" }]} />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5">Who We Are</h2>
              <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
                <p>Olla Trade is a professional online trading platform providing access to global financial markets across Forex, Metals, Indices, Energies, Cryptocurrencies, and Stocks — all through the industry-standard MetaTrader 4 platform.</p>
                <p>We were built with one belief: that professional trading tools, competitive market conditions, and transparent service should be available to every trader — regardless of account size or experience level.</p>
                <p>Olla Trade Ltd. is incorporated in Anguilla (Registration No. A000001849) and operates as an International Business Company under Anguilla law, offering trading services through MetaTrader 4.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: t("vision_title"),      body: "To build a world where financial freedom is accessible to all — where anyone, anywhere can access global markets with professional tools and fair conditions." },
                { title: t("mission_title"),     body: "To provide a secure, intuitive, and reliable trading platform that enables individuals worldwide to trade global markets with confidence." },
                { title: t("commitment_title"),  body: "Transparency in pricing, honesty in risk communication, reliability in execution, and a client-first approach in every decision we make." },
              ].map((v) => (
                <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="text-[14px] font-bold text-[#111827] mb-2">{v.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global markets visual */}
      <section className="py-12 bg-[#050C15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">Global Reach</div>
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">Connected to Global Financial Markets</h2>
          <GlobalMarketsVisual />
          <p className="text-[11px] text-white/25 text-center mt-4 leading-relaxed">
            Olla Trade provides access to financial markets across multiple asset classes and global exchanges from a single account.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[[SITE.activeClients,"Active Clients"],[SITE.instruments,"Tradable Instruments"],["24/5","Customer Support"],[SITE.minDeposit,"Min. Deposit"]].map(([v,l])=>(
              <div key={l}><div className="text-4xl font-black text-[#00CC44] mb-2">{v}</div><div className="text-[12px] text-white/35">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">What We Offer</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">Everything you need to trade global markets — in one account, on one platform.</p>
          <FeatureGrid features={offerings} cols={3} />
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">Our Core Values</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">The principles that guide every product decision, every client interaction, and every line of our platform.</p>
          <FeatureGrid features={values} cols={3} />
        </div>
      </section>

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F7FA] rounded-2xl border border-gray-100 p-6">
            <h3 className="text-[14px] font-bold text-[#111827] mb-3">Legal & Regulatory Information</h3>
            <div className="space-y-2 text-[13px] text-gray-600 leading-relaxed">
              <p><strong className="text-[#111827]">Company:</strong> Olla Trade Ltd. is incorporated in Anguilla (Reg. No. A000001849) as an International Business Company under Anguilla law.</p>
              <p><strong className="text-[#111827]">Registered Address:</strong> Grace Complex, The Valley, AI 2640, Anguilla.</p>
              <p><strong className="text-[#111827]">Execution Only:</strong> Olla Trade Ltd. operates solely as an execution-only service and does not provide investment advice or portfolio management.</p>
              <p><strong className="text-[#111827]">Restricted Countries:</strong> Services not available to residents of the USA, Russia, Myanmar, UAE, Canada, Israel, New Zealand, Iran, and North Korea.</p>
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <Link href="/legal/terms" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">Terms & Conditions</Link>
              <Link href="/legal/risk-disclosures" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">Risk Disclosures</Link>
              <Link href="/legal/privacy" className="text-[13px] font-semibold text-[#1E88E5] hover:text-[#00CC44] transition-colors underline underline-offset-4">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={t("cta_title")} subtitle={t("cta_subtitle")} primaryLabel="Open Account" secondaryLabel="Contact Us" secondaryHref="/company/contact" />
    </>
  );
}
