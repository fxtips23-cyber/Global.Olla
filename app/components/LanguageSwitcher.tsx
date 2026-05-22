"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { routing, type Locale } from "../../i18n/routing";

const LABELS: Record<Locale, string> = { en: "English", pt: "Português" };
const FLAGS:  Record<Locale, string> = { en: "EN",      pt: "PT" };

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const locale  = useLocale() as Locale;
  const pathname= usePathname();
  const router  = useRouter();
  const [open, setOpen]  = useState(false);
  const [pending, start] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  function switchLocale(next: Locale) {
    setOpen(false);
    start(() => router.replace(pathname, { locale: next }));
  }

  /* ── Mobile layout ───────────────────────────────────────── */
  if (mobile) {
    return (
      <div className="px-4 pt-3 pb-2 border-t border-white/6 mt-1">
        <div className="text-[9px] font-bold text-white/25 uppercase tracking-widest mb-2">Language / Idioma</div>
        <div className="grid grid-cols-2 gap-2 max-w-[160px]">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              disabled={pending}
              className={`py-2.5 rounded-xl text-[12px] font-bold transition-all ${
                loc === locale
                  ? "bg-[#00CC44] text-black"
                  : "bg-white/6 text-white/50 hover:bg-white/12 hover:text-white border border-white/8"
              }`}
            >
              {FLAGS[loc]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ── Desktop dropdown ─────────────────────────────────────── */
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        disabled={pending}
        aria-label="Switch language"
        className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-bold text-white/50 hover:text-white hover:bg-white/6 rounded-lg transition-all"
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span>{FLAGS[locale]}</span>
        <svg className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[#0A1220] border border-white/8 rounded-xl shadow-2xl shadow-black/60 z-50 min-w-[150px] py-1 overflow-hidden">
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
              <span className="text-[11px] font-extrabold w-5 text-center text-[#00CC44]">{FLAGS[loc]}</span>
              <span>{LABELS[loc]}</span>
              {loc === locale && (
                <svg className="w-3 h-3 text-[#00CC44] ml-auto flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
