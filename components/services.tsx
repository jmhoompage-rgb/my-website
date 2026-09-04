import FadeIn from "./fade-in";

const SERVICES = [
  {
    title: "여드름·트러블 케어",
    desc: "염증성 트러블과 흉터를 진단 기반으로 단계별 관리합니다.",
  },
  {
    title: "색소·잡티 레이저",
    desc: "피부 타입에 맞춘 레이저 파장 선택으로 자극을 최소화합니다.",
  },
  {
    title: "리프팅",
    desc: "탄력 저하 부위를 정밀 진단 후 맞춤 강도로 관리합니다.",
  },
  {
    title: "보톡스·필러",
    desc: "해부학적 구조를 고려한 최소 용량 원칙으로 진행합니다.",
  },
  {
    title: "스킨부스터·물광",
    desc: "피부 결과 수분도를 함께 개선하는 재생 시술입니다.",
  },
  {
    title: "모공·피지 관리",
    desc: "유수분 밸런스를 분석해 근본 원인을 관리합니다.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            CARE PROGRAM
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-ink md:text-[44px]">
            진료 안내
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-black/5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={(i % 3) * 0.08}>
              <div className="h-full bg-white p-8 transition-colors hover:bg-accent-soft">
                <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
