export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <p className="text-base font-semibold text-white">
          클레어 피부과의원
        </p>

        <div className="mt-4 space-y-1 text-xs leading-relaxed md:text-sm">
          <p>대표자(원장): 김서연 · 진료과목: 피부과</p>
          <p>사업자등록번호: 000-00-00000</p>
          <p>주소: 서울특별시 강남구 테헤란로 000, 3층 · 전화: 02-000-0000</p>
        </div>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-white/50">
          모든 시술은 부작용이 발생할 수 있으며, 개인의 신체 상태와 진단
          결과에 따라 시술 방법과 결과가 달라질 수 있습니다. 시술 전 반드시
          의료진과 충분히 상담하시기 바랍니다.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} Claire Dermatology Clinic. All
            rights reserved.
          </span>
          <a href="#" className="underline decoration-white/20 underline-offset-2 hover:text-white/70">
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
}
