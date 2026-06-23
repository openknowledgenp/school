import type { Metadata } from "next";
import { Jost, Gloock } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OKN Course Hub | Digital, Data & AI Literacy for Nepal",
  description:
    "Open Knowledge Foundation Nepal builds practical skills to find, understand and use data through free courses, hands-on resources and community projects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${gloock.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
