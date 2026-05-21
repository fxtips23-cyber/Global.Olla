import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/ui/PageHero";
import CTASection from "../../../components/CTASection";
import {
  IconCreditCard,
  IconBankTransfer,
  IconBitcoin,
  IconCoin,
  IconWallet,
  IconDollar,
  IconEthereum,
  IconBolt,
  IconShield,
  IconCheck,
  IconLock,
} from "../../../components/ui/Icons";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Deposit",
  description: "Fund your Olla Trade account with multiple payment methods. Fast, secure deposits with no fees.",
};

interface Method {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  time: string;
  fee: string;
  min: string;
}

const methods: Method[] = [
  { Icon: IconCreditCard,   name: "Visa / Mastercard",    time: "Instant",              fee: "No fee", min: "$10"  },
  { Icon: IconBankTransfer, name: "Bank Wire Transfer",   time: "1–3 business days",    fee: "No fee", min: "$100" },
  { Icon: IconBitcoin,      name: "Bitcoin (BTC)",        time: "Network confirmations",fee: "No fee", min: "$50"  },
  { Icon: IconCoin,         name: "USDT (TRC20 / ERC20)", time: "Network confirmations",fee: "No fee", min: "$50"  },
  { Icon: IconWallet,       name: "Skrill",               time: "Instant",              fee: "No fee", min: "$10"  },
  { Icon: IconDollar,       name: "Neteller",             time: "Instant",              fee: "No fee", min: "$10"  },
  { Icon: IconCoin,         name: "Perfect Money",        time: "Instant",              fee: "No fee", min: "$10"  },
  { Icon: IconEthereum,     name: "Ethereum (ETH)",       time: "Network confirmations",fee: "No fee", min: "$50"  },
];

const guarantees = [
  { Icon: IconBolt,   label: "Instant crediting on card & e-wallet deposits" },
  { Icon: IconShield, label: "SSL-encrypted, secure transaction processing" },
  { Icon: IconCheck,  label: "No deposit fees charged by Olla Trade" },
  { Icon: IconLock,   label: "All deposits protected by client fund segregation" },
];

export default function DepositPage() {
  return (
    <>
      <PageHero
        badge="Fund Your Account"
        title="Deposit Funds"
        subtitle="Choose from a wide range of payment methods to fund your Olla Trade account quickly and securely. No fees from Olla Trade."
        breadcrumbs={[{ label: "Trading", href: "/trading" }, { label: "Deposit" }]}
        cta={{ label: "Log In to Deposit", href: "https://direct.ollatrade.com/auth/login" }}
        stats={[{ value: "$10", label: "Min. Deposit" }, { value: "0%", label: "Our Fees" }, { value: "Instant", label: "Card Processing" }]}
      />

      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Guarantee strip */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {guarantees.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5">
                <div className="w-8 h-8 rounded-lg border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[12px] text-gray-600 leading-snug">{label}</span>
              </div>
            ))}
          </div>

          {/* Payment method cards */}
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Available Deposit Methods</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {methods.map(({ Icon, name, time, fee, min }) => (
              <div
                key={name}
                className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#00CC44]/30 hover:shadow-md transition-all duration-200"
              >
                {/* Icon — same style as homepage feature cards */}
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center mb-4 group-hover:border-[#111827]/20 group-hover:text-[#111827] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-[13px] font-bold text-[#111827] mb-3">{name}</div>

                <div className="space-y-1.5 text-[12px] text-gray-500">
                  <div className="flex justify-between">
                    <span>Processing</span>
                    <span className="text-gray-700 font-medium">{time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee</span>
                    <span className="text-[#00CC44] font-semibold">{fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Min. deposit</span>
                    <span className="text-gray-700 font-medium">{min}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How to deposit */}
          <div className="bg-[#111827] rounded-2xl p-7 text-white">
            <h3 className="text-base font-bold mb-4">How to Deposit</h3>
            <ol className="space-y-3">
              {[
                "Log in to your Olla Trade client portal.",
                "Navigate to the Deposit section in your account dashboard.",
                "Select your preferred payment method.",
                "Enter the deposit amount and follow the on-screen instructions.",
                "Your account will be credited once the payment is confirmed.",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] text-white/60">
                  <span className="w-5 h-5 rounded-full bg-[#00CC44] text-black text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-[11px] text-white/30">
                Processing times may vary. Third-party fees from payment providers may apply and are outside our control. Olla Trade does not charge its own fees on deposits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Fund Your Account?"
        primaryLabel="Log In to Deposit"
        primaryHref="https://direct.ollatrade.com/auth/login"
        secondaryLabel="Open New Account"
        secondaryHref="https://direct.ollatrade.com/auth/register"
      />
    </>
  );
}
