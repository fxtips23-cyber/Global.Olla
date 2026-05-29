import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

/* ── Constants ─────────────────────────────────────────────────────── */
const REDIRECT_TARGET = "https://ollatrade.com";
const PREVIEW_COOKIE  = "olla_global_preview";
const COOKIE_MAX_AGE  = 60 * 60 * 24 * 30; // 30 days

/**
 * Countries allowed to view global.ollatrade.com.
 * All others are redirected to ollatrade.com (302).
 */
const ALLOWED_COUNTRIES = new Set([
  // LATAM
  "BR", "AR", "CL", "CO", "PE", "EC", "UY", "PY", "BO", "MX",
  "CR", "PA", "GT", "HN", "SV", "NI", "DO",
  // MENA / Africa
  "IQ", "NG", "AE",
]);

/** Search-engine crawlers and common bots always get through. */
const BOT_UA = /bot|crawl|spider|slurp|curl|wget|python-requests/i;

const intlMiddleware = createMiddleware(routing);

/* ── Middleware ─────────────────────────────────────────────────────── */
export default function middleware(request: NextRequest): NextResponse {

  // ── 1. Bot bypass ────────────────────────────────────────────────
  const ua = request.headers.get("user-agent") ?? "";
  if (BOT_UA.test(ua)) {
    return intlMiddleware(request);
  }

  // ── 2. Preview key — validate, set cookie, redirect to clean URL ──
  const candidateKey = request.nextUrl.searchParams.get("preview_key");
  if (candidateKey !== null) {
    const validKey = process.env.GLOBAL_PREVIEW_KEY;
    if (validKey && candidateKey === validKey) {
      // Strip preview_key from the URL so it doesn't linger in the bar
      const cleanUrl = request.nextUrl.clone();
      cleanUrl.searchParams.delete("preview_key");
      const res = NextResponse.redirect(cleanUrl, { status: 302 });
      res.cookies.set(PREVIEW_COOKIE, "true", {
        httpOnly: true,
        secure:   true,
        sameSite: "lax",
        path:     "/",
        maxAge:   COOKIE_MAX_AGE,
      });
      return res;
    }
    // Wrong key — fall through to normal geo check
  }

  // ── 3. Preview cookie bypass ──────────────────────────────────────
  if (request.cookies.get(PREVIEW_COOKIE)?.value === "true") {
    return intlMiddleware(request);
  }

  // ── 4. Resolve visitor country ───────────────────────────────────
  // Vercel injects x-vercel-ip-country on all edge requests.
  // request.geo is a legacy fallback; check both for safety.
  type GeoRequest = NextRequest & { geo?: { country?: string } };
  const country =
    request.headers.get("x-vercel-ip-country") ??
    (request as GeoRequest).geo?.country ??
    null;

  // No country = local dev / CI → always allow
  if (!country) {
    return intlMiddleware(request);
  }

  // ── 5. Blocked country → redirect to main site ───────────────────
  if (!ALLOWED_COUNTRIES.has(country)) {
    return NextResponse.redirect(REDIRECT_TARGET, { status: 302 });
  }

  // ── 6. Allowed country → run next-intl routing ───────────────────
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Same exclusions as before — static assets, API routes, Next.js internals
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|olla-logo.png|mt4|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|js|css|woff|woff2)).*)",
  ],
};
