import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import Header from "@bamboo/components/header";
import Footer from "@bamboo/components/footer";
import { NextUIContext } from "@bamboo/context/next-ui.context";
import { ProgressContext } from "@bamboo/context/progress.context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Bamboo Travel",
  description: "A test website for Bamboo Travel company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="shortcut icon" type="image/jpg" href="/bamboo-favicon.png" />
      </head>
      <body className={inter.className}>
        <NextUIContext>
          <ProgressContext>
            <Header />
            {children}
            <Footer />
          </ProgressContext>
        </NextUIContext>
      </body>
    </html>
  );
}
