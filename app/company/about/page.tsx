import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import FeatureGrid from "../../components/ui/FeatureGrid";
import { IconTarget, IconShieldCheck, IconLock, IconBook, IconGlobe, IconUsers } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "About Us", description: "Learn about Olla Trade — our mission, vision, platform, and commitment to providing professional online trading services worldwide." };

const values = [
  { Icon: IconTarget,      title: "Client First",    desc: "Every decision starts with one question: does this improve the client's trading experience?" },
  { Icon: IconShieldCheck, title: "Transparency",     desc: "Clear pricing, no hidden fees, honest risk communication, and open account information — always." },
  { Icon: IconLock,        title: "Reliability",      desc: "Our infrastructure is built for stability and speed — consistent, dependable service across all market conditions." },
  { Icon: IconBook,        title: "Education",        desc: "We believe informed traders trade better. We invest in resources at every level — from beginner to professional." },
  { Icon: IconGlobe,       title: "Accessibility",    desc: "Minimum deposits from $10 mean professional trading tools are within reach for traders everywhere." },
  { Icon: IconUsers,       title: "Client First",     desc: "Dedicated support, transparent policies, and a team that genuinely supports client growth as market participants." },
];

const offerings = [
  { Icon: IconGlobe,       title: "Multi-Asset Trading",     desc: "Access Forex, Metals, Indices, Energies, Cryptocurrencies, and Stocks — 500+ instruments from one account." },
  { Icon: IconLock,        title: "MetaTrader 4",            desc: "Industry-standard MT4 platform on desktop, WebTrader, iOS, and Android." },
  { Icon: IconShieldCheck, title: "Three Account Types",     desc: "Standard, Pro, and Elite accounts with minimum deposits from $10 — for every trader level." },
  { Icon: IconTarget,      title: "Multiple Payment Methods",desc: "Fast deposits and withdrawals via cards, crypto, e-wallets, and bank wire — no Olla Trade fees." },
  { Icon: IconBook,        title: "Educational Resources",   desc: "Structured learning from basic to professional level, plus Forex glossary, calendar, and market news." },
  { Icon: IconUsers,       title: "24/5 Customer Support",   desc: "Dedicated support available Monday to Friday via phone and email." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero badge="About Olla Trade" title="Your All-in-One Hub for Smarter Trading" subtitle="Olla Trade is a professional online trading platform built to empower traders of all levels to access global markets with confidence, using the tools professionals rely on." breadcrumbs={[{ label: "Company", href: "/company" }, { label: "About Us" }]} />

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
                { title: "Our Vision",      body: "To build a world where financial freedom is accessible to all — where anyone, anywhere can access global markets with professional tools and fair conditions." },
                { title: "Our Mission",     body: "To provide a secure, intuitive, and reliable trading platform that enables individuals worldwide to trade global markets with confidence." },
                { title: "Our Commitment", body: "Transparency in pricing, honesty in risk communication, reliability in execution, and a client-first approach in every decision we make." },
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

      <section className="py-14 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[["1k+","Active Clients"],["500+","Tradable Instruments"],["24/5","Customer Support"],["$10","Min. Deposit"]].map(([v,l])=>(
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
              <p><strong className="text-[#111827]">Operating Office:</strong> Apartment 25, Building 40, Tabyshaliev Street, Bishkek, Kyrgyzstan.</p>
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

      <CTASection title="Start Your Trading Journey" subtitle="Open an account in minutes and join thousands of traders on Olla Trade." primaryLabel="Open Account" secondaryLabel="Contact Us" secondaryHref="/company/contact" />
    </>
  );
}
