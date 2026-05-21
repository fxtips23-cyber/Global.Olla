import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for static files, api routes, and Next.js internals
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|olla-logo.png|mt4|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|js|css|woff|woff2)).*)",
  ],
};
