import Image from "next/image";
import { Reveal } from "./reveal";

const PROJECTS = [
  {
    name: "Meridian Bank",
    category: "Digital rebrand",
    year: "2025",
    seed: "fathom-meridian",
    ratio: "aspect-[4/3]",
  },
  {
    name: "Solace Health",
    category: "Product design",
    year: "2024",
    seed: "fathom-solace",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Nordbloom",
    category: "E-commerce",
    year: "2025",
    seed: "fathom-nordbloom",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Aperture Films",
    category: "Brand identity",
    year: "2023",
    seed: "fathom-aperture",
    ratio: "aspect-[4/3]",
  },
  {
    name: "Cascade Robotics",
    category: "Web platform",
    year: "2024",
    seed: "fathom-cascade",
    ratio: "aspect-[4/3]",
  },
  {
    name: "Wren & Co",
    category: "Packaging & web",
    year: "2023",
    seed: "fathom-wren",
    ratio: "aspect-[16/10]",
  },
];

export function Work() {
  return (
    <section id="work" className="border-b border-line px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Selected work
            </h2>
            <span className="hidden font-mono text-sm text-muted md:block">
              2023 – 2025
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.08}>
              <a href="#contact" className="group block">
                <div
                  className={`relative overflow-hidden border border-line bg-surface ${project.ratio}`}
                >
                  <Image
                    src={`https://picsum.photos/seed/${project.seed}/1000/800`}
                    alt={`${project.name} — placeholder project image`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-accent/15 mix-blend-color" />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <span className="font-mono text-xs text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{project.category}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
