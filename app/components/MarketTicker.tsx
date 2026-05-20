"use client";
const ticks = [
  { sym: "EUR/USD", price: "1.08472", chg: "+0.18%", up: true },
  { sym: "GBP/USD", price: "1.27384", chg: "+0.09%", up: true },
  { sym: "USD/JPY", price: "156.234", chg: "-0.12%", up: false },
  { sym: "XAUUSD", price: "2,324.5", chg: "-0.22%", up: false },
  { sym: "US30", price: "39,420", chg: "+0.31%", up: true },
  { sym: "BTC/USD", price: "67,812", chg: "+1.45%", up: true },
  { sym: "NASDAQ", price: "18,142", chg: "+0.62%", up: true },
  { sym: "XAGUSD", price: "28.72", chg: "+0.14%", up: true },
  { sym: "WTI", price: "82.34", chg: "-0.43%", up: false },
  { sym: "ETH/USD", price: "3,521", chg: "+2.1%", up: true },
  { sym: "AUD/USD", price: "0.6521", chg: "-0.05%", up: false },
  { sym: "USD/CAD", price: "1.3648", chg: "+0.07%", up: true },
];

export default function MarketTicker() {
  const doubled = [...ticks, ...ticks];
  return (
    <div className="bg-[#081018] border-b border-white/10 py-2.5 overflow-hidden">
      <div className="flex items-center gap-0 ticker-track whitespace-nowrap">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-2 px-6 border-r border-white/10">
            <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{t.sym}</span>
            <span className="text-xs font-mono text-white">{t.price}</span>
            <span className={`text-xs font-semibold ${t.up ? "text-[#00CC44]" : "text-red-400"}`}>
              {t.up ? "▲" : "▼"} {t.chg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
