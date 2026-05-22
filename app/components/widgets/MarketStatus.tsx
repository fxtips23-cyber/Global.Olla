"use client";
import { useEffect, useState } from "react";

const MARKETS = [
  { name: "Forex",    openDays: [1,2,3,4,5], openUTC: 22, closeUTC: 22, crossesMidnight: false, crossesWeekend: true },
  { name: "Gold",     openDays: [1,2,3,4,5], openUTC: 1,  closeUTC: 24, crossesMidnight: false, crossesWeekend: false },
  { name: "Indices",  openDays: [1,2,3,4,5], openUTC: 8,  closeUTC: 22, crossesMidnight: false, crossesWeekend: false },
  { name: "Crypto",   openDays: [1,2,3,4,5], openUTC: 0,  closeUTC: 24, crossesMidnight: false, crossesWeekend: false },
  { name: "Stocks",   openDays: [1,2,3,4,5], openUTC: 8,  closeUTC: 22, crossesMidnight: false, crossesWeekend: false },
];

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function MarketStatus() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const utcH = now ? now.getUTCHours() : 12;
  const utcM = now ? now.getUTCMinutes() : 0;
  const utcDay = now ? now.getUTCDay() : 1; // 0=Sun, 6=Sat
  const isWeekend = utcDay === 0 || utcDay === 6;

  const forexOpen = !isWeekend && (utcH >= 22 || utcH < 22 || utcDay !== 5 || utcH < 22);
  // Simplified: forex is open Mon 22 UTC through Fri 22 UTC
  const isForexOpen = !isWeekend && !(utcDay === 1 && utcH < 22 ? false : false);

  const statuses = [
    { name: "Forex",         open: !isWeekend,                           color: "#00CC44" },
    { name: "Gold & Silver", open: !isWeekend && utcH >= 1,              color: "#F59E0B" },
    { name: "Indices",       open: !isWeekend && utcH >= 8 && utcH < 22, color: "#1E88E5" },
    { name: "Cryptocurrency",open: !isWeekend,                           color: "#7C3AED" },
    { name: "Stocks",        open: !isWeekend && utcH >= 8 && utcH < 22, color: "#EF4444" },
  ];

  const openCount = statuses.filter(s => s.open).length;

  return (
    <div className="bg-[#050C15] border border-white/8 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-0.5">Market Status</div>
          <div className="text-[12px] font-bold text-white">
            {pad(utcH)}:{pad(utcM)} UTC
          </div>
        </div>
        <div className="text-right">
          <div className="text-[22px] font-black text-[#00CC44]">{openCount}</div>
          <div className="text-[9px] text-white/30">of {statuses.length} open</div>
        </div>
      </div>

      <div className="space-y-2">
        {statuses.map(({ name, open, color }) => (
          <div key={name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: open ? color : "rgba(255,255,255,0.15)" }} />
              <span className="text-[11px] text-white/55">{name}</span>
            </div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
              open ? "text-[#00CC44] bg-[#00CC44]/10" : "text-white/20 bg-white/4"
            }`}>
              {open ? "OPEN" : "CLOSED"}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/6">
        <p className="text-[9px] text-white/18 leading-relaxed">
          Market status is indicative. Actual availability may vary. All markets closed Saturday and Sunday. Forex available Mon 22:00 – Fri 22:00 UTC.
        </p>
      </div>
    </div>
  );
}
