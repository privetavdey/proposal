import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DevTools from "./dev-tools";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Studio × Northfield Co.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {process.env.NODE_ENV === "development" && <DevTools />}
      </body>
    </html>
  );
}
