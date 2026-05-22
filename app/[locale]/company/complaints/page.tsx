import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/constants";
import FAQSection from "../../../components/ui/FAQSection";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Complaints",
  description: "How to submit a formal complaint to Olla Trade. Our complaint handling process, timelines, and escalation procedures.",
};

function SectionLabel({ text }: { text: string }) {
  return <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{text}</div>;
}

const STEP_ICONS = [
  "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ComplaintsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.complaints" });

  const processSteps  = t.raw("process_steps")   as { step: string; title: string; desc: string }[];
  const infoItems     = t.raw("info_items")       as string[];
  const complaintCats = t.raw("complaint_cats")   as { title: string; desc: string }[];
  const reviewItems   = t.raw("review_items")     as { title: string; desc: string }[];
  const timelineHdrs  = t.raw("timeline_headers") as string[];
  const timelineRows  = t.raw("timeline_rows")    as string[][];
  const contactItems  = t.raw("contact_items")    as { title: string; value: string; sub: string }[];
  const faqs          = t.raw("faqs")             as { q: string; a: string }[];

  return (
    <>
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(0,204,68,0.05) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">{locale === "pt" ? "Início" : "Home"}</Link>
            <span className="text-white/10">/</span>
            <Link href="/company" className="hover:text-white/45 transition-colors">{locale === "pt" ? "Empresa" : "Company"}</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">{locale === "pt" ? "Reclamações" : "Complaints"}</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">{t("hero_badge")}</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">{t("hero_title")}</h1>
          <p className="text-[17px] text-white/40 max-w-2xl leading-relaxed mb-9">{t("hero_desc")}</p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:complaints@ollatrade.com"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
              style={{ background: "#00CC44", color: "#000" }}>
              {t("hero_cta_primary")}
            </a>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] text-white/65 hover:text-white transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={t("process_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4">{t("process_title")}</h2>
          <p className="text-gray-500 text-[15px] mb-12 max-w-2xl leading-relaxed">{t("process_desc")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map(({ step, title, desc }, i) => (
              <div key={step} className="bg-white border border-gray-100 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[32px] font-black text-gray-50 leading-none select-none">{step}</div>
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={STEP_ICONS[i % STEP_ICONS.length]} />
                  </svg>
                </div>
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel text={t("info_label")} />
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">{t("info_title")}</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-8">{t("info_desc")}</p>
              <div className="space-y-3">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00CC44]/10 border border-[#00CC44]/20 text-[#00CC44] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <p className="text-[13px] text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel text={t("categories_label")} />
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">{t("categories_title_text")}</h2>
              <div className="space-y-3">
                {complaintCats.map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4 bg-[#F5F7FA] border border-gray-100 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-[#00CC44] flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="text-[13px] font-bold text-[#111827] mb-0.5">{title}</h4>
                      <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={t("review_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">{t("review_title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviewItems.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text={t("timeline_label")} />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">{t("timeline_title")}</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {timelineHdrs.map(h => (
                    <th key={h} className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {timelineRows.map(([stage, action, timeline]) => (
                  <tr key={stage} className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3.5 font-bold text-[#111827] text-[13px]">{stage}</td>
                    <td className="px-6 py-3.5 text-gray-600 text-[13px]">{action}</td>
                    <td className="px-6 py-3.5 text-[#00CC44] font-semibold text-[13px]">{timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel text={t("escalation_label")} />
              <h2 className="text-3xl font-extrabold text-white mb-4">{t("escalation_title")}</h2>
              <p className="text-white/45 text-[15px] leading-relaxed mb-6">{t("escalation_p1")}</p>
              <p className="text-white/45 text-[15px] leading-relaxed mb-8">{t("escalation_p2")}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/legal/complaint-management"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-[13px] transition-colors"
                  style={{ background: "#00CC44", color: "#000" }}>
                  {t("escalation_cta_policy")}
                </Link>
                <a href="mailto:complaints@ollatrade.com"
                  className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-xl text-[13px] text-white/65 hover:text-white transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
                  {t("escalation_cta_email")}
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {contactItems.map(({ title, value, sub }) => (
                <div key={title} className="bg-white/4 border border-white/8 rounded-xl p-5">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-1">{title}</div>
                  <div className="text-[13px] font-semibold text-white/75">{value}</div>
                  <div className="text-[11px] text-white/30 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#111827] mb-3">{t("submit_title")}</h2>
            <p className="text-[14px] text-gray-500 mb-6 max-w-xl mx-auto leading-relaxed">{t("submit_desc")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:complaints@ollatrade.com"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
                style={{ background: "#00CC44", color: "#000" }}>
                {t("submit_cta_email")}
              </a>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] text-[#111827] hover:text-[#00CC44] transition-colors"
                style={{ border: "1px solid #e5e7eb" }}>
                {t("submit_cta_support")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={t("faq_title")} subtitle={t("faq_subtitle")} faqs={faqs} />

      <div className="bg-[#050C15] border-t border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-white/20 text-center leading-relaxed">
            {t("legal_note")}{" "}
            <Link href="/legal/complaint-management" className="text-[#00CC44]/60 hover:text-[#00CC44] transition-colors">{t("escalation_cta_policy")}</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
