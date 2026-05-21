import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Order Execution Policy",
  description: "Olla Trade formal Order Execution Policy — scope, execution approach, pricing, slippage, order handling, conflicts of interest, and policy review.",
};

const effective = "1 January 2025";
const reviewed  = "1 January 2026";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-[18px] font-bold text-[#111827] mb-4 pb-3 border-b border-gray-100">{title}</h2>
      <div className="text-[13px] text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const sections = [
  "Purpose",
  "Scope",
  "Order Execution Approach",
  "Execution Factors",
  "Pricing and Spreads",
  "Liquidity and Market Conditions",
  "Slippage",
  "Requotes",
  "Supported Order Types",
  "Specific Client Instructions",
  "Market Disruption",
  "Conflicts of Interest",
  "Client Responsibility",
  "Monitoring and Review",
  "Risk Disclosure",
  "Contact Information",
];

export default function ExecutionPolicyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-[#050C15] pt-10 pb-14 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[11px] text-white/22 mb-6">
            <Link href="/" className="hover:text-white/45 transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <Link href="/company/legal" className="hover:text-white/45 transition-colors">Legal</Link>
            <span className="text-white/10">/</span>
            <span className="text-white/40">Order Execution Policy</span>
          </nav>
          <div className="text-[11px] font-semibold text-[#00CC44] uppercase tracking-widest mb-5">Legal Document</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
            Order Execution Policy
          </h1>
          <p className="text-[16px] text-white/40 max-w-2xl leading-relaxed mb-8">
            This policy describes how Olla Trade Ltd. executes client orders, the factors considered, and the obligations of both the Company and the client.
          </p>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <div className="bg-white/4 border border-white/8 rounded-lg px-4 py-2">
              <span className="text-white/30">Effective: </span>
              <span className="text-white/60 font-semibold">{effective}</span>
            </div>
            <div className="bg-white/4 border border-white/8 rounded-lg px-4 py-2">
              <span className="text-white/30">Last Reviewed: </span>
              <span className="text-white/60 font-semibold">{reviewed}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-link banner ────────────────────────────────────── */}
      <div className="bg-[#0A1220] border-b border-white/6 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/35">
            Looking for a client-friendly explanation of our execution approach?
          </p>
          <Link href="/execution-information"
            className="text-[12px] font-semibold text-[#00CC44] hover:text-[#00DD4A] transition-colors flex items-center gap-1.5 flex-shrink-0">
            View Execution Information →
          </Link>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Sidebar TOC */}
            <aside className="lg:w-60 flex-shrink-0 lg:sticky lg:top-24">
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Table of Contents</div>
                <nav className="space-y-1">
                  {sections.map((s, i) => (
                    <a
                      key={s}
                      href={`#s${i + 1}`}
                      className="flex items-center gap-2 text-[12px] text-gray-500 hover:text-[#00CC44] transition-colors py-0.5"
                    >
                      <span className="text-[10px] font-bold text-gray-300 w-5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      {s}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Policy body */}
            <div className="flex-1 space-y-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-10">

                <Section id="s1" title="1. Purpose">
                  <p>This Order Execution Policy ("Policy") sets out the approach adopted by Olla Trade Ltd. ("the Company", "we", "us") for the execution of client orders in financial instruments.</p>
                  <p>The purpose of this Policy is to provide clients with a clear and transparent explanation of how the Company executes orders, the factors it takes into account, and the conditions under which execution takes place.</p>
                  <p>This Policy forms part of the Company's client agreement and should be read in conjunction with the Terms and Conditions.</p>
                </Section>

                <Section id="s2" title="2. Scope">
                  <p>This Policy applies to all clients of Olla Trade Ltd. who trade financial instruments through the MetaTrader 4 platform. It covers all asset classes offered by the Company, including Forex, Metals, Indices, Energies, Cryptocurrencies, and Stocks.</p>
                  <p>This Policy applies to all order types supported by the Company, including Market Orders, Limit Orders, Stop Orders, Stop Loss orders, and Take Profit orders.</p>
                </Section>

                <Section id="s3" title="3. Order Execution Approach">
                  <p>Olla Trade operates on a market execution basis for all client accounts. Under this model, orders are transmitted and executed at the best available market price at the time of processing, as sourced from the Company's liquidity providers.</p>
                  <p>The Company acts as principal in all transactions. Orders are not passed to an exchange or regulated market. Instead, they are executed through the Company's internal pricing engine and liquidity pool.</p>
                  <p>The Company does not use a dealing desk for routine order execution. Orders are processed electronically without manual dealer intervention under normal market conditions.</p>
                </Section>

                <Section id="s4" title="4. Execution Factors">
                  <p>In determining the best execution outcome for clients, the Company considers the following factors, listed in order of general priority:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong className="text-[#111827]">Price:</strong> The price at which the order is executed, relative to the current market price.</li>
                    <li><strong className="text-[#111827]">Cost:</strong> Any explicit costs associated with execution, including the spread. The Company does not charge per-trade commissions.</li>
                    <li><strong className="text-[#111827]">Speed of execution:</strong> The time taken to process and fill the order from the moment of submission.</li>
                    <li><strong className="text-[#111827]">Likelihood of execution:</strong> The probability that the order will be filled at or near the requested price, given current liquidity.</li>
                    <li><strong className="text-[#111827]">Size of order:</strong> Larger orders may require execution across multiple price levels if market depth is insufficient.</li>
                    <li><strong className="text-[#111827]">Nature of the order:</strong> Different order types (Market, Limit, Stop) are handled differently with respect to price and timing.</li>
                  </ul>
                  <p>For retail clients, price and cost are typically the most significant factors. The relative weighting of factors may vary depending on market conditions, the instrument being traded, and the characteristics of the specific order.</p>
                </Section>

                <Section id="s5" title="5. Pricing and Spreads">
                  <p>The Company derives its prices from aggregated quotes provided by its liquidity providers. The bid and ask prices displayed in the MetaTrader 4 platform reflect the best available prices from this liquidity pool at any given moment.</p>
                  <p>All spreads offered by the Company are variable and reflect prevailing market conditions including supply and demand, trading session activity, and overall market liquidity. The indicative spreads shown on the Company's website represent the minimum spreads achievable under normal market conditions and are not guaranteed at all times.</p>
                  <p>The Company's revenue is derived from the spread between the bid and ask price. No separate commission is charged on standard trades.</p>
                </Section>

                <Section id="s6" title="6. Liquidity and Market Conditions">
                  <p>Execution quality is directly affected by available market liquidity. During periods of high market volatility — including major economic data releases, central bank announcements, geopolitical events, and market open and close periods — liquidity may be reduced and execution conditions may differ from those prevailing under normal conditions.</p>
                  <p>Under low-liquidity conditions, spreads may widen significantly, and orders may be executed at prices that differ materially from the requested price. The Company does not guarantee execution at any specific price under all market conditions.</p>
                  <p>Price gaps (significant price movements between consecutive quotes) may occur when markets reopen after scheduled closures or during extraordinary market events.</p>
                </Section>

                <Section id="s7" title="7. Slippage">
                  <p>Slippage refers to the difference between the price at which a client requests an order to be executed and the price at which it is actually filled. Slippage is an inherent feature of market execution and can be positive (filled at a better price than requested) or negative (filled at a worse price than requested).</p>
                  <p>Slippage is more likely to occur during periods of high market volatility, low liquidity, rapid price movement, or around significant economic news events. The Company does not guarantee execution at the exact price requested by the client under any market condition.</p>
                  <p>The Company does not artificially manipulate slippage in its favour. Slippage reflects genuine market conditions at the time of order execution.</p>
                </Section>

                <Section id="s8" title="8. Requotes">
                  <p>The Company's market execution model does not involve requotes. All orders submitted by clients are accepted and executed at the best available market price at the time of processing. Clients will not be asked to accept a different price before their order is filled.</p>
                  <p>However, because orders are executed at the prevailing market price at the moment of execution, the final fill price may differ from the price displayed at the time the order was submitted, particularly in fast-moving markets. This is a consequence of market execution and is not a requote.</p>
                </Section>

                <Section id="s9" title="9. Supported Order Types">
                  <p>The Company supports the following order types on the MetaTrader 4 platform:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong className="text-[#111827]">Market Order:</strong> Executed immediately at the current best available market price.</li>
                    <li><strong className="text-[#111827]">Limit Order:</strong> Executed at the specified price or better.</li>
                    <li><strong className="text-[#111827]">Stop Order:</strong> Triggered when the market reaches the specified price, then executed as a market order.</li>
                    <li><strong className="text-[#111827]">Stop Loss:</strong> An instruction to close a position automatically if the market moves against the client to a specified price.</li>
                    <li><strong className="text-[#111827]">Take Profit:</strong> An instruction to close a position automatically when the market reaches a specified profit target.</li>
                    <li><strong className="text-[#111827]">Trailing Stop:</strong> A dynamic stop loss that adjusts as the market moves in the client's favour.</li>
                  </ul>
                  <p>Pending orders are held on the Company's servers and triggered automatically when market conditions are met. Execution of pending orders is subject to available market liquidity and may not occur at exactly the specified price in fast-moving markets.</p>
                </Section>

                <Section id="s10" title="10. Specific Client Instructions">
                  <p>Where a client provides specific instructions regarding the execution of an order — such as a specific price, time, or venue — the Company will follow those instructions to the extent reasonably practicable.</p>
                  <p>Following specific client instructions may prevent the Company from achieving the best possible execution outcome in respect of factors not covered by those instructions. The Company is not liable for execution outcomes that result from the client's specific instructions.</p>
                </Section>

                <Section id="s11" title="11. Market Disruption">
                  <p>In the event of market disruption, including but not limited to technical failures, communication errors, exchange halts, or extraordinary market conditions, the Company reserves the right to take appropriate actions to protect client interests and the integrity of its systems.</p>
                  <p>Such actions may include temporarily suspending trading, widening spreads, limiting order sizes, or voiding transactions that were clearly executed at erroneous prices. The Company will endeavour to communicate such actions to clients as promptly as reasonably practicable.</p>
                </Section>

                <Section id="s12" title="12. Conflicts of Interest">
                  <p>As the Company acts as principal in all transactions, a potential conflict of interest exists between the Company and its clients in relation to pricing and execution. The Company maintains internal procedures to identify, manage, and mitigate conflicts of interest.</p>
                  <p>Pricing is derived from external liquidity providers and reflects genuine market conditions. The Company's pricing engine is not designed to systematically disadvantage clients. The Company does not engage in practices that would knowingly harm client execution outcomes.</p>
                </Section>

                <Section id="s13" title="13. Client Responsibility">
                  <p>Clients are responsible for ensuring they understand the order types and execution model before trading. Clients are responsible for providing accurate order instructions and for maintaining sufficient margin in their accounts.</p>
                  <p>Clients should be aware of the risks associated with market execution, including slippage, spread widening, and execution at prices different from those requested. These risks are inherent in trading real financial markets and are not a function of any deficiency in the Company's services.</p>
                </Section>

                <Section id="s14" title="14. Monitoring and Review">
                  <p>The Company regularly monitors its execution quality and liquidity provider performance to identify any degradation in execution standards. This monitoring includes periodic review of fill rates, slippage statistics, spread analysis, and order rejection rates.</p>
                  <p>This Policy is reviewed at least annually, and more frequently if material changes occur in the Company's business, technology, regulatory environment, or liquidity arrangements. Clients will be notified of material changes to this Policy.</p>
                </Section>

                <Section id="s15" title="15. Risk Disclosure">
                  <p>Trading Forex and CFDs involves significant risk of loss. Leveraged trading amplifies both potential profits and potential losses. It is possible to lose more than your initial deposit.</p>
                  <p>Execution quality, spreads, and liquidity conditions can vary significantly from those prevailing under normal market conditions, particularly during major economic events, market open and close periods, and periods of low liquidity.</p>
                  <p>Clients should read the full <Link href="/legal/risk-disclosures" className="text-[#00CC44] hover:underline font-semibold">Risk Disclosures</Link> before trading. The Execution Information page provides a client-friendly explanation of execution concepts and common questions.</p>
                </Section>

                <Section id="s16" title="16. Contact Information">
                  <p>For queries regarding this Policy or order execution, please contact:</p>
                  <div className="bg-[#F5F7FA] border border-gray-100 rounded-xl p-5 not-prose">
                    <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
                      {[
                        ["Company",   SITE.companyName],
                        ["Email",     SITE.email],
                        ["Phone",     SITE.phone],
                        ["Address",   SITE.address],
                        ["Reg. No.", `A${SITE.regNumber}`],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                          <div className="text-gray-700">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Section>

              </div>

              {/* Cross-links footer */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">Related Documents</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Execution Information",  href: "/execution-information",      desc: "Client-friendly explanation of order execution and pricing." },
                    { label: "Terms & Conditions",     href: "/legal/terms",                desc: "Full terms governing your use of Olla Trade services." },
                    { label: "Risk Disclosures",       href: "/legal/risk-disclosures",     desc: "Detailed risk warnings for Forex and CFD trading." },
                    { label: "Trading Conditions",     href: "/trading/conditions",         desc: "Spreads, leverage, and account conditions by instrument." },
                  ].map(({ label, href, desc }) => (
                    <Link key={label} href={href}
                      className="flex items-start gap-3 p-4 border border-gray-100 rounded-xl hover:border-[#00CC44]/20 hover:bg-[#F5F7FA] transition-all group">
                      <div className="w-2 h-2 rounded-full bg-[#00CC44] flex-shrink-0 mt-1.5" />
                      <div>
                        <div className="text-[13px] font-bold text-[#111827] group-hover:text-[#00CC44] transition-colors">{label}</div>
                        <div className="text-[11px] text-gray-400 leading-relaxed mt-0.5">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
