"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { routing, type Locale } from "../../i18n/routing";

const FLAGS: Record<Locale, string> = { en: "EN", pt: "PT", es: "ES", zh: "中" };
const LABELS: Record<Locale, string> = { en: "English", pt: "Português", es: "Español", zh: "中文" };

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const locale     = useLocale() as Locale;
  const pathname   = usePathname();
  const router     = useRouter();
  const t          = useTranslations("lang");
  const [open, setOpen]     = useState(false);
  const [pending, start]    = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function switchLocale(next: Locale) {
    setOpen(false);
    start(() => router.replace(pathname, { locale: next }));
  }

  if (mobile) {
    return (
      <div className="px-4 pt-3 pb-2 border-t border-white/6 mt-1">
        <div className="text-[9px] font-bold text-white/25 uppercase tracking-widest mb-2">Language</div>
        <div className="grid grid-cols-4 gap-2">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              disabled={pending}
              className={`py-2 rounded-lg text-[12px] font-bold transition-all ${
                loc === locale
                  ? "bg-[#00CC44] text-black"
                  : "bg-white/6 text-white/50 hover:bg-white/12 hover:text-white"
              }`}
            >
              {FLAGS[loc]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        disabled={pending}
        className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-bold text-white/50 hover:text-white hover:bg-white/6 rounded-lg transition-all"
        aria-label="Language"
      >
        <span>{FLAGS[locale]}</span>
        <svg className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[#0A1220] border border-white/8 rounded-xl shadow-2xl shadow-black/60 z-50 min-w-[140px] py-1 overflow-hidden">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-[12px] transition-colors ${
                loc === locale
                  ? "bg-white/6 text-white font-semibold"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-[13px] font-bold w-5 text-center">{FLAGS[loc]}</span>
              <span>{LABELS[loc]}</span>
              {loc === locale && (
                <svg className="w-3 h-3 text-[#00CC44] ml-auto" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
