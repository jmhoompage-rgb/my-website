"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

const WORDS = ["Design", "with", "a", "point", "of", "view."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-[100dvh] grid-cols-1 items-start gap-10 border-b border-line px-6 pt-24 pb-16 md:grid-cols-12 md:items-center md:gap-6 md:px-12 md:pb-0"
    >
      <div className="md:col-span-7 lg:col-span-6">
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl">
          {WORDS.map((word, i) => (
            <span key={word + i}>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
              {i < WORDS.length - 1 ? " " : null}
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-[42ch] text-base text-muted md:text-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          Fathom partners with founders and product teams on brand identity,
          web design, and the interfaces in between.
        </motion.p>

        <motion.div
          className="mt-9"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform active:scale-[0.98] hover:brightness-110"
          >
            View selected work
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="relative mt-10 aspect-[16/10] w-full overflow-hidden md:mt-0 md:aspect-[4/5] md:col-span-5 md:col-start-8 lg:col-span-6 lg:col-start-7"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="https://picsum.photos/seed/fathom-studio-hero/1200/1500"
          alt="Studio workspace, placeholder image"
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-accent/25 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
