import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "빵야PC방 | 천안 두정동 프리미엄 룸 PC방",
  description:
    "1인실부터 6인실까지, 완전히 독립된 룸에서 즐기는 프리미엄 PC방. 라이젠9 · 지포스 RTX 5080. 충남 천안시 두정동.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-bg font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}
