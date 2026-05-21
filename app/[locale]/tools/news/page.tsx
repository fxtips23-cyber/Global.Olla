import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/constants";

export const metadata: Metadata = {
  title: "Articles — Market Analysis & Trading Insights",
  description: "Read market analysis, trading insights, and educational articles from Olla Trade. Content is published on the official Olla Trade blog.",
};

const categories = ["All", "Forex", "Metals", "Crypto", "Indices", "Energies", "Education"];

/* Placeholder cards — real content will be synced from WordPress */
const placeholders = [
  { cat: "Forex",     readTime: "4 min read" },
  { cat: "Metals",    readTime: "3 min read" },
  { cat: "Crypto",    readTime: "5 min read" },
  { cat: "Indices",   readTime: "4 min read" },
  { cat: "Energies",  readTime: "3 min read" },
  { cat: "Education", readTime: "6 min read" },
];

export default function ArticlesPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(0,204,68,0.05) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <Link href="/tools" className="hover:text-white/45 transition-colors">Tools</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">Articles</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Market Analysis & Insights</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
            Articles
          </h1>
          <p className="text-[17px] text-white/40 max-w-2xl leading-relaxed mb-8">
            Market analysis, educational content, and trading insights published by the Olla Trade team. Full article library available on the Olla Trade website.
          </p>

          {/* Search bar */}
          <div className="flex gap-3 max-w-xl">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles…"
                readOnly
                className="w-full pl-11 pr-4 py-3 bg-white/6 border border-white/10 rounded-xl text-[14px] text-white/40 placeholder-white/25 focus:outline-none cursor-not-allowed"
              />
            </div>
            <a
              href={SITE.articlesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-[13px] transition-colors flex-shrink-0"
              style={{ background: "#00CC44", color: "#000" }}
            >
              View All
            </a>
          </div>
          <p className="text-[11px] text-white/20 mt-3">Full search available at ollatrade.com/articles</p>
        </div>
      </section>

      {/* ── 2. Category filter ───────────────────────────────────── */}
      <section className="bg-[#081018] border-b border-white/6 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold cursor-pointer transition-all ${i === 0 ? "bg-[#00CC44] text-black" : "text-white/40 border border-white/10 hover:text-white hover:border-white/25"}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CTA banner — WordPress link ──────────────────────── */}
      <section className="bg-[#0A1220] border-b border-white/6 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00CC44]/10 border border-[#00CC44]/20 text-[#00CC44] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-bold text-white">Full article library on Olla Trade</div>
                <div className="text-[11px] text-white/35">New articles published regularly at ollatrade.com/articles</div>
              </div>
            </div>
            <a
              href={SITE.articlesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 text-[12px] font-semibold text-[#00CC44] hover:text-[#00DD4A] transition-colors border border-[#00CC44]/25 hover:border-[#00CC44]/50 px-5 py-2.5 rounded-xl"
            >
              Read All Articles
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Article placeholder cards ─────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[16px] font-bold text-[#111827]">Latest Articles</h2>
            <span className="text-[12px] text-gray-400">Content synced from Olla Trade WordPress</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {placeholders.map(({ cat, readTime }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all group"
              >
                {/* Thumbnail skeleton */}
                <div className="h-44 bg-gradient-to-br from-[#F5F7FA] to-[#E5E9F0] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] bg-[#00CC44]/10 text-[#00AA38] border border-[#00CC44]/15 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{cat}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2.5 bg-gray-100 rounded-full w-24 animate-pulse" />
                    <span className="text-[10px] text-gray-300">·</span>
                    <span className="text-[10px] text-gray-400">{readTime}</span>
                  </div>

                  {/* Title skeleton */}
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-gray-100 rounded-full w-full animate-pulse" />
                    <div className="h-3 bg-gray-100 rounded-full w-4/5 animate-pulse" />
                  </div>

                  {/* Summary skeleton */}
                  <div className="space-y-1.5 mb-5">
                    <div className="h-2 bg-gray-50 rounded-full w-full animate-pulse" />
                    <div className="h-2 bg-gray-50 rounded-full w-full animate-pulse" />
                    <div className="h-2 bg-gray-50 rounded-full w-3/4 animate-pulse" />
                  </div>

                  <div className="text-[11px] text-gray-400 italic mb-4">
                    Article content will be synced from the Olla Trade WordPress blog.
                  </div>

                  <a
                    href={SITE.articlesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors group-hover:gap-2"
                  >
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load more / View all CTA */}
          <div className="text-center">
            <a
              href={SITE.articlesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-[14px] transition-colors"
              style={{ background: "#00CC44", color: "#000" }}
            >
              View All Articles on Olla Trade
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-[11px] text-gray-400 mt-3">ollatrade.com/articles</p>
          </div>
        </div>
      </section>

      {/* ── 5. Disclaimer ────────────────────────────────────────── */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-[12px] text-amber-800 leading-relaxed">
            <strong className="font-bold">Disclaimer:</strong> Articles and market analysis published by Olla Trade are for informational and educational purposes only. They do not constitute investment advice, a solicitation to trade, or a recommendation to buy or sell any financial instrument. Past performance is not indicative of future results. Trading Forex and CFDs involves significant risk of loss.
          </div>
        </div>
      </section>
    </>
  );
}
