"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id:            number;
  slug:          string;
  title:         string;
  excerpt:       string;
  link:          string;
  date:          string;
  featuredImage: string | null;
  categories:    string[];
  author:        string;
  readTime:      number;
}

interface ApiResponse {
  articles:   Article[];
  total:      number;
  page:       number;
  totalPages: number;
  categories: string[];
  lastSync:   string | null;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });
}

function ArticleCard({ a, featured = false }: { a: Article; featured?: boolean }) {
  return (
    <a
      href={a.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300 ${featured ? "lg:flex" : ""}`}
    >
      {/* Thumbnail */}
      <div className={`relative bg-[#F5F7FA] overflow-hidden flex-shrink-0 ${featured ? "lg:w-80 h-52 lg:h-auto" : "h-44"}`}>
        {a.featuredImage ? (
          <Image
            src={a.featuredImage}
            alt={a.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={featured ? "(max-width: 1024px) 100vw, 320px" : "400px"}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-200" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
        {/* Category pill overlay */}
        {a.categories[0] && (
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#00CC44] text-black uppercase tracking-wider">
              {a.categories[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-5 flex flex-col ${featured ? "flex-1" : ""}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] text-gray-400">{formatDate(a.date)}</span>
          <span className="text-gray-200">·</span>
          <span className="text-[11px] text-gray-400">{a.readTime} min read</span>
        </div>
        <h3 className={`font-bold text-[#111827] mb-2 group-hover:text-[#00AA38] transition-colors leading-snug ${featured ? "text-[18px]" : "text-[14px]"}`}>
          {a.title}
        </h3>
        <p className="text-[12px] text-gray-500 leading-relaxed flex-1 line-clamp-3">{a.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] text-gray-400">{a.author}</span>
          <span className="text-[11px] font-semibold text-[#00CC44] group-hover:text-[#00AA38] transition-colors flex items-center gap-1">
            Read article
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ArticlesClient() {
  const [data,      setData]      = useState<ApiResponse | null>(null);
  const [loading,   setLoading]   = useState(true);
  const [search,    setSearch]    = useState("");
  const [category,  setCategory]  = useState("all");
  const [page,      setPage]      = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 350);
    return () => clearTimeout(timer);
  }, [search]);

  // Reset page on filter change
  useEffect(() => { setPage(1); }, [debouncedSearch, category]);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page:     String(page),
        per:      "12",
        category,
        search:   debouncedSearch,
      });
      const res = await fetch(`/api/articles?${params}`);
      if (!res.ok) throw new Error("Failed");
      const json = await res.json() as ApiResponse;
      setData(json);
    } catch {
      // keep last data on error
    } finally {
      setLoading(false);
    }
  }, [page, category, debouncedSearch]);

  useEffect(() => { fetchArticles(); }, [fetchArticles]);

  const articles   = data?.articles ?? [];
  const categories = data?.categories ?? [];
  const featured   = articles[0];
  const rest       = articles.slice(1);

  return (
    <div>
      {/* ── Search + filter bar ───────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[#050C15] border-b border-white/6 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/6 border border-white/10 rounded-xl text-[13px] text-white/80 placeholder-white/25 focus:outline-none focus:border-[#00CC44]/40 transition-colors"
              />
            </div>

            {/* Category filters */}
            <div className="flex gap-2 flex-wrap">
              {["all", ...categories].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-2 rounded-full text-[11px] font-semibold transition-all ${
                    category === cat
                      ? "bg-[#00CC44] text-black"
                      : "text-white/45 border border-white/10 hover:border-white/25 hover:text-white/65"
                  }`}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>

            {/* Sync timestamp */}
            {data?.lastSync && (
              <div className="text-[9px] text-white/20 flex-shrink-0">
                Updated {formatDate(data.lastSync)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {loading && articles.length === 0 ? (
          /* Initial loading skeleton */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-44 bg-gray-100" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full w-1/3" />
                  <div className="h-4 bg-gray-100 rounded-full w-full" />
                  <div className="h-4 bg-gray-100 rounded-full w-4/5" />
                  <div className="space-y-2">
                    <div className="h-2.5 bg-gray-50 rounded-full w-full" />
                    <div className="h-2.5 bg-gray-50 rounded-full w-3/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          /* Empty state */
          <div className="text-center py-20">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="text-[15px] font-bold text-[#111827] mb-2">No articles found</h3>
            <p className="text-[13px] text-gray-500">
              {debouncedSearch || category !== "all"
                ? "Try adjusting your search or filter."
                : "Articles are syncing from the Olla Trade blog. Check back soon."}
            </p>
            {(debouncedSearch || category !== "all") && (
              <button
                onClick={() => { setSearch(""); setCategory("all"); }}
                className="mt-4 text-[12px] font-semibold text-[#00CC44] hover:text-[#00AA38] underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Featured article (first result, page 1 only) */}
            {page === 1 && !debouncedSearch && category === "all" && featured && (
              <div className="mb-8">
                <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Featured Article</div>
                <ArticleCard a={featured} featured />
              </div>
            )}

            {/* Grid */}
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ${loading ? "opacity-60 pointer-events-none" : ""} transition-opacity`}>
              {(page === 1 && !debouncedSearch && category === "all" ? rest : articles).map(a => (
                <ArticleCard key={a.id} a={a} />
              ))}
            </div>

            {/* Results count + pagination */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[12px] text-gray-400">
                Showing {Math.min((page - 1) * 12 + 1, data?.total ?? 0)}–{Math.min(page * 12, data?.total ?? 0)} of {data?.total ?? 0} articles
              </p>
              {(data?.totalPages ?? 1) > 1 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 border border-gray-200 rounded-xl text-[12px] font-medium text-[#111827] disabled:opacity-30 hover:border-gray-300 transition-colors"
                  >
                    ← Previous
                  </button>
                  <span className="px-4 py-2 text-[12px] text-gray-500">
                    {page} / {data?.totalPages}
                  </span>
                  <button
                    onClick={() => setPage(p => Math.min(data?.totalPages ?? 1, p + 1))}
                    disabled={page >= (data?.totalPages ?? 1)}
                    className="px-4 py-2 border border-gray-200 rounded-xl text-[12px] font-medium text-[#111827] disabled:opacity-30 hover:border-gray-300 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* View all on WordPress CTA */}
        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <p className="text-[13px] text-gray-500 mb-4">
            All articles are published on the Olla Trade blog. Click any article to read the full content.
          </p>
          <a
            href="https://ollatrade.com/articles/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
            style={{ background: "#00CC44", color: "#000" }}
          >
            View All on Olla Trade
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 text-center mt-6 leading-relaxed max-w-2xl mx-auto">
          Articles and market analysis published by Olla Trade are for informational and educational purposes only. They do not constitute investment advice or a recommendation to buy or sell any financial instrument. Trading involves risk.
        </p>
      </div>
    </div>
  );
}
