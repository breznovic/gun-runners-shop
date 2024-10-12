import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const font = VT323({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Gun Runners Shop App",
  description: "Fiction armor store from Fallout Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
