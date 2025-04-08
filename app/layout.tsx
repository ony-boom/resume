import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ony",
  description: "Hello, I'm Ony. I'm a software engineer.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
