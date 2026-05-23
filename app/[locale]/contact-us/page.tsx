import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import FAQSection from "../../components/ui/FAQSection";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  IconMail, IconPhone, IconMapPin, IconHeadset, IconUsers,
  IconShield, IconClock, IconBook, IconActivity, IconMonitor,
} from "../../components/ui/Icons";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the Olla Trade support team for account assistance, funding queries, platform support, and general enquiries. Available Monday to Friday.",
};

const CARD_ICONS: ComponentType<{ className?: string }>[] = [IconMail, IconHeadset, IconUsers, IconShield];
const HELP_ICONS: ComponentType<{ className?: string }>[] = [IconUsers, IconActivity, IconMonitor, IconBook, IconShield];

const OFFICE_CONFIG = [
  { accent: "#00CC44",  accentBg: "rgba(0,204,68,0.13)",   accentBorder: "rgba(0,204,68,0.28)",   barFrom: "#00CC44",  barTo: "#009933",  Icon: IconMapPin },
  { accent: "#00BFA5",  accentBg: "rgba(0,191,165,0.13)",  accentBorder: "rgba(0,191,165,0.28)",  barFrom: "#00BFA5",  barTo: "#00897B",  Icon: IconPhone },
  { accent: "#AB47BC",  accentBg: "rgba(171,71,188,0.13)", accentBorder: "rgba(171,71,188,0.28)", barFrom: "#AB47BC",  barTo: "#7B1FA2",  Icon: IconMail },
];

const SOCIAL_LINKS = [
  { label: "Facebook",  href: "https://www.facebook.com/ollatrade",            icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Instagram", href: "https://www.instagram.com/ollatrad/",            icon: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm4-8a1 1 0 110-2 1 1 0 010 2z" },
  { label: "X",         href: "https://x.com/OllaTrade",                        icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/olla-trade/",   icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function ContactUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company.contact" });

  const contactCards   = t.raw("contact_cards")    as { title: string; detail: string; href: string; desc: string; cta: string }[];
  const responseTimes  = t.raw("response_times")   as string[][];
  const quickHelp      = t.raw("quick_help")        as { title: string; desc: string; href: string }[];
  const availDays      = t.raw("availability_days") as { day: string; hours: string; active: boolean }[];
  const addressLines   = t.raw("address_lines")     as string[];
  const contactFaqs    = t.raw("contact_faqs")      as { q: string; a: string }[];

  const officeDetails = [
    { ...OFFICE_CONFIG[0], label: t("office_address_label"), lines: addressLines },
    { ...OFFICE_CONFIG[1], label: t("office_phone_label"),   lines: ["+44 7418 641736"] },
    { ...OFFICE_CONFIG[2], label: t("office_email_label"),   lines: ["info@ollatrade.com", "cst@ollatrade.com"] },
  ];

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(0,204,68,0.05) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">{t("breadcrumb_home")}</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">{t("breadcrumb_page")}</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">{t("hero_badge")}</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">{t("hero_title")}</h1>
          <p className="text-[17px] text-white/40 max-w-2xl leading-relaxed mb-9">{t("hero_desc")}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact-form"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
              style={{ background: "#00CC44", color: "#000" }}>
              {t("hero_cta")}
            </a>
            <Link href="https://direct.ollatrade.com/auth/register"
              className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/65 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Contact cards ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map(({ title, detail, href, desc, cta }, i) => {
              const Icon = CARD_ICONS[i % CARD_ICONS.length];
              return (
                <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col hover:border-[#00CC44]/20 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#111827] mb-1.5">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-4 flex-1">{desc}</p>
                  <a href={href} className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors group mt-auto">
                    <span className="font-mono text-[11px] text-gray-400 block mb-1">{detail}</span>
                  </a>
                  <a href={href} className="mt-2 w-full flex items-center justify-center border border-[#00CC44]/25 hover:bg-[#00CC44] hover:text-black hover:border-[#00CC44] text-[#00CC44] font-semibold py-2.5 rounded-lg text-[12px] transition-all">
                    {cta} →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Office information ─────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-8">{t("office_info_label")}</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {officeDetails.map(({ Icon, label, lines, accent, accentBg, accentBorder, barFrom, barTo }) => (
              <div key={label} className="relative bg-[#0D1520] rounded-2xl overflow-hidden border border-white/8 hover:border-white/16 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${barFrom}, ${barTo})` }} />
                <div className="p-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accent }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>{label}</div>
                  <div className="space-y-0.5">
                    {lines.map((l) => <div key={l} className="text-[13px] text-white/65 leading-relaxed">{l}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Contact form ──────────────────────────────────────── */}
      <section id="contact-form" className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("form_panel_label")}</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4 leading-tight">{t("form_panel_title")}</h2>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
                {t("form_panel_desc").split("cst@ollatrade.com")[0]}
                <a href="mailto:cst@ollatrade.com" className="text-[#00CC44] hover:underline">cst@ollatrade.com</a>
                {t("form_panel_desc").split("cst@ollatrade.com")[1]}
              </p>

              <div className="bg-[#111827] rounded-2xl p-5 mb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#00CC44]/15 border border-[#00CC44]/25 text-[#00CC44] flex items-center justify-center">
                    <IconClock className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-bold text-white">{t("response_times_title")}</span>
                </div>
                <div className="space-y-2.5">
                  {responseTimes.map(([type, time]) => (
                    <div key={type} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-[12px] text-white/40">{type}</span>
                      <span className="text-[12px] text-[#00CC44] font-semibold">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center">
                    <IconHeadset className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-bold text-[#111827]">{t("availability_title")}</span>
                </div>
                <div className="space-y-1.5 text-[12px]">
                  {[
                    [t("hours_row"), t("hours_value")],
                    [t("days_row"),  t("days_value")],
                    [t("weekends_row"), t("weekends_value")],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-gray-500">{label}</span>
                      <span className={label === t("hours_row") || label === t("days_row") ? "font-semibold text-[#111827]" : "text-gray-500"}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-6">{t("form_section_title")}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Quick help ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{t("self_service_label")}</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">{t("quick_help_title")}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">{t("quick_help_desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {quickHelp.map(({ title, desc, href }, i) => {
              const Icon = HELP_ICONS[i % HELP_ICONS.length];
              return (
                <Link key={title} href={href}
                  className="group bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5 text-center hover:bg-white hover:border-[#00CC44]/20 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-400 flex items-center justify-center mx-auto mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[13px] font-bold text-[#111827] mb-2 group-hover:text-[#00AA38] transition-colors">{title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Support availability ──────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">{t("support_section_label")}</div>
              <h2 className="text-3xl font-extrabold text-white mb-4">{t("support_section_title")}</h2>
              <p className="text-white/45 text-[15px] leading-relaxed mb-8">
                {t("support_section_desc").split("cst@ollatrade.com")[0]}
                <a href="mailto:cst@ollatrade.com" className="text-[#00CC44] hover:underline">cst@ollatrade.com</a>
                {t("support_section_desc").split("cst@ollatrade.com")[1]}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:info@ollatrade.com"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-[13px] transition-colors"
                  style={{ background: "#00CC44", color: "#000" }}>
                  {t("email_us_btn")}
                </a>
                <Link href="/company/help"
                  className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-xl text-[13px] text-white/55 hover:text-white transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                  {t("view_faqs_btn")}
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {availDays.map(({ day, hours, active }) => (
                <div key={day} className="rounded-xl p-4 flex items-start gap-3"
                  style={{ background: active ? "rgba(0,204,68,0.08)" : "rgba(255,255,255,0.04)", border: `1px solid ${active ? "rgba(0,204,68,0.2)" : "rgba(255,255,255,0.07)"}` }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: active ? "#00CC44" : "rgba(255,255,255,0.2)" }} />
                  <div>
                    <div className="text-[13px] font-bold" style={{ color: active ? "#fff" : "rgba(255,255,255,0.55)" }}>{day}</div>
                    <div className="text-[12px] mt-0.5" style={{ color: active ? "#00CC44" : "rgba(255,255,255,0.28)" }}>{hours}</div>
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2 border border-white/8 rounded-xl p-4">
                <div className="text-[11px] font-bold text-white/30 uppercase tracking-wider mb-3">{t("channels_title")}</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { Icon: IconMail,  label: t("channels_email_label"), value: "info@ollatrade.com" },
                    { Icon: IconPhone, label: t("channels_phone_label"), value: "+44 7418 641736"   },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/6 text-white/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/25 leading-none">{label}</div>
                        <div className="text-[11px] text-white/55 font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/6">
                  <div className="text-[10px] text-white/25 mb-2">{t("follow_label")}</div>
                  <div className="flex gap-2">
                    {SOCIAL_LINKS.map(({ label, href, icon }) => (
                      <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-white/6 border border-white/8 flex items-center justify-center text-white/25 hover:text-white/55 hover:border-white/20 transition-all">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d={icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────── */}
      <FAQSection title={t("faq_title")} subtitle={t("faq_subtitle")} faqs={contactFaqs} />

      {/* ── 8. Address card ──────────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-7">
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">{t("address_section_label")}</div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-white text-gray-400 flex items-center justify-center flex-shrink-0">
                  <IconMapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t("address_label")}</div>
                  {addressLines.map((l) => <div key={l} className="text-[13px] text-gray-700 leading-relaxed">{l}</div>)}
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-[11px] text-gray-400 leading-relaxed">{t("address_legal_note")}</p>
              </div>
            </div>

            <div className="bg-[#0A1520] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
              <div className="flex-1 relative min-h-[200px]" style={{ background: "#0D1828" }}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: "linear-gradient(rgba(0,204,68,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,204,68,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-[#00CC44] bg-[#00CC44]/15 flex items-center justify-center">
                      <IconMapPin className="w-6 h-6 text-[#00CC44]" />
                    </div>
                    <div className="bg-[#0D1520]/90 border border-white/10 rounded-xl px-4 py-2 text-center backdrop-blur-sm">
                      <div className="text-[11px] font-bold text-white">Olla Trade Ltd.</div>
                      <div className="text-[10px] text-white/40 mt-0.5">Grace Complex, The Valley, Anguilla</div>
                    </div>
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
                  <path d="M50,80 C100,60 150,90 200,70 C250,50 300,80 350,60" stroke="#00CC44" strokeWidth="1" fill="none"/>
                  <path d="M20,140 C80,120 160,150 220,130 C280,110 340,140 380,125" stroke="#00CC44" strokeWidth="0.5" fill="none"/>
                  <path d="M30,180 C100,165 180,185 240,170 C300,155 360,175 390,165" stroke="#00CC44" strokeWidth="0.5" fill="none" strokeDasharray="4 3"/>
                  <circle cx="200" cy="120" r="4" fill="#00CC44" opacity="0.8"/>
                  <circle cx="200" cy="120" r="10" fill="#00CC44" opacity="0.2"/>
                </svg>
              </div>
              <div className="px-5 py-4 border-t border-white/8">
                <p className="text-[11px] text-white/30 leading-relaxed">{t("map_note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance note */}
      <div className="bg-[#050C15] border-t border-white/5 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-white/20 text-center leading-relaxed">
            <strong className="text-white/30">{t("compliance_important")}</strong> {t("compliance_text").split("info@ollatrade.com")[0]}
            <a href="mailto:info@ollatrade.com" className="text-[#00CC44]/60 hover:text-[#00CC44] transition-colors">info@ollatrade.com</a>
            {t("compliance_text").split("info@ollatrade.com")[1]}
          </p>
        </div>
      </div>
    </>
  );
}
