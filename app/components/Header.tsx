"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

/* ── Nav data ────────────────────────────────────────────────── */
const MARKETS = [
  { key: "forex",    href: "/markets/forex",    emoji: "💱" },
  { key: "metals",   href: "/markets/metals",   emoji: "🥇" },
  { key: "indices",  href: "/markets/indices",  emoji: "📈" },
  { key: "futures",  href: "/markets/futures",  emoji: "📊" },
  { key: "crypto",   href: "/markets/crypto",   emoji: "₿" },
  { key: "energies", href: "/markets/energies", emoji: "⚡" },
];

const TRADING = [
  { key: "platform", href: "/trading/platform",         emoji: "🖥️" },
  { key: "classic",  href: "/trading/accounts/classic", emoji: "🟢" },
  { key: "pro",      href: "/trading/accounts/pro",     emoji: "🔵" },
  { key: "raw",      href: "/trading/accounts/raw",     emoji: "🟣" },
  { key: "compare",  href: "/trading/accounts",         emoji: "⚖️" },
];

const PARTNERS = [
  { key: "partner", href: "/company/affiliate", emoji: "🤝" },
];

const LEARN = [
  { key: "articles",  href: "/tools/news",       emoji: "📰" },
  { key: "education", href: "/tools/education",  emoji: "🎓" },
];

const COMPANY = [
  { key: "about", href: "/company/about", emoji: "🏢" },
  { key: "legal", href: "/company/legal", emoji: "📋" },
];

const NAV_GROUPS = [
  { key: "markets",  subKey: "markets_sub",  items: MARKETS  },
  { key: "trading",  subKey: "trading_sub",  items: TRADING  },
  { key: "partners", subKey: "partners_sub", items: PARTNERS },
  { key: "learn",    subKey: "learn_sub",    items: LEARN    },
  { key: "company",  subKey: "company_sub",  items: COMPANY  },
] as const;

/* ── Dropdown ────────────────────────────────────────────────── */
function Dropdown({
  groupKey, subKey, items, onClose,
}: {
  groupKey: string;
  subKey: string;
  items: readonly { key: string; href: string; emoji: string }[];
  onClose: () => void;
}) {
  const t = useTranslations("nav");

  const cols = items.length > 3 ? 2 : 1;
  const gridClass = cols === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="mega-menu absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 p-3 min-w-[240px]"
      style={{ width: cols === 2 ? 420 : 240 }}
    >
      <div className={`grid ${gridClass} gap-0.5`}>
        {items.map((item) => {
          const title = t(`${subKey}.${item.key}` as Parameters<typeof t>[0]);
          const desc  = t(`${subKey}.${item.key}_sub` as Parameters<typeof t>[0]);
          return (
            <Link
              key={item.key}
              href={item.href}
              onClick={onClose}
              className="mega-item"
            >
              <span className="mega-item-icon text-base">{item.emoji}</span>
              <div>
                <div className="mega-item-title">{title}</div>
                <div className="mega-item-desc">{desc}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Main Header ─────────────────────────────────────────────── */
export default function Header() {
  const t  = useTranslations("nav");
  const [open, setOpen]     = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close on outside click */
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(null);
        setMobile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* close on route change */
  const closeAll = useCallback(() => { setOpen(null); setMobile(false); }, []);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <>
      <header
        ref={ref}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          background: "#FFFFFF",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" onClick={closeAll} className="flex items-center gap-2.5 flex-shrink-0">
              <Image
                src="https://ollatrade.com/wp-content/uploads/2025/10/final-logo.png"
                alt="Olla Trade"
                width={140}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_GROUPS.map((group) => (
                <div
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => openMenu(group.key)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[14px] font-semibold transition-colors"
                    style={{ color: open === group.key ? "#1A90C3" : "#374151" }}
                  >
                    {t(group.key as Parameters<typeof t>[0])}
                    <svg
                      className="w-3.5 h-3.5 transition-transform"
                      style={{ transform: open === group.key ? "rotate(180deg)" : "rotate(0deg)" }}
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {open === group.key && (
                      <Dropdown
                        groupKey={group.key}
                        subKey={group.subKey}
                        items={group.items}
                        onClose={closeAll}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right: actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <LanguageSwitcher />
              <Link
                href="https://portal.ollatrade.com/auth/login"
                className="btn-ghost text-[13px] font-semibold"
                style={{ color: "#374151" }}
              >
                {t("login")}
              </Link>
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-sm"
              >
                {t("openAccount")}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: "#374151" }}
              onClick={() => setMobile((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {mobile
                  ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                  : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                }
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              onClick={() => setMobile(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full overflow-y-auto lg:hidden"
              style={{ background: "#FFFFFF", borderLeft: "1px solid #E5E7EB" }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
                <Link href="/" onClick={closeAll}>
                  <Image
                    src="https://ollatrade.com/wp-content/uploads/2025/10/final-logo.png"
                    alt="Olla Trade"
                    width={120}
                    height={28}
                    className="h-7 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobile(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="px-4 py-4">
                {NAV_GROUPS.map((group) => (
                  <div key={group.key} className="mb-1">
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileOpen(mobileOpen === group.key ? null : group.key)}
                    >
                      {t(group.key as Parameters<typeof t>[0])}
                      <svg
                        className="w-4 h-4 text-gray-400 transition-transform"
                        style={{ transform: mobileOpen === group.key ? "rotate(180deg)" : "rotate(0deg)" }}
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileOpen === group.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3"
                        >
                          {group.items.map((item) => (
                            <Link
                              key={item.key}
                              href={item.href}
                              onClick={closeAll}
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              <span className="text-base">{item.emoji}</span>
                              {t(`${group.subKey}.${item.key}` as Parameters<typeof t>[0])}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Drawer CTAs */}
              <div className="px-4 pb-6 pt-2 space-y-2.5 border-t border-gray-100 mt-2">
                <Link
                  href="https://portal.ollatrade.com/auth/login"
                  onClick={closeAll}
                  className="btn-secondary w-full justify-center"
                >
                  {t("login")}
                </Link>
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  onClick={closeAll}
                  className="btn-primary w-full justify-center"
                >
                  {t("openAccount")}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
