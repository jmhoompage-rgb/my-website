"use client";

import { motion, useReducedMotion } from "motion/react";

const BLOBS = [
  {
    className: "-right-40 -top-32 h-[32rem] w-[32rem] bg-accent/25",
    drift: { x: [0, 30, -10, 0], y: [0, -20, 15, 0], scale: [1, 1.08, 0.97, 1] },
    duration: 26,
  },
  {
    className: "-left-48 top-1/3 h-[26rem] w-[26rem] bg-accent/15",
    drift: { x: [0, -20, 25, 0], y: [0, 25, -10, 0], scale: [1, 0.95, 1.05, 1] },
    duration: 32,
  },
  {
    className: "bottom-[-8rem] right-1/4 h-[22rem] w-[22rem] bg-accent-deep/10",
    drift: { x: [0, 15, -25, 0], y: [0, -15, 10, 0], scale: [1, 1.06, 0.98, 1] },
    duration: 22,
  },
];

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={reduceMotion ? undefined : blob.drift}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
