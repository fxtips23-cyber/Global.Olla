export default function ExecutionFlowVisual() {
  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ background: "#050D18", aspectRatio: "16/9", maxHeight: 380 }}>
      <svg viewBox="0 0 900 506" className="w-full h-full" aria-hidden="true">

        {/* Background grid */}
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 40} x2={900} y2={i * 40}
            stroke="white" strokeOpacity="0.025" strokeWidth="1" />
        ))}
        {Array.from({ length: 23 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={506}
            stroke="white" strokeOpacity="0.025" strokeWidth="1" />
        ))}

        {/* ─── Node 1: Client MT4 (left) ──────────────────── */}
        <rect x={30} y={120} width={175} height={266} fill="#081828" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="8" />
        {/* MT4 title bar */}
        <rect x={30} y={120} width={175} height={22} fill="#0D1F30" rx="8" />
        <rect x={30} y={133} width={175} height={9} fill="#0D1F30" />
        <circle cx={45} cy={131} r={4} fill="#EF4444" fillOpacity="0.6" />
        <circle cx={57} cy={131} r={4} fill="#F59E0B" fillOpacity="0.6" />
        <circle cx={69} cy={131} r={4} fill="#00CC44" fillOpacity="0.6" />
        <text x={85} y={135} fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace">MetaTrader 4</text>

        {/* Mini chart in MT4 */}
        <path d="M38,210 C55,202 72,195 90,185 C108,175 122,178 138,168 C154,158 164,152 182,144 C190,140 196,142 205,138"
          stroke="#00CC44" strokeWidth="1.5" fill="none" strokeOpacity="0.65" strokeLinecap="round" />
        {[0,1,2,3,4,5,6,7,8].map(i => {
          const x = 40 + i * 18;
          const h = 6 + (i * 9 % 16);
          const bull = i % 3 !== 2;
          return (
            <rect key={i} x={x} y={215 - h} width={10} height={h}
              fill={bull ? "#00CC44" : "#EF4444"} fillOpacity="0.5" rx="1" />
          );
        })}

        {/* Order ticket */}
        <rect x={40} y={248} width={155} height={75} fill="rgba(0,204,68,0.06)"
          stroke="rgba(0,204,68,0.2)" strokeWidth="1" rx="5" />
        <text x={52} y={264} fill="white" fillOpacity="0.35" fontSize="7" fontFamily="monospace" letterSpacing="0.5">NEW ORDER</text>
        {[
          { k: "Symbol", v: "EUR/USD" },
          { k: "Volume", v: "1.00 lot" },
          { k: "Type",   v: "Market" },
          { k: "Price",  v: "1.08572" },
        ].map(({ k, v }, i) => (
          <g key={k}>
            <text x={52} y={278 + i * 12} fill="white" fillOpacity="0.22" fontSize="7" fontFamily="monospace">{k}</text>
            <text x={185} y={278 + i * 12} fill="white" fillOpacity="0.7" fontSize="7" fontFamily="monospace" textAnchor="end">{v}</text>
          </g>
        ))}

        {/* Buy button */}
        <rect x={40} y={333} width={72} height={18} fill="#00CC44" fillOpacity="0.85" rx="3" />
        <text x={76} y={346} fill="black" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BUY</text>
        <rect x={118} y={333} width={77} height={18} fill="#EF4444" fillOpacity="0.75" rx="3" />
        <text x={157} y={346} fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SELL</text>

        {/* Volume bar bottom */}
        <rect x={40} y={360} width={72} height={12} fill="rgba(0,204,68,0.2)" rx="2" />
        <rect x={118} y={360} width={77} height={12} fill="rgba(239,68,68,0.2)" rx="2" />

        {/* Client label */}
        <text x={118} y={402} fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">CLIENT TERMINAL</text>

        {/* ─── Arrow: Client → Olla Trade ──────────────────── */}
        <path d="M205,253 L310,253" stroke="#00CC44" strokeWidth="2" strokeOpacity="0.6"
          markerEnd="url(#arrow)" fill="none" />
        {/* Data packets */}
        {[0,1,2].map(i => (
          <circle key={i} cx={220 + i * 30} cy={253} r={3.5}
            fill="#00CC44" fillOpacity={0.3 + i * 0.2} />
        ))}
        <text x={258} y={244} fill="#00CC44" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.6">ORDER</text>
        <text x={258} y={268} fill="white" fillOpacity="0.18" fontSize="6" fontFamily="monospace" textAnchor="middle">&lt;10ms</text>

        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="#00CC44" fillOpacity="0.7" />
          </marker>
          <marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="rgba(30,136,229,0.8)" />
          </marker>
          <marker id="arrow3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="rgba(255,255,255,0.4)" />
          </marker>
        </defs>

        {/* ─── Node 2: Olla Trade Infrastructure (center) ──── */}
        <rect x={310} y={80} width={280} height={346} fill="#081828" stroke="rgba(0,204,68,0.15)" strokeWidth="1.5" rx="8" />
        {/* Header */}
        <rect x={310} y={80} width={280} height={30} fill="rgba(0,204,68,0.08)" rx="8" />
        <rect x={310} y={98} width={280} height={12} fill="rgba(0,204,68,0.08)" />
        <text x={450} y={100} fill="#00CC44" fontSize="9" fontFamily="monospace"
          fontWeight="bold" textAnchor="middle" fillOpacity="0.8">OLLA TRADE INFRASTRUCTURE</text>

        {/* Execution engine box */}
        <rect x={330} y={124} width={240} height={60} fill="rgba(0,204,68,0.06)"
          stroke="rgba(0,204,68,0.2)" strokeWidth="1" rx="5" />
        <text x={450} y={142} fill="#00CC44" fontSize="8" fontFamily="monospace" textAnchor="middle" fillOpacity="0.7" letterSpacing="0.5">EXECUTION ENGINE</text>
        <text x={450} y={158} fill="white" fillOpacity="0.25" fontSize="7" fontFamily="monospace" textAnchor="middle">Market execution · No requotes</text>
        <text x={450} y={172} fill="white" fillOpacity="0.15" fontSize="7" fontFamily="monospace" textAnchor="middle">STP routing active</text>

        {/* Pricing engine */}
        <rect x={330} y={196} width={112} height={52} fill="rgba(30,136,229,0.06)"
          stroke="rgba(30,136,229,0.15)" strokeWidth="1" rx="5" />
        <text x={386} y={214} fill="#1E88E5" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.7">PRICING ENGINE</text>
        <text x={386} y={230} fill="white" fillOpacity="0.25" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Best bid/ask</text>
        <text x={386} y={242} fill="white" fillOpacity="0.15" fontSize="6.5" fontFamily="monospace" textAnchor="middle">aggregation</text>

        {/* Risk management */}
        <rect x={458} y={196} width={112} height={52} fill="rgba(245,158,11,0.06)"
          stroke="rgba(245,158,11,0.15)" strokeWidth="1" rx="5" />
        <text x={514} y={214} fill="#F59E0B" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.7">RISK MGMT</text>
        <text x={514} y={230} fill="white" fillOpacity="0.25" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Margin check</text>
        <text x={514} y={242} fill="white" fillOpacity="0.15" fontSize="6.5" fontFamily="monospace" textAnchor="middle">NB protection</text>

        {/* Order book / depth */}
        <rect x={330} y={262} width={240} height={100} fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="5" />
        <text x={450} y={278} fill="white" fillOpacity="0.22" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">PRICE FEED</text>
        {/* Bid/Ask ladder */}
        {[
          { price: "1.08580", size: "2.5M", side: "ask", w: 120 },
          { price: "1.08572", size: "5.0M", side: "ask", w: 145 },
          { price: "1.08565", size: "1.8M", side: "ask", w: 100 },
        ].map(({ price, size, w }, i) => (
          <g key={price}>
            <rect x={340} y={283 + i * 14} width={w} height={11} fill="rgba(239,68,68,0.12)" rx="1" />
            <text x={345} y={293 + i * 14} fill="white" fillOpacity="0.5" fontSize="7" fontFamily="monospace">{price}</text>
            <text x={462} y={293 + i * 14} fill="#EF4444" fontSize="7" fontFamily="monospace" fillOpacity="0.7">{size}</text>
          </g>
        ))}
        <line x1={340} y1={327} x2={560} y2={327} stroke="white" strokeOpacity="0.08" strokeWidth="0.5" />
        {[
          { price: "1.08560", size: "3.2M", w: 135 },
          { price: "1.08553", size: "7.1M", w: 165 },
          { price: "1.08545", size: "2.0M", w: 110 },
        ].map(({ price, size, w }, i) => (
          <g key={price}>
            <rect x={340} y={331 + i * 14} width={w} height={11} fill="rgba(0,204,68,0.1)" rx="1" />
            <text x={345} y={341 + i * 14} fill="white" fillOpacity="0.5" fontSize="7" fontFamily="monospace">{price}</text>
            <text x={462} y={341 + i * 14} fill="#00CC44" fontSize="7" fontFamily="monospace" fillOpacity="0.7">{size}</text>
          </g>
        ))}

        {/* Infrastructure label */}
        <text x={450} y={415} fill="white" fillOpacity="0.1" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">LOW LATENCY · STP</text>

        {/* ─── Arrow: Olla Trade → Liquidity ───────────────── */}
        <path d="M590,253 L670,253" stroke="#1E88E5" strokeWidth="2" strokeOpacity="0.5"
          markerEnd="url(#arrow2)" fill="none" />
        {[0,1,2].map(i => (
          <circle key={i} cx={605 + i * 22} cy={253} r={3} fill="#1E88E5" fillOpacity={0.3 + i * 0.15} />
        ))}
        <text x={630} y={244} fill="#1E88E5" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">ROUTING</text>

        {/* ─── Node 3: Liquidity Providers (right) ─────────── */}
        <rect x={670} y={100} width={200} height={306} fill="#081828" stroke="rgba(30,136,229,0.12)" strokeWidth="1" rx="8" />
        <text x={770} y={124} fill="#1E88E5" fontSize="8" fontFamily="monospace"
          textAnchor="middle" fillOpacity="0.65" letterSpacing="0.5">LIQUIDITY POOL</text>

        {/* LP nodes */}
        {[
          { label: "LP — Tier 1", active: true,  latency: "0.8ms" },
          { label: "LP — Tier 1", active: true,  latency: "1.1ms" },
          { label: "LP — Tier 2", active: false, latency: "2.4ms" },
          { label: "LP — Tier 2", active: false, latency: "3.2ms" },
          { label: "LP — Tier 1", active: true,  latency: "1.5ms" },
        ].map(({ label, active, latency }, i) => (
          <g key={i}>
            <rect x={682} y={136 + i * 50} width={176} height={38}
              fill={active ? "rgba(30,136,229,0.06)" : "rgba(255,255,255,0.02)"}
              stroke={active ? "rgba(30,136,229,0.2)" : "rgba(255,255,255,0.05)"} strokeWidth="1" rx="5" />
            <circle cx={698} cy={155 + i * 50} r={5}
              fill={active ? "#1E88E5" : "#374151"} fillOpacity="0.7" />
            <text x={710} y={152 + i * 50} fill="white" fillOpacity={active ? 0.55 : 0.25}
              fontSize="7.5" fontFamily="monospace">{label}</text>
            <text x={710} y={165 + i * 50} fill={active ? "#1E88E5" : "white"} fillOpacity={active ? 0.6 : 0.15}
              fontSize="7" fontFamily="monospace">{latency} · Active</text>
            {active && (
              <rect x={820} y={146 + i * 50} width={28} height={18} fill="rgba(30,136,229,0.12)"
                stroke="rgba(30,136,229,0.2)" strokeWidth="1" rx="3" />
            )}
          </g>
        ))}

        {/* Best execution label */}
        <rect x={682} y={393} width={176} height={24} fill="rgba(0,204,68,0.08)"
          stroke="rgba(0,204,68,0.18)" strokeWidth="1" rx="5" />
        <text x={770} y={409} fill="#00CC44" fontSize="8" fontFamily="monospace"
          textAnchor="middle" fillOpacity="0.7">Best price selected ✓</text>

        {/* ─── Return arrow ──────────────────────────────────── */}
        <path d="M670,290 C640,290 620,290 590,290" stroke="white" strokeWidth="1.5" strokeOpacity="0.2"
          markerEnd="url(#arrow3)" fill="none" strokeDasharray="5 3" />
        <text x={630} y={281} fill="white" fillOpacity="0.15" fontSize="6.5" fontFamily="monospace" textAnchor="middle">FILL CONFIRMATION</text>

        {/* Corner accents */}
        <line x1={0} y1={0} x2={35} y2={0} stroke="#00CC44" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={0} y1={0} x2={0} y2={35} stroke="#00CC44" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={865} y1={506} x2={900} y2={506} stroke="#1E88E5" strokeOpacity="0.2" strokeWidth="2" />
        <line x1={900} y1={471} x2={900} y2={506} stroke="#1E88E5" strokeOpacity="0.2" strokeWidth="2" />
      </svg>
    </div>
  );
}
