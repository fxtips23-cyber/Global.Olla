"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconBolt, IconShield, IconCheck, IconLock } from "../ui/Icons";

const cryptoMethods = [
  { sym: "USDT", network: "TRC20", name: "Tether (TRC20)", tagKey: "fastest", time: "~1 min",  color: "#26A17B" },
  { sym: "USDT", network: "ERC20", name: "Tether (ERC20)", tagKey: "stable",  time: "~3 min",  color: "#627EEA" },
  { sym: "BTC",  network: "Bitcoin", name: "Bitcoin",       tagKey: "global",  time: "~20 min", color: "#F7931A" },
  { sym: "ETH",  network: "Ethereum", name: "Ethereum",     tagKey: "secure",  time: "~5 min",  color: "#627EEA" },
];

const guaranteeIcons = [IconBolt, IconShield, IconCheck, IconLock];
const guaranteeKeys  = ["guarantee1", "guarantee2", "guarantee3", "guarantee4"] as const;

export default function DepositSection() {
  const t = useTranslations("home.deposit");

  const txs = [
    { type: t("deposit_type"),    asset: "USDT TRC20", amount: "+$1,000.00", time: "2 min",  status: t("confirmed") },
    { type: t("withdrawal_type"), asset: "USDT ERC20", amount: "−$350.00",   time: "1 hr",   status: t("processed") },
    { type: t("deposit_type"),    asset: "BTC",        amount: "+$2,500.00", time: "3 hr",   status: t("confirmed") },
  ];

  const stats = [
    [t("stat1"), t("stat1_sub")],
    [t("stat2"), t("stat2_sub")],
    [t("stat3"), t("stat3_sub")],
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">{t("label")}</div>
            <h2 className="text-4xl font-extrabold text-[#111827] mb-4 leading-tight">
              {t("title")}<br />{t("title2")}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">{t("desc")}</p>

            <div className="space-y-3 mb-8">
              {guaranteeKeys.map((key, i) => {
                const Icon = guaranteeIcons[i];
                return (
                  <div key={key} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md border border-gray-200 bg-white text-gray-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] text-gray-600">{t(key)}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="https://direct.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1a2540] text-white font-bold px-6 py-3 rounded-lg text-[13px] transition-colors">
                {t("cta_open")}
              </Link>
              <Link href="/funding-and-withdrawals"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 font-medium px-6 py-3 rounded-lg text-[13px] transition-colors">
                {t("cta_methods")}
              </Link>
            </div>
          </div>

          {/* Right — dashboard */}
          <div>
            <div className="bg-[#0D1520] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">{t("header_label")}</div>
                  <div className="text-[13px] font-bold text-white">{t("header_title")}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CC44] animate-pulse" />
                  <span className="text-[10px] text-[#00CC44] font-semibold">{t("instant")}</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                {cryptoMethods.map((m, i) => (
                  <div key={`${m.sym}-${m.network}`}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${i === 0 ? "bg-[#00CC44]/12 border border-[#00CC44]/25" : "bg-white/4 border border-white/6 hover:bg-white/8"}`}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-extrabold text-white/80 border border-white/10"
                      style={{ background: `${m.color}25`, borderColor: `${m.color}30` }}>
                      {m.sym}
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] font-semibold text-white/80">{m.name}</div>
                      <div className="text-[10px] text-white/30">{t("network")} {m.network}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${i===0?"bg-[#00CC44]/20 text-[#00CC44]":"bg-white/8 text-white/35"}`}>{t(m.tagKey as "fastest"|"stable"|"global"|"secure")}</div>
                      <div className="text-[9px] text-white/25 mt-1">{m.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mx-4 mb-4 bg-white/4 border border-white/8 rounded-xl p-4">
                <div className="text-[10px] text-white/25 uppercase tracking-widest mb-3">{t("recent")}</div>
                <div className="space-y-2">
                  {txs.map((tx) => (
                    <div key={tx.time} className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${tx.type===t("deposit_type")?"bg-[#00CC44]":"bg-blue-400"}`} />
                        <span className="text-white/45">{tx.asset}</span>
                      </div>
                      <span className={`font-mono font-bold ${tx.type===t("deposit_type")?"text-[#00CC44]":"text-blue-400"}`}>{tx.amount}</span>
                      <span className="text-white/20">{tx.time}</span>
                      <span className="text-white/30 bg-white/5 px-2 py-0.5 rounded">{tx.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-white/6">
                {stats.map(([v, l]) => (
                  <div key={l} className="bg-[#0D1520] px-3 py-3 text-center">
                    <div className="text-[11px] font-bold text-[#00CC44] mb-0.5">{v}</div>
                    <div className="text-[9px] text-white/25">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gray-400 text-center mt-3">
              {t("note")}{" "}
              <Link href="/funding-and-withdrawals" className="text-[#1E88E5] hover:text-[#00CC44] transition-colors">{t("note_link")}</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
