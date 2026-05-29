export default function GlobalMarketsVisual() {
  /* Financial center nodes */
  const cities = [
    { x: 178, y: 135, label: "London",    lat: "51°N", lng: "0°E",   active: true,  color: "#29B5D4" },
    { x: 340, y: 128, label: "Frankfurt", lat: "50°N", lng: "8°E",   active: false, color: "#9CA3AF" },
    { x: 80,  y: 190, label: "New York",  lat: "40°N", lng: "74°W",  active: true,  color: "#29B5D4" },
    { x: 155, y: 220, label: "São Paulo", lat: "23°S", lng: "46°W",  active: false, color: "#9CA3AF" },
    { x: 580, y: 148, label: "Dubai",     lat: "25°N", lng: "55°E",  active: false, color: "#9CA3AF" },
    { x: 680, y: 158, label: "Singapore", lat: "1°N",  lng: "103°E", active: true,  color: "#29B5D4" },
    { x: 735, y: 128, label: "Tokyo",     lat: "35°N", lng: "139°E", active: true,  color: "#29B5D4" },
    { x: 420, y: 175, label: "Cairo",     lat: "30°N", lng: "31°E",  active: false, color: "#9CA3AF" },
    { x: 628, y: 200, label: "Mumbai",    lat: "18°N", lng: "72°E",  active: false, color: "#9CA3AF" },
    { x: 760, y: 225, label: "Sydney",    lat: "33°S", lng: "151°E", active: false, color: "#9CA3AF" },
    { x: 44,  y: 155, label: "Toronto",   lat: "43°N", lng: "79°W",  active: false, color: "#9CA3AF" },
    { x: 500, y: 120, label: "Moscow",    lat: "55°N", lng: "37°E",  active: false, color: "#9CA3AF" },
  ];

  /* Connections between active hubs */
  const connections = [
    [178,135, 80,190],   // London – New York
    [178,135, 680,158],  // London – Singapore
    [178,135, 735,128],  // London – Tokyo
    [80,190,  680,158],  // New York – Singapore
    [680,158, 735,128],  // Singapore – Tokyo
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ background: "#050D18", aspectRatio: "16/9", maxHeight: 380 }}>
      <svg viewBox="0 0 840 473" className="w-full h-full" aria-hidden="true">

        {/* Deep space background glow */}
        <ellipse cx={420} cy={237} rx={380} ry={200} fill="#1E88E5" fillOpacity="0.025" />
        <ellipse cx={180} cy={180} rx={180} ry={100} fill="#29B5D4" fillOpacity="0.025" />
        <ellipse cx={700} cy={180} rx={150} ry={100} fill="#29B5D4" fillOpacity="0.02" />

        {/* ── World map: latitude/longitude grid ──────────── */}
        {/* Latitude circles (approximate) */}
        {[0.4, 0.7, 1.0, 1.3, 1.6].map((r, i) => (
          <ellipse key={i} cx={420} cy={237} rx={r * 380} ry={r * 200}
            fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="0.8" />
        ))}
        {/* Meridian lines */}
        {Array.from({length: 12}).map((_, i) => (
          <line key={i} x1={70 + i * 60} y1={37} x2={70 + i * 60} y2={437}
            stroke="white" strokeOpacity="0.03" strokeWidth="0.8" />
        ))}
        {/* Horizontal reference lines */}
        {[97,157,197,237,277,337,397].map(y => (
          <line key={y} x1={70} y1={y} x2={770} y2={y}
            stroke="white" strokeOpacity="0.03" strokeWidth="0.8" />
        ))}

        {/* ── Continent silhouettes (simplified abstract) ──── */}
        {/* North America rough */}
        <path d="M55,115 C75,108 100,105 115,115 C125,122 130,135 135,148 C140,162 138,178 130,190 C122,202 108,208 95,212 C82,216 68,212 58,202 C48,192 44,178 46,162 C48,148 52,128 55,115 Z"
          fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" />
        {/* Europe rough */}
        <path d="M220,100 C240,95 265,98 280,108 C292,116 295,130 290,142 C285,154 270,160 255,162 C240,164 225,158 215,148 C205,138 205,125 212,114 L220,100 Z"
          fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" />
        {/* Asia rough */}
        <path d="M460,95 C510,88 560,90 610,100 C650,108 690,120 720,138 C740,150 748,168 740,182 C732,196 710,202 685,205 C655,208 620,200 590,188 C560,176 535,162 510,150 C485,138 460,128 448,116 C440,108 442,98 460,95 Z"
          fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" />
        {/* Africa rough */}
        <path d="M310,150 C328,142 348,148 358,162 C368,176 368,196 360,212 C352,228 332,240 312,242 C292,244 275,232 270,215 C265,198 272,180 284,168 C296,158 308,152 310,150 Z"
          fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" />

        {/* ── Connection arcs ───────────────────────────────── */}
        {connections.map(([x1,y1,x2,y2], i) => {
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2 - 50;
          return (
            <path key={i}
              d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
              stroke="#29B5D4" strokeOpacity="0.25" strokeWidth="1.2"
              fill="none" strokeDasharray="6 4" />
          );
        })}

        {/* ── City nodes ────────────────────────────────────── */}
        {cities.map(({ x, y, label, active, color }) => (
          <g key={label}>
            {active && (
              <circle cx={x} cy={y} r={20} fill={`${color}08`} stroke={`${color}15`} strokeWidth="1" />
            )}
            <circle cx={x} cy={y} r={active ? 9 : 6}
              fill={active ? `${color}15` : "rgba(255,255,255,0.05)"}
              stroke={color} strokeOpacity={active ? 0.5 : 0.2} strokeWidth="1" />
            <circle cx={x} cy={y} r={3}
              fill={color} fillOpacity={active ? 0.9 : 0.3} />
            <text x={x} y={y + (active ? 22 : 18)} fill="white"
              fillOpacity={active ? 0.5 : 0.2} fontSize={active ? "7.5" : "6.5"}
              fontFamily="monospace" textAnchor="middle" fontWeight={active ? "bold" : "normal"}>
              {label}
            </text>
          </g>
        ))}

        {/* ── Data stream lines ─────────────────────────────── */}
        {/* Horizontal streaming data */}
        {[170,200,230].map(y => (
          <line key={y} x1={70} y1={y} x2={770} y2={y}
            stroke="#29B5D4" strokeOpacity="0.06" strokeWidth="1" />
        ))}

        {/* ── Right panel: Live market summary ─────────────── */}
        <rect x={598} y={290} width={222} height={150} fill="#081828" stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="8" />
        <text x={710} y={310} fill="white" fillOpacity="0.22" fontSize="7" fontFamily="monospace"
          textAnchor="middle" letterSpacing="1">GLOBAL MARKET OVERVIEW</text>
        {[
          { sym: "EUR/USD",  val: "1.0858", chg: "+0.12%", bull: true  },
          { sym: "GOLD",     val: "2,318",  chg: "+0.22%", bull: true  },
          { sym: "US30",     val: "39,420", chg: "+0.31%", bull: true  },
          { sym: "BTC/USD",  val: "68,420", chg: "+1.34%", bull: true  },
          { sym: "USD/JPY",  val: "151.24", chg: "-0.15%", bull: false },
        ].map(({ sym, val, chg, bull }, i) => (
          <g key={sym}>
            <line x1={610} y1={317 + i * 25} x2={810} y2={317 + i * 25}
              stroke="white" strokeOpacity="0.04" strokeWidth="0.5" />
            <circle cx={618} cy={326 + i * 25} r={3}
              fill={bull ? "#29B5D4" : "#EF4444"} fillOpacity="0.7" />
            <text x={630} y={330 + i * 25} fill="white" fillOpacity="0.55"
              fontSize="8" fontFamily="monospace">{sym}</text>
            <text x={760} y={330 + i * 25} fill="white" fillOpacity="0.45"
              fontSize="8" fontFamily="monospace" textAnchor="end">{val}</text>
            <text x={808} y={330 + i * 25} fill={bull ? "#29B5D4" : "#EF4444"}
              fontSize="8" fontFamily="monospace" textAnchor="end" fontWeight="bold">{chg}</text>
          </g>
        ))}

        {/* ── Left panel: Company identity ─────────────────── */}
        <rect x={20} y={300} width={200} height={120} fill="#081828" stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="8" />
        <text x={120} y={320} fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">Olla Trade LTD.</text>
        <line x1={30} y1={326} x2={210} y2={326} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        {[
          { label: "Incorporated", value: "Anguilla" },
          { label: "Reg. No.",     value: "A000001849" },
          { label: "Assets",       value: "500+ Instruments" },
          { label: "Platform",     value: "MetaTrader 4" },
          { label: "Support",      value: "24/5" },
        ].map(({ label, value }, i) => (
          <g key={label}>
            <text x={32} y={342 + i * 16} fill="white" fillOpacity="0.22" fontSize="7" fontFamily="monospace">{label}</text>
            <text x={208} y={342 + i * 16} fill="#29B5D4" fontSize="7" fontFamily="monospace"
              textAnchor="end" fillOpacity="0.65">{value}</text>
          </g>
        ))}

        {/* ── Center globe indicator ────────────────────────── */}
        <circle cx={420} cy={237} r={18} fill="rgba(41,181,212,0.08)"
          stroke="rgba(41,181,212,0.2)" strokeWidth="1.5" />
        <circle cx={420} cy={237} r={9} fill="rgba(41,181,212,0.15)"
          stroke="rgba(41,181,212,0.4)" strokeWidth="1" />
        <circle cx={420} cy={237} r={3} fill="#29B5D4" fillOpacity="0.9" />
        <text x={420} y={265} fill="#29B5D4" fontSize="7" fontFamily="monospace"
          textAnchor="middle" fillOpacity="0.6">GLOBAL HUB</text>

        {/* Corner accents */}
        <line x1={0} y1={0} x2={35} y2={0} stroke="#29B5D4" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={0} y1={0} x2={0} y2={35} stroke="#29B5D4" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={805} y1={473} x2={840} y2={473} stroke="#1E88E5" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={840} y1={438} x2={840} y2={473} stroke="#1E88E5" strokeOpacity="0.2" strokeWidth="2" />
      </svg>
    </div>
  );
}
