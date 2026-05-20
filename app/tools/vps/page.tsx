import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import FAQSection from "../../components/ui/FAQSection";
import CTASection from "../../components/CTASection";
import { IconServer, IconBolt, IconShield, IconGlobe, IconCode, IconClock, IconDatabase, IconSettings, IconCheck } from "../../components/ui/Icons";
import { vpsFaqs } from "../../data/extra-faqs";

export const metadata: Metadata = {
  title: "VPS Guide",
  description: "Learn how to use a Virtual Private Server (VPS) to run MetaTrader 4 Expert Advisors 24/5 without interruption. VPS setup guide, recommended specs, and security checklist.",
};

const benefits = [
  { Icon: IconClock,    title: "24/5 Uninterrupted Operation", desc: "Your EAs run continuously around the clock, even when your computer is off, ensuring no missed signals or execution gaps." },
  { Icon: IconBolt,     title: "Low Latency Execution",        desc: "A VPS located close to trading servers can reduce order transmission time, which is important for time-sensitive strategies." },
  { Icon: IconShield,   title: "No Power / Internet Issues",   desc: "A hosted VPS is unaffected by your local power cuts, internet outages, or computer hardware failures." },
  { Icon: IconServer,   title: "Dedicated Resources",          desc: "VPS resources are dedicated to your use, unlike shared hosting, providing consistent performance for MT4 and your EAs." },
  { Icon: IconGlobe,    title: "Remote Access from Anywhere",  desc: "Connect to your VPS from any device with internet access. Manage your MT4 installation and EAs from your phone, tablet, or laptop." },
  { Icon: IconDatabase, title: "Multiple Instances",           desc: "Run multiple MT4 installations with different accounts or strategies on a single VPS, subject to its resource capacity." },
];

const specs = [
  { label: "Operating System", value: "Windows Server 2012/2016/2019 or Windows 10/11" },
  { label: "RAM",              value: "Minimum 1GB · Recommended 2GB+ for multiple EAs" },
  { label: "CPU",              value: "Minimum 1 core · Recommended 2+ cores" },
  { label: "Storage",          value: "Minimum 20GB SSD" },
  { label: "Internet Speed",   value: "Stable connection, 10 Mbps+ recommended" },
  { label: "Location",         value: "Choose a datacenter close to your broker's servers" },
  { label: "Connection",       value: "RDP (Remote Desktop Protocol) access" },
];

const securityChecklist = [
  "Use a strong, unique password for your VPS and change it from the default",
  "Enable Windows Firewall and keep it active",
  "Keep Windows and all software up to date with security patches",
  "Change the default RDP port (3389) to a non-standard port to reduce brute-force attacks",
  "Consider enabling two-factor authentication if your VPS provider supports it",
  "Do not install unnecessary software or browser extensions on your trading VPS",
  "Take regular backups of your MT4 data folder (containing EAs, templates, and settings)",
  "Disconnect and lock the session when not actively working on the VPS",
];

export default function VPSPage() {
  return (
    <>
      <PageHero badge="Automated Trading" title="VPS Guide for MT4" subtitle="A Virtual Private Server (VPS) allows your Expert Advisors to run 24 hours a day, 5 days a week — without needing your computer to stay on." breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "VPS Guide" }]} stats={[{ value: "24/5", label: "Always-on operation" }, { value: "EA", label: "Expert Advisor support" }, { value: "RDP", label: "Remote access" }]} />

      {/* What is VPS */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">What Is a VPS?</div>
              <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-5">A Dedicated Remote Computer for Trading</h2>
              <div className="space-y-4 text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
                <p>A Virtual Private Server (VPS) is a remote computing environment hosted in a datacenter. It runs 24 hours a day, 7 days a week, independently of your personal computer. For forex traders, it provides a stable, always-on environment to run MetaTrader 4 and Expert Advisors.</p>
                <p>Unlike your home computer, a VPS is unaffected by power cuts, internet outages, system restarts, or accidental shutdowns. Once you install MT4 on a VPS and configure your EAs, they will continue to execute without interruption.</p>
                <p>You access and manage your VPS remotely from any device via Remote Desktop Protocol (RDP) — just as if you were sitting in front of a remote computer.</p>
              </div>
            </div>
            <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
              <div className="text-[11px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-widest mb-4">VPS vs Home Computer</div>
              {[["VPS","Home PC"],["Runs 24/5 non-stop","Stops when you shut down"],["Unaffected by power cuts","Stops during outages"],["Hosted in datacenter","On your desk/laptop"],["Low latency to servers","Depends on your location"],["Remote access from anywhere","Tied to one location"]].map((r,i)=>(
                i===0 ? (
                  <div key={i} className="grid grid-cols-2 gap-2 mb-2">
                    <div className="text-[11px] font-bold text-[#00CC44] uppercase tracking-wider">{r[0]}</div>
                    <div className="text-[11px] font-bold text-gray-400 dark:text-[#6B7280] uppercase tracking-wider">{r[1]}</div>
                  </div>
                ) : (
                  <div key={i} className="grid grid-cols-2 gap-2 py-2 border-t border-gray-100 dark:border-[#1F2937]">
                    <div className="text-[12px] text-[#00AA38] flex items-center gap-1.5"><IconCheck className="w-3 h-3" />{r[0]}</div>
                    <div className="text-[12px] text-gray-400 dark:text-[#6B7280]">{r[1]}</div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Benefits</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Why Use a VPS for MT4?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0A1220] text-gray-500 dark:text-[#6B7280] flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                <h3 className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Specifications</div>
              <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-5">Recommended VPS Specifications</h2>
              <p className="text-[14px] text-gray-600 dark:text-[#9CA3AF] leading-relaxed mb-6">The following specifications are recommended for running MetaTrader 4 with Expert Advisors. Requirements increase with the number of simultaneously running EAs and chart windows.</p>
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/40 rounded-xl p-4 text-[12px] text-amber-800 dark:text-amber-200/60">
                Olla Trade does not provide VPS services. These are general recommendations. Always verify VPS provider capabilities and suitability for your specific requirements.
              </div>
            </div>
            <div className="bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl overflow-hidden">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex justify-between items-start px-5 py-3.5 text-[13px] ${i > 0 ? "border-t border-gray-100 dark:border-[#1F2937]" : ""}`}>
                  <span className="text-gray-400 dark:text-[#6B7280] font-medium">{s.label}</span>
                  <span className="text-[#111827] dark:text-[#F9FAFB] font-semibold text-right max-w-[200px]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section className="py-16 bg-[#F5F7FA] dark:bg-[#081018]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Setup Guide</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">Setting Up MT4 on a VPS</h2>
          </div>
          <div className="space-y-4">
            {[
              { n:"01", t:"Choose a VPS Provider",    d:"Select a Windows-based VPS provider with a datacenter location close to your preferred trading region. Compare pricing, RAM, CPU, and included bandwidth." },
              { n:"02", t:"Connect via RDP",           d:"Use Remote Desktop Connection (Windows) or Microsoft Remote Desktop (Mac/iOS) to connect to your VPS using the IP address, username, and password provided." },
              { n:"03", t:"Download and Install MT4",  d:"Open a browser on the VPS and download MetaTrader 4 from the official MetaQuotes website or your broker's download page. Install MT4 as you would on any Windows computer." },
              { n:"04", t:"Log In to Your Account",    d:"Open MT4 on the VPS, go to File → Login to Trade Account, and enter your Olla Trade account number, password, and select the correct server. Your account details were emailed to you upon registration." },
              { n:"05", t:"Install and Attach Your EAs", d:"Copy your EA files (.ex4 or .mq4) to the MT4 Experts folder (File → Open Data Folder → MQL4 → Experts). Restart MT4, then drag and attach each EA to the desired chart." },
              { n:"06", t:"Enable AutoTrading",         d:"Click the AutoTrading button in MT4's toolbar (or press Ctrl+E) to allow EAs to trade. Verify the EA is running by checking the EA tab in the Terminal panel — it should show active." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex items-start gap-5 bg-white dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-[#111827] dark:bg-[#1F2937] text-[#00CC44] font-black text-[13px] flex items-center justify-center flex-shrink-0">{n}</div>
                <div><div className="text-[14px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">{t}</div><div className="text-[13px] text-gray-500 dark:text-[#9CA3AF] leading-relaxed">{d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-white dark:bg-[#050A0F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">Security</div>
            <h2 className="text-3xl font-extrabold text-[#111827] dark:text-[#F9FAFB] mb-3">VPS Security Checklist</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {securityChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#F5F7FA] dark:bg-[#0F1720] border border-gray-100 dark:border-[#1F2937] rounded-xl px-4 py-3">
                <div className="w-5 h-5 rounded-full bg-[#00CC44]/15 border border-[#00CC44]/25 text-[#00CC44] flex items-center justify-center flex-shrink-0 mt-0.5"><IconCheck className="w-3 h-3" /></div>
                <span className="text-[12px] text-gray-600 dark:text-[#9CA3AF] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="VPS Guide FAQs" faqs={vpsFaqs} />
      <CTASection title="Start Automating Your Trading" subtitle="Open an MT4 account and deploy your Expert Advisors on a VPS for uninterrupted operation." primaryLabel="Open Account" secondaryLabel="View MT4 Platform" secondaryHref="/trading/platform" />
    </>
  );
}
