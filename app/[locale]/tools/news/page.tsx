import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import ArticlesClient from "../../../components/articles/ArticlesClient";

export const metadata: Metadata = {
  title: "Articles | Olla Trade",
  description: "Latest market insights, trading education, and Olla Trade updates. Articles synced daily from the Olla Trade blog.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }, { locale: "zh" }];
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="pointer-events-none absolute top-0 left-0 w-[400px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(0,204,68,0.05) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <Link href="/tools" className="hover:text-white/45 transition-colors">Tools</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">Articles</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">
            Market Analysis &amp; Insights
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">
                Articles
              </h1>
              <p className="text-white/40 max-w-xl text-[15px] leading-relaxed">
                Market analysis, trading education, and insights from the Olla Trade team. Synced daily from our blog.
              </p>
            </div>
            <a
              href="https://ollatrade.com/articles/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 text-[12px] font-semibold text-[#00CC44] border border-[#00CC44]/25 hover:border-[#00CC44]/50 px-5 py-2.5 rounded-xl transition-colors"
            >
              Full blog →
            </a>
          </div>
        </div>
      </section>

      {/* ── Articles client (search, filter, grid) ─────────────── */}
      <ArticlesClient />
    </>
  );
}
