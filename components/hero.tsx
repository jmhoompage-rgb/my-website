"use client";

import { motion } from "motion/react";
import FadeIn from "./fade-in";

const HEADLINE = ["당신의 피부,", "본연의 맑음을", "되찾는 시간"];

export default function Hero() {
  return (
    <section className="bg-canvas pt-32 pb-24 md:pb-32">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium tracking-wide text-accent-deep"
          >
            CLAIRE DERMATOLOGY CLINIC
          </motion.p>

          <h1 className="max-w-2xl text-[40px] font-bold leading-[1.15] tracking-tighter text-ink md:text-[64px]">
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

        <FadeIn delay={0.2}>
          <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-white text-sm text-muted ring-1 ring-black/5">
            히어로 이미지/영상 자리 (16:9)
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
