"use client";
import Link from "next/link";
import Image from "next/image";

const LINKS = {
  Markets: [
    ["Forex",    "/markets/forex"],
    ["Metals",   "/markets/metals"],
    ["Indices",  "/markets/indices"],
    ["Futures",  "/markets/futures"],
    ["Crypto",   "/markets/crypto"],
    ["Energies", "/markets/energies"],
  ],
  Trading: [
    ["Platform",          "/trading/platform"],
    ["Classic Account",   "/trading/accounts/classic"],
    ["Pro Account",       "/trading/accounts/pro"],
    ["RAW Account",       "/trading/accounts/raw"],
    ["Compare Accounts",  "/trading/accounts"],
  ],
  Learn: [
    ["Articles",   "/tools/news"],
    ["Education",  "/tools/education"],
  ],
  Company: [
    ["About Us",      "/company/about"],
    ["Partner with Us","/company/affiliate"],
    ["Legal Docs",    "/company/legal"],
    ["Contact Us",    "/contact-us"],
  ],
};

const LEGAL_LINKS = [
  ["Terms & Conditions",  "/legal/terms"],
  ["Privacy Policy",      "/legal/privacy"],
  ["Risk Disclosure",     "/legal/risk-disclosures"],
  ["Cookies Policy",      "/legal/cookies"],
  ["AML/KYC Policy",      "/legal/kyc-aml"],
];

const SOCIALS = [
  { label: "Facebook",  href: "https://www.facebook.com/OllaTrade",         path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Instagram", href: "https://www.instagram.com/OllaTrade",        path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm4-8a1 1 0 110-2 1 1 0 010 2z" },
  { label: "X",         href: "https://x.com/OllaTrade",                    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/OllaTrade", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#07111F" }}>

      {/* ── Main ──────────────────────────────────────────────── */}
      <div className="container-wide" style={{ paddingTop: 80, paddingBottom: 72 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="lg:footer-grid">
          <style>{`
            @media (min-width: 1024px) {
              .lg\\:footer-grid { grid-template-columns: 260px 1fr !important; gap: 80px !important; }
            }
          `}</style>

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="https://ollatrade.com/wp-content/uploads/2025/10/final-logo.png"
                alt="Olla Trade"
                width={140}
                height={34}
                className="h-8 w-auto brightness-0 invert"
                style={{ opacity: 0.85 }}
              />
            </Link>
            <p className="text-[13px] leading-relaxed mb-5 max-w-[230px]"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              A regulated forex and CFD broker offering access to global markets with competitive trading conditions.
            </p>

            {/* Regulation badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg mb-5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#1A90C3" }}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#1A90C3" }}>UAE SCA Regulated</div>
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>Lic. No. 20200000416</div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, path }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.40)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(26,144,195,0.20)"; el.style.color = "#1A90C3"; el.style.borderColor = "rgba(26,144,195,0.35)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.06)"; el.style.color = "rgba(255,255,255,0.40)"; el.style.borderColor = "rgba(255,255,255,0.10)"; }}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75}
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — 4-column even grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="sm:link-grid-2">
            <style>{`
              @media (max-width: 639px) { .sm\\:link-grid-2 { grid-template-columns: repeat(2, 1fr) !important; } }
            `}</style>
            {Object.entries(LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 style={{
                  fontSize: 11, fontWeight: 800, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
                  marginBottom: 20,
                }}>
                  {title}
                </h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href}
                        style={{ fontSize: 13, color: "rgba(255,255,255,0.48)", textDecoration: "none", display: "block", transition: "color 0.15s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.48)"; }}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact bar ───────────────────────────────────────── */}
      <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container-wide py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[12px]"
            style={{ color: "rgba(255,255,255,0.35)" }}>
            <span>📍 Empire Heights Tower B, Business Bay, Dubai, UAE</span>
            <span>📞 +971 4 236 4367</span>
            <span>✉️ info@ollatrade.com</span>
          </div>
        </div>
      </div>

      {/* ── Risk disclaimer ───────────────────────────────────── */}
      <div className="container-wide py-7">
        <p className="text-[11px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.22)" }}>
          <strong style={{ color: "rgba(255,255,255,0.40)", fontWeight: 700 }}>Risk Warning: </strong>
          Trading Forex and CFDs involves a significant risk of loss and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite. There is a possibility that you may sustain a loss equal to or greater than your entire investment. Therefore, you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts. Past performance is not indicative of future results.
        </p>
        <p className="text-[11px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.22)" }}>
          <strong style={{ color: "rgba(255,255,255,0.40)", fontWeight: 700 }}>Regulatory: </strong>
          Olla Capital Financial Services L.L.C. is regulated by the UAE Securities and Commodities Authority (SCA), Licence No. 20200000416. Registered office: Empire Heights Tower B, Business Bay, Dubai, UAE.
        </p>
        <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.22)" }}>
          <strong style={{ color: "rgba(255,255,255,0.40)", fontWeight: 700 }}>Restricted Jurisdictions: </strong>
          Our services are not available to residents of certain jurisdictions. Please review our Terms and Conditions and legal documentation before proceeding.
        </p>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container-wide py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Olla Capital Financial Services L.L.C. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_LINKS.map(([label, href]) => (
              <Link key={label} href={href}
                className="text-[11px] transition-colors"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.60)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"; }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
