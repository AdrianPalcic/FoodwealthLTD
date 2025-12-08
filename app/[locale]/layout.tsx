import { Josefin_Sans, Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "FoodWealth ltd ",
  description: "Enter a world of spices",
};
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  console.log(locale);

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={`${josefin.className} ${inter.className} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
