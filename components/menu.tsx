import FadeIn from "./fade-in";

const CATEGORIES = [
  { title: "수제 버거 & 플레이트", desc: "매장에서 직접 만드는 수제 버거와 든든한 한 끼 메뉴" },
  { title: "분식 & 야식", desc: "떡볶이, 라면, 튀김 등 게임 중 부담 없이 즐기는 메뉴" },
  { title: "디저트 & 스낵", desc: "가볍게 즐기는 디저트와 안주류" },
  { title: "빵야 시그니처 음료", desc: "빵야PC방에서만 만나는 시그니처 에이드 · 음료" },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent">
            MENU
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-text md:text-[44px]">
            300가지가 넘는 수제 메뉴
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            자리에서 벨 한 번이면 끝. 빵야PC방만의 시그니처 음료까지, 게임하는
            내내 배고플 틈이 없습니다.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-bg p-6">
                <h3 className="text-base font-semibold text-text">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
