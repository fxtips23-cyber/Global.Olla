export default function VPSInfraVisual() {
  const connectionCities = [
    { x: 120, y: 160, label: "London", active: true },
    { x: 210, y: 260, label: "Frankfurt", active: false },
    { x: 640, y: 130, label: "Tokyo", active: false },
    { x: 580, y: 290, label: "Singapore", active: true },
    { x: 90,  y: 310, label: "New York", active: true },
    { x: 700, y: 220, label: "Hong Kong", active: false },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ background: "#050D18", aspectRatio: "16/9", maxHeight: 420 }}>
      <svg viewBox="0 0 800 450" className="w-full h-full" aria-hidden="true">

        {/* Background grid */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 40} x2={800} y2={i * 40}
            stroke="white" strokeOpacity="0.025" strokeWidth="1" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 42} y1={0} x2={i * 42} y2={450}
            stroke="white" strokeOpacity="0.025" strokeWidth="1" />
        ))}

        {/* Background world map arc lines (longitude/latitude) */}
        {[-60,-30,0,30,60].map((lat, i) => (
          <ellipse key={i} cx={400} cy={225} rx={360} ry={Math.abs(lat) === 60 ? 100 : Math.abs(lat) === 30 ? 170 : 0}
            fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="0.8" />
        ))}
        <ellipse cx={400} cy={225} rx={360} ry={150} fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="0.8" />
        {/* Meridians */}
        {[-120,-60,0,60,120].map((lng, i) => (
          <line key={i} x1={400 + lng * 3} y1={75} x2={400 + lng * 3} y2={375}
            stroke="white" strokeOpacity="0.04" strokeWidth="0.8" />
        ))}

        {/* ── Center: VPS server rack ───────────────────────── */}
        {/* Rack enclosure */}
        <rect x={335} y={100} width={130} height={250} fill="#081828" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" rx="4" />
        {/* Rack top ridge */}
        <rect x={330} y={97} width={140} height={8} fill="#0A1E30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="2" />
        {/* Rack rails */}
        <rect x={338} y={108} width={4} height={234} fill="rgba(255,255,255,0.06)" rx="1" />
        <rect x={458} y={108} width={4} height={234} fill="rgba(255,255,255,0.06)" rx="1" />

        {/* Server units */}
        {[0,1,2,3,4,5,6].map((i) => {
          const y = 112 + i * 32;
          const active = i !== 2 && i !== 5;
          return (
            <g key={i}>
              <rect x={342} y={y} width={116} height={28} fill={active ? "#0D2236" : "#0A1A28"}
                stroke={active ? "rgba(41,181,212,0.15)" : "rgba(255,255,255,0.05)"} strokeWidth="1" rx="2" />
              {/* Unit label */}
              <rect x={346} y={y + 4} width={28} height={20} fill="rgba(0,0,0,0.3)" rx="2" />
              <text x={360} y={y + 18} fill="white" fillOpacity="0.2" fontSize="6" fontFamily="monospace" textAnchor="middle">SRV</text>
              {/* Status LED */}
              <circle cx={388} cy={y + 14} r={3} fill={active ? "#29B5D4" : "#374151"} fillOpacity={active ? 0.9 : 0.5} />
              {/* Activity bar */}
              {active && (
                <rect x={396} y={y + 8} width={50 + (i * 11 % 25)} height={4} fill="#29B5D4" fillOpacity="0.3" rx="1" />
              )}
              {/* Port indicators */}
              {[0,1].map(p => (
                <rect key={p} x={448 + p * 6} y={y + 10} width={4} height={8}
                  fill={active ? "rgba(41,181,212,0.25)" : "rgba(255,255,255,0.08)"} rx="1" />
              ))}
            </g>
          );
        })}

        {/* MT4 label on server */}
        <rect x={342} y={330} width={116} height={14} fill="rgba(41,181,212,0.08)"
          stroke="rgba(41,181,212,0.2)" strokeWidth="1" rx="2" />
        <text x={400} y={341} fill="#29B5D4" fontSize="7" fontFamily="monospace"
          textAnchor="middle" fontWeight="bold" fillOpacity="0.8">MT4 • EA SERVER</text>

        {/* Bottom rack */}
        <rect x={330} y={350} width={140} height={8} fill="#0A1E30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="2" />

        {/* Rack label */}
        <text x={400} y={375} fill="white" fillOpacity="0.18" fontSize="7" fontFamily="monospace"
          textAnchor="middle" letterSpacing="1">VPS DATACENTER</text>

        {/* Power indicator */}
        <circle cx={400} cy={388} r={5} fill="#29B5D4" fillOpacity="0.15" stroke="#29B5D4" strokeOpacity="0.4" strokeWidth="1" />
        <text x={400} y={392} fill="#29B5D4" fontSize="7" fontFamily="monospace"
          textAnchor="middle" fillOpacity="0.7">●</text>

        {/* ── Connection nodes (cities) ─────────────────────── */}
        {connectionCities.map(({ x, y, label, active }) => (
          <g key={label}>
            {/* Connection line to server */}
            <path d={`M${x},${y} Q${(x + 400) / 2},${(y + 225) / 2} 400,225`}
              stroke={active ? "#29B5D4" : "rgba(255,255,255,0.12)"}
              strokeOpacity={active ? 0.3 : 0.15} strokeWidth={active ? 1.5 : 1}
              fill="none" strokeDasharray={active ? "none" : "4 4"} />
            {/* Node outer ring */}
            <circle cx={x} cy={y} r={14} fill={active ? "rgba(41,181,212,0.06)" : "rgba(255,255,255,0.03)"}
              stroke={active ? "rgba(41,181,212,0.25)" : "rgba(255,255,255,0.1)"} strokeWidth="1" />
            {/* Node inner */}
            <circle cx={x} cy={y} r={6} fill={active ? "rgba(41,181,212,0.2)" : "rgba(255,255,255,0.08)"}
              stroke={active ? "#29B5D4" : "rgba(255,255,255,0.2)"} strokeOpacity="0.6" strokeWidth="1" />
            <circle cx={x} cy={y} r={2.5} fill={active ? "#29B5D4" : "rgba(255,255,255,0.3)"} fillOpacity="0.9" />
            {/* City label */}
            <text x={x} y={y + 24} fill="white" fillOpacity={active ? 0.45 : 0.2}
              fontSize="7" fontFamily="monospace" textAnchor="middle">{label}</text>
          </g>
        ))}

        {/* ── Latency indicator ─────────────────────────────── */}
        <rect x={30} y={390} width={160} height={45} fill="rgba(41,181,212,0.06)"
          stroke="rgba(41,181,212,0.15)" strokeWidth="1" rx="6" />
        <text x={50} y={408} fill="white" fillOpacity="0.3" fontSize="7" fontFamily="monospace" letterSpacing="0.5">LATENCY</text>
        <text x={50} y={428} fill="#29B5D4" fontSize="16" fontFamily="monospace" fontWeight="bold">2.4ms</text>
        <text x={120} y={428} fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace">avg. to server</text>

        {/* Uptime indicator */}
        <rect x={610} y={390} width={160} height={45} fill="rgba(41,181,212,0.06)"
          stroke="rgba(41,181,212,0.15)" strokeWidth="1" rx="6" />
        <text x={630} y={408} fill="white" fillOpacity="0.3" fontSize="7" fontFamily="monospace" letterSpacing="0.5">UPTIME</text>
        <text x={630} y={428} fill="#29B5D4" fontSize="16" fontFamily="monospace" fontWeight="bold">99.9%</text>
        <text x={700} y={428} fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace">30-day</text>

        {/* ── MT4 remote screen (small, right side) ────────── */}
        <rect x={570} y={80} width={195} height={125} fill="#081828" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="6" />
        {/* Screen bezel */}
        <rect x={576} y={86} width={183} height={100} fill="#050D18" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" rx="3" />
        {/* MT4 title bar */}
        <rect x={576} y={86} width={183} height={14} fill="#0D1F30" rx="3" />
        <rect x={576} y={93} width={183} height={7} fill="#0D1F30" />
        <circle cx={586} cy={93} r={3} fill="#EF4444" fillOpacity="0.6" />
        <circle cx={596} cy={93} r={3} fill="#F59E0B" fillOpacity="0.6" />
        <circle cx={606} cy={93} r={3} fill="#29B5D4" fillOpacity="0.6" />
        <text x={620} y={97} fill="white" fillOpacity="0.25" fontSize="6" fontFamily="monospace">MetaTrader 4 — EURUSD,H4</text>
        {/* Mini chart in remote screen */}
        <path d="M580,160 C595,155 610,148 625,142 C640,136 655,138 670,132 C685,126 695,120 710,115 C725,110 740,112 755,108"
          stroke="#29B5D4" strokeWidth="1.2" fill="none" strokeOpacity="0.7" strokeLinecap="round" />
        <path d="M580,160 C595,155 610,148 625,142 C640,136 655,138 670,132 C685,126 695,120 710,115 C725,110 740,112 755,108 L755,186 L580,186 Z"
          fill="#29B5D4" fillOpacity="0.05" />
        {/* Mini candles */}
        {[0,1,2,3,4,5,6,7,8,9].map(i => {
          const x = 583 + i * 17;
          const h = 8 + (i * 7 % 12);
          const y = 155 - h;
          const bull = i % 3 !== 2;
          return (
            <rect key={i} x={x} y={y} width={9} height={h}
              fill={bull ? "#29B5D4" : "#EF4444"} fillOpacity="0.55" rx="1" />
          );
        })}
        {/* Remote screen label */}
        <text x={659} y={200} fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace" textAnchor="middle">RDP REMOTE SESSION</text>

        {/* Corner accents */}
        <line x1={0} y1={0} x2={30} y2={0} stroke="#29B5D4" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={0} y1={0} x2={0} y2={30} stroke="#29B5D4" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={770} y1={450} x2={800} y2={450} stroke="#29B5D4" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={800} y1={420} x2={800} y2={450} stroke="#29B5D4" strokeOpacity="0.2" strokeWidth="2" />
      </svg>
    </div>
  );
}
