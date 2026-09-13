import FadeIn from "./fade-in";

const STEPS = [
  { step: "01", title: "이용 후 리뷰 작성", desc: "네이버 · 구글 · 인스타그램 중 원하는 곳에 솔직한 후기를 남깁니다." },
  { step: "02", title: "리뷰 캡처", desc: "작성한 리뷰 화면을 캡처합니다." },
  { step: "03", title: "카카오톡 인증", desc: "오픈채팅으로 캡처본을 보내고 방문 매장을 알려주세요." },
  { step: "04", title: "쿠폰 지급", desc: "확인 즉시 빵야 시그니처 음료 쿠폰을 드립니다." },
];

export default function ReviewEvent() {
  return (
    <section id="review-event" className="bg-bg">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            REVIEW EVENT
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            리뷰 남기고 음료 쿠폰 받아가세요
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            방문 후기를 남겨주시면 빵야PC방 시그니처 음료 쿠폰을 드립니다.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.1}>
              <div>
                <p className="text-sm font-semibold text-accent">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <a
            // TODO: 실제 카카오톡 오픈채팅 링크로 교체
            href="#"
            className="mt-12 inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-deep md:text-base"
          >
            카카오톡으로 리뷰 인증하기
          </a>
          <p className="mt-4 text-xs text-muted">
            쿠폰은 1인 1회 지급되며, 매장 사정에 따라 이벤트 내용이 변경될
            수 있습니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
