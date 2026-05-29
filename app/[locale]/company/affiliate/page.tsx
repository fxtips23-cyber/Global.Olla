import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import { FadeUp, FadeIn, ScaleIn, StaggerChildren } from "../../../components/ui/Animate";
import PartnerStats from "../../../components/affiliate/PartnerStats";

export const metadata: Metadata = {
  title: "Partner With Olla Trade | Introducing Broker Programme",
  description:
    "Join the Olla Trade Partner Programme. Earn industry-leading IB commissions, access real-time analytics, and grow your network with a globally trusted broker.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const FONT = "'Century Gothic', 'CenturyGothic', 'AppleGothic', sans-serif";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    title: "Industry-Leading Rebates",
    desc: "Access one of the most competitive commission structures in the industry. Rebate tiers increase with volume, rewarding your growth at every level.",
    icon: (
      <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Analytics Dashboard",
    desc: "Track every click, registration, deposit, and commission in real time through your dedicated partner portal — available 24 hours a day.",
    icon: (
      <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Partner Manager",
    desc: "Every partner is assigned an experienced relationship manager who provides strategic guidance, campaign support, and personalised programme optimisation.",
    icon: (
      <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Instant Commission Payouts",
    desc: "Commissions are calculated transparently and disbursed on a consistent schedule. No delays, no hidden deductions — what you earn is what you receive.",
    icon: (
      <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Multi-Language Support",
    desc: "Our platform, support team, and marketing materials operate across multiple languages — enabling you to grow a truly global referral network.",
    icon: (
      <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Institutional Execution Quality",
    desc: "Clients you refer trade with institutional-grade liquidity, market execution with no requotes, and spreads from 0.0 pips — conditions that convert and retain clients.",
    icon: (
      <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Professional Marketing Resources",
    desc: "Access a professionally curated library of co-branded banners, landing page templates, email sequences, and social media kits — ready to deploy.",
    icon: (
      <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

const PARTNER_TYPES = [
  {
    label: "Introducing Brokers",
    tag: "IB",
    desc: "Financial professionals who introduce individual clients to Olla Trade. IBs earn per-lot commissions based on their referred clients' trading activity.",
    points: ["Per-lot rebate commissions", "Multi-tier IB sub-structures", "No cap on referred clients", "Dedicated portal & analytics"],
    color: "#1A90C3",
  },
  {
    label: "Digital Affiliates",
    tag: "Affiliate",
    desc: "Website owners, bloggers, YouTubers, and social media publishers operating in the finance or trading space who drive client registrations through digital content.",
    points: ["CPA & revenue share models", "Full creative asset library", "Real-time conversion tracking", "Monthly performance reporting"],
    color: "#0D6B99",
  },
  {
    label: "Educators & Communities",
    tag: "Educator",
    desc: "Trading coaches, mentors, and community leaders who educate traders and can naturally introduce their audience to a professional, regulated trading environment.",
    points: ["Audience referral tracking", "Co-branded learning materials", "Webinar collaboration support", "Custom landing page setup"],
    color: "#1478A6",
  },
  {
    label: "Money Managers",
    tag: "PAMM / MAM",
    desc: "Qualified professionals managing client trading portfolios through Olla Trade' infrastructure, operating under appropriate compliance and client authorisation.",
    points: ["PAMM & MAM account access", "Performance-based arrangements", "Structured account management", "Priority relationship support"],
    color: "#0D3A5C",
  },
  {
    label: "Fintech & Signal Providers",
    tag: "Technology",
    desc: "Technology companies, algorithmic traders, and signal providers seeking a reliable brokerage infrastructure partner to offer their clients institutional-grade execution.",
    points: ["API & MT4 integration support", "White-label enquiries welcome", "Dedicated technical onboarding", "Custom commercial agreements"],
    color: "#10B981",
  },
];

const COMMISSION_MODELS = [
  {
    name: "Revenue Share",
    badge: "Most Popular",
    highlight: true,
    desc: "Earn a percentage of the net revenue generated by your referred clients — a long-term model that compounds as your network grows.",
    rate: "Up to 65%",
    rateLabel: "Revenue share",
    features: ["Ongoing recurring income", "Scales with client volume", "Ideal for active IB networks", "Monthly settlement"],
  },
  {
    name: "Cost Per Acquisition",
    badge: "CPA",
    highlight: false,
    desc: "Earn a fixed one-time payment for every referred client who opens a live account and meets the qualifying deposit and trading criteria.",
    rate: "Up to $800",
    rateLabel: "Per qualified client",
    features: ["Fixed predictable earnings", "Immediate payout per client", "Ideal for affiliate campaigns", "No volume requirement"],
  },
  {
    name: "Hybrid Model",
    badge: "Flexible",
    highlight: false,
    desc: "Combine CPA with ongoing revenue share — receive an upfront payment per client plus a percentage of their ongoing trading revenue.",
    rate: "CPA + Rev Share",
    rateLabel: "Combined structure",
    features: ["Upfront + recurring income", "Best of both models", "Tailored to your strategy", "Negotiated individually"],
  },
  {
    name: "VIP Partner",
    badge: "Enterprise",
    highlight: false,
    desc: "For high-volume partners with large networks. Custom commercial agreements, premium rebate rates, and executive-level account management.",
    rate: "Custom",
    rateLabel: "Negotiated terms",
    features: ["Custom rebate structures", "Executive account manager", "Priority technical support", "Co-marketing opportunities"],
  },
];

const PORTAL_FEATURES = [
  {
    title: "Real-Time Commission Tracking",
    desc: "View every commission earned, broken down by client, instrument, and time period — updated live throughout the trading day.",
    icon: (
      <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Client Activity Analytics",
    desc: "Monitor your referred clients' trading volume, deposit history, instrument activity, and account status from a single dashboard.",
    icon: (
      <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Referral Link Management",
    desc: "Generate, manage, and track multiple referral links and campaigns — each with its own performance metrics and conversion data.",
    icon: (
      <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Marketing Asset Library",
    desc: "Download banners, email templates, landing pages, and promotional creatives — all branded and ready for immediate deployment.",
    icon: (
      <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Wallet & Payout Management",
    desc: "Request payouts, view pending commissions, and manage your earnings wallet — all from within the secure partner portal.",
    icon: (
      <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Sub-IB & Multi-Account Control",
    desc: "Manage sub-IBs within your network, assign referral codes, and view consolidated performance across your entire partner structure.",
    icon: (
      <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const MARKETING_FEATURES = [
  { title: "Custom Landing Pages", desc: "Professionally designed, co-branded landing pages optimised for IB conversion — deployed with your unique referral tracking." },
  { title: "Banners & Creative Kits", desc: "A full suite of static and animated banner formats in all standard sizes, ready for display, social, and email campaigns." },
  { title: "Social Media Kits", desc: "Ready-to-post branded content for LinkedIn, Instagram, Facebook, and Telegram — covering market updates, product highlights, and promotions." },
  { title: "Dedicated Onboarding Support", desc: "Your partner manager guides you through setup, tools, and strategy during the first 30 days — ensuring a strong programme launch." },
  { title: "Regional Campaign Collaboration", desc: "Co-develop localised campaigns for your target markets, with Olla Trade providing creative resources and promotional support." },
  { title: "Webinar & Event Assistance", desc: "Partner with Olla Trade on educational webinars, trading events, and online workshops to grow your audience and referral pipeline." },
];

const TRADING_ADVANTAGES = [
  { label: "Spreads from 0.0 pips", sub: "Forex pairs, Elite account", icon: "📉" },
  { label: "Market Execution", sub: "No requotes, no delays", icon: "⚡" },
  { label: "Deep Liquidity", sub: "Institutional-grade pricing", icon: "🏦" },
  { label: "MetaTrader 4", sub: "Desktop · Web · Mobile", icon: "💻" },
  { label: "500+ Instruments", sub: "Forex, Metals, Crypto & more", icon: "🌐" },
  { label: "Negative Balance Protection", sub: "All accounts, always", icon: "🔒" },
];

const STEPS = [
  {
    n: "01",
    title: "Register as a Partner",
    desc: "Complete a short online application. Tell us about yourself, your network, and how you plan to introduce clients to Olla Trade.",
  },
  {
    n: "02",
    title: "Refer Your Network",
    desc: "Share your unique referral link across your network, website, social channels, or through direct client introductions.",
  },
  {
    n: "03",
    title: "Earn & Scale",
    desc: "Earn commissions based on your clients' trading activity. As your network grows, your tier advances and your rebates increase.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Al-Rashid",
    title: "Introducing Broker — UAE",
    initials: "AA",
    color: "#1A90C3",
    quote: "I have been an IB with Olla Trade for over two years. The portal gives me full transparency on every commission, the payouts are consistent, and my account manager genuinely understands my business. It is one of the strongest partnerships I have built in this industry.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    title: "Digital Affiliate — Brazil",
    initials: "CM",
    color: "#10B981",
    quote: "I run a finance content channel and the Olla Trade affiliate programme has been outstanding. The CPA rates are among the best I have seen, the creative assets are professional, and the conversion tracking is accurate and real-time. Highly recommended for any serious affiliate.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    title: "Trading Educator — India",
    initials: "PS",
    color: "#0D6B99",
    quote: "As a trading coach, I was looking for a broker I could genuinely recommend to my community. Olla Trade gave me co-branded materials, a dedicated point of contact, and a commission structure that rewards long-term relationships. My students trade with confidence.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "How does the Olla Trade IB programme work?",
    a: "As an Introducing Broker, you receive a unique referral link. When clients open a live account through your link and begin trading, you earn commissions based on their trading volume. All activity is visible in real time through your dedicated partner portal.",
  },
  {
    q: "How are commissions calculated and what rates can I expect?",
    a: "Commission rates are structured as per-lot rebates and vary by instrument class, account type, and partner tier. Rates are confirmed individually during onboarding. Higher-volume partners access enhanced rebate tiers. Revenue share partnerships can reach up to 65% of net revenue.",
  },
  {
    q: "When are partner payouts processed?",
    a: "Payouts are processed on a regular cycle — typically weekly or monthly depending on your partnership agreement. Your partner manager will confirm the exact schedule. All earnings are visible in your portal wallet before disbursement.",
  },
  {
    q: "Is there a minimum referral requirement to earn commissions?",
    a: "There is no minimum referral volume required to participate. Commissions are generated as soon as your referred clients open a live account, make a qualifying deposit, and begin trading. There is no cap on how many clients you can refer.",
  },
  {
    q: "Can I build a sub-IB network under my partnership?",
    a: "Yes. Olla Trade supports multi-tier IB structures, allowing you to introduce sub-IBs under your network. You earn overriding commissions on sub-IB client activity, and all layers are visible and managed through your partner portal.",
  },
  {
    q: "What marketing support does Olla Trade provide to partners?",
    a: "Partners receive access to a full creative library including banners, landing page templates, social media kits, and email sequences. Your partner manager can also arrange co-branded campaigns, webinar collaboration, and regional marketing support.",
  },
  {
    q: "Can I refer clients from any country?",
    a: "Olla Trade accepts clients from most jurisdictions. Certain restricted regions apply in accordance with regulatory requirements. Your partner manager will provide a current list of eligible markets during onboarding.",
  },
  {
    q: "How do I apply to join the programme?",
    a: "Click 'Become a Partner' on this page to begin your application through the Olla Trade portal. Once your application is reviewed and approved, you will receive your referral link, portal access, and be introduced to your dedicated partner manager.",
  },
];

// ─── Shared helpers ────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg style={{ width: 14, height: 14, flexShrink: 0, color: "#1A90C3", marginTop: 2 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} style={{ width: 14, height: 14, color: "#F59E0B" }} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AffiliatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ fontFamily: FONT }}>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #07111F 0%, #0D2A42 60%, #0D3A5C 100%)",
          paddingTop: "clamp(80px, 10vw, 128px)",
          paddingBottom: "clamp(80px, 10vw, 128px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(26,144,195,0.20) 0%, transparent 70%)",
          }}
        />
        {/* Bottom accent line */}
        <div
          aria-hidden
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, transparent, #1A90C3, transparent)",
            opacity: 0.4,
          }}
        />

        <div className="container-wide" style={{ position: "relative", zIndex: 10 }}>
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
              {/* Badge */}
              <span
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                  textTransform: "uppercase", color: "#60C8F0",
                  background: "rgba(26,144,195,0.12)", border: "1px solid rgba(26,144,195,0.25)",
                  padding: "5px 16px", borderRadius: 999, marginBottom: 28,
                }}
              >
                Partner Programme
              </span>

              {/* Main heading */}
              <h1
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  fontWeight: 900, color: "#FFFFFF",
                  letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 24,
                }}
              >
                Partner With{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #60C8F0 0%, #1A90C3 55%, #0D6B99 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Olla Trade.
                </span>
              </h1>

              {/* Subtext */}
              <p
                style={{
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  color: "#9BBBCF", lineHeight: 1.80,
                  maxWidth: 620, margin: "0 auto 40px",
                }}
              >
                Build a sustainable income stream by introducing traders to a globally trusted broker.
                Access competitive rewards, a real-time analytics portal, and dedicated partnership support
                designed for serious growth.
              </p>

              {/* Trust chips */}
              <div
                style={{
                  display: "flex", flexWrap: "wrap", justifyContent: "center",
                  gap: "10px 24px", marginBottom: 44,
                }}
              >
                {["Revenue share up to 65%", "Real-time partner portal", "Dedicated IB manager", "No referral cap"].map((item) => (
                  <span key={item} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "#9BBBCF" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1A90C3", flexShrink: 0 }} />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "linear-gradient(135deg, #1E9FD8, #1A90C3 55%, #1478A6)",
                    color: "#FFFFFF", fontWeight: 700, fontSize: 16,
                    padding: "16px 40px", borderRadius: 12, textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(26,144,195,0.38)",
                  }}
                >
                  Become a Partner
                  <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/company/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    color: "#FFFFFF", fontWeight: 600, fontSize: 15,
                    padding: "16px 32px", borderRadius: 12, textDecoration: "none",
                    border: "1.5px solid rgba(255,255,255,0.20)",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  Contact Partnership Team
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — WHY PARTNER WITH Olla Trade
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#F7FAFE", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-wide">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Why Partner With Us
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Built for Partners Who{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Think Long-Term.
                </span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                Every element of our partner programme is designed to support your growth — from first referral to building a professional IB enterprise.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(26,144,195,0.10)",
                  borderRadius: 20, padding: "28px 24px",
                  boxShadow: "0 2px 12px rgba(26,144,195,0.06)",
                  transition: "box-shadow 0.22s ease",
                }}
              >
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 44, height: 44, borderRadius: 14,
                  background: "linear-gradient(135deg, #EBF5FB, #D6EEF8)",
                  color: "#1A90C3", marginBottom: 16,
                }}>
                  {b.icon}
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: "#07111F", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.75 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — PARTNER TYPES
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-wide">
          <FadeUp>
            <div style={{ marginBottom: 52 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Partner Types
              </span>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
                <div>
                  <h2 style={{
                    fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                    letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 12,
                  }}>
                    Who Can{" "}
                    <span style={{
                      background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                      Become a Partner?
                    </span>
                  </h2>
                  <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 480, lineHeight: 1.75 }}>
                    Our programme is structured to support a wide range of business models — from individual IBs to fintech companies.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {PARTNER_TYPES.map((pt, i) => (
              <ScaleIn key={pt.label} delay={i * 0.08}>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderTop: `3px solid ${pt.color}`,
                    borderRadius: "0 0 18px 18px",
                    padding: "28px 22px",
                    height: "100%",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    display: "flex", flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: "0.08em",
                      textTransform: "uppercase", color: pt.color,
                      background: `${pt.color}14`, border: `1px solid ${pt.color}28`,
                      padding: "3px 10px", borderRadius: 999,
                    }}>
                      {pt.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#07111F", marginBottom: 10, letterSpacing: "-0.01em" }}>
                    {pt.label}
                  </h3>
                  <p style={{ fontSize: 12.5, color: "#6B7280", lineHeight: 1.72, marginBottom: 18, flexGrow: 1 }}>
                    {pt.desc}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 7, borderTop: "1px solid #F3F4F6", paddingTop: 16 }}>
                    {pt.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <CheckIcon />
                        <span style={{ fontSize: 12, color: "#4B5563" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — COMMISSION & REWARDS
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#F7FAFE", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-wide">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Commission & Rewards
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Flexible Structures,{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Transparent Rewards.
                </span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                Choose the commission model that fits your business. Multiple structures are available, from per-lot rebates to hybrid revenue share arrangements.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {COMMISSION_MODELS.map((m, i) => (
              <ScaleIn key={m.name} delay={i * 0.08}>
                <div
                  style={{
                    background: m.highlight
                      ? "linear-gradient(135deg, #07111F 0%, #0D3A5C 100%)"
                      : "#FFFFFF",
                    border: m.highlight ? "1px solid rgba(26,144,195,0.30)" : "1px solid #E5E7EB",
                    borderRadius: 20,
                    padding: "30px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: m.highlight
                      ? "0 12px 40px rgba(26,144,195,0.20)"
                      : "0 2px 10px rgba(0,0,0,0.04)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {m.highlight && (
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 3,
                      background: "linear-gradient(90deg, #1E9FD8, #1478A6)",
                    }} />
                  )}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: m.highlight ? "#60C8F0" : "#1A90C3",
                      background: m.highlight ? "rgba(26,144,195,0.15)" : "#EBF5FB",
                      border: m.highlight ? "1px solid rgba(26,144,195,0.25)" : "1px solid #BAE2F5",
                      padding: "3px 10px", borderRadius: 999,
                    }}>
                      {m.badge}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 800,
                    color: m.highlight ? "#FFFFFF" : "#07111F",
                    marginBottom: 10, letterSpacing: "-0.01em",
                  }}>
                    {m.name}
                  </h3>
                  <p style={{
                    fontSize: 12.5, lineHeight: 1.72, marginBottom: 20, flexGrow: 1,
                    color: m.highlight ? "rgba(255,255,255,0.65)" : "#6B7280",
                  }}>
                    {m.desc}
                  </p>
                  {/* Rate callout */}
                  <div style={{
                    background: m.highlight ? "rgba(255,255,255,0.08)" : "#F7FAFE",
                    border: m.highlight ? "1px solid rgba(255,255,255,0.12)" : "1px solid #E5E7EB",
                    borderRadius: 12, padding: "14px 16px", marginBottom: 18,
                  }}>
                    <div style={{
                      fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 900,
                      color: m.highlight ? "#60C8F0" : "#1A90C3",
                      letterSpacing: "-0.02em",
                    }}>
                      {m.rate}
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 600,
                      color: m.highlight ? "rgba(255,255,255,0.5)" : "#9CA3AF",
                      marginTop: 2,
                    }}>
                      {m.rateLabel}
                    </div>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {m.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <svg style={{ width: 14, height: 14, flexShrink: 0, color: m.highlight ? "#60C8F0" : "#1A90C3", marginTop: 2 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ fontSize: 12, color: m.highlight ? "rgba(255,255,255,0.75)" : "#4B5563" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — ADVANCED PARTNER PORTAL
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }} className="ib-grid">
            {/* Left: text */}
            <FadeUp>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Partner Portal
              </span>
              <h2 style={{
                fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Everything You Need{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  in One Portal.
                </span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.80, marginBottom: 32 }}>
                Your dedicated partner portal gives you complete visibility and control over your network, commissions, and marketing assets — in real time, around the clock.
              </p>
              <Link
                href="https://portal.ollatrade.com/auth/register"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontSize: 14, fontWeight: 700, color: "#1A90C3",
                  textDecoration: "none", padding: "12px 24px", borderRadius: 10,
                  border: "1.5px solid rgba(26,144,195,0.30)",
                  background: "rgba(26,144,195,0.05)",
                }}
              >
                Access Your Portal
                <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeUp>

            {/* Right: feature grid */}
            <StaggerChildren style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {PORTAL_FEATURES.map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: "#F7FAFE",
                    border: "1px solid #E5E7EB",
                    borderRadius: 16, padding: "18px 16px",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <div style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36, borderRadius: 10,
                    background: "linear-gradient(135deg, #EBF5FB, #D6EEF8)",
                    color: "#1A90C3", marginBottom: 10,
                  }}>
                    {f.icon}
                  </div>
                  <h4 style={{ fontSize: 12.5, fontWeight: 800, color: "#07111F", marginBottom: 6, letterSpacing: "-0.01em" }}>
                    {f.title}
                  </h4>
                  <p style={{ fontSize: 11.5, color: "#6B7280", lineHeight: 1.65 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — MARKETING & GROWTH SUPPORT
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#F7FAFE", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-wide">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Growth Support
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                We Invest in{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Your Success.
                </span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
                Olla Trade provides partners with the full marketing infrastructure needed to acquire, convert, and retain clients effectively.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {MARKETING_FEATURES.map((f, i) => (
              <div
                key={f.title}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 18, padding: "24px 22px",
                  display: "flex", gap: 16, alignItems: "flex-start",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 36, height: 36, borderRadius: 999, flexShrink: 0,
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  color: "#FFFFFF", fontWeight: 900, fontSize: 13,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 style={{ fontSize: 13.5, fontWeight: 800, color: "#07111F", marginBottom: 7, letterSpacing: "-0.01em" }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 12.5, color: "#6B7280", lineHeight: 1.72 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — GLOBAL TRADING ADVANTAGES
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-wide">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Trading Conditions
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Why Clients Stay with{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Olla Trade.
                </span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                When you refer a client to Olla Trade, they benefit from institutional-grade trading conditions that keep them active — which means sustained commissions for you.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {TRADING_ADVANTAGES.map((t) => (
              <div
                key={t.label}
                style={{
                  background: "#F7FAFE",
                  border: "1px solid rgba(26,144,195,0.10)",
                  borderRadius: 16, padding: "24px 20px",
                  textAlign: "center",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{t.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#07111F", marginBottom: 5 }}>{t.label}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF" }}>{t.sub}</div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — HOW IT WORKS
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#F7FAFE", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-narrow">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Simple Process
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Three Steps to{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Start Earning.
                </span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 440, margin: "0 auto", lineHeight: 1.75 }}>
                Getting started as an Olla Trade partner is straightforward and designed to get you earning quickly.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                style={{
                  display: "flex", alignItems: "center", gap: 24,
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 20, padding: "28px 32px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  position: "relative",
                }}
              >
                {/* Step number */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                  background: "linear-gradient(135deg, #07111F, #0D3A5C)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#60C8F0", fontWeight: 900, fontSize: 15,
                }}>
                  {step.n}
                </div>
                {/* Connector line (not on last) */}
                {i < STEPS.length - 1 && (
                  <div style={{
                    position: "absolute", left: 60, top: "100%",
                    width: 2, height: 16, background: "#E5E7EB",
                    zIndex: 1,
                  }} />
                )}
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#07111F", marginBottom: 6, letterSpacing: "-0.01em" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.72 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </StaggerChildren>

          <FadeUp style={{ textAlign: "center", marginTop: 40 }}>
            <Link
              href="https://portal.ollatrade.com/auth/register"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg, #1E9FD8, #1A90C3 55%, #1478A6)",
                color: "#FFFFFF", fontWeight: 700, fontSize: 15,
                padding: "15px 40px", borderRadius: 12, textDecoration: "none",
                boxShadow: "0 8px 28px rgba(26,144,195,0.32)",
              }}
            >
              Register as a Partner
              <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — PARTNER STATISTICS (client component)
      ══════════════════════════════════════════════════════════════ */}
      <PartnerStats />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 10 — TESTIMONIALS
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-wide">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Partner Stories
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Trusted by Partners{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Worldwide.
                </span>
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <ScaleIn key={t.name} delay={i * 0.1}>
                <div
                  style={{
                    background: "#F7FAFE",
                    border: "1px solid rgba(26,144,195,0.10)",
                    borderRadius: 20, padding: "30px 26px",
                    height: "100%", display: "flex", flexDirection: "column",
                    boxShadow: "0 2px 12px rgba(26,144,195,0.06)",
                  }}
                >
                  <Stars count={t.stars} />
                  <p style={{
                    fontSize: 13.5, color: "#374151", lineHeight: 1.80,
                    marginBottom: 24, flexGrow: 1, fontStyle: "italic",
                  }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #E5E7EB", paddingTop: 18 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#FFFFFF", fontWeight: 800, fontSize: 14,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#07111F" }}>{t.name}</div>
                      <div style={{ fontSize: 11.5, color: "#9CA3AF" }}>{t.title}</div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 11 — FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#F7FAFE", padding: "clamp(72px, 8vw, 112px) 0" }}>
        <div className="container-narrow">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "#1478A6",
                background: "#EBF5FB", border: "1px solid #BAE2F5",
                padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20,
              }}>
                Common Questions
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#07111F",
                letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Partner Programme{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1A90C3, #0D6B99)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  FAQs.
                </span>
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 460, margin: "0 auto", lineHeight: 1.75 }}>
                Answers to the most common questions about joining and growing as an Olla Trade partner.
              </p>
            </div>
          </FadeUp>

          <FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: 16, overflow: "hidden",
                  }}
                >
                  <summary style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                    padding: "20px 24px", cursor: "pointer", listStyle: "none",
                    fontSize: 14, fontWeight: 700, color: "#07111F",
                    userSelect: "none",
                  }}>
                    {faq.q}
                    <svg style={{ width: 16, height: 16, flexShrink: 0, color: "#6B7280" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div style={{
                    padding: "0 24px 20px", borderTop: "1px solid #F3F4F6",
                    paddingTop: 16,
                  }}>
                    <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.78 }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 12 — FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #07111F 0%, #0D2A42 55%, #0D3A5C 100%)",
          padding: "clamp(80px, 10vw, 120px) 0",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(26,144,195,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="container-narrow" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
          <FadeUp>
            <span style={{
              fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
              textTransform: "uppercase", color: "#60C8F0",
              background: "rgba(26,144,195,0.12)", border: "1px solid rgba(26,144,195,0.25)",
              padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 28,
            }}>
              Ready to Get Started?
            </span>
            <h2 style={{
              fontSize: "clamp(30px, 4.5vw, 58px)", fontWeight: 900, color: "#FFFFFF",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 22,
            }}>
              Start Earning Today —{" "}
              <span style={{
                background: "linear-gradient(135deg, #60C8F0 0%, #1A90C3 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Become an Olla Partner.
              </span>
            </h2>
            <p style={{
              fontSize: "clamp(14px, 1.5vw, 17px)", color: "#9BBBCF",
              lineHeight: 1.80, maxWidth: 580, margin: "0 auto 44px",
            }}>
              Apply now and join a growing global network of partners earning competitive commissions with a regulated, transparent, and client-first broker. Your dedicated partner manager is ready to onboard you from day one.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
              <Link
                href="https://portal.ollatrade.com/auth/register"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg, #1E9FD8, #1A90C3 55%, #1478A6)",
                  color: "#FFFFFF", fontWeight: 700, fontSize: 16,
                  padding: "16px 44px", borderRadius: 12, textDecoration: "none",
                  boxShadow: "0 10px 36px rgba(26,144,195,0.42)",
                }}
              >
                Become a Partner
                <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/company/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  color: "#FFFFFF", fontWeight: 600, fontSize: 15,
                  padding: "16px 32px", borderRadius: 12, textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.20)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                Contact Partnership Team
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Compliance notice ─────────────────────────────────────── */}
      <section style={{ padding: "32px 0", background: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
        <div className="container-narrow">
          <div style={{
            background: "#F6F8FB", border: "1px solid #E5E7EB",
            borderRadius: 14, padding: "20px 22px",
          }}>
            <p style={{ fontSize: 11.5, color: "#6B7280", lineHeight: 1.75 }}>
              <strong style={{ color: "#374151" }}>Partner Programme Compliance Notice: </strong>
              The Olla Trade Partner Programme is operated by Olla Capital Financial Services L.L.C. Participation does not constitute financial advice or guaranteed earnings. Commission earnings depend on referred clients&apos; trading activity and are subject to partner agreement terms. Partners must not represent guaranteed profits to prospective clients. All referrals must comply with applicable regulations. Queries:{" "}
              <a href="mailto:info@ollatrade.com" style={{ color: "#1A90C3" }}>info@ollatrade.com</a>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ib-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
