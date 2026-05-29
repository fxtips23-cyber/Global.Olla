"use client";
import Link from "next/link";
import { FadeUp, SlideLeft, SlideRight } from "../ui/Animate";

const BENEFITS = [
  {
    icon: "💰",
    title: "Competitive IB Commissions",
    desc: "Earn commissions on every trade your referred clients make — transparent, real-time trackable payouts.",
  },
  {
    icon: "📊",
    title: "Real-Time Partner Dashboard",
    desc: "Live statistics on referrals, trading volumes, and earnings in one intuitive partner portal.",
  },
  {
    icon: "🤝",
    title: "Dedicated Partner Manager",
    desc: "Personalised support from a dedicated account manager to help grow your IB network.",
  },
  {
    icon: "📣",
    title: "Full Marketing Support",
    desc: "Access co-branded materials, landing pages, and campaign assets — everything you need to scale.",
  },
];

const STEPS = [
  { n: "01", label: "Apply Online",      desc: "Submit your partner application in minutes." },
  { n: "02", label: "Get Approved",      desc: "Our team reviews and onboards you quickly." },
  { n: "03", label: "Refer & Earn",      desc: "Share your link and earn on every trade." },
];

export default function PartnerPreview() {
  return (
    <section className="section-py" style={{ background: "#FFFFFF" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: content */}
          <SlideLeft>
            <span className="badge mb-4">Partner Programme</span>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#07111F", letterSpacing: "-0.022em" }}
            >
              Grow Your Business<br />
              <span className="text-gradient">with Olla Trade</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              Join the Olla Trade Introducing Broker programme. Refer clients, earn
              competitive commissions on their trading activity, and receive full support
              from our dedicated partner team.
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {STEPS.map((s) => (
                <div key={s.n} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[13px] font-black"
                    style={{ background: "#07111F", color: "#1A90C3", minWidth: 40 }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold mb-0.5" style={{ color: "#111827" }}>{s.label}</div>
                    <div className="text-[13px]" style={{ color: "#6B7280" }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/company/affiliate" className="btn-primary btn-lg">
              Become a Partner
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </SlideLeft>

          {/* Right: benefit cards */}
          <SlideRight>
            <div className="grid sm:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <div
                  key={b.title}
                  className="flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-200 hover:border-blue-200 hover:shadow-sm"
                  style={{
                    borderColor: "#E5E7EB",
                    background: i === 0 ? "#F6F8FB" : "#FFFFFF",
                  }}
                >
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <h3 className="text-[14px] font-semibold mb-1" style={{ color: "#111827" }}>{b.title}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "#6B7280" }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div
              className="mt-5 rounded-2xl p-5 grid grid-cols-3 text-center"
              style={{ background: "#07111F" }}
            >
              {[
                { v: "No Cap",  l: "Referral Limit" },
                { v: "Real-Time", l: "Tracking" },
                { v: "24/5",    l: "Partner Support" },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col">
                  <span className="text-[17px] font-extrabold" style={{ color: "#1A90C3" }}>{v}</span>
                  <span className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</span>
                </div>
              ))}
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
