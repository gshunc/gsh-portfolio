// Written by: George Harris. Chesterfield, Missouri, United States of America. 2023.

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const geist = GeistSans;

export const metadata: Metadata = {
  title: "George Harris",
  description: "My personal portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <main className="">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row h-svh">
              <div className="flex shrink h-auto lg:ml-12 overflow-y-auto lg:w-5/6 flex-col">
                {children}
              </div>
              <Navigation />
            </div>
            <Footer />
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
