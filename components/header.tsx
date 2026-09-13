"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "룸·존", href: "#zones" },
  { label: "시설", href: "#facility" },
  { label: "메뉴", href: "#menu" },
  { label: "이용안내", href: "#how-to" },
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
        scrolled ? "bg-bg/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-lg font-bold tracking-tight text-text">
          빵야<span className="text-accent">PC방</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#location"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
        >
          실시간 예약
        </a>
      </div>
    </header>
  );
}
