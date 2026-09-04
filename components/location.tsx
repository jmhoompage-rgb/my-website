import FadeIn from "./fade-in";

export default function Location() {
  return (
    <section id="location" className="bg-canvas">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            VISIT US
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-ink md:text-[40px]">
            오시는 길
          </h2>

          <dl className="mt-8 space-y-4 text-sm md:text-base">
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-muted">주소</dt>
              <dd className="text-ink">서울특별시 강남구 테헤란로 000, 3층</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-muted">전화</dt>
              <dd className="text-ink">02-000-0000</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 text-muted">진료시간</dt>
              <dd className="text-ink">
                평일 10:00–19:00 · 토요일 10:00–15:00
                <br />
                일요일·공휴일 휴진 · 점심시간 13:00–14:00
              </dd>
            </div>
          </dl>

          <a
            href="tel:0200000000"
            className="mt-10 inline-flex items-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            전화 상담 문의
          </a>
          <p className="mt-4 text-xs text-muted">
            상담 후 시술 여부는 자유롭게 결정하실 수 있습니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-white text-sm text-muted ring-1 ring-black/5">
            지도 영역 (지도 API 연동 예정)
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
