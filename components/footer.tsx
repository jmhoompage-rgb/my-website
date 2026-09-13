export default function Footer() {
  return (
    <footer className="bg-surface text-muted">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <p className="text-base font-semibold text-text">빵야PC방</p>

        <div className="mt-4 space-y-1 text-xs leading-relaxed md:text-sm">
          <p>대표: 000 · 상호: 빵야PC방</p>
          <p>사업자등록번호: 000-00-00000</p>
          <p>
            주소: 충남 천안시 서북구 두정동 000-00 · 전화: 041-000-0000
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted/70">
          <span>© {new Date().getFullYear()} 빵야PC방. All rights reserved.</span>
          <a href="#" className="underline decoration-line underline-offset-2 hover:text-text">
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
}
