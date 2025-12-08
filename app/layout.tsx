import { Josefin_Sans, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
