import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CACHE_PATH = path.join(process.cwd(), "data", "articles.json");

interface Article {
  id:            number;
  slug:          string;
  title:         string;
  excerpt:       string;
  link:          string;
  date:          string;
  modified:      string;
  featuredImage: string | null;
  categories:    string[];
  author:        string;
  readTime:      number;
}

interface Cache {
  articles: Article[];
  lastSync: string | null;
  error:    string | null;
}

async function loadCache(): Promise<Cache> {
  try {
    const raw = await fs.readFile(CACHE_PATH, "utf-8");
    return JSON.parse(raw) as Cache;
  } catch {
    return { articles: [], lastSync: null, error: null };
  }
}

/* ── GET /api/articles ──────────────────────────────────────── */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const page     = Math.max(1, Number(searchParams.get("page")  ?? 1));
  const perPage  = Math.min(50, Number(searchParams.get("per")  ?? 12));
  const search   = (searchParams.get("search") ?? "").toLowerCase().trim();
  const category = (searchParams.get("category") ?? "").trim();

  const cache = await loadCache();
  let articles = cache.articles;

  // Filter by search
  if (search) {
    articles = articles.filter(a =>
      a.title.toLowerCase().includes(search) ||
      a.excerpt.toLowerCase().includes(search)
    );
  }

  // Filter by category
  if (category && category !== "all") {
    articles = articles.filter(a =>
      a.categories.some(c => c.toLowerCase() === category.toLowerCase())
    );
  }

  const total  = articles.length;
  const offset = (page - 1) * perPage;
  const items  = articles.slice(offset, offset + perPage);

  // Unique category list
  const allCategories = Array.from(
    new Set(cache.articles.flatMap(a => a.categories))
  ).sort();

  return NextResponse.json({
    articles:   items,
    total,
    page,
    perPage,
    totalPages: Math.ceil(total / perPage),
    categories: allCategories,
    lastSync:   cache.lastSync,
  }, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
