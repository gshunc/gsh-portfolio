// Written by: George Harris. Chesterfield, Missouri, United States of America. 2023.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main>
          <div className="flex flex-col">
            <div className="flex flex-row bg-stone-900 h-screen">
              <Header />
              <div className="flex overflow-y-auto w-5/6 flex-col pt-24">
                {children}
              </div>
              <Navigation />
            </div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
