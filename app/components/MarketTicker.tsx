"use client";

const TICKERS = [
  { sym: "EUR/USD", price: "1.0842", chg: "+0.12%", up: true },
  { sym: "GBP/USD", price: "1.2731", chg: "+0.08%", up: true },
  { sym: "USD/JPY", price: "149.81", chg: "-0.14%", up: false },
  { sym: "AUD/USD", price: "0.6524", chg: "+0.06%", up: true },
  { sym: "USD/CAD", price: "1.3620", chg: "-0.05%", up: false },
  { sym: "XAU/USD", price: "2,341",  chg: "+0.31%", up: true },
  { sym: "XAG/USD", price: "29.15",  chg: "+0.22%", up: true },
  { sym: "BTC/USD", price: "67,420", chg: "+1.24%", up: true },
  { sym: "ETH/USD", price: "3,581",  chg: "+0.88%", up: true },
  { sym: "US30",    price: "39,240", chg: "+0.43%", up: true },
  { sym: "SPX500",  price: "5,218",  chg: "+0.27%", up: true },
  { sym: "CRUDE",   price: "78.54",  chg: "-0.63%", up: false },
  { sym: "NGAS",    price: "2.310",  chg: "-0.91%", up: false },
  { sym: "EUR/GBP", price: "0.8522", chg: "+0.04%", up: true },
  { sym: "NAS100",  price: "18,042", chg: "+0.55%", up: true },
];

const DOUBLED = [...TICKERS, ...TICKERS];

export default function MarketTicker() {
  return (
    <div className="w-full overflow-hidden border-y" style={{ background: "#F6F8FB", borderColor: "#E5E7EB" }}>
      <div className="flex items-center">

        {/* Live label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 h-10 text-[11px] font-bold uppercase tracking-widest"
          style={{ background: "#1A90C3", color: "#FFFFFF", minWidth: 80 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
          Live
        </div>

        {/* Scrolling track */}
        <div className="overflow-hidden flex-1 h-10 relative">
          <div className="ticker-track flex items-center h-10 whitespace-nowrap">
            {DOUBLED.map((item, i) => (
              <div key={i}
                className="flex items-center gap-2 px-4 border-r h-full flex-shrink-0"
                style={{ borderColor: "#E5E7EB" }}>
                <span className="text-[12px] font-semibold" style={{ color: "#111827" }}>
                  {item.sym}
                </span>
                <span className="text-[12px] font-mono" style={{ color: "#374151" }}>
                  {item.price}
                </span>
                <span className="text-[11px] font-semibold" style={{ color: item.up ? "#10B981" : "#EF4444" }}>
                  {item.chg}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
