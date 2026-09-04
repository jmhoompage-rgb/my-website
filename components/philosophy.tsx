import FadeIn from "./fade-in";

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-canvas">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            OUR PHILOSOPHY
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-2xl text-[28px] font-semibold leading-snug tracking-tight text-ink md:text-[44px]">
            정직한 진료, 과장 없는 결과.
            <br />
            그것이 클레어가 지키는 기준입니다.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            모든 시술에는 개인차가 있습니다. 클레어는 불필요한 시술을 권하지 않고,
            충분한 진단 없이 결과를 단정하지 않습니다. 환자분께 필요한 정보를
            있는 그대로 전달하는 것에서 진료를 시작합니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
