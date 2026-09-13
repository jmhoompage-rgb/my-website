import FadeIn from "./fade-in";

const FAQS = [
  {
    q: "룸은 어떻게 예약하나요?",
    a: "홈페이지 상단의 실시간 예약 버튼 또는 전화로 원하는 룸 타입과 시간대를 예약하실 수 있습니다.",
  },
  {
    q: "전 좌석 사양이 동일한가요?",
    a: "네. 1인실부터 6인실까지 모든 룸에 라이젠9 CPU와 지포스 RTX 5080 그래픽카드를 동일하게 적용했습니다.",
  },
  {
    q: "인원이 룸 정원보다 적어도 이용할 수 있나요?",
    a: "가능합니다. 예를 들어 2명이 4인실을 예약해 더 넓게 이용하실 수도 있습니다.",
  },
  {
    q: "음식물 반입이 가능한가요?",
    a: "외부 음식 반입이 가능하며, 룸 내에서 바로 주문할 수 있는 스낵바 벨서비스도 운영합니다.",
  },
  {
    q: "주차는 어떻게 하나요?",
    a: "두정동 매장 인근 제휴 주차장을 무료로 이용하실 수 있습니다. 방문 시 안내해 드립니다.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            FAQ
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            자주 묻는 질문
          </h2>
        </FadeIn>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQS.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.05}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text md:text-lg">
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
