"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-semibold tracking-[0.08em]">
          FATHOM
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-transform active:scale-[0.98] hover:brightness-110"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base text-muted hover:text-text"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-accent px-4 py-3 text-sm font-medium text-accent-ink"
              >
                Start a project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
