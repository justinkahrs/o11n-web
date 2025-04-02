import React from "react";
import type { Metadata } from "next";
import Providers from "./Providers";

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
      <body style={{ margin: 0 }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}