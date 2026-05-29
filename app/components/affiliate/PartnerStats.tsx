"use client";
import { useEffect, useRef, useState } from "react";

const FONT = "'Century Gothic', 'CenturyGothic', 'AppleGothic', sans-serif";

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimal = false,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimal?: boolean;
}) {
  const [val, setVal] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const dur = 2200;
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(eased * to);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  const display = decimal ? val.toFixed(1) : Math.floor(val).toLocaleString();

  return (
    <span ref={spanRef}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const STATS = [
  { to: 1200,  prefix: "",  suffix: "+",   label: "Active Partners",  sub: "Worldwide",        decimal: false },
  { to: 65,    prefix: "",  suffix: "+",   label: "Countries",        sub: "Global reach",     decimal: false },
  { to: 480,   prefix: "$", suffix: "M+",  label: "Monthly Volume",   sub: "Trading activity", decimal: false },
  { to: 2.4,   prefix: "$", suffix: "M+",  label: "Monthly Payouts",  sub: "Partner rewards",  decimal: true  },
];

export default function PartnerStats() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #07111F 0%, #0D3A5C 55%, #0D6B99 100%)",
        padding: "clamp(72px, 8vw, 112px) 0",
        fontFamily: FONT,
      }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
              textTransform: "uppercase", color: "#60C8F0", marginBottom: 14,
            }}
          >
            Partnership Network
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: 1.1,
            }}
          >
            A Global Community of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60C8F0 0%, #1A90C3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trusted Partners
            </span>
          </h2>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderRadius: 20,
                padding: "36px 24px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.10)",
                transition: "border-color 0.2s ease",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 50px)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                <Counter
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimal={s.decimal}
                />
              </div>
              <div
                style={{
                  fontSize: 14, fontWeight: 700,
                  color: "#FFFFFF", marginBottom: 5,
                }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
