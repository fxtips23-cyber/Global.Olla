import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import CTASection from "../../components/CTASection";
import {
  IconCreditCard,
  IconBankTransfer,
  IconBitcoin,
  IconCoin,
  IconWallet,
  IconDollar,
  IconEthereum,
} from "../../components/ui/Icons";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Payment Methods",
  description: "View all deposit and withdrawal methods available at Olla Trade including cards, crypto, and wire transfers.",
};

interface PayItem {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  dep: string;
  wd: string;
}

interface Category {
  cat: string;
  desc: string;
  items: PayItem[];
}

const categories: Category[] = [
  {
    cat: "Credit & Debit Cards",
    desc: "Instant deposits with all major credit and debit cards. Secure 3D-verified processing.",
    items: [
      { Icon: IconCreditCard, name: "Visa",       dep: "Instant",  wd: "3–5 business days" },
      { Icon: IconCreditCard, name: "Mastercard", dep: "Instant",  wd: "3–5 business days" },
    ],
  },
  {
    cat: "E-Wallets",
    desc: "Instant deposits and fast withdrawals through popular electronic wallets.",
    items: [
      { Icon: IconWallet,  name: "Skrill",        dep: "Instant", wd: "24 hours" },
      { Icon: IconDollar,  name: "Neteller",      dep: "Instant", wd: "24 hours" },
      { Icon: IconCoin,    name: "Perfect Money", dep: "Instant", wd: "24 hours" },
    ],
  },
  {
    cat: "Cryptocurrency",
    desc: "Fund your account with major cryptocurrencies. Network confirmation required.",
    items: [
      { Icon: IconBitcoin,  name: "Bitcoin (BTC)",        dep: "Network confirmations", wd: "Network confirmations" },
      { Icon: IconCoin,     name: "USDT (TRC20 / ERC20)", dep: "Network confirmations", wd: "Network confirmations" },
      { Icon: IconEthereum, name: "Ethereum (ETH)",        dep: "Network confirmations", wd: "Network confirmations" },
    ],
  },
  {
    cat: "Bank Transfer",
    desc: "Traditional wire transfer for larger deposits. Processed within 1–3 business days.",
    items: [
      { Icon: IconBankTransfer, name: "Bank Wire Transfer", dep: "1–3 business days", wd: "3–5 business days" },
    ],
  },
];

export default function PaymentMethodsPage() {
  return (
    <>
      <PageHero
        badge="Deposits & Withdrawals"
        title="Payment Methods"
        subtitle="A wide range of fast and secure payment options — all with no fees charged by Olla Trade."
        breadcrumbs={[{ label: "Trading", href: "/trading" }, { label: "Payment Methods" }]}
        stats={[{ value: "8+", label: "Methods" }, { value: "0%", label: "Our Fees" }, { value: "Instant", label: "Card & E-Wallet" }]}
      />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category sections */}
          {categories.map((cat) => (
            <div key={cat.cat} className="mb-12">
              {/* Category header */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#111827]">{cat.cat}</h2>
                <p className="text-[13px] text-gray-500 mt-1">{cat.desc}</p>
              </div>

              {/* Method cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.items.map(({ Icon, name, dep, wd }) => (
                  <div
                    key={name}
                    className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#00CC44]/30 hover:shadow-md transition-all duration-200"
                  >
                    {/* Icon — consistent with homepage card style */}
                    <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-[13px] font-bold text-[#111827] mb-3">{name}</div>

                    <div className="space-y-1.5 text-[12px] text-gray-500">
                      <div className="flex justify-between py-1 border-b border-gray-50">
                        <span>Deposit</span>
                        <span className="text-gray-700 font-medium text-right max-w-[120px]">{dep}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-gray-50">
                        <span>Withdrawal</span>
                        <span className="text-gray-700 font-medium text-right max-w-[120px]">{wd}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Fee</span>
                        <span className="text-[#00CC44] font-semibold">No fee</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Processing note */}
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <p className="text-[12px] text-amber-800 leading-relaxed">
              <strong>Please note:</strong> Processing times shown are estimates and may vary. Third-party payment providers may charge their own fees which are outside Olla Trade&apos;s control. Olla Trade does not charge fees on deposits or withdrawals. Cryptocurrency processing times depend on network congestion and required confirmations.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Fund Your Account Today"
        primaryLabel="Deposit Funds"
        primaryHref="https://direct.ollatrade.com/auth/login"
        secondaryLabel="Open Account"
        secondaryHref="https://direct.ollatrade.com/auth/register"
      />
    </>
  );
}
