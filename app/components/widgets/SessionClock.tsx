"use client";
import { useEffect, useState } from "react";

interface Session {
  name: string;
  city: string;
  openUTC: number;   // hour in UTC
  closeUTC: number;  // hour in UTC (can be < openUTC if crosses midnight)
}

const SESSIONS: Session[] = [
  { name: "Sydney",   city: "Sydney",    openUTC: 22, closeUTC: 7  },
  { name: "Tokyo",    city: "Tokyo",     openUTC: 0,  closeUTC: 9  },
  { name: "London",   city: "London",    openUTC: 8,  closeUTC: 17 },
  { name: "New York", city: "New York",  openUTC: 13, closeUTC: 22 },
];

function isSessionOpen(session: Session, utcHour: number, utcMin: number): boolean {
  const t = utcHour + utcMin / 60;
  const { openUTC: o, closeUTC: c } = session;
  if (o > c) return t >= o || t < c;   // crosses midnight
  return t >= o && t < c;
}

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function SessionClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const utcH = now ? now.getUTCHours() : 0;
  const utcM = now ? now.getUTCMinutes() : 0;
  const utcStr = now ? `${pad(utcH)}:${pad(utcM)} UTC` : "--:-- UTC";

  const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const utcDay = now ? now.getUTCDay() : 1;
  const isWeekend = utcDay === 0 || utcDay === 6;

  return (
    <div className="bg-[#050C15] border border-white/8 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-0.5">Market Sessions</div>
          <div className="text-[13px] font-bold text-white">{utcStr}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${isWeekend ? "bg-red-400" : "bg-[#00CC44]"}`} />
          <span className="text-[10px] font-semibold" style={{ color: isWeekend ? "#f87171" : "#00CC44" }}>
            {isWeekend ? "Weekend — Closed" : "Forex Open"}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {SESSIONS.map((s) => {
          const open = !isWeekend && isSessionOpen(s, utcH, utcM);
          const pct = ((utcH * 60 + utcM) / (24 * 60)) * 100;
          return (
            <div key={s.name} className="flex items-center gap-3">
              <div className="w-20 flex-shrink-0">
                <div className="text-[11px] font-semibold text-white/65">{s.name}</div>
                <div className="text-[9px] text-white/25">{pad(s.openUTC)}:00–{pad(s.closeUTC)}:00</div>
              </div>
              {/* Session bar */}
              <div className="flex-1 h-1.5 rounded-full bg-white/6 relative overflow-hidden">
                {/* Active segment */}
                {(() => {
                  const total = 24;
                  const { openUTC: o, closeUTC: c } = s;
                  if (o > c) {
                    // crosses midnight — two segments
                    return (
                      <>
                        <div className="absolute left-0 top-0 h-full rounded-full"
                          style={{ width: `${(c / total) * 100}%`, background: open ? "#00CC44" : "rgba(255,255,255,0.15)" }} />
                        <div className="absolute top-0 h-full rounded-full"
                          style={{ left: `${(o / total) * 100}%`, right: 0, background: open ? "#00CC44" : "rgba(255,255,255,0.15)" }} />
                      </>
                    );
                  }
                  return (
                    <div className="absolute top-0 h-full rounded-full"
                      style={{ left: `${(o / total) * 100}%`, width: `${((c - o) / total) * 100}%`, background: open ? "#00CC44" : "rgba(255,255,255,0.15)" }} />
                  );
                })()}
                {/* Current time cursor */}
                <div className="absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-white/60 rounded-full"
                  style={{ left: `${pct}%` }} />
              </div>
              <div className={`text-[9px] font-bold w-12 text-right ${open ? "text-[#00CC44]" : "text-white/25"}`}>
                {open ? "OPEN" : "CLOSED"}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[9px] text-white/18 mt-4 leading-relaxed">
        Session times shown in UTC. Forex trades Mon 22:00 – Fri 22:00 UTC. Weekend trading not available. Times are indicative.
      </p>
    </div>
  );
}
