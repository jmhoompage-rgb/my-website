import FadeIn from "./fade-in";

const ROOMS = [
  {
    seats: 1,
    title: "1인실",
    tagline: "완전한 몰입, 나만의 룸",
    desc: "방해 없이 랭크에만 집중하고 싶을 때. 개인 조명과 헤드셋으로 완전히 독립된 공간입니다.",
    tags: ["솔로 랭크", "장시간 이용", "집중 몰입"],
  },
  {
    seats: 2,
    title: "2인실",
    tagline: "듀오, 조용히 둘만",
    desc: "친구·연인과 나란히. 소리 신경 쓰지 않고 편하게 대화하며 즐기는 프라이빗 공간.",
    tags: ["듀오 큐", "커플", "조용한 대화"],
  },
  {
    seats: 4,
    title: "4인실",
    tagline: "스쿼드, 딱 맞는 팀 단위",
    desc: "내전이나 팀플레이 게임에 최적화된 인원. 룸 안에서 바로 소통하며 합을 맞출 수 있습니다.",
    tags: ["내전", "팀 게임", "친구 모임"],
  },
  {
    seats: 6,
    title: "6인실",
    tagline: "파티룸, 함께라서 특별한",
    desc: "생일, 모임, 대회 관전까지. 넓은 룸에서 여섯 명이 함께 즐기는 이벤트 공간.",
    tags: ["모임", "생일파티", "단체 관전"],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            ROOM TYPE
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            인원에 맞춘 4가지 룸
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ROOMS.map((room, i) => (
            <FadeIn key={room.title} delay={(i % 2) * 0.1}>
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
                    {Array.from({ length: room.seats }).map((_, seatIndex) => (
                      <span
                        key={seatIndex}
                        className="h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(255,90,31,0.6)]"
                      />
                    ))}
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full bg-bg/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                    {room.seats}인 전용 룸
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-text">
                    {room.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {room.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {room.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {room.tags.map((tag) => (
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
