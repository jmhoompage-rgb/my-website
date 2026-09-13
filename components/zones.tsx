import FadeIn from "./fade-in";

const ZONES = [
  {
    seats: 1,
    title: "인피니티존",
    tagline: "전국 최초 · 궁극의 몰입 좌석",
    spec: "AMD 9800X3D · RTX 5090 · BenQ 600Hz",
    desc: "오디세이 G9 49인치 울트라와이드에 ASUS ROG 풀 장비를 세팅한 빵야PC방의 플래그십 좌석. 최고 사양을 온전히 혼자 누립니다.",
    tags: ["최상위 사양", "49인치 초몰입", "단 하나뿐인 좌석"],
    count: "한정 좌석",
  },
  {
    seats: 2,
    title: "슈프림존",
    tagline: "로망을 실현하는 하이엔드 2인",
    spec: "RTX 5080 · BenQ 360Hz",
    desc: "둘만의 프리미엄 공간에서 즐기는 최상급 듀오존. 고사양과 프라이버시를 동시에 원하는 분께 추천합니다.",
    tags: ["하이엔드 듀오", "데이트", "특별한 날"],
    count: "프라이빗 존",
  },
  {
    seats: 5,
    title: "팀룸",
    tagline: "ASUS ROG룸 · Glorious룸",
    spec: "RTX 5080 · BenQ 360Hz",
    desc: "5인 스쿼드를 위한 완전 독립 룸 3개를 테마별로 준비했습니다. 내전과 대회 연습에 최적화된 구성입니다.",
    tags: ["내전", "스쿼드 연습", "테마 룸"],
    count: "3개 룸 보유",
  },
  {
    seats: 2,
    title: "커플룸",
    tagline: "완전 분리된 단독 프라이빗",
    spec: "RTX 5080 · 래피드트리거 키보드",
    desc: "둘만 사용하는 완전 독립 룸. 옆 룸과 완벽히 분리되어 눈치 보지 않고 편하게 즐길 수 있습니다.",
    tags: ["커플", "친구 듀오", "완전 독립"],
    count: "35개 룸",
  },
  {
    seats: 1,
    title: "프라이빗 1인석",
    tagline: "완전 분리된 단독 부스",
    spec: "RTX 5080 · 래피드트리거 키보드",
    desc: "혼자만의 몰입이 필요한 순간을 위한 완전 분리형 단독석. 주변 시선 없이 랭크에만 집중하세요.",
    tags: ["솔로 랭크", "장시간 이용", "완전 몰입"],
    count: "35개 석",
  },
];

export default function Zones() {
  return (
    <section id="zones" className="bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            ROOM &amp; ZONE
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            취향과 인원에 맞춘 5가지 존
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            일반석에도 삼성 QHD 와이드 모니터를 적용했지만, 빵야PC방의 진짜
            차별점은 완전히 독립된 룸과 존입니다.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ZONES.map((zone, i) => (
            <FadeIn key={zone.title} delay={(i % 2) * 0.1}>
              <div className="group h-full overflow-hidden rounded-2xl border border-line bg-bg transition-colors hover:border-accent/40">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-surface2">
                  <div
                    className="absolute inset-0 opacity-70 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background:
                        "radial-gradient(70% 90% at 30% 20%, rgba(255,90,31,0.35), transparent 60%), radial-gradient(60% 80% at 80% 90%, rgba(255,90,31,0.18), transparent 60%)",
                    }}
                  />
                  <div className="relative z-10 flex gap-2">
                    {Array.from({ length: zone.seats }).map((_, seatIndex) => (
                      <span
                        key={seatIndex}
                        className="h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(255,90,31,0.6)]"
                      />
                    ))}
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full bg-bg/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                    {zone.count}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-text">
                    {zone.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {zone.tagline}
                  </p>
                  <p className="mt-3 text-xs font-medium tracking-wide text-muted">
                    {zone.spec}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {zone.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {zone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
