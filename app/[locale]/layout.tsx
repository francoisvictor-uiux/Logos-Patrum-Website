import type { Metadata } from "next";
import { EB_Garamond, IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { locales, isLocale, dirOf, getDict, type Locale } from "@/lib/i18n";
import "../globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin", "greek", "greek-ext"],
  variable: "--font-ebgaramond",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const plexArabic = localFont({
  src: [
    { path: "../../public/fonts/IBMPlexSansArabic-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/IBMPlexSansArabic-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/IBMPlexSansArabic-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/IBMPlexSansArabic-Bold.ttf", weight: "700" },
  ],
  variable: "--font-plex-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDict(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: { en: "/en", ar: "/ar" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={dirOf(locale as Locale)}
      className={`${ebGaramond.variable} ${plexSans.variable} ${plexArabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
