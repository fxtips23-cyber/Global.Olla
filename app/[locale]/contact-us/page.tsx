import { contactFaqs } from '../../data/faqs';
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import FAQSection from "../../components/ui/FAQSection";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconHeadset,
  IconUsers,
  IconShield,
  IconClock,
  IconBook,
  IconActivity,
  IconMonitor,
  IconCheck,
} from "../../components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the Olla Trade support team for account assistance, funding queries, platform support, and general enquiries. Available Monday to Friday.",
};

/* ─── Data ───────────────────────────────────────────────────────────── */

const contactCards = [
  {
    Icon: IconMail,
    title: "General Enquiries",
    detail: "info@ollatrade.com",
    href: "mailto:info@ollatrade.com",
    desc: "For general information about Olla Trade services, accounts, and promotions.",
    cta: "Send Email",
  },
  {
    Icon: IconHeadset,
    title: "Client Support",
    detail: "cst@ollatrade.com",
    href: "mailto:cst@ollatrade.com",
    desc: "For assistance with your live trading account, funding, and technical issues.",
    cta: "Contact Support",
  },
  {
    Icon: IconUsers,
    title: "Partnership / Affiliate",
    detail: "info@ollatrade.com",
    href: "mailto:info@ollatrade.com",
    desc: "To enquire about our affiliate and partner programme or discuss a business partnership.",
    cta: "Partner With Us",
  },
  {
    Icon: IconShield,
    title: "Compliance & Complaints",
    detail: "View Complaints Process",
    href: "/company/complaints",
    desc: "To submit a formal complaint or enquire about regulatory and compliance matters.",
    cta: "Complaints Process",
  },
];

const officeDetails = [
  {
    Icon: IconMapPin,
    label: "Registered Address",
    lines: ["Olla Trade Ltd.", "Grace Complex, The Valley", "AI 2640, Anguilla", "Reg. No. A000001849"],
    accent: "#00CC44",
    accentBg: "rgba(0,204,68,0.13)",
    accentBorder: "rgba(0,204,68,0.28)",
    barFrom: "#00CC44",
    barTo: "#009933",
  },
  {
    Icon: IconPhone,
    label: "Phone (24/5)",
    lines: ["+44 7418 641736"],
    accent: "#00BFA5",
    accentBg: "rgba(0,191,165,0.13)",
    accentBorder: "rgba(0,191,165,0.28)",
    barFrom: "#00BFA5",
    barTo: "#00897B",
  },
  {
    Icon: IconMail,
    label: "Email",
    lines: ["info@ollatrade.com", "cst@ollatrade.com"],
    accent: "#AB47BC",
    accentBg: "rgba(171,71,188,0.13)",
    accentBorder: "rgba(171,71,188,0.28)",
    barFrom: "#AB47BC",
    barTo: "#7B1FA2",
  },
];

const quickHelp = [
  { Icon: IconUsers,    title: "Account Registration",    desc: "Open a Standard, Pro or Elite live account in under 5 minutes.",   href: "https://direct.ollatrade.com/auth/register" },
  { Icon: IconActivity, title: "Funding & Withdrawals",  desc: "Deposit and withdraw funds securely via your client portal.",       href: "/funding-and-withdrawals" },
  { Icon: IconMonitor,  title: "Platform Support",        desc: "MetaTrader 4 setup, EA configuration, and technical guidance.",     href: "/trading/platform" },
  { Icon: IconBook,     title: "Partner Programme",       desc: "Join the Olla Trade affiliate programme and earn commissions.",    href: "/company/affiliate" },
  { Icon: IconShield,   title: "Complaints",              desc: "Submit a formal complaint through our structured complaints process.", href: "/company/complaints" },
];

const faqs = [
  { q: "How can I contact Olla Trade support?", a: "You can reach our support team by email at cst@ollatrade.com or info@ollatrade.com. Alternatively, use the contact form on this page. Our team is available Monday to Friday, 24 hours a day (24/5). Please include your account number and a clear description of your enquiry to speed up the response." },
  { q: "How do I request a withdrawal?", a: "Log in to your Olla Trade client portal at direct.ollatrade.com, navigate to the Funding and Withdrawals section, select Withdraw, choose your method, enter the amount, and submit your request. Ensure your account verification (KYC) is completed before requesting a withdrawal. Processing typically takes 24–48 business hours." },
  { q: "Where can I find my account details?", a: "Your account details — including account number, server address, and balance — are available in your Olla Trade client portal after logging in. Your MT4 login credentials and server address were also sent to you in your welcome email upon registration." },
  { q: "How do I become an Olla Trade partner?", a: "To enquire about our affiliate and partner programme, email us at info@ollatrade.com or visit our Partner Programme page. Our team will review your application and get back to you with available commission models and onboarding steps." },
  { q: "How do I submit a formal complaint?", a: "To submit a formal complaint, email our compliance team at info@ollatrade.com with your full name, account number, description of the issue, and any supporting documentation. We acknowledge complaints within 2 business days and aim to resolve them within 10 business days. Full details are available on our Complaints page." },
];

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function ContactUsPage() {
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
            <Link href="/" className="hover:text-white/45 transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">Contact Us</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Get in Touch</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
            Contact Olla Trade
          </h1>
          <p className="text-[17px] text-white/40 max-w-2xl leading-relaxed mb-9">
            Get in touch with our support team for account assistance, funding queries, trading platform support, and general enquiries. We&apos;re available Monday to Friday, 24 hours a day.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact-form"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
              style={{ background: "#00CC44", color: "#000" }}>
              Get Support
            </a>
            <Link href="https://direct.ollatrade.com/auth/register"
              className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-all text-white/65 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              Open Account
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Contact cards ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map(({ Icon, title, detail, href, desc, cta }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col hover:border-[#00CC44]/20 hover:shadow-md transition-all duration-200">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#111827] mb-1.5">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-4 flex-1">{desc}</p>
                <a href={href}
                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors group mt-auto">
                  <span className="font-mono text-[11px] text-gray-400 block mb-1">{detail}</span>
                </a>
                <a href={href}
                  className="mt-2 w-full flex items-center justify-center border border-[#00CC44]/25 hover:bg-[#00CC44] hover:text-black hover:border-[#00CC44] text-[#00CC44] font-semibold py-2.5 rounded-lg text-[12px] transition-all">
                  {cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Office information ─────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-8">Company Information</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {officeDetails.map(({ Icon, label, lines, accent, accentBg, accentBorder, barFrom, barTo }) => (
              <div
                key={label}
                className="relative bg-[#0D1520] rounded-2xl overflow-hidden border border-white/8 hover:border-white/16 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
              >
                {/* Coloured top bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${barFrom}, ${barTo})` }}
                />

                <div className="p-5">
                  {/* Icon with coloured bg */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Label */}
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: accent }}
                  >
                    {label}
                  </div>

                  {/* Value lines */}
                  <div className="space-y-0.5">
                    {lines.map((l) => (
                      <div key={l} className="text-[13px] text-white/65 leading-relaxed">{l}</div>
                    ))}
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

            {/* Left: Info panel */}
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Send a Message</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4 leading-tight">How Can We Help You?</h2>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
                Fill in the form and our team will get back to you within one business day. For urgent account matters, email <a href="mailto:cst@ollatrade.com" className="text-[#00CC44] hover:underline">cst@ollatrade.com</a> directly.
              </p>

              {/* Response time card */}
              <div className="bg-[#111827] rounded-2xl p-5 mb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#00CC44]/15 border border-[#00CC44]/25 text-[#00CC44] flex items-center justify-center">
                    <IconClock className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-bold text-white">Response Times</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    ["General enquiries", "1 business day"],
                    ["Account support",   "Same business day"],
                    ["Partnerships",      "2–3 business days"],
                    ["Complaints",        "2 business days"],
                  ].map(([type, time]) => (
                    <div key={type} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-[12px] text-white/40">{type}</span>
                      <span className="text-[12px] text-[#00CC44] font-semibold">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support hours */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center">
                    <IconHeadset className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-bold text-[#111827]">Support Availability</span>
                </div>
                <div className="space-y-1.5 text-[12px]">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Hours</span>
                    <span className="font-semibold text-[#111827]">24/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Days</span>
                    <span className="font-semibold text-[#111827]">Monday – Friday</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Weekends</span>
                    <span className="text-gray-500">Limited availability</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Quick help ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Self-Service</div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3">Quick Help</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
              Find answers and manage your account directly — without waiting for a response.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {quickHelp.map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}
                className="group bg-[#F5F7FA] border border-gray-100 rounded-2xl p-5 text-center hover:bg-white hover:border-[#00CC44]/20 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-400 flex items-center justify-center mx-auto mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-[13px] font-bold text-[#111827] mb-2 group-hover:text-[#00AA38] transition-colors">{title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Support availability ──────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Support Hours</div>
              <h2 className="text-3xl font-extrabold text-white mb-4">We&apos;re Available 24/5</h2>
              <p className="text-white/45 text-[15px] leading-relaxed mb-8">
                Our client support team is available Monday through Friday, 24 hours a day, to assist with account questions, platform support, funding enquiries, and more. Weekend support may be limited — for urgent matters, please email <a href="mailto:cst@ollatrade.com" className="text-[#00CC44] hover:underline">cst@ollatrade.com</a>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:info@ollatrade.com"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-[13px] transition-colors"
                  style={{ background: "#00CC44", color: "#000" }}>
                  Email Us
                </a>
                <Link href="/company/help"
                  className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-xl text-[13px] text-white/55 hover:text-white transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                  View FAQs
                </Link>
              </div>
            </div>

            {/* Availability grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { day: "Monday – Friday", hours: "24 hours", status: "Available", active: true },
                { day: "Saturday",        hours: "Limited", status: "Limited",    active: false },
                { day: "Sunday",          hours: "Limited", status: "Limited",    active: false },
                { day: "Public Holidays", hours: "May vary", status: "May vary",  active: false },
              ].map(({ day, hours, status, active }) => (
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
              {/* Channels */}
              <div className="sm:col-span-2 border border-white/8 rounded-xl p-4">
                <div className="text-[11px] font-bold text-white/30 uppercase tracking-wider mb-3">Contact Channels</div>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    { Ic: IconMail,  label: "Email Support", value: "info@ollatrade.com" },
                    { Ic: IconPhone, label: "Phone",         value: "+44 7418 641736"   },
                  ] as const).map(({ Ic, label, value }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/6 text-white/30 flex items-center justify-center flex-shrink-0">
                        <Ic className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/25 leading-none">{label}</div>
                        <div className="text-[11px] text-white/55 font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────── */}
      <FAQSection
        title="Contact & Support FAQs"
        subtitle="Common questions about reaching our team and managing your account."
        faqs={contactFaqs}
      />

      {/* ── 8. Map / address card ─────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* Address card */}
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl p-7">
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Our Address</div>
              <div className="space-y-5">
                {[
                  { label: "Registered Address", Icon: IconMapPin, lines: ["Olla Trade Ltd.", "Grace Complex, The Valley", "AI 2640, Anguilla", "Registration No. A000001849"] },
                ].map(({ label, Icon: Ic, lines }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl border border-gray-200 bg-white text-gray-400 flex items-center justify-center flex-shrink-0">
                      <Ic className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                      {lines.map((l) => <div key={l} className="text-[13px] text-gray-700 leading-relaxed">{l}</div>)}
                    </div>
                  </div>
                ))}
              </div>
              {/* Legal note */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Olla Trade Ltd. is incorporated in Anguilla as an International Business Company, operating as an execution-only trading service. Please use the contact channels above for all enquiries.
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#0A1520] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
              {/* Simulated map */}
              <div className="flex-1 relative min-h-[200px]" style={{ background: "#0D1828" }}>
                {/* Grid pattern suggesting map tiles */}
                <div className="absolute inset-0"
                  style={{ backgroundImage: "linear-gradient(rgba(0,204,68,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,204,68,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                {/* Map pin */}
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
                {/* Decorative map lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
                  <path d="M50,80 C100,60 150,90 200,70 C250,50 300,80 350,60" stroke="#00CC44" strokeWidth="1" fill="none"/>
                  <path d="M20,140 C80,120 160,150 220,130 C280,110 340,140 380,125" stroke="#00CC44" strokeWidth="0.5" fill="none"/>
                  <path d="M30,180 C100,165 180,185 240,170 C300,155 360,175 390,165" stroke="#00CC44" strokeWidth="0.5" fill="none" strokeDasharray="4 3"/>
                  <circle cx="200" cy="120" r="4" fill="#00CC44" opacity="0.8"/>
                  <circle cx="200" cy="120" r="10" fill="#00CC44" opacity="0.2"/>
                </svg>
              </div>
              {/* Map footer */}
              <div className="px-5 py-4 border-t border-white/8">
                <p className="text-[11px] text-white/30 leading-relaxed">
                  Olla Trade does not operate client-facing offices. All account management is conducted through the secure online client portal. Please contact us via email or phone for all enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance note */}
      <div className="bg-[#050C15] border-t border-white/5 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-white/20 text-center leading-relaxed">
            <strong className="text-white/30">Important:</strong> Olla Trade staff will never request your account password or PIN via email, phone, or chat. If you receive such a request, do not comply and report it immediately to <a href="mailto:info@ollatrade.com" className="text-[#00CC44]/60 hover:text-[#00CC44] transition-colors">info@ollatrade.com</a>. Olla Trade Ltd. is incorporated in Anguilla (Reg. No. A000001849) and operates as an execution-only service.
          </p>
        </div>
      </div>
    </>
  );
}
