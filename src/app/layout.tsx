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

export const metadata = {
  title: "o11n – AI orchestration without the headache",
  description:
    "Talk to your codebase, automate sweeping changes, and integrate AI with real context—no login, no API keys, no BS.",
  keywords: [
    "AI coding",
    "developer automation",
    "codebase editing",
    "prompt engineering",
    "LLM workflows",
    "o11n",
    "AI developer tools",
  ],
  metadataBase: new URL("https://o11n.life"),
  openGraph: {
    title: "o11n – AI orchestration without the headache",
    description:
      "o11n lets you edit many files at once, document your work, and command the AI with context—like talking to a dev intern that listens.",
    url: "https://o11n.life",
    type: "website",
    siteName: "o11n",
    images: [
      {
        url: "/1200x675.png",
        width: 1200,
        height: 675,
        alt: "o11n – AI orchestration screenshot",
      },
      {
        url: "/1200x1200.png",
        width: 1200,
        height: 1200,
        alt: "o11n square preview",
      },
      {
        url: "/600x315.png",
        width: 600,
        height: 315,
        alt: "o11n small preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@o11napp",
    creator: "@o11napp",
    title: "o11n – AI orchestration without the headache",
    description:
      "Say what you want to do. Select the files. o11n gives the AI the context to actually do it.",
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
