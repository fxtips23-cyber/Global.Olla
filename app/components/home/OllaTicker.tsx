"use client";

const TICKERS = [
  { sym: "EUR/USD", price: "1.0842",  chg: "+0.12%", up: true  },
  { sym: "GOLD",    price: "2,341.50",chg: "+0.31%", up: true  },
  { sym: "BTC/USD", price: "67,420",  chg: "+1.24%", up: true  },
  { sym: "NAS100",  price: "18,042",  chg: "+0.55%", up: true  },
  { sym: "US30",    price: "39,240",  chg: "+0.43%", up: true  },
  { sym: "GBP/USD", price: "1.2731",  chg: "+0.08%", up: true  },
  { sym: "USD/JPY", price: "149.81",  chg: "-0.14%", up: false },
  { sym: "ETH/USD", price: "3,581",   chg: "+0.88%", up: true  },
  { sym: "XAG/USD", price: "29.15",   chg: "+0.22%", up: true  },
  { sym: "SPX500",  price: "5,218",   chg: "+0.27%", up: true  },
  { sym: "CRUDE",   price: "78.54",   chg: "-0.63%", up: false },
  { sym: "EUR/GBP", price: "0.8522",  chg: "+0.04%", up: true  },
  { sym: "AUD/USD", price: "0.6524",  chg: "+0.06%", up: true  },
  { sym: "NGAS",    price: "2.310",   chg: "-0.91%", up: false },
  { sym: "USD/CAD", price: "1.3620",  chg: "-0.05%", up: false },
];

const DOUBLED = [...TICKERS, ...TICKERS];

export default function OllaTicker() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(26,144,195,0.15)",
        background: "linear-gradient(90deg, #061121 0%, #0A1929 50%, #061121 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* LIVE label */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "0 18px",
            height: 42,
            background: "linear-gradient(135deg, #1A90C3, #1478A6)",
            minWidth: 88,
            zIndex: 1,
            boxShadow: "4px 0 16px rgba(26,144,195,0.25)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#FFFFFF",
              flexShrink: 0,
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <span style={{ color: "#FFFFFF", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Live
          </span>
        </div>

        {/* Scrolling track */}
        <div style={{ overflow: "hidden", flex: 1, height: 42, position: "relative" }}>
          {/* Fade edges */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 32,
              background: "linear-gradient(90deg, #0A1929, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 32,
              background: "linear-gradient(270deg, #0A1929, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <div className="ticker-track" style={{ display: "flex", alignItems: "center", height: 42, whiteSpace: "nowrap" }}>
            {DOUBLED.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "0 18px",
                  height: "100%",
                  borderRight: "1px solid rgba(255,255,255,0.05)",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em" }}>
                  {item.sym}
                </span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF", fontFamily: "monospace", letterSpacing: "-0.01em" }}>
                  {item.price}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: item.up ? "#10B981" : "#EF4444",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {item.up ? "▲" : "▼"} {item.chg}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
