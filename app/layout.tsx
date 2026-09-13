import type { Metadata } from "next";
import "./globals.css";
import KakaoButton from "@/components/kakao-button";

export const metadata: Metadata = {
  title: "빵야PC방 | 천안 두정동 전국 최고 사양 룸 PC방",
  description:
    "인피니티존(AMD 9800X3D · RTX 5090)부터 커플룸, 1인석까지. 완전히 독립된 룸과 존에서 즐기는 전국 최고 사양 PC방. 충남 천안시 두정동.",
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
        <KakaoButton />
      </body>
    </html>
  );
}
