import FadeIn from "./fade-in";

const FEATURES = [
  {
    title: "전 좌석 라이젠9 · RTX 5080",
    desc: "룸 크기와 상관없이 모든 좌석에 동일한 최고 사양을 적용합니다.",
  },
  {
    title: "방음 도어형 룸",
    desc: "각 룸은 문으로 완전히 분리되어 옆 룸의 소음과 시선을 신경 쓸 필요가 없습니다.",
  },
  {
    title: "무드 조명",
    desc: "번쩍이는 RGB 대신 절제된 앰비언트 조명으로 눈이 편안한 몰입 환경을 만듭니다.",
  },
  {
    title: "프리미엄 게이밍 체어",
    desc: "장시간 플레이에도 자세가 무너지지 않는 인체공학 체어를 전 룸에 배치했습니다.",
  },
  {
    title: "개인 스낵바 벨서비스",
    desc: "룸을 나가지 않고 자리에서 바로 음료와 간식을 주문할 수 있습니다.",
  },
  {
    title: "룸별 개별 온도 조절",
    desc: "인원과 취향에 맞춰 룸마다 냉난방을 따로 설정할 수 있습니다.",
  },
];

export default function Facility() {
  return (
    <section id="facility" className="bg-bg">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            FACILITY
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            사양보다 먼저, 공간을 설계했습니다
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FadeIn key={feature.title} delay={(i % 3) * 0.08}>
              <div className="h-full bg-surface p-8 transition-colors hover:bg-surface2">
                <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
