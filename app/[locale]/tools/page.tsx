import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import SessionClock from "../../components/widgets/SessionClock";
import MarketStatus from "../../components/widgets/MarketStatus";
import SpreadTable from "../../components/widgets/SpreadTable";
import { IconCalendar, IconCalculator, IconBell, IconServer, IconBook, IconNewspaper, IconActivity } from "../../components/ui/Icons";

export const metadata: Metadata = {
  title: "Trading Tools",
  description: "Free professional trading tools from Olla Trade — economic calendar, forex calculator, trading alerts, VPS guide, and education.",
};

const tools = [
  { Icon: IconCalendar,   title: "Economic Calendar", sub: "Track market-moving events in real time.",                 href: "/tools/economic-calendar" },
  { Icon: IconCalculator, title: "Forex Calculator",  sub: "Calculate pip value, margin requirements, and P&L.",      href: "/tools/forex-calculator" },
  { Icon: IconBell,       title: "Trading Alerts",    sub: "Set custom price alerts on your watched instruments.",     href: "/tools/alerts" },
  { Icon: IconServer,     title: "VPS Guide",         sub: "Run Expert Advisors 24/5 on a virtual private server.",    href: "/tools/vps" },
  { Icon: IconBook,       title: "Forex Glossary",    sub: "Master key trading terms from A to Z.",                   href: "/tools/glossary" },
  { Icon: IconActivity,   title: "Education Centre",  sub: "Structured learning from Basic to Professional level.",    href: "/tools/education" },
  { Icon: IconNewspaper,  title: "Articles",          sub: "Latest market analysis and trading insights.",             href: "/tools/news" },
];

export default function ToolsPage() {
  return (
    <>
      <PageHero
        badge="Free Tools"
        title="Professional Trading Tools"
        subtitle="Everything you need to research, plan, and execute — free to all Olla Trade clients."
        breadcrumbs={[{ label: "Tools" }]}
      />

      {/* ── Live Market Widgets ────────────────────────────────────── */}
      <section className="py-12 bg-[#050C15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-6 text-center">Live Market Data</div>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-1">
              <MarketStatus />
            </div>
            <div className="lg:col-span-1">
              <SessionClock />
            </div>
            <div className="lg:col-span-1">
              <div className="bg-[#050C15] border border-white/8 rounded-2xl p-5 h-full flex flex-col">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">Quick Links</div>
                <div className="space-y-2 flex-1">
                  {[
                    { label: "Forex Calculator", href: "/tools/forex-calculator", desc: "Calculate pip value & margin" },
                    { label: "Economic Calendar", href: "/tools/economic-calendar", desc: "Upcoming market events" },
                    { label: "Trading Alerts",   href: "/tools/alerts",            desc: "Set MT4 price notifications" },
                    { label: "VPS Guide",         href: "/tools/vps",              desc: "Run EAs 24/5 without downtime" },
                  ].map(({ label, href, desc }) => (
                    <Link key={label} href={href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00CC44] flex-shrink-0 mt-1.5" />
                      <div>
                        <div className="text-[12px] font-semibold text-white/65 group-hover:text-white transition-colors">{label}</div>
                        <div className="text-[10px] text-white/25">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <p className="text-[9px] text-white/15 mt-3 leading-relaxed">
                  Market data is indicative. Prices may vary by account type, liquidity, and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Indicative Spreads ────────────────────────────────────── */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-3 text-center">Indicative Spreads</div>
          <h2 className="text-2xl font-extrabold text-[#111827] mb-6 text-center">Typical Spreads by Instrument</h2>
          <SpreadTable />
        </div>
      </section>

      {/* ── Tool cards ────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4 text-center">All Tools</div>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-10 text-center">Free for All Clients</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map(({ Icon, title, sub, href }) => (
              <Link key={title} href={href}
                className="group bg-[#F5F7FA] border border-gray-100 rounded-2xl p-6 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-white text-gray-400 flex items-center justify-center mb-5 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="text-[14px] font-bold text-[#111827] mb-2 group-hover:text-[#00AA38] transition-colors">{title}</h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
