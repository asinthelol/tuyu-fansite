import React from "react";
import "./styles/layout.module.scss";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TUYU Fansite',
  description: 'Fansite for the Japanese band TUYU.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // ...

  return (
    <html lang="en-US">
      <body className={`${inter.className}`} style={{ margin: 0, padding: 0, border: 0, }}>
        {children}
      </body>
    </html>
  );
}
