import json, os
BASE = r"C:\Users\Alpin Markets\Desktop\AntiGravity\Landing page\olla-trade-landing\messages"

# ── Comprehensive trading pages translations ──────────────────────────
TRADING_EN = {
  "conditions": {
    "hero_badge": "Professional Conditions",
    "hero_title": "Transparent Trading Conditions",
    "hero_subtitle": "Competitive spreads, flexible leverage, and market execution across 500+ instruments. All conditions are disclosed upfront — no hidden fees, no surprises.",
    "hero_cta1": "Open Account", "hero_cta2": "Compare Accounts",
    "stats_label": "Max Leverage", "stats_spread": "Spreads From", "stats_deposit": "Min. Deposit",
    "stats_lot": "Min. Trade Size", "stats_mc": "Margin Call", "stats_so": "Stop Out Level",
    "overview_label": "Conditions Overview",
    "overview_title": "How We Execute Your Trades",
    "overview_desc": "Olla Trade uses market execution across all accounts. Orders are filled at the best available market price at the time of submission, subject to available liquidity and market conditions.",
    "overview_cards": [
      {"title":"Variable Spreads","body":"Spreads are variable and reflect live market conditions. Major Forex pairs start from 0.0 pips on the Elite account and from 1.4 pips on the Standard account. Spreads may widen during major economic announcements, market open/close, or periods of reduced liquidity."},
      {"title":"Market Execution","body":"All orders are executed at the best available market price. No dealer intervention occurs in the order execution process. Expert Advisors (EAs) and automated trading strategies are fully supported on all account types."},
      {"title":"Flexible Leverage","body":"Leverage up to 1:500 is available on Forex pairs. Leverage varies by instrument class. Higher leverage increases both potential gains and losses. Clients should use leverage carefully and in accordance with their risk tolerance."},
      {"title":"Negative Balance Protection","body":"Olla Trade applies negative balance protection to all client accounts. In most market conditions, your losses will not exceed your deposited balance. Where an account falls into a negative balance due to exceptional market events, Olla Trade will reset the balance to zero at no charge."},
      {"title":"No Requotes","body":"The market execution model means orders are not subject to requotes. All orders are accepted and executed at prevailing market prices. Slippage — execution at a price different from the requested price — may occur in fast-moving markets."},
      {"title":"EA & Scalping Allowed","body":"Expert Advisors, scalping strategies, news trading, and hedging are permitted on all Olla Trade accounts. There are no restrictions on trading styles. All strategies must remain within the bounds of the account terms and conditions."}
    ],
    "accounts_label": "Account Types", "accounts_title": "Conditions by Account Type",
    "accounts_desc": "Three account types designed for different experience levels and capital sizes — all on MetaTrader 4.",
    "accounts_note": "* Spreads are variable. Figures shown are indicative minimum spreads under normal market conditions. Actual spreads may be wider during low-liquidity periods or major news events.",
    "table_condition": "Condition", "table_standard": "Standard", "table_pro": "Pro ★", "table_elite": "Elite",
    "row_deposit": "Min. Deposit", "row_spreads": "Spreads From", "row_commission": "Commission",
    "row_leverage": "Max Leverage", "row_lot": "Min. Trade Size", "row_ea": "EA / Scalping",
    "row_mc": "Margin Call", "row_so": "Stop Out Level", "row_nbp": "Negative Bal. Prot.", "row_platform": "Platform",
    "row_ea_val": "Allowed", "row_nbp_val": "Yes",
    "spreads_label": "Spreads & Pricing", "spreads_title": "Spreads by Instrument Class",
    "spreads_col1": "Asset Class", "spreads_col2": "Typical Spread", "spreads_col3": "Max Leverage",
    "spreads_col4": "Margin Call", "spreads_col5": "Stop Out",
    "spreads_note": "Spreads are variable and depend on market liquidity. They may widen during low-liquidity sessions, major economic events, or market open and close periods.",
    "leverage_label": "Leverage & Margin", "leverage_title": "Leverage up to 1:500",
    "leverage_desc1": "Leverage allows traders to control a larger position with a smaller amount of capital. Olla Trade offers leverage up to 1:500 on Forex pairs. Leverage is not fixed — different instruments have different maximum leverage limits based on risk characteristics.",
    "leverage_desc2": "Higher leverage amplifies both potential profits and potential losses. Clients are responsible for maintaining sufficient margin in their accounts. Olla Trade does not guarantee that margin calls will always prevent losses exceeding the account balance under all market conditions.",
    "margin_warning_title": "Margin Warning:",
    "margin_warning_body": "When your account equity falls to 80% of the required margin (Margin Call level), you will receive a margin call notification. At 20% (Stop Out level), positions may begin to be closed automatically to protect remaining equity. Clients are responsible for monitoring margin levels at all times.",
    "exec_label": "Order Execution", "exec_title": "Market Execution Model",
    "exec_desc": "All Olla Trade accounts use market execution. Orders are transmitted directly to liquidity providers at the best available price.",
    "exec_cards": [
      {"title":"Market Execution","desc":"Orders are filled at the best available market price at the time of execution — no dealer confirmation required."},
      {"title":"No Requotes","desc":"The market execution model eliminates requotes. Every order submitted is accepted and filled at prevailing market prices."},
      {"title":"Slippage Disclosure","desc":"Execution price may differ from the requested price, particularly during fast-moving markets or major economic releases. Slippage can be positive or negative."},
      {"title":"EA Support","desc":"Fully supports Expert Advisors, automated strategies, scalping, hedging, and all standard MT4 trading approaches."}
    ],
    "exec_link": "Full Execution Information →",
    "orders_label": "Order Types", "orders_title": "Supported Order Types",
    "order_items": [
      {"name":"Market Order","desc":"Execute immediately at the current best available market price."},
      {"name":"Limit Order","desc":"Execute at a specified price or better. Used to enter or exit at a pre-defined level."},
      {"name":"Stop Order","desc":"Triggered when price reaches a specified level, then executed as a market order."},
      {"name":"Stop Loss","desc":"Automatically closes a position at a defined price to limit potential loss."},
      {"name":"Take Profit","desc":"Automatically closes a position at a defined price when a profit target is reached."},
      {"name":"Trailing Stop","desc":"A dynamic stop loss that follows price movements, locking in profit as the market moves in your favour."}
    ],
    "hours_label": "Trading Hours", "hours_title": "Market Hours by Asset",
    "hours_desc": "Olla Trade follows standard international market hours. All times are in server time (GMT+2 during daylight saving, GMT+3 in winter).",
    "hours_col1": "Asset Class", "hours_col2": "Market Hours (Server Time)", "hours_col3": "Days", "hours_col4": "Notes",
    "hours_note": "Trading hours may be affected by public holidays and extraordinary market events. Spreads may widen at market open and close. Check your MT4 platform for live session information.",
    "instruments_label": "Instruments",
    "instruments_desc": [
      {"asset":"Forex","count":"70+","desc":"Major, minor, and exotic currency pairs including EUR/USD, GBP/USD, USD/JPY, USD/CHF, and more."},
      {"asset":"Metals","count":"4+","desc":"Gold (XAU/USD), Silver (XAG/USD), and other precious metals via CFDs."},
      {"asset":"Indices","count":"15+","desc":"Global stock indices including US30, SPX500, NAS100, GER30, UK100, and more."},
      {"asset":"Energies","count":"5+","desc":"Oil (Brent & WTI), Natural Gas, and other energy CFDs."},
      {"asset":"Cryptocurrency","count":"10+","desc":"Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and other major crypto CFDs."},
      {"asset":"Stocks","count":"1,000+","desc":"Single stock CFDs from the US, UK, EU, and other major markets including Apple, Amazon, Tesla, and more."}
    ],
    "view_market": "View",
    "risk_label": "Risk Disclosure",
    "risk_p1": "Trading Forex and CFDs involves significant risk of loss and may not be suitable for all investors. Leveraged trading amplifies both potential profits and potential losses — you could lose more than your initial deposit.",
    "risk_p2": "Spreads are variable and may widen during periods of market volatility, reduced liquidity, or major economic announcements. Slippage may occur during fast-moving markets. Past performance is not indicative of future results.",
    "risk_p3": "You should ensure you understand how CFDs work and whether you can afford to take the risk. Please read our",
    "risk_link": "Risk Disclosures", "risk_p3b": "before trading.",
    "cta_title": "Trade with Professional Conditions",
    "cta_subtitle": "Open an account in minutes and access 500+ instruments with tight spreads, fast execution, and full MetaTrader 4 support."
  },
  "accounts": {
    "hero_title": "Choose the Right Trading Account",
    "hero_subtitle": "Compare trading conditions, spreads, execution, and features across all Olla Trade account types.",
    "badge": "Account Types",
    "entry_level": "Entry Level", "most_popular": "Most Popular", "professional": "Professional",
    "min_deposit": "Minimum deposit", "popular_pill": "Most Popular",
    "open_std": "Open Standard", "open_pro": "Open Pro Account", "open_elite": "Open Elite Account",
    "compare_title": "Full Account Comparison",
    "compare_subtitle": "Detailed breakdown of all conditions across every account type.",
    "feature_col": "Feature",
    "row_deposit": "Min. Deposit", "row_type": "Spread Type", "row_spread": "Avg. Spread (EUR/USD)",
    "row_commission": "Commission", "row_leverage": "Max Leverage", "row_mc": "Margin Call Level",
    "row_so": "Stop Out Level", "row_instruments": "Instruments", "row_exec": "Order Execution",
    "row_ea": "Expert Advisors", "row_nbp": "Negative Balance Protection",
    "row_support": "24/5 Support", "row_fees": "Deposit / Withdrawal Fees", "row_demo": "Demo Account",
    "val_variable": "Variable", "val_raw": "Raw (variable)", "val_market": "Market",
    "val_supported": "Supported", "val_yes": "Yes", "val_none": "None",
    "val_std_support": "Standard", "val_pro_support": "Priority", "val_eli_support": "VIP",
    "faqs": [
      {"q":"Which account is best for beginners?","a":"The Standard account is ideal for beginners — $10 minimum deposit, no commission, full MT4 access, and 500+ instruments."},
      {"q":"Can I upgrade my account type later?","a":"Yes. You can upgrade from Standard to Pro or Elite by depositing the required minimum. Contact support to arrange your upgrade."},
      {"q":"Is a demo account available?","a":"Yes. A demo account is available for all account types so you can practise with virtual funds before going live."},
      {"q":"What is the difference between variable and raw spreads?","a":"Variable spreads fluctuate with market conditions. Raw spreads on the Elite account are the direct interbank rate plus a fixed commission per lot — typically lower in liquid market conditions."},
      {"q":"How quickly can I open an account?","a":"Registration takes about 2 minutes. KYC verification typically takes 1–2 business days. You can trade once approved."}
    ]
  },
  "funding": {
    "stats_fees": "Olla Trade Fees", "stats_methods": "Crypto Methods",
    "stats_time": "Withdrawal Time", "stats_secure": "SSL Encrypted",
    "cta_deposit": "Deposit Funds", "cta_withdraw": "Request Withdrawal",
    "methods_label": "Supported Methods", "methods_title": "Crypto Funding Methods",
    "methods_subtitle": "Fund your Olla Trade account securely using major cryptocurrencies. All methods are accepted with no fees from Olla Trade.",
    "label_deposit": "Deposit", "label_withdrawal": "Withdrawal",
    "label_min": "Min. deposit", "label_fee": "Olla Trade fee", "val_none": "None",
    "support_note": "Additional payment methods may be available in your client portal.",
    "contact_support": "Contact support",
    "support_note2": "for the latest available options.",
    "flow_label": "Crypto Funding Made Simple",
    "flow_title": "Secure End-to-End Transaction Flow",
    "flow_desc": "Every deposit and withdrawal is processed through your personal SSL-encrypted client portal. Your funds move directly from your wallet to your trading account via the blockchain — no intermediaries, no hidden steps.",
    "flow_features": [
      {"label":"No Olla Trade Fees","desc":"We charge zero fees on deposits or withdrawals. Network fees apply on the blockchain side only."},
      {"label":"Multiple Crypto Methods","desc":"USDT TRC20, USDT ERC20, Bitcoin, and Ethereum — with more methods available in the client portal."},
      {"label":"Credited After Confirmations","desc":"Funds appear in your trading account automatically after the required blockchain confirmations."},
      {"label":"Same-Method Withdrawals","desc":"Withdrawals are returned to the same method used for deposit — a standard security requirement."}
    ],
    "process_label": "Step-by-Step", "process_title": "How to Deposit & Withdraw",
    "deposit_title": "Deposit Funds", "withdraw_title": "Withdraw Funds",
    "deposit_steps": [
      ["Log in to your Olla Trade client portal.","Access your account at direct.ollatrade.com using your credentials."],
      ["Navigate to Funding / Deposit.","In your portal dashboard, find the Funding or Deposit section."],
      ["Select your preferred crypto method.","Choose USDT (TRC20/ERC20), Bitcoin, or Ethereum."],
      ["Copy the deposit address and send funds.","Send the exact crypto amount to the provided wallet address."],
      ["Funds credited after confirmation.","Your account balance updates automatically after the required blockchain confirmations."]
    ],
    "withdraw_steps": [
      ["Log in to your client portal.","Access your account at direct.ollatrade.com using your credentials."],
      ["Navigate to Funding / Withdrawal.","In your portal dashboard, find the Withdrawal section."],
      ["Select your withdrawal method.","Choose the same method used for your original deposit."],
      ["Enter the amount and destination.","Input the withdrawal amount and your wallet address or bank details."],
      ["Submit and await processing.","Withdrawal requests are reviewed and processed within 24–48 business hours after approval."]
    ],
    "times_label": "Processing Times", "times_title": "Funding Processing Summary",
    "times_col1": "Method", "times_col2": "Deposit", "times_col3": "Withdrawal",
    "times_col4": "Olla Trade Fee", "times_col5": "Notes",
    "times_note": "* Processing times are estimates only and may vary depending on verification status, payment method, and transaction volume. Blockchain network fees may apply.",
    "rules_label": "Important Rules", "rules_title": "Funding & Withdrawal Requirements",
    "rules": [
      {"title":"Account Verification Required","desc":"Withdrawal requests require completed KYC/AML account verification. Ensure your identity documents and proof of address are submitted and approved."},
      {"title":"Submit via Client Portal Only","desc":"All withdrawal requests must be submitted through your official Olla Trade client portal. Requests made via email or chat cannot be accepted for security reasons."},
      {"title":"Blockchain Confirmations","desc":"Crypto deposits are credited after sufficient blockchain network confirmations. Processing times vary by network and current congestion conditions."},
      {"title":"Additional Documents May Be Requested","desc":"Olla Trade may request additional documentation for security, compliance, or anti-money laundering verification purposes before processing your withdrawal."},
      {"title":"Bonus Credit Withdrawal","desc":"Bonus trading credit cannot be withdrawn directly unless explicitly stated in the relevant promotion's official terms and conditions."},
      {"title":"Same Method Policy","desc":"Where possible, withdrawals are processed back to the same method used for the original deposit. This is a standard financial security requirement."}
    ],
    "security_label": "Security & Protection", "security_title": "How We Protect Your Funds",
    "security_features": [
      {"title":"Secure Client Portal","desc":"All funding and withdrawal operations are conducted through your SSL-encrypted Olla Trade client portal — never via email or third-party links."},
      {"title":"Identity Verification (KYC)","desc":"Account verification ensures that only the registered account holder can request or receive funds, protecting you from unauthorised withdrawals."},
      {"title":"Transaction History","desc":"A complete record of all deposits, withdrawals, and transactions is available in your client portal at all times for your review."},
      {"title":"Compliance Review","desc":"All transactions are subject to standard compliance and anti-money laundering screening in line with applicable financial regulations."},
      {"title":"Segregated Client Funds","desc":"Client funds are held separately from company operational funds, providing an additional layer of financial security for your deposits."},
      {"title":"Processing Oversight","desc":"Withdrawal requests are reviewed and approved by our operations team during business hours to ensure accuracy and security before processing."}
    ],
    "cta_title": "Ready to Fund Your Account?",
    "cta_subtitle": "Log in to your client portal to make a deposit or withdrawal request."
  },
  "execution": {
    "crosslink_text": "Looking for the formal legal Order Execution Policy document?",
    "crosslink_link": "View Order Execution Policy →",
    "intro_label": "About Our Execution",
    "intro_title": "How Olla Trade Executes Orders",
    "intro_p1": "Olla Trade operates as an execution-only service using a market execution model. When you place a trade, your order is processed through our trading infrastructure and submitted to available liquidity at the best price achievable under current market conditions.",
    "intro_p2": "Prices displayed in MetaTrader 4 are derived from aggregated quotes provided by our liquidity providers. These prices are variable and reflect real-time market conditions including supply and demand, overall market liquidity, and the time of the active trading session.",
    "intro_p3": "Execution quality may vary depending on market conditions. Olla Trade does not provide investment advice and does not guarantee execution at any specific price. Orders are subject to available liquidity and prevailing market conditions at the time of execution.",
    "intro_cards": [
      {"title":"Market Execution","desc":"Orders filled at best available market price in real time, subject to liquidity."},
      {"title":"Global Markets","desc":"Access to Forex, Metals, Indices, Energies, Crypto, and Stocks — all through MT4."},
      {"title":"MT4 Infrastructure","desc":"All orders processed through MetaTrader 4 — industry-standard trading platform."},
      {"title":"Variable Pricing","desc":"Prices derived from liquidity providers and subject to prevailing market conditions."}
    ],
    "flow_label": "Trading Infrastructure",
    "flow_title": "Order Routing & Execution Flow",
    "flow_desc": "When you submit an order in MetaTrader 4, it is transmitted to Olla Trade's execution infrastructure, validated against available margin and risk parameters, then routed to our liquidity pool. The best available price is selected and the fill confirmation is returned to your terminal.",
    "flow_features": [
      {"label":"STP Routing","desc":"Orders are routed straight-through to liquidity providers without manual dealer intervention under normal conditions."},
      {"label":"Best Available Price","desc":"Our pricing engine aggregates quotes from multiple liquidity providers to achieve the best available bid and ask at time of execution."},
      {"label":"Execution Subject to Liquidity","desc":"Final execution price depends on available market liquidity and conditions at the moment the order is processed."},
      {"label":"No Requotes","desc":"Market execution means all orders are accepted at the prevailing price — you will not be asked to confirm a different price."}
    ],
    "model_label": "Execution Model",
    "model_title": "Order Execution Explained",
    "model_desc": "Understanding how different order types are processed. Execution quality may vary depending on market conditions and available liquidity.",
    "model_cards": [
      {"title":"Market Execution","desc":"Market orders are filled at the best available price at the time of execution. The final price may differ from the quoted price at the moment the order was placed, particularly in fast-moving market conditions."},
      {"title":"Pending Orders","desc":"Pending orders instruct the platform to open a position when the market reaches a specified price. Types include Buy/Sell Limit and Buy/Sell Stop. Execution at the exact specified price is subject to available market liquidity."},
      {"title":"Stop Loss Orders","desc":"A Stop Loss order automatically closes a position at a specified loss level. Stop Loss orders help limit potential losses but do not guarantee closure at the exact requested price, particularly during rapid price movements or market gaps."},
      {"title":"Take Profit Orders","desc":"A Take Profit order closes a position automatically when the market reaches a specified profit target. Execution is subject to available market liquidity at the time the target price is reached."},
      {"title":"Slippage","desc":"Slippage refers to the difference between the expected price of a trade and the price at which the trade is actually executed. Slippage can occur in fast-moving or low-liquidity market conditions and can be positive or negative."},
      {"title":"No Requote Policy","desc":"Olla Trade does not issue requotes on client orders. Under the market execution model, all orders are accepted and executed at the best available prevailing market price at the time of submission."}
    ],
    "slippage_label": "Slippage & Pricing",
    "slippage_title": "Understanding Slippage & Price Variation",
    "slippage_desc": "Slippage is a normal and expected feature of trading in real financial markets. It occurs when the market moves between the moment you submit an order and the moment it is processed by our execution engine.",
    "slippage_cards": [
      {"title":"When Slippage Occurs","desc":"Slippage is most common during high market volatility, major economic news releases, and periods of low liquidity — such as outside regular trading hours or around market open/close."},
      {"title":"Positive Slippage","desc":"Positive slippage occurs when your order is filled at a better price than requested — for example, a buy order fills lower than the requested price. This benefits the client."},
      {"title":"Negative Slippage","desc":"Negative slippage occurs when your order is filled at a worse price than requested. This can happen during rapid market movements or when large orders consume available liquidity at the requested price."},
      {"title":"Managing Slippage","desc":"Use limit orders instead of market orders where possible. Avoid trading immediately around major economic data releases. Monitor the economic calendar and apply appropriate position sizing."}
    ],
    "infra_label": "Infrastructure",
    "infra_title": "Trading Infrastructure",
    "infra_desc": "Olla Trade's trading infrastructure is built for reliable, continuous order execution across all instruments and sessions.",
    "infra_cards": [
      {"title":"Server Location","desc":"Trading servers are hosted in professional data centres with redundant connectivity and power systems for maximum uptime."},
      {"title":"Liquidity Aggregation","desc":"Prices are sourced from multiple institutional liquidity providers. The best available bid and ask prices are aggregated and presented to clients in real time."},
      {"title":"MT4 Bridge","desc":"Client orders placed via MetaTrader 4 are transmitted instantly through our MT4 bridge to our execution infrastructure for processing."},
      {"title":"Continuous Monitoring","desc":"Our operations team monitors execution quality, server performance, and connectivity on an ongoing basis during all trading sessions."}
    ],
    "pricing_label": "Pricing Model",
    "pricing_title": "How Prices Are Generated",
    "pricing_desc": "Olla Trade derives all prices from aggregated quotes provided by our institutional liquidity providers. Prices reflect real-time market conditions and are passed through to clients without any artificial mark-up beyond the disclosed spread.",
    "pricing_points": [
      "Prices are aggregated from multiple liquidity providers in real time.",
      "The best available bid and ask prices are presented to clients via MetaTrader 4.",
      "Spreads are variable and reflect prevailing market liquidity and session activity.",
      "Olla Trade earns revenue from the spread between bid and ask prices.",
      "No additional hidden charges are applied to standard trading activity.",
      "All pricing methodology is disclosed in the Order Execution Policy."
    ],
    "pricing_link": "View Order Execution Policy →",
    "faq_title": "Execution Information FAQs",
    "cta_title": "Open an Account with Olla Trade",
    "cta_subtitle": "Access 500+ instruments with market execution, tight spreads, and full MetaTrader 4 support."
  },
  "platform": {
    "badge": "MetaTrader 4",
    "section_title": "The World's Most Popular Trading Platform",
    "section_desc": "Advanced charting, automated trading, and real-time execution across all global markets — on every device you own. Download or access via browser with no installation required.",
    "mobile_title": "Available on All Devices",
    "mobile_sub": "Desktop | WebTrader | iOS | Android",
    "features": [
      {"title":"30+ Technical Indicators","desc":"Built-in MA, MACD, RSI, Bollinger Bands, Ichimoku, and 25+ more indicator types. All with full customisation and overlay capability."},
      {"title":"Expert Advisors (EAs)","desc":"Full MQL4 automated trading support. Backtest strategies on historical price data before going live."},
      {"title":"Custom Alerts","desc":"Price, indicator, and margin alerts via MT4 desktop, mobile push, or email."},
      {"title":"Multi-Chart Layout","desc":"Monitor multiple instruments and timeframes simultaneously on a single screen."},
      {"title":"9 Chart Timeframes","desc":"M1 through MN — candlestick, bar, and line chart types available."},
      {"title":"One-Click Execution","desc":"Direct chart trading with instant market order submission — no dialog required."},
      {"title":"Full MQL4 Support","desc":"Build, import, and run automated strategies written in MetaQuotes Language 4."},
      {"title":"VPS Compatible","desc":"Run MT4 and EAs on a Virtual Private Server for 24/5 uninterrupted trading."}
    ],
    "cta_explore": "Explore MT4 Features",
    "cta_title": "Start Trading on MetaTrader 4",
    "cta_subtitle": "Open a free account and access MT4 on desktop, WebTrader, iOS, and Android with professional trading conditions."
  }
}

TRADING_PT = {
  "conditions": {
    "hero_badge": "Condições Profissionais",
    "hero_title": "Condições de Trading Transparentes",
    "hero_subtitle": "Spreads competitivos, alavancagem flexível e execução a mercado em 500+ instrumentos. Todas as condições são divulgadas antecipadamente — sem taxas ocultas, sem surpresas.",
    "hero_cta1": "Abrir Conta", "hero_cta2": "Comparar Contas",
    "stats_label": "Alavancagem Máxima", "stats_spread": "Spreads a Partir de", "stats_deposit": "Depósito Mínimo",
    "stats_lot": "Tamanho Mín. de Operação", "stats_mc": "Chamada de Margem", "stats_so": "Nível de Stop Out",
    "overview_label": "Visão Geral das Condições",
    "overview_title": "Como Executamos Suas Operações",
    "overview_desc": "A Olla Trade usa execução a mercado em todas as contas. As ordens são preenchidas ao melhor preço de mercado disponível no momento do envio, sujeitas à liquidez disponível e às condições de mercado.",
    "overview_cards": [
      {"title":"Spreads Variáveis","body":"Os spreads são variáveis e refletem as condições de mercado em tempo real. Os pares de Forex principais começam a partir de 0,0 pips na conta Elite e de 1,4 pips na conta Standard. Os spreads podem se ampliar durante grandes anúncios econômicos, abertura/fechamento do mercado ou períodos de liquidez reduzida."},
      {"title":"Execução a Mercado","body":"Todas as ordens são executadas ao melhor preço de mercado disponível. Nenhuma intervenção de operador ocorre no processo de execução de ordens. Expert Advisors (EAs) e estratégias de trading automatizado são totalmente suportados em todos os tipos de conta."},
      {"title":"Alavancagem Flexível","body":"Alavancagem de até 1:500 está disponível em pares de Forex. A alavancagem varia por classe de instrumento. Maior alavancagem aumenta tanto os ganhos quanto as perdas potenciais. Os clientes devem usar a alavancagem com cuidado e de acordo com sua tolerância ao risco."},
      {"title":"Proteção contra Saldo Negativo","body":"A Olla Trade aplica proteção contra saldo negativo a todas as contas de clientes. Na maioria das condições de mercado, suas perdas não excederão o saldo depositado. Onde uma conta cair em saldo negativo devido a eventos excepcionais de mercado, a Olla Trade redefinirá o saldo para zero sem custo adicional."},
      {"title":"Sem Requotes","body":"O modelo de execução a mercado significa que as ordens não estão sujeitas a requotes. Todas as ordens são aceitas e executadas aos preços de mercado vigentes. Derrapagem — execução a um preço diferente do solicitado — pode ocorrer em mercados de movimento rápido."},
      {"title":"EA & Scalping Permitidos","body":"Expert Advisors, estratégias de scalping, negociação de notícias e hedging são permitidos em todas as contas Olla Trade. Não há restrições nos estilos de trading. Todas as estratégias devem permanecer dentro dos limites dos termos e condições da conta."}
    ],
    "accounts_label": "Tipos de Conta", "accounts_title": "Condições por Tipo de Conta",
    "accounts_desc": "Três tipos de conta projetados para diferentes níveis de experiência e tamanhos de capital — todos no MetaTrader 4.",
    "accounts_note": "* Os spreads são variáveis. Os valores mostrados são spreads mínimos indicativos em condições normais de mercado. Os spreads reais podem ser mais amplos durante períodos de baixa liquidez ou grandes eventos de notícias.",
    "table_condition": "Condição", "table_standard": "Standard", "table_pro": "Pro ★", "table_elite": "Elite",
    "row_deposit": "Depósito Mínimo", "row_spreads": "Spreads a Partir de", "row_commission": "Comissão",
    "row_leverage": "Alavancagem Máxima", "row_lot": "Tamanho Mín. de Operação", "row_ea": "EA / Scalping",
    "row_mc": "Chamada de Margem", "row_so": "Nível de Stop Out", "row_nbp": "Prot. Saldo Negativo", "row_platform": "Plataforma",
    "row_ea_val": "Permitido", "row_nbp_val": "Sim",
    "spreads_label": "Spreads & Preços", "spreads_title": "Spreads por Classe de Instrumento",
    "spreads_col1": "Classe de Ativo", "spreads_col2": "Spread Típico", "spreads_col3": "Alavancagem Máxima",
    "spreads_col4": "Chamada de Margem", "spreads_col5": "Stop Out",
    "spreads_note": "Os spreads são variáveis e dependem da liquidez de mercado. Podem se ampliar durante sessões de baixa liquidez, grandes eventos econômicos ou nos períodos de abertura e fechamento do mercado.",
    "leverage_label": "Alavancagem & Margem", "leverage_title": "Alavancagem de até 1:500",
    "leverage_desc1": "A alavancagem permite que os traders controlem uma posição maior com um valor menor de capital. A Olla Trade oferece alavancagem de até 1:500 em pares de Forex. A alavancagem não é fixa — diferentes instrumentos têm diferentes limites máximos de alavancagem com base nas características de risco.",
    "leverage_desc2": "Maior alavancagem amplifica tanto os lucros potenciais quanto as perdas potenciais. Os clientes são responsáveis por manter margem suficiente em suas contas. A Olla Trade não garante que as chamadas de margem sempre impedirão perdas que excedam o saldo da conta em todas as condições de mercado.",
    "margin_warning_title": "Aviso de Margem:",
    "margin_warning_body": "Quando o patrimônio da sua conta cair para 80% da margem exigida (nível de chamada de margem), você receberá uma notificação de chamada de margem. A 20% (nível de stop out), as posições podem começar a ser fechadas automaticamente para proteger o patrimônio restante. Os clientes são responsáveis por monitorar os níveis de margem a todo momento.",
    "exec_label": "Execução de Ordens", "exec_title": "Modelo de Execução a Mercado",
    "exec_desc": "Todas as contas da Olla Trade usam execução a mercado. As ordens são transmitidas diretamente aos provedores de liquidez ao melhor preço disponível.",
    "exec_cards": [
      {"title":"Execução a Mercado","desc":"As ordens são preenchidas ao melhor preço de mercado disponível no momento da execução — sem necessidade de confirmação de operador."},
      {"title":"Sem Requotes","desc":"O modelo de execução a mercado elimina os requotes. Cada ordem enviada é aceita e preenchida aos preços de mercado vigentes."},
      {"title":"Divulgação de Derrapagem","desc":"O preço de execução pode diferir do preço solicitado, especialmente durante mercados de movimento rápido ou grandes divulgações econômicas. A derrapagem pode ser positiva ou negativa."},
      {"title":"Suporte a EA","desc":"Suporta totalmente Expert Advisors, estratégias automatizadas, scalping, hedging e todas as abordagens padrão de trading no MT4."}
    ],
    "exec_link": "Informações Completas de Execução →",
    "orders_label": "Tipos de Ordem", "orders_title": "Tipos de Ordens Suportados",
    "order_items": [
      {"name":"Ordem a Mercado","desc":"Executada imediatamente ao melhor preço de mercado disponível."},
      {"name":"Ordem Limitada","desc":"Executada a um preço especificado ou melhor. Usada para entrar ou sair em um nível predefinido."},
      {"name":"Ordem Stop","desc":"Acionada quando o preço atinge um nível especificado, então executada como uma ordem a mercado."},
      {"name":"Stop Loss","desc":"Fecha automaticamente uma posição a um preço definido para limitar a perda potencial."},
      {"name":"Take Profit","desc":"Fecha automaticamente uma posição a um preço definido quando um alvo de lucro é atingido."},
      {"name":"Stop Loss Móvel","desc":"Um stop loss dinâmico que acompanha os movimentos de preço, travando o lucro conforme o mercado se move a seu favor."}
    ],
    "hours_label": "Horários de Trading", "hours_title": "Horários de Mercado por Ativo",
    "hours_desc": "A Olla Trade segue os horários internacionais padrão de mercado. Todos os horários estão no horário do servidor (GMT+2 durante o horário de verão, GMT+3 no inverno).",
    "hours_col1": "Classe de Ativo", "hours_col2": "Horário de Mercado (Horário do Servidor)", "hours_col3": "Dias", "hours_col4": "Observações",
    "hours_note": "Os horários de trading podem ser afetados por feriados e eventos extraordinários de mercado. Os spreads podem se ampliar na abertura e no fechamento do mercado. Verifique sua plataforma MT4 para informações de sessão em tempo real.",
    "instruments_label": "Instrumentos",
    "instruments_desc": [
      {"asset":"Forex","count":"70+","desc":"Pares de moedas principais, secundários e exóticos incluindo EUR/USD, GBP/USD, USD/JPY, USD/CHF e mais."},
      {"asset":"Metais","count":"4+","desc":"Ouro (XAU/USD), Prata (XAG/USD) e outros metais preciosos via CFDs."},
      {"asset":"Índices","count":"15+","desc":"Índices de ações globais incluindo US30, SPX500, NAS100, GER30, UK100 e mais."},
      {"asset":"Energias","count":"5+","desc":"Petróleo (Brent & WTI), Gás Natural e outros CFDs de energia."},
      {"asset":"Criptomoedas","count":"10+","desc":"Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP) e outros CFDs de cripto principais."},
      {"asset":"Ações","count":"1.000+","desc":"CFDs de ações individuais dos EUA, Reino Unido, UE e outros mercados principais incluindo Apple, Amazon, Tesla e mais."}
    ],
    "view_market": "Ver",
    "risk_label": "Divulgação de Risco",
    "risk_p1": "O trading de Forex e CFDs envolve risco significativo de perda e pode não ser adequado para todos os investidores. O trading alavancado amplifica tanto os lucros potenciais quanto as perdas potenciais — você pode perder mais do que seu depósito inicial.",
    "risk_p2": "Os spreads são variáveis e podem se ampliar durante períodos de volatilidade de mercado, liquidez reduzida ou grandes anúncios econômicos. A derrapagem pode ocorrer durante mercados de movimento rápido. O desempenho passado não é indicativo de resultados futuros.",
    "risk_p3": "Você deve garantir que entende como os CFDs funcionam e se pode se dar ao luxo de assumir o risco. Por favor, leia nossas",
    "risk_link": "Divulgações de Risco", "risk_p3b": "antes de negociar.",
    "cta_title": "Opere com Condições Profissionais",
    "cta_subtitle": "Abra uma conta em minutos e acesse 500+ instrumentos com spreads competitivos, execução rápida e suporte completo ao MetaTrader 4."
  },
  "accounts": {
    "hero_title": "Escolha a Conta de Trading Certa",
    "hero_subtitle": "Compare condições de trading, spreads, execução e recursos em todos os tipos de conta da Olla Trade.",
    "badge": "Tipos de Conta",
    "entry_level": "Nível Iniciante", "most_popular": "Mais Popular", "professional": "Profissional",
    "min_deposit": "Depósito mínimo", "popular_pill": "Mais Popular",
    "open_std": "Abrir Standard", "open_pro": "Abrir Conta Pro", "open_elite": "Abrir Conta Elite",
    "compare_title": "Comparação Completa de Contas",
    "compare_subtitle": "Detalhamento completo de todas as condições em cada tipo de conta.",
    "feature_col": "Recurso",
    "row_deposit": "Depósito Mínimo", "row_type": "Tipo de Spread", "row_spread": "Spread Médio (EUR/USD)",
    "row_commission": "Comissão", "row_leverage": "Alavancagem Máxima", "row_mc": "Nível de Chamada de Margem",
    "row_so": "Nível de Stop Out", "row_instruments": "Instrumentos", "row_exec": "Execução de Ordens",
    "row_ea": "Expert Advisors", "row_nbp": "Proteção Saldo Negativo",
    "row_support": "Suporte 24/5", "row_fees": "Taxas de Dep. / Saque", "row_demo": "Conta Demo",
    "val_variable": "Variável", "val_raw": "Bruto (variável)", "val_market": "Mercado",
    "val_supported": "Suportado", "val_yes": "Sim", "val_none": "Nenhuma",
    "val_std_support": "Padrão", "val_pro_support": "Prioritário", "val_eli_support": "VIP",
    "faqs": [
      {"q":"Qual conta é melhor para iniciantes?","a":"A conta Standard é ideal para iniciantes — depósito mínimo de $10, sem comissão, acesso completo ao MT4 e mais de 500 instrumentos."},
      {"q":"Posso fazer upgrade do meu tipo de conta?","a":"Sim. Você pode fazer upgrade de Standard para Pro ou Elite depositando o mínimo exigido. Entre em contato com o suporte para arranjar seu upgrade."},
      {"q":"Uma conta demo está disponível?","a":"Sim. Uma conta demo está disponível para todos os tipos de conta para que você possa praticar com fundos virtuais antes de operar ao vivo."},
      {"q":"Qual é a diferença entre spreads variáveis e brutos?","a":"Os spreads variáveis flutuam com as condições de mercado. Os spreads brutos na conta Elite são a taxa interbancária direta mais uma comissão fixa por lote — geralmente menores em condições de mercado líquidas."},
      {"q":"Em quanto tempo posso abrir uma conta?","a":"O registro leva cerca de 2 minutos. A verificação KYC geralmente leva de 1 a 2 dias úteis. Você pode negociar após a aprovação."}
    ]
  },
  "funding": {
    "stats_fees": "Taxas Olla Trade", "stats_methods": "Métodos Cripto",
    "stats_time": "Prazo de Saque", "stats_secure": "Criptografia SSL",
    "cta_deposit": "Depositar Fundos", "cta_withdraw": "Solicitar Saque",
    "methods_label": "Métodos Suportados", "methods_title": "Métodos de Financiamento Cripto",
    "methods_subtitle": "Deposite na sua conta Olla Trade com segurança usando as principais criptomoedas. Todos os métodos são aceitos sem taxas da Olla Trade.",
    "label_deposit": "Depósito", "label_withdrawal": "Saque",
    "label_min": "Depósito mín.", "label_fee": "Taxa Olla Trade", "val_none": "Nenhuma",
    "support_note": "Métodos de pagamento adicionais podem estar disponíveis em seu portal do cliente.",
    "contact_support": "Contate o suporte",
    "support_note2": "para as últimas opções disponíveis.",
    "flow_label": "Financiamento Cripto Simplificado",
    "flow_title": "Fluxo de Transação Seguro Ponta a Ponta",
    "flow_desc": "Todo depósito e saque é processado através do seu portal do cliente pessoal com criptografia SSL. Seus fundos se movem diretamente da sua carteira para sua conta de trading via blockchain — sem intermediários, sem etapas ocultas.",
    "flow_features": [
      {"label":"Sem Taxas da Olla Trade","desc":"Não cobramos taxas em depósitos ou saques. As taxas de rede blockchain se aplicam apenas no lado do blockchain."},
      {"label":"Múltiplos Métodos Cripto","desc":"USDT TRC20, USDT ERC20, Bitcoin e Ethereum — com mais métodos disponíveis no portal do cliente."},
      {"label":"Creditado Após Confirmações","desc":"Os fundos aparecem em sua conta de trading automaticamente após as confirmações de blockchain necessárias."},
      {"label":"Saques pelo Mesmo Método","desc":"Os saques são devolvidos ao mesmo método usado para o depósito — um requisito padrão de segurança financeira."}
    ],
    "process_label": "Passo a Passo", "process_title": "Como Depositar e Sacar",
    "deposit_title": "Depositar Fundos", "withdraw_title": "Solicitar Saque",
    "deposit_steps": [
      ["Faça login no seu portal do cliente Olla Trade.","Acesse sua conta em direct.ollatrade.com usando suas credenciais."],
      ["Navegue para Financiamento / Depósito.","No painel do seu portal, encontre a seção de Financiamento ou Depósito."],
      ["Selecione seu método cripto preferido.","Escolha USDT (TRC20/ERC20), Bitcoin ou Ethereum."],
      ["Copie o endereço de depósito e envie os fundos.","Envie o valor exato de cripto para o endereço de carteira fornecido."],
      ["Fundos creditados após confirmação.","Seu saldo é atualizado automaticamente após as confirmações de blockchain necessárias."]
    ],
    "withdraw_steps": [
      ["Faça login no seu portal do cliente.","Acesse sua conta em direct.ollatrade.com usando suas credenciais."],
      ["Navegue para Financiamento / Saque.","No painel do seu portal, encontre a seção de Saque."],
      ["Selecione seu método de saque.","Escolha o mesmo método usado para o seu depósito original."],
      ["Insira o valor e o destino.","Digite o valor do saque e o endereço da sua carteira ou dados bancários."],
      ["Envie e aguarde o processamento.","As solicitações de saque são revisadas e processadas em até 24–48 horas úteis após a aprovação."]
    ],
    "times_label": "Prazos de Processamento", "times_title": "Resumo de Processamento de Financiamento",
    "times_col1": "Método", "times_col2": "Depósito", "times_col3": "Saque",
    "times_col4": "Taxa Olla Trade", "times_col5": "Observações",
    "times_note": "* Os prazos de processamento são estimativas e podem variar dependendo do status de verificação, método de pagamento e volume de transações. Taxas de rede blockchain podem se aplicar.",
    "rules_label": "Regras Importantes", "rules_title": "Requisitos de Financiamento e Saque",
    "rules": [
      {"title":"Verificação de Conta Necessária","desc":"As solicitações de saque requerem verificação KYC/AML completa da conta. Certifique-se de que seus documentos de identidade e comprovante de endereço estão enviados e aprovados."},
      {"title":"Envie Apenas pelo Portal do Cliente","desc":"Todas as solicitações de saque devem ser enviadas através do seu portal oficial do cliente Olla Trade. Solicitações feitas via e-mail ou chat não podem ser aceitas por razões de segurança."},
      {"title":"Confirmações de Blockchain","desc":"Os depósitos de cripto são creditados após confirmações suficientes de rede blockchain. Os prazos de processamento variam por rede e condições de congestionamento atuais."},
      {"title":"Documentos Adicionais Podem Ser Solicitados","desc":"A Olla Trade pode solicitar documentação adicional para fins de segurança, conformidade ou verificação anti-lavagem de dinheiro antes de processar seu saque."},
      {"title":"Saque de Crédito de Bônus","desc":"O crédito de trading de bônus não pode ser sacado diretamente, a menos que explicitamente declarado nos termos oficiais da promoção relevante."},
      {"title":"Política de Mesmo Método","desc":"Sempre que possível, os saques são processados de volta para o mesmo método usado no depósito original. Este é um requisito padrão de segurança financeira."}
    ],
    "security_label": "Segurança & Proteção", "security_title": "Como Protegemos Seus Fundos",
    "security_features": [
      {"title":"Portal do Cliente Seguro","desc":"Todas as operações de financiamento e saque são conduzidas através do seu portal do cliente Olla Trade com criptografia SSL — nunca via e-mail ou links de terceiros."},
      {"title":"Verificação de Identidade (KYC)","desc":"A verificação de conta garante que apenas o titular registrado possa solicitar ou receber fundos, protegendo você de saques não autorizados."},
      {"title":"Histórico de Transações","desc":"Um registro completo de todos os depósitos, saques e transações está disponível em seu portal do cliente a qualquer momento para sua revisão."},
      {"title":"Revisão de Conformidade","desc":"Todas as transações estão sujeitas a rastreamento de conformidade padrão e anti-lavagem de dinheiro em conformidade com as regulamentações financeiras aplicáveis."},
      {"title":"Fundos de Clientes Segregados","desc":"Os fundos dos clientes são mantidos separadamente dos fundos operacionais da empresa, fornecendo uma camada adicional de segurança financeira para seus depósitos."},
      {"title":"Supervisão de Processamento","desc":"As solicitações de saque são revisadas e aprovadas pela nossa equipe de operações durante o horário comercial para garantir precisão e segurança antes do processamento."}
    ],
    "cta_title": "Pronto para Financiar sua Conta?",
    "cta_subtitle": "Faça login no seu portal do cliente para fazer um depósito ou solicitar um saque."
  },
  "execution": {
    "crosslink_text": "Procurando o documento formal e legal de Política de Execução de Ordens?",
    "crosslink_link": "Ver Política de Execução de Ordens →",
    "intro_label": "Sobre Nossa Execução",
    "intro_title": "Como a Olla Trade Executa Ordens",
    "intro_p1": "A Olla Trade opera como um serviço exclusivo de execução usando um modelo de execução a mercado. Quando você coloca uma negociação, sua ordem é processada pela nossa infraestrutura de trading e enviada à liquidez disponível ao melhor preço alcançável sob as condições de mercado atuais.",
    "intro_p2": "Os preços exibidos no MetaTrader 4 são derivados de cotações agregadas fornecidas pelos nossos provedores de liquidez. Esses preços são variáveis e refletem as condições de mercado em tempo real, incluindo oferta e demanda, liquidez geral do mercado e o horário da sessão de trading ativa.",
    "intro_p3": "A qualidade de execução pode variar dependendo das condições de mercado. A Olla Trade não fornece aconselhamento de investimentos e não garante execução a nenhum preço específico. As ordens estão sujeitas à liquidez disponível e às condições de mercado vigentes no momento da execução.",
    "intro_cards": [
      {"title":"Execução a Mercado","desc":"Ordens preenchidas ao melhor preço de mercado disponível em tempo real, sujeitas à liquidez."},
      {"title":"Mercados Globais","desc":"Acesso a Forex, Metais, Índices, Energias, Cripto e Ações — tudo pelo MT4."},
      {"title":"Infraestrutura MT4","desc":"Todas as ordens processadas pelo MetaTrader 4 — plataforma de trading padrão da indústria."},
      {"title":"Preços Variáveis","desc":"Preços derivados dos provedores de liquidez e sujeitos às condições de mercado vigentes."}
    ],
    "flow_label": "Infraestrutura de Trading",
    "flow_title": "Roteamento de Ordens e Fluxo de Execução",
    "flow_desc": "Quando você envia uma ordem no MetaTrader 4, ela é transmitida para a infraestrutura de execução da Olla Trade, validada em relação à margem disponível e aos parâmetros de risco, depois roteada para o nosso pool de liquidez. O melhor preço disponível é selecionado e a confirmação de preenchimento é devolvida ao seu terminal.",
    "flow_features": [
      {"label":"Roteamento STP","desc":"As ordens são roteadas diretamente aos provedores de liquidez sem intervenção manual de operador em condições normais."},
      {"label":"Melhor Preço Disponível","desc":"Nosso mecanismo de preços agrega cotações de múltiplos provedores de liquidez para obter o melhor bid e ask disponíveis no momento da execução."},
      {"label":"Execução Sujeita à Liquidez","desc":"O preço final de execução depende da liquidez de mercado disponível e das condições no momento em que a ordem é processada."},
      {"label":"Sem Requotes","desc":"A execução a mercado significa que todas as ordens são aceitas ao preço vigente — você não será solicitado a confirmar um preço diferente."}
    ],
    "model_label": "Modelo de Execução",
    "model_title": "Execução de Ordens Explicada",
    "model_desc": "Entendendo como diferentes tipos de ordens são processados. A qualidade de execução pode variar dependendo das condições de mercado e da liquidez disponível.",
    "model_cards": [
      {"title":"Execução a Mercado","desc":"As ordens a mercado são preenchidas ao melhor preço disponível no momento da execução. O preço final pode diferir do preço cotado no momento em que a ordem foi feita, especialmente em condições de mercado de movimento rápido."},
      {"title":"Ordens Pendentes","desc":"As ordens pendentes instruem a plataforma a abrir uma posição quando o mercado atinge um preço especificado. Os tipos incluem Buy/Sell Limit e Buy/Sell Stop. A execução ao preço exato especificado está sujeita à liquidez de mercado disponível."},
      {"title":"Ordens Stop Loss","desc":"Uma ordem Stop Loss fecha automaticamente uma posição em um nível de perda especificado. As ordens Stop Loss ajudam a limitar as perdas potenciais, mas não garantem o fechamento ao preço exato solicitado, especialmente durante movimentos rápidos de preço ou gaps de mercado."},
      {"title":"Ordens Take Profit","desc":"Uma ordem Take Profit fecha uma posição automaticamente quando o mercado atinge um alvo de lucro especificado. A execução está sujeita à liquidez de mercado disponível quando o preço-alvo é atingido."},
      {"title":"Derrapagem","desc":"A derrapagem refere-se à diferença entre o preço esperado de uma negociação e o preço ao qual ela é realmente executada. A derrapagem pode ocorrer em condições de mercado de movimento rápido ou baixa liquidez e pode ser positiva ou negativa."},
      {"title":"Política Sem Requote","desc":"A Olla Trade não emite requotes em ordens de clientes. Sob o modelo de execução a mercado, todas as ordens são aceitas e executadas ao melhor preço de mercado vigente disponível no momento do envio."}
    ],
    "slippage_label": "Derrapagem & Preços",
    "slippage_title": "Entendendo a Derrapagem e a Variação de Preço",
    "slippage_desc": "A derrapagem é uma característica normal e esperada do trading em mercados financeiros reais. Ocorre quando o mercado se move entre o momento em que você envia uma ordem e o momento em que ela é processada pelo nosso motor de execução.",
    "slippage_cards": [
      {"title":"Quando Ocorre Derrapagem","desc":"A derrapagem é mais comum durante alta volatilidade de mercado, grandes divulgações de notícias econômicas e períodos de baixa liquidez — como fora do horário regular de trading ou em torno da abertura/fechamento do mercado."},
      {"title":"Derrapagem Positiva","desc":"A derrapagem positiva ocorre quando sua ordem é preenchida a um preço melhor do que o solicitado — por exemplo, uma ordem de compra preenche abaixo do preço solicitado. Isso beneficia o cliente."},
      {"title":"Derrapagem Negativa","desc":"A derrapagem negativa ocorre quando sua ordem é preenchida a um preço pior do que o solicitado. Isso pode acontecer durante movimentos rápidos de mercado ou quando ordens grandes consomem a liquidez disponível ao preço solicitado."},
      {"title":"Gerenciando a Derrapagem","desc":"Use ordens limitadas em vez de ordens a mercado sempre que possível. Evite negociar imediatamente em torno de grandes divulgações de dados econômicos. Monitore o calendário econômico e aplique o dimensionamento de posição adequado."}
    ],
    "infra_label": "Infraestrutura",
    "infra_title": "Infraestrutura de Trading",
    "infra_desc": "A infraestrutura de trading da Olla Trade é construída para execução de ordens confiável e contínua em todos os instrumentos e sessões.",
    "infra_cards": [
      {"title":"Localização dos Servidores","desc":"Os servidores de trading são hospedados em data centers profissionais com conectividade redundante e sistemas de energia para máximo tempo de atividade."},
      {"title":"Agregação de Liquidez","desc":"Os preços são obtidos de múltiplos provedores de liquidez institucionais. Os melhores preços de bid e ask disponíveis são agregados e apresentados aos clientes em tempo real."},
      {"title":"Bridge MT4","desc":"As ordens dos clientes feitas via MetaTrader 4 são transmitidas instantaneamente através de nossa bridge MT4 para nossa infraestrutura de execução para processamento."},
      {"title":"Monitoramento Contínuo","desc":"Nossa equipe de operações monitora a qualidade de execução, desempenho dos servidores e conectividade de forma contínua durante todas as sessões de trading."}
    ],
    "pricing_label": "Modelo de Preços",
    "pricing_title": "Como os Preços São Gerados",
    "pricing_desc": "A Olla Trade deriva todos os preços de cotações agregadas fornecidas pelos nossos provedores de liquidez institucionais. Os preços refletem as condições de mercado em tempo real e são repassados aos clientes sem nenhuma marcação artificial além do spread divulgado.",
    "pricing_points": [
      "Os preços são agregados de múltiplos provedores de liquidez em tempo real.",
      "Os melhores preços de bid e ask disponíveis são apresentados aos clientes via MetaTrader 4.",
      "Os spreads são variáveis e refletem a liquidez de mercado vigente e a atividade da sessão.",
      "A Olla Trade obtém receita a partir do spread entre os preços de bid e ask.",
      "Nenhuma cobrança oculta adicional é aplicada à atividade de trading padrão.",
      "Toda a metodologia de precificação é divulgada na Política de Execução de Ordens."
    ],
    "pricing_link": "Ver Política de Execução de Ordens →",
    "faq_title": "Perguntas Frequentes — Informações de Execução",
    "cta_title": "Abra uma Conta na Olla Trade",
    "cta_subtitle": "Acesse 500+ instrumentos com execução a mercado, spreads competitivos e suporte completo ao MetaTrader 4."
  },
  "platform": {
    "badge": "MetaTrader 4",
    "section_title": "A Plataforma de Trading Mais Popular do Mundo",
    "section_desc": "Gráficos avançados, trading automatizado e execução em tempo real em todos os mercados globais — em todos os seus dispositivos. Baixe ou acesse pelo navegador sem necessidade de instalação.",
    "mobile_title": "Disponível em Todos os Dispositivos",
    "mobile_sub": "Desktop | WebTrader | iOS | Android",
    "features": [
      {"title":"30+ Indicadores Técnicos","desc":"MA, MACD, RSI, Bandas de Bollinger, Ichimoku integrados e mais de 25 tipos de indicadores. Todos com personalização completa e capacidade de sobreposição."},
      {"title":"Expert Advisors (EAs)","desc":"Suporte completo a trading automatizado MQL4. Backteste estratégias com dados históricos de preço antes de operar ao vivo."},
      {"title":"Alertas Personalizados","desc":"Alertas de preço, indicador e margem via desktop MT4, push mobile ou e-mail."},
      {"title":"Layout Multi-Gráfico","desc":"Monitore múltiplos instrumentos e timeframes simultaneamente em uma única tela."},
      {"title":"9 Timeframes de Gráfico","desc":"De M1 a MN — tipos de gráfico de candlestick, barras e linha disponíveis."},
      {"title":"Execução em Um Clique","desc":"Trading direto no gráfico com envio instantâneo de ordens a mercado — sem necessidade de diálogo."},
      {"title":"Suporte Completo a MQL4","desc":"Construa, importe e execute estratégias automatizadas escritas em MetaQuotes Language 4."},
      {"title":"Compatível com VPS","desc":"Execute MT4 e EAs em um Servidor Virtual Privado para trading ininterrupto 24/5."}
    ],
    "cta_explore": "Explorar Recursos do MT4",
    "cta_title": "Comece a Operar no MetaTrader 4",
    "cta_subtitle": "Abra uma conta gratuita e acesse o MT4 em desktop, WebTrader, iOS e Android com condições de trading profissionais."
  }
}

# ── FAQ additions ──────────────────────────────────────────────────────
EXECUTION_FAQ_PT = [
  {"q":"O que é execução a mercado?","a":"A execução a mercado significa que suas ordens são preenchidas ao melhor preço de mercado disponível no momento em que a ordem é processada, em vez do preço solicitado originalmente. A Olla Trade usa execução a mercado em todos os tipos de conta."},
  {"q":"A derrapagem pode ocorrer ao negociar com a Olla Trade?","a":"Sim. A derrapagem pode ocorrer durante períodos de alta volatilidade de mercado, grandes divulgações de notícias econômicas ou condições de baixa liquidez. A derrapagem pode ser positiva (executada a um preço melhor) ou negativa (executada a um preço pior)."},
  {"q":"Como os preços são gerados?","a":"Os preços da Olla Trade são derivados de cotações agregadas fornecidas pelos nossos provedores de liquidez. Os preços exibidos no MetaTrader 4 refletem os melhores preços de bid e ask disponíveis do nosso pool de liquidez a qualquer momento."},
  {"q":"O que fatores afetam a qualidade de execução?","a":"A qualidade de execução pode ser influenciada por: volatilidade de mercado atual, liquidez disponível para o instrumento sendo negociado, tamanho da ordem em relação à profundidade do mercado disponível, latência de conexão de rede e o horário do dia e sessões de trading ativas."},
  {"q":"O que acontece durante condições de mercado voláteis?","a":"Durante períodos de alta volatilidade — como grandes divulgações de dados econômicos, anúncios de bancos centrais ou eventos geopolíticos significativos — os preços de mercado podem mover-se rapidamente e a liquidez pode reduzir temporariamente."},
  {"q":"Os spreads podem se ampliar?","a":"Sim. Os spreads são variáveis e podem se ampliar significativamente durante períodos de alta volatilidade de mercado, fora do horário regular de trading, em torno de grandes divulgações de notícias econômicas ou durante períodos de liquidez de mercado reduzida."}
]

EXECUTION_FAQ_EN = [
  {"q":"What is market execution?","a":"Market execution means your orders are filled at the best available market price at the time the order is processed. Olla Trade uses market execution across all account types."},
  {"q":"Can slippage occur when trading with Olla Trade?","a":"Yes. Slippage can occur during periods of high market volatility, major economic news releases, or low liquidity conditions. Slippage can be positive (filled at a better price) or negative (filled at a worse price)."},
  {"q":"How are prices generated?","a":"Olla Trade pricing is derived from aggregated quotes provided by our liquidity providers. The prices displayed in MetaTrader 4 reflect the best available bid and ask prices from our liquidity pool at any given moment."},
  {"q":"What factors affect execution quality?","a":"Execution quality can be influenced by: current market volatility, available liquidity for the instrument being traded, the size of the order relative to available market depth, network connection latency, and the time of day and active trading sessions."},
  {"q":"What happens during volatile market conditions?","a":"During periods of high volatility — such as major economic data releases, central bank announcements, or significant geopolitical events — market prices can move rapidly and liquidity may temporarily reduce."},
  {"q":"Can spreads widen?","a":"Yes. Spreads are variable and may widen significantly during periods of high market volatility, outside of regular market trading hours, around major economic news releases, or during periods of reduced market liquidity."}
]

# ── Load and update files ─────────────────────────────────────────────
pt_fp = os.path.join(BASE, "pt.json")
en_fp = os.path.join(BASE, "en.json")

with open(pt_fp, "r", encoding="utf-8") as f: pt = json.load(f)
with open(en_fp, "r", encoding="utf-8") as f: en = json.load(f)

# Add trading_pages namespace to both
pt["trading_pages"] = TRADING_PT
en["trading_pages"] = TRADING_EN

# Add FAQ for execution
pt_faq = pt.get("faq", {})
pt_faq["execution"] = EXECUTION_FAQ_PT
pt["faq"] = pt_faq

en_faq = en.get("faq", {})
en_faq["execution"] = EXECUTION_FAQ_EN
en["faq"] = en_faq

with open(pt_fp, "w", encoding="utf-8") as f: json.dump(pt, f, ensure_ascii=False, indent=2)
with open(en_fp, "w", encoding="utf-8") as f: json.dump(en, f, ensure_ascii=False, indent=2)

print("Done! Added trading_pages namespace to pt.json and en.json")
print("PT trading_pages keys:", list(pt["trading_pages"].keys()))
