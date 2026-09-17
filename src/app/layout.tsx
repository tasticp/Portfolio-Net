import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kelvin | Mechatronics Engineer & Student",
  //title: "Tasticp_ | Developer & Engineer & Desginer & Artist",
  description: "Aspire to be an Automation Engineer.",
  //description: "js a wanna be jack of all trades master of none hehe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
