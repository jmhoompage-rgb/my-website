import FadeIn from "./fade-in";

const STEPS = [
  { step: "01", title: "존 선택", desc: "인피니티존부터 1인석까지, 취향에 맞는 존을 선택합니다." },
  { step: "02", title: "실시간 예약", desc: "원하는 시간대 잔여 좌석을 확인하고 예약합니다." },
  { step: "03", title: "방문 입장", desc: "예약 확인 후 배정된 룸·좌석으로 바로 입장합니다." },
  { step: "04", title: "몰입 플레이", desc: "전국 최고 사양으로 마음껏 즐깁니다." },
];

export default function HowTo() {
  return (
    <section id="how-to" className="bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            HOW TO
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            이용 방법
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.1}>
              <div>
                <p className="text-sm font-semibold text-accent">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
