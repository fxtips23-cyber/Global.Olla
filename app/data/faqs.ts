/**
 * Centralised FAQ data — one export per page.
 * Import only the relevant FAQ set on each page.
 * Content must remain compliant: no guaranteed profit, no risk-free claims,
 * no invented regulation details, and no guaranteed withdrawal timelines.
 */

export interface FAQ { q: string; a: string; }

/* ─── Forex ─────────────────────────────────────────────────────────── */
export const forexFaqs: FAQ[] = [
  {
    q: "What is forex trading?",
    a: "Forex (foreign exchange) trading involves buying one currency while simultaneously selling another. Currencies are traded in pairs — such as EUR/USD — and the exchange rate shows how much of the quote currency is needed to buy one unit of the base currency. With Olla Trade, you can trade 70+ currency pairs as CFDs on the MetaTrader 4 platform.",
  },
  {
    q: "Which forex pairs are available on Olla Trade?",
    a: "Olla Trade offers more than 70 currency pairs across major, minor, and exotic categories. Major pairs include EUR/USD, GBP/USD, USD/JPY, AUD/USD, and USD/CHF. Minor pairs include EUR/GBP and GBP/JPY. A full list of available instruments is visible in your MT4 platform under Market Watch.",
  },
  {
    q: "What are the spreads on forex pairs?",
    a: "Spreads on major forex pairs start from 0.0 pips on the Elite account and from 1.4 pips on the Standard account. Spreads are variable and may widen during periods of high market volatility, major economic news releases, or low liquidity conditions such as outside regular trading hours.",
  },
  {
    q: "Can I trade forex on MetaTrader 4?",
    a: "Yes. All Olla Trade accounts include full access to the MetaTrader 4 platform across desktop (Windows), WebTrader (browser), iOS, and Android. Forex is one of the most actively traded instruments on MT4, with full support for charting, indicators, one-click trading, and Expert Advisors.",
  },
  {
    q: "What affects forex market prices?",
    a: "Forex prices are influenced by a range of macro factors including central bank interest rate decisions, economic data releases (GDP, CPI, employment), geopolitical events, trade balances, and overall market risk sentiment. Major pairs tend to be most sensitive to US Federal Reserve and European Central Bank policy announcements.",
  },
];

/* ─── Metals ─────────────────────────────────────────────────────────── */
export const metalsFaqs: FAQ[] = [
  {
    q: "What metals can I trade with Olla Trade?",
    a: "Olla Trade currently offers trading on Gold (XAUUSD) and Silver (XAGUSD) as CFDs on the MetaTrader 4 platform. Both instruments are available 24 hours a day, Monday to Friday. Additional metal instruments may be available — check your MT4 Market Watch for the full list.",
  },
  {
    q: "Can I trade gold and silver on MetaTrader 4?",
    a: "Yes. Gold (XAUUSD) and Silver (XAGUSD) are fully supported on the MT4 platform through your Olla Trade account. You can access real-time quotes, use all built-in technical indicators, set price alerts, and deploy Expert Advisors on metals instruments.",
  },
  {
    q: "What affects gold and silver prices?",
    a: "Precious metals prices are influenced by US Dollar strength, Federal Reserve monetary policy and interest rate expectations, geopolitical uncertainty, central bank reserve purchases, inflation data, and global risk sentiment. Gold in particular is widely regarded as a traditional safe-haven asset and tends to attract demand during periods of market stress.",
  },
  {
    q: "Are metals traded with leverage?",
    a: "Yes. Gold (XAUUSD) can be traded with leverage of up to 1:200, and Silver (XAGUSD) with leverage of up to 1:100 on eligible accounts. Leverage amplifies both potential profits and potential losses. Please ensure you fully understand the risks before using leverage on precious metals.",
  },
  {
    q: "What are the trading hours for metals?",
    a: "Gold and Silver are available to trade 24 hours a day, Monday to Friday. The market is closed over the weekend. Spreads and liquidity conditions may vary throughout the trading day, and may be wider during off-peak hours or around major market events.",
  },
];

/* ─── Indices ─────────────────────────────────────────────────────────── */
export const indicesFaqs: FAQ[] = [
  {
    q: "What are index CFDs?",
    a: "Index CFDs (Contracts for Difference) allow you to speculate on the price movement of a stock market index — such as the Dow Jones (US30), S&P 500, NASDAQ, or DAX 40 — without purchasing the underlying shares. You profit or lose based on whether the index rises or falls in the direction you traded.",
  },
  {
    q: "Which global indices are available on Olla Trade?",
    a: "Olla Trade offers CFDs on major global indices including US30 (Dow Jones), NASDAQ, SPX500 (S&P 500), DAX40, FTSE100, and NAS100. Additional indices may be available in your MT4 platform. The full instrument list can be viewed in Market Watch after logging in.",
  },
  {
    q: "Can I trade indices on MetaTrader 4?",
    a: "Yes. All index CFDs are available through your Olla Trade MT4 account on desktop, web, iOS, and Android. You can apply technical indicators, set alerts, use Expert Advisors, and trade directly from charts.",
  },
  {
    q: "What affects index prices?",
    a: "Stock market indices are influenced by corporate earnings results, economic data (GDP, employment, inflation), central bank decisions, geopolitical events, sector-specific news, and overall investor risk sentiment. Major economic announcements such as US Non-Farm Payrolls often cause significant short-term index volatility.",
  },
  {
    q: "Are index trading hours different by market?",
    a: "Yes. Index CFD trading hours generally follow the underlying exchange schedule. US indices such as US30 and NASDAQ typically follow New York market hours, while European indices follow their respective exchange sessions. Trading hours are subject to change and are shown in your MT4 instrument specifications. Spreads may widen outside peak hours.",
  },
];

/* ─── Crypto ─────────────────────────────────────────────────────────── */
export const cryptoFaqs: FAQ[] = [
  {
    q: "What crypto CFDs are available on Olla Trade?",
    a: "Olla Trade currently offers CFDs on Bitcoin (BTC/USD), Ethereum (ETH/USD), Litecoin (LTC/USD), and Ripple (XRP/USD). The full list of available crypto instruments is visible in your MT4 Market Watch. Availability may vary and is subject to change.",
  },
  {
    q: "Can I trade crypto CFDs on MetaTrader 4?",
    a: "Yes. Crypto CFDs are traded through your standard Olla Trade MT4 account alongside Forex, Metals, and other instruments. No separate crypto wallet or exchange account is required.",
  },
  {
    q: "Do I own the underlying crypto asset when trading crypto CFDs?",
    a: "No. When trading crypto CFDs on Olla Trade, you are speculating on the price movement of the cryptocurrency — you do not own the underlying digital asset. There is no digital wallet, no blockchain transfer, and no custody of coins. You can go long or short depending on your market view.",
  },
  {
    q: "What affects crypto CFD pricing?",
    a: "Crypto CFD prices are derived from the underlying cryptocurrency market and are influenced by market sentiment, regulatory news and developments, institutional adoption, technological updates (such as network upgrades or halving events), macroeconomic conditions, and overall risk appetite in financial markets.",
  },
  {
    q: "Are crypto CFDs high risk?",
    a: "Cryptocurrency markets are known for high volatility and can experience dramatic price movements within short periods. Trading crypto CFDs with leverage significantly amplifies both potential gains and potential losses. It is possible to lose your entire deposit. You should only trade crypto CFDs with funds you can fully afford to lose and ensure you understand the risks involved.",
  },
];

/* ─── Stocks ─────────────────────────────────────────────────────────── */
export const stocksFaqs: FAQ[] = [
  {
    q: "What stock CFDs are available with Olla Trade?",
    a: "Olla Trade offers CFDs on 1,000+ global stocks across US, European, and Asian markets. Popular instruments include Apple (AAPL), Tesla (TSLA), Amazon (AMZN), Alphabet (GOOGL), Microsoft (MSFT), and Meta (META). The full available list can be found in your MT4 Market Watch.",
  },
  {
    q: "Do I own the underlying shares when trading stock CFDs?",
    a: "No. Stock CFDs do not confer ownership of the underlying company shares. You are speculating on the price movement of the stock. You will not receive voting rights, and dividend adjustments (credits or debits) may apply depending on your position direction at the ex-dividend date.",
  },
  {
    q: "Can I trade stock CFDs on MetaTrader 4?",
    a: "Yes. All stock CFDs are available through your Olla Trade MT4 account. You can go long (buy) or short (sell) on any available stock instrument, apply technical analysis, set stop-loss and take-profit orders, and use Expert Advisors.",
  },
  {
    q: "What affects stock CFD prices?",
    a: "Stock CFD prices follow the underlying company share price and are influenced by corporate earnings results, revenue guidance, macroeconomic data, interest rate changes, sector news, analyst ratings, and broader market risk sentiment. Individual stock prices can also react sharply to company-specific events such as product launches or executive changes.",
  },
  {
    q: "Are stock CFDs subject to market hours?",
    a: "Yes. Stock CFD trading hours generally follow the hours of the underlying exchange (for example, NYSE/NASDAQ hours for US stocks). Trading may not be available outside the underlying exchange hours. Exact trading hours are visible in your MT4 instrument specifications. Spreads may widen at market open and close.",
  },
];

/* ─── Energies ─────────────────────────────────────────────────────────── */
export const energiesFaqs: FAQ[] = [
  {
    q: "What energy products can I trade on Olla Trade?",
    a: "Olla Trade currently offers CFDs on Brent Crude Oil (XBRENT) and WTI Crude Oil (XWTI). Both instruments are available 24 hours a day, Monday to Friday. Additional energy instruments may be added — check your MT4 Market Watch for the latest available products.",
  },
  {
    q: "What affects oil and gas prices?",
    a: "Energy prices are driven by a range of supply and demand factors including OPEC+ production quota decisions, weekly US EIA crude oil inventory data, geopolitical events in oil-producing regions, global economic growth expectations (particularly from major consumers such as the US and China), US Dollar strength, and seasonal demand patterns.",
  },
  {
    q: "Can I trade energy CFDs on MetaTrader 4?",
    a: "Yes. Brent Crude and WTI Crude are available to trade through your Olla Trade MT4 account on desktop, WebTrader, iOS, and Android. You can apply technical analysis, use all built-in indicators, set alerts, and deploy Expert Advisors on energy instruments.",
  },
  {
    q: "Are energy CFDs leveraged?",
    a: "Yes. Olla Trade offers leverage of up to 1:100 on energy CFDs for eligible accounts. As with all leveraged products, both potential profits and potential losses are amplified. Please ensure you understand how margin and leverage work before trading energy products.",
  },
  {
    q: "Do energy products have expiry dates?",
    a: "Energy CFDs traded through Olla Trade are cash-settled and do not involve physical delivery of the underlying commodity. There are no mandatory expiry or rollover dates for clients. Positions can be held open subject to applicable overnight swap charges until you choose to close them.",
  },
];

/* ─── MT4 / Platform ─────────────────────────────────────────────────── */
export const platformFaqs: FAQ[] = [
  {
    q: "What is MetaTrader 4?",
    a: "MetaTrader 4 (MT4) is the world's most widely used retail trading platform, developed by MetaQuotes. It offers advanced charting capabilities, 30+ built-in technical indicators, 9 chart types, automated trading via Expert Advisors (EAs), and direct market access. Olla Trade provides MT4 access across desktop, web, iOS, and Android at no additional cost.",
  },
  {
    q: "Can I use MT4 on desktop and mobile?",
    a: "Yes. MT4 is available on Windows desktop (full-featured client), WebTrader (access from any modern browser with no installation required), iOS (App Store), and Android (Google Play). All versions connect to the same Olla Trade account in real time.",
  },
  {
    q: "Does MT4 support Expert Advisors (EAs)?",
    a: "Yes. MetaTrader 4 has full support for automated trading through Expert Advisors written in MQL4. You can import custom EAs, use the built-in strategy tester to backtest against historical data, and run EAs live on your Olla Trade account. For uninterrupted EA operation, consider using a Virtual Private Server (VPS).",
  },
  {
    q: "How do I log in to MT4 with my Olla Trade account?",
    a: "Your MT4 login credentials (account number, password, and server address) are sent to you by email when your Olla Trade account is approved. Open MT4, go to File > Login to Trade Account, enter your account number, password, and select the Olla Trade server from the list. Contact support if you need assistance retrieving your credentials.",
  },
  {
    q: "Where can I download MetaTrader 4?",
    a: "MT4 Desktop for Windows is available for download from the Olla Trade website and from the official MetaQuotes website. The MT4 iOS app is available on the Apple App Store, and the Android version on Google Play. WebTrader requires no download — access it directly from your browser after logging in to your client portal.",
  },
];

/* ─── Funding and Withdrawals ─────────────────────────────────────────── */
export const fundingFaqs: FAQ[] = [
  {
    q: "How do I deposit funds into my Olla Trade account?",
    a: "Log in to your Olla Trade client portal at portal.ollatrade.com, navigate to the Funding section, select your preferred crypto method (USDT TRC20, USDT ERC20, Bitcoin, or Ethereum), and follow the on-screen instructions to generate your deposit address. Your account balance will be updated after the required blockchain network confirmations.",
  },
  {
    q: "How do I request a withdrawal?",
    a: "Log in to your client portal, go to Funding and Withdrawals, select Withdraw, choose your withdrawal method, enter the amount, and submit your request. Account verification (KYC) must be completed before withdrawal requests can be processed. Processing typically takes 24–48 business hours after approval, subject to compliance review.",
  },
  {
    q: "Which crypto funding methods are supported?",
    a: "Olla Trade currently supports USDT (TRC20 network), USDT (ERC20 network), Bitcoin (BTC), and Ethereum (ETH) for deposits and withdrawals. Additional payment methods may be available in your client portal. Contact our support team for the most current list of accepted methods.",
  },
  {
    q: "How long does withdrawal processing take?",
    a: "Withdrawal requests are typically reviewed and processed within 24–48 business hours of submission and approval. Processing times may vary based on account verification status, the payment method selected, compliance screening requirements, and the volume of requests at the time. Crypto network confirmation times are outside Olla Trade's control.",
  },
  {
    q: "Why may verification be required before processing a withdrawal?",
    a: "Account verification (KYC — Know Your Customer) is a regulatory and compliance requirement. It ensures that only the registered account holder can withdraw funds, and helps prevent fraud and money laundering. Olla Trade may also request additional documentation for security purposes before processing certain withdrawal requests. This is standard practice for regulated financial services.",
  },
];

/* ─── Account Types ─────────────────────────────────────────────────────── */
export const accountFaqs: FAQ[] = [
  {
    q: "Which account type should I choose?",
    a: "The Standard account is recommended for beginners and small account sizes — it requires only a $10 minimum deposit with no commission. The Pro account suits active traders looking for tighter spreads from 1.0 pips. The Elite account is designed for professional and high-volume traders who prefer raw spreads from 0.0 pips with a fixed commission per lot.",
  },
  {
    q: "What is the minimum deposit for each account?",
    a: "The Standard account requires a minimum deposit of $10. The Pro account requires a minimum of $2,000. The Elite account requires a minimum deposit of $20,000. These are the minimum amounts required to activate and trade on each respective account type.",
  },
  {
    q: "Are spreads fixed or variable?",
    a: "All Olla Trade accounts use variable (floating) spreads. Spreads widen and tighten based on market conditions, liquidity, and the time of day. The figures shown (from 1.4 pips on Standard, from 1.0 pips on Pro, from 0.0 pips on Elite) represent the minimum spread available under favourable market conditions.",
  },
  {
    q: "Can I open a demo account?",
    a: "Yes. A demo account is available for all account types. A demo account lets you practise trading in real market conditions using virtual funds, with no risk to real capital. Demo accounts are available through your Olla Trade client portal or directly in MetaTrader 4.",
  },
  {
    q: "Can I change my account type later?",
    a: "Yes. You can upgrade from Standard to Pro or Elite by depositing the required minimum funds into your account. Contact our support team at cst@ollatrade.com to discuss your upgrade options and ensure the transition is completed correctly.",
  },
];

/* ─── Partner / Affiliate ─────────────────────────────────────────────── */
export const affiliateFaqs: FAQ[] = [
  {
    q: "How can I become an Olla Trade partner?",
    a: "To apply, complete the affiliate application form on our Partner Programme page or email info@ollatrade.com with your details, traffic source, and target market. Our affiliate team will review your application and respond within 2–3 business days. There is no cost to join the programme.",
  },
  {
    q: "How are referrals tracked?",
    a: "Once approved, you will receive a unique affiliate tracking link. Clicks, registrations, and qualifying deposits made through your link are tracked in real time through your dedicated partner portal. You can generate separate links for different campaigns or traffic sources.",
  },
  {
    q: "When are partner commissions calculated?",
    a: "Commission calculations depend on the model agreed during your onboarding (CPA, Revenue Share, or Hybrid). Specific calculation periods, thresholds, and payment timelines are detailed in your affiliate agreement. Commissions are calculated transparently based on eligible referred client activity.",
  },
  {
    q: "Is there a partner dashboard?",
    a: "Yes. Approved partners receive access to a dedicated partner portal with real-time performance data including clicks, registrations, qualified referrals, active traders, and commission history. Marketing materials, tracking link generators, and account manager contact are all available within the portal.",
  },
  {
    q: "Who can I contact for partnership enquiries?",
    a: "For all partnership and affiliate enquiries, please email info@ollatrade.com. Please include your name, website or traffic source, target market, and a brief description of your marketing approach. Our affiliate team will respond within 2–3 business days.",
  },
];

/* ─── Promotions ─────────────────────────────────────────────────────── */
export const promotionsFaqs: FAQ[] = [
  {
    q: "How do I claim a promotion?",
    a: "To claim an available promotion, log in to your Olla Trade client portal and navigate to the Promotions section. Follow the specific instructions for the promotion you wish to claim. Some promotions may require a qualifying deposit before bonus credit is applied. Check the individual promotion terms for full details.",
  },
  {
    q: "Are promotions available to all clients?",
    a: "Promotions are subject to eligibility criteria, which may include account type, region, verification status, and minimum deposit requirements. Not all promotions are available to all clients. Full eligibility conditions are stated in each promotion's specific terms and conditions.",
  },
  {
    q: "Can bonus credit be withdrawn?",
    a: "Bonus trading credit cannot be withdrawn directly. It is added to your account as trading margin to increase your trading capacity. Profits generated through trading activity may be eligible for withdrawal, subject to Olla Trade's withdrawal policy and the specific terms of the relevant promotion. Please read the full terms before participating.",
  },
  {
    q: "Where can I read the full bonus terms?",
    a: "Full terms and conditions for each promotion are available on the individual promotion page and in the legal documents section of the Olla Trade website. You should read and understand the full terms before participating in any promotion. If you have questions about specific terms, contact our support team at cst@ollatrade.com.",
  },
  {
    q: "Can promotions be combined?",
    a: "In general, promotions cannot be combined unless explicitly stated in their respective terms and conditions. Each promotion is subject to its own eligibility rules and conditions. Contact our support team if you wish to confirm whether specific promotions can be used simultaneously.",
  },
];

/* ─── Contact / Support ─────────────────────────────────────────────── */
export const contactFaqs: FAQ[] = [
  {
    q: "How can I contact Olla Trade support?",
    a: "You can reach our support team by email at info@ollatrade.com or cst@ollatrade.com, or by phone at +44 7418 641736. Our team is available Monday to Friday, 24 hours a day (24/5). You can also use the contact form on this page for non-urgent enquiries.",
  },
  {
    q: "Where can I get platform support?",
    a: "For MetaTrader 4 technical issues, account login problems, or platform-related questions, email cst@ollatrade.com with your account number and a description of the issue. Our team can also assist by phone during business hours. You can also visit our Get Help page for FAQs and common platform guides.",
  },
  {
    q: "How can I submit a formal complaint?",
    a: "To submit a formal complaint, email our compliance team at info@ollatrade.com with your full name, account number, a clear description of the issue, and any supporting documentation. We acknowledge complaints within 2 business days and aim to resolve them within 10 business days. Full details of our complaint handling process are on the Complaints page.",
  },
  {
    q: "How can I contact the partnership or affiliate team?",
    a: "For partnership, affiliate, and business development enquiries, please email info@ollatrade.com with your details and a description of your proposal. Our team will review your enquiry and respond within 2–3 business days.",
  },
  {
    q: "How long does support usually take to respond?",
    a: "Our support team aims to respond to email enquiries within one business day. Phone support is available during business hours (Monday to Friday, 24/5). Response times may vary during peak periods. For urgent account matters, phone contact is recommended.",
  },
];

/* ─── Execution Information ──────────────────────────────────────────── */
export const executionFaqs: FAQ[] = [
  {
    q: "What is market execution?",
    a: "Market execution means your orders are filled at the best available market price at the time the order is processed, rather than at a pre-requested price. Olla Trade uses market execution across all account types. Orders are processed through our trading infrastructure and available liquidity as quickly as market conditions allow. The final execution price may differ from the requested price in fast-moving or illiquid markets.",
  },
  {
    q: "Can slippage occur when trading with Olla Trade?",
    a: "Yes. Slippage can occur during periods of high market volatility, major economic news releases, or low liquidity conditions. Slippage can be positive (executed at a better price than requested) or negative (executed at a worse price than requested). Olla Trade does not guarantee execution at the exact requested price under all market conditions. Slippage is a normal feature of trading in real financial markets.",
  },
  {
    q: "How are prices generated?",
    a: "Olla Trade pricing is derived from aggregated quotes provided by our liquidity providers. The prices displayed in MetaTrader 4 reflect the best available bid and ask prices from our liquidity pool at any given moment. Prices are variable and reflect prevailing market conditions including supply, demand, overall market liquidity, and the time of the trading session.",
  },
  {
    q: "What factors affect execution quality?",
    a: "Execution quality can be influenced by several factors including: current market volatility, available liquidity for the instrument being traded, the size of the order relative to available market depth, network connection latency between client and server, and the time of day and active trading sessions. Major economic announcements and periods of low liquidity can all affect how and at what price orders are filled.",
  },
  {
    q: "What happens during volatile market conditions?",
    a: "During periods of high volatility — such as major economic data releases, central bank announcements, or significant geopolitical events — market prices can move rapidly and liquidity may temporarily reduce. Under these conditions, slippage is more likely, spreads may widen significantly, and order fills may occur at prices different from what was originally requested. Price gapping can also occur when markets reopen after closures.",
  },
  {
    q: "Can spreads widen?",
    a: "Yes. Spreads are variable and may widen significantly during periods of high market volatility, outside of regular market trading hours, around major economic news releases, or during periods of reduced market liquidity. The spreads shown on the Olla Trade website represent minimum spreads achievable under favourable market conditions and are not guaranteed to be available at all times.",
  },
  {
    q: "What are pending orders and how do they work?",
    a: "Pending orders are instructions to open a trade when the market reaches a specific price level, rather than immediately at the current market price. Types include Buy Limit (open a buy at a lower price), Sell Limit (open a sell at a higher price), Buy Stop (open a buy at a higher price), and Sell Stop (open a sell at a lower price). Pending orders are held on the server and execute automatically when the market reaches the specified price, subject to available liquidity. Execution of pending orders is not guaranteed at the exact specified price in fast-moving markets.",
  },
];

/* ─── Trading Conditions ─────────────────────────────────────────────── */
export const conditionsFaqs: FAQ[] = [
  {
    q: "What is the minimum deposit at Olla Trade?",
    a: "The minimum deposit is $10 for the Standard account, $2,000 for the Pro account, and $20,000 for the Elite account. All deposits are subject to the funding terms and chosen payment method.",
  },
  {
    q: "What leverage does Olla Trade offer?",
    a: "Olla Trade offers leverage up to 1:500 on Forex pairs. Metals are available at up to 1:200, Indices and Energies at 1:100, and Crypto and Stocks at 1:10. Leverage increases both potential profit and potential loss and should be used with caution.",
  },
  {
    q: "Are spreads fixed or variable?",
    a: "All spreads at Olla Trade are variable. They reflect live market conditions and may widen during periods of high volatility, low liquidity, or major economic data releases. The spreads shown on the website represent indicative minimum spreads under favourable market conditions.",
  },
  {
    q: "Does Olla Trade charge commissions?",
    a: "Standard and Pro accounts have no per-lot commission — the cost of trading is built into the spread. The Elite account charges $3.5 per lot per side in exchange for raw spreads starting from 0.0 pips. There are no other hidden fees on standard trading activity.",
  },
  {
    q: "What is the margin call and stop out level?",
    a: "The margin call level is 80% — when account equity falls to 80% of the required margin, you will receive a margin call notification. The stop out level is 20% — when equity falls to 20% of required margin, positions may begin to be closed automatically to protect remaining equity.",
  },
  {
    q: "Is negative balance protection provided?",
    a: "Yes. Olla Trade applies negative balance protection to all client accounts. Your account balance cannot fall below zero as a result of trading losses under normal market conditions.",
  },
  {
    q: "Can I use Expert Advisors (EAs) on Olla Trade?",
    a: "Yes. Expert Advisors, automated trading, scOllag, hedging, and all standard MT4 trading approaches are permitted on all Olla Trade account types. There are no restrictions on trading strategy style.",
  },
];
