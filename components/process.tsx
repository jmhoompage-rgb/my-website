import FadeIn from "./fade-in";

const STEPS = [
  { step: "01", title: "1:1 상담", desc: "고민과 목표를 충분히 듣습니다." },
  { step: "02", title: "정밀 진단", desc: "피부 상태를 근거로 확인합니다." },
  { step: "03", title: "맞춤 시술", desc: "필요한 만큼만 진행합니다." },
  { step: "04", title: "사후 케어", desc: "경과를 함께 관리합니다." },
];

export default function Process() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-ink md:text-[44px]">
            진료 프로세스
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.1}>
              <div>
                <p className="text-sm font-semibold text-accent">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">
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
