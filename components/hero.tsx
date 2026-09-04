"use client";

import { motion } from "motion/react";
import HeroVisual from "./hero-visual";

const HEADLINE = ["당신의 피부,", "본연의 맑음을", "되찾는 시간"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-accent-soft via-white to-canvas">
      <HeroVisual />

      <div className="relative mx-auto w-full max-w-content px-6 pt-24 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-medium tracking-wide text-accent-deep"
        >
          CLAIRE DERMATOLOGY CLINIC
        </motion.p>

        <h1 className="max-w-2xl text-[40px] font-bold leading-[1.15] tracking-tighter text-ink md:text-[72px]">
          {HEADLINE.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 + i * 0.12 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
        >
          정밀한 진단과 절제된 시술, 그리고 사후 케어까지.
          <br className="hidden md:block" />
          클레어는 꼭 필요한 만큼만 제안합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10"
        >
          <a
            href="#location"
            className="inline-flex items-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-deep md:text-base"
          >
            상담 예약하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
