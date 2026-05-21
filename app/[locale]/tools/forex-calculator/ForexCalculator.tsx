"use client";

import { useState, useCallback } from "react";

/* ─── Instrument definitions ──────────────────────────────────────────── */
interface Instrument {
  symbol: string;
  contractSize: number;
  pipSize: number;
  quoteCurrency: string;
  category: "Forex" | "Metals" | "Crypto" | "Indices";
  needsPrice: boolean; // whether conversion rate is required
}

const INSTRUMENTS: Instrument[] = [
  { symbol: "EURUSD", contractSize: 100000, pipSize: 0.0001, quoteCurrency: "USD", category: "Forex",   needsPrice: false },
  { symbol: "GBPUSD", contractSize: 100000, pipSize: 0.0001, quoteCurrency: "USD", category: "Forex",   needsPrice: false },
  { symbol: "USDJPY", contractSize: 100000, pipSize: 0.01,   quoteCurrency: "JPY", category: "Forex",   needsPrice: true  },
  { symbol: "USDCHF", contractSize: 100000, pipSize: 0.0001, quoteCurrency: "CHF", category: "Forex",   needsPrice: true  },
  { symbol: "AUDUSD", contractSize: 100000, pipSize: 0.0001, quoteCurrency: "USD", category: "Forex",   needsPrice: false },
  { symbol: "NZDUSD", contractSize: 100000, pipSize: 0.0001, quoteCurrency: "USD", category: "Forex",   needsPrice: false },
  { symbol: "USDCAD", contractSize: 100000, pipSize: 0.0001, quoteCurrency: "CAD", category: "Forex",   needsPrice: true  },
  { symbol: "XAUUSD", contractSize: 100,    pipSize: 0.01,   quoteCurrency: "USD", category: "Metals",  needsPrice: false },
  { symbol: "XAGUSD", contractSize: 5000,   pipSize: 0.001,  quoteCurrency: "USD", category: "Metals",  needsPrice: false },
  { symbol: "BTCUSD", contractSize: 1,      pipSize: 1,      quoteCurrency: "USD", category: "Crypto",  needsPrice: false },
  { symbol: "ETHUSD", contractSize: 1,      pipSize: 0.01,   quoteCurrency: "USD", category: "Crypto",  needsPrice: false },
  { symbol: "US30",   contractSize: 1,      pipSize: 1,      quoteCurrency: "USD", category: "Indices", needsPrice: false },
  { symbol: "NAS100", contractSize: 1,      pipSize: 0.25,   quoteCurrency: "USD", category: "Indices", needsPrice: false },
  { symbol: "SPX500", contractSize: 1,      pipSize: 0.1,    quoteCurrency: "USD", category: "Indices", needsPrice: false },
];

const getInstrument = (symbol: string): Instrument =>
  INSTRUMENTS.find((i) => i.symbol === symbol) ?? INSTRUMENTS[0];

/** Pip value per 1 standard lot in account currency (assumed USD) */
function pipValuePerLot(inst: Instrument, currentPrice: number): number {
  const raw = inst.pipSize * inst.contractSize;
  // If quote ≠ USD, convert: pip_value_USD = pip_value_quote / price
  if (inst.quoteCurrency !== "USD" && currentPrice > 0) {
    return raw / currentPrice;
  }
  return raw;
}

/* ─── Input component ─────────────────────────────────────────────────── */
function Field({
  label, hint, value, onChange, type = "number", min, max, step, suffix, disabled, error,
}: {
  label: string; hint?: string; value: string; onChange: (v: string) => void;
  type?: string; min?: string; max?: string; step?: string; suffix?: string;
  disabled?: boolean; error?: string;
}) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border rounded-xl px-4 py-3 text-[14px] font-medium bg-white focus:outline-none transition-colors pr-${suffix ? "16" : "4"} ${
 error
 ? "border-red-400 text-red-700 focus:border-red-500"
 : "border-gray-200 text-[#111827] focus:border-[#00CC44] "
 } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-gray-400 font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
      {hint && !error && <p className="text-[11px] text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string; group?: string }[];
}) {
  // Group options
  const groups = Array.from(new Set(options.map((o) => o.group ?? ""))).filter(Boolean);
  const ungrouped = options.filter((o) => !o.group);

  return (
    <div>
      <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium bg-white text-[#111827] focus:outline-none focus:border-[#00CC44] transition-colors appearance-none cursor-pointer"
      >
        {ungrouped.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
        {groups.map((g) => (
          <optgroup key={g} label={g}>
            {options.filter((o) => o.group === g).map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

/* ─── Result row ─────────────────────────────────────────────────────── */
function ResultRow({ label, value, highlight, sub }: { label: string; value: string; highlight?: boolean; sub?: string }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-gray-50 last:border-0">
      <div>
        <span className="text-[13px] text-gray-500">{label}</span>
        {sub && <div className="text-[11px] text-gray-400 mt-0.5">{sub}</div>}
      </div>
      <span className={`text-[15px] font-bold font-mono ${highlight ? "text-[#00CC44]" : "text-[#111827] "}`}>
        {value}
      </span>
    </div>
  );
}

function ResultsCard({ title, rows, empty }: {
  title: string;
  rows: { label: string; value: string; highlight?: boolean; sub?: string }[];
  empty?: boolean;
}) {
  return (
    <div className="bg-[#F5F7FA] border border-gray-200 rounded-2xl p-5 h-full shadow-inner">
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{title}</div>
      {empty ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-[12px] text-gray-400">Enter values and click<br /><strong className="text-gray-500">Calculate</strong> to see results</p>
        </div>
      ) : (
        <div>{rows.map((r) => <ResultRow key={r.label} {...r} />)}</div>
      )}
    </div>
  );
}

/* ─── Buttons ─────────────────────────────────────────────────────────── */
function CalcBtn({ onClick, loading = false }: { onClick: () => void; loading?: boolean }) {
  return (
    <button onClick={onClick} disabled={loading}
      className="flex-1 bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold py-3.5 rounded-xl text-[14px] transition-colors disabled:opacity-60">
      {loading ? "Calculating…" : "Calculate"}
    </button>
  );
}

function ResetBtn({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="flex-shrink-0 border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-700 font-medium py-3.5 px-5 rounded-xl text-[13px] transition-colors">
      Reset
    </button>
  );
}

/* ─── Format helpers ──────────────────────────────────────────────────── */
const fmt = (n: number, decimals = 2) =>
  isNaN(n) || !isFinite(n) ? "—" : n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
const fmtCcy = (n: number) => "$" + fmt(n, 2);
const fmtLot = (n: number) => fmt(n, 4) + " lots";

/* ═══════════════════════════════════════════════════════════════════════
   TAB 1 — POSITION SIZE
   ═══════════════════════════════════════════════════════════════════════ */
function PositionSizeCalc() {
  const [balance, setBalance] = useState("10000");
  const [risk, setRisk] = useState("1");
  const [sl, setSl] = useState("50");
  const [symbol, setSymbol] = useState("EURUSD");
  const [price, setPrice] = useState("1.10000");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<null | { riskAmt: number; lotSize: number; units: number; pipVal: number }>(null);

  const inst = getInstrument(symbol);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!balance || +balance <= 0) e.balance = "Must be greater than 0";
    if (!risk || +risk <= 0 || +risk > 100) e.risk = "Must be between 0 and 100";
    if (!sl || +sl <= 0) e.sl = "Must be greater than 0";
    if (inst.needsPrice && (!price || +price <= 0)) e.price = "Required for this pair";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;
    const riskAmt = +balance * (+risk / 100);
    const pvLot = pipValuePerLot(inst, +price);
    const lotSize = riskAmt / (+sl * pvLot);
    const units = lotSize * inst.contractSize;
    setResult({ riskAmt, lotSize, units, pipVal: pvLot * lotSize });
  };

  const reset = () => { setBalance("10000"); setRisk("1"); setSl("50"); setSymbol("EURUSD"); setPrice("1.10000"); setErrors({}); setResult(null); };

  return (
    <div className="grid lg:grid-cols-[1fr_340px] gap-6">
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Account Balance" value={balance} onChange={setBalance} min="0" step="100" suffix="USD" error={errors.balance} />
          <Field label="Risk Percentage" value={risk} onChange={setRisk} min="0" max="100" step="0.1" suffix="%" error={errors.risk} hint="e.g. 1–2% recommended" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <SelectField label="Currency Pair" value={symbol} onChange={(v) => { setSymbol(v); setResult(null); }} options={INSTRUMENTS.map((i) => ({ value: i.symbol, label: i.symbol, group: i.category }))} />
          <Field label="Stop Loss" value={sl} onChange={setSl} min="0" step="1" suffix="pips" error={errors.sl} hint="Distance to stop loss in pips" />
        </div>
        {inst.needsPrice && (
          <Field label={`Current ${inst.symbol} Rate`} value={price} onChange={setPrice} min="0" step="0.00001" hint={`Current price of ${inst.symbol} — required to convert pip value to USD`} error={errors.price} />
        )}
        <div className="flex gap-3 pt-2">
          <CalcBtn onClick={calculate} />
          <ResetBtn onClick={reset} />
        </div>
        <div className="text-[11px] text-gray-400 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3">
          <strong className="text-gray-500">Formula:</strong> Risk Amount = Balance × Risk% · Lot Size = Risk Amount ÷ (Stop Loss Pips × Pip Value per lot)
        </div>
      </div>
      <ResultsCard
        title="Position Size Results"
        empty={!result}
        rows={result ? [
          { label: "Risk Amount",     value: fmtCcy(result.riskAmt),   highlight: true, sub: `${risk}% of ${fmtCcy(+balance)}` },
          { label: "Suggested Lot Size", value: fmtLot(result.lotSize), highlight: true },
          { label: "Position Size (Units)", value: fmt(result.units, 0) + " units" },
          { label: "Pip Value",        value: fmtCcy(result.pipVal),    sub: "at calculated lot size" },
          { label: "Pip Value / Lot",  value: fmtCcy(pipValuePerLot(inst, +price)) },
        ] : []}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TAB 2 — PIP VALUE
   ═══════════════════════════════════════════════════════════════════════ */
function PipValueCalc() {
  const [symbol, setSymbol] = useState("EURUSD");
  const [lots, setLots] = useState("1");
  const [price, setPrice] = useState("1.10000");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<null | { pvLot: number; pvTotal: number; pipSize: number; contractSize: number }>(null);

  const inst = getInstrument(symbol);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!lots || +lots <= 0) e.lots = "Must be greater than 0";
    if (inst.needsPrice && (!price || +price <= 0)) e.price = "Required for this pair";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;
    const pvLot = pipValuePerLot(inst, +price);
    setResult({ pvLot, pvTotal: pvLot * +lots, pipSize: inst.pipSize, contractSize: inst.contractSize });
  };

  const reset = () => { setSymbol("EURUSD"); setLots("1"); setPrice("1.10000"); setErrors({}); setResult(null); };

  return (
    <div className="grid lg:grid-cols-[1fr_340px] gap-6">
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <SelectField label="Currency Pair" value={symbol} onChange={(v) => { setSymbol(v); setResult(null); }} options={INSTRUMENTS.map((i) => ({ value: i.symbol, label: i.symbol, group: i.category }))} />
          <Field label="Lot Size" value={lots} onChange={setLots} min="0.01" step="0.01" suffix="lots" error={errors.lots} />
        </div>
        {inst.needsPrice && (
          <Field label={`Current ${inst.symbol} Rate`} value={price} onChange={setPrice} min="0" step="0.00001" hint="Required to convert pip value to USD" error={errors.price} />
        )}
        <div className="bg-[#F5F7FA] border border-gray-100 rounded-xl px-4 py-3 text-[12px] text-gray-500">
          <span className="font-semibold text-[#111827]">{inst.symbol}</span> · Pip size: <strong>{inst.pipSize}</strong> · Contract size: <strong>{inst.contractSize.toLocaleString()}</strong> · Quote currency: <strong>{inst.quoteCurrency}</strong>
        </div>
        <div className="flex gap-3">
          <CalcBtn onClick={calculate} />
          <ResetBtn onClick={reset} />
        </div>
      </div>
      <ResultsCard
        title="Pip Value Results"
        empty={!result}
        rows={result ? [
          { label: "Pip Value (total)",     value: fmtCcy(result.pvTotal),   highlight: true, sub: `For ${lots} lot${+lots !== 1 ? "s" : ""}` },
          { label: "Pip Value per 1 Lot",   value: fmtCcy(result.pvLot) },
          { label: "Pip Size",              value: result.pipSize.toString() },
          { label: "Contract Size",         value: result.contractSize.toLocaleString() + " units" },
          { label: "Account Currency",      value: "USD (assumed)" },
        ] : []}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TAB 3 — MARGIN
   ═══════════════════════════════════════════════════════════════════════ */
function MarginCalc() {
  const [symbol, setSymbol] = useState("EURUSD");
  const [lots, setLots] = useState("1");
  const [leverage, setLeverage] = useState("500");
  const [price, setPrice] = useState("1.10000");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<null | { notional: number; margin: number }>(null);

  const inst = getInstrument(symbol);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!lots || +lots <= 0) e.lots = "Must be greater than 0";
    if (!leverage || +leverage <= 0) e.leverage = "Must be greater than 0";
    if (!price || +price <= 0) e.price = "Must be greater than 0";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;
    const notional = +lots * inst.contractSize * +price;
    const margin = notional / +leverage;
    setResult({ notional, margin });
  };

  const reset = () => { setSymbol("EURUSD"); setLots("1"); setLeverage("500"); setPrice("1.10000"); setErrors({}); setResult(null); };

  return (
    <div className="grid lg:grid-cols-[1fr_340px] gap-6">
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <SelectField label="Currency Pair" value={symbol} onChange={(v) => { setSymbol(v); setResult(null); }} options={INSTRUMENTS.map((i) => ({ value: i.symbol, label: i.symbol, group: i.category }))} />
          <Field label="Lot Size" value={lots} onChange={setLots} min="0.01" step="0.01" suffix="lots" error={errors.lots} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Leverage" value={leverage} onChange={setLeverage} min="1" step="1" suffix="1:x" hint="e.g. 500 = 1:500 leverage" error={errors.leverage} />
          <Field label="Current Price" value={price} onChange={setPrice} min="0" step="0.00001" hint="Current market price of the pair" error={errors.price} />
        </div>
        <div className="flex gap-3">
          <CalcBtn onClick={calculate} />
          <ResetBtn onClick={reset} />
        </div>
        <div className="text-[11px] text-gray-400 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3">
          <strong className="text-gray-500">Formula:</strong> Notional Value = Lots × Contract Size × Price · Required Margin = Notional ÷ Leverage
        </div>
      </div>
      <ResultsCard
        title="Margin Results"
        empty={!result}
        rows={result ? [
          { label: "Required Margin",  value: fmtCcy(result.margin),   highlight: true, sub: `At 1:${leverage} leverage` },
          { label: "Notional Value",   value: fmtCcy(result.notional), sub: `${lots} lot × ${inst.contractSize.toLocaleString()} × ${price}` },
          { label: "Leverage",         value: "1:" + leverage },
          { label: "Lots",             value: lots + " lots" },
          { label: "Contract Size",    value: inst.contractSize.toLocaleString() + " units" },
        ] : []}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TAB 4 — PROFIT / LOSS
   ═══════════════════════════════════════════════════════════════════════ */
function PnLCalc() {
  const [symbol, setSymbol] = useState("EURUSD");
  const [direction, setDirection] = useState<"buy" | "sell">("buy");
  const [lots, setLots] = useState("1");
  const [openPrice, setOpenPrice] = useState("1.10000");
  const [closePrice, setClosePrice] = useState("1.11000");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<null | { pnl: number; pips: number; notional: number }>(null);

  const inst = getInstrument(symbol);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!lots || +lots <= 0) e.lots = "Must be greater than 0";
    if (!openPrice || +openPrice <= 0) e.openPrice = "Must be greater than 0";
    if (!closePrice || +closePrice <= 0) e.closePrice = "Must be greater than 0";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;
    const diff = direction === "buy" ? +closePrice - +openPrice : +openPrice - +closePrice;
    const pnl = diff * +lots * inst.contractSize;
    const pips = diff / inst.pipSize;
    const notional = +lots * inst.contractSize * +openPrice;
    setResult({ pnl, pips, notional });
  };

  const reset = () => { setSymbol("EURUSD"); setDirection("buy"); setLots("1"); setOpenPrice("1.10000"); setClosePrice("1.11000"); setErrors({}); setResult(null); };

  return (
    <div className="grid lg:grid-cols-[1fr_340px] gap-6">
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <SelectField label="Currency Pair" value={symbol} onChange={(v) => { setSymbol(v); setResult(null); }} options={INSTRUMENTS.map((i) => ({ value: i.symbol, label: i.symbol, group: i.category }))} />
          <div>
            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Direction</label>
            <div className="flex rounded-xl overflow-hidden border border-gray-200">
              {(["buy", "sell"] as const).map((d) => (
                <button key={d} onClick={() => { setDirection(d); setResult(null); }}
                  className={`flex-1 py-3 text-[13px] font-bold transition-colors capitalize ${
 direction === d
 ? d === "buy"
 ? "bg-[#00CC44] text-black"
 : "bg-red-500 text-white"
 : "bg-white text-gray-400 hover:bg-gray-50 "
 }`}>{d}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <Field label="Lot Size" value={lots} onChange={setLots} min="0.01" step="0.01" suffix="lots" error={errors.lots} />
          <Field label="Open Price" value={openPrice} onChange={setOpenPrice} min="0" step="0.00001" error={errors.openPrice} />
          <Field label="Close Price" value={closePrice} onChange={setClosePrice} min="0" step="0.00001" error={errors.closePrice} />
        </div>
        <div className="flex gap-3">
          <CalcBtn onClick={calculate} />
          <ResetBtn onClick={reset} />
        </div>
        <div className="text-[11px] text-gray-400 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3">
          <strong className="text-gray-500">Formula (Buy):</strong> P&amp;L = (Close − Open) × Lots × Contract Size · <strong className="text-gray-500">Sell:</strong> P&amp;L = (Open − Close) × Lots × Contract Size
        </div>
      </div>
      <ResultsCard
        title="Profit / Loss Results"
        empty={!result}
        rows={result ? [
          {
            label: "Profit / Loss",
            value: (result.pnl >= 0 ? "+" : "") + fmtCcy(result.pnl),
            highlight: result.pnl >= 0,
            sub: result.pnl < 0 ? "Loss on this trade" : "Gain on this trade",
          },
          {
            label: "Pips",
            value: (result.pips >= 0 ? "+" : "") + fmt(result.pips, 1) + " pips",
            sub: direction === "buy" ? "Close − Open" : "Open − Close",
          },
          { label: "Notional Value",  value: fmtCcy(result.notional), sub: "at open price" },
          { label: "Direction",       value: direction.toUpperCase() },
          { label: "Lot Size",        value: lots + " lots" },
        ] : []}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TAB 5 — SWAP INFO
   ═══════════════════════════════════════════════════════════════════════ */
function SwapInfo() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div>
        <h3 className="text-xl font-bold text-[#111827] mb-3">Swap / Rollover Information</h3>
        <div className="space-y-3 text-[14px] text-gray-600 leading-relaxed">
          <p>Swap (or rollover) charges are applied to positions held open past the daily server rollover time — typically 00:00 server time. Swap rates reflect the interest rate differential between the two currencies in a pair, adjusted by the broker.</p>
          <p>Swap rates vary by instrument, direction (long/short), account type, and are subject to change without notice based on market and interbank rate changes.</p>
          <p><strong className="text-[#111827]">Where to find live swap rates:</strong> Open your MetaTrader 4 platform → Right-click any instrument in Market Watch → Select "Specification" → View the Long Swap and Short Swap values.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-[#F5F7FA] border border-[#00CC44]/20 rounded-2xl p-5">
          <div className="text-[11px] font-bold text-[#00CC44] uppercase tracking-widest mb-3">Live Rates in MT4</div>
          <ol className="space-y-2 text-[13px] text-gray-600">
            {[
              "Open MetaTrader 4",
              "Go to Market Watch",
              "Right-click your instrument",
              "Select Specification",
              "View Long Swap and Short Swap values",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#00CC44] text-black text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
        <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
          <div className="text-[12px] font-bold text-amber-800 mb-1">Important Note</div>
          <p className="text-[12px] text-amber-700 leading-relaxed">
            Swap rates vary by symbol and account type. This calculator does not display swap rates as they change frequently. Please check live MT4 specifications or contact Olla Trade support at <a href="mailto:cst@ollatrade.com" className="font-semibold underline hover:no-underline">cst@ollatrade.com</a> for current rates.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
type Tab = "position" | "pip" | "margin" | "pnl" | "swap";

const TABS: { key: Tab; label: string; shortLabel: string }[] = [
  { key: "position", label: "Position Size",  shortLabel: "Position" },
  { key: "pip",      label: "Pip Value",       shortLabel: "Pip Value" },
  { key: "margin",   label: "Margin",          shortLabel: "Margin" },
  { key: "pnl",      label: "Profit / Loss",   shortLabel: "P&L" },
  { key: "swap",     label: "Swap Info",       shortLabel: "Swap" },
];

export default function ForexCalculator() {
  const [activeTab, setActiveTab] = useState<Tab>("position");

  return (
    <div>
      {/* Tab bar — sits on white section bg, uses gray tray for contrast */}
      <div className="flex overflow-x-auto gap-1 mb-8 p-1.5 bg-gray-100 border border-gray-200 rounded-2xl">
        {TABS.map(({ key, label, shortLabel }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-shrink-0 flex-1 px-3 py-2.5 rounded-xl text-[13px] font-semibold whitespace-nowrap transition-all ${
 activeTab === key
 ? "bg-[#00CC44] text-black shadow-sm"
 : "text-gray-500 hover:text-[#111827] hover:bg-white "
 }`}
          >
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Active calculator */}
      <div className="min-h-[420px]">
        {activeTab === "position" && <PositionSizeCalc />}
        {activeTab === "pip"      && <PipValueCalc />}
        {activeTab === "margin"   && <MarginCalc />}
        {activeTab === "pnl"      && <PnLCalc />}
        {activeTab === "swap"     && <SwapInfo />}
      </div>

      {/* Disclaimer */}
      <div className="mt-8 border-t border-gray-100 pt-6">
        <p className="text-[11px] text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
          <strong className="text-gray-500">Disclaimer:</strong> Calculator results are for informational purposes only. Actual trading conditions, contract sizes, pip values, margin requirements, swaps, and pricing may vary depending on market conditions, account type, platform specifications, and Olla Trade terms and conditions. All calculations assume a USD account currency.
        </p>
      </div>
    </div>
  );
}
