import { IconShield, IconBolt, IconGlobe, IconHeadset, IconMonitor, IconLock } from "../ui/Icons";

const reasons = [
  {
    Icon: IconShield,
    title: "Secure Client Portal",
    desc: "SSL-encrypted client portal with secure document storage and role-based access for your account data and funds.",
  },
  {
    Icon: IconBolt,
    title: "Fast Market Execution",
    desc: "Market execution with no requotes. Orders filled at the best available market price — instantly, around the clock.",
  },
  {
    Icon: IconGlobe,
    title: "500+ Global Instruments",
    desc: "Trade Forex, Metals, Indices, Energies, Crypto, and Stocks — all from a single account on MetaTrader 4.",
  },
  {
    Icon: IconHeadset,
    title: "24/5 Dedicated Support",
    desc: "Our professional support team is available Monday to Friday via phone and email to assist with any query.",
  },
  {
    Icon: IconMonitor,
    title: "MetaTrader 4 Platform",
    desc: "Industry-standard MT4 with EA support, 30+ technical indicators, and full multi-device access — desktop, web, mobile.",
  },
  {
    Icon: IconLock,
    title: "Negative Balance Protection",
    desc: "Your losses are always capped at your deposited balance. You can never owe more than the funds in your account.",
  },
];

export default function WhyOllaTrade() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky */}
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Why Olla Trade</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-5 leading-tight">
              Built for Traders.<br />
              Not for Templates.
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-10">
              We combine professional trading conditions, transparent pricing, and genuine client support — so you can focus on the markets, not the platform.
            </p>

            {/* Stats — 2-col grid, large numbers */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "21K+",  label: "Active Clients",    sub: "and growing" },
                { value: "500+",  label: "Instruments",        sub: "across 6 asset classes" },
                { value: "24/5",  label: "Market Access",      sub: "Mon–Fri around the clock" },
                { value: "3",     label: "Account Types",      sub: "from $10 to $20,000" },
              ].map((s) => (
                <div key={s.label} className="border border-gray-100 rounded-2xl p-5 bg-[#F5F7FA]">
                  <div className="text-3xl font-extrabold text-[#111827] mb-0.5 leading-none">{s.value}</div>
                  <div className="text-[13px] font-semibold text-[#111827] mt-1">{s.label}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group border border-gray-100 rounded-2xl p-6 bg-[#F5F7FA] hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-5 group-hover:bg-[#00CC44] group-hover:text-black transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-[14px] font-bold text-[#111827] mb-2">{title}</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
