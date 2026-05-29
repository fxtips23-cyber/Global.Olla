import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  StaggerChildren,
} from "../../../components/ui/Animate";

export const metadata: Metadata = {
  title: "Legal & Regulatory Documents | Olla Trade",
  description:
    "Access all Olla Trade legal documents including Terms & Conditions, Privacy Policy, Risk Disclosures, Order Execution Policy, KYC & AML Policy, and more.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const DOCS = [
  {
    title: "Terms & Conditions",
    desc: "Rules governing the use of Olla Trade services and platform, including account registration, trading obligations, and client responsibilities.",
    href: "/legal/terms",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Privacy Policy",
    desc: "How we collect, use, store, and protect your personal information in accordance with applicable data protection regulations.",
    href: "/legal/privacy",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Risk Disclosure Statement",
    desc: "A full disclosure of the risks associated with trading Forex and CFDs, including leverage risk, market volatility, and potential loss of capital.",
    href: "/legal/risk-disclosures",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Order Execution Policy",
    desc: "How client orders are received, prioritised, and executed on our platform, including best execution obligations and execution venues.",
    href: "/legal/execution-policy",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "KYC & AML Policy",
    desc: "Our Know Your Customer and Anti-Money Laundering procedures, including client verification requirements and suspicious activity reporting.",
    href: "/legal/kyc-aml",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Cookie Policy",
    desc: "How we use cookies and similar tracking technologies on our website, and how you can manage your cookie preferences.",
    href: "/legal/cookies",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Withdrawal Conditions",
    desc: "The terms and conditions that apply when processing client withdrawal requests, including timelines, fees, and verification requirements.",
    href: "/legal/withdrawal-conditions",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Complaint Management",
    desc: "How to raise a formal complaint with Olla Trade, our resolution process, escalation procedures, and expected response timelines.",
    href: "/legal/complaint-management",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

export default async function LegalIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-bg py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,144,195,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(26,144,195,0.03) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(26,144,195,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <FadeIn>
            <nav className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#1A90C3] transition-colors">
                Home
              </Link>
              <span className="text-[#E5E7EB]">/</span>
              <Link href="/company" className="hover:text-[#1A90C3] transition-colors">
                Company
              </Link>
              <span className="text-[#E5E7EB]">/</span>
              <span className="text-[#111827]">Legal Documents</span>
            </nav>
          </FadeIn>

          <FadeUp delay={0.05}>
            <span className="badge mb-5 inline-flex">Legal Documents</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#07111F] leading-tight mb-5">
              Legal &amp;{" "}
              <span className="text-gradient">Regulatory Documents</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-[16px] sm:text-[17px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-10">
              Olla Trade is committed to full transparency and regulatory
              compliance. All governing documents, policies, and disclosures are
              available here for your review.
            </p>
          </FadeUp>

          {/* Regulatory info bar */}
          <FadeUp delay={0.2}>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-[#EBF5FB] border border-[#1A90C3]/20 rounded-2xl px-6 py-3.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1A90C3]" />
                <span className="text-[12px] font-semibold text-[#07111F]">
                  Olla Capital Financial Services L.L.C.
                </span>
              </div>
              <span className="hidden sm:block text-[#E5E7EB]">|</span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-[#1A90C3]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="text-[12px] text-[#1A90C3] font-medium">
                  UAE SCA Lic. No. 20200000416
                </span>
              </div>
              <span className="hidden sm:block text-[#E5E7EB]">|</span>
              <span className="text-[11px] text-[#6B7280]">
                Empire Heights Tower B, Business Bay, Dubai, UAE
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Documents Grid ── */}
      <section className="section-gray section-py">
        <div className="container-narrow">
          <FadeUp className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07111F] mb-3">
              All Legal Documents
            </h2>
            <p className="text-[14px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
              Click any document below to read the full policy. These documents
              govern the relationship between you and Olla Trade.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 gap-4">
            {DOCS.map(({ title, desc, href, icon }) => (
              <div key={href}>
                <Link
                  href={href}
                  className="card card-hover group flex items-start gap-4 p-5 rounded-2xl h-full"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl border border-[#E5E7EB] bg-[#F6F8FB] text-[#6B7280] flex items-center justify-center flex-shrink-0 group-hover:border-[#1A90C3]/30 group-hover:bg-[#EBF5FB] group-hover:text-[#1A90C3] transition-all">
                    {icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-bold text-[#111827] mb-1 group-hover:text-[#1A90C3] transition-colors">
                      {title}
                    </h3>
                    <p className="text-[12px] text-[#6B7280] leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#E5E7EB] group-hover:text-[#1A90C3] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 18l6-6-6-6"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Risk Warning ── */}
      <section className="section-gray border-t border-[#E5E7EB] section-py">
        <div className="container-narrow">
          <SlideLeft>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm">
              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4.5 h-4.5 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[15px] font-bold text-[#111827]">
                    Risk Warning
                  </h2>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">
                    Please read carefully before trading
                  </p>
                </div>
              </div>

              {/* Risk warning body */}
              <p className="text-[13px] text-[#6B7280] leading-relaxed mb-5">
                Trading Forex and CFDs involves significant risk of loss and is
                not suitable for all investors. The value of your investment may
                fall as well as rise and you may receive back less than you
                originally invested. Leverage can work against you as well as
                for you. You should not invest more than you can afford to lose.
                Past performance is not indicative of future results. Olla
                Capital Financial Services L.L.C. is regulated by the UAE
                Securities and Commodities Authority, License No. 20200000416.
              </p>

              {/* Divider */}
              <div className="border-t border-[#E5E7EB] my-5" />

              {/* Restricted jurisdictions */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#F6F8FB] border border-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-[#1A90C3]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[12px] font-bold text-[#111827] mb-1">
                    Restricted Jurisdictions
                  </h3>
                  <p className="text-[12px] text-[#6B7280] leading-relaxed">
                    Our services are not offered to residents of the USA,
                    Canada, Israel, North Korea, Iran, Sudan, Syria, Cuba, or
                    other OFAC sanctioned territories.
                  </p>
                </div>
              </div>

              {/* Last updated */}
              <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-[#E5E7EB]">
                <p className="text-[11px] text-[#6B7280]">
                  <span className="font-semibold text-[#111827]">
                    Last updated:
                  </span>{" "}
                  [Admin: Insert last updated date]
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/legal/risk-disclosures"
                    className="text-[11px] font-semibold text-[#1A90C3] hover:underline underline-offset-4 transition-colors"
                  >
                    Full Risk Disclosure
                  </Link>
                  <Link
                    href="/legal/terms"
                    className="text-[11px] font-semibold text-[#1A90C3] hover:underline underline-offset-4 transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </div>
              </div>
            </div>
          </SlideLeft>
        </div>
      </section>
    </>
  );
}
