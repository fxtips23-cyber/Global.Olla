import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ollatrade.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      /* Funding pages */
      { source: "/trading/deposit",           destination: "/funding-and-withdrawals", permanent: true },
      { source: "/trading/withdrawal",        destination: "/funding-and-withdrawals", permanent: true },
      { source: "/trading/payment-methods",   destination: "/funding-and-withdrawals", permanent: true },
      { source: "/trading/funding",           destination: "/funding-and-withdrawals", permanent: true },
      { source: "/deposit",                   destination: "/funding-and-withdrawals", permanent: true },
      { source: "/withdrawal",                destination: "/funding-and-withdrawals", permanent: true },

      /* Contact pages */
      { source: "/company/contact",           destination: "/contact-us",              permanent: true },
      { source: "/contact",                   destination: "/contact-us",              permanent: true },

      /* Execution — old URL redirects to new comprehensive page */
      { source: "/trading/execution",         destination: "/execution-information",   permanent: true },

      /* Tools pages removed from nav — pages still exist but redirect if someone lands via old link */
      { source: "/tools/glossary",            destination: "/tools",                   permanent: false },
      { source: "/tools/education",           destination: "/tools",                   permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
