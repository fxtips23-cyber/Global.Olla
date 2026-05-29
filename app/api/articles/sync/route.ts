import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CACHE_PATH = path.join(process.cwd(), "data", "articles.json");
const WP_API    = "https://ollatrade.com/wp-json/wp/v2/posts";
const WP_ORIGIN = "https://ollatrade.com";

export interface Article {
  id:            number;
  slug:          string;
  title:         string;
  excerpt:       string;
  link:          string;
  date:          string;         // ISO 8601
  modified:      string;
  featuredImage: string | null;
  categories:    string[];
  author:        string;
  readTime:      number;         // estimated minutes
}

interface Cache {
  articles: Article[];
  lastSync: string | null;
  error:    string | null;
}

/* ── HTML → plain text helper ───────────────────────────────── */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8230;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

/* ── Estimate reading time ──────────────────────────────────── */
function readTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/* ── Fetch all posts from WP REST API ───────────────────────── */
async function fetchWpPosts(): Promise<Article[]> {
  const articles: Article[] = [];
  let page = 1;
  const perPage = 50;

  while (true) {
    const url = `${WP_API}?per_page=${perPage}&page=${page}&_embed=1&status=publish`;
    const res = await fetch(url, {
      headers: { "User-Agent": "OllaTrade-Sync/1.0" },
      next:    { revalidate: 0 },
    });

    if (!res.ok) break;

    const posts = await res.json() as Record<string, unknown>[];
    if (!Array.isArray(posts) || posts.length === 0) break;

    for (const p of posts) {
      const embedded = (p._embedded as Record<string, unknown[]>) ?? {};

      // Featured image
      let featuredImage: string | null = null;
      const media = embedded["wp:featuredmedia"];
      if (Array.isArray(media) && media.length > 0) {
        const m = media[0] as Record<string, unknown>;
        featuredImage = (m.source_url as string) ?? null;
      }

      // Categories
      const termGroups = embedded["wp:term"] as unknown[][];
      const categories: string[] = [];
      if (Array.isArray(termGroups) && termGroups.length > 0) {
        const cats = termGroups[0] as Record<string, unknown>[];
        for (const c of cats) {
          if (c.name) categories.push(c.name as string);
        }
      }

      // Author
      let author = "Olla Trade";
      const authors = embedded["author"] as Record<string, unknown>[];
      if (Array.isArray(authors) && authors.length > 0) {
        author = (authors[0].name as string) ?? "Olla Trade";
      }

      const titleObj  = p.title  as Record<string, string>;
      const excerptObj= p.excerpt as Record<string, string>;
      const contentObj= p.content as Record<string, string>;

      articles.push({
        id:            p.id as number,
        slug:          p.slug as string,
        title:         stripHtml(titleObj?.rendered ?? ""),
        excerpt:       stripHtml(excerptObj?.rendered ?? "").slice(0, 280),
        link:          p.link as string,
        date:          p.date as string,
        modified:      p.modified as string,
        featuredImage,
        categories:    categories.filter(Boolean),
        author,
        readTime:      readTime(contentObj?.rendered ?? ""),
      });
    }

    // Check if more pages exist
    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
    if (page >= totalPages || posts.length < perPage) break;
    page++;
  }

  return articles;
}

/* ── Load cache ─────────────────────────────────────────────── */
async function loadCache(): Promise<Cache> {
  try {
    const raw = await fs.readFile(CACHE_PATH, "utf-8");
    return JSON.parse(raw) as Cache;
  } catch {
    return { articles: [], lastSync: null, error: null };
  }
}

/* ── Save cache ─────────────────────────────────────────────── */
async function saveCache(cache: Cache): Promise<void> {
  const dir = path.dirname(CACHE_PATH);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(CACHE_PATH, JSON.stringify(cache, null, 2), "utf-8");
}

/* ── Merge: update existing, add new, no duplicates ────────── */
function mergeArticles(existing: Article[], fetched: Article[]): Article[] {
  const map = new Map<number, Article>(existing.map(a => [a.id, a]));
  for (const a of fetched) {
    map.set(a.id, a); // update or add
  }
  return Array.from(map.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/* ── POST /api/articles/sync  (protected) ───────────────────── */
export async function POST(req: NextRequest) {
  // Auth check
  const key = req.nextUrl.searchParams.get("key")
    ?? req.headers.get("x-sync-key");
  const expected = process.env.ARTICLES_SYNC_KEY;

  if (!expected || key !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cache = await loadCache();

  try {
    const fetched = await fetchWpPosts();
    cache.articles  = mergeArticles(cache.articles, fetched);
    cache.lastSync  = new Date().toISOString();
    cache.error     = null;
    await saveCache(cache);

    return NextResponse.json({
      success:  true,
      synced:   fetched.length,
      total:    cache.articles.length,
      lastSync: cache.lastSync,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    cache.error = msg;
    await saveCache(cache);
    console.error("[articles/sync] error:", msg);

    return NextResponse.json(
      { success: false, error: "Sync failed — last cache preserved", detail: msg },
      { status: 500 }
    );
  }
}

/* ── GET /api/articles/sync — status only ───────────────────── */
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  const expected = process.env.ARTICLES_SYNC_KEY;

  if (!expected || key !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cache = await loadCache();
  return NextResponse.json({
    total:    cache.articles.length,
    lastSync: cache.lastSync,
    error:    cache.error,
  });
}
