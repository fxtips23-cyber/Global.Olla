import Link from "next/link";

const methods = [
  { label: "Visa / Mastercard", icon: "💳" },
  { label: "Bank Wire", icon: "🏦" },
  { label: "Skrill", icon: "💜" },
  { label: "Neteller", icon: "🔵" },
  { label: "Bitcoin", icon: "₿" },
  { label: "USDT", icon: "💚" },
  { label: "Ethereum", icon: "⟠" },
  { label: "Perfect Money", icon: "💰" },
];

export default function PaymentSection() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Quick Deposit & Withdrawal</h3>
            <p className="text-sm text-gray-500">Wide range of payment options with no fees</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {methods.map((m) => (
              <div key={m.label} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-[#29B5D4]/30 hover:bg-[#29B5D4]/5 transition-colors cursor-default">
                <span className="text-lg">{m.icon}</span>
                <span className="text-xs">{m.label}</span>
              </div>
            ))}
          </div>
          <Link href="/trading/payment-methods" className="flex-shrink-0 text-sm font-semibold text-[#29B5D4] hover:text-[#29B5D4] underline underline-offset-4 transition-colors whitespace-nowrap">
            All methods →
          </Link>
        </div>
      </div>
    </section>
  );
}
