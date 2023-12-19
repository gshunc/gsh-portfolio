import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";

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
          <div className="flex flex-row border-t-2">
            <Header />
            <div className="flex min-h-screen w-5/6 flex-col pt-24">
              {children}
            </div>
            <Navigation></Navigation>
          </div>
        </main>
      </body>
    </html>
  );
}
