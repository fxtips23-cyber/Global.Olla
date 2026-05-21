"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WIDGET_CONFIG = {
  colorTheme:       "dark",
  isTransparent:    true,
  width:            "100%",
  height:           600,
  locale:           "en",
  importanceFilter: "-1,0,1",
  currencyFilter:   "USD,EUR,GBP,JPY,CAD,AUD,CHF,NZD",
};

const SCRIPT_SRC = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";

export default function EconomicCalendarWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const timeout = setTimeout(() => {
      if (!loaded) setError(true);
    }, 8000);

    const script = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = SCRIPT_SRC;
    script.async = true;
    script.innerHTML = JSON.stringify(WIDGET_CONFIG);
    script.onload = () => { setLoaded(true); clearTimeout(timeout); };
    script.onerror = () => { setError(true); clearTimeout(timeout); };

    container.appendChild(script);
    return () => clearTimeout(timeout);
  }, [loaded]);

  if (error) {
    return (
      <div className="rounded-2xl border border-gray-100 dark:border-[#1F2937] bg-[#F5F7FA] dark:bg-[#0F1720] p-10 text-center">
        <div className="w-14 h-14 rounded-2xl border border-gray-200 dark:border-[#374151] bg-white dark:bg-[#0A1220] flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-[15px] font-bold text-[#111827] dark:text-[#F9FAFB] mb-2">Calendar Unavailable</h3>
        <p className="text-[13px] text-gray-500 dark:text-[#9CA3AF] mb-6 max-w-sm mx-auto leading-relaxed">
          The live calendar could not be loaded. Access the full economic calendar directly on MQL5 or TradingView.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="https://www.mql5.com/en/economic-calendar" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-[13px] transition-colors"
            style={{ background: "#00CC44", color: "#000" }}>
            MQL5 Economic Calendar
          </Link>
          <Link href="https://www.tradingview.com/economic-calendar/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl text-[13px] border border-gray-200 dark:border-[#374151] text-[#111827] dark:text-[#F9FAFB] hover:border-[#00CC44]/30 transition-colors">
            TradingView Calendar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-100 dark:border-[#1F2937] shadow-sm bg-[#050C15]" style={{ minHeight: 620 }}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050C15]">
          <div className="flex flex-col items-center gap-3">
            <svg className="w-6 h-6 animate-spin text-[#00CC44]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-[12px] text-white/40">Loading economic calendar…</span>
          </div>
        </div>
      )}
      <div ref={containerRef} className="tradingview-widget-container" style={{ height: 620 }}>
        <div className="tradingview-widget-container__widget" style={{ height: 620 }} />
      </div>
    </div>
  );
}
