import { platformFaqs } from "../../../data/faqs";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import FAQSection from "../../../components/ui/FAQSection";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import { setRequestLocale } from "next-intl/server";
import {
  IconBarChart, IconCode, IconBell, IconLayers, IconClock,
  IconActivity, IconMonitor, IconGlobe, IconServer, IconSettings, IconShieldCheck,
} from "../../../components/ui/Icons";

export const metadata: Metadata = {
  title: "MetaTrader 4 (MT4) Platform",
  description:
    "Trade on MetaTrader 4 with Olla Trade. Available on Windows, WebTrader, iOS and Android. Advanced charting, EA support, and fast execution.",
};

/* ══════════════════════════════════════════════════════════════════
   VISUAL 1 — Original 4-chart desktop trading workstation
   Dark institutional fintech style · Olla Trade green accents
   ══════════════════════════════════════════════════════════════════ */

/* OHLC candle arrays: [open, high, low, close] as 0-100 scale (100=top) */
const chart1Candles = [ /* EURUSD H4 — uptrend */
  [28,35,24,33],[33,42,30,40],[40,44,35,38],[38,47,35,45],[45,52,42,50],
  [50,54,46,48],[48,57,46,55],[55,62,52,60],[60,65,56,62],[62,70,59,68],
  [68,72,63,66],[66,74,63,72],[72,78,68,76],[76,82,72,80],[80,87,77,85],
  [85,89,81,83],[83,90,80,88],[88,93,85,91],[91,96,88,94],[94,98,90,92],
  [92,97,89,95],[95,100,92,98],[98,100,94,96],[96,100,93,99],[99,100,95,98],
];
const chart2Candles = [ /* GBPUSD H1 — ranging */
  [60,68,55,64],[64,70,60,62],[62,67,57,66],[66,72,62,68],[68,65,58,60],
  [60,66,56,64],[64,70,61,67],[67,63,55,57],[57,64,54,62],[62,69,58,65],
  [65,71,62,63],[63,68,59,67],[67,73,64,70],[70,67,60,62],[62,68,58,66],
  [66,72,63,69],[69,66,58,60],[60,67,57,65],[65,71,62,68],[68,74,65,72],
  [72,69,62,64],[64,70,61,68],[68,75,65,72],[72,69,64,67],[67,73,64,70],
];
const chart3Candles = [ /* USDJPY H4 — downtrend then recovery */
  [85,90,81,82],[82,85,76,78],[78,82,73,76],[76,80,71,74],[74,78,69,72],
  [72,76,67,70],[70,73,65,68],[68,72,63,70],[70,75,66,73],[73,70,63,65],
  [65,69,61,67],[67,72,63,70],[70,75,67,73],[73,70,65,67],[67,72,64,70],
  [70,76,67,74],[74,79,71,77],[77,82,74,80],[80,85,77,83],[83,88,80,86],
  [86,90,83,88],[88,92,85,90],[90,94,87,92],[92,96,89,94],[94,98,91,96],
];
const chart4Candles = [ /* XAUUSD H1 — strong uptrend */
  [20,28,17,26],[26,34,23,32],[32,38,29,36],[36,44,33,42],[42,48,38,46],
  [46,53,43,51],[51,57,48,55],[55,62,52,60],[60,66,57,64],[64,70,61,68],
  [68,74,65,72],[72,78,69,76],[76,82,73,80],[80,86,77,84],[84,90,81,88],
  [88,93,85,91],[91,97,88,95],[95,100,92,98],[98,100,95,97],[97,100,94,99],
  [99,100,96,98],[98,100,95,100],[100,100,96,99],[99,100,96,100],[100,100,97,99],
];

interface ChartConfig {
  pair: string; tf: string; price: string; chg: string; up: boolean;
  candles: number[][]; color: string;
}

const charts: ChartConfig[] = [
  { pair:"EURUSD", tf:"H4", price:"1.08472", chg:"+18p ▲", up:true,  candles:chart1Candles, color:"#00CC44" },
  { pair:"GBPUSD", tf:"H1", price:"1.27384", chg:"-6p ▼",  up:false, candles:chart2Candles, color:"#1E88E5" },
  { pair:"USDJPY", tf:"H4", price:"156.234", chg:"+42p ▲", up:true,  candles:chart3Candles, color:"#00CC44" },
  { pair:"XAUUSD", tf:"H1", price:"2,324.5", chg:"+8p ▲",  up:true,  candles:chart4Candles, color:"#f59e0b" },
];

const mw = [
  { s:"EURUSD", b:"1.08467", a:"1.08479", up:true,  act:true  },
  { s:"GBPUSD", b:"1.27376", a:"1.27392", up:true,  act:false },
  { s:"USDJPY", b:"156.220", a:"156.238", up:false, act:false },
  { s:"XAUUSD", b:"2323.8",  a:"2324.3",  up:false, act:false },
  { s:"US30",   b:"39415",   a:"39425",   up:true,  act:false },
  { s:"BTCUSD", b:"67,795",  a:"67,829",  up:true,  act:false },
  { s:"EURCAD", b:"1.47812", a:"1.47836", up:true,  act:false },
  { s:"AUDUSD", b:"0.65123", a:"0.65138", up:false, act:false },
];

function ChartPanel({ cfg, x, y, w, h }: { cfg: ChartConfig; x:number; y:number; w:number; h:number }) {
  const titleH = 22;
  const cH = h - titleH;
  const axisW = 46;
  const cW = w - axisW;
  const n = cfg.candles.length;
  const slotW = cW / n;
  const bodyW = Math.max(slotW * 0.62, 3);

  return (
    <g>
      {/* Chart title bar */}
      <rect x={x} y={y} width={w} height={titleH} fill="#1A2838"/>
      <text x={x+6} y={y+14} fontSize="8" fill="rgba(255,255,255,0.75)" fontFamily="monospace" fontWeight="bold">{cfg.pair}, {cfg.tf}</text>
      <text x={x+w-axisW-4} y={y+14} fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="monospace">{cfg.price}</text>
      <text x={x+w-axisW+2} y={y+14} fontSize="7.5" fill={cfg.up?"#00CC44":"#ef5350"} fontFamily="monospace">{cfg.chg}</text>

      {/* Chart background */}
      <rect x={x} y={y+titleH} width={cW} height={cH} fill="#06101A"/>

      {/* Horizontal grid */}
      {[0.2,0.4,0.6,0.8].map(f=>(
        <line key={f} x1={x} y1={y+titleH+cH*f} x2={x+cW} y2={y+titleH+cH*f}
          stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>
      ))}

      {/* Candles */}
      {cfg.candles.map(([o,hi,lo,c],i)=>{
        const bull = c >= o;
        const col = bull ? "#26a69a" : "#ef5350";
        const cx = x + i*slotW + slotW/2;
        const yScale = (v:number) => y + titleH + (1 - v/100) * cH;
        const bT = yScale(Math.max(o,c));
        const bH = Math.max(Math.abs(c-o)/100*cH, 1.2);
        return (
          <g key={i}>
            <line x1={cx} y1={yScale(hi)} x2={cx} y2={yScale(lo)} stroke={col} strokeWidth="0.8" opacity="0.85"/>
            <rect x={cx-bodyW/2} y={bT} width={bodyW} height={bH} fill={col} opacity="0.9" rx="0.3"/>
          </g>
        );
      })}

      {/* MA line (smoothed) */}
      {(()=>{
        const pts = cfg.candles.map(([,,,c],i)=>{
          const cx = x + i*slotW + slotW/2;
          const cy = y + titleH + (1 - c/100)*cH;
          return `${cx},${cy}`;
        }).join(" ");
        return <polyline points={pts} fill="none" stroke={cfg.color} strokeWidth="1.2" opacity="0.6" strokeLinejoin="round"/>;
      })()}

      {/* Current price dashed line */}
      {(()=>{
        const lastC = cfg.candles[cfg.candles.length-1][3];
        const ly = y + titleH + (1 - lastC/100)*cH;
        return <line x1={x} y1={ly} x2={x+cW} y2={ly} stroke={cfg.up?"#00CC44":"#ef5350"} strokeWidth="0.7" strokeDasharray="4 3" opacity="0.7"/>;
      })()}

      {/* Right axis */}
      <rect x={x+cW} y={y+titleH} width={axisW} height={cH} fill="#0D1A25"/>
      {[0.2,0.4,0.5,0.6,0.8].map((f,i)=>(
        <text key={i} x={x+cW+axisW-2} y={y+titleH+cH*f+3} fontSize="6.5" fill="rgba(255,255,255,0.3)" fontFamily="monospace" textAnchor="end">
          {(+cfg.price.replace(/,/g,"") + (0.5-f)*0.008).toFixed(cfg.pair==="USDJPY"?2:cfg.pair==="XAUUSD"?1:4)}
        </text>
      ))}
    </g>
  );
}

function MT4WorkstationVisual() {
  const W = 1160;
  const H = 680;
  const titleH = 27;
  const menuH = 20;
  const toolbarH = 27;
  const headerTotal = titleH + menuH + toolbarH;
  const mwW = 138;
  const termH = 90;
  const chartAreaH = H - headerTotal - termH;
  const cW = W - mwW;
  const c1w = Math.floor(cW/2);
  const c2w = cW - c1w;
  const c1h = Math.floor(chartAreaH/2);
  const c2h = chartAreaH - c1h;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect width={W} height={H} fill="#08121C"/>

      {/* ── Title bar ── */}
      <rect width={W} height={titleH} fill="#1B2C3A"/>
      <rect x="6" y="8" width="11" height="11" rx="1.5" fill="#00CC44" opacity="0.7"/>
      <rect x="8" y="11" width="2" height="5" rx="0.5" fill="#00CC44"/>
      <rect x="11" y="10" width="2" height="7" rx="0.5" fill="#00CC44" opacity="0.6"/>
      <text x="24" y="17.5" fontSize="9" fill="rgba(255,255,255,0.55)" fontFamily="'Segoe UI',Arial,sans-serif">
        7866484: Olla Trade — Demo Account · [EURUSD,H4]
      </text>
      <text x={W-50} y="17.5" fontSize="10" fill="rgba(255,255,255,0.25)" fontFamily="monospace">─  □  ✕</text>

      {/* ── Menu bar ── */}
      <rect y={titleH} width={W} height={menuH} fill="#16242F"/>
      {["File","View","Insert","Charts","Tools","Window","Help"].map((m,i)=>(
        <text key={m} x={8+i*52} y={titleH+13.5} fontSize="8.5" fill="rgba(255,255,255,0.38)" fontFamily="'Segoe UI',Arial,sans-serif">{m}</text>
      ))}

      {/* ── Toolbar ── */}
      <rect y={titleH+menuH} width={W} height={toolbarH} fill="#13202C"/>
      {/* New Order button */}
      <rect x="8" y={titleH+menuH+5} width="64" height="17" rx="2" fill="#00CC44" opacity="0.9"/>
      <text x="40" y={titleH+menuH+16} fontSize="8" fill="black" fontFamily="'Segoe UI',Arial,sans-serif" textAnchor="middle" fontWeight="bold">⊕ New Order</text>
      {/* AutoTrading */}
      <rect x="78" y={titleH+menuH+5} width="60" height="17" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5"/>
      <text x="108" y={titleH+menuH+16} fontSize="7.5" fill="rgba(255,255,255,0.55)" fontFamily="'Segoe UI',Arial,sans-serif" textAnchor="middle">AutoTrading</text>
      {/* Timeframe pills */}
      {["M1","M5","M15","H1","H4","D1","W1"].map((tf,i)=>{
        const active = tf==="H4";
        return (
          <g key={tf}>
            <rect x={148+i*28} y={titleH+menuH+5} width="24" height="17" rx="2"
              fill={active?"rgba(0,204,68,0.2)":"rgba(255,255,255,0.04)"}
              stroke={active?"rgba(0,204,68,0.4)":"transparent"} strokeWidth="0.5"/>
            <text x={148+i*28+12} y={titleH+menuH+16} fontSize="7.5"
              fill={active?"#00CC44":"rgba(255,255,255,0.28)"}
              fontFamily="monospace" textAnchor="middle" fontWeight={active?"bold":"normal"}>{tf}</text>
          </g>
        );
      })}

      {/* ── Market Watch ── */}
      <rect y={headerTotal} width={mwW} height={chartAreaH} fill="#0E1A25"/>
      <rect y={headerTotal} width={mwW} height={17} fill="#152030"/>
      <text x="6" y={headerTotal+11.5} fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="bold">Market Watch</text>
      {/* Column headers */}
      <rect y={headerTotal+17} width={mwW} height={12} fill="#101D28"/>
      <text x="5"    y={headerTotal+26} fontSize="6.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">Symbol</text>
      <text x={mwW-35} y={headerTotal+26} fontSize="6.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">Bid</text>
      <text x={mwW-8} y={headerTotal+26} fontSize="6.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace" textAnchor="end">Ask</text>
      {/* Pairs */}
      {mw.map((r,i)=>{
        const ry = headerTotal+29+i*17;
        return (
          <g key={r.s}>
            {r.act && <rect y={ry} width={mwW} height="17" fill="rgba(0,204,68,0.07)"/>}
            <line x1="0" y1={ry+17} x2={mwW} y2={ry+17} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
            <text x="4" y={ry+11} fontSize="7.5" fill={r.act?"#00CC44":"rgba(255,255,255,0.6)"} fontFamily="monospace" fontWeight={r.act?"bold":"normal"}>{r.s}</text>
            <text x={mwW-34} y={ry+11} fontSize="7" fill={r.up?"#26a69a":"#ef5350"} fontFamily="monospace">{r.b}</text>
            <text x={mwW-3} y={ry+11} fontSize="7" fill={r.up?"#26a69a":"#ef5350"} fontFamily="monospace" textAnchor="end">{r.a}</text>
          </g>
        );
      })}

      {/* ── 4 Chart windows ── */}
      <ChartPanel cfg={charts[0]} x={mwW}    y={headerTotal}      w={c1w} h={c1h} />
      <ChartPanel cfg={charts[1]} x={mwW+c1w} y={headerTotal}      w={c2w} h={c1h} />
      <ChartPanel cfg={charts[2]} x={mwW}    y={headerTotal+c1h}  w={c1w} h={c2h} />
      <ChartPanel cfg={charts[3]} x={mwW+c1w} y={headerTotal+c1h}  w={c2w} h={c2h} />
      {/* Separator lines */}
      <line x1={mwW+c1w} y1={headerTotal} x2={mwW+c1w} y2={headerTotal+chartAreaH} stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1={mwW} y1={headerTotal+c1h} x2={W} y2={headerTotal+c1h} stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

      {/* ── Terminal panel ── */}
      <rect y={headerTotal+chartAreaH} width={W} height={termH} fill="#060F18"/>
      <line x1="0" y1={headerTotal+chartAreaH} x2={W} y2={headerTotal+chartAreaH} stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Tabs */}
      {["Trade","Exposure","Account History","News","Alerts","Mailbox"].map((t,i)=>{
        const act = i===0;
        const tx = 6+i*80;
        return (
          <g key={t}>
            {act && <line x1={tx} y1={headerTotal+chartAreaH+14} x2={tx+t.length*5.2} y2={headerTotal+chartAreaH+14} stroke="#00CC44" strokeWidth="1.5"/>}
            <text x={tx} y={headerTotal+chartAreaH+11} fontSize="8" fill={act?"rgba(255,255,255,0.75)":"rgba(255,255,255,0.25)"} fontFamily="'Segoe UI',Arial,sans-serif" fontWeight={act?"bold":"normal"}>{t}</text>
          </g>
        );
      })}
      {/* Trade rows */}
      {[
        {order:"23562917",time:"09:14:28",type:"buy", lots:"0.50",sym:"EURUSD",price:"1.08234",sl:"1.07900",tp:"1.08950",cur:"1.08472",prof:"+136.00",pos:true},
        {order:"23562918",time:"09:15:11",type:"sell",lots:"0.30",sym:"GBPUSD",price:"1.25987",sl:"1.26350",tp:"1.25000",cur:"1.27384",prof:"-420.10",pos:false},
        {order:"23562919",time:"09:15:45",type:"buy", lots:"0.20",sym:"XAUUSD",price:"2321.45",sl:"2305.00",tp:"2345.00",cur:"2323.8", prof:"+47.00",pos:true},
      ].map((tr,i)=>{
        const ry = headerTotal+chartAreaH+20+i*17;
        return (
          <g key={tr.order}>
            <line x1="0" y1={ry+17} x2={W} y2={ry+17} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
            {[tr.order,tr.time,tr.type,tr.lots,tr.sym,tr.price,tr.sl,tr.tp,tr.cur,tr.prof].map((v,ci)=>{
              const xs = [6,60,118,155,188,238,298,358,418,490];
              const col = ci===2?(tr.type==="buy"?"#26a69a":"#ef5350"):ci===9?(tr.pos?"#26a69a":"#ef5350"):"rgba(255,255,255,0.4)";
              return <text key={ci} x={xs[ci]} y={ry+11} fontSize="7" fill={col} fontFamily="monospace">{v}</text>;
            })}
          </g>
        );
      })}
      {/* Balance bar */}
      <rect y={H-16} width={W} height="16" fill="#0C1A25"/>
      <text x="6" y={H-5} fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="monospace">Balance: 10 000.00 USD  ·  Equity: 9 762.90  ·  Margin: 1 625.40  ·  Free margin: 8 137.50  ·  Margin level: 601.08%</text>
      <text x={W-48} y={H-5} fontSize="7" fill="#00CC44" fontFamily="monospace">● Live</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════
   VISUAL 2 — Original cross-device trading ecosystem
   Desktop monitor + phone + tablet composition
   ══════════════════════════════════════════════════════════════════ */
function CrossDeviceVisual() {
  return (
    <div className="relative w-full" style={{ background: "linear-gradient(135deg, #050C15 0%, #0A1828 60%, #081020 100%)", borderRadius: 20, overflow: "hidden", paddingBottom: "56%" }}>
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:16}).map((_,i)=><line key={`v${i}`} x1={i*54} y1="0" x2={i*54} y2="450" stroke="white" strokeWidth="0.5"/>)}
          {Array.from({length:9}).map((_,i)=><line key={`h${i}`} x1="0" y1={i*54} x2="800" y2={i*54} stroke="white" strokeWidth="0.5"/>)}
        </svg>

        {/* Green glow top-right */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(ellipse, rgba(0,204,68,0.06) 0%, transparent 70%)" }}/>

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 506" preserveAspectRatio="xMidYMid meet">

          {/* ── PHONE (left) ── */}
          {/* Frame */}
          <rect x="30" y="110" width="108" height="200" rx="14" fill="#0A0A0A" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <rect x="34" y="115" width="100" height="190" rx="11" fill="#0D1824"/>
          {/* Notch */}
          <rect x="72" y="117" width="24" height="5" rx="2.5" fill="#050A10"/>
          {/* Status bar */}
          <text x="40" y="131" fontSize="6" fill="rgba(255,255,255,0.5)" fontFamily="monospace">10:15</text>
          <text x="122" y="131" fontSize="6" fill="rgba(255,255,255,0.4)" fontFamily="monospace" textAnchor="end">●●●</text>
          {/* App header — green */}
          <rect x="34" y="133" width="100" height="18" fill="#00CC44"/>
          <text x="84" y="145" fontSize="7.5" fill="black" fontFamily="'Segoe UI',Arial,sans-serif" textAnchor="middle" fontWeight="bold">Quotes</text>
          {/* Column headers */}
          <rect x="34" y="151" width="100" height="11" fill="#081018"/>
          <text x="38" y="159" fontSize="6" fill="rgba(255,255,255,0.3)" fontFamily="monospace">Symbol</text>
          <text x="116" y="159" fontSize="6" fill="rgba(255,255,255,0.3)" fontFamily="monospace" textAnchor="end">Bid</text>
          {/* Pairs */}
          {[{s:"EURUSD",b:"1.08472",up:true,act:true},{s:"GBPUSD",b:"1.27384",up:true,act:false},{s:"USDJPY",b:"156.234",up:false,act:false},{s:"XAUUSD",b:"2,324.5",up:false,act:false},{s:"US30",  b:"39,425", up:true, act:false},{s:"BTCUSD",b:"67,812", up:true, act:false}].map((p,i)=>{
            const ry = 162+i*16;
            return (
              <g key={p.s}>
                {p.act&&<rect x="34" y={ry} width="100" height="16" fill="rgba(0,204,68,0.08)"/>}
                <line x1="34" y1={ry+16} x2="134" y2={ry+16} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                <text x="38" y={ry+10} fontSize="7" fill={p.act?"#00CC44":"rgba(255,255,255,0.65)"} fontFamily="monospace" fontWeight={p.act?"bold":"normal"}>{p.s}</text>
                <text x="130" y={ry+10} fontSize="7" fill={p.up?"#26a69a":"#ef5350"} fontFamily="monospace" textAnchor="end">{p.b}</text>
              </g>
            );
          })}
          {/* Bottom nav */}
          <rect x="34" y="295" width="100" height="20" fill="#060E18"/>
          <line x1="34" y1="295" x2="134" y2="295" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
          {["Quotes","Chart","Trade","History"].map((n,i)=>{
            const act=i===0;
            return <text key={n} x={47+i*25} y="308" fontSize="6" fill={act?"#00CC44":"rgba(255,255,255,0.25)"} fontFamily="'Segoe UI',Arial,sans-serif" textAnchor="middle">{n}</text>;
          })}
          {/* Home indicator */}
          <rect x="72" y="315" width="24" height="2.5" rx="1.5" fill="rgba(255,255,255,0.2)"/>

          {/* ── DESKTOP MONITOR (center, large) ── */}
          {/* Screen bezel */}
          <rect x="180" y="30" width="470" height="340" rx="8" fill="#0E0E0E" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          {/* Screen */}
          <rect x="185" y="35" width="460" height="330" rx="5" fill="#08121C"/>
          {/* Title bar */}
          <rect x="185" y="35" width="460" height="20" rx="5" fill="#1B2C3A"/>
          <rect x="185" y="45" width="460" height="10" fill="#1B2C3A"/>
          <text x="200" y="48.5" fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="monospace">7866484: Olla Trade — Demo Account · [EURUSD,H4]</text>
          <text x="632" y="48.5" fontSize="8" fill="rgba(255,255,255,0.2)" fontFamily="monospace">─ □ ✕</text>
          {/* Menu */}
          <rect x="185" y="55" width="460" height="14" fill="#16242F"/>
          {["File","View","Charts","Tools","Window","Help"].map((m,i)=><text key={m} x={192+i*44} y="64.5" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="'Segoe UI',Arial,sans-serif">{m}</text>)}
          {/* Toolbar */}
          <rect x="185" y="69" width="460" height="18" fill="#13202C"/>
          <rect x="190" y="72" width="48" height="12" rx="2" fill="#00CC44" opacity="0.9"/>
          <text x="214" y="80.5" fontSize="7" fill="black" fontFamily="monospace" textAnchor="middle" fontWeight="bold">New Order</text>
          {["M1","M5","H1","H4","D1"].map((tf,i)=>{
            const act=tf==="H4";
            return (
              <g key={tf}>
                <rect x={244+i*22} y="72" width="18" height="12" rx="2" fill={act?"rgba(0,204,68,0.2)":"rgba(255,255,255,0.04)"} stroke={act?"rgba(0,204,68,0.4)":"transparent"} strokeWidth="0.5"/>
                <text x={244+i*22+9} y="81" fontSize="7" fill={act?"#00CC44":"rgba(255,255,255,0.25)"} fontFamily="monospace" textAnchor="middle">{tf}</text>
              </g>
            );
          })}
          {/* Market Watch (left stripe) */}
          <rect x="185" y="87" width="90" height="238" fill="#0E1A25"/>
          <rect x="185" y="87" width="90" height="12" fill="#152030"/>
          <text x="190" y="96" fontSize="6.5" fill="rgba(255,255,255,0.45)" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="bold">Market Watch</text>
          {mw.slice(0,7).map((r,i)=>{
            const ry=99+i*14;
            return (
              <g key={r.s}>
                {r.act&&<rect x="185" y={ry} width="90" height="14" fill="rgba(0,204,68,0.07)"/>}
                <text x="188" y={ry+9} fontSize="6.5" fill={r.act?"#00CC44":"rgba(255,255,255,0.5)"} fontFamily="monospace">{r.s}</text>
                <text x="273" y={ry+9} fontSize="6.5" fill={r.up?"#26a69a":"#ef5350"} fontFamily="monospace" textAnchor="end">{r.b}</text>
              </g>
            );
          })}
          {/* Main chart area */}
          <rect x="275" y="87" width="370" height="238" fill="#060F1A"/>
          {[0.25,0.5,0.75].map(f=><line key={f} x1="275" y1={87+238*f} x2="645" y2={87+238*f} stroke="rgba(255,255,255,0.04)" strokeWidth="0.6"/>)}
          {/* EURUSD candles (scaled to chart area) */}
          {chart1Candles.map(([o,hi,lo,c],i)=>{
            const bull=c>=o;
            const col=bull?"#26a69a":"#ef5350";
            const cw2=370;
            const slW=cw2/chart1Candles.length;
            const bw=Math.max(slW*0.58,2.5);
            const cx2=275+i*slW+slW/2;
            const yS=(v:number)=>87+(1-v/100)*238;
            const bT2=yS(Math.max(o,c));
            const bH2=Math.max(Math.abs(c-o)/100*238,1);
            return (
              <g key={i}>
                <line x1={cx2} y1={yS(hi)} x2={cx2} y2={yS(lo)} stroke={col} strokeWidth="0.8" opacity="0.85"/>
                <rect x={cx2-bw/2} y={bT2} width={bw} height={bH2} fill={col} opacity="0.9" rx="0.3"/>
              </g>
            );
          })}
          {/* MA line */}
          <polyline
            points={chart1Candles.map(([,,,c],i)=>`${275+i*(370/chart1Candles.length)+7},${87+(1-c/100)*238}`).join(" ")}
            fill="none" stroke="#00CC44" strokeWidth="1" opacity="0.55" strokeLinejoin="round"/>
          {/* Price tag */}
          <rect x="608" y="116" width="35" height="10" rx="2" fill="#00CC44" opacity="0.2"/>
          <text x="625" y="124" fontSize="6.5" fill="#00CC44" fontFamily="monospace" textAnchor="middle">1.08472</text>
          <line x1="275" y1="120" x2="610" y2="120" stroke="#00CC44" strokeWidth="0.6" strokeDasharray="3 2" opacity="0.55"/>
          {/* Terminal */}
          <rect x="185" y="325" width="460" height="40" fill="#060E17"/>
          <line x1="185" y1="325" x2="645" y2="325" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
          {["Trade","Exposure","History","News","Alerts"].map((t,i)=>{
            const act=i===0;
            return (
              <g key={t}>
                {act&&<line x1={190+i*55} y1="337" x2={190+i*55+t.length*4.5} y2="337" stroke="#00CC44" strokeWidth="1"/>}
                <text x={190+i*55} y="334" fontSize="7" fill={act?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.22)"} fontFamily="'Segoe UI',Arial,sans-serif">{t}</text>
              </g>
            );
          })}
          {[["23562917","buy","0.50","EURUSD","1.08234","+136.00",true],["23562918","sell","0.30","GBPUSD","1.25987","-420.10",false]].map((tr,i)=>{
            const ry2=340+i*11;
            return (
              <g key={tr[0] as string}>
                <text x="190" y={ry2+8} fontSize="6.5" fill="rgba(255,255,255,0.3)" fontFamily="monospace">{tr[0]}</text>
                <text x="235" y={ry2+8} fontSize="6.5" fill={tr[1]==="buy"?"#26a69a":"#ef5350"} fontFamily="monospace">{tr[1]}</text>
                <text x="258" y={ry2+8} fontSize="6.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace">{tr[2]}</text>
                <text x="280" y={ry2+8} fontSize="6.5" fill="rgba(255,255,255,0.5)" fontFamily="monospace">{tr[3]}</text>
                <text x="320" y={ry2+8} fontSize="6.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace">{tr[4]}</text>
                <text x="580" y={ry2+8} fontSize="6.5" fill={tr[6]?"#26a69a":"#ef5350"} fontFamily="monospace" textAnchor="end">{tr[5]}</text>
              </g>
            );
          })}
          {/* Status bar */}
          <rect x="185" y="360" width="460" height="10" fill="#0C1A25"/>
          <text x="190" y="367.5" fontSize="6" fill="rgba(255,255,255,0.25)" fontFamily="monospace">Balance: 10 000.00 USD  ·  Equity: 9 762.90  ·  Free margin: 8 137.50</text>
          <text x="637" y="367.5" fontSize="6" fill="#00CC44" fontFamily="monospace" textAnchor="end">● Live</text>
          {/* Monitor stand */}
          <rect x="385" y="370" width="130" height="8" rx="2" fill="#0E0E0E"/>
          <rect x="380" y="376" width="140" height="5" rx="2" fill="#0A0A0A" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          <rect x="350" y="378" width="200" height="6" rx="3" fill="#0A0A0A" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          {/* Reflection */}
          <ellipse cx="415" cy="388" rx="110" ry="6" fill="rgba(255,255,255,0.04)"/>

          {/* ── TABLET (right) ── */}
          <rect x="680" y="60" width="165" height="245" rx="12" fill="#0A0A0A" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="686" y="68" width="153" height="229" rx="8" fill="#0D1E2C"/>
          {/* Camera dot */}
          <circle cx="762" cy="64" r="2" fill="#0F0F0F" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          {/* App header */}
          <rect x="686" y="68" width="153" height="20" fill="#00CC44"/>
          <text x="720" y="82" fontSize="8" fill="black" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="bold">H4</text>
          <text x="762" y="82" fontSize="8" fill="black" fontFamily="'Segoe UI',Arial,sans-serif" textAnchor="middle" fontWeight="bold">EURUSD ∨</text>
          <text x="829" y="82" fontSize="8" fill="black" fontFamily="monospace" textAnchor="end">⚙</text>
          {/* Chart header row */}
          <rect x="686" y="88" width="153" height="12" fill="#081520"/>
          <text x="690" y="97" fontSize="6.5" fill="rgba(255,255,255,0.4)" fontFamily="monospace">O:1.08390  H:1.08510  L:1.08350</text>
          {/* Chart area */}
          <rect x="686" y="100" width="153" height="140" fill="#060F1A"/>
          {[0.33,0.66].map(f=><line key={f} x1="686" y1={100+140*f} x2="839" y2={100+140*f} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>)}
          {chart1Candles.slice(10).map(([o,hi,lo,c],i)=>{
            const bull=c>=o;
            const col=bull?"#26a69a":"#ef5350";
            const slW=153/15;
            const cx2=686+i*slW+slW/2;
            const yS=(v:number)=>100+(1-v/100)*140;
            const bT2=yS(Math.max(o,c));
            const bH2=Math.max(Math.abs(c-o)/100*140,1);
            const bw=Math.max(slW*0.55,2);
            return (
              <g key={i}>
                <line x1={cx2} y1={yS(hi)} x2={cx2} y2={yS(lo)} stroke={col} strokeWidth="0.7" opacity="0.85"/>
                <rect x={cx2-bw/2} y={bT2} width={bw} height={bH2} fill={col} opacity="0.9" rx="0.3"/>
              </g>
            );
          })}
          <polyline
            points={chart1Candles.slice(10).map(([,,,c],i)=>`${686+i*(153/15)+5},${100+(1-c/100)*140}`).join(" ")}
            fill="none" stroke="#00CC44" strokeWidth="0.9" opacity="0.6" strokeLinejoin="round"/>
          {/* MACD area */}
          <rect x="686" y="240" width="153" height="30" fill="#060C15"/>
          <line x1="686" y1="240" x2="839" y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          <text x="690" y="249" fontSize="5.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">MACD(12,26,9)</text>
          {Array.from({length:12}).map((_,i)=>{
            const v=(Math.sin(i*0.5+1)*5);
            const pos=v>=0;
            const my=255+(pos?-Math.abs(v):0);
            return <rect key={i} x={690+i*11} y={my} width="7" height={Math.abs(v)} fill={pos?"#00CC44":"#ef5350"} opacity="0.65" rx="0.5"/>;
          })}
          {/* X-axis */}
          <rect x="686" y="270" width="153" height="11" fill="#050C15"/>
          {["1 Mar","8 Mar","15 Mar","22 Mar"].map((d,i)=><text key={d} x={690+i*37} y="279" fontSize="5.5" fill="rgba(255,255,255,0.2)" fontFamily="monospace">{d}</text>)}
          {/* Bottom nav */}
          <rect x="686" y="281" width="153" height="20" fill="#070F1A"/>
          <line x1="686" y1="281" x2="839" y2="281" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          {["Quotes","Chart","Trade","History"].map((n,i)=>{
            const act=i===1;
            return <text key={n} x={695+i*37} y="294" fontSize="6" fill={act?"#00CC44":"rgba(255,255,255,0.22)"} fontFamily="'Segoe UI',Arial,sans-serif" textAnchor="middle">{n}</text>;
          })}

          {/* ── Connecting line between devices ── */}
          <path d="M 134,218 C 158,218 175,198 185,180" stroke="rgba(0,204,68,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
          <path d="M 645,195 C 660,195 673,185 680,175" stroke="rgba(0,204,68,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 3"/>

          {/* ── Label badges ── */}
          {[{x:55,y:90,t:"MT4 Mobile"},{x:400,y:8,t:"MT4 Desktop"},{x:745,y:38,t:"MT4 Tablet"}].map(({x:bx,y:by,t})=>(
            <g key={t}>
              <rect x={bx-t.length*2.8} y={by} width={t.length*5.6} height="13" rx="6" fill="rgba(0,204,68,0.12)" stroke="rgba(0,204,68,0.25)" strokeWidth="0.5"/>
              <text x={bx} y={by+9} fontSize="6.5" fill="#00CC44" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="bold" textAnchor="middle">{t}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ─── Feature lists ──────────────────────────────────────────────── */
const features = [
  { Icon: IconBarChart, title: "30+ Technical Indicators",  desc: "Built-in MA, MACD, RSI, Bollinger Bands, Ichimoku, and 25+ more indicator types." },
  { Icon: IconCode,     title: "Expert Advisors (EAs)",     desc: "Full MQL4 automated trading support. Backtest strategies on historical price data before going live." },
  { Icon: IconBell,     title: "Custom Alerts",             desc: "Price, indicator, and margin alerts via MT4 desktop, mobile push, or email." },
  { Icon: IconLayers,   title: "Multi-Chart Layout",        desc: "Monitor multiple instruments and timeframes simultaneously on a single screen." },
  { Icon: IconClock,    title: "9 Chart Timeframes",        desc: "M1 through MN — candlestick, bar, and line chart types available." },
  { Icon: IconActivity, title: "One-Click Execution",       desc: "Direct chart trading with instant market order submission — no dialog required." },
  { Icon: IconSettings, title: "Full MQL4 Support",         desc: "Build, import, and run automated strategies written in MetaQuotes Language 4." },
  { Icon: IconServer,   title: "VPS Compatible",            desc: "Run MT4 and EAs on a Virtual Private Server for 24/5 uninterrupted trading." },
];

function WinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z"/></svg>;
}
function BrowserIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/></svg>;
}
function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.38.81 3.2.82.97-.06 1.95-.81 3.34-.87 1.98-.1 3.64.85 4.65 2.5-4.16 2.48-3.48 7.88.81 9.43zm-4.6-12.8c-.21-2.35 1.87-4.23 4.05-4.48.29 2.64-2.4 4.64-4.05 4.48z"/></svg>;
}
function AndroidIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5S11 23.33 11 22.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12a5.983 5.983 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg>;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default function PlatformPage() {
  const platforms = [
    { name:"Desktop",  sub:"Windows MT4",   tag:"Most popular", Icon:WinIcon     },
    { name:"WebTrader",sub:"Any browser",   tag:"No install",   Icon:BrowserIcon  },
    { name:"iOS",      sub:"iPhone & iPad", tag:"App Store",    Icon:AppleIcon    },
    { name:"Android",  sub:"All devices",   tag:"Google Play",  Icon:AndroidIcon  },
  ];

  return (
    <>
      <PageHero
        badge="MetaTrader 4"
        title="Trade on the World's Most Popular Platform"
        subtitle="MT4 gives you advanced charting, automated trading, real-time execution, and access to all global markets — on every device you own."
        breadcrumbs={[{ label: "Trading", href: "/trading" }, { label: "Platform" }]}
        cta={{ label: "Open MT4 Account", href: "https://direct.ollatrade.com/auth/register" }}
        stats={[{ value: "30+", label: "Indicators" }, { value: "9", label: "Chart Types" }, { value: "4", label: "Platforms" }]}
      />

      {/* ── Section 1: Features + Visual 1 (4-chart workstation) ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — content */}
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">MetaTrader 4</div>
              <h2 className="text-4xl font-extrabold text-[#111827] mb-5 leading-tight">
                The World&apos;s Most Popular<br />Trading Platform
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                Advanced charting, automated trading, and real-time execution across all global markets — on every device you own. Download or access via browser with no installation required.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.slice(0, 6).map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md border border-gray-200 bg-[#F5F7FA] flex items-center justify-center flex-shrink-0 text-gray-400 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-[#111827] mb-0.5">{title}</div>
                      <div className="text-[11px] text-gray-400 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-8">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Available on</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {platforms.map(({ name, sub, tag, Icon }) => (
                    <Link key={name} href="/trading/platform"
                      className="group flex flex-col items-center gap-2 border border-gray-200 bg-[#F5F7FA] hover:bg-[#111827] hover:border-[#111827] rounded-xl px-3 py-3.5 transition-all">
                      <Icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                      <div className="text-center">
                        <div className="text-[12px] font-bold text-[#111827] group-hover:text-white transition-colors leading-none">{name}</div>
                        <div className="text-[10px] text-gray-400 group-hover:text-white/50 mt-0.5">{sub}</div>
                      </div>
                      <span className="text-[9px] text-gray-400 group-hover:text-[#00CC44] font-medium">{tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="https://direct.ollatrade.com/auth/register"
                className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#00CC44] text-white hover:text-black font-bold px-6 py-3 rounded-lg text-[13px] transition-all">
                Explore MT4 Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/></svg>
              </Link>
            </div>

            {/* Right — VISUAL 1: original 4-chart workstation */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#00CC44]/5 blur-3xl rounded-3xl pointer-events-none"/>
              <div className="relative rounded-2xl overflow-hidden border border-[#1F2937] shadow-2xl shadow-black/50">
                <MT4WorkstationVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why MT4 ──────────────────────────────────── */}
      <section className="py-16 bg-[#081018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-3 text-center">Why MT4 Is the Industry Standard</h2>
          <p className="text-white/40 text-center mb-10 max-w-xl mx-auto text-[15px]">Used by millions of traders worldwide — MT4 has earned its reputation over two decades.</p>
          <FeatureGrid features={[
            { Icon: IconShieldCheck, title: "Proven Reliability",   desc: "MT4 has been the market standard since 2005, trusted by millions of traders and brokers worldwide." },
            { Icon: IconCode,        title: "Algorithmic Trading",  desc: "Build or deploy automated strategies using MQL4 programming with full backtesting capabilities." },
            { Icon: IconGlobe,       title: "Universal Access",     desc: "Available on Windows, Mac (via WebTrader), iOS, and Android — any device, any location." },
            { Icon: IconLayers,      title: "Huge EA Ecosystem",    desc: "Access thousands of Expert Advisors, custom indicators, and scripts from the MetaTrader marketplace." },
          ]} cols={4} dark />
        </div>
      </section>

      {/* ── Section 3: Cross-device + order management content ─── */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — VISUAL 2: original cross-device ecosystem */}
            <div className="relative order-last lg:order-first">
              <div className="absolute -inset-4 bg-[#1E88E5]/5 blur-3xl rounded-3xl pointer-events-none"/>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-black/30">
                <CrossDeviceVisual />
              </div>
            </div>

            {/* Right — content */}
            <div>
              <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Cross-Device Trading</div>
              <h2 className="text-3xl font-extrabold text-[#111827] mb-5 leading-tight">
                One Account.<br />Every Device. Always Synced.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">
                Your Olla Trade MT4 account is fully synchronized across every platform. Open a position on desktop, monitor it on mobile, and manage it from your tablet — all in real time with the same account credentials.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { t:"Desktop (Windows)",  d:"Full MetaTrader 4 installation with all features: multi-chart layout, full EA support, backtesting, and local alerts." },
                  { t:"WebTrader (Browser)",d:"Access your full MT4 account from any modern browser — no installation required. Works on Mac, Linux, and Chromebook." },
                  { t:"iOS & Android",      d:"The official MT4 mobile app gives you real-time quotes, interactive charts, one-tap trading, and push notifications." },
                  { t:"Synchronized Data", d:"Positions, account balance, chart settings, and watchlists stay synchronized across all your devices automatically." },
                ].map(({ t, d }) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00CC44] flex-shrink-0 mt-2"/>
                    <div>
                      <div className="text-[13px] font-bold text-[#111827] mb-0.5">{t}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="https://direct.ollatrade.com/auth/register"
                  className="inline-flex items-center gap-2 bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold px-6 py-3 rounded-lg text-[13px] transition-colors">
                  Open Account
                </Link>
                <Link href="/tools/vps"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 hover:text-[#111827] font-medium px-6 py-3 rounded-lg text-[13px] transition-colors">
                  VPS Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: All features ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 text-center">All MT4 Platform Features</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-[15px]">
            Everything a professional trader needs — built into the world's most trusted trading platform.
          </p>
          <FeatureGrid features={features} cols={4} />
        </div>
      </section>

      <FAQSection title="MT4 Platform FAQs" faqs={platformFaqs} />
      <CTASection
        title="Start Trading on MT4 Today"
        subtitle="Open your Olla Trade account and access MT4 on all your devices instantly."
        primaryLabel="Open Account"
        secondaryLabel="Compare Accounts"
        secondaryHref="/trading/accounts"
      />
    </>
  );
}
