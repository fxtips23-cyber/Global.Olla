import Link from "next/link";

const stats = [
  { value: "500+",     label: "Instruments" },
  { value: "1:500",    label: "Max Leverage" },
  { value: "0.0 pips", label: "Spreads From" },
  { value: "$10",      label: "Min. Deposit" },
];

/* ─── Candlestick data — EURUSD H4 style ─────────────────────── */
type Candle = { o: number; h: number; l: number; c: number };
const CANDLES: Candle[] = [
  { o:620, h:605, l:628, c:608 },
  { o:608, h:596, l:614, c:601 },
  { o:601, h:588, l:606, c:590 },
  { o:590, h:580, l:595, c:585 },
  { o:585, h:572, l:590, c:575 },
  { o:575, h:568, l:582, c:578 },
  { o:578, h:572, l:588, c:582 },
  { o:582, h:570, l:586, c:572 },
  { o:572, h:558, l:576, c:561 },
  { o:561, h:548, l:565, c:552 },
  { o:552, h:544, l:558, c:547 },
  { o:547, h:535, l:550, c:538 },
  { o:538, h:530, l:544, c:533 },
  { o:533, h:524, l:537, c:527 },
  { o:527, h:515, l:530, c:519 },
  { o:519, h:508, l:523, c:512 },
  { o:512, h:505, l:518, c:507 },
  { o:507, h:496, l:512, c:499 },
  { o:499, h:492, l:504, c:495 },
  { o:495, h:485, l:498, c:488 },
  { o:488, h:476, l:492, c:479 },
  { o:479, h:470, l:483, c:473 },
  { o:473, h:466, l:478, c:469 },
  { o:469, h:459, l:472, c:461 },
  { o:461, h:452, l:465, c:455 },
];

/* Rebase candles to fit in viewBox chart panel */
function ChartPanel() {
  const startX = 760;
  const candleWidth = 22;
  const gap = 8;
  const step = candleWidth + gap;

  return (
    <g>
      {/* Chart area background */}
      <rect x={startX} y={80} width={650} height={560} fill="#081525" fillOpacity="0.7" rx="2" />

      {/* Grid lines */}
      {[160, 240, 320, 400, 480, 560].map(y => (
        <line key={y} x1={startX} y1={y} x2={startX + 650} y2={y}
          stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="4 6" />
      ))}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <line key={i} x1={startX + i * 80} y1={80} x2={startX + i * 80} y2={640}
          stroke="white" strokeOpacity="0.04" strokeWidth="1" />
      ))}

      {/* Price axis labels */}
      {[
        { y: 160, label: "1.0920" },
        { y: 240, label: "1.0900" },
        { y: 320, label: "1.0880" },
        { y: 400, label: "1.0860" },
        { y: 480, label: "1.0840" },
        { y: 560, label: "1.0820" },
      ].map(({ y, label }) => (
        <text key={y} x={startX + 615} y={y + 4} fill="white" fillOpacity="0.22"
          fontSize="9" fontFamily="monospace" textAnchor="start">{label}</text>
      ))}

      {/* MA line */}
      <path
        d={CANDLES.map((c, i) => {
          const x = startX + 15 + i * step;
          const mid = (c.o + c.c) / 2;
          return `${i === 0 ? "M" : "L"}${x},${mid}`;
        }).join(" ")}
        stroke="#00CC44" strokeWidth="1.5" fill="none" strokeOpacity="0.55"
        strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Candles */}
      {CANDLES.map((c, i) => {
        const x = startX + 12 + i * step;
        const bull = c.c <= c.o;
        const col = bull ? "#00CC44" : "#EF4444";
        const bodyTop = Math.min(c.o, c.c);
        const bodyH = Math.max(Math.abs(c.o - c.c), 2);
        return (
          <g key={i}>
            {/* Wick */}
            <line x1={x + candleWidth / 2} y1={c.h} x2={x + candleWidth / 2} y2={c.l}
              stroke={col} strokeOpacity="0.7" strokeWidth="1.5" />
            {/* Body */}
            <rect x={x} y={bodyTop} width={candleWidth} height={bodyH}
              fill={col} fillOpacity={bull ? 0.75 : 0.6} rx="1" />
          </g>
        );
      })}

      {/* Volume bars */}
      {CANDLES.map((c, i) => {
        const x = startX + 12 + i * step;
        const bull = c.c <= c.o;
        const volH = 12 + (i * 7 % 20);
        return (
          <rect key={i} x={x} y={640 - volH} width={candleWidth} height={volH}
            fill={bull ? "#00CC44" : "#EF4444"} fillOpacity="0.25" rx="1" />
        );
      })}

      {/* Symbol label */}
      <text x={startX + 12} y={106} fill="white" fillOpacity="0.55" fontSize="11"
        fontFamily="monospace" fontWeight="bold">EUR/USD</text>
      <text x={startX + 70} y={106} fill="white" fillOpacity="0.22" fontSize="9"
        fontFamily="monospace">H4</text>

      {/* Current price line */}
      <line x1={startX} y1={455} x2={startX + 600} y2={455}
        stroke="#00CC44" strokeWidth="1" strokeDasharray="5 4" strokeOpacity="0.35" />
      <rect x={startX + 600} y={448} width={52} height={14} fill="#00CC44" fillOpacity="0.85" rx="2" />
      <text x={startX + 604} y={459} fill="black" fontSize="9" fontFamily="monospace"
        fontWeight="bold">1.0858</text>
    </g>
  );
}

/* ─── Left market watch sidebar ───────────────────────────────── */
function MarketWatch() {
  const pairs = [
    { sym: "EUR/USD", bid: "1.0857", ask: "1.0858", chg: "+0.12%", bull: true },
    { sym: "GBP/USD", bid: "1.2648", ask: "1.2650", chg: "+0.08%", bull: true },
    { sym: "USD/JPY", bid: "151.24", ask: "151.26", chg: "-0.15%", bull: false },
    { sym: "XAU/USD", bid: "2318.4", ask: "2318.9", chg: "+0.22%", bull: true },
    { sym: "USD/CHF", bid: "0.9142", ask: "0.9143", chg: "-0.06%", bull: false },
    { sym: "BTC/USD", bid: "68420",  ask: "68445",  chg: "+1.34%", bull: true },
    { sym: "NAS100",  bid: "18142",  ask: "18145",  chg: "+0.54%", bull: true },
    { sym: "WTI",     bid: "82.34",  ask: "82.37",  chg: "-0.38%", bull: false },
  ];

  return (
    <g>
      {/* Sidebar background */}
      <rect x={0} y={80} width={175} height={560} fill="#050D18" fillOpacity="0.75" rx="2" />
      <rect x={0} y={80} width={175} height={22} fill="#081520" fillOpacity="0.9" rx="2" />

      {/* Header */}
      <text x={10} y={95} fill="white" fillOpacity="0.35" fontSize="9"
        fontFamily="monospace" fontWeight="bold" letterSpacing="1">MARKET WATCH</text>
      <text x={105} y={95} fill="white" fillOpacity="0.22" fontSize="9" fontFamily="monospace">Bid</text>
      <text x={138} y={95} fill="white" fillOpacity="0.22" fontSize="9" fontFamily="monospace">Ask</text>

      {/* Rows */}
      {pairs.map(({ sym, bid, ask, chg, bull }, i) => (
        <g key={sym}>
          <rect x={0} y={104 + i * 68} width={175} height={66}
            fill={bull ? "rgba(0,204,68,0.025)" : "rgba(239,68,68,0.02)"}
            stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
          <text x={8} y={120 + i * 68} fill="white" fillOpacity="0.7" fontSize="9.5"
            fontFamily="monospace" fontWeight="bold">{sym}</text>
          <text x={8} y={135 + i * 68} fill={bull ? "#00CC44" : "#EF4444"} fontSize="8"
            fontFamily="monospace" fontWeight="bold">{chg}</text>
          <text x={100} y={125 + i * 68} fill="white" fillOpacity="0.55" fontSize="9"
            fontFamily="monospace">{bid}</text>
          <text x={100} y={138 + i * 68} fill={bull ? "#00CC44" : "#EF4444"} fontSize="9"
            fontFamily="monospace" fontWeight="bold">{ask}</text>
          <line x1={0} y1={170 + i * 68} x2={175} y2={170 + i * 68}
            stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
        </g>
      ))}
    </g>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-[#020810] overflow-hidden" style={{ minHeight: "90vh" }}>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ── Main background SVG ───────────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {/* Deep background glow */}
        <ellipse cx="1200" cy="400" rx="400" ry="300" fill="#00CC44" fillOpacity="0.04" />
        <ellipse cx="240"  cy="400" rx="300" ry="250" fill="#1E88E5" fillOpacity="0.03" />

        {/* Chart panel — right side */}
        <ChartPanel />

        {/* Market watch sidebar */}
        <MarketWatch />

        {/* ── Global chart lines (left/center area background) ──── */}
        {/* Primary trending line */}
        <path
          d="M175,620 C260,595 340,568 430,542 C520,516 600,530 690,504 C780,478 855,462 945,436 C1035,410 1110,422 1200,398 C1290,374 1350,358 1440,338"
          stroke="#00CC44" strokeWidth="2" strokeOpacity="0.22" strokeLinecap="round"
        />
        <path
          d="M175,620 C260,595 340,568 430,542 C520,516 600,530 690,504 C780,478 855,462 945,436 C1035,410 1110,422 1200,398 C1290,374 1350,358 1440,338 L1440,800 L175,800 Z"
          fill="#00CC44" fillOpacity="0.035"
        />

        {/* Secondary line */}
        <path
          d="M175,680 C280,662 390,644 505,625 C620,606 720,595 840,578 C960,561 1060,548 1180,532 C1300,516 1380,505 1440,492"
          stroke="white" strokeWidth="1" strokeOpacity="0.06" strokeLinecap="round"
        />

        {/* Dotted reference line */}
        <path
          d="M175,580 C255,558 345,536 445,514 C545,492 625,508 720,485 C815,462 895,448 985,424 C1075,400 1155,415 1250,392"
          stroke="#00CC44" strokeWidth="1" strokeOpacity="0.12"
          strokeLinecap="round" strokeDasharray="6 5"
        />

        {/* Horizontal price levels across full width */}
        {[200, 340, 480, 620].map(y => (
          <line key={y} x1={175} y1={y} x2={760} y2={y}
            stroke="white" strokeOpacity="0.035" strokeWidth="1" strokeDasharray="10 8" />
        ))}

        {/* City skyline silhouette — bottom */}
        <path
          d="M175,800 L175,685 L205,685 L205,672 L228,672 L228,658 L244,658 L244,645 L258,645 L258,658 L275,658 L275,672 L295,672 L295,688 L315,688 L315,672 L334,672 L334,655 L352,655 L352,642 L368,642 L368,630 L382,630 L382,642 L398,642 L398,658 L415,658 L415,672 L435,672 L435,660 L454,660 L454,645 L470,645 L470,632 L485,632 L485,620 L500,620 L500,632 L516,632 L516,648 L535,648 L535,662 L555,662 L555,675 L578,675 L578,660 L598,660 L598,646 L615,646 L615,633 L630,633 L630,620 L645,620 L645,607 L660,607 L660,620 L677,620 L677,634 L695,634 L695,648 L715,648 L715,662 L738,662 L738,674 L760,674 L760,800 Z"
          fill="#00CC44" fillOpacity="0.055"
        />

        {/* Volume bar section — left area */}
        <g fillOpacity="0.08">
          {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
            <rect key={i} x={185 + i * 45} y={800 - 35 - (10 + (i * 11 % 20))}
              width={24} height={10 + (i * 11 % 20)}
              fill={i % 3 === 0 ? "#00CC44" : "white"} rx="1" />
          ))}
        </g>

        {/* Data node dots on chart lines */}
        {[
          [430, 542], [600, 530], [780, 478], [945, 436], [1110, 422],
        ].map(([cx, cy]) => (
          <g key={`${cx},${cy}`}>
            <circle cx={cx} cy={cy} r="3.5" fill="#00CC44" fillOpacity="0.5" />
            <circle cx={cx} cy={cy} r="1.5" fill="#00CC44" fillOpacity="0.9" />
          </g>
        ))}
      </svg>

      {/* ── Vignette / overlay gradients ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            /* Center text area dark overlay */
            "radial-gradient(ellipse 55% 80% at 50% 45%, rgba(2,8,16,0.78) 0%, rgba(2,8,16,0.42) 55%, transparent 100%)," +
            /* Left edge */
            "linear-gradient(to right, rgba(2,8,16,0.5) 0%, transparent 14%)," +
            /* Bottom */
            "linear-gradient(to top, rgba(2,8,16,0.9) 0%, transparent 22%)," +
            /* Top */
            "linear-gradient(to bottom, rgba(2,8,16,0.45) 0%, transparent 18%)",
        }}
      />

      {/* ══════════════════════════════════════════════════════
          CONTENT
         ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-5 py-20 lg:py-28"
        style={{ minHeight: "90vh" }}>

        {/* Live badge */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CC44] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00CC44]" />
          </span>
          <span className="text-[11px] font-semibold text-white/35 uppercase tracking-[0.22em]">
            Trusted Online Trading Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-extrabold text-white leading-[1.04] tracking-tight mb-7 max-w-5xl"
          style={{ fontSize: "clamp(44px, 6vw, 90px)" }}>
          Trade Global Markets<br />
          <span className="text-[#00CC44]">with Confidence.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/48 max-w-2xl leading-relaxed mb-11"
          style={{ fontSize: "clamp(17px, 1.5vw, 21px)" }}>
          Access Forex, Metals, Indices, Stocks and Crypto CFDs on MetaTrader&nbsp;4 with competitive spreads, fast execution, and accounts from $10.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <Link
            href="https://direct.ollatrade.com/auth/register"
            className="inline-flex items-center justify-center bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold rounded-xl transition-colors"
            style={{ fontSize: 16, padding: "18px 48px", minWidth: 210 }}
          >
            Open Account
          </Link>
          <Link
            href="https://direct.ollatrade.com/auth/login"
            className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white/65 hover:text-white font-medium rounded-xl transition-all hover:bg-white/5"
            style={{ fontSize: 16, padding: "17px 48px", minWidth: 210 }}
          >
            Login
          </Link>
        </div>

        <Link href="/company/promotions"
          className="text-[12px] text-white/22 hover:text-[#00CC44] transition-colors uppercase tracking-widest">
          View promotions →
        </Link>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 w-full max-w-lg sm:max-w-xl">
          <div className="grid grid-cols-4 border-t border-white/10 pt-6 sm:pt-8 gap-1 sm:gap-2">
            {stats.map((s, i) => (
              <div key={s.label}
                className={`flex flex-col items-center gap-1.5 ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}>
                <span className="font-extrabold text-white leading-none text-[18px] sm:text-[22px] lg:text-[28px]">
                  {s.value}
                </span>
                <span className="text-[9px] sm:text-[10px] text-white/28 uppercase tracking-wider text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
