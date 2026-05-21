"use client";
import { useEffect, useRef } from "react";

const WIDGET_CONFIG = {
  symbols: [
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
    { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
    { proName: "FX_IDC:EURUSD",   title: "EUR to USD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
    { proName: "FX:XAGUSD",       title: "" },
  ],
  colorTheme:    "dark",
  locale:        "en",
  largeChartUrl: "",
  isTransparent: true,
  showSymbolLogo: false,
};

export default function MarketTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* Prevent double-injection on hot reload */
    if (container.querySelector("script")) return;

    const script = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify(WIDGET_CONFIG);

    container.appendChild(script);
  }, []);

  return (
    <div className="bg-[#081018] border-b border-white/10">
      <div ref={containerRef} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget" />
      </div>
    </div>
  );
}
