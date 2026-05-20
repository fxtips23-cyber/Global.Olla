import Link from "next/link";

const stats = [
  { value: "500+",     label: "Instruments" },
  { value: "1:500",    label: "Max Leverage" },
  { value: "0.0 pips", label: "Spreads From" },
  { value: "$10",      label: "Min. Deposit" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#020810] overflow-hidden" style={{ minHeight: "90vh" }}>

      {/* ── Background: grid pattern ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ── Background: abstract market lines (SVG, no defs) ─────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {/* Primary rising chart line — green */}
        <path
          d="M0,580 C120,545 240,510 360,475 C480,440 560,455 660,415 C760,375 840,355 940,315 C1040,275 1120,295 1220,255 C1320,215 1380,195 1440,175"
          stroke="#00CC44"
          strokeWidth="2"
          strokeOpacity="0.30"
          strokeLinecap="round"
        />
        {/* Area fill under primary line */}
        <path
          d="M0,580 C120,545 240,510 360,475 C480,440 560,455 660,415 C760,375 840,355 940,315 C1040,275 1120,295 1220,255 C1320,215 1380,195 1440,175 L1440,800 L0,800 Z"
          fill="#00CC44"
          fillOpacity="0.05"
        />
        {/* Secondary line */}
        <path
          d="M0,640 C160,618 320,596 480,575 C640,554 760,540 920,522 C1080,504 1200,488 1440,468"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.09"
          strokeLinecap="round"
        />
        {/* Dashed tertiary line */}
        <path
          d="M0,545 C100,518 210,508 320,475 C430,442 500,462 610,428 C720,394 810,374 920,340 C1030,306 1120,326 1230,292 C1340,258 1390,240 1440,222"
          stroke="#00CC44"
          strokeWidth="1"
          strokeOpacity="0.14"
          strokeLinecap="round"
          strokeDasharray="8 5"
        />
        {/* Horizontal price level guides */}
        <line x1="0" y1="200" x2="1440" y2="200" stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="14 10" />
        <line x1="0" y1="320" x2="1440" y2="320" stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="14 10" />
        <line x1="0" y1="440" x2="1440" y2="440" stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="14 10" />
        <line x1="0" y1="560" x2="1440" y2="560" stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="14 10" />
        {/* City skyline silhouette */}
        <path
          d="M0,800 L0,668 L40,668 L40,648 L65,648 L65,632 L82,632 L82,618 L98,618 L98,632 L115,632 L115,650 L145,650 L145,630 L168,630 L168,612 L185,612 L185,600 L202,600 L202,612 L220,612 L220,632 L248,632 L248,648 L272,648 L272,660 L298,660 L298,642 L320,642 L320,628 L340,628 L340,614 L358,614 L358,628 L378,628 L378,645 L405,645 L405,658 L432,658 L432,640 L455,640 L455,624 L475,624 L475,610 L492,610 L492,598 L510,598 L510,610 L528,610 L528,625 L552,625 L552,640 L578,640 L578,654 L605,654 L605,666 L632,666 L632,648 L658,648 L658,632 L678,632 L678,618 L695,618 L695,605 L712,605 L712,618 L730,618 L730,632 L755,632 L755,648 L780,648 L780,660 L808,660 L808,644 L832,644 L832,628 L852,628 L852,614 L870,614 L870,628 L890,628 L890,645 L915,645 L915,658 L942,658 L942,640 L968,640 L968,624 L988,624 L988,610 L1005,610 L1005,596 L1022,596 L1022,610 L1040,610 L1040,625 L1065,625 L1065,640 L1090,640 L1090,654 L1118,654 L1118,666 L1145,666 L1145,648 L1170,648 L1170,632 L1190,632 L1190,618 L1208,618 L1208,632 L1228,632 L1228,648 L1252,648 L1252,662 L1278,662 L1278,672 L1305,672 L1305,656 L1330,656 L1330,640 L1350,640 L1350,655 L1372,655 L1372,668 L1400,668 L1400,678 L1440,678 L1440,800 Z"
          fill="#00CC44"
          fillOpacity="0.06"
        />
        {/* Volume bars at bottom */}
        <g fillOpacity="0.07">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map((i) => (
            <rect key={i} x={12 + i * 53} y={800 - 55 - (20 + (i * 7 % 22))} width="28" height={20 + (i * 7 % 22)} fill={i % 3 === 0 ? "#00CC44" : "white"} rx="1" />
          ))}
        </g>
      </svg>

      {/* ── Background: edge vignette overlay ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 100% at 0% 50%,  rgba(2,8,16,0.65) 0%, transparent 100%)," +
            "radial-gradient(ellipse 35% 100% at 100% 50%, rgba(2,8,16,0.65) 0%, transparent 100%)," +
            "linear-gradient(to top, rgba(2,8,16,0.85) 0%, transparent 28%)," +
            "linear-gradient(to bottom, rgba(2,8,16,0.55) 0%, transparent 22%)",
        }}
      />

      {/* ════════════════════════════════════════════════════════════
          CONTENT — vertically and horizontally centered
         ════════════════════════════════════════════════════════════ */}
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

        {/* Headline — fluid size 48 → 90px */}
        <h1 className="font-extrabold text-white leading-[1.04] tracking-tight mb-7 max-w-5xl"
          style={{ fontSize: "clamp(44px, 6vw, 90px)" }}>
          Trade Global Markets<br />
          <span className="text-[#00CC44]">with Confidence.</span>
        </h1>

        {/* Sub-headline — fluid 17 → 21px */}
        <p className="text-white/48 max-w-2xl leading-relaxed mb-11"
          style={{ fontSize: "clamp(17px, 1.5vw, 21px)" }}>
          Access Forex, Metals, Indices, Stocks and Crypto CFDs on MetaTrader&nbsp;4 with competitive spreads, fast execution, and accounts from $10.
        </p>

        {/* CTA buttons */}
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

        {/* Micro-link */}
        <Link href="/company/promotions"
          className="text-[12px] text-white/22 hover:text-[#00CC44] transition-colors uppercase tracking-widest">
          View promotions →
        </Link>

        {/* Stats row */}
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
