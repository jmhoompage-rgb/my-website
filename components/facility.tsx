import FadeIn from "./fade-in";

const FEATURES = [
  {
    title: "래피드트리거 자석축 키보드",
    desc: "전 좌석에 초미세 반응속도를 구현하는 자석축 키보드를 적용했습니다.",
  },
  {
    title: "일반석도 삼성 QHD 와이드",
    desc: "오픈 좌석까지 고해상도 와이드 모니터로 끌어올려 기본기부터 다릅니다.",
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
    desc: "장시간 플레이에도 자세가 무너지지 않는 인체공학 체어를 전 좌석에 배치했습니다.",
  },
  {
    title: "즉석 주문 벨서비스",
    desc: "자리를 비우지 않고 벨 한 번으로 음식과 음료를 바로 주문할 수 있습니다.",
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
