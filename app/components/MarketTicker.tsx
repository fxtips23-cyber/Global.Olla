"use client";
import { useEffect } from "react";
import React from "react";

const SCRIPT_SRC = "https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js";

export default function MarketTicker() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src  = SCRIPT_SRC;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="bg-[#081018] border-b border-white/10 overflow-hidden">
      {React.createElement("tv-ticker-tape", {
        symbols:           "FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:XAGUSD,OANDA:GBPUSD",
        "hide-chart":      "",
        "line-chart-type": "Baseline",
        "item-size":       "compact",
        "hover-type":      "chart",
      })}
    </div>
  );
}
