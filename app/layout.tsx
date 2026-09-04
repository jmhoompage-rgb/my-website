import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "클레어 피부과의원",
  description: "정직한 진료와 과장 없는 결과를 약속하는 클레어 피부과의원입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
