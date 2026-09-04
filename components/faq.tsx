import FadeIn from "./fade-in";

const FAQS = [
  {
    q: "시술 전 상담은 꼭 받아야 하나요?",
    a: "네. 모든 시술은 1:1 상담과 피부 진단 이후에만 진행하며, 진단 없이 시술을 권하지 않습니다.",
  },
  {
    q: "시술에 부작용이 있을 수 있나요?",
    a: "모든 시술은 개인의 신체 상태와 피부 타입에 따라 부작용이 발생할 수 있습니다. 상담 시 발생 가능한 부작용과 회복 기간을 충분히 안내해 드립니다.",
  },
  {
    q: "상담 비용이 발생하나요?",
    a: "상담 비용은 진료 항목에 따라 다를 수 있습니다. 예약 시 문의해 주시면 정확히 안내해 드립니다.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "전화 또는 홈페이지의 상담 예약 버튼을 통해 원하시는 날짜와 시간으로 예약하실 수 있습니다.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            FAQ
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-ink md:text-[44px]">
            자주 묻는 질문
          </h2>
        </FadeIn>

        <div className="mt-12 divide-y divide-black/5 border-y border-black/5">
          {FAQS.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.05}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-ink md:text-lg">
                  {item.q}
                  <span className="ml-4 shrink-0 text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {item.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
