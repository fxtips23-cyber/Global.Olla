"use client";
import Image from "next/image";
import { FadeUp, SlideLeft, SlideRight } from "../ui/Animate";
import { IconCheck } from "../ui/Icons";

const FEATURES = [
  {
    img: "https://ollatrade.com/wp-content/uploads/2025/10/Trade-icon-with-BG-1.png",
    title: "UAE SCA Regulated",
    desc: "Olla Capital Financial Services L.L.C. is regulated by the UAE Securities and Commodities Authority (SCA), Licence No. 20200000416.",
  },
  {
    img: "https://ollatrade.com/wp-content/uploads/2025/10/Trade-icon-with-BG-2.png",
    title: "Fast Market Execution",
    desc: "Orders filled at best available market price. No requotes, no dealing desk intervention — pure market execution.",
  },
  {
    img: "https://ollatrade.com/wp-content/uploads/2025/10/Trade-icon-with-BG-3.png",
    title: "Competitive Conditions",
    desc: "Spreads from 0.0 pips on RAW accounts, leverage up to 1:500, no hidden fees on deposits or withdrawals.",
  },
];

const EXTRA = [
  { title: "Secure Client Portal", desc: "Multi-factor authenticated account management with full funds and document control." },
  { title: "Dedicated Support",    desc: "Professional client support Mon–Fri via phone, email, and live chat throughout market hours." },
  { title: "500+ Instruments",     desc: "Trade Forex, Metals, Indices, Futures, Crypto, and Energies — all from one account." },
];

const STATS = [
  { value: "21K+",      label: "Active Clients" },
  { value: "500+",      label: "Instruments" },
  { value: "24/5",      label: "Market Hours" },
  { value: "Est. 2020", label: "In Operation" },
];

export default function WhyOllaSection() {
  return (
    <section className="section-py" style={{ background: "#FFFFFF" }}>
      <div className="container-wide">

        {/* ── Header ── */}
        <FadeUp className="text-center mb-14">
          <span className="badge mb-4">Why Olla Trade</span>
          <h2
            className="font-extrabold leading-tight mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#07111F", letterSpacing: "-0.022em" }}
          >
            A Transparent{" "}
            <span className="text-gradient">Trading Environment</span>
          </h2>
          <p className="text-[16px] max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Professional trading conditions, transparent pricing, and dedicated client support —
            so you can focus on the markets, not the platform.
          </p>
        </FadeUp>

        {/* ── Three icon cards ── */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {FEATURES.map((f) => (
            <FadeUp key={f.title}>
              <div
                className="flex flex-col items-center text-center p-7 rounded-2xl border h-full transition-all duration-200 hover:border-blue-200 hover:shadow-md"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="w-16 h-16 mb-5 rounded-2xl overflow-hidden">
                  <Image src={f.img} alt={f.title} width={64} height={64} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[15px] font-bold mb-2" style={{ color: "#111827" }}>{f.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#6B7280" }}>{f.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ── Two-column: visual + feature list ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

          {/* Left: clients image */}
          <SlideLeft>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(26,144,195,0.08) 0%, transparent 70%)" }}
              />
              <Image
                src="https://ollatrade.com/wp-content/uploads/2025/10/clients.png"
                alt="Olla Trade Clients"
                width={600}
                height={500}
                className="relative w-full h-auto rounded-2xl"
              />
            </div>
          </SlideLeft>

          {/* Right: extra features */}
          <SlideRight>
            <span className="badge mb-5">Our Strengths</span>
            <h3
              className="font-extrabold mb-6 leading-tight"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#07111F", letterSpacing: "-0.02em" }}
            >
              Built for Serious Traders,<br />
              <span className="text-gradient">Accessible to All</span>
            </h3>

            <div className="space-y-5">
              {EXTRA.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#EBF5FB", border: "1px solid #BAE2F5" }}
                  >
                    <span style={{ color: "#1A90C3" }}>
                      <IconCheck className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold mb-0.5" style={{ color: "#111827" }}>{item.title}</div>
                    <div className="text-[13px] leading-relaxed" style={{ color: "#6B7280" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </SlideRight>
        </div>

        {/* ── Stats + regulation ── */}
        <FadeUp>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E5E7EB" }}>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-center text-center py-8 px-4 ${i < 3 ? "border-r border-[#E5E7EB]" : ""}`}
                >
                  <div
                    className="font-extrabold mb-1 leading-none text-gradient"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                  >
                    {value}
                  </div>
                  <div className="text-[13px] font-medium" style={{ color: "#6B7280" }}>{label}</div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t"
              style={{ background: "#F6F8FB", borderColor: "#E5E7EB" }}
            >
              <div className="flex items-center gap-3">
                <div className="icon-box icon-box-sm flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-semibold" style={{ color: "#111827" }}>UAE SCA Regulated Broker</div>
                  <div className="text-[11px]" style={{ color: "#6B7280" }}>Olla Capital Financial Services L.L.C. · Lic. No. 20200000416</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Negative Balance Protection", "Segregated Client Funds", "Secure Client Portal"].map((label) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1 rounded-lg"
                    style={{ background: "#EBF5FB", color: "#1478A6", border: "1px solid #BAE2F5" }}
                  >
                    <IconCheck className="w-3 h-3" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
