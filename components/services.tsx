import Image from "next/image";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    name: "Brand identity",
    desc: "Naming, mark, and voice built to hold up across every surface.",
  },
  {
    name: "Web design & development",
    desc: "Marketing sites and product front ends, shipped in Next.js.",
  },
  {
    name: "Product design",
    desc: "Flows, systems, and interface detail for growing platforms.",
  },
  {
    name: "Strategy & positioning",
    desc: "Clarifying who a brand is for, and why it matters.",
  },
  {
    name: "Motion & interaction",
    desc: "The small movements that make an interface feel considered.",
  },
];

export function Services() {
  return (
    <section className="border-b border-line px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-[20ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Five disciplines, one studio.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          <Reveal className="relative col-span-1 row-span-1 overflow-hidden border border-line bg-surface md:col-span-2 md:row-span-2">
            <Image
              src="https://picsum.photos/seed/fathom-brand-identity/900/900"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-xl font-medium">{SERVICES[0].name}</h3>
              <p className="mt-1 max-w-[32ch] text-sm text-muted">
                {SERVICES[0].desc}
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.05}
            className="relative col-span-1 overflow-hidden border border-line p-6"

          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 120% at 100% 0%, color-mix(in oklab, var(--color-accent) 35%, transparent), transparent 60%), var(--color-surface)",
              }}
            />
            <div className="relative">
              <h3 className="text-lg font-medium">{SERVICES[1].name}</h3>
              <p className="mt-1 text-sm text-muted">{SERVICES[1].desc}</p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="col-span-1 border border-line bg-surface p-6"
          >
            <h3 className="text-lg font-medium">{SERVICES[2].name}</h3>
            <p className="mt-1 text-sm text-muted">{SERVICES[2].desc}</p>
          </Reveal>

          <Reveal
            delay={0.15}
            className="col-span-1 border border-line bg-surface p-6"
          >
            <h3 className="text-lg font-medium">{SERVICES[3].name}</h3>
            <p className="mt-1 text-sm text-muted">{SERVICES[3].desc}</p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative col-span-1 overflow-hidden border border-line"
          >
            <Image
              src="https://picsum.photos/seed/fathom-motion/600/600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-lg font-medium">{SERVICES[4].name}</h3>
              <p className="mt-1 text-sm text-muted">{SERVICES[4].desc}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
