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
            깨집니다. 빵야PC방은 좌석이 아닌 룸을 팔고, 인원에 맞춘 4가지
            타입으로 혼자만의 랭크게임부터 여섯 명의 파티까지 완전히
            독립된 공간에서 즐길 수 있게 만들었습니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
