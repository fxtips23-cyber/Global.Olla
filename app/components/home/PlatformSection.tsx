import Link from "next/link";
import { IconBarChart, IconCode, IconBell, IconLayers, IconClock, IconActivity } from "../ui/Icons";

/* ─── Platform buttons ────────────────────────────────────────────────── */
function WinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z" /></svg>;
}
function BrowserIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" /></svg>;
}
function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.38.81 3.2.82.97-.06 1.95-.81 3.34-.87 1.98-.1 3.64.85 4.65 2.5-4.16 2.48-3.48 7.88.81 9.43zm-4.6-12.8c-.21-2.35 1.87-4.23 4.05-4.48.29 2.64-2.4 4.64-4.05 4.48z" /></svg>;
}
function AndroidIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5S11 23.33 11 22.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12a5.983 5.983 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" /></svg>;
}

/* ══════════════════════════════════════════════════════════════════════
   PHONE MOCKUP  — MT4 Mobile · Quotes screen
   ══════════════════════════════════════════════════════════════════════ */
const phoneQuotes = [
  { sym: "EURUSD",  bid: "1.08567", ask: "1.08579", spread: "12", lo: "1.08123", hi: "1.08688", up: true  },
  { sym: "GBPUSD",  bid: "1.26345", ask: "1.26366", spread: "21", lo: "1.25914", hi: "1.26523", up: true  },
  { sym: "USDJPY",  bid: "151.123", ask: "151.137", spread: "14", lo: "150.521", hi: "151.248", up: false },
  { sym: "AUDUSD",  bid: "0.67123", ask: "0.67143", spread: "20", lo: "0.66882", hi: "0.67245", up: false },
  { sym: "USDCAD",  bid: "1.36678", ask: "1.36698", spread: "20", lo: "1.36450", hi: "1.36810", up: true  },
  { sym: "XAUUSD",  bid: "2332.46", ask: "2332.74", spread: "28", lo: "2310.15", hi: "2335.62", up: false },
  { sym: "BTCUSD",  bid: "67231.45",ask: "67281.12",spread:"497", lo:"66520.00",hi:"67510.90", up: true  },
  { sym: "US30",    bid: "39425.4", ask: "39427.8", spread: "24", lo: "38220.1", hi: "39480.6", up: true  },
];

function PhoneMockup() {
  return (
    <div className="flex-shrink-0 self-center" style={{ width: 96 }}>
      {/* Frame */}
      <div className="relative rounded-[14px] overflow-hidden shadow-2xl shadow-black/60"
        style={{ background: "#0A0A0A", padding: "7px 4px 10px 4px", border: "1px solid rgba(255,255,255,0.08)" }}>
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full" style={{ background: "#000" }} />
        {/* Screen */}
        <div className="rounded-[10px] overflow-hidden" style={{ background: "#0D1520" }}>
          {/* Status bar */}
          <div className="flex justify-between items-center px-2 py-1" style={{ background: "#0D1520" }}>
            <span className="text-[5px] text-white/60 font-bold">10:15</span>
            <div className="flex gap-0.5 items-center">
              <div className="w-1.5 h-1 rounded-sm bg-white/40" />
              <div className="w-1.5 h-1.5 rounded-sm bg-white/40" />
              <div className="w-2 h-1.5 rounded-sm bg-white/60" />
            </div>
          </div>
          {/* App header */}
          <div className="flex items-center justify-between px-2 py-1.5" style={{ background: "#00CC44" }}>
            <span className="text-[7px] font-bold text-black">+ Quotes</span>
            <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          {/* Column headers */}
          <div className="flex px-2 py-0.5" style={{ background: "#0A111A", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
            <span className="flex-1 text-[5px] text-white/30">Symbol</span>
            <span className="text-[5px] text-white/30 w-10 text-right">Bid</span>
            <span className="text-[5px] text-white/30 w-10 text-right">Ask</span>
          </div>
          {/* Quote rows */}
          {phoneQuotes.map((q, i) => (
            <div key={q.sym}
              className="px-2"
              style={{ borderBottom: "0.5px solid rgba(255,255,255,0.04)", background: i === 0 ? "rgba(0,204,68,0.07)" : "transparent" }}>
              <div className="flex items-center py-1">
                <div className="flex-1">
                  <div className="text-[6px] font-bold" style={{ color: i === 0 ? "#00CC44" : "rgba(255,255,255,0.75)" }}>{q.sym}</div>
                  <div className="text-[4.5px] text-white/25">Spread: {q.spread}</div>
                </div>
                <span className="text-[5.5px] font-mono w-10 text-right font-bold" style={{ color: q.up ? "#00CC44" : "#ef5350" }}>{q.bid}</span>
                <span className="text-[5.5px] font-mono w-10 text-right font-bold" style={{ color: q.up ? "#26a69a" : "#ef5350" }}>{q.ask}</span>
              </div>
            </div>
          ))}
          {/* Bottom nav */}
          <div className="flex justify-around items-center py-1.5 px-1"
            style={{ background: "#0A111A", borderTop: "0.5px solid rgba(255,255,255,0.08)" }}>
            {[
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Quotes", active: true },
              { icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18", label: "Chart", active: false },
              { icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", label: "Trade", active: false },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "History", active: false },
              { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Settings", active: false },
            ].map(({ icon, label, active }) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <svg className="w-2.5 h-2.5" fill="none" stroke={active ? "#00CC44" : "rgba(255,255,255,0.3)"} strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                <span className="text-[4px]" style={{ color: active ? "#00CC44" : "rgba(255,255,255,0.25)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Home indicator */}
        <div className="w-6 h-0.5 rounded-full mx-auto mt-1.5" style={{ background: "rgba(255,255,255,0.25)" }} />
      </div>
      {/* Reflection */}
      <div className="mx-auto mt-0.5 rounded-b-full opacity-10"
        style={{ width: "70%", height: 6, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   MONITOR MOCKUP — MT4 Desktop
   ══════════════════════════════════════════════════════════════════════ */
const desktopCandles: [number, number, number, number][] = [
  [38,44,34,41],[40,48,38,46],[45,50,41,44],[43,52,42,50],[49,57,47,55],
  [53,58,49,52],[50,59,52,57],[55,63,53,61],[59,66,57,64],[62,69,60,67],
  [65,72,63,70],[68,74,66,72],[70,77,68,75],[72,80,70,78],[75,83,73,81],
  [79,86,77,84],[82,88,80,86],[84,91,82,89],[87,94,85,92],[90,97,88,95],
  [92,98,89,94],[94,100,91,97],[96,100,93,99],[95,100,92,98],[97,100,94,99],
];

function MonitorMockup() {
  const H = 160;
  const MACD_H = 36;
  const scale = H / 100;

  return (
    <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 370 }}>
      {/* Screen bezel */}
      <div className="rounded-t-[8px] rounded-b-[4px] shadow-2xl shadow-black/80 w-full overflow-hidden"
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", padding: "6px 6px 4px 6px" }}>

        {/* MT4 window inside */}
        <div className="rounded-sm overflow-hidden" style={{ background: "#131C24" }}>

          {/* Title bar */}
          <div className="flex items-center justify-between px-2 py-1.5"
            style={{ background: "#1A2B3A", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                <div className="w-1 h-3 rounded-sm bg-[#00CC44]" />
                <div className="w-1 h-2 rounded-sm bg-[#00CC44] opacity-60 self-end" />
              </div>
              <span className="text-[7.5px] text-white/45" style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}>
                MetaTrader 4 · 12345678 - Olla Trade - Demo Account · [EURUSD,H4]
              </span>
            </div>
            <div className="flex gap-2 text-white/20 text-[9px]">
              <span>─</span><span>□</span><span className="text-red-400/50">✕</span>
            </div>
          </div>

          {/* Menu */}
          <div className="flex gap-3 px-2 py-1" style={{ background: "#1D2B38", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
            {["File","View","Insert","Charts","Tools","Window","Help"].map(m=>(
              <span key={m} className="text-[7px] text-white/28">{m}</span>
            ))}
          </div>

          {/* Toolbar: New Order + timeframes */}
          <div className="flex items-center gap-2 px-2 py-1" style={{ background: "#172432", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-1 bg-[#00CC44] text-black rounded px-1.5 py-0.5">
              <span className="text-[6.5px] font-bold">⊕ New Order</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex gap-0.5">
              {["M1","M5","M15","M30","H1","H4","D1","W1","MN"].map(tf=>(
                <span key={tf} className={`text-[6.5px] px-1 py-0.5 rounded ${tf==="H4"?"font-bold":"text-white/22"}`}
                  style={tf==="H4"?{background:"rgba(0,204,68,0.2)",color:"#00CC44"}:{}}>
                  {tf}
                </span>
              ))}
            </div>
            <div className="w-px h-3 bg-white/10 ml-1" />
            <span className="text-[6px] text-white/18">AutoTrading</span>
          </div>

          {/* Body: Market Watch + Chart + Navigator */}
          <div className="flex" style={{ height: H + MACD_H + 70 }}>

            {/* Left: Market Watch */}
            <div className="flex-shrink-0" style={{ width: 95, background: "#0F1D28", borderRight: "0.5px solid rgba(255,255,255,0.06)" }}>
              <div className="px-1.5 py-1 flex items-center justify-between"
                style={{ background: "#182534", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
                <span className="text-[6.5px] font-bold text-white/40">Market Watch: 10:15:42</span>
                <span className="text-white/20 text-[7px]">✕</span>
              </div>
              {/* Header row */}
              <div className="flex px-1 py-0.5 gap-1" style={{ background: "#0E1B26", borderBottom: "0.5px solid rgba(255,255,255,0.05)" }}>
                <span className="flex-1 text-[5.5px] text-white/22">Symbol</span>
                <span className="text-[5.5px] text-white/22 w-12 text-right">Bid</span>
                <span className="text-[5.5px] text-white/22 w-12 text-right">Ask</span>
              </div>
              {[
                {s:"EURUSD",  b:"1.08567", a:"1.08579", up:true,  act:true},
                {s:"GBPUSD",  b:"1.26345", a:"1.26366", up:true,  act:false},
                {s:"USDJPY",  b:"151.123", a:"151.137", up:false, act:false},
                {s:"AUDUSD",  b:"0.67123", a:"0.67143", up:false, act:false},
                {s:"USDCAD",  b:"1.36678", a:"1.36698", up:true,  act:false},
                {s:"XAUUSD",  b:"2332.46", a:"2332.74", up:false, act:false},
                {s:"BTCUSD",  b:"67231.4", a:"67281.1", up:true,  act:false},
                {s:"US30",    b:"39425.4", a:"39427.8", up:true,  act:false},
              ].map(r=>(
                <div key={r.s} className="flex px-1 py-0.5 gap-1"
                  style={{ borderBottom:"0.5px solid rgba(255,255,255,0.03)", background:r.act?"rgba(0,204,68,0.06)":"transparent" }}>
                  <span className="flex-1 text-[5.5px] font-bold" style={{color:r.act?"#00CC44":"rgba(255,255,255,0.55)"}}>{r.s}</span>
                  <span className="text-[5.5px] font-mono w-12 text-right" style={{color:r.up?"#00CC44":"#ef5350"}}>{r.b}</span>
                  <span className="text-[5.5px] font-mono w-12 text-right" style={{color:r.up?"#26a69a":"#ef5350"}}>{r.a}</span>
                </div>
              ))}
              {/* Symbols / Tick chart tabs */}
              <div className="flex mt-0.5" style={{ borderTop:"0.5px solid rgba(255,255,255,0.06)" }}>
                {["Symbols","Tick Chart"].map((t,i)=>(
                  <span key={t} className={`flex-1 text-center text-[5.5px] py-1 ${i===0?"font-bold":"text-white/22"}`}
                    style={i===0?{color:"rgba(255,255,255,0.65)", borderBottom:"1px solid #00CC44"}:{}}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Navigator */}
              <div className="px-1.5 py-1 flex items-center justify-between mt-1"
                style={{ background:"#182534", borderTop:"0.5px solid rgba(255,255,255,0.06)", borderBottom:"0.5px solid rgba(255,255,255,0.06)" }}>
                <span className="text-[6px] font-bold text-white/40">Navigator</span>
                <span className="text-white/20 text-[7px]">✕</span>
              </div>
              <div className="px-2 py-1">
                <div className="text-[5.5px] text-white/30">▸ MetaTrader 4</div>
                <div className="text-[5.5px] text-white/30 ml-2">▾ Accounts</div>
                <div className="text-[5.5px] text-white/45 ml-4">▾ Olla Trade - Demo</div>
                <div className="text-[5.5px] text-[#00CC44] ml-6">✓ 12345678: Demo User</div>
                <div className="text-[5.5px] text-white/30 ml-2">▸ Indicators</div>
              </div>
            </div>

            {/* Right: Chart + Terminal */}
            <div className="flex-1 flex flex-col">
              {/* Chart title bar */}
              <div className="flex items-center justify-between px-2 py-1"
                style={{ background:"#0D1928", borderBottom:"0.5px solid rgba(255,255,255,0.05)" }}>
                <span className="text-[6.5px] text-white/50">◆ EURUSD,H4  1.08734 1.08812 1.08679 1.08567</span>
                <span className="text-[7px] font-bold" style={{color:"#00CC44"}}>1.08567 ▼</span>
              </div>

              {/* Candlestick chart area */}
              <div className="relative flex-1" style={{ background:"#0A1520" }}>
                {/* Y-axis labels */}
                <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-1 pr-1" style={{width:32}}>
                  {["1.09260","1.08815","1.08370","1.07925","1.07480","1.07035","1.06590","1.06145","1.05700"].map(p=>(
                    <span key={p} className="text-[4.5px] text-white/20 font-mono text-right">{p}</span>
                  ))}
                </div>

                <svg width="100%" height="100%" style={{display:"block"}}>
                  {/* Grid */}
                  {[0.14,0.28,0.42,0.56,0.70,0.84].map(f=>(
                    <line key={f} x1="0" x2="88%" y1={`${f*100}%`} y2={`${f*100}%`}
                      stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 4"/>
                  ))}
                  {/* Candles */}
                  {desktopCandles.map(([o,h,l,c],i)=>{
                    const bull=c>=o;
                    const col=bull?"#26a69a":"#ef5350";
                    const cw=6, gap=2;
                    const x=4+i*(cw+gap);
                    const cx=x+cw/2;
                    const scl=H/100;
                    const yh=(v:number)=>H-v*scl;
                    const bT=yh(Math.max(o,c));
                    const bH=Math.max(Math.abs(c-o)*scl,1.5);
                    return (
                      <g key={i}>
                        <line x1={cx} y1={yh(h)} x2={cx} y2={yh(l)} stroke={col} strokeWidth="0.8" opacity="0.9"/>
                        <rect x={x} y={bT} width={cw} height={bH} fill={col} opacity="0.95" rx="0.3"/>
                      </g>
                    );
                  })}
                  {/* Current price line */}
                  <line x1="0" x2="88%" y1={H-99*scale} y2={H-99*scale}
                    stroke="#00CC44" strokeWidth="0.6" strokeDasharray="3 2" opacity="0.7"/>
                  <rect x="0" y={H-99*scale-5} width="27" height="9" fill="#00CC44" fillOpacity="0.2" rx="1"/>
                  <text x="13.5" y={H-99*scale+2} fontSize="5" fill="#00CC44" textAnchor="middle" fontWeight="bold">1.08567</text>
                </svg>
              </div>

              {/* MACD sub-window */}
              <div style={{ height:MACD_H, background:"#080F18", borderTop:"0.5px solid rgba(255,255,255,0.06)" }}>
                <div className="px-2 py-0.5" style={{ borderBottom:"0.5px solid rgba(255,255,255,0.04)" }}>
                  <span className="text-[5.5px] text-white/28">MACD(12,26,9) 0.001192  0.001357</span>
                </div>
                <svg width="100%" height={MACD_H-14} style={{display:"block",marginTop:2}}>
                  {/* MACD histogram bars */}
                  {Array.from({length:25}).map((_,i)=>{
                    const v=(Math.sin(i*0.5)*0.6+Math.cos(i*0.3)*0.4);
                    const pos=v>=0;
                    const bh=Math.abs(v)*10;
                    const x=4+i*8.5;
                    const mid=(MACD_H-14)/2;
                    return(
                      <rect key={i} x={x} y={pos?mid-bh:mid} width="5" height={bh}
                        fill={pos?"#00CC44":"#ef5350"} opacity="0.7" rx="0.5"/>
                    );
                  })}
                  <line x1="0" x2="100%" y1={(MACD_H-14)/2} y2={(MACD_H-14)/2} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                  {/* Signal line */}
                  <polyline
                    points={Array.from({length:25}).map((_,i)=>{
                      const v=Math.sin(i*0.5+0.3)*4;
                      const mid=(MACD_H-14)/2;
                      return `${4+i*8.5+2.5},${mid+v}`;
                    }).join(" ")}
                    stroke="#ef5350" strokeWidth="0.8" fill="none" opacity="0.8"/>
                </svg>
              </div>

              {/* Terminal tabs */}
              <div style={{ borderTop:"0.5px solid rgba(255,255,255,0.08)", background:"#0A111A" }}>
                <div className="flex">
                  {["CoastalJet","Account History","Demo Account","[EURUSD,H4]","[EURUSD,H4]"].map((t,i)=>(
                    <span key={i} className={`px-2 py-1 text-[5.5px] ${i===0?"font-bold":"text-white/20"}`}
                      style={i===0?{color:"rgba(255,255,255,0.70)",borderBottom:"1px solid #00CC44"}:{}}>
                      {t}
                    </span>
                  ))}
                </div>
                {/* Trade table header */}
                <div className="flex px-1 py-0.5 gap-1" style={{ background:"#060F1A", borderBottom:"0.5px solid rgba(255,255,255,0.04)" }}>
                  {["Order","Time","Type","Size","Symbol","Price","S/L","T/P","Price","Commission","Swap"].map(h=>(
                    <span key={h} className="text-[4.5px] text-white/20 font-bold flex-1 text-center">{h}</span>
                  ))}
                </div>
                {/* Trades */}
                {[
                  {ord:"23562917",time:"2024.03.27 09:14:28",t:"buy", sz:"0.50",sym:"eurusd",pr:"1.08234",sl:"1.07900",tp:"1.08950",cp:"1.08567",comm:"-3.50",swap:"0.00"},
                  {ord:"23562918",time:"2024.03.27 09:15:11",t:"sell",sz:"0.30",sym:"gbpusd",pr:"1.25987",sl:"1.26350",tp:"1.25000",cp:"1.26366",comm:"-2.10",swap:"0.00"},
                  {ord:"23562919",time:"2024.03.27 09:15:45",t:"buy", sz:"0.20",sym:"xauusd",pr:"2321.45",sl:"2305.00",tp:"2345.00",cp:"2332.46",comm:"-1.40",swap:"0.00"},
                  {ord:"23562920",time:"2024.03.27 09:16:02",t:"buy", sz:"0.10",sym:"us30",  pr:"39385.6",sl:"39000.0",tp:"39800.0",cp:"39425.4",comm:"-0.70",swap:"0.00"},
                ].map(tr=>(
                  <div key={tr.ord} className="flex px-1 py-0.5 gap-1" style={{ borderBottom:"0.5px solid rgba(255,255,255,0.03)" }}>
                    <span className="text-[4.5px] text-white/30 font-mono flex-1 text-center">{tr.ord}</span>
                    <span className="text-[4.5px] text-white/25 flex-1 text-center">{tr.time}</span>
                    <span className={`text-[4.5px] font-bold flex-1 text-center ${tr.t==="buy"?"text-[#26a69a]":"text-[#ef5350]"}`}>{tr.t}</span>
                    <span className="text-[4.5px] text-white/40 flex-1 text-center">{tr.sz}</span>
                    <span className="text-[4.5px] text-white/55 font-bold flex-1 text-center">{tr.sym}</span>
                    <span className="text-[4.5px] text-white/35 font-mono flex-1 text-center">{tr.pr}</span>
                    <span className="text-[4.5px] text-white/22 font-mono flex-1 text-center">{tr.sl}</span>
                    <span className="text-[4.5px] text-white/22 font-mono flex-1 text-center">{tr.tp}</span>
                    <span className="text-[4.5px] text-white/50 font-mono flex-1 text-center">{tr.cp}</span>
                    <span className="text-[4.5px] text-[#ef5350] font-mono flex-1 text-center">{tr.comm}</span>
                    <span className="text-[4.5px] text-white/20 font-mono flex-1 text-center">{tr.swap}</span>
                  </div>
                ))}
                {/* Balance bar */}
                <div className="px-2 py-1 flex gap-3" style={{ background:"#060F1A", borderTop:"0.5px solid rgba(255,255,255,0.06)" }}>
                  {["Balance: 10 000.00 USD","Equity: 10 312.80","Margin: 1 652.45","Free margin: 8 660.35","Margin level: 624.26%"].map(s=>(
                    <span key={s} className="text-[4.5px] text-white/35">{s}</span>
                  ))}
                </div>
                {/* Tab bar bottom */}
                <div className="flex gap-1 px-1 py-1" style={{ background:"#080F18", borderTop:"0.5px solid rgba(255,255,255,0.05)" }}>
                  {["Trade","Exposure","Account History","News","Alerts","Mailbox","Market","Signals","Code Base","Experts","Journal"].map((t,i)=>(
                    <span key={t} className={`text-[5px] px-1.5 py-0.5 rounded-sm ${i===0?"font-bold":"text-white/20"}`}
                      style={i===0?{color:"rgba(255,255,255,0.7)", background:"rgba(0,204,68,0.1)"}:{}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status bar */}
              <div className="flex justify-between px-2 py-0.5"
                style={{ background:"#1A2B3A", borderTop:"0.5px solid rgba(255,255,255,0.06)" }}>
                <span className="text-[4.5px] text-white/20 font-mono">Connected · Ping: 8ms · Balance: $10,000.00</span>
                <span className="text-[4.5px] font-bold" style={{ color:"#00CC44" }}>● Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor stand */}
      <div className="mx-auto" style={{ width:36, height:12, background:"linear-gradient(to bottom,#1a1a1a,#111)", clipPath:"polygon(30% 0,70% 0,100% 100%,0 100%)" }} />
      <div className="mx-auto rounded-sm" style={{ width:70, height:5, background:"linear-gradient(to bottom,#222,#111)", marginTop:-1 }} />
      {/* Reflection */}
      <div className="mx-auto rounded-b-full opacity-8 mt-0.5"
        style={{ width:"70%", height:8, background:"linear-gradient(to bottom,rgba(255,255,255,0.08),transparent)" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   TABLET MOCKUP — MT4 Mobile · Chart screen
   ══════════════════════════════════════════════════════════════════════ */
const tabletCandles: [number,number,number,number][] = [
  [40,46,36,44],[43,50,41,48],[47,54,44,50],[50,58,47,55],[54,61,51,59],
  [57,64,54,62],[61,68,58,65],[64,71,61,69],[67,74,64,72],[70,78,67,75],
  [73,80,70,78],[76,83,73,81],[79,87,76,84],[82,90,79,87],[86,93,83,91],
];

function TabletMockup() {
  const H=105; const MACD=28;
  return (
    <div className="flex-shrink-0 self-center" style={{ width:135 }}>
      <div className="relative rounded-[10px] overflow-hidden shadow-2xl shadow-black/60"
        style={{ background:"#0A0A0A", padding:"5px 4px 4px 4px", border:"1px solid rgba(255,255,255,0.08)" }}>
        {/* Camera dot */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ background:"#1a1a1a", border:"0.5px solid rgba(255,255,255,0.1)" }} />
        {/* Screen */}
        <div className="rounded-[6px] overflow-hidden" style={{ background:"#0D1520" }}>
          {/* App header */}
          <div className="flex items-center justify-between px-2 py-1.5" style={{ background:"#00CC44" }}>
            <span className="text-[6.5px] font-bold text-black">H4</span>
            <div className="flex items-center gap-1">
              <span className="text-[7px] font-bold text-black">EURUSD</span>
              <span className="text-[6px] text-black opacity-70">∨</span>
            </div>
            <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          {/* Price bar */}
          <div className="flex items-center justify-between px-2 py-1" style={{ background:"#0A111A", borderBottom:"0.5px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[5.5px] text-white/30">O:1.08734  H:1.08812  L:1.08679</span>
            <span className="text-[6px] font-bold font-mono" style={{ color:"#00CC44" }}>1.08567</span>
          </div>
          {/* Candle chart */}
          <div style={{ background:"#0A1520", height:H, position:"relative" }}>
            <svg width="100%" height={H} style={{ display:"block" }}>
              {[0.25,0.5,0.75].map(f=>(
                <line key={f} x1="0" x2="100%" y1={H*f} y2={H*f} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="3 3"/>
              ))}
              {tabletCandles.map(([o,h,l,c],i)=>{
                const bull=c>=o;
                const col=bull?"#26a69a":"#ef5350";
                const cw=5,gap=2.5;
                const x=4+i*(cw+gap);
                const cx=x+cw/2;
                const s=H/100;
                const yv=(v:number)=>H-v*s;
                return(
                  <g key={i}>
                    <line x1={cx} y1={yv(h)} x2={cx} y2={yv(l)} stroke={col} strokeWidth="0.8" opacity="0.85"/>
                    <rect x={x} y={yv(Math.max(o,c))} width={cw} height={Math.max(Math.abs(c-o)*s,1.5)} fill={col} opacity="0.9" rx="0.3"/>
                  </g>
                );
              })}
              <line x1="0" x2="95%" y1={H-91*(H/100)} y2={H-91*(H/100)} stroke="#00CC44" strokeWidth="0.6" strokeDasharray="3 2" opacity="0.6"/>
            </svg>
          </div>
          {/* MACD */}
          <div style={{ height:MACD, background:"#070F18", borderTop:"0.5px solid rgba(255,255,255,0.05)" }}>
            <div className="px-1.5 py-0.5">
              <span className="text-[4.5px] text-white/22">MACD(12,26,9)  0.001192  0.001357</span>
            </div>
            <svg width="100%" height={MACD-12} style={{ display:"block" }}>
              {Array.from({length:15}).map((_,i)=>{
                const v=Math.sin(i*0.5)*5;
                const pos=v>=0;
                const mid=(MACD-12)/2;
                return <rect key={i} x={4+i*8} y={pos?mid-Math.abs(v):mid} width="5" height={Math.abs(v)} fill={pos?"#00CC44":"#ef5350"} opacity="0.7" rx="0.3"/>;
              })}
              <line x1="0" x2="100%" y1={(MACD-12)/2} y2={(MACD-12)/2} stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
              <polyline points={Array.from({length:15}).map((_,i)=>`${4+i*8+2.5},${(MACD-12)/2+Math.sin(i*0.5+0.5)*3}`).join(" ")} stroke="#ef5350" strokeWidth="0.7" fill="none" opacity="0.8"/>
            </svg>
          </div>
          {/* X-axis dates */}
          <div className="flex justify-between px-2 py-0.5" style={{ background:"#060E18", borderTop:"0.5px solid rgba(255,255,255,0.04)" }}>
            {["1 Mar","6 Mar","11 Mar","14 Mar","19 Mar","22 Mar","27 Mar"].map(d=>(
              <span key={d} className="text-[4px] text-white/18">{d}</span>
            ))}
          </div>
          {/* Bottom nav */}
          <div className="flex justify-around items-center py-1.5"
            style={{ background:"#0A111A", borderTop:"0.5px solid rgba(255,255,255,0.06)" }}>
            {[
              {icon:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",label:"Quotes",active:false},
              {icon:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18",label:"Chart",active:true},
              {icon:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",label:"Trade",active:false},
              {icon:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",label:"History",active:false},
              {icon:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",label:"Settings",active:false},
            ].map(({icon,label,active})=>(
              <div key={label} className="flex flex-col items-center gap-0.5">
                <svg className="w-3 h-3" fill="none" stroke={active?"#00CC44":"rgba(255,255,255,0.28)"} strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
                </svg>
                <span className="text-[4px]" style={{color:active?"#00CC44":"rgba(255,255,255,0.22)"}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Reflection */}
      <div className="mx-auto mt-0.5 rounded-b-full opacity-8"
        style={{ width:"60%", height:5, background:"linear-gradient(to bottom,rgba(255,255,255,0.1),transparent)" }} />
    </div>
  );
}

/* ─── Feature list ─────────────────────────────────────────────────────── */
const features = [
  { Icon: IconBarChart, title: "30+ Technical Indicators",  desc: "Built-in MA, MACD, RSI, Bollinger Bands, Ichimoku, and 25+ more indicator types." },
  { Icon: IconCode,     title: "Expert Advisors (EAs)",     desc: "Full MQL4 automated trading support. Backtest strategies on historical price data." },
  { Icon: IconBell,     title: "Custom Alerts",             desc: "Price, indicator, and margin alerts via MT4 desktop, mobile push, or email." },
  { Icon: IconLayers,   title: "Multi-Chart Layout",        desc: "Multiple instruments and timeframes simultaneously on a single screen." },
  { Icon: IconClock,    title: "9 Chart Timeframes",        desc: "M1 through MN — candlestick, bar, and line chart types available." },
  { Icon: IconActivity, title: "One-Click Execution",       desc: "Direct chart trading with instant market order submission." },
];

const platforms = [
  { Icon: WinIcon,     name: "Desktop",    sub: "Windows MT4",   tag: "Most popular" },
  { Icon: BrowserIcon, name: "WebTrader",  sub: "Any browser",   tag: "No install" },
  { Icon: AppleIcon,   name: "iOS",        sub: "iPhone & iPad", tag: "App Store" },
  { Icon: AndroidIcon, name: "Android",    sub: "All devices",   tag: "Google Play" },
];

/* ─── Main section ─────────────────────────────────────────────────────── */
export default function PlatformSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#060E18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-4">MetaTrader 4</div>
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            The World&apos;s Most Popular Trading Platform
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-[15px]">
            Advanced charting, automated trading, and real-time execution across all global markets — on every device you own. Download or access via browser with no installation required.
          </p>
        </div>

        {/* ── Three-device composition — hidden on mobile, scrollable on tablet ── */}
        <div className="hidden sm:flex items-end justify-center gap-3 lg:gap-5 mb-14 overflow-x-auto pb-2 px-4">
          <PhoneMockup />
          <MonitorMockup />
          <TabletMockup />
        </div>
        {/* Mobile fallback — simple platform badge */}
        <div className="sm:hidden flex justify-center mb-10">
          <div className="bg-[#0D1520] border border-white/10 rounded-2xl px-6 py-5 text-center max-w-xs w-full">
            <div className="text-[11px] font-bold text-[#00CC44] uppercase tracking-widest mb-2">MetaTrader 4</div>
            <div className="text-xl font-extrabold text-white mb-1">Available on All Devices</div>
            <div className="text-[13px] text-white/40 mb-4">Desktop · WebTrader · iOS · Android</div>
            <div className="flex justify-center gap-2 flex-wrap">
              {["Desktop","WebTrader","iOS","Android"].map(p=>(
                <span key={p} className="text-[11px] bg-white/6 border border-white/10 text-white/50 px-3 py-1.5 rounded-lg">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Platform download buttons ──────────────────────────── */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platforms.map(({ Icon, name, sub, tag }) => (
              <Link key={name} href="/trading/platform"
                className="group flex flex-col items-center gap-2 border border-white/10 bg-white/[0.03] hover:bg-[#00CC44]/8 hover:border-[#00CC44]/30 rounded-xl px-5 py-4 transition-all duration-200">
                <Icon className="w-5 h-5 text-white/40 group-hover:text-[#00CC44] transition-colors" />
                <div className="text-center">
                  <div className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{name}</div>
                  <div className="text-[10px] text-white/30">{sub}</div>
                </div>
                <span className="text-[9px] text-white/22 group-hover:text-[#00CC44] transition-colors">{tag}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Feature grid ──────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 rounded-xl p-4"
              style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background:"rgba(0,204,68,0.12)", border:"1px solid rgba(0,204,68,0.2)" }}>
                <Icon className="w-3.5 h-3.5 text-[#00CC44]" />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-white/75 mb-0.5">{title}</div>
                <div className="text-[11px] text-white/35 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/trading/platform"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[14px] transition-colors"
            style={{ background:"#00CC44", color:"#000" }}>
            Explore MT4 Features
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
