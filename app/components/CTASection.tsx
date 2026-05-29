"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref  = "https://portal.ollatrade.com/auth/register",
  secondaryLabel,
  secondaryHref = "/trading/conditions",
}: CTASectionProps) {
  const t = useTranslations("cta");

  const resolvedTitle     = title          ?? t("defaultTitle");
  const resolvedSub       = subtitle       ?? t("defaultSubtitle");
  const resolvedPrimary   = primaryLabel   ?? t("defaultPrimary");
  const resolvedSecondary = secondaryLabel ?? t("defaultSecondary");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#050B14", borderTop: "1px solid rgba(255,255,255,0.05)" }}>

      {/* Blue radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(26,144,195,0.14) 0%, transparent 70%)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,144,195,0.03) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(26,144,195,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }} />

      <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">

        {/* UAE SCA badge */}
        <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full"
          style={{ background: "rgba(26,144,195,0.10)", border: "1px solid rgba(26,144,195,0.22)" }}>
          <svg className="w-3.5 h-3.5 text-[#38BDF8]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[11px] font-semibold text-[#38BDF8] tracking-wide">UAE SCA Regulated</span>
        </div>

        <h2 className="font-bold text-white leading-tight mb-5"
          style={{ fontSize: "clamp(30px, 4vw, 54px)", letterSpacing: "-0.02em" }}>
          {resolvedTitle}
        </h2>
        <p className="text-[16px] leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "#8B9DB0" }}>
          {resolvedSub}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link href={primaryHref}
            className="btn-primary inline-flex items-center justify-center px-9 py-4 text-[14px] font-semibold">
            {resolvedPrimary}
          </Link>
          <Link href={secondaryHref}
            className="inline-flex items-center justify-center px-9 py-4 rounded-xl text-[14px] font-medium transition-all"
            style={{ color: "#8B9DB0", border: "1px solid rgba(255,255,255,0.10)" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#fff"; el.style.borderColor = "rgba(26,144,195,0.35)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#8B9DB0"; el.style.borderColor = "rgba(255,255,255,0.10)"; }}>
            {resolvedSecondary}
          </Link>
        </div>

        <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.20)" }}>
          {t("riskText")}{" "}
          <Link href="/legal/risk-disclosures"
            className="underline underline-offset-2 transition-colors"
            style={{ color: "rgba(255,255,255,0.20)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.40)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.20)"; }}>
            {t("riskLink")}
          </Link>{" "}
          {t("riskText2")}
        </p>
      </div>
    </section>
  );
}
