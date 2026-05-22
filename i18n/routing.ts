import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales:       ["en", "pt"] as const,
  defaultLocale: "en",
  localePrefix:  "as-needed",   // English at /, Portuguese at /pt
});

export type Locale = (typeof routing.locales)[number];
