"use client";
import Image from "next/image";
import Link from "next/link";
import { SlideLeft, SlideRight, FadeUp } from "../ui/Animate";

const FEATURES = [
  { icon: "⚡", title: "Fast Execution",   desc: "Market execution with no requotes" },
  { icon: "📱", title: "All Devices",      desc: "Desktop, WebTrader & mobile apps" },
  { icon: "🤖", title: "EA Support",       desc: "Full Expert Advisor & MQL5 support" },
  { icon: "📊", title: "30+ Indicators",   desc: "Advanced technical analysis tools" },
  { icon: "🔔", title: "Price Alerts",     desc: "Custom alerts & push notifications" },
  { icon: "📈", title: "9 Timeframes",     desc: "Multi-chart layouts & analysis" },
];

export default function PlatformPreview() {
  return (
    <section className="section-py" style={{ background: "#07111F" }}>
      <div className="container-wide">

        {/* ── Top heading ── */}
        <FadeUp className="text-center mb-14">
          <span className="badge badge-navy mb-4">Trading Platform</span>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "#FFFFFF", letterSpacing: "-0.022em" }}
          >
            MetaTrader 5 —{" "}
            <span style={{ color: "#1A90C3" }}>Professional Grade</span>
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: real platform screenshots stacked */}
          <SlideLeft className="order-2 lg:order-1">
            <div className="relative">
              {/* Background glow */}
              <div
                className="absolute -inset-6 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(26,144,195,0.12) 0%, transparent 70%)" }}
              />

              {/* Primary platform image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "rgba(26,144,195,0.2)" }}>
                <Image
                  src="https://ollatrade.com/wp-content/uploads/2025/10/market-insight-image-1.png"
                  alt="MT5 Trading Platform — Olla Trade"
                  width={700}
                  height={480}
                  className="w-full h-auto"
                />
              </div>

              {/* Secondary image overlapping bottom right */}
              <div
                className="absolute -bottom-6 -right-4 w-[55%] rounded-xl overflow-hidden shadow-2xl border"
                style={{ borderColor: "rgba(26,144,195,0.25)" }}
              >
                <Image
                  src="https://ollatrade.com/wp-content/uploads/2025/10/market-insight-image-2-e1760539913355.png"
                  alt="MT5 Market Analysis"
                  width={400}
                  height={280}
                  className="w-full h-auto"
                />
              </div>

              {/* MT5 badge */}
              <div
                className="absolute top-4 -left-4 rounded-xl px-3.5 py-2.5 shadow-xl border"
                style={{ background: "#FFFFFF", borderColor: "#E5E7EB" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[12px] font-semibold text-gray-700">MT5 Available</span>
                </div>
              </div>
            </div>
          </SlideLeft>

          {/* Right: content */}
          <SlideRight className="order-1 lg:order-2">
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              The world&apos;s most trusted trading platform — available on desktop, browser, and mobile.
              Full Expert Advisor support, 30+ built-in indicators, and real-time data across all
              asset classes.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {FEATURES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-3.5 rounded-xl transition-colors hover:bg-white/8"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <div className="text-[13px] font-semibold mb-0.5" style={{ color: "rgba(255,255,255,0.85)" }}>{title}</div>
                    <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/trading/platform" className="btn-primary">
                Explore Platform
              </Link>
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-secondary"
                style={{ background: "transparent", color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1A90C3"; el.style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.15)"; el.style.color = "rgba(255,255,255,0.65)"; }}
              >
                Start Trading →
              </Link>
            </div>

            {/* App download chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: "Google Play", icon: "▶" },
                { label: "App Store",   icon: "" },
                { label: "WebTrader",   icon: "🌐" },
              ].map(({ label, icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.45)" }}
                >
                  {icon} {label}
                </span>
              ))}
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
