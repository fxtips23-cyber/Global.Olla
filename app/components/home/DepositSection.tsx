import Link from "next/link";
import { IconBolt, IconShield, IconCheck, IconLock } from "../ui/Icons";

const cryptoMethods = [
  { sym: "USDT",  network: "TRC20",   name: "Tether (TRC20)",    tag: "Fastest",    time: "~1 min",  color: "#26A17B" },
  { sym: "USDT",  network: "ERC20",   name: "Tether (ERC20)",    tag: "Stable",     time: "~3 min",  color: "#627EEA" },
  { sym: "BTC",   network: "Bitcoin", name: "Bitcoin",           tag: "Global",     time: "~20 min", color: "#F7931A" },
  { sym: "ETH",   network: "Ethereum",name: "Ethereum",          tag: "Secure",     time: "~5 min",  color: "#627EEA" },
];

const guarantees = [
  { Icon: IconBolt,   label: "Instant crediting on crypto deposits" },
  { Icon: IconShield, label: "SSL-encrypted, secure transaction processing" },
  { Icon: IconCheck,  label: "No deposit fees from Olla Trade" },
  { Icon: IconLock,   label: "Withdrawals processed within 24–48 hours" },
];

export default function DepositSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — content */}
          <div>
            <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Funding</div>
            <h2 className="text-4xl font-extrabold text-[#111827] mb-4 leading-tight">
              Quick Deposit &amp;<br />Withdrawal
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
              Fund your account instantly using crypto assets. No fees from Olla Trade on deposits or withdrawals. Fast crediting, secure transactions, and straightforward withdrawal processing.
            </p>

            {/* Guarantees */}
            <div className="space-y-3 mb-8">
              {guarantees.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md border border-gray-200 bg-white text-gray-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[13px] text-gray-600">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="https://direct.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1a2540] text-white font-bold px-6 py-3 rounded-lg text-[13px] transition-colors">
                Open Account
              </Link>
              <Link href="/trading/deposit"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 font-medium px-6 py-3 rounded-lg text-[13px] transition-colors">
                All payment methods →
              </Link>
            </div>
          </div>

          {/* Right — crypto funding dashboard */}
          <div>
            <div className="bg-[#0D1520] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">

              {/* Header */}
              <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Account Funding</div>
                  <div className="text-[13px] font-bold text-white">Deposit via Crypto</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CC44] animate-pulse" />
                  <span className="text-[10px] text-[#00CC44] font-semibold">Instant Processing</span>
                </div>
              </div>

              {/* Crypto method selector */}
              <div className="p-4 space-y-2">
                {cryptoMethods.map((m, i) => (
                  <div
                    key={`${m.sym}-${m.network}`}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${i === 0 ? "bg-[#00CC44]/12 border border-[#00CC44]/25" : "bg-white/4 border border-white/6 hover:bg-white/8"}`}
                  >
                    {/* Token circle */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-extrabold text-white/80 border border-white/10"
                      style={{ background: `${m.color}25`, borderColor: `${m.color}30` }}>
                      {m.sym}
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] font-semibold text-white/80">{m.name}</div>
                      <div className="text-[10px] text-white/30">Network: {m.network}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${i===0?"bg-[#00CC44]/20 text-[#00CC44]":"bg-white/8 text-white/35"}`}>{m.tag}</div>
                      <div className="text-[9px] text-white/25 mt-1">{m.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Transaction summary */}
              <div className="mx-4 mb-4 bg-white/4 border border-white/8 rounded-xl p-4">
                <div className="text-[10px] text-white/25 uppercase tracking-widest mb-3">Recent Transactions</div>
                <div className="space-y-2">
                  {[
                    { type: "Deposit",    asset: "USDT TRC20", amount: "+$1,000.00", time: "2 min ago",   status: "Confirmed" },
                    { type: "Withdrawal", asset: "USDT ERC20", amount: "−$350.00",   time: "1 hour ago",  status: "Processed" },
                    { type: "Deposit",    asset: "BTC",        amount: "+$2,500.00", time: "3 hours ago", status: "Confirmed" },
                  ].map((tx) => (
                    <div key={tx.time} className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${tx.type==="Deposit"?"bg-[#00CC44]":"bg-blue-400"}`} />
                        <span className="text-white/45">{tx.asset}</span>
                      </div>
                      <span className={`font-mono font-bold ${tx.type==="Deposit"?"text-[#00CC44]":"text-blue-400"}`}>{tx.amount}</span>
                      <span className="text-white/20">{tx.time}</span>
                      <span className="text-white/30 bg-white/5 px-2 py-0.5 rounded">{tx.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key stats row */}
              <div className="grid grid-cols-3 gap-px bg-white/6">
                {[["No Fees","From Olla Trade"],["Instant","Crypto Crediting"],["Secure","SSL Encrypted"]].map(([v, l])=>(
                  <div key={l} className="bg-[#0D1520] px-3 py-3 text-center">
                    <div className="text-[11px] font-bold text-[#00CC44] mb-0.5">{v}</div>
                    <div className="text-[9px] text-white/25">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <p className="text-[11px] text-gray-400 text-center mt-3">
              Other payment methods including bank wire and e-wallets also available.{" "}
              <Link href="/trading/payment-methods" className="text-[#1E88E5] hover:text-[#00CC44] transition-colors">View all →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
