import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import { font } from "./utils/font";

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
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
