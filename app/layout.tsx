import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fathom Studio — Brand, product, and web design",
  description:
    "Fathom is an independent design studio building brand identity, product design, and web experiences for teams who care about the details.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-ink text-text font-sans antialiased`}
      >
        <div className="grain" aria-hidden="true" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
