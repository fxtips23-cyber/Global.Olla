"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "https://ollatrade.com" },
  { label: "Trading", href: "https://ollatrade.com/trading/" },
  { label: "Promotions", href: "https://ollatrade.com/promotions/" },
  { label: "About Us", href: "https://ollatrade.com/about-us/" },
  { label: "Contact Us", href: "https://ollatrade.com/contact-us/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0D14] border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="https://ollatrade.com" className="flex-shrink-0">
            <Image
              src="https://ollatrade.com/wp-content/uploads/2025/06/logo.png"
              alt="Olla Trade"
              width={147}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  link.label === "Promotions"
                    ? "text-[#00CC44] hover:text-[#00FF55]"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://direct.ollatrade.com/auth/login"
              className="text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-md transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://direct.ollatrade.com/auth/register"
              className="text-sm font-bold bg-[#00CC44] hover:bg-[#00DD4A] text-black px-5 py-2 rounded-md transition-colors shadow-lg shadow-green-900/30"
            >
              Open Account
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0D1117] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                link.label === "Promotions"
                  ? "text-[#00CC44]"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-white/10">
            <Link
              href="https://direct.ollatrade.com/auth/login"
              className="text-sm font-medium text-center border border-white/20 text-white/80 px-4 py-3 rounded-md hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="https://direct.ollatrade.com/auth/register"
              className="text-sm font-bold text-center bg-[#00CC44] hover:bg-[#00DD4A] text-black px-4 py-3 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              Open Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
