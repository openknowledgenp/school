import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Gloock } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
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
      className={`${plusJakartaSans.variable} ${inter.variable} ${gloock.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
