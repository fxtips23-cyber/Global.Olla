import Link from "next/link";
import Image from "next/image";
import { IconPhone, IconMail, IconMapPin, IconShieldCheck } from "./ui/Icons";

const cols = [
  {
    title: "Markets",
    links: [
      ["Forex",        "/markets/forex"],
      ["Metals",       "/markets/metals"],
      ["Indices",      "/markets/indices"],
      ["Energies",     "/markets/energies"],
      ["Cryptocurrency","/markets/crypto"],
      ["Stocks",       "/markets/stocks"],
    ],
  },
  {
    title: "Trading",
    links: [
      ["MetaTrader 4",            "/trading/platform"],
      ["Compare Accounts",        "/trading/accounts"],
      ["Trading Conditions",      "/trading/conditions"],
      ["Funding & Withdrawals",   "/funding-and-withdrawals"],
      ["Execution Information",   "/execution-information"],
    ],
  },
  {
    title: "Tools",
    links: [
      ["Economic Calendar",  "/tools/economic-calendar"],
      ["Forex Calculator",   "/tools/forex-calculator"],
      ["Trading Alerts",     "/tools/alerts"],
      ["VPS Guide",          "/tools/vps"],
      ["Articles",           "/tools/news"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us",         "/company/about"],
      ["Partner Program",  "/company/affiliate"],
      ["Promotions",       "/company/promotions"],
      ["Contact Us",       "/contact-us"],
      ["Get Help",         "/company/help"],
      ["Complaints",       "/company/complaints"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Terms & Conditions",   "/legal/terms"],
      ["Privacy Policy",       "/legal/privacy"],
      ["Risk Disclosures",     "/legal/risk-disclosures"],
      ["KYC / AML Policy",     "/legal/kyc-aml"],
      ["Withdrawal Conditions","/legal/withdrawal-conditions"],
      ["Order Execution",      "/legal/execution-policy"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050C15]">

      {/* ── 1. Top institutional info bar ───────────────────────────── */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/6">
            {[
              {
                Icon: IconMapPin,
                label: "Registered Address",
                value: "Grace Complex, The Valley, AI 2640, Anguilla · Reg. No. A000001849",
              },
              {
                Icon: IconPhone,
                label: "Support (24/5)",
                value: "+44 7418 641736",
              },
              {
                Icon: IconMail,
                label: "Email",
                value: "info@ollatrade.com",
              },
              {
                Icon: IconShieldCheck,
                label: "Entity",
                value: "Olla Trade Ltd. · Execution-only service",
              },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-2.5 lg:px-5 lg:first:pl-0 lg:last:pr-0">
                <Icon className="w-3.5 h-3.5 text-white/20 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] font-bold text-white/18 uppercase tracking-widest mb-0.5">{label}</div>
                  <div className="text-[11px] text-white/32 leading-relaxed">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA strip removed — footer starts directly with link grid */}

      {/* ── 3. Main link grid ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image src="https://ollatrade.com/wp-content/uploads/2025/06/logo.png" alt="Olla Trade" width={120} height={30} className="h-7 w-auto" />
            </Link>
            <p className="text-[12px] text-white/25 leading-relaxed mb-6 max-w-[210px]">
              Professional online trading platform. Access global markets with MT4, tight spreads, and professional conditions.
            </p>
            {/* Social */}
            <div>
              <div className="text-[9px] font-bold text-white/16 uppercase tracking-widest mb-2.5">Follow</div>
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
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[9px] font-bold text-white/25 uppercase tracking-[0.18em] mb-5">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[12px] text-white/22 hover:text-white/50 transition-colors block leading-snug">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Risk disclaimer ──────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6 space-y-3 text-[11px] text-white/18 leading-relaxed">
            <p>
              <span className="text-white/28 font-semibold">Risk Warning: </span>
              Engaging in Forex and CFD trading involves inherent risks that may result in the loss of your invested capital. We strongly advise trading only with funds you can afford to lose. Leveraged trading is high risk and may not be suitable for all investors. It is possible to lose more than your initial deposit. Please ensure you fully understand the risks involved before trading.
            </p>
            <p>
              <span className="text-white/28 font-semibold">Execution Only: </span>
              Olla Trade Ltd. operates solely as an execution-only service and does not provide investment advice, portfolio management, or advisory services. Information on this website is for general informational purposes only and does not constitute a recommendation to trade any financial instrument.
            </p>
            <p>
              <span className="text-white/28 font-semibold">Restricted Jurisdictions: </span>
              Olla Trade Ltd. does not offer services to residents of the United States, Russia, Myanmar, United Arab Emirates, Canada, Israel, New Zealand, Iran, and North Korea (DPRK). It is the client&apos;s responsibility to comply with local laws prior to using our services.
            </p>
            <p>
              <span className="text-white/28 font-semibold">Registered: </span>
              Olla Trade Ltd. is incorporated in Anguilla (Reg. No. A000001849) as an International Business Company. Registered address: Grace Complex, The Valley, AI 2640, Anguilla.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[10.5px] text-white/14">
            <p>© {new Date().getFullYear()} Olla Trade Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              {[["Terms", "/legal/terms"], ["Privacy", "/legal/privacy"], ["Risk Disclosures", "/legal/risk-disclosures"], ["Cookies", "/legal/cookies"], ["Complaint Management", "/legal/complaint-management"]].map(([label, href]) => (
                <Link key={label} href={href} className="hover:text-white/30 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
