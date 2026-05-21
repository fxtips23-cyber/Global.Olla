"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IconPhone, IconMail, IconMapPin, IconShieldCheck } from "./ui/Icons";

type ColKey = "markets" | "trading" | "tools" | "company" | "legal";

const COL_KEYS: ColKey[] = ["markets", "trading", "tools", "company", "legal"];

const COL_LINKS: Record<ColKey, [string, string][]> = {
  markets: [
    ["forex",    "/markets/forex"],
    ["metals",   "/markets/metals"],
    ["indices",  "/markets/indices"],
    ["energies", "/markets/energies"],
    ["crypto",   "/markets/crypto"],
    ["stocks",   "/markets/stocks"],
  ],
  trading: [
    ["platform",   "/trading/platform"],
    ["accounts",   "/trading/accounts"],
    ["conditions", "/trading/conditions"],
    ["funding",    "/funding-and-withdrawals"],
    ["execution",  "/execution-information"],
  ],
  tools: [
    ["calendar",   "/tools/economic-calendar"],
    ["calculator", "/tools/forex-calculator"],
    ["alerts",     "/tools/alerts"],
    ["vps",        "/tools/vps"],
    ["articles",   "/tools/news"],
  ],
  company: [
    ["about",      "/company/about"],
    ["affiliate",  "/company/affiliate"],
    ["promotions", "/company/promotions"],
    ["contact",    "/contact-us"],
    ["help",       "/company/help"],
    ["complaints", "/company/complaints"],
  ],
  legal: [
    ["terms",            "/legal/terms"],
    ["privacy",          "/legal/privacy"],
    ["risk",             "/legal/risk-disclosures"],
    ["kyc",              "/legal/kyc-aml"],
    ["withdrawal",       "/legal/withdrawal-conditions"],
    ["executionPolicy",  "/legal/execution-policy"],
  ],
};

const BOTTOM_LINKS: [string, string][] = [
  ["terms",     "/legal/terms"],
  ["privacy",   "/legal/privacy"],
  ["risk",      "/legal/risk-disclosures"],
  ["cookies",   "/legal/cookies"],
  ["complaint", "/legal/complaint-management"],
];

export default function Footer() {
  const t   = useTranslations("footer");
  const tf  = useTranslations("footer.links");
  const tc  = useTranslations("footer.cols");
  const ti  = useTranslations("footer.info");
  const td  = useTranslations("footer.disclaimer");
  const tbl = useTranslations("footer.bottomLinks");

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050C15]">

      {/* ── Top info bar ────────────────────────────────────────── */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/6">
            {[
              { Icon: IconMapPin,     labelKey: "address", value: "Grace Complex, The Valley, AI 2640, Anguilla · Reg. No. A000001849" },
              { Icon: IconPhone,      labelKey: "support", value: "+44 7418 641736" },
              { Icon: IconMail,       labelKey: "email",   value: "info@ollatrade.com" },
              { Icon: IconShieldCheck,labelKey: "entity",  value: ti("entityVal") },
            ].map(({ Icon, labelKey, value }) => (
              <div key={labelKey} className="flex items-start gap-2.5 lg:px-5 lg:first:pl-0 lg:last:pr-0">
                <Icon className="w-3.5 h-3.5 text-white/20 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] font-bold text-white/18 uppercase tracking-widest mb-0.5">{ti(labelKey as "address"|"support"|"email"|"entity")}</div>
                  <div className="text-[11px] text-white/32 leading-relaxed">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Link grid ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image src="https://ollatrade.com/wp-content/uploads/2025/06/logo.png" alt="Olla Trade" width={120} height={30} className="h-7 w-auto" />
            </Link>
            <p className="text-[12px] text-white/25 leading-relaxed mb-6 max-w-[210px]">{t("tagline")}</p>
            <div>
              <div className="text-[9px] font-bold text-white/16 uppercase tracking-widest mb-2.5">{t("follow")}</div>
              <div className="flex gap-2">
                {["FB", "IG", "X", "IN"].map((s) => (
                  <a key={s} href="https://ollatrade.com" aria-label={s}
                    className="w-7 h-7 border border-white/7 rounded-md flex items-center justify-center text-[10px] font-bold text-white/18 hover:border-white/18 hover:text-white/42 transition-all">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {COL_KEYS.map((colKey) => (
            <div key={colKey}>
              <h4 className="text-[9px] font-bold text-white/25 uppercase tracking-[0.18em] mb-5">{tc(colKey)}</h4>
              <ul className="space-y-2.5">
                {COL_LINKS[colKey].map(([linkKey, href]) => (
                  <li key={linkKey}>
                    <Link href={href} className="text-[12px] text-white/22 hover:text-white/50 transition-colors block leading-snug">
                      {tf(linkKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Risk disclaimer ─────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6 space-y-3 text-[11px] text-white/18 leading-relaxed">
            <p><span className="text-white/28 font-semibold">{td("risk")} </span>{td("risk_text")}</p>
            <p><span className="text-white/28 font-semibold">{td("exec")} </span>{td("exec_text")}</p>
            <p><span className="text-white/28 font-semibold">{td("restricted")} </span>{td("restricted_text")}</p>
            <p><span className="text-white/28 font-semibold">{td("registered")} </span>{td("registered_text")}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[10.5px] text-white/14">
            <p>{td("copyright").replace("{year}", String(year))}</p>
            <div className="flex flex-wrap gap-4">
              {BOTTOM_LINKS.map(([key, href]) => (
                <Link key={key} href={href} className="hover:text-white/30 transition-colors">{tbl(key as "terms"|"privacy"|"risk"|"cookies"|"complaint")}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
