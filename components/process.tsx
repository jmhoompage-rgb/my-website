import { Reveal } from "./reveal";

const STEPS = [
  {
    name: "Discover",
    desc: "Stakeholder interviews, competitive scan, and a clear brief before anything gets drawn.",
  },
  {
    name: "Define",
    desc: "Positioning, information architecture, and the constraints that will shape the work.",
  },
  {
    name: "Design",
    desc: "Concept direction, iteration, and review in weekly working sessions with your team.",
  },
  {
    name: "Build",
    desc: "Production-ready components, content, and a system your team can extend after launch.",
  },
  {
    name: "Launch",
    desc: "QA, performance passes, and a handoff doc your team will actually use.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-b border-line px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How a project runs.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {STEPS.map((step, i) => (
            <Reveal key={step.name} delay={i * 0.05}>
              <div className="flex flex-col gap-3 py-7 md:flex-row md:items-baseline md:gap-8">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium md:w-40 md:shrink-0">
                  {step.name}
                </h3>
                <p className="max-w-[60ch] text-sm text-muted md:text-base">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
