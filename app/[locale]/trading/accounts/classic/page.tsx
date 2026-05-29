import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  ScaleIn,
} from "../../../../components/ui/Animate";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Classic Account | Olla Trade — Start Trading with $10",
    description:
      "Open a Classic trading account with Olla Trade. Minimum deposit $10, spreads from 1.4 pips, commission-free, leverage up to 1:500. Trade 500+ instruments on MetaTrader 5.",
    openGraph: {
      title: "Classic Account | Olla Trade",
      description:
        "Start trading with just $10. Commission-free access to 500+ instruments including forex, metals, indices, crypto and commodities on MT5.",
      type: "website",
    },
  };
}

/* ─── Inline SVG Icons ──────────────────────────────────────────────── */
function IconNoCommission({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v2m0 8v2m-4-6h8" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconInstruments({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="3" width="6" height="18" rx="1" />
      <rect x="9" y="8" width="6" height="13" rx="1" />
      <rect x="16" y="5" width="6" height="16" rx="1" />
    </svg>
  );
}
function IconLeverage({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M2 20h20M6 20V10l6-8 6 8v10" />
    </svg>
  );
}
function IconExecution({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
function IconSupport({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconPlatform({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconDesktop({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function IconWeb({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  );
}
function IconMobile({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
function IconChevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function IconArrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Static Data ───────────────────────────────────────────────────── */
const features = [
  {
    Icon: IconNoCommission,
    title: "No Commission",
    desc: "Trade all available instruments commission-free. The cost of trading is incorporated into the spread — no hidden fees or per-lot charges.",
  },
  {
    Icon: IconInstruments,
    title: "500+ Instruments",
    desc: "Access forex, metals, indices, commodities, and crypto — all from a single Classic account on MetaTrader 5.",
  },
  {
    Icon: IconLeverage,
    title: "Up to 1:500 Leverage",
    desc: "Flexible leverage up to 1:500, allowing you to control larger positions with a smaller initial outlay.",
  },
  {
    Icon: IconExecution,
    title: "Market Execution",
    desc: "Orders are filled at prevailing market prices. No requotes and no dealing desk intervention on any instrument.",
  },
  {
    Icon: IconSupport,
    title: "24/5 Support",
    desc: "Our client support team is available Monday through Friday around the clock to assist with any trading queries.",
  },
  {
    Icon: IconPlatform,
    title: "MetaTrader 5",
    desc: "Full access to MT5 Desktop, MT5 WebTrader, and MT5 Mobile — professional-grade tools on every device you own.",
  },
];

const tradingConditions = [
  { label: "Minimum Deposit", value: "$10" },
  { label: "Spreads", value: "From 1.4 pips" },
  { label: "Commission", value: "None" },
  { label: "Max Leverage", value: "Up to 1:500" },
  { label: "Margin Call", value: "100%" },
  { label: "Stop Out", value: "50%" },
  { label: "Instruments", value: "500+" },
  { label: "Execution Type", value: "Market execution" },
];

const platforms = [
  {
    Icon: IconDesktop,
    name: "MT5 Desktop",
    desc: "Full-featured platform for Windows. Advanced charting, 21 timeframes, one-click trading, and full Expert Advisor support.",
    tag: "Download",
  },
  {
    Icon: IconWeb,
    name: "MT5 WebTrader",
    desc: "No download required. Trade directly from your browser on any operating system — including macOS and Linux.",
    tag: "No install",
  },
  {
    Icon: IconMobile,
    name: "MT5 Mobile",
    desc: "Full trading functionality on iOS and Android. Monitor positions, analyse charts, and execute orders from anywhere.",
    tag: "iOS & Android",
  },
];

const faqs = [
  {
    q: "What is the minimum deposit for the Classic account?",
    a: "The minimum deposit to open and fund a Classic account with Olla Trade is $10. This makes the Classic account one of the most accessible live trading accounts available for new and retail traders.",
  },
  {
    q: "What are the spreads on the Classic account?",
    a: "Classic account spreads start from 1.4 pips on major forex pairs such as EUR/USD. Spreads are variable and may widen during periods of high market volatility, low liquidity, or around major news events.",
  },
  {
    q: "Is there a commission on the Classic account?",
    a: "No. The Classic account is fully commission-free. The cost of trading is incorporated into the spread. There are no per-trade or per-lot commissions charged on any instrument.",
  },
  {
    q: "What leverage is available on the Classic account?",
    a: "The Classic account offers leverage up to 1:500. The leverage available to you may vary depending on the instrument traded, regulatory requirements applicable to your jurisdiction, and your account profile. Higher leverage magnifies both potential gains and potential losses.",
  },
  {
    q: "Can I upgrade from a Classic account to a Pro or RAW account?",
    a: "Yes. You can open additional account types through the Olla Trade client portal at any time. If you wish to access tighter spreads or raw ECN pricing, the Pro account (minimum deposit $2,000) or the RAW account may be more suitable for your trading style.",
  },
];

const traderProfiles = [
  {
    title: "New to Forex Trading",
    desc: "The Classic account is designed for traders taking their first steps in live markets. A $10 minimum deposit keeps the barrier to entry low, while full MT5 access gives you professional-grade tools from day one.",
    highlights: ["$10 minimum deposit", "No commission to manage", "Full MT5 platform access"],
    delay: 0,
  },
  {
    title: "Exploring the Markets",
    desc: "Test strategies across 500+ instruments without committing large capital. Commission-free trading means your costs remain straightforward while you develop and refine your approach.",
    highlights: ["500+ tradable instruments", "Commission-free trading", "Market execution — no requotes"],
    delay: 0.08,
  },
  {
    title: "Retail Investors",
    desc: "Access a diversified range of asset classes — forex, metals, indices, commodities, and crypto — from one account. Flexible leverage and a simple cost structure make Classic a practical starting point.",
    highlights: ["Forex, metals, indices, crypto", "Up to 1:500 leverage", "24/5 customer support"],
    delay: 0.16,
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default async function ClassicAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF5FB] via-[#F6F8FB] to-white py-20 lg:py-28">
        {/* Decorative glows */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 72% 18%, rgba(26,144,195,0.12) 0%, transparent 52%), radial-gradient(circle at 12% 82%, rgba(26,144,195,0.07) 0%, transparent 48%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,144,195,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,144,195,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#1A90C3]/10 border border-[#1A90C3]/25 text-[#1A90C3] text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Classic Account
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeUp delay={0.05}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#07111F] leading-tight mb-5">
                Start Trading{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1A90C3 0%, #0E6A96 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  with $10
                </span>
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.1}>
              <p className="text-[17px] text-[#6B7280] leading-relaxed max-w-xl mx-auto mb-10">
                The Classic account gives you commission-free access to 500+ instruments across forex, metals,
                indices, crypto, and commodities — all on MetaTrader 5.
              </p>
            </FadeUp>

            {/* Key stats row */}
            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
                {[
                  { value: "$10", label: "Min. Deposit" },
                  { value: "1.4 pips", label: "Spreads From" },
                  { value: "1:500", label: "Max Leverage" },
                  { value: "500+", label: "Instruments" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white border border-[#E5E7EB] rounded-2xl px-4 py-4 shadow-sm"
                  >
                    <div className="text-xl font-extrabold text-[#07111F] leading-none mb-1">
                      {value}
                    </div>
                    <div className="text-[11px] text-[#6B7280] font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A90C3] hover:bg-[#1578A8] text-white font-bold px-8 py-4 rounded-xl text-[15px] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1A90C3]/25"
                >
                  Open Classic Account
                  <IconArrow className="w-4 h-4" />
                </Link>
                <Link
                  href="/trading/accounts"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F6F8FB] border border-[#E5E7EB] text-[#07111F] font-semibold px-8 py-4 rounded-xl text-[15px] transition-all hover:-translate-y-0.5"
                >
                  Compare Accounts
                </Link>
              </div>
            </FadeUp>

            {/* Regulatory note */}
            <FadeIn delay={0.3}>
              <p className="mt-6 text-[11px] text-[#6B7280]">
                Olla Capital Financial Services L.L.C. — UAE SCA Licensed (No. 20200000416). Trading involves risk.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 2. WHO THIS ACCOUNT IS FOR ──────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F6F8FB]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
                Who It&apos;s For
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
                Built for Traders Starting Out
              </h2>
              <p className="text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                Whether you are new to trading or looking to diversify with smaller capital, the Classic account is designed around accessibility and simplicity.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-5">
            {traderProfiles.map(({ title, desc, highlights, delay }) => (
              <FadeUp key={title} delay={delay}>
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                  <h3 className="text-[17px] font-extrabold text-[#07111F] mb-3">{title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[13px] text-[#111827]">
                        <span className="w-4 h-4 rounded-full bg-[#EBF5FB] border border-[#1A90C3]/25 flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-2.5 h-2.5 text-[#1A90C3]" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. KEY FEATURES ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
                Account Features
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
                Everything You Need to Start Trading
              </h2>
              <p className="text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                The Classic account bundles commission-free trading, broad market access, and professional execution into one straightforward package.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ Icon, title, desc }, idx) => (
              <FadeUp key={title} delay={idx * 0.07}>
                <div className="border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#1A90C3]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] border border-[#1A90C3]/15 flex items-center justify-center mb-5 text-[#1A90C3] group-hover:bg-[#1A90C3] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[15px] font-extrabold text-[#07111F] mb-2">{title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TRADING CONDITIONS ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F6F8FB]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
                Account Specifications
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
                Classic Account — Trading Conditions
              </h2>
              <p className="text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                All key conditions for the Classic account at a glance. Spreads are variable and indicative
                under normal market conditions.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            {/* Desktop table */}
            <div className="hidden md:block bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-[#F6F8FB] border-b border-[#E5E7EB] px-7 py-3.5">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-widest">Condition</span>
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-widest">Value</span>
              </div>
              {tradingConditions.map(({ label, value }, idx) => (
                <div
                  key={label}
                  className={`grid grid-cols-2 px-7 py-4 border-b border-[#E5E7EB] last:border-0 items-center hover:bg-[#EBF5FB]/40 transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F6F8FB]/60"
                  }`}
                >
                  <span className="text-[14px] text-[#6B7280] font-medium">{label}</span>
                  <span className="text-[16px] font-extrabold text-[#07111F]">{value}</span>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
              {tradingConditions.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm"
                >
                  <div className="text-[11px] text-[#6B7280] font-medium mb-1.5 uppercase tracking-wider">
                    {label}
                  </div>
                  <div className="text-[17px] font-extrabold text-[#07111F] leading-tight">{value}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Instruments detail */}
          <FadeUp delay={0.15}>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
              <div className="text-[12px] font-bold text-[#1A90C3] uppercase tracking-widest mb-4">
                Available Instrument Classes
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-5">
                {["Forex", "Metals", "Indices", "Commodities", "Crypto"].map((cls) => (
                  <div
                    key={cls}
                    className="bg-[#EBF5FB] border border-[#1A90C3]/15 rounded-xl px-4 py-3 text-center"
                  >
                    <span className="text-[13px] font-bold text-[#1A90C3]">{cls}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#6B7280] leading-relaxed">
                Spreads are variable and subject to prevailing market conditions. Leverage availability may vary by
                instrument and jurisdiction. Trading involves significant risk of loss. Please read our Risk
                Disclosures before opening an account.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 5. PLATFORM ACCESS — dark navy ─────────────────────────── */}
      <section className="bg-[#07111F] py-20 lg:py-24 relative overflow-hidden">
        {/* Background accents */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(26,144,195,0.09) 0%, transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at 10% 100%, rgba(26,144,195,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#1A90C3]/15 border border-[#1A90C3]/25 text-[#1A90C3] text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Trading Platform
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Trade on MetaTrader 5
              </h2>
              <p className="text-[16px] text-white/50 max-w-xl mx-auto leading-relaxed">
                Your Classic account gives you full access to MetaTrader 5 — the industry&apos;s leading
                multi-asset platform — available on desktop, web, and mobile.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {platforms.map(({ Icon, name, desc, tag }, idx) => (
              <FadeUp key={name} delay={idx * 0.08}>
                <div className="bg-white/[0.04] border border-white/[0.10] rounded-2xl p-7 hover:bg-white/[0.07] hover:border-[#1A90C3]/30 transition-all duration-200 group h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#1A90C3]/15 border border-[#1A90C3]/20 flex items-center justify-center mb-5 text-[#1A90C3] group-hover:bg-[#1A90C3] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-[16px] font-extrabold text-white">{name}</h3>
                    <span className="text-[10px] font-bold bg-[#1A90C3]/20 text-[#1A90C3] border border-[#1A90C3]/25 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  </div>
                  <p className="text-[13px] text-white/50 leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.25}>
            <div className="text-center">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#1A90C3] hover:bg-[#1578A8] text-white font-bold px-8 py-4 rounded-xl text-[15px] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1A90C3]/30"
              >
                Open Your Classic Account
                <IconArrow className="w-4 h-4" />
              </Link>
              <p className="mt-4 text-[12px] text-white/30">
                Olla Capital Financial Services L.L.C. — UAE SCA Lic. 20200000416
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
                Classic Account — Common Questions
              </h2>
              <p className="text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                Answers to the most frequently asked questions about the Classic account.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-5 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none select-none">
                    <span className="text-[15px] font-bold text-[#07111F] leading-snug group-open:text-[#1A90C3] transition-colors">
                      {q}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#E5E7EB] bg-[#F6F8FB] flex items-center justify-center text-[#6B7280] group-open:bg-[#EBF5FB] group-open:border-[#1A90C3]/30 group-open:text-[#1A90C3] transition-all">
                      <IconChevron className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180" />
                    </span>
                  </summary>
                  <p className="mt-4 text-[14px] text-[#6B7280] leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 7. CTA — dark navy ──────────────────────────────────────── */}
      <section className="bg-[#07111F] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(26,144,195,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScaleIn>
            <div className="inline-flex items-center gap-2 bg-[#1A90C3]/15 border border-[#1A90C3]/25 text-[#1A90C3] text-[11px] font-bold px-4 py-1.5 rounded-full mb-7 uppercase tracking-widest">
              Get Started Today
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Open Your Classic Account Today
            </h2>
            <p className="text-[17px] text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
              Start with $10, trade 500+ instruments commission-free, and access MetaTrader 5 on any device.
              Open a live account in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="inline-flex items-center justify-center gap-2 bg-[#1A90C3] hover:bg-[#1578A8] text-white font-bold px-10 py-4 rounded-xl text-[16px] transition-all hover:-translate-y-0.5 shadow-xl shadow-[#1A90C3]/25"
              >
                Open Classic Account — from $10
                <IconArrow className="w-4 h-4" />
              </Link>
            </div>

            {/* Links to other account types */}
            <div className="border-t border-white/10 pt-10">
              <p className="text-[12px] text-white/35 mb-6 uppercase tracking-widest font-semibold">
                Explore Other Account Types
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/trading/accounts/pro"
                  className="group flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#1A90C3]/30 rounded-xl px-7 py-4 transition-all"
                >
                  <div className="text-left">
                    <div className="text-[14px] font-extrabold text-white group-hover:text-[#1A90C3] transition-colors">
                      Pro Account
                    </div>
                    <div className="text-[12px] text-white/40 mt-0.5">
                      From $2,000 min. deposit · Spreads from 1.0 pips
                    </div>
                  </div>
                  <IconArrow className="w-4 h-4 text-white/25 group-hover:text-[#1A90C3] transition-colors ml-auto" />
                </Link>
                <Link
                  href="/trading/accounts/raw"
                  className="group flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#1A90C3]/30 rounded-xl px-7 py-4 transition-all"
                >
                  <div className="text-left">
                    <div className="text-[14px] font-extrabold text-white group-hover:text-[#1A90C3] transition-colors">
                      RAW Account
                    </div>
                    <div className="text-[12px] text-white/40 mt-0.5">
                      Raw spreads from 0.0 pips · ECN pricing
                    </div>
                  </div>
                  <IconArrow className="w-4 h-4 text-white/25 group-hover:text-[#1A90C3] transition-colors ml-auto" />
                </Link>
              </div>
            </div>

            <p className="mt-8 text-[11px] text-white/25 leading-relaxed max-w-lg mx-auto">
              Trading CFDs involves substantial risk of loss. Leverage can work against you as well as for you.
              Olla Capital Financial Services L.L.C. — UAE SCA License No. 20200000416.
            </p>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
