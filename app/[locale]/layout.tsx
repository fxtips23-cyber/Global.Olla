import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RiskDisclaimer from "../components/RiskDisclaimer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <RiskDisclaimer />
      <Header />
      <main className="w-full overflow-x-hidden">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
