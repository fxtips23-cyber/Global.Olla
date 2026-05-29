export default function FundingVisual() {
  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ background: "#050D18", aspectRatio: "16/9", maxHeight: 420 }}>
      <svg viewBox="0 0 800 450" className="w-full h-full" aria-hidden="true">

        {/* Background grid */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`hg${i}`} x1={0} y1={i * 40} x2={800} y2={i * 40}
            stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`vg${i}`} x1={i * 42} y1={0} x2={i * 42} y2={450}
            stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        ))}

        {/* ── Left: Client portal panel ─────────────────────── */}
        <rect x={28} y={60} width={195} height={330} fill="#081520" stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="10" />
        {/* Panel header */}
        <rect x={28} y={60} width={195} height={36} fill="#0D1F30" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="10" />
        <rect x={28} y={82} width={195} height={14} fill="#0D1F30" />
        <circle cx={48} cy={78} r={5} fill="#EF4444" fillOpacity="0.7" />
        <circle cx={62} cy={78} r={5} fill="#F59E0B" fillOpacity="0.7" />
        <circle cx={76} cy={78} r={5} fill="#29B5D4" fillOpacity="0.7" />
        <text x={45} y={84} fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">portal.ollatrade.com</text>

        {/* Balance section */}
        <rect x={40} y={110} width={171} height={55} fill="rgba(41,181,212,0.06)" stroke="rgba(41,181,212,0.12)" strokeWidth="1" rx="6" />
        <text x={52} y={128} fill="white" fillOpacity="0.35" fontSize="7" fontFamily="monospace" letterSpacing="0.5">ACCOUNT BALANCE</text>
        <text x={52} y={152} fill="#29B5D4" fontSize="18" fontFamily="monospace" fontWeight="bold">$12,450.00</text>

        {/* Method selector */}
        <text x={42} y={186} fill="white" fillOpacity="0.25" fontSize="7" fontFamily="monospace" letterSpacing="0.5">SELECT METHOD</text>
        {[
          { y: 193, label: "USDT TRC20", active: true },
          { y: 213, label: "Bitcoin BTC", active: false },
          { y: 233, label: "Ethereum ETH", active: false },
        ].map(({ y, label, active }) => (
          <g key={label}>
            <rect x={42} y={y} width={169} height={18} fill={active ? "rgba(41,181,212,0.12)" : "rgba(255,255,255,0.03)"}
              stroke={active ? "rgba(41,181,212,0.3)" : "rgba(255,255,255,0.06)"} strokeWidth="1" rx="4" />
            <circle cx={56} cy={y + 9} r={5} fill={active ? "#29B5D4" : "transparent"}
              stroke={active ? "#29B5D4" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
            <text x={66} y={y + 13} fill="white" fillOpacity={active ? 0.75 : 0.35} fontSize="8" fontFamily="monospace">{label}</text>
          </g>
        ))}

        {/* Amount input */}
        <text x={42} y={268} fill="white" fillOpacity="0.25" fontSize="7" fontFamily="monospace" letterSpacing="0.5">AMOUNT (USD)</text>
        <rect x={42} y={272} width={169} height={24} fill="rgba(255,255,255,0.04)" stroke="rgba(41,181,212,0.3)" strokeWidth="1" rx="5" />
        <text x={52} y={289} fill="white" fillOpacity="0.65" fontSize="11" fontFamily="monospace" fontWeight="bold">$500</text>

        {/* Deposit button */}
        <rect x={42} y={310} width={169} height={28} fill="#29B5D4" rx="6" />
        <text x={127} y={329} fill="black" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DEPOSIT NOW</text>

        {/* Fee indicator */}
        <text x={127} y={358} fill="white" fillOpacity="0.22" fontSize="7" fontFamily="monospace" textAnchor="middle">Olla Trade Fee: $0.00</text>
        <text x={127} y={370} fill="white" fillOpacity="0.15" fontSize="7" fontFamily="monospace" textAnchor="middle">Network fees may apply</text>

        {/* Security seal */}
        <rect x={52} y={382} width={149} height={20} fill="rgba(41,181,212,0.06)" stroke="rgba(41,181,212,0.12)" strokeWidth="1" rx="4" />
        {/* Shield icon mini */}
        <path d="M66,388 L66,396 C66,399 68.5,401 71,402 C73.5,401 76,399 76,396 L76,388 L66,388 Z"
          fill="none" stroke="#29B5D4" strokeWidth="1" strokeOpacity="0.7" />
        <text x={82} y={397} fill="#29B5D4" fontSize="7" fontFamily="monospace" fillOpacity="0.7">SSL Encrypted · Secure</text>

        {/* ── Center: Secure channel ───────────────────────── */}
        {/* Connection lines left → center */}
        <path d="M223,225 C270,225 290,225 330,225" stroke="#29B5D4" strokeOpacity="0.5" strokeWidth="1.5"
          strokeDasharray="5 3" fill="none" />
        {/* Data packets on line */}
        {[0,1,2].map(i => (
          <circle key={i} cx={240 + i * 28} cy={225} r={3} fill="#29B5D4" fillOpacity={0.4 + i * 0.15} />
        ))}

        {/* Central shield */}
        <ellipse cx={400} cy={225} rx={55} ry={55} fill="rgba(41,181,212,0.06)" stroke="rgba(41,181,212,0.15)" strokeWidth="1" />
        <ellipse cx={400} cy={225} rx={42} ry={42} fill="rgba(41,181,212,0.08)" stroke="rgba(41,181,212,0.2)" strokeWidth="1" />
        {/* Shield path */}
        <path d="M400,192 L380,200 L380,218 C380,232 388,244 400,250 C412,244 420,232 420,218 L420,200 Z"
          fill="rgba(41,181,212,0.12)" stroke="#29B5D4" strokeWidth="1.5" strokeOpacity="0.7" />
        {/* Check inside shield */}
        <path d="M390,222 L396,228 L412,212" stroke="#29B5D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" fill="none" />
        {/* Lock label */}
        <text x={400} y={265} fill="#29B5D4" fontSize="8" fontFamily="monospace" textAnchor="middle" fillOpacity="0.7">SECURED</text>
        <text x={400} y={277} fill="white" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.25">AES-256 · SSL/TLS</text>

        {/* Transaction ID tag */}
        <rect x={348} y={290} width={104} height={18} fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="4" />
        <text x={400} y={303} fill="white" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.35">TXN: 7F3A…9C2E</text>

        {/* Connection lines center → right */}
        <path d="M455,225 C490,225 510,225 555,225" stroke="#29B5D4" strokeOpacity="0.5" strokeWidth="1.5"
          strokeDasharray="5 3" fill="none" />
        {[0,1,2].map(i => (
          <circle key={i} cx={470 + i * 28} cy={225} r={3} fill="#29B5D4" fillOpacity={0.7 - i * 0.15} />
        ))}

        {/* ── Right: Blockchain / wallet panel ─────────────── */}
        <rect x={577} y={60} width={195} height={330} fill="#081520" stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="10" />
        <rect x={577} y={60} width={195} height={36} fill="#0D1F30" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="10" />
        <rect x={577} y={82} width={195} height={14} fill="#0D1F30" />
        <text x={590} y={84} fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">blockchain network</text>

        {/* Network nodes visual */}
        {[
          { cx: 640, cy: 130, label: "TRC20" },
          { cx: 720, cy: 115, label: "ERC20" },
          { cx: 695, cy: 160, label: "BTC" },
        ].map(({ cx, cy, label }) => (
          <g key={label}>
            <circle cx={cx} cy={cy} r={18} fill="rgba(41,181,212,0.07)" stroke="rgba(41,181,212,0.2)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r={10} fill="rgba(41,181,212,0.12)" stroke="rgba(41,181,212,0.3)" strokeWidth="1" />
            <text x={cx} y={cy + 4} fill="#29B5D4" fontSize="7" fontFamily="monospace"
              fontWeight="bold" textAnchor="middle" fillOpacity="0.8">{label}</text>
          </g>
        ))}
        {/* Network connection lines between nodes */}
        <line x1={640} y1={130} x2={720} y2={115} stroke="#29B5D4" strokeOpacity="0.15" strokeWidth="1" />
        <line x1={720} y1={115} x2={695} y2={160} stroke="#29B5D4" strokeOpacity="0.15" strokeWidth="1" />
        <line x1={640} y1={130} x2={695} y2={160} stroke="#29B5D4" strokeOpacity="0.15" strokeWidth="1" />

        {/* Confirmation progress */}
        <text x={590} y={195} fill="white" fillOpacity="0.25" fontSize="7" fontFamily="monospace" letterSpacing="0.5">CONFIRMATIONS</text>
        <rect x={590} y={200} width={169} height={10} fill="rgba(255,255,255,0.05)" rx="5" />
        <rect x={590} y={200} width={135} height={10} fill="#29B5D4" fillOpacity="0.6" rx="5" />
        <text x={667} y={227} fill="#29B5D4" fontSize="8" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">6/8 Confirmations</text>

        {/* Transaction details */}
        {[
          { label: "Amount", value: "500 USDT" },
          { label: "Network", value: "Tron (TRC20)" },
          { label: "Fee", value: "~1 TRX" },
          { label: "Est. time", value: "~1 minute" },
          { label: "Status", value: "Pending ●", green: true },
        ].map(({ label, value, green }, i) => (
          <g key={label}>
            <line x1={590} y1={242 + i * 26} x2={762} y2={242 + i * 26}
              stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
            <text x={595} y={256 + i * 26} fill="white" fillOpacity="0.28" fontSize="8" fontFamily="monospace">{label}</text>
            <text x={757} y={256 + i * 26} fill={green ? "#29B5D4" : "white"} fillOpacity={green ? 0.9 : 0.55}
              fontSize="8" fontFamily="monospace" textAnchor="end" fontWeight={green ? "bold" : "normal"}>{value}</text>
          </g>
        ))}

        {/* Credited indicator */}
        <rect x={590} y={380} width={169} height={24} fill="rgba(41,181,212,0.1)"
          stroke="rgba(41,181,212,0.25)" strokeWidth="1" rx="5" />
        <text x={675} y={397} fill="#29B5D4" fontSize="9" fontFamily="monospace"
          textAnchor="middle" fontWeight="bold">Account Credited ✓</text>

        {/* Decorative corner accents */}
        <line x1={0} y1={0} x2={40} y2={0} stroke="#29B5D4" strokeOpacity="0.25" strokeWidth="2" />
        <line x1={0} y1={0} x2={0} y2={40} stroke="#29B5D4" strokeOpacity="0.25" strokeWidth="2" />
        <line x1={760} y1={450} x2={800} y2={450} stroke="#29B5D4" strokeOpacity="0.25" strokeWidth="2" />
        <line x1={800} y1={410} x2={800} y2={450} stroke="#29B5D4" strokeOpacity="0.25" strokeWidth="2" />
      </svg>
    </div>
  );
}
