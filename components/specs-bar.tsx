import FadeIn from "./fade-in";

const SPECS = [
  { value: "9800X3D · RTX 5090", label: "인피니티존 · BenQ 600Hz" },
  { value: "RTX 5080 · 360Hz", label: "슈프림존 · 팀룸 · 프라이빗석" },
  { value: "래피드트리거", label: "전 좌석 자석축 키보드" },
  { value: "QHD 와이드", label: "일반석 삼성 모니터" },
];

export default function SpecsBar() {
  return (
    <section className="border-y border-line bg-surface">
      <FadeIn className="mx-auto max-w-content px-6 py-10 md:px-10 md:py-14">
        <p className="mb-6 text-center text-xs font-medium tracking-wide text-accent sm:text-left">
          전국 최고 사양 · 세계 최초 9800X3D 도입
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map((spec) => (
            <div key={spec.label} className="text-center sm:text-left">
              <p className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
                {spec.value}
              </p>
              <p className="mt-1 text-sm text-muted">{spec.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
