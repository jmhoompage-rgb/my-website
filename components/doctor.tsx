import FadeIn from "./fade-in";

export default function Doctor() {
  return (
    <section id="doctor" className="bg-white">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2">
        <FadeIn>
          <div className="aspect-[4/5] w-full max-w-md rounded-2xl bg-gradient-to-br from-accent-soft via-white to-accent/10" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            MEDICAL DIRECTOR
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-ink md:text-[40px]">
            김서연 원장
          </h2>
          <p className="mt-2 text-sm text-muted">피부과 전문의</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            &ldquo;시술의 목적은 자연스러움입니다. 환자분의 원래 인상을 해치지
            않는 선에서, 충분한 설명과 동의를 거쳐 진료합니다.&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
