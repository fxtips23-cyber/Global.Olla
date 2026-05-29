"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TRUST = [
  { label: "UAE SCA Regulated", icon: "🛡️" },
  { label: "500+ Instruments",  icon: "📊" },
  { label: "Spreads from 0.0 pips", icon: "⚡" },
  { label: "Accounts from $10",     icon: "💰" },
];

const STATS = [
  { value: "500+",     label: "Instruments" },
  { value: "1:500",    label: "Max Leverage" },
  { value: "0.0 pips", label: "Spreads From" },
  { value: "$10",      label: "Min. Deposit" },
];

export default function HeroSection() {
  return (
    <section className="hero-bg pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="badge mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                UAE SCA Regulated Broker
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.07, ease }}
              className="font-extrabold leading-[1.06] mb-5"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)", letterSpacing: "-0.028em", color: "#07111F" }}
            >
              Trading{" "}
              <span className="text-gradient">Redefined.</span>
              <br />
              <span style={{ color: "#374151" }}>Where Strategy</span>
              <br />
              <span style={{ color: "#374151" }}>Meets Technology.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease }}
              className="text-[16px] sm:text-[17px] leading-relaxed mb-8 max-w-[480px]"
              style={{ color: "#6B7280" }}
            >
              Access Forex, Metals, Indices, Crypto, Futures and Energies with seamless
              trading, real-time insights, and lightning-fast execution — from $10.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.20, ease }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="https://portal.ollatrade.com/auth/register"
                className="btn-primary btn-lg"
              >
                Create an Account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="https://portal.ollatrade.com/auth/login" className="btn-secondary btn-lg">
                Login
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease }}
              className="flex flex-wrap gap-2.5"
            >
              {TRUST.map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium"
                  style={{ background: "#F6F8FB", border: "1px solid #E5E7EB", color: "#374151" }}
                >
                  <span>{icon}</span>
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Real hero image ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="hidden lg:block relative"
          >
            {/* Background glow */}
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 70% at 55% 50%, rgba(26,144,195,0.10) 0%, transparent 70%)" }}
            />

            <Image
              src="https://ollatrade.com/wp-content/uploads/2025/10/header-image-e1760537207119-1024x981.png"
              alt="Olla Trade Trading Platform"
              width={1024}
              height={981}
              className="relative w-full h-auto drop-shadow-2xl"
              priority
            />

            {/* Floating: Active traders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease }}
              className="absolute top-10 -left-6 rounded-2xl px-4 py-3 shadow-xl border"
              style={{ background: "#FFFFFF", borderColor: "#E5E7EB" }}
            >
              <div className="text-[22px] font-extrabold text-gray-900 leading-none">21K+</div>
              <div className="text-[11px] font-medium mt-0.5" style={{ color: "#6B7280" }}>Active Traders</div>
            </motion.div>

            {/* Floating: Live markets */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease }}
              className="absolute bottom-14 -right-5 rounded-2xl px-4 py-3 shadow-xl border"
              style={{ background: "#FFFFFF", borderColor: "#E5E7EB" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-gray-500">Live Markets</span>
              </div>
              <div className="text-[20px] font-extrabold text-green-600 leading-none">+0.31%</div>
              <div className="text-[10px] text-gray-400 mt-0.5">Gold / XAU</div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center py-5 px-3 rounded-2xl border transition-shadow hover:shadow-md"
              style={{ background: "#FFFFFF", borderColor: "#E5E7EB" }}
            >
              <span
                className="font-extrabold leading-none mb-1.5"
                style={{ fontSize: "clamp(20px, 3vw, 28px)", background: "linear-gradient(135deg, #1A90C3, #1E9FD8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {value}
              </span>
              <span className="text-[12px] font-medium" style={{ color: "#6B7280" }}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
