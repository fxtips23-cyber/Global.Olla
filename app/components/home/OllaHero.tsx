"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Canvas dimensions & chart layout ─────────────────────────────── */
const CW = 1440, CH = 720;
const PLOT_TOP = 48, PLOT_BOT = 568;
const VOL_TOP = 590, VOL_BOT = 658;
const PAD_L = 20, PAD_R = 62;
const N_VIS = 65;
const CANDLE_MS = 3000;
const TICK_MS = 65;
const CHART_W = CW - PAD_L - PAD_R;
const STEP = CHART_W / N_VIS;
const CBODY = Math.max(3, Math.floor(STEP * 0.62));
const SCROLL_SPD = STEP / CANDLE_MS;

/* ── Types ─────────────────────────────────────────────────────────── */
interface Candle { o: number; h: number; l: number; c: number; vol: number }
interface CS {
  closed: Candle[];
  live: Candle;
  price: number;
  scrollOff: number;
  tickAccum: number;
  pMin: number;
  pMax: number;
}

/* ── Seeded PRNG for deterministic initial candles ──────────────────── */
function makeRng(seed: number) {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) % 2147483648; return Math.abs(s) / 2147483648; };
}

function initState(): CS {
  const rng = makeRng(42);
  let price = 2248;
  const closed: Candle[] = [];
  for (let i = 0; i < N_VIS - 1; i++) {
    const o = price;
    const c = Math.max(2192, Math.min(2408, o + (rng() - 0.44) * 16 + 0.7));
    const bh = Math.abs(o - c);
    closed.push({
      o, c,
      h: Math.max(o, c) + rng() * (bh * 0.55 + 3.5),
      l: Math.min(o, c) - rng() * (bh * 0.55 + 3.5),
      vol: 0.2 + rng() * 0.8,
    });
    price = c;
  }
  const live: Candle = { o: price, h: price, l: price, c: price, vol: 0.08 };
  const allP = closed.flatMap(cd => [cd.h, cd.l]);
  const rawMin = Math.min(...allP) - 5;
  const rawMax = Math.max(...allP) + 5;
  const pad = (rawMax - rawMin) * 0.08;
  return { closed, live, price, scrollOff: 0, tickAccum: 0, pMin: rawMin - pad, pMax: rawMax + pad };
}

/* ── Per-tick price update ──────────────────────────────────────────── */
function priceTick(s: CS) {
  const revert = (2272 - s.price) * 0.003;
  const delta = (Math.random() - 0.47) * 3.4 + revert;
  s.price = Math.max(2188, Math.min(2412, s.price + delta));
  s.live.c = s.price;
  s.live.h = Math.max(s.live.h, s.price);
  s.live.l = Math.min(s.live.l, s.price);
  s.live.vol = Math.min(1, s.live.vol + Math.abs(delta) * 0.022);
}

/* ── Advance state each frame ───────────────────────────────────────── */
function advance(s: CS, dt: number) {
  s.scrollOff -= SCROLL_SPD * dt;
  s.tickAccum += dt;
  while (s.tickAccum >= TICK_MS) { s.tickAccum -= TICK_MS; priceTick(s); }
  if (s.scrollOff <= -STEP) {
    s.scrollOff += STEP;
    s.closed.push({ ...s.live });
    if (s.closed.length > N_VIS * 4) s.closed.splice(0, N_VIS);
    s.live = { o: s.price, h: s.price, l: s.price, c: s.price, vol: 0.05 };
  }
}

/* ── Draw one frame ─────────────────────────────────────────────────── */
function draw(ctx: CanvasRenderingContext2D, s: CS, now: number) {
  ctx.clearRect(0, 0, CW, CH);

  const visible: Candle[] = [...s.closed.slice(-(N_VIS - 1)), s.live];
  const cx = (i: number) => PAD_L + (i + 0.5) * STEP + s.scrollOff;

  /* smooth price range */
  const rawMin = Math.min(...visible.map(c => c.l));
  const rawMax = Math.max(...visible.map(c => c.h));
  const rp = Math.max((rawMax - rawMin) * 0.07, 8);
  s.pMin += (rawMin - rp - s.pMin) * 0.012;
  s.pMax += (rawMax + rp - s.pMax) * 0.012;
  const pH = s.pMax - s.pMin;
  const toY = (p: number) => PLOT_BOT - ((p - s.pMin) / pH) * (PLOT_BOT - PLOT_TOP);

  /* horizontal grid */
  const niceStep = Math.ceil(pH / 6 / 20) * 20;
  const gridBase = Math.ceil(s.pMin / niceStep) * niceStep;
  for (let p = gridBase; p <= s.pMax + niceStep; p += niceStep) {
    const y = toY(p);
    if (y < PLOT_TOP - 5 || y > PLOT_BOT + 5) continue;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,255,0.038)";
    ctx.lineWidth = 1;
    ctx.moveTo(0, y); ctx.lineTo(CW, y); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.13)";
    ctx.font = "9px monospace";
    ctx.textAlign = "right";
    ctx.fillText(p.toFixed(0), CW - 4, y - 3);
  }

  /* vertical grid every 10 candles */
  for (let i = 0; i < N_VIS; i += 10) {
    const x = cx(i);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,255,0.022)";
    ctx.lineWidth = 1;
    ctx.moveTo(x, PLOT_TOP); ctx.lineTo(x, VOL_BOT); ctx.stroke();
  }

  /* MA line + fill */
  const maPts: [number, number][] = visible.map((_, i) => {
    const win = visible.slice(Math.max(0, i - 9), i + 1);
    const avg = win.reduce((a, c) => a + (c.o + c.c) / 2, 0) / win.length;
    return [cx(i), toY(avg)];
  });

  ctx.beginPath();
  ctx.moveTo(maPts[0][0], PLOT_BOT);
  for (const [x, y] of maPts) ctx.lineTo(x, y);
  ctx.lineTo(maPts[maPts.length - 1][0], PLOT_BOT);
  ctx.closePath();
  const maG = ctx.createLinearGradient(0, PLOT_TOP, 0, PLOT_BOT);
  maG.addColorStop(0, "rgba(26,144,195,0.07)");
  maG.addColorStop(1, "rgba(26,144,195,0)");
  ctx.fillStyle = maG;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(maPts[0][0], maPts[0][1]);
  for (let i = 1; i < maPts.length; i++) {
    const mx = (maPts[i][0] + maPts[i - 1][0]) / 2;
    const my = (maPts[i][1] + maPts[i - 1][1]) / 2;
    ctx.quadraticCurveTo(maPts[i - 1][0], maPts[i - 1][1], mx, my);
  }
  ctx.lineTo(maPts[maPts.length - 1][0], maPts[maPts.length - 1][1]);
  ctx.strokeStyle = "rgba(26,144,195,0.48)";
  ctx.lineWidth = 1.6;
  ctx.lineJoin = "round";
  ctx.stroke();

  /* volume bars */
  const maxVol = Math.max(...visible.map(c => c.vol), 0.01);
  const volH = VOL_BOT - VOL_TOP;
  for (let i = 0; i < visible.length; i++) {
    const c = visible[i];
    const isUp = c.c >= c.o;
    const bh = (c.vol / maxVol) * volH * 0.80;
    const x = cx(i);
    const vg = ctx.createLinearGradient(0, VOL_BOT - bh, 0, VOL_BOT);
    vg.addColorStop(0, isUp ? "rgba(16,185,129,0.30)" : "rgba(239,68,68,0.28)");
    vg.addColorStop(1, isUp ? "rgba(16,185,129,0.04)" : "rgba(239,68,68,0.04)");
    ctx.fillStyle = vg;
    ctx.beginPath();
    ctx.rect(x - CBODY / 2, VOL_BOT - bh, CBODY, bh);
    ctx.fill();
  }

  /* candles */
  for (let i = 0; i < visible.length; i++) {
    const c = visible[i];
    const isLive = i === visible.length - 1;
    const isUp = c.c >= c.o;
    const a = isLive ? (isUp ? 0.82 : 0.76) : (isUp ? 0.58 : 0.52);
    const col = isUp ? `rgba(16,185,129,${a})` : `rgba(239,68,68,${a})`;
    const x = cx(i);
    const bodyT = toY(Math.max(c.o, c.c));
    const bodyB = Math.max(bodyT + 1.5, toY(Math.min(c.o, c.c)));

    ctx.beginPath();
    ctx.strokeStyle = col;
    ctx.lineWidth = 1;
    ctx.moveTo(x, toY(c.h)); ctx.lineTo(x, toY(c.l)); ctx.stroke();

    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.rect(x - CBODY / 2, bodyT, CBODY, bodyB - bodyT);
    ctx.fill();

    if (isLive) {
      ctx.strokeStyle = isUp ? "rgba(16,185,129,0.28)" : "rgba(239,68,68,0.24)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.rect(x - CBODY / 2 - 1, bodyT - 1, CBODY + 2, bodyB - bodyT + 2);
      ctx.stroke();
    }
  }

  /* last price dashed line */
  const liveY = toY(s.price);
  const t = now / 1000;
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = `rgba(26,144,195,${(0.35 + 0.18 * Math.sin(t * Math.PI * 1.3)).toFixed(2)})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, liveY); ctx.lineTo(CW - PAD_R + 2, liveY); ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "rgba(26,144,195,0.28)";
  ctx.beginPath();
  ctx.rect(CW - PAD_R + 2, liveY - 9, 56, 17);
  ctx.fill();
  ctx.fillStyle = "#60C8F0";
  ctx.font = "bold 8.5px monospace";
  ctx.textAlign = "center";
  ctx.fillText(s.price.toFixed(1), CW - PAD_R + 30, liveY + 4);

  /* vol separator */
  ctx.beginPath();
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  ctx.lineWidth = 1;
  ctx.moveTo(0, VOL_BOT); ctx.lineTo(CW, VOL_BOT); ctx.stroke();

  /* instrument label */
  ctx.font = "bold 11px monospace";
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.fillText("XAUUSD", 36, 30);
  ctx.font = "9px monospace";
  ctx.fillStyle = "rgba(26,144,195,0.50)";
  ctx.fillText("H1", 96, 30);

  /* pulsing live dot */
  const pulse = 0.6 + 0.4 * Math.sin(t * Math.PI * 1.1);
  const dotR = 2.8 + 1.1 * Math.abs(Math.sin(t * Math.PI * 1.1));
  ctx.beginPath();
  ctx.arc(113, 26, dotR, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(16,185,129,${pulse.toFixed(2)})`;
  ctx.fill();

  ctx.font = "8px monospace";
  ctx.fillStyle = "rgba(255,255,255,0.20)";
  ctx.fillText("LIVE", 121, 30);

  /* price change ticker */
  if (s.closed.length > 0) {
    const prev = s.closed[s.closed.length - 1].c;
    const chg = s.price - prev;
    const pct = (chg / prev) * 100;
    ctx.font = "bold 10px monospace";
    ctx.textAlign = "right";
    ctx.fillStyle = chg >= 0 ? "rgba(16,185,129,0.72)" : "rgba(239,68,68,0.68)";
    ctx.fillText(
      `${chg >= 0 ? "+" : ""}${chg.toFixed(1)}  ${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`,
      CW - PAD_R - 10, 30
    );
  }
}

/* ── ChartBackground component ──────────────────────────────────────── */
function ChartBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<CS | null>(null);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    stateRef.current = initState();

    function frame(now: number) {
      const dt = lastRef.current > 0 ? Math.min(now - lastRef.current, 50) : 16;
      lastRef.current = now;
      advance(stateRef.current!, dt);
      draw(ctx!, stateRef.current!, now);
      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={CW}
      height={CH}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      aria-hidden
    />
  );
}

/* ── Hero ───────────────────────────────────────────────────────────── */
export default function OllaHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "clamp(640px, 92vh, 960px)",
        background: "#07111F",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <ChartBackground />

      {/* gradient overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(7,17,31,0.82) 0%, rgba(7,17,31,0.68) 48%, rgba(7,17,31,0.90) 100%)",
        }}
      />

      {/* blue radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "44%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900, height: 520,
          background: "radial-gradient(ellipse at center, rgba(26,144,195,0.13) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* content */}
      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "clamp(110px, 13vw, 175px)",
          paddingBottom: "clamp(60px, 8vw, 110px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ marginBottom: 28 }}
        >
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(26,144,195,0.12)",
              border: "1px solid rgba(26,144,195,0.28)",
              borderRadius: 999, padding: "7px 18px 7px 8px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #1A90C3, #1E9FD8)",
                color: "#FFF", fontSize: 9, fontWeight: 800,
                letterSpacing: "0.10em", padding: "3px 10px",
                borderRadius: 999, whiteSpace: "nowrap",
                textTransform: "uppercase", flexShrink: 0,
              }}
            >
              UAE SCA
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.58)", lineHeight: 1.4 }}>
              Regulated &amp; Licensed Forex and CFD Broker. Est. 2020.
            </span>
          </div>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.07, ease: EASE }}
          style={{
            fontSize: "clamp(40px, 6vw, 82px)",
            fontWeight: 900, lineHeight: 1.06,
            letterSpacing: "-0.030em", color: "#FFF",
            marginBottom: 22, maxWidth: 860,
          }}
        >
          Trade Global{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #60C8F0 0%, #1A90C3 55%, #0D6B99 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Markets,
          </span>
          <br />
          built for those who expect more.
        </motion.h1>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          style={{
            fontSize: "clamp(15px, 1.7vw, 19px)", lineHeight: 1.80,
            color: "rgba(255,255,255,0.50)", marginBottom: 44, maxWidth: 520,
          }}
        >
          Trade 500+ instruments — forex, gold, indices and more —
          with a regulated broker that matches your ambition.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.21, ease: EASE }}
          style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "center" }}
        >
          <Link
            href="https://portal.ollatrade.com/auth/register"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "linear-gradient(135deg, #1E9FD8 0%, #1A90C3 60%, #1478A6 100%)",
              color: "#FFF", fontWeight: 700, fontSize: 16,
              padding: "16px 40px", borderRadius: 12, textDecoration: "none",
              border: "1.5px solid rgba(26,144,195,0.5)",
              boxShadow: "0 10px 40px rgba(26,144,195,0.40)",
              transition: "all 0.2s ease", whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 16px 52px rgba(26,144,195,0.55)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 10px 40px rgba(26,144,195,0.40)"; }}
          >
            Start Trading
          </Link>

          <Link
            href="https://portal.ollatrade.com/auth/register?demo=true"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)",
              fontWeight: 600, fontSize: 16, padding: "15px 32px", borderRadius: 12,
              textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.15)",
              transition: "all 0.2s ease", whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.12)"; el.style.borderColor = "rgba(255,255,255,0.25)"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.07)"; el.style.borderColor = "rgba(255,255,255,0.15)"; el.style.transform = "translateY(0)"; }}
          >
            Try Demo
          </Link>
        </motion.div>

        {/* trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease: EASE }}
          style={{
            marginTop: "clamp(48px, 7vw, 80px)", width: "100%",
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "center", gap: 32, paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>, label: "Ultra-tight spreads" },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, label: "Advanced MT5 platform" },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "Fast & reliable execution" },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, label: "UAE SCA Regulated" },
          ].map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.48)" }}>
              <span style={{ color: "rgba(26,144,195,0.65)" }}>{icon}</span>
              {label}
            </div>
          ))}

          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 10, padding: "8px 16px" }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#FFF", lineHeight: 1 }}>4.8</div>
              <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} style={{ width: 9, height: 9, color: i < 5 ? "#F59E0B" : "rgba(255,255,255,0.18)" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.10)" }} />
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#1A90C3", letterSpacing: "0.08em", textTransform: "uppercase" }}>UAE SCA</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>Regulated Broker</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
