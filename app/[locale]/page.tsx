import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing }          from "../../i18n/routing";
import OllaHero            from "../components/home/OllaHero";
import OllaTicker          from "../components/home/OllaTicker";
import OllaWhyTrade        from "../components/home/OllaWhyTrade";
import OllaProducts        from "../components/home/OllaProducts";
import OllaPlatforms       from "../components/home/OllaPlatforms";
import OllaPayments        from "../components/home/OllaPayments";
import OllaEducation       from "../components/home/OllaEducation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("defaultTitle"), description: t("defaultDescription") };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <OllaHero />
      <OllaTicker />
      <OllaWhyTrade />
      <OllaProducts />
      <OllaPlatforms />
      <OllaPayments />
      <OllaEducation />
    </>
  );
}
