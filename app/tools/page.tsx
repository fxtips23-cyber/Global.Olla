import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import { IconCalendar, IconCalculator, IconBell, IconServer, IconBook, IconNewspaper, IconActivity } from "../components/ui/Icons";

export const metadata: Metadata = { title: "Trading Tools", description: "Free professional trading tools from Olla Trade — economic calendar, forex calculator, trading alerts, VPS guide, and education." };

const tools = [
  { Icon: IconCalendar,   title: "Economic Calendar", sub: "Track market-moving events in real time.",                                    href: "/tools/economic-calendar" },
  { Icon: IconCalculator, title: "Forex Calculator",  sub: "Calculate pip value, margin requirements, and P&L.",                         href: "/tools/forex-calculator" },
  { Icon: IconBell,       title: "Trading Alerts",    sub: "Set custom price alerts on your watched instruments.",                        href: "/tools/alerts" },
  { Icon: IconServer,     title: "VPS Guide",         sub: "Run Expert Advisors 24/5 on a virtual private server.",                       href: "/tools/vps" },
  { Icon: IconBook,       title: "Forex Glossary",    sub: "Master key trading terms from A to Z.",                                      href: "/tools/glossary" },
  { Icon: IconActivity,   title: "Education Centre",  sub: "Structured learning from Basic to Professional level.",                       href: "/tools/education" },
  { Icon: IconNewspaper,  title: "Market News",       sub: "Latest market analysis and trading insights.",                               href: "/tools/news" },
];

export default function ToolsPage() {
  return (
    <>
      <PageHero badge="Free Tools" title="Professional Trading Tools" subtitle="Everything you need to research, plan, and execute — free to all Olla Trade clients." breadcrumbs={[{ label: "Tools" }]} />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map(({ Icon, title, sub, href }) => (
              <Link key={title} href={href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-400 flex items-center justify-center mb-5 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
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
