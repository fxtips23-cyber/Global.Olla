import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales:       ["en", "pt", "es", "zh"] as const,
  defaultLocale: "en",
  localePrefix:  "as-needed",   // English at /, others at /pt, /es, /zh
});

export type Locale = (typeof routing.locales)[number];
