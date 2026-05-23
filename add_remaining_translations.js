const fs = require("fs");
const path = require("path");

const EN = path.join(__dirname, "messages/en.json");
const PT = path.join(__dirname, "messages/pt.json");

const en = JSON.parse(fs.readFileSync(EN, "utf8"));
const pt = JSON.parse(fs.readFileSync(PT, "utf8"));

// ─── EN additions ──────────────────────────────────────────────────────────

// Company hub
en.company.hub = {
  badge: "Company",
  title: "Olla Trade Company",
  subtitle: "Learn about our mission, meet our team, and find all the resources you need.",
  links: [
    { title: "About Us",           sub: "Our story and mission",   href: "/company/about" },
    { title: "Partner / Affiliate",sub: "Earn with Olla Trade",    href: "/company/affiliate" },
    { title: "Promotions",         sub: "Active bonuses",          href: "/company/promotions" },
    { title: "Contact Us",         sub: "Get in touch",            href: "/company/contact" },
    { title: "Get Help",           sub: "FAQs and support",        href: "/company/help" },
    { title: "Complaints",         sub: "Complaint process",       href: "/company/complaints" },
    { title: "Legal Documents",    sub: "All policies",            href: "/company/legal" }
  ]
};

// Markets hub
en.markets.hub = {
  badge: "500+ Instruments",
  title: "Global Markets at Your Fingertips",
  subtitle: "Access six major asset classes from a single Olla Trade account. Professional conditions, competitive spreads, and the full power of MT4.",
  explore_prefix: "Explore",
  cta_title: "Start Trading Global Markets",
  cta_subtitle: "Open an account in minutes and access all 500+ instruments from one platform.",
  markets: [
    { label: "Forex",    sub: "70+ currency pairs",    pip: "From 0.0 pips",    leverage: "Up to 1:500" },
    { label: "Metals",   sub: "Precious metals",        pip: "From 25 pts",      leverage: "Up to 1:200" },
    { label: "Indices",  sub: "Global stock indices",   pip: "From 1 pt",        leverage: "Up to 1:100" },
    { label: "Energies", sub: "Commodities",            pip: "From 3 pts",       leverage: "Up to 1:100" },
    { label: "Crypto",   sub: "Cryptocurrencies",       pip: "From 50 pts",      leverage: "Up to 1:10"  },
    { label: "Stocks",   sub: "1,000+ equities",        pip: "Market spread",    leverage: "Up to 1:10"  }
  ]
};

// Trading hub
en.trading_pages.hub = {
  badge: "Trading",
  title: "Trading with Olla Trade",
  subtitle: "Professional trading conditions, multiple account types, and the power of MetaTrader 4.",
  links: [
    { title: "Platform (MT4)",         sub: "MetaTrader 4 on all devices",   href: "/trading/platform" },
    { title: "Compare Accounts",       sub: "Standard, Pro, and Elite",      href: "/trading/accounts" },
    { title: "Trading Conditions",     sub: "Spreads, leverage & margin",    href: "/trading/conditions" },
    { title: "Deposit",                sub: "Fund your account",             href: "/trading/deposit" },
    { title: "Withdrawal",             sub: "Fast and secure",               href: "/trading/withdrawal" },
    { title: "Payment Methods",        sub: "Cards, crypto, wire",           href: "/trading/payment-methods" },
    { title: "Expiration & Holidays",  sub: "Trading schedule",              href: "/trading/expiration" },
    { title: "Execution Information",  sub: "Order execution policy",        href: "/execution-information" }
  ]
};

// Tools hub
en.tools.hub = {
  badge: "Free Tools",
  title: "Professional Trading Tools",
  subtitle: "Everything you need to research, plan, and execute — free to all Olla Trade clients.",
  live_data_label: "Live Market Data",
  spreads_label: "Indicative Spreads",
  spreads_title: "Typical Spreads by Instrument",
  quick_links_label: "Quick Links",
  market_data_note: "Market data is indicative. Prices may vary by account type, liquidity, and market conditions.",
  all_tools_label: "All Tools",
  all_tools_title: "Free for All Clients",
  tools: [
    { title: "Economic Calendar", sub: "Track market-moving events in real time.",            href: "/tools/economic-calendar" },
    { title: "Forex Calculator",  sub: "Calculate pip value, margin requirements, and P&L.", href: "/tools/forex-calculator" },
    { title: "Trading Alerts",    sub: "Set custom price alerts on your watched instruments.",href: "/tools/alerts" },
    { title: "VPS Guide",         sub: "Run Expert Advisors 24/5 on a virtual private server.",href: "/tools/vps" },
    { title: "Forex Glossary",    sub: "Master key trading terms from A to Z.",              href: "/tools/glossary" },
    { title: "Education Centre",  sub: "Structured learning from Basic to Professional level.",href: "/tools/education" },
    { title: "Articles",          sub: "Latest market analysis and trading insights.",        href: "/tools/news" }
  ],
  quick_links: [
    { label: "Forex Calculator",    href: "/tools/forex-calculator",    desc: "Calculate pip value & margin" },
    { label: "Economic Calendar",   href: "/tools/economic-calendar",   desc: "Upcoming market events" },
    { label: "Trading Alerts",      href: "/tools/alerts",              desc: "Set MT4 price notifications" },
    { label: "VPS Guide",           href: "/tools/vps",                 desc: "Run EAs 24/5 without downtime" }
  ]
};

// Deposit page
en.trading_pages.deposit = {
  badge: "Fund Your Account",
  title: "Deposit Funds",
  subtitle: "Choose from a wide range of payment methods to fund your Olla Trade account quickly and securely. No fees from Olla Trade.",
  cta_login: "Log In to Deposit",
  stat_min_label: "Min. Deposit",
  stat_fee_label: "Our Fees",
  stat_card_label: "Card Processing",
  stat_card_val: "Instant",
  guarantees: [
    "Instant crediting on card & e-wallet deposits",
    "SSL-encrypted, secure transaction processing",
    "No deposit fees charged by Olla Trade",
    "All deposits protected by client fund segregation"
  ],
  methods_title: "Available Deposit Methods",
  col_processing: "Processing",
  col_fee: "Fee",
  col_min: "Min. deposit",
  fee_val: "No fee",
  time_instant: "Instant",
  time_network: "Network confirmations",
  time_wire: "1–3 business days",
  how_title: "How to Deposit",
  steps: [
    "Log in to your Olla Trade client portal.",
    "Navigate to the Deposit section in your account dashboard.",
    "Select your preferred payment method.",
    "Enter the deposit amount and follow the on-screen instructions.",
    "Your account will be credited once the payment is confirmed."
  ],
  disclaimer: "Processing times may vary. Third-party fees from payment providers may apply and are outside our control. Olla Trade does not charge its own fees on deposits.",
  cta_title: "Ready to Fund Your Account?",
  cta_login2: "Log In to Deposit",
  cta_open: "Open New Account"
};

// Withdrawal page
en.trading_pages.withdrawal = {
  badge: "Withdraw Funds",
  title: "Withdrawals",
  subtitle: "Withdraw your trading profits quickly and securely. We process withdrawal requests promptly with no hidden fees.",
  cta_btn: "Request Withdrawal",
  stat_proc_label: "Processing",
  stat_fee_label: "Our Fees",
  stat_ssl_label: "Encrypted",
  how_title: "How to Withdraw",
  steps: [
    "Log in to your Olla Trade client portal.",
    "Navigate to the Withdrawal section in your account dashboard.",
    "Select your preferred withdrawal method.",
    "Enter the withdrawal amount and submit your request.",
    "Processing typically takes 24–48 business hours after approval."
  ],
  policy_title: "Withdrawal Policy",
  policy_items: [
    ["No withdrawal fees",   "Olla Trade does not charge fees on withdrawal requests."],
    ["Same method rule",     "Withdrawals are processed to the same method used for deposit where possible."],
    ["KYC required",         "Account verification (KYC) must be completed before processing withdrawals."],
    ["Processing time",      "Withdrawals are processed within 24–48 business hours of approval."],
    ["Full terms",           "Please review our Withdrawal Conditions page for complete policy details."]
  ],
  trust: [
    "Segregated client funds",
    "SSL-encrypted withdrawals",
    "Fast 24–48h processing",
    "No Olla Trade fees"
  ],
  wallet_label: "Client Portal",
  wallet_title: "Olla Wallet",
  wallet_desc: "The Olla Wallet allows you to transfer funds between your wallet and trading accounts instantly, giving you the flexibility to manage your capital according to your trading needs. Funds held in the Wallet are not subject to market risks, so it is a great way to manage risk and exposure.",
  wallet_bullets: [
    "Instant transfers between wallet and trading accounts",
    "Add funds using crypto, cards, or bank transfer",
    "Withdraw to your preferred payment method",
    "Full transaction history and balance tracking"
  ],
  wallet_cta_primary: "Access Olla Wallet",
  wallet_cta_secondary: "How Olla Wallet works",
  cta_title: "Access Your Funds Anytime",
  cta_primary: "Request Withdrawal",
  cta_secondary: "View Withdrawal Conditions"
};

// Payment methods page
en.trading_pages.payment_methods = {
  badge: "Deposits & Withdrawals",
  title: "Payment Methods",
  subtitle: "A wide range of fast and secure payment options — all with no fees charged by Olla Trade.",
  stat_methods_label: "Methods",
  stat_fee_label: "Our Fees",
  stat_instant_label: "Card & E-Wallet",
  stat_instant_val: "Instant",
  col_deposit: "Deposit",
  col_withdrawal: "Withdrawal",
  col_fee: "Fee",
  fee_val: "No fee",
  time_instant: "Instant",
  time_network: "Network confirmations",
  time_wire_dep: "1–3 business days",
  time_wire_wd: "3–5 business days",
  time_card_wd: "3–5 business days",
  time_ewallet_wd: "24 hours",
  categories: [
    { cat: "Credit & Debit Cards", desc: "Instant deposits with all major credit and debit cards. Secure 3D-verified processing." },
    { cat: "E-Wallets",            desc: "Instant deposits and fast withdrawals through popular electronic wallets." },
    { cat: "Cryptocurrency",       desc: "Fund your account with major cryptocurrencies. Network confirmation required." },
    { cat: "Bank Transfer",        desc: "Traditional wire transfer for larger deposits. Processed within 1–3 business days." }
  ],
  disclaimer: "Please note: Processing times shown are estimates and may vary. Third-party payment providers may charge their own fees which are outside Olla Trade’s control. Olla Trade does not charge fees on deposits or withdrawals. Cryptocurrency processing times depend on network congestion and required confirmations.",
  cta_title: "Fund Your Account Today",
  cta_primary: "Deposit Funds",
  cta_secondary: "Open Account"
};

// Expiration page
en.trading_pages.expiration = {
  badge: "Trading Schedule",
  title: "Expiration & Market Holidays",
  subtitle: "Stay informed about trading hours, contract expiration dates, and market closures to plan your trading accordingly.",
  sections: [
    { title: "Forex Market Hours", rows: [
      ["Monday",        "00:00 – Friday 23:59 (server time)"],
      ["Trading Week",  "5 days a week, 24 hours a day"],
      ["Market Open",   "Sunday 22:00 server time"],
      ["Market Close",  "Friday 22:00 server time"]
    ]},
    { title: "Metals (Gold & Silver)", rows: [
      ["Trading Hours", "Monday–Friday (24 hours)"],
      ["Exceptions",    "Reduced liquidity during Asian session"],
      ["US Holidays",   "Spreads may widen"]
    ]},
    { title: "Indices", rows: [
      ["US30 / SPX500",   "Monday–Friday, session hours"],
      ["DAX40",           "Monday–Friday, European session"],
      ["Holiday Closures","Varies by exchange"]
    ]},
    { title: "Crypto", rows: [
      ["Availability", "24/7 (subject to liquidity)"],
      ["Weekend",      "Available but lower liquidity"],
      ["Note",         "Spreads may be wider on weekends"]
    ]}
  ],
  important_label: "Important:",
  important: "Trading hours are indicative and may be subject to change during public holidays or periods of low liquidity. Check the instrument specifications in your MT4 platform for the most up-to-date schedule. Spreads may widen during market openings, closings, and around major economic events."
};

// Cookies page
en.legal.cookies = {
  badge: "Privacy",
  title: "Cookies Policy",
  subtitle: "How Olla Trade uses cookies and how you can manage your preferences.",
  what_title: "What are Cookies?",
  what_body: "Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Olla Trade uses cookies to improve your browsing experience, analyse site traffic, and personalise content.",
  types: [
    { name: "Essential Cookies",  desc: "Required for the website to function properly. These cannot be disabled. They enable core functions such as security, account access, and form submissions." },
    { name: "Analytics Cookies",  desc: "Help us understand how visitors use our website by collecting anonymous usage data. This allows us to improve the user experience." },
    { name: "Functional Cookies", desc: "Remember your preferences such as language settings, and provide enhanced functionality." },
    { name: "Marketing Cookies",  desc: "Used to track visitors across websites and display relevant advertisements. These are optional and can be disabled." }
  ],
  managing_title: "Managing Cookies",
  managing_body: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect the functionality of our website. For more information, visit your browser’s help documentation."
};

// Complaint management page
en.legal.complaint_management = {
  badge: "Legal",
  title: "Complaint Management",
  subtitle: "Our formal complaint handling procedures and client dispute resolution process.",
  sections: [
    { title: "Scope",                    body: "This Complaint Management Policy applies to all clients of Olla Trade Ltd. It sets out the procedures for submitting, acknowledging, investigating, and resolving formal complaints." },
    { title: "How to Submit a Complaint",body: "Complaints can be submitted via email to: complaints@ollatrade.com. Please include: your full name, account number, date of the issue, detailed description of the complaint, and copies of any relevant supporting documentation." },
    { title: "Acknowledgement",          body: "We will acknowledge receipt of your complaint within 2 business days of receiving it. The acknowledgement will include a reference number and the name of the person handling your complaint." },
    { title: "Investigation",            body: "We will investigate your complaint thoroughly and impartially. We aim to provide a full response within 10 business days. For complex complaints requiring further investigation, we may require up to 30 business days and will keep you informed of progress." },
    { title: "Resolution",               body: "We will communicate our findings and proposed resolution in writing. Our response will explain our decision and the reasoning behind it. If your complaint is upheld, we will advise on the appropriate remedy." },
    { title: "Escalation",               body: "If you are not satisfied with our final response, you may escalate the matter to the relevant regulatory authority or seek independent legal advice. The Company’s registered address for regulatory purposes is: Grace Complex, The Valley, AI 2640, Anguilla." },
    { title: "Record Keeping",           body: "All complaint records are maintained for a minimum of 5 years. We use complaint data to identify patterns and improve our services." },
    { title: "Contact",                  body: "Complaints Department: complaints@ollatrade.com | Phone: +44 7418 641736 | Registered Address: Grace Complex, The Valley, AI 2640, Anguilla" }
  ]
};

// Education page
en.tools.education = {
  badge: "Learn to Trade",
  title: "Trading Education",
  subtitle: "Structured learning from beginner to professional. Build your trading knowledge at your own pace.",
  levels: [
    { badge: "Level 1", title: "Basic", topics: [
      "What is Forex Trading?","How Currency Pairs Work","Understanding Pips and Lots",
      "Basic Order Types — Buy, Sell, Stop, Limit","What is Leverage and Margin?",
      "Reading Basic Price Charts","Introduction to Risk Management","Demo Account Practice"
    ]},
    { badge: "Level 2", title: "Advanced", topics: [
      "Technical Analysis Fundamentals","Support and Resistance Levels","Trend Lines and Channels",
      "Moving Averages — SMA, EMA","RSI, MACD, Bollinger Bands","Fundamental Analysis Basics",
      "Trading Economic News Events","Position Sizing and Money Management"
    ]},
    { badge: "Level 3", title: "Professional", topics: [
      "Advanced Chart Patterns","Elliott Wave Theory","Multi-Timeframe Analysis",
      "Building a Trading Plan","Algorithmic Trading with EAs","Backtesting Strategies on MT4",
      "Portfolio Diversification","Advanced Risk Management"
    ]}
  ],
  disclaimer: "All educational content is for informational purposes only and does not constitute investment advice.",
  glossary_link: "Browse the Forex Glossary →",
  cta_title: "Put Your Knowledge to Work",
  cta_subtitle: "Open a demo account and practise your strategies with virtual funds before trading live.",
  cta_primary: "Open Account",
  cta_secondary: "View Forex Glossary"
};

// Glossary page
en.tools.glossary = {
  badge: "Education",
  title: "Forex Glossary",
  subtitle: "Master the language of trading. Our comprehensive glossary covers every key term from A to Z.",
  terms: [
    { term: "Ask Price",          def: "The lowest price a seller is willing to accept for a currency pair. Also called the offer price." },
    { term: "Bid Price",          def: "The highest price a buyer is willing to pay for a currency pair." },
    { term: "CFD",                def: "Contract for Difference — a financial derivative that allows you to speculate on price movements without owning the underlying asset." },
    { term: "Expert Advisor (EA)",def: "An automated trading program that runs on MetaTrader 4 and can execute trades based on pre-set rules without manual intervention." },
    { term: "Leverage",           def: "A mechanism that allows traders to control larger positions with a smaller amount of capital. Leverage amplifies both profits and losses." },
    { term: "Lot",                def: "The standard unit of measurement for a Forex transaction. One standard lot equals 100,000 units of the base currency." },
    { term: "Margin",             def: "The amount of funds required in your account to open and maintain a leveraged position." },
    { term: "Pip",                def: "The smallest standard unit of price movement in a currency pair, typically the fourth decimal place (0.0001) for most pairs." },
    { term: "Spread",             def: "The difference between the bid and ask price. It represents the cost of trading and is measured in pips." },
    { term: "Stop Loss",          def: "An instruction to close a position automatically when it reaches a specified loss level, to limit further losses." },
    { term: "Take Profit",        def: "An instruction to close a position automatically when it reaches a specified profit level." },
    { term: "Swap",               def: "An overnight interest charge (or credit) applied to positions held open past the market close. Also called rollover." }
  ]
};

// ─── PT additions ──────────────────────────────────────────────────────────

// Company hub
pt.company.hub = {
  badge: "Empresa",
  title: "Olla Trade",
  subtitle: "Saiba mais sobre nossa missão, conheça nossa equipe e encontre todos os recursos que você precisa.",
  links: [
    { title: "Sobre Nós",           sub: "Nossa história e missão",      href: "/company/about" },
    { title: "Parceiro / Afiliado", sub: "Ganhe com a Olla Trade",       href: "/company/affiliate" },
    { title: "Promoções",           sub: "Bônus ativos",                 href: "/company/promotions" },
    { title: "Fale Conosco",        sub: "Entre em contato",             href: "/company/contact" },
    { title: "Obter Ajuda",         sub: "FAQs e suporte",               href: "/company/help" },
    { title: "Reclamações",         sub: "Processo de reclamação",       href: "/company/complaints" },
    { title: "Documentos Legais",   sub: "Todas as políticas",           href: "/company/legal" }
  ]
};

// Markets hub
pt.markets.hub = {
  badge: "500+ Instrumentos",
  title: "Mercados Globais ao Seu Alcance",
  subtitle: "Acesse seis classes de ativos principais de uma única conta Olla Trade. Condições profissionais, spreads competitivos e todo o poder do MT4.",
  explore_prefix: "Explorar",
  cta_title: "Comece a Operar nos Mercados Globais",
  cta_subtitle: "Abra uma conta em minutos e acesse todos os 500+ instrumentos de uma plataforma.",
  markets: [
    { label: "Forex",        sub: "70+ pares de moedas",         pip: "A partir de 0,0 pips",    leverage: "Até 1:500" },
    { label: "Metais",       sub: "Metais preciosos",             pip: "A partir de 25 pts",      leverage: "Até 1:200" },
    { label: "Índices",      sub: "Índices de bolsas globais",    pip: "A partir de 1 pt",        leverage: "Até 1:100" },
    { label: "Energias",     sub: "Commodities",                  pip: "A partir de 3 pts",       leverage: "Até 1:100" },
    { label: "Criptomoedas", sub: "Criptomoedas",                 pip: "A partir de 50 pts",      leverage: "Até 1:10"  },
    { label: "Ações",        sub: "1.000+ ações",                 pip: "Spread de mercado",       leverage: "Até 1:10"  }
  ]
};

// Trading hub
pt.trading_pages.hub = {
  badge: "Trading",
  title: "Trading com a Olla Trade",
  subtitle: "Condições profissionais de negociação, múltiplos tipos de conta e o poder do MetaTrader 4.",
  links: [
    { title: "Plataforma (MT4)",        sub: "MetaTrader 4 em todos os dispositivos", href: "/trading/platform" },
    { title: "Comparar Contas",         sub: "Standard, Pro e Elite",                href: "/trading/accounts" },
    { title: "Condições de Negociação", sub: "Spreads, alavancagem e margem",        href: "/trading/conditions" },
    { title: "Depósito",                sub: "Financie sua conta",                   href: "/trading/deposit" },
    { title: "Retirada",                sub: "Rápido e seguro",                      href: "/trading/withdrawal" },
    { title: "Métodos de Pagamento",    sub: "Cartões, cripto, transferência",       href: "/trading/payment-methods" },
    { title: "Vencimento e Feriados",   sub: "Calendário de negociação",             href: "/trading/expiration" },
    { title: "Informações de Execução", sub: "Política de execução de ordens",       href: "/execution-information" }
  ]
};

// Tools hub
pt.tools.hub = {
  badge: "Ferramentas Gratuitas",
  title: "Ferramentas de Trading Profissionais",
  subtitle: "Tudo que você precisa para pesquisar, planejar e executar — gratuito para todos os clientes Olla Trade.",
  live_data_label: "Dados do Mercado ao Vivo",
  spreads_label: "Spreads Indicativos",
  spreads_title: "Spreads Típicos por Instrumento",
  quick_links_label: "Links Rápidos",
  market_data_note: "Os dados de mercado são indicativos. Os preços podem variar por tipo de conta, liquidez e condições de mercado.",
  all_tools_label: "Todas as Ferramentas",
  all_tools_title: "Gratuito para Todos os Clientes",
  tools: [
    { title: "Calendário Econômico",  sub: "Acompanhe eventos que movem o mercado em tempo real.",          href: "/tools/economic-calendar" },
    { title: "Calculadora Forex",     sub: "Calcule valor de pip, requisitos de margem e P&L.",             href: "/tools/forex-calculator" },
    { title: "Alertas de Trading",    sub: "Configure alertas de preço personalizados nos instrumentos acompanhados.", href: "/tools/alerts" },
    { title: "Guia VPS",              sub: "Execute Expert Advisors 24/5 em um servidor virtual privado.",  href: "/tools/vps" },
    { title: "Glossário Forex",       sub: "Domine os principais termos de trading de A a Z.",              href: "/tools/glossary" },
    { title: "Centro de Educação",    sub: "Aprendizado estruturado do nível Básico ao Profissional.",      href: "/tools/education" },
    { title: "Artigos",               sub: "Análise de mercado e insights de trading mais recentes.",       href: "/tools/news" }
  ],
  quick_links: [
    { label: "Calculadora Forex",   href: "/tools/forex-calculator",  desc: "Calcule valor de pip e margem" },
    { label: "Calendário Econômico",href: "/tools/economic-calendar", desc: "Próximos eventos do mercado" },
    { label: "Alertas de Trading",  href: "/tools/alerts",            desc: "Configure notificações de preço no MT4" },
    { label: "Guia VPS",            href: "/tools/vps",               desc: "Execute EAs 24/5 sem interrupções" }
  ]
};

// Deposit page
pt.trading_pages.deposit = {
  badge: "Financie Sua Conta",
  title: "Depositar Fundos",
  subtitle: "Escolha entre uma ampla gama de métodos de pagamento para financiar sua conta Olla Trade de forma rápida e segura. Sem taxas da Olla Trade.",
  cta_login: "Entrar para Depositar",
  stat_min_label: "Depósito Mín.",
  stat_fee_label: "Nossas Taxas",
  stat_card_label: "Processamento de Cartão",
  stat_card_val: "Instantâneo",
  guarantees: [
    "Crédito instantâneo em depósitos por cartão e carteira eletrônica",
    "Processamento de transações seguro com criptografia SSL",
    "Sem taxas de depósito cobradas pela Olla Trade",
    "Todos os depósitos protegidos por segregação de fundos de clientes"
  ],
  methods_title: "Métodos de Depósito Disponíveis",
  col_processing: "Processamento",
  col_fee: "Taxa",
  col_min: "Depósito mín.",
  fee_val: "Sem taxa",
  time_instant: "Instantâneo",
  time_network: "Confirmações de rede",
  time_wire: "1–3 dias úteis",
  how_title: "Como Depositar",
  steps: [
    "Acesse seu portal de clientes Olla Trade.",
    "Navegue até a seção Depositar no painel da sua conta.",
    "Selecione o método de pagamento de sua preferência.",
    "Informe o valor do depósito e siga as instruções na tela.",
    "Sua conta será creditada assim que o pagamento for confirmado."
  ],
  disclaimer: "Os tempos de processamento podem variar. Taxas de terceiros de provedores de pagamento podem ser aplicadas e estão fora do nosso controle. A Olla Trade não cobra suas próprias taxas sobre depósitos.",
  cta_title: "Pronto para Financiar Sua Conta?",
  cta_login2: "Entrar para Depositar",
  cta_open: "Abrir Nova Conta"
};

// Withdrawal page
pt.trading_pages.withdrawal = {
  badge: "Retirar Fundos",
  title: "Retiradas",
  subtitle: "Retire seus lucros de trading de forma rápida e segura. Processamos solicitações de retirada prontamente sem taxas ocultas.",
  cta_btn: "Solicitar Retirada",
  stat_proc_label: "Processamento",
  stat_fee_label: "Nossas Taxas",
  stat_ssl_label: "Criptografado",
  how_title: "Como Retirar",
  steps: [
    "Acesse seu portal de clientes Olla Trade.",
    "Navegue até a seção Retirada no painel da sua conta.",
    "Selecione o método de retirada de sua preferência.",
    "Informe o valor da retirada e envie sua solicitação.",
    "O processamento geralmente leva 24 a 48 horas úteis após a aprovação."
  ],
  policy_title: "Política de Retirada",
  policy_items: [
    ["Sem taxas de retirada",  "A Olla Trade não cobra taxas em solicitações de retirada."],
    ["Mesma regra de método",  "As retiradas são processadas para o mesmo método usado no depósito, sempre que possível."],
    ["KYC obrigatório",        "A verificação da conta (KYC) deve ser concluída antes do processamento de retiradas."],
    ["Tempo de processamento", "As retiradas são processadas em 24 a 48 horas úteis após a aprovação."],
    ["Termos completos",       "Por favor, consulte nossa página de Condições de Retirada para detalhes completos da política."]
  ],
  trust: [
    "Fundos de clientes segregados",
    "Retiradas criptografadas com SSL",
    "Processamento rápido de 24 a 48h",
    "Sem taxas da Olla Trade"
  ],
  wallet_label: "Portal do Cliente",
  wallet_title: "Olla Wallet",
  wallet_desc: "A Olla Wallet permite que você transfira fundos entre sua carteira e suas contas de trading instantaneamente, dando flexibilidade para gerenciar seu capital de acordo com suas necessidades de trading. Os fundos na Carteira não estão sujeitos a riscos de mercado, por isso é uma ótima forma de gerenciar risco e exposição.",
  wallet_bullets: [
    "Transferências instantâneas entre carteira e contas de trading",
    "Adicione fundos usando cripto, cartões ou transferência bancária",
    "Retire para o método de pagamento preferido",
    "Histórico completo de transações e rastreamento de saldo"
  ],
  wallet_cta_primary: "Acessar Olla Wallet",
  wallet_cta_secondary: "Como funciona a Olla Wallet",
  cta_title: "Acesse Seus Fundos a Qualquer Momento",
  cta_primary: "Solicitar Retirada",
  cta_secondary: "Ver Condições de Retirada"
};

// Payment methods page
pt.trading_pages.payment_methods = {
  badge: "Depósitos e Retiradas",
  title: "Métodos de Pagamento",
  subtitle: "Uma ampla gama de opções de pagamento rápidas e seguras — todas sem taxas cobradas pela Olla Trade.",
  stat_methods_label: "Métodos",
  stat_fee_label: "Nossas Taxas",
  stat_instant_label: "Cartão e E-Wallet",
  stat_instant_val: "Instantâneo",
  col_deposit: "Depósito",
  col_withdrawal: "Retirada",
  col_fee: "Taxa",
  fee_val: "Sem taxa",
  time_instant: "Instantâneo",
  time_network: "Confirmações de rede",
  time_wire_dep: "1–3 dias úteis",
  time_wire_wd: "3–5 dias úteis",
  time_card_wd: "3–5 dias úteis",
  time_ewallet_wd: "24 horas",
  categories: [
    { cat: "Cartões de Crédito e Débito", desc: "Depósitos instantâneos com todos os principais cartões de crédito e débito. Processamento seguro com verificação 3D." },
    { cat: "E-Wallets",                   desc: "Depósitos instantâneos e saques rápidos através de carteiras eletrônicas populares." },
    { cat: "Criptomoeda",                 desc: "Financie sua conta com as principais criptomoedas. Confirmação de rede necessária." },
    { cat: "Transferência Bancária",      desc: "Transferência bancária tradicional para depósitos maiores. Processado em 1 a 3 dias úteis." }
  ],
  disclaimer: "Atenção: Os tempos de processamento mostrados são estimativas e podem variar. Provedores de pagamento de terceiros podem cobrar suas próprias taxas, que estão fora do controle da Olla Trade. A Olla Trade não cobra taxas sobre depósitos ou retiradas. Os tempos de processamento de criptomoedas dependem do congestionamento da rede e das confirmações necessárias.",
  cta_title: "Financie Sua Conta Hoje",
  cta_primary: "Depositar Fundos",
  cta_secondary: "Abrir Conta"
};

// Expiration page
pt.trading_pages.expiration = {
  badge: "Calendário de Negociação",
  title: "Vencimento e Feriados de Mercado",
  subtitle: "Mantenha-se informado sobre horários de trading, datas de vencimento de contratos e fechamentos de mercado para planejar suas negociações adequadamente.",
  sections: [
    { title: "Horário do Mercado Forex", rows: [
      ["Segunda-feira",     "00:00 – Sexta 23:59 (horário do servidor)"],
      ["Semana de Negociação","5 dias por semana, 24 horas por dia"],
      ["Abertura do Mercado","Domingo 22:00 horário do servidor"],
      ["Fechamento do Mercado","Sexta 22:00 horário do servidor"]
    ]},
    { title: "Metais (Ouro e Prata)", rows: [
      ["Horário de Negociação","Segunda–Sexta (24 horas)"],
      ["Exceções",             "Liquidez reduzida durante a sessão asiática"],
      ["Feriados dos EUA",     "Os spreads podem se ampliar"]
    ]},
    { title: "Índices", rows: [
      ["US30 / SPX500",          "Segunda–Sexta, horários de sessão"],
      ["DAX40",                  "Segunda–Sexta, sessão europeia"],
      ["Fechamentos por Feriados","Varia por bolsa"]
    ]},
    { title: "Cripto", rows: [
      ["Disponibilidade", "24/7 (sujeito à liquidez)"],
      ["Fins de Semana",  "Disponível, mas com menor liquidez"],
      ["Nota",            "Os spreads podem ser maiores nos fins de semana"]
    ]}
  ],
  important_label: "Importante:",
  important: "Os horários de negociação são indicativos e podem estar sujeitos a mudanças durante feriados ou períodos de baixa liquidez. Verifique as especificações dos instrumentos na sua plataforma MT4 para o cronograma mais atualizado. Os spreads podem se ampliar nas aberturas e fechamentos do mercado e em torno de grandes eventos econômicos."
};

// Cookies page
pt.legal.cookies = {
  badge: "Privacidade",
  title: "Política de Cookies",
  subtitle: "Como a Olla Trade usa cookies e como você pode gerenciar suas preferências.",
  what_title: "O que são Cookies?",
  what_body: "Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente e para fornecer informações aos proprietários dos sites. A Olla Trade usa cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar o conteúdo.",
  types: [
    { name: "Cookies Essenciais",  desc: "Necessários para que o site funcione corretamente. Estes não podem ser desativados. Eles habilitam funções essenciais como segurança, acesso à conta e envio de formulários." },
    { name: "Cookies de Análise",  desc: "Ajudam-nos a entender como os visitantes usam nosso site coletando dados de uso anônimos. Isso nos permite melhorar a experiência do usuário." },
    { name: "Cookies Funcionais",  desc: "Lembram suas preferências, como configurações de idioma, e fornecem funcionalidade aprimorada." },
    { name: "Cookies de Marketing",desc: "Usados para rastrear visitantes em sites e exibir anúncios relevantes. Estes são opcionais e podem ser desativados." }
  ],
  managing_title: "Gerenciando Cookies",
  managing_body: "Você pode controlar e gerenciar cookies através das configurações do seu navegador. A maioria dos navegadores permite recusar cookies ou excluir os existentes. Note que desativar cookies pode afetar a funcionalidade do nosso site. Para mais informações, visite a documentação de ajuda do seu navegador."
};

// Complaint management page
pt.legal.complaint_management = {
  badge: "Jurídico",
  title: "Gestão de Reclamações",
  subtitle: "Nossos procedimentos formais de tratamento de reclamações e processo de resolução de disputas de clientes.",
  sections: [
    { title: "Escopo",                          body: "Esta Política de Gestão de Reclamações se aplica a todos os clientes da Olla Trade Ltd. Estabelece os procedimentos para envio, reconhecimento, investigação e resolução de reclamações formais." },
    { title: "Como Enviar uma Reclamação",      body: "As reclamações podem ser enviadas por e-mail para: complaints@ollatrade.com. Por favor, inclua: seu nome completo, número de conta, data do problema, descrição detalhada da reclamação e cópias de qualquer documentação de suporte relevante." },
    { title: "Reconhecimento",                  body: "Confirmaremos o recebimento da sua reclamação dentro de 2 dias úteis. O reconhecimento incluirá um número de referência e o nome da pessoa que trata a sua reclamação." },
    { title: "Investigação",                    body: "Investigaremos sua reclamação de forma minuciosa e imparcial. Pretendemos fornecer uma resposta completa dentro de 10 dias úteis. Para reclamações complexas que exigem investigação adicional, podemos precisar de até 30 dias úteis e manteremos você informado sobre o andamento." },
    { title: "Resolução",                       body: "Comunicaremos nossas conclusões e resolução proposta por escrito. Nossa resposta explicará nossa decisão e o raciocínio por trás dela. Se a sua reclamação for procedente, informaremos sobre a solução adequada." },
    { title: "Escalada",                        body: "Se você não estiver satisfeito com nossa resposta final, pode escalar o assunto para a autoridade regulatória competente ou buscar aconselhamento jurídico independente. O endereço registrado da empresa para fins regulatórios é: Grace Complex, The Valley, AI 2640, Anguilla." },
    { title: "Manutenção de Registros",         body: "Todos os registros de reclamações são mantidos por no mínimo 5 anos. Utilizamos dados de reclamações para identificar padrões e melhorar nossos serviços." },
    { title: "Contato",                         body: "Departamento de Reclamações: complaints@ollatrade.com | Telefone: +44 7418 641736 | Endereço Registrado: Grace Complex, The Valley, AI 2640, Anguilla" }
  ]
};

// Education page
pt.tools.education = {
  badge: "Aprenda a Negociar",
  title: "Educação em Trading",
  subtitle: "Aprendizado estruturado do iniciante ao profissional. Desenvolva seu conhecimento em trading no seu próprio ritmo.",
  levels: [
    { badge: "Nível 1", title: "Básico", topics: [
      "O que é Trading Forex?","Como Funcionam os Pares de Moedas","Entendendo Pips e Lotes",
      "Tipos de Ordens Básicos — Compra, Venda, Stop, Limite","O que é Alavancagem e Margem?",
      "Lendo Gráficos de Preços Básicos","Introdução à Gestão de Risco","Prática em Conta Demo"
    ]},
    { badge: "Nível 2", title: "Avançado", topics: [
      "Fundamentos de Análise Técnica","Níveis de Suporte e Resistência","Linhas de Tendência e Canais",
      "Médias Móveis — SMA, EMA","RSI, MACD, Bandas de Bollinger","Fundamentos de Análise Fundamental",
      "Negociação em Eventos de Notícias Econômicas","Dimensionamento de Posição e Gestão de Dinheiro"
    ]},
    { badge: "Nível 3", title: "Profissional", topics: [
      "Padrões de Gráfico Avançados","Teoria das Ondas de Elliott","Análise Multitemporal",
      "Construindo um Plano de Trading","Trading Algorítmico com EAs","Backtesting de Estratégias no MT4",
      "Diversificação de Portfólio","Gestão de Risco Avançada"
    ]}
  ],
  disclaimer: "Todo o conteúdo educacional é apenas para fins informativos e não constitui conselho de investimento.",
  glossary_link: "Navegar pelo Glossário Forex →",
  cta_title: "Coloque Seu Conhecimento em Prática",
  cta_subtitle: "Abra uma conta demo e pratique suas estratégias com fundos virtuais antes de operar ao vivo.",
  cta_primary: "Abrir Conta",
  cta_secondary: "Ver Glossário Forex"
};

// Glossary page
pt.tools.glossary = {
  badge: "Educação",
  title: "Glossário Forex",
  subtitle: "Domine a linguagem do trading. Nosso glossário abrangente cobre todos os termos principais de A a Z.",
  terms: [
    { term: "Preço de Venda (Ask)",  def: "O menor preço que um vendedor está disposto a aceitar por um par de moedas. Também chamado de preço de oferta." },
    { term: "Preço de Compra (Bid)", def: "O maior preço que um comprador está disposto a pagar por um par de moedas." },
    { term: "CFD",                   def: "Contrato por Diferença — um derivativo financeiro que permite especular sobre movimentos de preços sem possuir o ativo subjacente." },
    { term: "Expert Advisor (EA)",   def: "Um programa de trading automatizado que roda no MetaTrader 4 e pode executar negociações com base em regras predefinidas sem intervenção manual." },
    { term: "Alavancagem",           def: "Um mecanismo que permite aos traders controlar posições maiores com uma quantia menor de capital. A alavancagem amplifica tanto os lucros quanto as perdas." },
    { term: "Lote",                  def: "A unidade padrão de medida para uma transação Forex. Um lote padrão equivale a 100.000 unidades da moeda base." },
    { term: "Margem",                def: "O montante de fundos necessário em sua conta para abrir e manter uma posição alavancada." },
    { term: "Pip",                   def: "A menor unidade padrão de movimento de preço em um par de moedas, tipicamente a quarta casa decimal (0,0001) para a maioria dos pares." },
    { term: "Spread",                def: "A diferença entre o preço de compra e o preço de venda. Representa o custo do trading e é medido em pips." },
    { term: "Stop Loss",             def: "Uma instrução para fechar uma posição automaticamente quando ela atinge um nível de perda especificado, para limitar perdas adicionais." },
    { term: "Take Profit",           def: "Uma instrução para fechar uma posição automaticamente quando ela atinge um nível de lucro especificado." },
    { term: "Swap",                  def: "Um encargo de juros overnight (ou crédito) aplicado a posições mantidas abertas após o fechamento do mercado. Também chamado de rollover." }
  ]
};

// ─── Write files ────────────────────────────────────────────────────────────
fs.writeFileSync(EN, JSON.stringify(en, null, 2), "utf8");
fs.writeFileSync(PT, JSON.stringify(pt, null, 2), "utf8");
console.log("Done.");
