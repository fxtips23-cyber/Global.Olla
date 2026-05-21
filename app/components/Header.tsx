"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronDown } from "./ui/Icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

/* ─── Icon helpers (inline SVG — no emoji) ─────────────────────────── */
function NavIcon({ d, className = "w-4 h-4" }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );
}

const ICONS: Record<string, string> = {
  forex:      "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18",
  metals:     "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  indices:    "M18 20V10M12 20V4M6 20v-6",
  energies:   "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  crypto:     "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v20M2 12h20",
  stocks:     "M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z",
  platform:   "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v4m0 0h10M9 7H3m0 0v10a2 2 0 002 2h4M3 7h6",
  accounts:   "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z",
  conditions: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  deposit:    "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  withdrawal: "M19 14l-7 7m0 0l-7-7m7 7V3",
  payments:   "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1",
  funding:    "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  execution:  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l2 2 4-4",
  calendar:   "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  calculator: "M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm4 4h8M8 10h8M8 14h4M14 14h2M8 18h2M14 18h2",
  alerts:     "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  vps:        "M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
  glossary:   "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  education:  "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  news:       "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  about:      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  affiliate:  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  contact:    "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  help:       "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  legal:      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  complaints: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
};

const menus = {
  Markets: {
    sections: [
      {
        heading: "FX & Commodities",
        links: [
          { key: "forex",    label: "Forex",    sub: "70+ currency pairs",   href: "/markets/forex" },
          { key: "metals",   label: "Metals",   sub: "Gold & Silver",        href: "/markets/metals" },
          { key: "energies", label: "Energies", sub: "Oil & Gas CFDs",       href: "/markets/energies" },
        ],
      },
      {
        heading: "Indices & Digital",
        links: [
          { key: "indices",  label: "Indices",  sub: "Global stock indices", href: "/markets/indices" },
          { key: "crypto",   label: "Crypto",   sub: "BTC, ETH & more",      href: "/markets/crypto" },
          { key: "stocks",   label: "Stocks",   sub: "1,000+ equities",      href: "/markets/stocks" },
        ],
      },
    ],
    cta: { label: "View all markets →", href: "/markets", badge: "500+ Instruments" },
  },
  Trading: {
    sections: [
      {
        heading: "Platform & Accounts",
        links: [
          { key: "platform",   label: "MetaTrader 4",       sub: "Desktop, Web & Mobile",  href: "/trading/platform" },
          { key: "accounts",   label: "Compare Accounts",   sub: "Standard · Pro · Elite", href: "/trading/accounts" },
          { key: "conditions", label: "Trading Conditions", sub: "Spreads & leverage",     href: "/trading/conditions" },
        ],
      },
      {
        heading: "Funding & Execution",
        links: [
          { key: "execution", label: "Execution Information", sub: "Order execution & pricing policy",    href: "/execution-information" },
          { key: "funding",   label: "Funding & Withdrawals", sub: "Deposit, withdraw & payment methods", href: "/funding-and-withdrawals" },
        ],
      },
    ],
    cta: { label: "Open account →", href: "https://direct.ollatrade.com/auth/register", badge: "Min. $10 Deposit" },
  },
  Tools: {
    sections: [
      {
        heading: "Analysis & Research",
        links: [
          { key: "calendar",   label: "Economic Calendar", sub: "Market events",       href: "/tools/economic-calendar" },
          { key: "calculator", label: "Forex Calculator",  sub: "Pip, margin & P&L",   href: "/tools/forex-calculator" },
          { key: "alerts",     label: "Trading Alerts",    sub: "Price notifications", href: "/tools/alerts" },
        ],
      },
      {
        heading: "Infrastructure & News",
        links: [
          { key: "vps",  label: "VPS Guide",    sub: "Run EAs 24/5",        href: "/tools/vps" },
          { key: "news", label: "Articles",      sub: "Analysis & insights", href: "/tools/news" },
        ],
      },
    ],
    cta: { label: "Explore tools →", href: "/tools", badge: "Free for all clients" },
  },
  Company: {
    sections: [
      {
        heading: "About",
        links: [
          { key: "about",     label: "About Us",         sub: "Our story & mission",   href: "/company/about" },
          { key: "affiliate", label: "Partner Program",  sub: "Earn commissions",      href: "/company/affiliate" },
          { key: "contact",   label: "Contact Us",       sub: "24/5 support",          href: "/contact-us" },
        ],
      },
      {
        heading: "Support",
        links: [
          { key: "help",       label: "Get Help",          sub: "FAQs & guides",        href: "/company/help" },
          { key: "legal",      label: "Legal Documents",   sub: "Terms & policies",     href: "/company/legal" },
          { key: "complaints", label: "Complaints",        sub: "Complaint process",    href: "/company/complaints" },
        ],
      },
    ],
    cta: { label: "Contact support →", href: "/company/contact", badge: "24/5 Support" },
  },
} as const;

type MenuKey = keyof typeof menus;

export default function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = (k: MenuKey) => { if (ref.current) clearTimeout(ref.current); setOpen(k); };
  const leave = () => { ref.current = setTimeout(() => setOpen(null), 180); };
  useEffect(() => () => { if (ref.current) clearTimeout(ref.current); }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050C15]/97 backdrop-blur-md border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-6">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 mr-4">
              <Image src="https://ollatrade.com/wp-content/uploads/2025/06/logo.png" alt="Olla Trade" width={140} height={34} priority className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {(Object.keys(menus) as MenuKey[]).map((key) => (
                <div key={key} className="relative" onMouseEnter={() => enter(key)} onMouseLeave={leave}>
                  <button className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all ${open === key ? "text-white bg-white/6" : "text-white/55 hover:text-white hover:bg-white/5"}`}>
                    {key}
                    <IconChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === key ? "rotate-180 text-[#00CC44]" : ""}`} />
                  </button>

                  {/* Dropdown */}
                  {open === key && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#0A1220] border border-white/8 rounded-2xl shadow-2xl shadow-black/70 z-50 min-w-[520px]"
                      onMouseEnter={() => enter(key)} onMouseLeave={leave}
                    >
                      <div className="flex">
                        {menus[key].sections.map((section, si) => (
                          <div key={section.heading} className={`flex-1 p-5 ${si > 0 ? "border-l border-white/6" : ""}`}>
                            <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.18em] mb-3">{section.heading}</div>
                            <div className="space-y-px">
                              {section.links.map((l) => (
                                <Link
                                  key={l.label}
                                  href={l.href}
                                  onClick={() => setOpen(null)}
                                  className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 group transition-colors"
                                >
                                  <div className="w-6 h-6 rounded-md border border-white/8 bg-white/4 flex items-center justify-center flex-shrink-0 text-white/28 group-hover:text-white/55 group-hover:border-white/14 transition-colors">
                                    <NavIcon d={ICONS[l.key]} className="w-3 h-3" />
                                  </div>
                                  <div>
                                    <div className="text-[12.5px] font-medium text-white/65 group-hover:text-white transition-colors leading-none mb-0.5">{l.label}</div>
                                    <div className="text-[10.5px] text-white/25">{l.sub}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Footer bar with CTA link */}
                      <div className="border-t border-white/6 px-5 py-3 flex items-center justify-between">
                        <span className="text-[10px] text-white/20">{menus[key].cta.badge}</span>
                        <Link href={menus[key].cta.href} onClick={() => setOpen(null)}
                          className="text-[11px] font-semibold text-[#00CC44] hover:text-[#00DD4A] transition-colors">
                          {menus[key].cta.label}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Promotions — direct link, no dropdown */}
              <Link href="https://ollatrade.com/promotions/" className="px-3.5 py-2 text-[13px] font-medium text-white/55 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                Promotions
              </Link>
            </nav>

            {/* Desktop CTAs + Language switcher */}
            <div className="hidden lg:flex items-center gap-2 ml-auto">
              <LanguageSwitcher />
              <Link href="https://direct.ollatrade.com/auth/login" className="text-[13px] font-medium text-white/55 hover:text-white border border-white/12 hover:border-white/25 px-4 py-2 rounded-lg transition-all">
                Login
              </Link>
              <Link href="https://direct.ollatrade.com/auth/register" className="text-[13px] font-bold bg-[#00CC44] hover:bg-[#00DD4A] text-black px-5 py-2 rounded-lg transition-all">
                Open Account
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden ml-auto p-2 text-white/60 hover:text-white" aria-label="Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#0A1220] border-b border-white/8 overflow-y-auto max-h-[80vh] lg:hidden">
          <div className="px-4 py-3 space-y-0.5">
            {(Object.keys(menus) as MenuKey[]).map((key) => (
              <div key={key}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                  className="w-full flex items-center justify-between px-4 py-3 text-[13px] font-medium text-white/60 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                >
                  {key}
                  <IconChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === key ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === key && (
                  <div className="pl-4 pb-2">
                    {(menus[key].sections as unknown as Array<{ heading: string; links: Array<{ key: string; label: string; sub: string; href: string }> }>).flatMap((s) => s.links).map((l) => (
                      <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text/50 hover:text-white rounded-xl hover:bg-white/5 transition-colors">
                        <NavIcon d={ICONS[l.key] ?? ""} className="w-4 h-4 text-white/25" />
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="https://ollatrade.com/promotions/" className="block px-4 py-3 text-[13px] font-medium text-white/55" onClick={() => setMobileOpen(false)}>Promotions</Link>
            <div className="grid grid-cols-2 gap-2 pt-3 pb-2 border-t border-white/6 mt-2">
              <Link href="https://direct.ollatrade.com/auth/login" className="text-center text-[13px] font-medium border border-white/15 text-white/60 py-3 rounded-xl" onClick={() => setMobileOpen(false)}>Login</Link>
              <Link href="https://direct.ollatrade.com/auth/register" className="text-center text-[13px] font-bold bg-[#00CC44] text-black py-3 rounded-xl" onClick={() => setMobileOpen(false)}>Open Account</Link>
            </div>
            <LanguageSwitcher mobile />
          </div>
        </div>
      )}
    </>
  );
}
