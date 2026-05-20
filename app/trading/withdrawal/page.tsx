import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import { IconCheck, IconShield, IconBolt, IconLock, IconArrowRight } from "../../components/ui/Icons";

export const metadata: Metadata = {
  title: "Withdrawal",
  description: "Withdraw funds from your Olla Trade account securely. Fast processing with no withdrawal fees.",
};

/* ══════════════════════════════════════════════════════════════════
   OLLA WALLET PHONE MOCKUPS
   ══════════════════════════════════════════════════════════════════ */

/** Back phone — payment method selector */
function BackPhone() {
  return (
    <div
      className="absolute bottom-0 left-0 rounded-[20px] overflow-hidden shadow-2xl shadow-black/60"
      style={{
        width: 148,
        zIndex: 1,
        background: "#0A0A0A",
        padding: "6px 4px 8px",
        border: "1px solid rgba(255,255,255,0.10)",
        transform: "translateX(-12px) translateY(20px)",
      }}
    >
      {/* Screen */}
      <div className="rounded-[15px] overflow-hidden" style={{ background: "#0D1828" }}>
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 py-1.5" style={{ background: "#0A1020" }}>
          <span className="text-[6px] text-white/50 font-bold">10:15</span>
          <div className="flex gap-0.5 items-center">
            <div className="w-2 h-1 bg-white/30 rounded-sm" />
            <div className="w-2 h-1.5 bg-white/40 rounded-sm" />
            <div className="w-2.5 h-1.5 bg-white/60 rounded-sm" />
          </div>
        </div>

        {/* Header */}
        <div className="px-3 py-2" style={{ background: "#0D1828", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
          <div className="text-[8px] font-bold text-white/80">Fund Account</div>
          <div className="text-[6px] text-white/35 mt-0.5">Select payment method</div>
        </div>

        {/* Payment methods */}
        <div className="px-2 py-1.5 space-y-1">
          {[
            { name: "Bank Cards",     tag: "Recommended", tagColor: "#00CC44", active: true },
            { name: "USDT (TRC20)",   tag: "Instant",     tagColor: "#00CC44", active: false },
            { name: "Bitcoin (BTC)",  tag: "",             tagColor: "",        active: false },
            { name: "Ethereum (ETH)", tag: "",             tagColor: "",        active: false },
            { name: "Bank Transfer",  tag: "",             tagColor: "",        active: false },
          ].map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
              style={{ background: m.active ? "rgba(0,204,68,0.08)" : "transparent", border: m.active ? "0.5px solid rgba(0,204,68,0.2)" : "0.5px solid rgba(255,255,255,0.04)" }}
            >
              {/* Radio */}
              <div className="w-3 h-3 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ border: m.active ? "1.5px solid #00CC44" : "1.5px solid rgba(255,255,255,0.2)", background: "transparent" }}>
                {m.active && <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00CC44" }} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[7px] font-semibold" style={{ color: m.active ? "#fff" : "rgba(255,255,255,0.55)" }}>{m.name}</div>
                {m.tag && (
                  <div className="text-[5.5px] font-bold mt-0.5" style={{ color: m.tagColor }}>
                    {m.tag} ✓
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        <div className="text-center py-2">
          <span className="text-[7px] font-semibold" style={{ color: "#00CC44" }}>Show more →</span>
        </div>
      </div>
      <div className="w-5 h-0.5 rounded-full mx-auto mt-1.5" style={{ background: "rgba(255,255,255,0.2)" }} />
    </div>
  );
}

/** Front phone — Olla Wallet dashboard */
function FrontPhone() {
  return (
    <div
      className="relative rounded-[22px] overflow-hidden shadow-2xl shadow-black/70"
      style={{
        width: 175,
        zIndex: 2,
        background: "#080808",
        padding: "6px 4px 10px",
        border: "1px solid rgba(255,255,255,0.12)",
        marginLeft: "auto",
      }}
    >
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full" style={{ background: "#000", zIndex: 10 }} />

      {/* Screen */}
      <div className="rounded-[16px] overflow-hidden" style={{ background: "#0A1520" }}>

        {/* Status bar */}
        <div className="flex justify-between items-center px-3 py-1.5 pt-3" style={{ background: "#0A1520" }}>
          <span className="text-[6px] text-white/50 font-bold">10:15</span>
          <div className="flex gap-0.5">
            <div className="w-2 h-1 bg-white/30 rounded-sm" />
            <div className="w-2 h-1.5 bg-white/50 rounded-sm" />
            <div className="w-2.5 h-1.5 bg-white/70 rounded-sm" />
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-3 py-2" style={{ background: "#0A1520" }}>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-black" style={{ background: "#00CC44" }}>A</div>
            <span className="text-[7.5px] font-semibold text-white/70">Olla Wallet</span>
          </div>
          {/* Bell */}
          <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>

        {/* Wallet balance card */}
        <div className="mx-2 rounded-xl p-3 mb-2" style={{ background: "linear-gradient(135deg, #00CC44 0%, #009933 100%)" }}>
          <div className="text-[6.5px] font-semibold text-black/60 mb-0.5">Olla Wallet</div>
          <div className="text-[18px] font-extrabold text-black leading-none">$2,152.<span className="text-[12px]">12</span></div>
          <div className="text-[6px] text-black/50 mt-0.5">W02148843USD</div>

          {/* Pending deposit */}
          <div className="mt-2 pt-2" style={{ borderTop: "0.5px solid rgba(0,0,0,0.15)" }}>
            <div className="flex items-center justify-between">
              <span className="text-[6px] text-black/55">Pending deposit</span>
              <span className="text-[7px] font-bold text-black">+$500.00</span>
            </div>
            <div className="text-[5.5px] text-black/45 mt-0.5">Usually processed within 10 minutes</div>
          </div>
        </div>

        {/* Transactions row */}
        <div className="flex items-center justify-between px-3 py-1.5">
          <span className="text-[6.5px] font-bold text-white/50">Transactions</span>
          <span className="text-[6.5px] font-semibold" style={{ color: "#00CC44" }}>View history &rsaquo;</span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-3 gap-1.5 px-2 mb-2">
          {[
            { label: "Add Funds", icon: "M12 4v16M4 12h16" },
            { label: "Transfer",  icon: "M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" },
            { label: "Withdraw",  icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
          ].map(({ label, icon }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,204,68,0.15)", border: "0.5px solid rgba(0,204,68,0.25)" }}>
                <svg className="w-3.5 h-3.5" style={{ color: "#00CC44" }} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d={icon} />
                </svg>
              </div>
              <span className="text-[6px] text-white/45 text-center">{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-3" style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }} />

        {/* Trading accounts */}
        <div className="px-3 pt-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[6.5px] font-bold text-white/55">Trading accounts</span>
            <div className="flex gap-0.5">
              {["•", "•", "•"].map((d, i) => <span key={i} className="text-[8px] text-white/20">{d}</span>)}
            </div>
          </div>

          {/* Real / Demo toggle */}
          <div className="flex rounded-lg overflow-hidden mb-2" style={{ background: "rgba(255,255,255,0.06)", padding: "2px" }}>
            {["Real", "Demo"].map((t, i) => (
              <div key={t} className="flex-1 text-center py-1 rounded-md text-[6.5px] font-bold"
                style={i === 0 ? { background: "#00CC44", color: "#000" } : { color: "rgba(255,255,255,0.35)" }}>
                {t}
              </div>
            ))}
          </div>

          {/* Account card */}
          <div className="rounded-xl p-2.5 mb-2" style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[7px] font-bold text-white/75">#84765829</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[5px] font-bold px-1 py-0.5 rounded" style={{ background: "rgba(0,204,68,0.2)", color: "#00CC44" }}>Real</span>
                  <span className="text-[5px] text-white/30">MT4 Standard</span>
                </div>
              </div>
              <div className="text-[8px] font-bold text-white/80">$1,215.<span className="text-[6px]">51</span></div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex justify-around items-center py-1.5 px-2" style={{ background: "#080F18", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
          {[
            { icon: "M3 7h18a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2zM3 7l2-4h14l2 4", label: "Wallet",   active: true  },
            { icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",                                  label: "Transfer", active: false },
            { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Accounts", active: false },
            { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Settings",  active: false },
          ].map(({ icon, label, active }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <svg className="w-3 h-3" fill="none" stroke={active ? "#00CC44" : "rgba(255,255,255,0.25)"} strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
              <span className="text-[4.5px]" style={{ color: active ? "#00CC44" : "rgba(255,255,255,0.22)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Home indicator */}
      <div className="w-8 h-0.5 rounded-full mx-auto mt-2" style={{ background: "rgba(255,255,255,0.22)" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   OLLA WALLET SECTION
   ══════════════════════════════════════════════════════════════════ */
function OllaWalletSection() {
  return (
    <section className="py-20 overflow-hidden" style={{ background: "#020810" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Phone composition */}
          <div className="flex justify-center">
            <div className="relative" style={{ width: 280, height: 400 }}>
              <BackPhone />
              <div className="absolute bottom-0 right-0">
                <FrontPhone />
              </div>
              {/* Subtle reflection */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 rounded-full"
                style={{ background: "radial-gradient(ellipse, rgba(0,204,68,0.12) 0%, transparent 70%)", filter: "blur(4px)" }} />
            </div>
          </div>

          {/* Text content */}
          <div>
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Client Portal</div>
            <h2 className="text-4xl font-extrabold text-white mb-5 leading-tight">
              Olla Wallet
            </h2>
            <p className="text-white/50 text-[16px] leading-relaxed mb-8">
              The Olla Wallet allows you to transfer funds between your wallet and trading accounts instantly, giving you the flexibility to manage your capital according to your trading needs. Funds held in the Wallet are not subject to market risks, so it is a great way to manage risk and exposure.
            </p>

            {/* Feature bullets */}
            <div className="space-y-3 mb-8">
              {[
                "Instant transfers between wallet and trading accounts",
                "Add funds using crypto, cards, or bank transfer",
                "Withdraw to your preferred payment method",
                "Full transaction history and balance tracking",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(0,204,68,0.15)", border: "1px solid rgba(0,204,68,0.3)" }}>
                    <IconCheck className="w-2.5 h-2.5 text-[#00CC44]" />
                  </div>
                  <span className="text-[13px] text-white/55">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://direct.ollatrade.com/auth/login"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
                style={{ background: "#00CC44", color: "#000" }}
              >
                Access Olla Wallet
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/company/help"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-[14px] transition-colors text-white/55 hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                How Olla Wallet works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FULL PAGE
   ══════════════════════════════════════════════════════════════════ */
export default function WithdrawalPage() {
  return (
    <>
      <PageHero
        badge="Withdraw Funds"
        title="Withdrawals"
        subtitle="Withdraw your trading profits quickly and securely. We process withdrawal requests promptly with no hidden fees."
        breadcrumbs={[{ label: "Trading", href: "/trading" }, { label: "Withdrawals" }]}
        cta={{ label: "Request Withdrawal", href: "https://direct.ollatrade.com/auth/login" }}
        stats={[{ value: "24–48h", label: "Processing" }, { value: "0%", label: "Our Fees" }, { value: "SSL", label: "Encrypted" }]}
      />

      {/* Key stats + How to / Policy */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            {/* How to withdraw */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <h3 className="text-lg font-bold text-[#111827] mb-5">How to Withdraw</h3>
              <ol className="space-y-3">
                {[
                  "Log in to your Olla Trade client portal.",
                  "Navigate to the Withdrawal section in your account dashboard.",
                  "Select your preferred withdrawal method.",
                  "Enter the withdrawal amount and submit your request.",
                  "Processing typically takes 24–48 business hours after approval.",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-[#00CC44] text-black text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            {/* Withdrawal policy */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <h3 className="text-lg font-bold text-[#111827] mb-5">Withdrawal Policy</h3>
              <div className="space-y-3">
                {[
                  ["No withdrawal fees",   "Olla Trade does not charge fees on withdrawal requests."],
                  ["Same method rule",      "Withdrawals are processed to the same method used for deposit where possible."],
                  ["KYC required",          "Account verification (KYC) must be completed before processing withdrawals."],
                  ["Processing time",       "Withdrawals are processed within 24–48 business hours of approval."],
                  ["Full terms",            "Please review our Withdrawal Conditions page for complete policy details."],
                ].map(([t, d]) => (
                  <div key={t} className="flex items-start gap-3 text-[13px] text-gray-600">
                    <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-[#00CC44]">
                      <IconCheck className="w-3.5 h-3.5" />
                    </div>
                    <div><strong className="text-[#111827]">{t}:</strong> {d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust row */}
          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { Icon: IconLock,   label: "Segregated client funds" },
              { Icon: IconShield, label: "SSL-encrypted withdrawals" },
              { Icon: IconBolt,   label: "Fast 24–48h processing" },
              { Icon: IconCheck,  label: "No Olla Trade fees" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5">
                <div className="w-8 h-8 rounded-lg border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[12px] text-gray-600 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Olla Wallet section ── */}
      <OllaWalletSection />

      <CTASection
        title="Access Your Funds Anytime"
        primaryLabel="Request Withdrawal"
        primaryHref="https://direct.ollatrade.com/auth/login"
        secondaryLabel="View Withdrawal Conditions"
        secondaryHref="/legal/withdrawal-conditions"
      />
    </>
  );
}
