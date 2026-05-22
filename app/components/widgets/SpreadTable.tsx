/* Indicative spread table — connects to live data when MT4 bridge is ready */
export default function SpreadTable() {
  const pairs = [
    { sym: "EUR/USD", type: "Forex",   bid: "1.0857", ask: "1.0858", spread: "1.4 pips", dir: "up"   },
    { sym: "GBP/USD", type: "Forex",   bid: "1.2648", ask: "1.2650", spread: "2.0 pips", dir: "up"   },
    { sym: "USD/JPY", type: "Forex",   bid: "151.24", ask: "151.26", spread: "1.6 pips", dir: "down" },
    { sym: "USD/CHF", type: "Forex",   bid: "0.9142", ask: "0.9143", spread: "1.0 pips", dir: "up"   },
    { sym: "AUD/USD", type: "Forex",   bid: "0.6521", ask: "0.6523", spread: "2.0 pips", dir: "down" },
    { sym: "USD/CAD", type: "Forex",   bid: "1.3648", ask: "1.3650", spread: "2.0 pips", dir: "up"   },
    { sym: "XAU/USD", type: "Metals",  bid: "2318.4", ask: "2319.9", spread: "15 pts",   dir: "up"   },
    { sym: "XAG/USD", type: "Metals",  bid: "27.42",  ask: "27.69",  spread: "27 pts",   dir: "down" },
    { sym: "US30",    type: "Indices", bid: "39,425", ask: "39,428", spread: "3 pts",    dir: "up"   },
    { sym: "NAS100",  type: "Indices", bid: "18,142", ask: "18,144", spread: "2 pts",    dir: "up"   },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-[#F5F7FA]">
        <div>
          <div className="text-[11px] font-bold text-[#111827]">Indicative Spreads</div>
          <div className="text-[9px] text-gray-400 mt-0.5">Typical under normal market conditions</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00CC44] animate-pulse" />
          <span className="text-[10px] text-[#00CC44] font-semibold">Live</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[420px]">
          <thead>
            <tr className="border-b border-gray-50">
              {["Symbol", "Bid", "Ask", "Spread"].map(h => (
                <th key={h} className="px-4 py-2.5 text-left text-[9px] font-bold text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {pairs.map((p) => (
              <tr key={p.sym} className="hover:bg-[#F9FAFB] transition-colors">
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.dir === "up" ? "bg-[#00CC44]" : "bg-red-400"}`} />
                    <div>
                      <div className="text-[12px] font-bold text-[#111827] font-mono">{p.sym}</div>
                      <div className="text-[9px] text-gray-400">{p.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2.5 text-[12px] font-mono text-gray-600">{p.bid}</td>
                <td className="px-4 py-2.5 text-[12px] font-mono text-gray-600">{p.ask}</td>
                <td className="px-4 py-2.5">
                  <span className="text-[11px] font-semibold text-[#00CC44] bg-[#00CC44]/8 border border-[#00CC44]/15 px-2 py-0.5 rounded-full">
                    {p.spread}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="px-5 py-3 border-t border-gray-50 bg-[#F9FAFB]">
        <p className="text-[9px] text-gray-400 leading-relaxed">
          Spreads shown are indicative typical spreads under normal market conditions and may vary depending on account type, liquidity, time of day, and market conditions. Not a guarantee of execution price.
        </p>
      </div>
    </div>
  );
}
