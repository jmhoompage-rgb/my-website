import FadeIn from "./fade-in";

export default function Highlights() {
  return (
    <section id="highlights" className="bg-bg">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            WHY 빵야PC방
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-2xl text-[28px] font-semibold leading-snug tracking-tight text-text md:text-[44px]">
            트인 좌석이 아니라,
            <br />
            문이 있는 나만의 룸.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            같은 사양이라도 옆자리 시선과 소음까지 신경 써야 한다면 몰입은
            깨집니다. 빵야PC방은 좌석이 아닌 룸과 존을 팔고, 세계 최초로
            도입한 AMD 9800X3D · RTX 5090 인피니티존부터 1인석까지 다섯
            가지 공간으로 완전히 독립된 몰입을 제공합니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-3 bg-surface2 text-xs font-medium text-muted sm:text-sm">
              <div className="px-4 py-3">비교 항목</div>
              <div className="px-4 py-3">일반 PC방</div>
              <div className="px-4 py-3 text-accent">빵야PC방</div>
            </div>
            {[
              ["좌석 구조", "트인 오픈 좌석", "문이 있는 완전 독립 룸·존"],
              ["최고 사양", "동일 사양 일괄 적용", "AMD 9800X3D · RTX 5090 인피니티존"],
              ["모니터", "FHD 위주", "일반석도 삼성 QHD 와이드"],
              ["키보드", "일반 멤브레인/기계식", "전 좌석 래피드트리거 자석축"],
            ].map(([label, normal, us]) => (
              <div
                key={label}
                className="grid grid-cols-3 border-t border-line text-xs sm:text-sm"
              >
                <div className="px-4 py-3 text-text">{label}</div>
                <div className="px-4 py-3 text-muted">{normal}</div>
                <div className="px-4 py-3 text-text">{us}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
