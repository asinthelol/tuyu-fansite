import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TUYU Fansite",
  description: "Fansite for the Japanese band TUYU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ...

  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/logos/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" as="image" href="/logos/hero-mobile.webp" />
      </head>
      <body
        className={`${inter.className}`}
        style={{ margin: 0, padding: 0, border: 0 }}
        sapling-installed="true"
      >
        {children}
      </body>
    </html>
  );
}
