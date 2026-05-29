import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  StaggerChildren,
  fadeUpItem,
} from "../../../components/ui/Animate";

/* ─────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Trading Education — Free Forex & CFD Learning Resources | Olla Trade",
  description:
    "Learn to trade Forex and CFDs with Olla Trade' free structured education hub. Beginner to advanced courses covering technical analysis, risk management, trading psychology, and more.",
};

/* ─────────────────────────────────────────────────────────────────────────
   Static generation
───────────────────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────── */
const learningPaths = [
  {
    level: "Beginner",
    color: "#22C55E",
    bgColor: "rgba(34,197,94,0.08)",
    borderColor: "rgba(34,197,94,0.25)",
    dotColor: "#22C55E",
    badge: "Start Here",
    who: "New to trading, never traded before",
    modules: [
      "What is Forex and how it works",
      "How financial markets operate",
      "Reading price charts",
      "Placing your first trade",
      "Understanding spreads and costs",
    ],
    time: "2–3 hours",
    cta: "Start Learning",
  },
  {
    level: "Intermediate",
    color: "#1A90C3",
    bgColor: "rgba(26,144,195,0.08)",
    borderColor: "rgba(26,144,195,0.25)",
    dotColor: "#1A90C3",
    badge: "Level Up",
    who: "Some experience, want to improve",
    modules: [
      "Technical analysis basics",
      "Fundamental analysis",
      "Chart patterns",
      "Indicators and oscillators",
      "Risk management principles",
    ],
    time: "4–5 hours",
    cta: "Continue Learning",
  },
  {
    level: "Advanced",
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
    borderColor: "rgba(139,92,246,0.25)",
    dotColor: "#8B5CF6",
    badge: "Go Deep",
    who: "Experienced traders seeking advanced strategies",
    modules: [
      "Advanced trading strategies",
      "Trading psychology and discipline",
      "Money management and position sizing",
      "EA and automated trading",
      "Portfolio diversification",
    ],
    time: "6+ hours",
    cta: "Go Advanced",
  },
];

const featuredTopics = [
  {
    emoji: "📈",
    title: "Technical Analysis",
    desc: "Master the art of reading price action, identifying patterns, and using indicators to time entries and exits with confidence.",
    bullets: [
      "Chart reading and candlestick patterns",
      "Indicators: RSI, MACD, Bollinger Bands",
      "Support and resistance levels",
    ],
  },
  {
    emoji: "📰",
    title: "Fundamental Analysis",
    desc: "Understand how economic data, central bank policy, and world events drive currency and asset prices in the global market.",
    bullets: [
      "Economic indicators: CPI, NFP, GDP",
      "Central bank decisions and impact",
      "News trading strategies",
    ],
  },
  {
    emoji: "🛡️",
    title: "Risk Management",
    desc: "Learn how professional traders protect their capital. Risk management is the single most important skill separating consistent traders from the rest.",
    bullets: [
      "Position sizing and lot calculation",
      "Stop-loss and take-profit placement",
      "Risk-to-reward ratio strategies",
    ],
  },
  {
    emoji: "🧠",
    title: "Trading Psychology",
    desc: "Explore the mental side of trading — managing emotions, building discipline, and developing the mindset required for long-term consistency.",
    bullets: [
      "Overcoming fear and greed",
      "Developing a trading routine",
      "Journaling and performance review",
    ],
  },
  {
    emoji: "💱",
    title: "Forex Basics",
    desc: "Build a solid foundation in forex fundamentals — from how currency pairs work to understanding pips, spreads, leverage, and margin.",
    bullets: [
      "Major, minor, and exotic currency pairs",
      "Pips, spreads, lots, and leverage explained",
      "How the forex market session works",
    ],
  },
  {
    emoji: "🖥️",
    title: "Platform Guide",
    desc: "A comprehensive walkthrough of MetaTrader 5 — the industry-standard trading platform. Learn to navigate, execute trades, and use tools effectively.",
    bullets: [
      "MT5 interface and chart setup",
      "Placing market and pending orders",
      "Expert Advisors and automated trading",
    ],
  },
];

const whyOllaPoints = [
  {
    icon: "🎓",
    title: "Structured curriculum",
    desc: "Carefully designed learning paths take you from complete beginner to advanced trader step by step, with no gaps in knowledge.",
  },
  {
    icon: "🆓",
    title: "Free for all registered clients",
    desc: "All education resources are included at no extra cost when you open an account with Olla Trade — no subscriptions required.",
  },
  {
    icon: "📊",
    title: "Practical, real-market examples",
    desc: "Every lesson is illustrated with real chart examples and market scenarios so you can immediately apply what you learn.",
  },
  {
    icon: "🔄",
    title: "Regularly updated content",
    desc: "Our education library is continuously expanded with new insights, strategies, and market analysis to keep pace with changing conditions.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────────────────── */
export default async function EducationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(26,144,195,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <SlideLeft>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-6 font-medium">
                <Link href="/tools" className="hover:text-[#1A90C3] transition-colors">
                  Tools
                </Link>
                <span>/</span>
                <span className="text-[#111827]">Education</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#BAE2F5] bg-[#EBF5FB] rounded-full px-3.5 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A90C3] animate-pulse" />
                <span className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest">
                  Education
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] leading-tight mb-5">
                Learn to Trade —{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1A90C3, #0EC4F1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Free Education
                </span>
              </h1>

              <p className="text-[16px] text-[#6B7280] leading-relaxed mb-8 max-w-lg">
                Access our complete library of free trading education — from absolute
                beginner basics to advanced strategies. Structured, practical, and
                updated regularly for traders at every level.
              </p>

              {/* Key facts row */}
              <div className="flex flex-wrap gap-6 mb-9">
                {[
                  { value: "3 Levels", label: "Beginner to Advanced" },
                  { value: "Free", label: "For all clients" },
                  { value: "Always", label: "Updated regularly" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-extrabold text-[#111827]">{value}</div>
                    <div className="text-[11px] text-[#6B7280] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary btn-lg"
                >
                  Open Free Account
                </Link>
                <Link href="#learning-paths" className="btn-secondary btn-lg">
                  Browse Courses
                </Link>
              </div>

              {/* Compliance note */}
              <p className="text-[11px] text-[#6B7280] mt-5 leading-relaxed">
                Education content is for informational and educational purposes only.
                It does not constitute investment advice. Olla Capital Financial
                Services L.L.C. — UAE SCA Lic. No. 20200000416.
              </p>
            </SlideLeft>

            {/* Right — visual card */}
            <SlideRight delay={0.1}>
              <div className="relative">
                <div
                  className="rounded-2xl border border-[#E5E7EB] bg-white shadow-sm p-6"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#E5E7EB]">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ background: "#EBF5FB", border: "1px solid #BAE2F5" }}
                    >
                      🎓
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#111827]">Education Hub</div>
                      <div className="text-[11px] text-[#6B7280]">Free for all Olla clients</div>
                    </div>
                    <span
                      className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(34,197,94,0.10)",
                        color: "#16A34A",
                        border: "1px solid rgba(34,197,94,0.25)",
                      }}
                    >
                      LIVE
                    </span>
                  </div>

                  {/* Learning path progress */}
                  <div className="space-y-3 mb-5">
                    {[
                      { label: "Forex Basics", pct: 100, color: "#22C55E" },
                      { label: "Technical Analysis", pct: 72, color: "#1A90C3" },
                      { label: "Risk Management", pct: 45, color: "#8B5CF6" },
                    ].map(({ label, pct, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="font-medium text-[#111827]">{label}</span>
                          <span className="text-[#6B7280]">{pct}%</span>
                        </div>
                        <div className="h-1.5 bg-[#F6F8FB] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${pct}%`, background: color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats chips */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E5E7EB]">
                    {[
                      { v: "6+", l: "Topics" },
                      { v: "3", l: "Paths" },
                      { v: "Free", l: "Always" },
                    ].map(({ v, l }) => (
                      <div
                        key={l}
                        className="rounded-xl p-3 text-center"
                        style={{ background: "#F6F8FB" }}
                      >
                        <div className="text-[16px] font-extrabold text-[#1A90C3]">{v}</div>
                        <div className="text-[10px] text-[#6B7280] mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating topic chips */}
                {[
                  { text: "📈 Technical Analysis", top: "8%",  right: "-16%", delay: 0 },
                  { text: "🧠 Psychology",          top: "55%", right: "-18%", delay: 0.15 },
                  { text: "🛡️ Risk Management",     top: "80%", left: "-16%",  delay: 0.3 },
                ].map(({ text, top, right, left, delay }) => (
                  <div
                    key={text}
                    className="absolute hidden lg:flex items-center rounded-xl px-3 py-2 border border-[#E5E7EB] bg-white shadow-sm text-[11px] font-semibold text-[#111827] whitespace-nowrap"
                    style={{ top, right, left }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── 2. LEARNING PATHS ────────────────────────────────────────── */}
      <section id="learning-paths" className="py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              Learning Paths
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              Choose Your Level
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto text-[15px]">
              Whether you have never placed a trade or you have years of experience,
              our structured paths meet you where you are and take you further.
            </p>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.level}
                // @ts-expect-error — motion variant passed via StaggerChildren
                variants={fadeUpItem}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-7 flex flex-col hover:border-gray-200 hover:shadow-md transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3"
                      style={{
                        background: path.bgColor,
                        color: path.color,
                        border: `1px solid ${path.borderColor}`,
                      }}
                    >
                      {path.badge}
                    </span>
                    <h3 className="text-[22px] font-extrabold text-[#111827]">
                      {path.level} Path
                    </h3>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                    style={{ background: path.dotColor }}
                  />
                </div>

                {/* Who it's for */}
                <p className="text-[13px] text-[#6B7280] mb-5 italic">
                  For: {path.who}
                </p>

                {/* Modules */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {path.modules.map((module) => (
                    <li key={module} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                      <svg
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: path.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {module}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-[#E5E7EB] pt-5 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] text-[#6B7280]">Estimated time</span>
                    <span
                      className="text-[12px] font-bold"
                      style={{ color: path.color }}
                    >
                      {path.time}
                    </span>
                  </div>
                  <Link
                    href="https://portal.ollatrade.com/auth/register"
                    className="btn-primary w-full text-center block"
                  >
                    {path.cta}
                  </Link>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 3. FEATURED TOPICS ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-3 text-center">
              Featured Topics
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">
              What You Will Learn
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto text-[15px]">
              Deep-dive into the subjects that matter most. Each topic is built
              around practical application so you can use what you learn in the
              real market immediately.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 gap-5">
            {featuredTopics.map((topic) => (
              <div
                key={topic.title}
                // @ts-expect-error — motion variant passed via StaggerChildren
                variants={fadeUpItem}
                className="bg-[#F6F8FB] rounded-2xl border border-[#BAE2F5]/40 p-6 hover:border-[#1A90C3]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Emoji icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: "#EBF5FB",
                      border: "1px solid #BAE2F5",
                    }}
                  >
                    {topic.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-bold text-[#111827] mb-1.5">
                      {topic.title}
                    </h3>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4">
                      {topic.desc}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-1.5">
                      {topic.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[12px] text-[#6B7280]"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1A90C3] flex-shrink-0 mt-1.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>

          {/* Disclaimer ribbon */}
          <FadeIn delay={0.2}>
            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex items-start gap-3 max-w-3xl mx-auto">
              <span className="text-lg flex-shrink-0">⚠️</span>
              <p className="text-[12px] text-amber-800 leading-relaxed">
                All education content on this platform is provided for informational
                and educational purposes only. It does not constitute investment
                advice, a recommendation to trade, or an offer of any financial
                product. Trading CFDs involves significant risk and losses can exceed
                your deposited capital. Please ensure you fully understand the risks
                before trading.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. WHY LEARN WITH Olla ──────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <SlideLeft>
              <div className="text-[11px] font-semibold text-[#1A90C3] uppercase tracking-widest mb-4">
                Why Olla Education
              </div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5 leading-tight">
                Education built for real traders
              </h2>
              <p className="text-[15px] text-[#6B7280] leading-relaxed mb-8">
                Most education out there is generic. Ours is designed specifically for
                the instruments, platforms, and market conditions our clients trade
                every day — practical from day one.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary"
                >
                  Access Free Education
                </Link>
                <Link href="/tools/glossary" className="btn-secondary">
                  Explore Glossary
                </Link>
              </div>
            </SlideLeft>

            {/* Right — feature points */}
            <SlideRight delay={0.1}>
              <div className="space-y-4">
                {whyOllaPoints.map((point, i) => (
                  <div
                    key={point.title}
                    className="flex items-start gap-4 bg-white rounded-2xl border border-[#E5E7EB] p-5 hover:border-[#BAE2F5] transition-colors"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "#EBF5FB", border: "1px solid #BAE2F5" }}
                    >
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-[#111827] mb-1 capitalize">
                        {point.title}
                      </h3>
                      <p className="text-[13px] text-[#6B7280] leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── 5. CTA — DARK NAVY ───────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: "#07111F" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#1A90C3]/30 bg-[#1A90C3]/10 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A90C3]" />
              <span className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest">
                Start Today — It is Free
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Open a Free Account to Access All Education
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed mb-9 max-w-xl mx-auto">
              All of our education resources are available free of charge to every
              registered Olla Trade client. Open your account in minutes and start
              learning today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-lg"
              >
                Open Free Account
              </Link>
              <Link href="/tools" className="btn-secondary btn-lg">
                View All Tools
              </Link>
            </div>

            <p className="text-[11px] text-white/18 mt-8 leading-relaxed max-w-lg mx-auto">
              Olla Capital Financial Services L.L.C. UAE SCA Reg. Lic. No.
              20200000416. Education content is for informational purposes only and
              does not constitute investment advice. CFDs are complex instruments and
              carry a high level of risk. Losses can exceed your deposited capital.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
