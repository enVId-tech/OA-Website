import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/pages/globals.scss";
import React from "react";
import Footer from "@/app/_components/footer/footer.global.module.tsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
