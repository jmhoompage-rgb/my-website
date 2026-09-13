import FadeIn from "./fade-in";

const ZONES = [
  {
    seats: 1,
    zone: "A구역",
    title: "1인룸",
    tagline: "전국 최고 사양을 온전히 혼자",
    spec: "AMD 9800X3D · RTX 5090 · BenQ 600Hz",
    desc: "완전히 분리된 단독 룸에서 빵야PC방 최상위 사양을 독점합니다. 주변 시선 없이 랭크에만 집중하세요.",
    tags: ["최상위 사양", "솔로 랭크", "완전 몰입"],
    count: "35개 룸",
  },
  {
    seats: 2,
    zone: "B구역",
    title: "2인 커플룸",
    tagline: "둘만의 프라이빗 공간",
    spec: "RTX 5080 · BenQ 360Hz",
    desc: "친구, 연인과 나란히. 완전히 독립된 룸이라 옆자리 신경 없이 편하게 즐길 수 있습니다.",
    tags: ["커플", "듀오 큐", "완전 독립"],
    count: "35개 룸",
  },
  {
    seats: 4,
    zone: "C구역",
    title: "4인룸",
    tagline: "스쿼드, 딱 맞는 팀 단위",
    spec: "RTX 5080 · BenQ 360Hz",
    desc: "내전이나 팀 게임에 최적화된 인원 구성. 룸 안에서 바로 소통하며 합을 맞출 수 있습니다.",
    tags: ["내전", "팀 게임", "친구 모임"],
    count: "예약제 운영",
  },
  {
    seats: 6,
    zone: "D구역",
    title: "다인원 6인룸",
    tagline: "파티룸, 함께라서 특별한",
    spec: "RTX 5080 · BenQ 360Hz",
    desc: "생일, 모임, 대회 관전까지. 넓은 룸에서 여섯 명이 함께 즐기는 이벤트 공간입니다.",
    tags: ["모임", "생일파티", "단체 관전"],
    count: "예약제 운영",
  },
];

export default function Zones() {
  return (
    <section id="zones" className="bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            ROOM
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            인원에 맞춘 4가지 구역
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            일반석에도 삼성 QHD 와이드 모니터를 적용했지만, 빵야PC방의 진짜
            차별점은 완전히 독립된 A~D구역 룸입니다.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ZONES.map((zone, i) => (
            <FadeIn key={zone.zone} delay={(i % 2) * 0.1}>
              <div className="group h-full overflow-hidden rounded-2xl border border-line bg-bg transition-colors hover:border-accent/40">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-surface2">
                  {/* swap this gradient for an <img> once real room photos land in public/rooms/ */}
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
                  <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
                    {zone.zone}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-bg/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                    {zone.count}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-text">
                    {zone.zone} · {zone.title}
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
