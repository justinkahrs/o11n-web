import type React from "react";
import type { Metadata } from "next";
import Providers from "./Providers";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "o11n – Making your ideas actionable",
  description:
    "Talk to your codebase, create new features and edit existing ones without even opening a file—no login, no API keys, no subscription.",
  keywords: [
    "AI coding",
    "developer automation",
    "code generation",
    "codebase editing",
    "prompt engineering",
    "LLM workflows",
    "o11n",
    "AI developer tools",
  ],
  metadataBase: new URL("https://o11n.life"),
  openGraph: {
    title: "o11n – Making your ideas actionable",
    description:
      "Talk to your codebase, create new features and edit existing ones without even opening a file—no login, no API keys, no subscription.",
    url: "https://o11n.life",
    type: "website",
    siteName: "o11n",
    images: [
      {
        url: "/1200x675.png",
        width: 1200,
        height: 675,
        alt: "o11n",
      },
      {
        url: "/1200x1200.png",
        width: 1200,
        height: 1200,
        alt: "o11n",
      },
      {
        url: "/600x315.png",
        width: 600,
        height: 315,
        alt: "o11n",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@o11n_app",
    creator: "@o11n_app",
    title: "o11n – Making your ideas actionable",
    description:
      "Talk to your codebase, create new features and edit existing ones without even opening a file—no login, no API keys, no subscription.",
    images: ["/1200x675.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable}`} style={{ margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
