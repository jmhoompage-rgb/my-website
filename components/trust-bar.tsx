import FadeIn from "./fade-in";

const STATS = [
  { value: "10년+", label: "임상 진료 경력" },
  { value: "6개", label: "전문 진료 분야" },
  { value: "1:1", label: "맞춤 상담 진행" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-black/5 bg-white">
      <FadeIn className="mx-auto max-w-content px-6 py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
