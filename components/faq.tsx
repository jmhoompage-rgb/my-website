import FadeIn from "./fade-in";

const FAQS = [
  {
    q: "룸은 어떻게 예약하나요?",
    a: "홈페이지 상단의 실시간 예약 버튼 또는 전화로 원하는 룸 타입과 시간대를 예약하실 수 있습니다.",
  },
  {
    q: "인피니티존과 슈프림존은 어떻게 다른가요?",
    a: "인피니티존은 AMD 9800X3D · RTX 5090 · BenQ 600Hz에 오디세이 G9 49인치를 더한 1인 플래그십 좌석이고, 슈프림존은 RTX 5080 · BenQ 360Hz를 적용한 2인 하이엔드 프라이빗 공간입니다.",
  },
  {
    q: "일반석 사양은 어떻게 되나요?",
    a: "일반석에도 삼성 QHD 와이드 모니터와 래피드트리거 자석축 키보드를 동일하게 적용해 기본 좌석부터 차별화했습니다.",
  },
  {
    q: "인원이 룸 정원보다 적어도 이용할 수 있나요?",
    a: "가능합니다. 예를 들어 2명이 팀룸을 예약해 더 넓게 이용하실 수도 있습니다.",
  },
  {
    q: "메뉴는 어떤 게 있나요?",
    a: "수제 버거, 분식·야식, 디저트, 빵야 시그니처 음료까지 300가지가 넘는 메뉴를 벨서비스로 주문하실 수 있습니다.",
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
