import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
} from "../../../components/ui/Animate";

/* ─── Metadata ─────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "pt"
        ? "Artigos e Análise de Mercado | Olla Trade"
        : "Articles & Market Analysis | Olla Trade",
    description:
      locale === "pt"
        ? "Leia análises de mercado, guias educacionais e insights de trading da Olla Trade. Apenas para fins informativos."
        : "Read market analysis, educational guides, and trading insights from Olla Trade. For informational purposes only.",
  };
}

/* ─── Static params ────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─── Static data ──────────────────────────────────────────────────────── */

const CATEGORIES = [
  "All",
  "Market Analysis",
  "Education",
  "Risk Management",
  "Trading Tips",
  "Fundamental Analysis",
  "Technical Analysis",
] as const;

type Category = (typeof CATEGORIES)[number];

interface Article {
  slug: string;
  tag: Category;
  title: string;
  excerpt: string;
  readTime: number;
  featured?: boolean;
}

const FEATURED_ARTICLE: Article = {
  slug: "forex-market-sessions-best-times-to-trade",
  tag: "Market Analysis",
  title: "Understanding Forex Market Sessions: The Best Times to Trade",
  excerpt:
    "The forex market runs 24 hours a day, five days a week — but not all hours are created equal. This article breaks down the four major trading sessions (Asian, European, London, and US), explains why session overlaps produce higher volatility and tighter spreads, and helps you identify the windows best suited to your trading style. Understanding how liquidity shifts throughout the day is a foundational skill every trader benefits from.",
  readTime: 8,
  featured: true,
};

const ARTICLES: Article[] = [
  {
    slug: "what-moves-currency-prices-fundamental-drivers",
    tag: "Market Analysis",
    title: "What Moves Currency Prices? Key Fundamental Drivers",
    excerpt:
      "Currency prices are driven by a complex mix of economic data, central bank policy, and geopolitical events. This guide covers the most important fundamental factors — from interest rate decisions and inflation data to trade balances and employment reports — and explains how each influences supply and demand for currencies.",
    readTime: 6,
  },
  {
    slug: "introduction-to-technical-analysis-reading-price-charts",
    tag: "Technical Analysis",
    title: "Introduction to Technical Analysis: Reading Price Charts",
    excerpt:
      "Technical analysis is the practice of evaluating price movements using historical chart data. This introductory guide explains how to read candlestick charts, identify trends, and use basic tools like support and resistance levels to inform your trading decisions.",
    readTime: 7,
  },
  {
    slug: "how-to-use-stop-loss-and-take-profit-orders",
    tag: "Risk Management",
    title: "How to Use Stop Loss and Take Profit Orders",
    excerpt:
      "Stop loss and take profit orders are essential risk management tools that let you define your exit points before entering a trade. This article explains how each order type works, how to set appropriate levels based on market structure, and why using them consistently helps protect your capital over time.",
    readTime: 5,
  },
  {
    slug: "understanding-leverage-opportunities-and-risks",
    tag: "Education",
    title: "Understanding Leverage: Opportunities and Risks",
    excerpt:
      "Leverage allows traders to control a larger position with a smaller amount of capital, amplifying both potential gains and potential losses. This article explains how leverage works in forex CFD trading, how margin requirements are calculated, and why understanding leverage is critical before you begin trading.",
    readTime: 6,
  },
  {
    slug: "gold-safe-haven-what-drives-xauusd",
    tag: "Market Analysis",
    title: "Gold as a Safe Haven: What Drives XAU/USD",
    excerpt:
      "Gold has long been considered a safe-haven asset, attracting demand during periods of economic uncertainty and market stress. This article explores the key drivers of XAU/USD price movements — including inflation, US dollar strength, real interest rates, and global risk sentiment — and what traders should monitor when following gold.",
    readTime: 5,
  },
  {
    slug: "common-trading-mistakes-and-how-to-avoid-them",
    tag: "Trading Tips",
    title: "Common Trading Mistakes and How to Avoid Them",
    excerpt:
      "Even experienced traders fall into predictable patterns that undermine their results — from overtrading and ignoring risk management to letting emotions drive decisions. This article identifies the most common trading mistakes, explains why they happen, and offers practical steps to build more disciplined trading habits.",
    readTime: 8,
  },
];

/* ─── Tag colour map ───────────────────────────────────────────────────── */
const TAG_COLORS: Record<Category, { bg: string; text: string; border: string }> = {
  All:                   { bg: "#EBF5FB", text: "#1A90C3", border: "#1A90C3" },
  "Market Analysis":     { bg: "#EBF5FB", text: "#1A90C3", border: "#1A90C3" },
  Education:             { bg: "#EFF6FF", text: "#3B82F6", border: "#3B82F6" },
  "Risk Management":     { bg: "#FEF3C7", text: "#D97706", border: "#D97706" },
  "Trading Tips":        { bg: "#F0FDF4", text: "#16A34A", border: "#16A34A" },
  "Fundamental Analysis":{ bg: "#F5F3FF", text: "#7C3AED", border: "#7C3AED" },
  "Technical Analysis":  { bg: "#FFF1F2", text: "#E11D48", border: "#E11D48" },
};

/* ─── Sub-components ───────────────────────────────────────────────────── */

function ArticleTag({ tag }: { tag: Category }) {
  const c = TAG_COLORS[tag] ?? TAG_COLORS["Market Analysis"];
  return (
    <span
      className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}30` }}
    >
      {tag}
    </span>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card card-hover flex flex-col h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <ArticleTag tag={article.tag} />
        </div>
        <h3 className="text-[15px] font-bold text-[#111827] leading-snug mb-3 flex-1">
          {article.title}
        </h3>
        <p className="text-[13px] text-[#6B7280] leading-relaxed mb-5 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E5E7EB]">
          <span className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
            <ClockIcon />
            {article.readTime} min read
          </span>
          <a
            href="#"
            className="flex items-center gap-1 text-[12px] font-semibold text-[#1A90C3] hover:text-[#0f7ab0] transition-colors group"
            aria-label={`Read article: ${article.title}`}
          >
            Read More
            <span className="group-hover:translate-x-0.5 transition-transform">
              <ArrowRightIcon />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════════════════ */}
      <section className="hero-bg section-py overflow-hidden">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <FadeIn>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-[12px] text-[#6B7280] mb-8"
            >
              <Link href="/" className="hover:text-[#1A90C3] transition-colors">
                Home
              </Link>
              <span className="text-[#E5E7EB]">/</span>
              <Link
                href="/tools"
                className="hover:text-[#1A90C3] transition-colors"
              >
                Tools
              </Link>
              <span className="text-[#E5E7EB]">/</span>
              <span className="text-[#111827] font-medium">
                Articles &amp; Market Analysis
              </span>
            </nav>

            {/* Badge */}
            <div className="badge inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A90C3]" />
              Market Insights
            </div>

            {/* Heading */}
            <h1
              className="font-extrabold text-[#111827] leading-tight mb-5"
              style={{
                fontSize: "clamp(32px,5vw,58px)",
                letterSpacing: "-0.025em",
              }}
            >
              Articles &amp;{" "}
              <span className="text-gradient">Market Analysis</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
              Stay informed with market news, trading education, and analysis
              covering forex, commodities, and global financial markets.
              All content is for informational purposes and designed to support
              your understanding of the markets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — FEATURED ARTICLE
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="mb-6">
            <span className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest">
              Featured Article
            </span>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <SlideLeft>
              <ArticleTag tag={FEATURED_ARTICLE.tag} />

              <h2
                className="font-extrabold text-[#111827] leading-tight mt-4 mb-4"
                style={{ fontSize: "clamp(22px,3vw,36px)", letterSpacing: "-0.02em" }}
              >
                {FEATURED_ARTICLE.title}
              </h2>

              <p className="text-[14px] text-[#6B7280] leading-relaxed mb-6">
                {FEATURED_ARTICLE.excerpt}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center gap-1.5 text-[13px] text-[#6B7280]">
                  <ClockIcon />
                  {FEATURED_ARTICLE.readTime} min read
                </span>
                <span
                  className="inline-block w-1 h-1 rounded-full"
                  style={{ background: "#E5E7EB" }}
                />
                <span className="text-[13px] text-[#6B7280]">
                  Educational content
                </span>
              </div>

              <a
                href="#"
                className="btn-primary btn-lg inline-flex items-center gap-2 group"
                aria-label={`Read article: ${FEATURED_ARTICLE.title}`}
              >
                Read Article
                <span className="group-hover:translate-x-0.5 transition-transform">
                  <ArrowRightIcon />
                </span>
              </a>
            </SlideLeft>

            {/* Right — decorative card visual */}
            <SlideRight delay={0.1}>
              <div
                className="relative rounded-2xl overflow-hidden p-8"
                style={{
                  background:
                    "linear-gradient(135deg, #07111F 0%, #0D1F30 60%, #112233 100%)",
                  border: "1px solid rgba(26,144,195,0.25)",
                  boxShadow:
                    "0 24px 60px rgba(7,17,31,0.15), 0 0 0 1px rgba(26,144,195,0.08)",
                }}
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute top-0 right-0 w-56 h-56 rounded-full"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 20%, rgba(26,144,195,0.18) 0%, transparent 70%)",
                  }}
                />

                {/* Session timeline */}
                <div className="relative">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-5">
                    24h Forex Session Overview
                  </div>

                  {[
                    {
                      label: "Asian",
                      hours: "00:00 – 09:00 GMT",
                      width: "35%",
                      offset: "0%",
                      color: "#F59E0B",
                    },
                    {
                      label: "European",
                      hours: "07:00 – 16:00 GMT",
                      width: "38%",
                      offset: "29%",
                      color: "#3B82F6",
                    },
                    {
                      label: "US",
                      hours: "13:00 – 22:00 GMT",
                      width: "38%",
                      offset: "54%",
                      color: "#1A90C3",
                    },
                  ].map((s) => (
                    <div key={s.label} className="mb-5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[12px] font-semibold text-white/75">
                          {s.label} Session
                        </span>
                        <span className="text-[11px] text-white/35">
                          {s.hours}
                        </span>
                      </div>
                      <div className="relative h-2.5 rounded-full bg-white/5">
                        <div
                          className="absolute top-0 h-2.5 rounded-full"
                          style={{
                            left: s.offset,
                            width: s.width,
                            background: s.color,
                            opacity: 0.75,
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Overlap highlight */}
                  <div
                    className="mt-6 rounded-xl px-4 py-3"
                    style={{
                      background: "rgba(26,144,195,0.1)",
                      border: "1px solid rgba(26,144,195,0.2)",
                    }}
                  >
                    <div className="text-[10px] font-bold text-[#1A90C3] uppercase tracking-widest mb-1">
                      Peak Overlap Window
                    </div>
                    <div className="text-[13px] font-semibold text-white/80">
                      London–New York: 13:00–17:00 GMT
                    </div>
                    <div className="text-[11px] text-white/40 mt-0.5">
                      Highest liquidity &amp; tightest spreads
                    </div>
                  </div>

                  {/* Disclaimer note */}
                  <p className="text-[10px] text-white/20 mt-4">
                    Sessions are approximate. Times may shift with daylight saving changes.
                  </p>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — TOPICS FILTER BAR
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-[#F6F8FB] border-y border-[#E5E7EB]">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">
          <FadeIn>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-widest mr-2">
                Topics:
              </span>
              {CATEGORIES.map((cat, i) => {
                const isAll = cat === "All";
                const c = TAG_COLORS[cat];
                return (
                  <button
                    key={cat}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer select-none hover:shadow-sm active:scale-95"
                    style={
                      isAll
                        ? {
                            background: "#1A90C3",
                            color: "#FFFFFF",
                            borderColor: "#1A90C3",
                          }
                        : {
                            background: "#FFFFFF",
                            color: "#6B7280",
                            borderColor: "#E5E7EB",
                          }
                    }
                    aria-pressed={isAll}
                  >
                    {!isAll && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: c.text }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — ARTICLE GRID
          ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#F6F8FB]">
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">

          <FadeUp className="mb-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="badge inline-block mb-3">Latest Articles</div>
                <h2
                  className="font-extrabold text-[#111827] leading-tight"
                  style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em" }}
                >
                  Explore Our Content
                </h2>
              </div>
              <p className="hidden sm:block text-[13px] text-[#6B7280] max-w-xs text-right">
                Educational content and market commentary for informational purposes only.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 0.07}>
                <ArticleCard article={article} />
              </FadeUp>
            ))}
          </div>

          {/* Load more placeholder */}
          <FadeUp delay={0.3} className="mt-12 text-center">
            <button
              type="button"
              className="btn-secondary btn-lg"
              aria-label="Load more articles"
            >
              Load More Articles
            </button>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA STRIP
          ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-py overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #07111F 0%, #0D2236 100%)",
        }}
      >
        <div className="container-narrow px-4 sm:px-6 mx-auto text-center">
          <FadeUp>
            <div className="badge-navy inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A90C3]" />
              Ready to Trade?
            </div>
            <h2
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(26px,4vw,44px)", letterSpacing: "-0.02em" }}
            >
              Apply Your Knowledge
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Open a live account with Olla Trade and put your market
              education into practice. Regulated by the UAE SCA.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-lg"
              >
                Open Live Account
              </Link>
              <Link href="/tools/education" className="btn-secondary btn-lg">
                Explore Education Hub
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DISCLAIMER
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-t border-[#E5E7EB]">
        <div className="container-narrow px-4 mx-auto">
          <p className="text-[11px] text-[#6B7280] leading-relaxed text-center">
            Articles are for informational purposes only and do not constitute
            investment advice. Trading CFDs carries significant risk of loss.
            Past performance is not a reliable indicator of future results.
            Olla Capital Financial Services L.L.C. is regulated by the UAE
            Securities and Commodities Authority (SCA), Licence No.
            20200000416.
          </p>
        </div>
      </section>
    </>
  );
}
