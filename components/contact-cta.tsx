import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="border-b border-line px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-[46ch] text-base text-muted md:text-lg">
            We take on a small number of projects at a time. Tell us about
            yours and we will reply within two business days.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href="mailto:hello@fathom.studio"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-transform active:scale-[0.98] hover:brightness-110"
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:hello@fathom.studio"
              className="text-sm text-muted transition-colors hover:text-text"
            >
              hello@fathom.studio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
