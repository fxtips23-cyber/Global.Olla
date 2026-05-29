import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  ScaleIn,
  StaggerChildren,
  fadeUpItem,
} from "../../../components/ui/Animate";

/* ─── Metadata ──────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "pt"
    ? {
        title: "MetaTrader 5 (MT5) — Plataforma de Trading | Olla Trade",
        description:
          "Opere no MetaTrader 5 com a Olla Trade. Disponível para Windows, WebTrader, iOS e Android. Gráficos avançados, suporte a EA e execução rápida.",
      }
    : {
        title: "MetaTrader 5 (MT5) Trading Platform | Olla Trade",
        description:
          "Trade on MetaTrader 5 with Olla Trade. Available on Windows, WebTrader, iOS and Android. Advanced charting, EA support, and fast execution.",
      };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─── SVG Visual: MT5 Interface Mockup ──────────────────────────────── */
const mt5Candles = [
  [30,38,26,36],[36,45,32,42],[42,48,37,44],[44,52,40,50],[50,58,46,55],
  [55,60,50,52],[52,61,49,58],[58,65,54,62],[62,68,57,64],[64,72,60,70],
  [70,75,65,68],[68,76,64,74],[74,80,70,78],[78,84,74,82],[82,88,78,86],
  [86,91,82,84],[84,92,81,90],[90,95,86,93],[93,97,89,95],[95,99,91,93],
  [93,98,90,96],[96,100,92,99],[99,100,95,97],[97,100,93,100],[100,100,96,99],
];

function MT5Mockup() {
  const W = 860;
  const H = 500;
  const titleH = 24;
  const menuH = 18;
  const toolH = 24;
  const headerH = titleH + menuH + toolH;
  const mwW = 120;
  const orderH = 110;
  const chartW = W - mwW - 200;
  const chartH = H - headerH - 60;
  const orderPanelX = mwW + chartW;
  const orderPanelW = 200;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto block"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer frame */}
      <rect width={W} height={H} fill="#07111F" rx="10" />

      {/* Title bar */}
      <rect width={W} height={titleH} fill="#0F1E2E" rx="10" />
      <rect x="0" y="12" width={W} height={titleH - 12} fill="#0F1E2E" />
      <circle cx="14" cy="12" r="4" fill="#FF5F57" opacity="0.8" />
      <circle cx="26" cy="12" r="4" fill="#FEBC2E" opacity="0.8" />
      <circle cx="38" cy="12" r="4" fill="#28C840" opacity="0.8" />
      <text x={W / 2} y="16" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="monospace" textAnchor="middle">
        MetaTrader 5 — Olla Trade
      </text>
      {/* Traffic-light end */}
      <text x={W - 12} y="16" fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace" textAnchor="end">×</text>

      {/* Menu bar */}
      <rect y={titleH} width={W} height={menuH} fill="#0C1928" />
      {["File","View","Insert","Charts","Tools","Window","Help"].map((m, i) => (
        <text key={m} x={8 + i * 50} y={titleH + 12} fontSize="7.5" fill="rgba(255,255,255,0.35)" fontFamily="'Segoe UI',sans-serif">{m}</text>
      ))}

      {/* Toolbar */}
      <rect y={titleH + menuH} width={W} height={toolH} fill="#0A1520" />
      {/* New Order button */}
      <rect x="8" y={titleH + menuH + 4} width="62" height="16" rx="3" fill="#1A90C3" />
      <text x="39" y={titleH + menuH + 14.5} fontSize="7.5" fill="white" fontFamily="'Segoe UI',sans-serif" textAnchor="middle" fontWeight="bold">+ New Order</text>
      {/* Timeframes */}
      {["M1","M5","M15","H1","H4","D1","W1"].map((tf, i) => {
        const active = tf === "H4";
        return (
          <g key={tf}>
            <rect x={78 + i * 26} y={titleH + menuH + 4} width="22" height="16" rx="2"
              fill={active ? "rgba(26,144,195,0.25)" : "rgba(255,255,255,0.04)"}
              stroke={active ? "rgba(26,144,195,0.5)" : "transparent"} strokeWidth="0.5" />
            <text x={78 + i * 26 + 11} y={titleH + menuH + 14.5} fontSize="7"
              fill={active ? "#1A90C3" : "rgba(255,255,255,0.28)"}
              fontFamily="monospace" textAnchor="middle" fontWeight={active ? "bold" : "normal"}>{tf}</text>
          </g>
        );
      })}

      {/* Market Watch panel */}
      <rect y={headerH} x="0" width={mwW} height={H - headerH} fill="#0D1C2A" />
      <rect y={headerH} width={mwW} height="16" fill="#112233" />
      <text x="6" y={headerH + 11} fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="'Segoe UI',sans-serif" fontWeight="bold">Market Watch</text>
      {[
        { s: "EURUSD", b: "1.0848", a: "1.0849", up: true, act: true },
        { s: "GBPUSD", b: "1.2738", a: "1.2740", up: true, act: false },
        { s: "USDJPY", b: "156.22", a: "156.24", up: false, act: false },
        { s: "XAUUSD", b: "2324.5", a: "2325.1", up: false, act: false },
        { s: "US30",   b: "39415", a: "39425",  up: true, act: false },
        { s: "BTCUSD", b: "67812", a: "67830",  up: true, act: false },
        { s: "EURCAD", b: "1.4781", a: "1.4784", up: true, act: false },
        { s: "NZDUSD", b: "0.6134", a: "0.6136", up: false, act: false },
      ].map((r, i) => {
        const ry = headerH + 16 + i * 16;
        return (
          <g key={r.s}>
            {r.act && <rect x="0" y={ry} width={mwW} height="16" fill="rgba(26,144,195,0.08)" />}
            <line x1="0" y1={ry + 16} x2={mwW} y2={ry + 16} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            <text x="4" y={ry + 11} fontSize="7" fill={r.act ? "#1A90C3" : "rgba(255,255,255,0.55)"} fontFamily="monospace" fontWeight={r.act ? "bold" : "normal"}>{r.s}</text>
            <text x={mwW - 3} y={ry + 11} fontSize="6.5" fill={r.up ? "#26a69a" : "#ef5350"} fontFamily="monospace" textAnchor="end">{r.b}</text>
          </g>
        );
      })}

      {/* Chart area */}
      <rect x={mwW} y={headerH} width={chartW} height={chartH} fill="#060F1A" />
      {/* Grid */}
      {[0.2, 0.4, 0.6, 0.8].map((f) => (
        <line key={f} x1={mwW} y1={headerH + chartH * f} x2={mwW + chartW} y2={headerH + chartH * f}
          stroke="rgba(255,255,255,0.03)" strokeWidth="0.7" />
      ))}
      {/* Candles */}
      {mt5Candles.map(([o, hi, lo, c], i) => {
        const bull = c >= o;
        const col = bull ? "#26a69a" : "#ef5350";
        const slW = chartW / mt5Candles.length;
        const bw = Math.max(slW * 0.6, 3);
        const cx = mwW + i * slW + slW / 2;
        const yS = (v: number) => headerH + (1 - v / 100) * chartH;
        const bT = yS(Math.max(o, c));
        const bH = Math.max(Math.abs(c - o) / 100 * chartH, 1.5);
        return (
          <g key={i}>
            <line x1={cx} y1={yS(hi)} x2={cx} y2={yS(lo)} stroke={col} strokeWidth="0.9" opacity="0.85" />
            <rect x={cx - bw / 2} y={bT} width={bw} height={bH} fill={col} opacity="0.9" rx="0.3" />
          </g>
        );
      })}
      {/* MA line */}
      <polyline
        points={mt5Candles.map(([, , , c], i) =>
          `${mwW + i * (chartW / mt5Candles.length) + chartW / mt5Candles.length / 2},${headerH + (1 - c / 100) * chartH}`
        ).join(" ")}
        fill="none" stroke="#1A90C3" strokeWidth="1.2" opacity="0.65" strokeLinejoin="round"
      />
      {/* Current price dashed */}
      {(() => {
        const lastC = mt5Candles[mt5Candles.length - 1][3];
        const ly = headerH + (1 - lastC / 100) * chartH;
        return (
          <>
            <line x1={mwW} y1={ly} x2={mwW + chartW} y2={ly} stroke="#1A90C3" strokeWidth="0.7" strokeDasharray="4 3" opacity="0.6" />
            <rect x={mwW + chartW - 42} y={ly - 6} width="42" height="12" fill="#1A90C3" opacity="0.85" rx="2" />
            <text x={mwW + chartW - 21} y={ly + 4} fontSize="7" fill="white" fontFamily="monospace" textAnchor="middle">1.08472</text>
          </>
        );
      })()}
      {/* Chart right axis */}
      <rect x={mwW + chartW} y={headerH} width="36" height={chartH} fill="#0A1828" />
      {[0.2, 0.4, 0.6, 0.8].map((f, i) => (
        <text key={i} x={mwW + chartW + 34} y={headerH + chartH * f + 3} fontSize="6.5"
          fill="rgba(255,255,255,0.25)" fontFamily="monospace" textAnchor="end">
          {(1.0847 + (0.5 - f) * 0.005).toFixed(4)}
        </text>
      ))}

      {/* Order panel (right) */}
      <rect x={orderPanelX + 36} y={headerH} width={orderPanelW - 36} height={H - headerH} fill="#0C1C2C" />
      <rect x={orderPanelX + 36} y={headerH} width={orderPanelW - 36} height="16" fill="#102030" />
      <text x={orderPanelX + 36 + (orderPanelW - 36) / 2} y={headerH + 11} fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="'Segoe UI',sans-serif" textAnchor="middle" fontWeight="bold">New Order</text>

      {/* Symbol row */}
      <rect x={orderPanelX + 40} y={headerH + 22} width={orderPanelW - 44} height="24" rx="3" fill="#0F1E2E" stroke="rgba(26,144,195,0.3)" strokeWidth="0.5" />
      <text x={orderPanelX + 44} y={headerH + 38} fontSize="8" fill="rgba(255,255,255,0.6)" fontFamily="monospace">EURUSD</text>

      {/* Buy / Sell buttons */}
      <rect x={orderPanelX + 40} y={headerH + 52} width={(orderPanelW - 44) / 2 - 2} height="24" rx="3" fill="#26a69a" />
      <text x={orderPanelX + 40 + (orderPanelW - 44) / 4 - 1} y={headerH + 68} fontSize="8" fill="white" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BUY</text>
      <text x={orderPanelX + 40 + (orderPanelW - 44) / 4 - 1} y={headerH + 60} fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="monospace" textAnchor="middle">1.08479</text>

      <rect x={orderPanelX + 40 + (orderPanelW - 44) / 2 + 2} y={headerH + 52} width={(orderPanelW - 44) / 2 - 2} height="24" rx="3" fill="#ef5350" />
      <text x={orderPanelX + 40 + (orderPanelW - 44) * 3 / 4 + 1} y={headerH + 68} fontSize="8" fill="white" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SELL</text>
      <text x={orderPanelX + 40 + (orderPanelW - 44) * 3 / 4 + 1} y={headerH + 60} fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="monospace" textAnchor="middle">1.08467</text>

      {/* Volume row */}
      <text x={orderPanelX + 44} y={headerH + 94} fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="monospace">Volume</text>
      <rect x={orderPanelX + 40} y={headerH + 98} width={orderPanelW - 44} height="18" rx="3" fill="#0F1E2E" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <text x={orderPanelX + 44} y={headerH + 110} fontSize="8" fill="rgba(255,255,255,0.6)" fontFamily="monospace">0.10 lot</text>

      {/* SL / TP rows */}
      {["Stop Loss", "Take Profit"].map((lbl, i) => (
        <g key={lbl}>
          <text x={orderPanelX + 44} y={headerH + 132 + i * 28} fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace">{lbl}</text>
          <rect x={orderPanelX + 40} y={headerH + 136 + i * 28} width={orderPanelW - 44} height="16" rx="3" fill="#0F1E2E" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x={orderPanelX + 44} y={headerH + 147 + i * 28} fontSize="7.5" fill="rgba(255,255,255,0.45)" fontFamily="monospace">{i === 0 ? "1.07900" : "1.09200"}</text>
        </g>
      ))}

      {/* "Place Order" button */}
      <rect x={orderPanelX + 40} y={headerH + 200} width={orderPanelW - 44} height="22" rx="4" fill="#1A90C3" />
      <text x={orderPanelX + 36 + (orderPanelW - 36) / 2} y={headerH + 215} fontSize="8.5" fill="white" fontFamily="'Segoe UI',sans-serif" textAnchor="middle" fontWeight="bold">Place Order</text>

      {/* Bottom terminal */}
      <rect y={headerH + chartH} width={W} height={H - headerH - chartH} fill="#070F1A" />
      <line x1="0" y1={headerH + chartH} x2={W} y2={headerH + chartH} stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      {["Trade","History","News","Alerts","Mailbox"].map((t, i) => {
        const act = i === 0;
        return (
          <g key={t}>
            {act && <line x1={6 + i * 64} y1={headerH + chartH + 16} x2={6 + i * 64 + t.length * 5} y2={headerH + chartH + 16} stroke="#1A90C3" strokeWidth="1.5" />}
            <text x={6 + i * 64} y={headerH + chartH + 13} fontSize="7.5" fill={act ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.25)"} fontFamily="'Segoe UI',sans-serif" fontWeight={act ? "bold" : "normal"}>{t}</text>
          </g>
        );
      })}

      {/* Trade rows in terminal */}
      {[
        { order: "23562917", type: "buy",  sym: "EURUSD", lots: "0.50", open: "1.08234", prof: "+$136.00", pos: true },
        { order: "23562918", type: "sell", sym: "GBPUSD", lots: "0.30", open: "1.25987", prof: "-$420.10", pos: false },
      ].map((tr, i) => {
        const ry = headerH + chartH + 22 + i * 14;
        return (
          <g key={tr.order}>
            <line x1="0" y1={ry + 14} x2={W} y2={ry + 14} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <text x="6"   y={ry + 10} fontSize="6.5" fill="rgba(255,255,255,0.3)"  fontFamily="monospace">{tr.order}</text>
            <text x="65"  y={ry + 10} fontSize="6.5" fill={tr.type === "buy" ? "#26a69a" : "#ef5350"} fontFamily="monospace">{tr.type}</text>
            <text x="95"  y={ry + 10} fontSize="6.5" fill="rgba(255,255,255,0.5)"  fontFamily="monospace">{tr.sym}</text>
            <text x="145" y={ry + 10} fontSize="6.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace">{tr.lots}</text>
            <text x="190" y={ry + 10} fontSize="6.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace">{tr.open}</text>
            <text x={W - 40} y={ry + 10} fontSize="6.5" fill={tr.pos ? "#26a69a" : "#ef5350"} fontFamily="monospace" textAnchor="end">{tr.prof}</text>
          </g>
        );
      })}

      {/* Status bar */}
      <rect y={H - 12} width={W} height="12" fill="#060E18" />
      <text x="6" y={H - 4} fontSize="6" fill="rgba(255,255,255,0.25)" fontFamily="monospace">
        Balance: 10 000.00 USD  ·  Equity: 9 762.90  ·  Margin: 1 625.40  ·  Free: 8 137.50  ·  Margin level: 601.08%
      </text>
      <text x={W - 6} y={H - 4} fontSize="6" fill="#1A90C3" fontFamily="monospace" textAnchor="end">● Connected</text>
    </svg>
  );
}

/* ─── MT5 Feature Highlights SVG (Section 4 right panel) ────────────── */
function MT5FeatureSVG() {
  return (
    <svg viewBox="0 0 480 360" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="360" fill="#07111F" rx="12" />

      {/* Top row of stats */}
      {[
        { label: "Timeframes", value: "21" },
        { label: "Indicators", value: "80+" },
        { label: "Instruments", value: "500+" },
        { label: "Order Types", value: "6" },
      ].map(({ label, value }, i) => {
        const x = 20 + i * 110;
        return (
          <g key={label}>
            <rect x={x} y="16" width="96" height="52" rx="8" fill="#0F1E2E" stroke="rgba(26,144,195,0.15)" strokeWidth="0.8" />
            <text x={x + 48} y="42" fontSize="18" fill="#1A90C3" fontFamily="monospace" textAnchor="middle" fontWeight="bold">{value}</text>
            <text x={x + 48} y="57" fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="'Segoe UI',sans-serif" textAnchor="middle">{label}</text>
          </g>
        );
      })}

      {/* Mini chart */}
      <rect x="16" y="84" width="290" height="160" rx="8" fill="#060F1A" />
      <text x="24" y="100" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="monospace">EURUSD · H4 · 21 Timeframes</text>
      {mt5Candles.slice(5).map(([o, hi, lo, c], i) => {
        const bull = c >= o;
        const col = bull ? "#26a69a" : "#ef5350";
        const slW = 290 / 20;
        const cx = 16 + i * slW + slW / 2;
        const yS = (v: number) => 108 + (1 - v / 100) * 128;
        const bT = yS(Math.max(o, c));
        const bH = Math.max(Math.abs(c - o) / 100 * 128, 1.5);
        const bw = Math.max(slW * 0.6, 2.5);
        return (
          <g key={i}>
            <line x1={cx} y1={yS(hi)} x2={cx} y2={yS(lo)} stroke={col} strokeWidth="0.8" opacity="0.85" />
            <rect x={cx - bw / 2} y={bT} width={bw} height={bH} fill={col} opacity="0.9" rx="0.3" />
          </g>
        );
      })}
      <polyline
        points={mt5Candles.slice(5).map(([, , , c], i) =>
          `${16 + i * (290 / 20) + (290 / 20) / 2},${108 + (1 - c / 100) * 128}`
        ).join(" ")}
        fill="none" stroke="#1A90C3" strokeWidth="1.1" opacity="0.6" strokeLinejoin="round"
      />

      {/* Indicators labels */}
      {["RSI(14)", "MACD(12,26)", "BB(20)"].map((ind, i) => (
        <g key={ind}>
          <rect x="16" y={246 + i * 20} width="290" height="16" fill="#060C15" />
          <line x1="16" y1={246 + i * 20} x2="306" y2={246 + i * 20} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          <text x="24" y={246 + i * 20 + 11} fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace">{ind}</text>
          {Array.from({ length: 15 }).map((_, j) => {
            const v = (Math.sin(j * 0.5 + i * 2) * 4 + 4);
            return (
              <rect key={j} x={90 + j * 14} y={246 + i * 20 + 8 - v / 2} width="10" height={Math.max(v, 1)}
                fill={i === 0 ? "#1A90C3" : i === 1 ? "#f59e0b" : "#8b5cf6"} opacity="0.55" rx="0.5" />
            );
          })}
        </g>
      ))}

      {/* EA / Algo panel (right) */}
      <rect x="318" y="84" width="148" height="220" rx="8" fill="#0C1A28" />
      <rect x="318" y="84" width="148" height="22" rx="8" fill="#112233" />
      <rect x="318" y="96" width="148" height="10" fill="#112233" />
      <text x="392" y="99" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="'Segoe UI',sans-serif" textAnchor="middle" fontWeight="bold">Expert Advisors</text>

      {[
        { name: "ScOllagEA", status: "Running", up: true },
        { name: "GridBot v2",  status: "Running", up: true },
        { name: "NewsFilter",  status: "Paused",  up: false },
      ].map(({ name, status, up }, i) => {
        const ry = 112 + i * 36;
        return (
          <g key={name}>
            <rect x="326" y={ry} width="132" height="28" rx="5" fill="#0F1E2E" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <circle cx="336" cy={ry + 14} r="4" fill={up ? "#26a69a" : "#f59e0b"} opacity="0.9" />
            <text x="345" y={ry + 11} fontSize="7.5" fill="rgba(255,255,255,0.7)" fontFamily="monospace">{name}</text>
            <text x="345" y={ry + 22} fontSize="6.5" fill={up ? "#26a69a" : "#f59e0b"} fontFamily="monospace">{status}</text>
          </g>
        );
      })}

      {/* Copy trading */}
      <rect x="326" y="224" width="132" height="40" rx="5" fill="#0F1E2E" stroke="rgba(26,144,195,0.2)" strokeWidth="0.5" />
      <text x="392" y="242" fontSize="7.5" fill="#1A90C3" fontFamily="'Segoe UI',sans-serif" textAnchor="middle" fontWeight="bold">Copy Trading</text>
      <text x="392" y="256" fontSize="6.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace" textAnchor="middle">Follow top traders</text>

      {/* Bottom row: platform badges */}
      <rect x="16" y="316" width="448" height="32" rx="6" fill="#0C1828" />
      {[
        { label: "MT5 Desktop", icon: "⊞" },
        { label: "WebTrader", icon: "⊕" },
        { label: "iOS", icon: "" },
        { label: "Android", icon: "◈" },
      ].map(({ label, icon }, i) => (
        <g key={label}>
          <text x={16 + i * 116 + 58} y="335" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="'Segoe UI',sans-serif" textAnchor="middle">
            {icon} {label}
          </text>
          {i < 3 && <line x1={16 + (i + 1) * 116} y1="320" x2={16 + (i + 1) * 116} y2="344" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" />}
        </g>
      ))}
    </svg>
  );
}

/* ─── Page Component ─────────────────────────────────────────────────── */
export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isPt = locale === "pt";

  /* ── 1. HERO ── */
  return (
    <>
      {/* ═══════════════════════════════ SECTION 1 — HERO ═══════════════════════════════ */}
      <section className="hero-navy relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(26,144,195,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="container-wide relative section-py">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text + CTAs */}
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-[#1A90C3]/10 border border-[#1A90C3]/25 text-[#1A90C3] text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                {isPt ? "Plataforma de Trading" : "Trading Platform"}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-tight mb-5">
                {isPt
                  ? "MetaTrader 5 — Trading Profissional"
                  : "MetaTrader 5 — Professional Trading"}
              </h1>

              <p className="text-[17px] text-white/50 leading-relaxed mb-8 max-w-lg">
                {isPt
                  ? "O MT5 é a plataforma de trading mais avançada do mundo — com 21 períodos de tempo, 80+ indicadores, suporte completo a Expert Advisors e execução ultrarrápida."
                  : "MT5 is the world's most advanced trading platform — with 21 timeframes, 80+ indicators, full Expert Advisor support, and ultra-fast execution."}
              </p>

              {/* Download CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-primary btn-lg inline-flex items-center gap-2 justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z" />
                  </svg>
                  {isPt ? "MT5 para Windows" : "MT5 for Windows"}
                </Link>
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-secondary btn-lg inline-flex items-center gap-2 justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
                  </svg>
                  {isPt ? "MT5 WebTrader" : "MT5 WebTrader"}
                </Link>
                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className="btn-secondary btn-lg inline-flex items-center gap-2 justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.38.81 3.2.82.97-.06 1.95-.81 3.34-.87 1.98-.1 3.64.85 4.65 2.5-4.16 2.48-3.48 7.88.81 9.43zm-4.6-12.8c-.21-2.35 1.87-4.23 4.05-4.48.29 2.64-2.4 4.64-4.05 4.48z" />
                  </svg>
                  {isPt ? "MT5 Mobile" : "MT5 Mobile"}
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex gap-8">
                {[
                  { value: "21", label: isPt ? "Períodos de Tempo" : "Timeframes" },
                  { value: "80+", label: isPt ? "Indicadores" : "Indicators" },
                  { value: "500+", label: isPt ? "Instrumentos" : "Instruments" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="text-[12px] text-white/35">{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right: MT5 mockup */}
            <FadeIn delay={0.15}>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(26,144,195,0.07) 0%, transparent 70%)",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <MT5Mockup />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTION 2 — PLATFORM OPTIONS ═══════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide">
          <FadeUp className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
              {isPt ? "Escolha Sua Plataforma" : "Choose Your Platform"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
              {isPt ? "MT5 em Todos os Seus Dispositivos" : "MT5 on Every Device You Own"}
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-[16px] leading-relaxed">
              {isPt
                ? "Acesse os mercados globais de qualquer lugar — desktop, navegador ou smartphone."
                : "Access global markets from anywhere — desktop, browser, or smartphone."}
            </p>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z" />
                  </svg>
                ),
                title: isPt ? "MT5 Desktop" : "MT5 Desktop",
                subtitle: "Windows",
                desc: isPt
                  ? "A versão completa do MT5 com todos os recursos — suporte a EA, 21 períodos de tempo, 80+ indicadores e backtesting avançado."
                  : "The full MT5 experience with every feature — EA support, 21 timeframes, 80+ indicators, and advanced backtesting.",
                features: isPt
                  ? ["Suporte completo a Expert Advisors", "21 períodos de tempo", "80+ indicadores técnicos", "Strategy Tester integrado"]
                  : ["Full Expert Advisor support", "21 timeframes", "80+ technical indicators", "Built-in Strategy Tester"],
                cta: isPt ? "Baixar para Windows" : "Download for Windows",
                badge: isPt ? "Recomendado" : "Recommended",
                featured: true,
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
                  </svg>
                ),
                title: "MT5 WebTrader",
                subtitle: isPt ? "Sem instalação" : "No download",
                desc: isPt
                  ? "Opere diretamente no navegador sem instalar nada. Acesso completo a todos os mercados, dados em tempo real e execução instantânea."
                  : "Trade directly in your browser with nothing to install. Full access to all markets, real-time data, and instant execution.",
                features: isPt
                  ? ["Nenhum download necessário", "Todos os mercados disponíveis", "Dados em tempo real", "Funciona em Mac e Linux"]
                  : ["No download required", "All markets available", "Real-time data feeds", "Works on Mac and Linux"],
                cta: isPt ? "Abrir WebTrader" : "Open WebTrader",
                badge: isPt ? "Sem instalação" : "No install",
                featured: false,
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H7V4h10v14z" />
                  </svg>
                ),
                title: isPt ? "MT5 Mobile" : "MT5 Mobile",
                subtitle: "iOS & Android",
                desc: isPt
                  ? "Opere em qualquer lugar com o aplicativo MT5 para iOS e Android. Gestão completa de conta, alertas de preço e gráficos avançados."
                  : "Trade anywhere with the MT5 app for iOS and Android. Full account management, price alerts, and advanced charting.",
                features: isPt
                  ? ["Disponível para iOS e Android", "Gestão completa de conta", "Alertas de preço push", "Autenticação por biometria"]
                  : ["Available for iOS and Android", "Full account management", "Push price alerts", "Biometric authentication"],
                cta: isPt ? "Baixar Aplicativo" : "Download App",
                badge: "iOS & Android",
                featured: false,
              },
            ].map(({ icon, title, subtitle, desc, features, cta, badge, featured }) => (
              // @ts-expect-error framer-motion variant
              <div key={title} variants={fadeUpItem}
                className={`card card-hover flex flex-col ${featured ? "border-[#1A90C3]/30 ring-2 ring-[#1A90C3]/10" : ""}`}>
                {featured && (
                  <div className="mb-4">
                    <span className="badge" style={{ background: "#EBF5FB", color: "#1A90C3", border: "1px solid rgba(26,144,195,0.2)" }}>
                      ★ {badge}
                    </span>
                  </div>
                )}
                {!featured && (
                  <div className="mb-4">
                    <span className="badge badge-navy">{badge}</span>
                  </div>
                )}

                <div className="text-[#1A90C3] mb-4">{icon}</div>
                <h3 className="text-xl font-extrabold text-[#07111F] mb-0.5">{title}</h3>
                <div className="text-[12px] text-[#6B7280] mb-3 font-medium">{subtitle}</div>
                <p className="text-[14px] text-[#6B7280] leading-relaxed mb-5">{desc}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#374151]">
                      <svg className="w-4 h-4 text-[#1A90C3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://portal.ollatrade.com/auth/register"
                  className={featured ? "btn-primary" : "btn-secondary"}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTION 3 — PLATFORM FEATURES ═══════════════════════════════ */}
      <section className="section-py section-gray">
        <div className="container-wide">
          <FadeUp className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
              {isPt ? "Recursos da Plataforma" : "Platform Features"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
              {isPt ? "Tudo o Que Você Precisa para Operar" : "Everything You Need to Trade"}
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-[16px] leading-relaxed">
              {isPt
                ? "O MT5 foi criado para traders sérios — com ferramentas profissionais acessíveis para todos os níveis de experiência."
                : "MT5 was built for serious traders — delivering professional-grade tools accessible to every experience level."}
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M9 9l3 3 3-3 3 3" />
                  </svg>
                ),
                title: isPt ? "Gráficos Avançados" : "Advanced Charting",
                desc: isPt
                  ? "21 períodos de tempo, 80+ indicadores técnicos integrados e ferramentas de desenho avançadas para análise profissional."
                  : "21 timeframes, 80+ built-in technical indicators, and advanced drawing tools for professional analysis.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
                title: isPt ? "Expert Advisors" : "Expert Advisors",
                desc: isPt
                  ? "Suporte completo a EA e trading algorítmico com MQL5. Execute estratégias automatizadas 24h com backtesting integrado."
                  : "Full EA and algorithmic trading support via MQL5. Run automated strategies 24h with built-in backtesting.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: isPt ? "Execução Rápida" : "Fast Execution",
                desc: isPt
                  ? "Execução a mercado sem requotes. Ordens processadas com latência mínima em infraestrutura de nível institucional."
                  : "Market execution with no requotes. Orders processed with minimal latency on institutional-grade infrastructure.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                  </svg>
                ),
                title: isPt ? "Multi-Ativos" : "Multi-Asset",
                desc: isPt
                  ? "Opere 500+ instrumentos — forex, ações, índices, metais, energias, criptomoedas e futuros, tudo em uma única plataforma."
                  : "Trade 500+ instruments — forex, stocks, indices, metals, energies, crypto, and futures, all from one platform.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                ),
                title: isPt ? "Alertas de Preço" : "Price Alerts",
                desc: isPt
                  ? "Configure alertas de preço e notificações push em todos os dispositivos. Nunca perca um nível de entrada ou saída importante."
                  : "Set price alerts and push notifications across all devices. Never miss an important entry or exit level again.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: isPt ? "Copy Trading" : "Copy Trading",
                desc: isPt
                  ? "Siga e copie automaticamente as operações de traders experientes diretamente pela plataforma MT5."
                  : "Follow and automatically copy the trades of experienced traders directly within the MT5 platform.",
              },
            ].map(({ icon, title, desc }) => (
              // @ts-expect-error framer-motion variant
              <div key={title} variants={fadeUpItem} className="card card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] flex items-center justify-center text-[#1A90C3] mb-4 flex-shrink-0">
                  {icon}
                </div>
                <h3 className="text-[16px] font-bold text-[#07111F] mb-2">{title}</h3>
                <p className="text-[14px] text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTION 4 — WHY MT5 ═══════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <SlideLeft>
              <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-4">
                {isPt ? "Por Que MT5" : "Why MT5"}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-5 leading-tight">
                {isPt
                  ? "Por Que os Traders Escolhem o MT5"
                  : "Why Traders Choose MT5"}
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-8 text-[15px]">
                {isPt
                  ? "O MetaTrader 5 vai além do seu antecessor em capacidades — mais ativos, mais timeframes, execução aprimorada e ferramentas de análise mais profundas."
                  : "MetaTrader 5 goes beyond its predecessor in every capability — more assets, more timeframes, improved execution, and deeper analysis tools."}
              </p>

              <ul className="space-y-5">
                {[
                  {
                    title: isPt ? "Mais Ativos, Mais Oportunidades" : "More Assets, More Opportunities",
                    desc: isPt
                      ? "O MT5 suporta negociação de ações, futuros e forex na mesma conta — o MT4 não."
                      : "MT5 supports stock, futures, and forex trading in the same account — MT4 does not.",
                  },
                  {
                    title: isPt ? "21 Períodos de Tempo" : "21 Timeframes",
                    desc: isPt
                      ? "De 1 minuto a 1 mês — 21 períodos de tempo vs. 9 no MT4, dando a você mais granularidade de análise."
                      : "From 1 minute to 1 month — 21 timeframes vs. 9 in MT4, giving you finer analysis granularity.",
                  },
                  {
                    title: isPt ? "MQL5 — Linguagem Mais Poderosa" : "MQL5 — More Powerful Language",
                    desc: isPt
                      ? "O MQL5 é orientado a objetos e mais rápido, tornando os EAs mais eficientes e estratégias mais complexas possíveis."
                      : "MQL5 is object-oriented and faster, making EAs more efficient and complex strategies possible.",
                  },
                  {
                    title: isPt ? "Depth of Market Integrado" : "Built-in Depth of Market",
                    desc: isPt
                      ? "Veja a liquidez disponível em cada nível de preço com o DOM integrado do MT5."
                      : "See available liquidity at each price level with MT5's built-in Depth of Market.",
                  },
                  {
                    title: isPt ? "Tester Multitarefa" : "Multi-Threaded Tester",
                    desc: isPt
                      ? "Execute backtests em múltiplos núcleos simultaneamente — resultados muito mais rápidos que o MT4."
                      : "Run backtests across multiple cores simultaneously — dramatically faster results than MT4.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EBF5FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#1A90C3]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#07111F] mb-0.5">{title}</div>
                      <div className="text-[13px] text-[#6B7280] leading-relaxed">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </SlideLeft>

            {/* Right: SVG feature highlights */}
            <SlideRight>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(26,144,195,0.06) 0%, transparent 70%)",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xl">
                  <MT5FeatureSVG />
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTION 5 — SYSTEM REQUIREMENTS ═══════════════════════════════ */}
      <section className="section-py section-gray">
        <div className="container-wide">
          <FadeUp className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
              {isPt ? "Requisitos do Sistema" : "System Requirements"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
              {isPt ? "Compatible com Praticamente Qualquer Dispositivo" : "Compatible with Almost Any Device"}
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-[16px] leading-relaxed">
              {isPt
                ? "O MT5 foi projetado para ser leve e acessível em hardware comum."
                : "MT5 is designed to be lightweight and accessible on everyday hardware."}
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z" />
                  </svg>
                ),
                title: "Windows",
                reqs: [
                  isPt ? "Windows 7 ou superior" : "Windows 7 or later",
                  "32-bit or 64-bit",
                  isPt ? "256 MB de RAM" : "256 MB RAM",
                  isPt ? "200 MB de espaço" : "200 MB disk space",
                  isPt ? "Conexão com a internet" : "Internet connection",
                ],
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
                  </svg>
                ),
                title: "WebTrader",
                reqs: [
                  isPt ? "Qualquer navegador moderno" : "Any modern browser",
                  "Chrome, Firefox, Safari",
                  "Edge, Opera",
                  isPt ? "JavaScript habilitado" : "JavaScript enabled",
                  isPt ? "Conexão estável" : "Stable connection",
                ],
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.38.81 3.2.82.97-.06 1.95-.81 3.34-.87 1.98-.1 3.64.85 4.65 2.5-4.16 2.48-3.48 7.88.81 9.43zm-4.6-12.8c-.21-2.35 1.87-4.23 4.05-4.48.29 2.64-2.4 4.64-4.05 4.48z" />
                  </svg>
                ),
                title: "iOS",
                reqs: [
                  "iOS 12.0 " + (isPt ? "ou superior" : "or later"),
                  "iPhone, iPad",
                  isPt ? "Disponível na App Store" : "Available on App Store",
                  isPt ? "~50 MB de espaço" : "~50 MB space",
                  isPt ? "Conexão com a internet" : "Internet connection",
                ],
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5S11 23.33 11 22.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12a5.983 5.983 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                  </svg>
                ),
                title: "Android",
                reqs: [
                  "Android 4.4 " + (isPt ? "ou superior" : "or later"),
                  "Smartphone, Tablet",
                  isPt ? "Disponível no Google Play" : "Available on Google Play",
                  isPt ? "~50 MB de espaço" : "~50 MB space",
                  isPt ? "Conexão com a internet" : "Internet connection",
                ],
              },
            ].map(({ icon, title, reqs }) => (
              // @ts-expect-error framer-motion variant
              <div key={title} variants={fadeUpItem} className="card card-hover">
                <div className="text-[#1A90C3] mb-4">{icon}</div>
                <h3 className="text-[16px] font-bold text-[#07111F] mb-4">{title}</h3>
                <ul className="space-y-2">
                  {reqs.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-[13px] text-[#6B7280]">
                      <svg className="w-3.5 h-3.5 text-[#1A90C3] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTION 6 — FAQ ═══════════════════════════════ */}
      <section className="section-py bg-white">
        <div className="container-narrow">
          <FadeUp className="text-center mb-10">
            <div className="text-[11px] font-bold text-[#1A90C3] uppercase tracking-widest mb-3">
              {isPt ? "Perguntas Frequentes" : "FAQ"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07111F] mb-4">
              {isPt ? "Dúvidas Sobre o MT5" : "MT5 Questions Answered"}
            </h2>
            <p className="text-[#6B7280] text-[16px] leading-relaxed">
              {isPt
                ? "Tudo o que você precisa saber antes de baixar e começar a operar."
                : "Everything you need to know before downloading and getting started."}
            </p>
          </FadeUp>

          <ScaleIn>
            <div className="space-y-3">
              {[
                {
                  q: isPt ? "O que é o MetaTrader 5?" : "What is MetaTrader 5?",
                  a: isPt
                    ? "O MetaTrader 5 (MT5) é uma plataforma de trading desenvolvida pela MetaQuotes, usada por milhões de traders em todo o mundo. Ela oferece ferramentas avançadas de análise técnica, suporte a trading algorítmico via Expert Advisors (EAs), e acesso a múltiplas classes de ativos como forex, ações, futuros e criptomoedas."
                    : "MetaTrader 5 (MT5) is a trading platform developed by MetaQuotes, used by millions of traders worldwide. It offers advanced technical analysis tools, algorithmic trading support via Expert Advisors (EAs), and access to multiple asset classes including forex, stocks, futures, and crypto.",
                },
                {
                  q: isPt ? "O MT5 é gratuito?" : "Is MT5 free to use?",
                  a: isPt
                    ? "Sim, o MetaTrader 5 é completamente gratuito para download e uso. Você simplesmente precisa de uma conta na Olla Trade para se conectar à plataforma e começar a operar. Não há taxas de licença ou mensalidades pela plataforma em si."
                    : "Yes, MetaTrader 5 is completely free to download and use. You simply need an Olla Trade account to connect to the platform and start trading. There are no licensing fees or monthly charges for the platform itself.",
                },
                {
                  q: isPt ? "Posso usar Expert Advisors (EAs) no MT5?" : "Can I use Expert Advisors (EAs) on MT5?",
                  a: isPt
                    ? "Sim. O MT5 tem suporte completo a Expert Advisors, que são programas automatizados escritos em MQL5. Você pode desenvolver seus próprios EAs, adquirir EAs prontos no Marketplace do MetaTrader, ou instalar EAs de terceiros. O MT5 também inclui um Strategy Tester robusto para backtesting de estratégias."
                    : "Yes. MT5 has full Expert Advisor support — automated programs written in MQL5. You can develop your own EAs, purchase ready-made EAs from the MetaTrader Marketplace, or install third-party EAs. MT5 also includes a robust Strategy Tester for backtesting strategies.",
                },
                {
                  q: isPt ? "Qual a diferença entre MT4 e MT5?" : "What is the difference between MT4 and MT5?",
                  a: isPt
                    ? "O MT5 é a versão mais avançada: oferece 21 períodos de tempo (vs. 9 no MT4), mais de 80 indicadores integrados (vs. 30 no MT4), suporte a mais classes de ativos incluindo ações e futuros, uma linguagem de programação mais poderosa (MQL5 vs. MQL4), e um Strategy Tester multi-threaded mais rápido. A Olla Trade oferece apenas MT5, que é a plataforma atualmente recomendada."
                    : "MT5 is the more advanced version: it offers 21 timeframes (vs. 9 in MT4), 80+ built-in indicators (vs. 30 in MT4), support for more asset classes including stocks and futures, a more powerful programming language (MQL5 vs. MQL4), and a faster multi-threaded Strategy Tester. Olla Trade offers MT5 as its recommended platform.",
                },
                {
                  q: isPt ? "Posso usar o MT5 no meu celular?" : "Can I use MT5 on mobile?",
                  a: isPt
                    ? "Sim. O aplicativo MT5 está disponível gratuitamente para iOS (App Store) e Android (Google Play). O app mobile oferece as mesmas funcionalidades essenciais da versão desktop: gráficos em tempo real, execução de ordens, gestão de posições, alertas de preço e acesso ao histórico de conta."
                    : "Yes. The MT5 app is available free for iOS (App Store) and Android (Google Play). The mobile app provides the same core functionality as the desktop version: real-time charts, order execution, position management, price alerts, and account history access.",
                },
              ].map(({ q, a }, i) => (
                <details
                  key={i}
                  className="group border border-[#E5E7EB] rounded-xl overflow-hidden bg-white"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-[#F6F8FB] transition-colors">
                    <span className="text-[15px] font-semibold text-[#07111F]">{q}</span>
                    <svg
                      className="w-5 h-5 text-[#6B7280] flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-[14px] text-[#6B7280] leading-relaxed border-t border-[#E5E7EB] pt-4">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTION 7 — CTA ═══════════════════════════════ */}
      <section className="hero-navy relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(26,144,195,0.1) 0%, transparent 65%)",
          }}
        />

        <div className="container-narrow relative section-py text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#1A90C3]/10 border border-[#1A90C3]/25 text-[#1A90C3] text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              {isPt ? "Comece Agora" : "Get Started"}
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              {isPt
                ? "Baixe o MT5 e Comece a Operar Hoje"
                : "Download MT5 and Start Trading Today"}
            </h2>

            <p className="text-[17px] text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
              {isPt
                ? "Abra uma conta na Olla Trade, conecte ao MT5 e acesse 500+ instrumentos com spreads competitivos e execução rápida."
                : "Open an Olla Trade account, connect to MT5, and access 500+ instruments with competitive spreads and fast execution."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-lg inline-flex items-center gap-2 justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4" />
                </svg>
                {isPt ? "Criar Conta e Baixar MT5" : "Create Account & Download MT5"}
              </Link>
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-secondary btn-lg inline-flex items-center gap-2 justify-center"
              >
                {isPt ? "Abrir Conta Demo" : "Open Demo Account"}
              </Link>
            </div>

            {/* Compliance note */}
            <p className="text-[12px] text-white/25 max-w-xl mx-auto leading-relaxed">
              {isPt
                ? "Olla Capital Financial Services L.L.C. · Licenciado pela UAE SCA · Nº 20200000416 · O trading envolve risco. O capital pode estar em risco."
                : "Olla Capital Financial Services L.L.C. · UAE SCA Licensed · No. 20200000416 · Trading involves risk. Capital may be at risk."}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
