import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/constants";
import FAQSection from "../../../components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Complaints",
  description: "How to submit a formal complaint to Olla Trade. Our complaint handling process, timelines, and escalation procedures.",
};

function SectionLabel({ text }: { text: string }) {
  return <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">{text}</div>;
}

const complaintFaqs = [
  {
    q: "How long does it take to resolve a complaint?",
    a: "We acknowledge all complaints within 2 business days of receipt. We aim to provide a full written response within 10 business days. For complex matters that require additional investigation, resolution may take up to 30 business days. We will keep you informed of progress throughout the process.",
  },
  {
    q: "What information do I need to include in my complaint?",
    a: "To allow us to investigate your complaint thoroughly, please include: your full name, registered email address, account number, date of the event, a clear description of the issue, and copies of any relevant supporting documentation such as screenshots or trade history.",
  },
  {
    q: "Can I submit a complaint by phone?",
    a: "We recommend submitting formal complaints in writing to complaints@ollatrade.com to ensure we have a complete record of your concerns. You may also contact our support team by phone at +44 7418 641736 to discuss the matter informally before submitting a formal complaint.",
  },
  {
    q: "What if I am not satisfied with the outcome?",
    a: "If you are not satisfied with our final response, you may seek independent legal advice or escalate the matter to an appropriate external dispute resolution body. Details of escalation options are provided in our full Complaint Management Policy.",
  },
  {
    q: "Will submitting a complaint affect my account?",
    a: "No. Submitting a complaint will not affect your account status, trading privileges, or any pending transactions. All complaints are reviewed independently and impartially by our compliance team.",
  },
];

export default function ComplaintsPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(0,204,68,0.05) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <Link href="/company" className="hover:text-white/45 transition-colors">Company</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">Complaints</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Client Services</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
            Complaint Management
          </h1>
          <p className="text-[17px] text-white/40 max-w-2xl leading-relaxed mb-9">
            Olla Trade takes all client complaints seriously. If you are dissatisfied with any aspect of our service, this page explains how to submit a complaint and what to expect from our review process.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:complaints@ollatrade.com"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
              style={{ background: "#00CC44", color: "#000" }}>
              Submit a Complaint
            </a>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] text-white/65 hover:text-white transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
              Contact Support First
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Step-by-step process ──────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="Complaint Process" />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-4">How to Submit a Complaint</h2>
          <p className="text-gray-500 text-[15px] mb-12 max-w-2xl leading-relaxed">
            Follow these steps to ensure your complaint is handled quickly and thoroughly.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Contact Support First",
                desc: "Many issues can be resolved quickly by our customer support team. Email cst@ollatrade.com or call +44 7418 641736 before submitting a formal complaint.",
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
              {
                step: "02",
                title: "Submit Formal Complaint",
                desc: "If unresolved, send a written complaint to complaints@ollatrade.com. Include your full name, account number, date of the incident, detailed description, and supporting documents.",
                icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
              },
              {
                step: "03",
                title: "Acknowledgement",
                desc: "We will acknowledge your complaint in writing within 2 business days, providing a complaint reference number and the name of the person responsible for your case.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                step: "04",
                title: "Resolution",
                desc: "We aim to provide a final written response within 10 business days. Complex cases may take up to 30 business days. We will update you throughout the process.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="bg-white border border-gray-100 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[32px] font-black text-gray-50 leading-none select-none">{step}</div>
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Required information ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel text="Required Information" />
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">What to Include in Your Complaint</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
                To ensure your complaint is processed without delay, please include the following information in your initial complaint email. Incomplete submissions may require us to request additional information, which can extend the review timeline.
              </p>
              <div className="space-y-3">
                {[
                  "Your full registered name",
                  "Registered email address",
                  "Account number",
                  "Date and time of the incident",
                  "Clear description of the complaint",
                  "Desired resolution or outcome",
                  "Supporting documents (screenshots, statements, emails)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00CC44]/10 border border-[#00CC44]/20 text-[#00CC44] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-[13px] text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Complaint categories */}
            <div>
              <SectionLabel text="Complaint Categories" />
              <h2 className="text-3xl font-extrabold text-[#111827] mb-4">Types of Complaints We Handle</h2>
              <div className="space-y-3">
                {[
                  { title: "Order Execution",      desc: "Concerns about how an order was executed, including unexpected prices, delays, or rejected orders." },
                  { title: "Deposit & Withdrawal", desc: "Issues with funding or withdrawing from your account, including delays, failed transactions, or discrepancies." },
                  { title: "Account Management",   desc: "Concerns about account verification (KYC), access restrictions, or account closure." },
                  { title: "Technical Issues",     desc: "Platform errors, connectivity problems, or technical failures that affected your trading." },
                  { title: "Communication",        desc: "Concerns about the quality, accuracy, or conduct of communications with our team." },
                  { title: "Fees & Charges",       desc: "Disputes about fees, charges, or deductions applied to your account." },
                ].map(({ title, desc }) => (
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

      {/* ── 4. Review & response process ─────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="Review Process" />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">How We Review Your Complaint</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Independent Review",    desc: "All complaints are reviewed by our compliance team, independent of the department involved. This ensures an impartial assessment of your concerns." },
              { title: "Full Investigation",    desc: "We investigate all aspects of your complaint, including reviewing account records, trade history, communications, and any documentation you provide." },
              { title: "Written Response",      desc: "You will receive a written response outlining our findings, the decision reached, and any remedial action taken. All decisions are communicated in plain language." },
              { title: "Additional Information",desc: "We may contact you for further information during the investigation. Please respond promptly to avoid delays in the resolution process." },
              { title: "Record Keeping",        desc: "All complaint records are retained for a minimum of 5 years. Complaint data is used to improve our services and identify patterns or systemic issues." },
              { title: "Confidentiality",       desc: "Your complaint and all related correspondence are treated with strict confidentiality and handled in accordance with our Privacy Policy." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <h3 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Timeline ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="Response Timelines" />
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10">What to Expect and When</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA] border-b border-gray-100">
                <tr>
                  {["Stage", "Action", "Timeline"].map(h => (
                    <th key={h} className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Receipt",         "Complaint received and logged",                   "Immediate"],
                  ["Acknowledgement", "Written acknowledgement and reference number",    "Within 2 business days"],
                  ["Investigation",   "Full investigation of all complaint aspects",     "Within 10 business days"],
                  ["Complex Cases",   "Extended review for complex complaints",          "Up to 30 business days"],
                  ["Final Response",  "Written decision with findings and any remedies", "On completion of review"],
                ].map(([stage, action, timeline]) => (
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

      {/* ── 6. Escalation ────────────────────────────────────────── */}
      <section className="py-16 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel text="Escalation" />
              <h2 className="text-3xl font-extrabold text-white mb-4">Not Satisfied with the Outcome?</h2>
              <p className="text-white/45 text-[15px] leading-relaxed mb-6">
                If you are not satisfied with our final written response, you have the right to escalate your complaint to an appropriate external body or seek independent legal advice. Olla Trade will co-operate fully with any external review process.
              </p>
              <p className="text-white/45 text-[15px] leading-relaxed mb-8">
                Please note that external dispute resolution bodies may have their own eligibility criteria and processes. Our full Complaint Management Policy is available in our Legal Documents section.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/legal/complaint-management"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-[13px] transition-colors"
                  style={{ background: "#00CC44", color: "#000" }}>
                  Complaint Management Policy
                </Link>
                <a href="mailto:complaints@ollatrade.com"
                  className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-xl text-[13px] text-white/65 hover:text-white transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
                  Email Complaints Team
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Complaints Email",    value: "complaints@ollatrade.com",                           sub: "For formal written complaints" },
                { title: "General Support",     value: SITE.email,                                           sub: "For general assistance" },
                { title: "Phone",               value: SITE.phone,                                           sub: "Monday – Friday, 24/5" },
                { title: "Registered Address",  value: "Grace Complex, The Valley, AI 2640, Anguilla",        sub: "Olla Trade Ltd. · Reg. No. A000001849" },
              ].map(({ title, value, sub }) => (
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

      {/* ── 7. Submit CTA ────────────────────────────────────────── */}
      <section className="py-14 bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#111827] mb-3">Ready to Submit a Complaint?</h2>
            <p className="text-[14px] text-gray-500 mb-6 max-w-xl mx-auto leading-relaxed">
              Email our complaints team directly at <a href="mailto:complaints@ollatrade.com" className="text-[#00CC44] font-semibold hover:underline">complaints@ollatrade.com</a>. Include your account number and a clear description of your concerns. Alternatively, contact our support team first — many issues can be resolved without a formal complaint.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:complaints@ollatrade.com"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
                style={{ background: "#00CC44", color: "#000" }}>
                complaints@ollatrade.com
              </a>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] text-[#111827] hover:text-[#00CC44] transition-colors"
                style={{ border: "1px solid #e5e7eb" }}>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────── */}
      <FAQSection
        title="Complaint FAQ"
        subtitle="Common questions about our complaint handling process and timelines."
        faqs={complaintFaqs}
      />

      {/* ── 9. Legal note ────────────────────────────────────────── */}
      <div className="bg-[#050C15] border-t border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-white/20 text-center leading-relaxed">
            Olla Trade Ltd. is incorporated in Anguilla (Reg. No. A000001849) and operates as an execution-only trading service. All complaints are handled in accordance with our internal Complaint Management Policy. Complaint records are retained for a minimum of 5 years. This page does not constitute legal advice. For full details, refer to our{" "}
            <Link href="/legal/complaint-management" className="text-[#00CC44]/60 hover:text-[#00CC44] transition-colors">Complaint Management Policy</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
