import FadeIn from "./fade-in";

const SPECS = [
  { value: "라이젠 9", label: "전 좌석 동일 사양 CPU" },
  { value: "RTX 5080", label: "전 좌석 동일 사양 GPU" },
  { value: "4종", label: "1 · 2 · 4 · 6인실" },
];

export default function SpecsBar() {
  return (
    <section className="border-y border-line bg-surface">
      <FadeIn className="mx-auto max-w-content px-6 py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {SPECS.map((spec) => (
            <div key={spec.label} className="text-center sm:text-left">
              <p className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
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
