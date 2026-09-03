import { Reveal } from "./reveal";

export function Testimonial() {
  return (
    <section className="border-b border-line px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <blockquote className="text-2xl font-medium tracking-tight text-balance md:text-3xl">
            &ldquo;Fathom rebuilt our site in six weeks and it actually
            reflects how our product works now. Support tickets about
            navigation dropped by half.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-muted">
            Priya Nandakumar
            <span className="mx-2">-</span>
            VP of Marketing, Solace Health
          </p>
        </Reveal>
      </div>
    </section>
  );
}
