import Image from "next/image";
import { Reveal } from "./reveal";

const STATS = [
  { value: "8", label: "Years running" },
  { value: "60+", label: "Projects shipped" },
  { value: "12", label: "People, one studio" },
];

export function About() {
  return (
    <section
      id="studio"
      className="grid grid-cols-1 gap-10 border-b border-line px-6 py-24 md:grid-cols-12 md:gap-6 md:px-12 md:py-32"
    >
      <Reveal className="relative order-2 aspect-[3/4] w-full overflow-hidden border border-line bg-surface md:order-1 md:col-span-5">
        <Image
          src="https://picsum.photos/seed/fathom-studio-team/900/1200"
          alt="Inside the Fathom studio, placeholder image"
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-accent/15 mix-blend-color" />
      </Reveal>

      <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            An independent studio, built to stay small.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[58ch] text-base text-muted md:text-lg">
            Fathom is a small team of designers and engineers working directly
            with founders and product leads. No account managers, no handoffs
            between departments. The people who scope the work are the people
            who build it.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl text-accent md:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
