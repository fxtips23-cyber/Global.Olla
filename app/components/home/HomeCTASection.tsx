"use client";
import Link from "next/link";
import { FadeUp } from "../ui/Animate";

export default function HomeCTASection() {
  return (
    <section className="section-py hero-navy relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }} />

      <div className="relative container-narrow text-center">
        <FadeUp>
          <span className="badge badge-navy mb-5">Start Today</span>

          <h2 className="text-[32px] sm:text-[48px] font-extrabold leading-tight mb-5"
            style={{ color: "#FFFFFF", letterSpacing: "-0.025em" }}>
            Open Your Account in{" "}
            <span style={{ color: "#1A90C3" }}>Minutes</span>
          </h2>

          <p className="text-[16px] leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Join thousands of traders accessing global markets through the Olla Trade platform. Minimum deposit from $10.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href="https://portal.ollatrade.com/auth/register" className="btn-primary btn-lg">
              Open an Account
            </Link>
            <Link href="/contact-us"
              className="btn-secondary btn-lg"
              style={{ background: "transparent", color: "rgba(255,255,255,0.70)", borderColor: "rgba(255,255,255,0.15)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1A90C3"; el.style.color = "#fff"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.15)"; el.style.color = "rgba(255,255,255,0.70)"; }}>
              Contact Us
            </Link>
          </div>

          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            Trading Forex and CFDs involves significant risk of loss. Please read our{" "}
            <Link href="/legal/risk-disclosures"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Risk Disclosure
            </Link>{" "}
            before trading.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
