"use client";

import { motion } from "motion/react";

const HEADLINE = ["나만의 룸에서,", "압도적으로 몰입한다"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const line = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center overflow-hidden bg-bg">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, rgba(255,90,31,0.16), transparent 60%), radial-gradient(50% 50% at 85% 75%, rgba(255,90,31,0.10), transparent 60%), #0A0A0F",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -inset-40 opacity-40"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, rgba(255,90,31,0.18), transparent 70%)",
        }}
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,245,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-medium tracking-wide text-accent"
        >
          천안 두정동 · 전국 최고 사양 룸 PC방
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-[40px] font-bold leading-[1.15] tracking-tighter text-text md:text-[76px]"
        >
          {HEADLINE.map((text) => (
            <motion.span key={text} variants={line} className="block">
              {text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
        >
          인피니티존부터 커플룸, 1인석까지. AMD 9800X3D · RTX 5090부터
          채운 완전히 독립된 빵야PC방만의 공간입니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10"
        >
          <a
            href="#zones"
            className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-deep md:text-base"
          >
            룸·존 둘러보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
