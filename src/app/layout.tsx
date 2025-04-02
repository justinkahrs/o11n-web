import React from "react";
import type { Metadata } from "next";
import Providers from "./Providers";
import { JetBrains_Mono } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "o11n",
  description: "Orchestrate your code. Just vibe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable}`}
        style={{ margin: 0, background: "#162A2C" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
