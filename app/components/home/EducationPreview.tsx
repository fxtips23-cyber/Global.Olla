"use client";
import Link from "next/link";
import { FadeUp, StaggerChildren, fadeUpItem } from "../ui/Animate";
import { motion } from "framer-motion";

const ARTICLES = [
  {
    tag: "Market Analysis",
    title: "Understanding Forex Pairs: A Beginner's Guide",
    excerpt: "Learn what currency pairs are, how they're quoted, and what drives their price movements.",
    readTime: "5 min read",
  },
  {
    tag: "Trading Strategies",
    title: "How to Use Support and Resistance Levels",
    excerpt: "Discover how technical traders identify key price levels to improve entry and exit timing.",
    readTime: "7 min read",
  },
  {
    tag: "Risk Management",
    title: "Position Sizing: Protecting Your Capital",
    excerpt: "Learn how to calculate position sizes to manage risk on every trade you take.",
    readTime: "6 min read",
  },
];

const EDU_LEVELS = [
  { icon: "🟢", level: "Beginner",     desc: "Forex basics, how markets work, first trades" },
  { icon: "🔵", level: "Intermediate", desc: "Technical & fundamental analysis, strategies" },
  { icon: "🟣", level: "Advanced",     desc: "Risk management, trading psychology, EA" },
];

export default function EducationPreview() {
  return (
    <section className="section-py" style={{ background: "#FFFFFF" }}>
      <div className="container-wide">

        {/* Header */}
        <FadeUp className="text-center mb-12">
          <span className="badge mb-4">Learn to Trade</span>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold leading-tight mb-3" style={{ color: "#07111F", letterSpacing: "-0.02em" }}>
            Knowledge Hub
          </h2>
          <p className="text-[16px] max-w-lg mx-auto" style={{ color: "#6B7280" }}>
            From beginner fundamentals to advanced strategies — access free trading education and market insights.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Articles — 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[16px] font-bold" style={{ color: "#111827" }}>Latest Articles</h3>
              <Link href="/tools/news"
                className="text-[13px] font-semibold flex items-center gap-1.5 transition-colors"
                style={{ color: "#1A90C3" }}>
                View all
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <StaggerChildren className="space-y-4">
              {ARTICLES.map((a) => (
                <motion.div key={a.title} variants={fadeUpItem}>
                  <Link href="/tools/news"
                    className="card card-hover flex flex-col p-5 no-underline"
                    style={{ textDecoration: "none" }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="tag">{a.tag}</span>
                      <span className="text-[11px]" style={{ color: "#9CA3AF" }}>{a.readTime}</span>
                    </div>
                    <h4 className="text-[14px] font-semibold mb-2 leading-snug" style={{ color: "#111827" }}>{a.title}</h4>
                    <p className="text-[13px] leading-relaxed" style={{ color: "#6B7280" }}>{a.excerpt}</p>
                  </Link>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>

          {/* Education — 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[16px] font-bold" style={{ color: "#111827" }}>Education Levels</h3>
              <Link href="/tools/education"
                className="text-[13px] font-semibold flex items-center gap-1.5 transition-colors"
                style={{ color: "#1A90C3" }}>
                Explore
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-3">
              {EDU_LEVELS.map((l) => (
                <FadeUp key={l.level}>
                  <Link href="/tools/education"
                    className="card flex items-center gap-4 p-4 no-underline group transition-all hover:border-blue-200"
                    style={{ textDecoration: "none" }}>
                    <span className="text-2xl">{l.icon}</span>
                    <div>
                      <div className="text-[14px] font-semibold group-hover:text-blue-600 transition-colors" style={{ color: "#111827" }}>
                        {l.level}
                      </div>
                      <div className="text-[12px]" style={{ color: "#6B7280" }}>{l.desc}</div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>

            {/* Mini CTA */}
            <FadeUp>
              <div className="mt-4 rounded-xl p-5 text-center"
                style={{ background: "#EBF5FB", border: "1px solid #BAE2F5" }}>
                <div className="text-[14px] font-semibold mb-1" style={{ color: "#07111F" }}>Free for all clients</div>
                <div className="text-[12px] mb-3" style={{ color: "#6B7280" }}>Open an account to access all education content.</div>
                <Link href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary btn-sm w-full justify-center">
                  Get Started Free
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
