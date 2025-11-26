import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./ui/fonts";

import Navbar from "@/components/header";

export const metadata: Metadata = {
  title: "Perpetual Asogwa",
  description:
    "Frontend web developer building responsive websites and web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
