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
  primaryHref  = "https://direct.ollatrade.com/auth/register",
  secondaryLabel,
  secondaryHref = "/trading/conditions",
}: CTASectionProps) {
  const t = useTranslations("cta");

  const resolvedTitle    = title         ?? t("defaultTitle");
  const resolvedSub      = subtitle      ?? t("defaultSubtitle");
  const resolvedPrimary  = primaryLabel  ?? t("defaultPrimary");
  const resolvedSecondary= secondaryLabel ?? t("defaultSecondary");

  return (
    <section className="py-20 lg:py-24 bg-[#050C15] border-t border-white/6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">{resolvedTitle}</h2>
        <p className="text-lg text-white/40 mb-8 max-w-xl mx-auto leading-relaxed">{resolvedSub}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold px-9 py-4 rounded-lg text-base transition-all hover:-translate-y-0.5">
            {resolvedPrimary}
          </Link>
          <Link href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 border border-white/12 hover:border-white/25 text-white/60 hover:text-white font-medium px-9 py-4 rounded-lg text-base transition-all hover:-translate-y-0.5">
            {resolvedSecondary}
          </Link>
        </div>
        <p className="text-[11px] text-white/18 mt-8">
          {t("riskText")}{" "}
          <Link href="/legal/risk-disclosures" className="underline hover:text-white/35 transition-colors">{t("riskLink")}</Link>{" "}
          {t("riskText2")}
        </p>
      </div>
    </section>
  );
}
