"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "진료안내", href: "#services" },
  { label: "진료철학", href: "#philosophy" },
  { label: "원장소개", href: "#doctor" },
  { label: "오시는길", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-surface/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-lg font-semibold tracking-tight text-ink">
          CLAIRE <span className="text-accent">피부과의원</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#location"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
        >
          상담 예약
        </a>
      </div>
    </header>
  );
}
