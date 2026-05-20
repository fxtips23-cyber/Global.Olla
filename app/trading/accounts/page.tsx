import { accountFaqs } from '../../data/faqs';
import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/ui/FAQSection";
import { IconCheck } from "../../components/ui/Icons";

export const metadata: Metadata = {
  title: "Compare Trading Accounts",
  description: "Compare Olla Trade Standard, Pro, and Elite accounts — minimum deposits, spreads, leverage, and features side by side.",
};

/* ─── Account data ─────────────────────────────────────────────────── */
const accounts = [
  { id: "standard", idx: 0, tier: "Entry Level",  name: "Standard", deposit: "$10",     spread: "From 1.4 pips", leverage: "1:400", commission: "None",              featured: false, cta: "Open Standard" },
  { id: "pro",      idx: 1, tier: "Most Popular", name: "Pro",      deposit: "$2,000",  spread: "From 1.0 pips", leverage: "1:400", commission: "None",              featured: true,  cta: "Open Pro"      },
  { id: "elite",    idx: 2, tier: "Professional", name: "Elite",    deposit: "$20,000", spread: "From 0.0 pips", leverage: "1:200", commission: "$3.5/lot per side", featured: false, cta: "Open Elite"    },
] as const;

type AccIndex = 0 | 1 | 2;
type CellVariant = "text" | "green" | "check";

interface Row { feature: string; values: [string, string, string]; variant?: CellVariant; }

const rows: Row[] = [
  { feature: "Min. Deposit",                  values: ["$10",            "$2,000",         "$20,000"],                  variant: "text"  },
  { feature: "Spread Type",                   values: ["Variable",        "Variable",       "Raw (variable)"],           variant: "text"  },
  { feature: "Avg. Spread (EUR/USD)",         values: ["From 1.4 pips",   "From 1.0 pips",  "From 0.0 pips"],            variant: "text"  },
  { feature: "Commission",                    values: ["None",            "None",           "$3.5 per lot per side"],    variant: "text"  },
  { feature: "Max Leverage",                  values: ["1:400",           "1:400",          "1:200"],                    variant: "text"  },
  { feature: "Margin Call Level",             values: ["80%",             "80%",            "80%"],                      variant: "text"  },
  { feature: "Stop Out Level",                values: ["20%",             "20%",            "20%"],                      variant: "text"  },
  { feature: "Instruments",                   values: ["500+",            "500+",           "500+ (incl. Futures)"],     variant: "text"  },
  { feature: "Order Execution",               values: ["Market",          "Market",         "Market"],                   variant: "text"  },
  { feature: "Expert Advisors",               values: ["Supported",       "Supported",      "Supported"],                variant: "check" },
  { feature: "Negative Balance Protection",   values: ["Yes",             "Yes",            "Yes"],                      variant: "check" },
  { feature: "24/5 Support",                  values: ["Standard",        "Priority",       "VIP"],                      variant: "check" },
  { feature: "Deposit / Withdrawal Fees",     values: ["None (from OT)",  "None (from OT)", "None (from OT)"],           variant: "green" },
  { feature: "Demo Account",                  values: ["Yes",             "Yes",            "Yes"],                      variant: "check" },
];

/* ─── Cell renderer ─────────────────────────────────────────────────── */
function Cell({ value, variant, featured }: { value: string; variant: CellVariant; featured: boolean }) {
  if (variant === "check") return (
    <span className="inline-flex items-center justify-center gap-1 text-[#00CC44] font-semibold text-[13px]">
      <IconCheck className="w-3.5 h-3.5 flex-shrink-0" />{value}
    </span>
  );
  if (variant === "green") return <span className="text-[#00CC44] font-semibold text-[13px]">{value}</span>;
  return <span className={`text-[13px] font-medium ${featured ? "text-[#111827]" : "text-[#111827]"}`}>{value}</span>;
}

/* ─── Account CTA button ────────────────────────────────────────────── */
function AccBtn({ acc, full = false }: { acc: typeof accounts[number]; full?: boolean }) {
  return (
    <Link href="https://direct.ollatrade.com/auth/register"
      className={`flex items-center justify-center font-bold py-3.5 rounded-xl text-[14px] transition-all hover:-translate-y-0.5 ${full ? "w-full" : "px-6 min-w-[140px]"} ${
        acc.featured
          ? "bg-[#00CC44] hover:bg-[#00DD4A] text-black shadow-md shadow-[#00CC44]/20"
          : "bg-[#111827] hover:bg-[#1a2540] text-white"
      }`}>
      {acc.cta}
    </Link>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────────────── */
const faqs = [
  { q: "Which account is best for beginners?",     a: "The Standard account is ideal for beginners — $10 minimum deposit, no commission, full MT4 access, and 500+ instruments." },
  { q: "Can I upgrade my account type later?",     a: "Yes. You can upgrade from Standard to Pro or Elite by depositing the required minimum. Contact support to arrange your upgrade." },
  { q: "Is a demo account available?",             a: "Yes. A demo account is available for all account types so you can practise with virtual funds before going live." },
  { q: "What is the difference between variable and raw spreads?", a: "Variable spreads fluctuate with market conditions. Raw spreads on the Elite account are the direct interbank rate plus a fixed commission per lot — typically lower in liquid market conditions." },
  { q: "How quickly can I open an account?",       a: "Registration takes about 2 minutes. KYC verification typically takes 1–2 business days. You can trade once approved." },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function AccountsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 pb-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(0,204,68,0.05) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00CC44]/10 border border-[#00CC44]/20 text-[#00CC44] text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Account Types
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Choose the Right<br className="hidden sm:block" /> Trading Account
          </h1>
          <p className="text-[17px] text-white/45 max-w-xl mx-auto leading-relaxed">
            Compare trading conditions, spreads, execution, and features across all Olla Trade account types.
          </p>
        </div>
      </section>

      {/* ── Account summary cards ──────────────────────────────────── */}
      <section className="bg-[#F5F7FA] py-10 lg:py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {accounts.map((acc) => (
              <div key={acc.id}
                className={`relative bg-white rounded-2xl flex flex-col transition-all duration-200 ${
                  acc.featured
                    ? "border-2 border-[#00CC44]/40 shadow-xl shadow-[#00CC44]/8 ring-4 ring-[#00CC44]/5"
                    : "border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                }`}>
                {acc.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#00CC44] text-black text-[11px] font-extrabold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">★ Most Popular</span>
                  </div>
                )}
                <div className="p-6 lg:p-7 flex-1">
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${acc.featured ? "text-[#00CC44]" : "text-gray-400"}`}>{acc.tier}</div>
                  <h2 className="text-2xl font-extrabold text-[#111827] mb-1">{acc.name}</h2>
                  <div className="text-4xl lg:text-5xl font-black text-[#111827] leading-none mb-1">{acc.deposit}</div>
                  <div className="text-[12px] text-gray-400 mb-5">Minimum deposit</div>
                  <div className="space-y-2">
                    {[["Spread", acc.spread], ["Leverage", acc.leverage], ["Commission", acc.commission]].map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-[12px] text-gray-400">{k}</span>
                        <span className="text-[12px] lg:text-[13px] font-semibold text-[#111827]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <AccBtn acc={acc} full />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2 text-center">Full Account Comparison</h2>
          <p className="text-gray-500 text-center mb-10 text-[15px]">Detailed breakdown of all conditions across every account type.</p>

          {/* ── DESKTOP TABLE (md+) ──────────────────────────────── */}
          <div className="hidden md:block">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Header row */}
              <div className="grid" style={{ gridTemplateColumns: "280px 1fr 1fr 1fr" }}>
                <div className="px-7 py-5 border-b border-gray-100 bg-[#F9FAFB]">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Feature</span>
                </div>
                {accounts.map((acc, i) => (
                  <div key={acc.id}
                    className={`px-6 py-5 text-center border-b ${i > 0 ? "border-l border-gray-100" : ""} ${
                      acc.featured
                        ? "bg-[#00CC44]/[0.045] border-b-[2px] border-b-[#00CC44] border-l-[#00CC44]/20"
                        : "bg-[#F9FAFB] border-b-gray-100"
                    }`}>
                    {acc.featured && (
                      <div className="flex justify-center mb-2">
                        <span className="bg-[#00CC44] text-black text-[9px] font-extrabold px-3 py-1 rounded-full">★ Popular</span>
                      </div>
                    )}
                    <div className="text-[17px] font-extrabold text-[#111827]">{acc.name}</div>
                    <div className={`text-[11px] mt-0.5 font-medium ${acc.featured ? "text-[#00CC44]" : "text-gray-400"}`}>{acc.tier}</div>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {rows.map((row, idx) => (
                <div key={row.feature}
                  className={`grid transition-colors group ${idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"} hover:bg-[#F0FFF4]/35`}
                  style={{ gridTemplateColumns: "280px 1fr 1fr 1fr" }}>
                  <div className="px-7 py-4 flex items-center border-b border-gray-50">
                    <span className="text-[13px] text-gray-500 font-medium">{row.feature}</span>
                  </div>
                  {row.values.map((val, ci) => (
                    <div key={ci}
                      className={`px-6 py-4 flex items-center justify-center border-b border-gray-50 ${ci > 0 ? "border-l" : ""} ${
                        ci === 1
                          ? "bg-[#00CC44]/[0.028] border-l-[#00CC44]/15"
                          : "border-l-gray-50"
                      }`}>
                      <Cell value={val} variant={row.variant ?? "text"} featured={ci === 1} />
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div className="grid border-t border-gray-100 bg-[#F9FAFB]"
                style={{ gridTemplateColumns: "280px 1fr 1fr 1fr" }}>
                <div className="px-7 py-6" />
                {accounts.map((acc, i) => (
                  <div key={acc.id}
                    className={`px-6 py-6 flex justify-center items-center ${i > 0 ? "border-l" : ""} ${
                      acc.featured ? "bg-[#00CC44]/[0.035] border-l-[#00CC44]/15" : "border-l-gray-100"
                    }`}>
                    <AccBtn acc={acc} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MOBILE: stacked account cards ───────────────────── */}
          <div className="md:hidden space-y-5">
            {accounts.map((acc) => (
              <div key={acc.id}
                className={`bg-white rounded-2xl border overflow-hidden shadow-sm ${
                  acc.featured
                    ? "border-[#00CC44]/35 ring-2 ring-[#00CC44]/10 shadow-lg shadow-[#00CC44]/8"
                    : "border-gray-100"
                }`}>
                {/* Card header */}
                <div className={`px-5 py-4 border-b ${acc.featured ? "bg-[#00CC44]/[0.05] border-[#00CC44]/15" : "bg-[#F9FAFB] border-gray-100"}`}>
                  {acc.featured && (
                    <span className="bg-[#00CC44] text-black text-[9px] font-extrabold px-3 py-1 rounded-full mb-2 inline-block">★ Most Popular</span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`text-xl font-extrabold ${acc.featured ? "text-[#00CC44]" : "text-[#111827]"}`}>{acc.name}</h3>
                      <div className="text-[11px] text-gray-400 mt-0.5">{acc.tier}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-[#111827] leading-none">{acc.deposit}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">min. deposit</div>
                    </div>
                  </div>
                </div>

                {/* Feature rows */}
                <div className="px-5 py-2">
                  {rows.map((row, ri) => (
                    <div key={row.feature}
                      className={`flex items-center justify-between py-3 ${ri < rows.length - 1 ? "border-b border-gray-50" : ""}`}>
                      <span className="text-[12px] text-gray-500 flex-1 pr-3">{row.feature}</span>
                      <Cell value={row.values[acc.idx as AccIndex]} variant={row.variant ?? "text"} featured={acc.featured} />
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-5 py-4 border-t border-gray-100">
                  <AccBtn acc={acc} full />
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {[
              "Trading involves risk. Conditions shown are indicative and may vary.",
              "Spreads are variable and subject to prevailing market conditions.",
              "Leverage availability depends on your jurisdiction and account type.",
              "Please read our Risk Disclosures before opening an account.",
            ].map((note) => (
              <div key={note} className="flex items-start gap-2 text-[12px] text-gray-400">
                <span className="text-gray-300 flex-shrink-0">·</span>{note}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is each account for ──────────────────────────────── */}
      <section className="py-12 lg:py-14 bg-[#F5F7FA]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#111827] mb-8 text-center">Who Is Each Account For?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { acc: accounts[0], icon: "📋", forWho: "Beginners & small accounts", desc: "Start trading with $10. Full MT4 access, 500+ instruments, EA support, and no commission.", highlights: ["First-time traders","Demo-to-live transition","Small capital"] },
              { acc: accounts[1], icon: "⭐", forWho: "Active & intermediate traders", desc: "Tighter spreads from 1.0 pips, no commission — for traders who trade regularly with more capital.", highlights: ["Active daily traders","Intermediate experience","Better spread conditions"] },
              { acc: accounts[2], icon: "👑", forWho: "Professional & high-volume", desc: "Raw spreads from 0.0 pips with transparent commission. Best conditions for serious trading volume.", highlights: ["Professional traders","High trading volume","Minimum possible spreads"] },
            ].map(({ acc, icon, forWho, desc, highlights }) => (
              <div key={acc.id} className={`bg-white rounded-2xl p-6 shadow-sm border ${acc.featured ? "border-[#00CC44]/20" : "border-gray-100"}`}>
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className={`text-lg font-extrabold mb-1 ${acc.featured ? "text-[#00CC44]" : "text-[#111827]"}`}>{acc.name}</h3>
                <div className="text-[12px] text-gray-400 mb-3">{forWho}</div>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[12px] text-gray-500">
                      <IconCheck className="w-3.5 h-3.5 text-[#00CC44] flex-shrink-0" />{h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="Account FAQs" faqs={accountFaqs} />

      <CTASection
        title="Open Your Account Today"
        subtitle="Choose the account that fits your trading style and go live in minutes."
        primaryLabel="Open Account"
        primaryHref="https://direct.ollatrade.com/auth/register"
        secondaryLabel="View Trading Conditions"
        secondaryHref="/trading/conditions"
      />
    </>
  );
}
