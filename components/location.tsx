import FadeIn from "./fade-in";

export default function Location() {
  return (
    <section id="location" className="bg-bg">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            VISIT US
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[40px]">
            오시는 길
          </h2>

          <dl className="mt-8 space-y-4 text-sm md:text-base">
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-muted">주소</dt>
              <dd className="text-text">충남 천안시 서북구 두정동 000-00</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-muted">전화</dt>
              <dd className="text-text">041-000-0000</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-muted">운영시간</dt>
              <dd className="text-text">
                연중무휴 24시간 운영
                <br />
                룸별 1시간 단위 예약
              </dd>
            </div>
          </dl>

          <a
            href="tel:0410000000"
            className="mt-10 inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            전화로 예약하기
          </a>
          <p className="mt-4 text-xs text-muted">
            두정동 상권 내 위치, 인근 무료 주차 가능
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-line bg-surface text-sm text-muted">
            지도 영역 (지도 API 연동 예정)
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
