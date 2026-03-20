"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Propositions", href: "#propositions" },
  { label: "Deflation", href: "#proposition-one" },
  { label: "Knowledge Work", href: "#proposition-two" },
  { label: "Blue Collar", href: "#proposition-three" },
  { label: "2030", href: "#the-world-2030" },
  { label: "Conclusion", href: "#conclusion" },
];

export default function ATNavigation() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
      setScrolled(scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <motion.div
          className="h-full bg-at-accent"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Nav */}
      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-at-bg/95 backdrop-blur-md border-b border-at-rule/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Home link */}
          <Link
            href="/"
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-at-muted hover:text-at-text transition-colors"
          >
            ← First Principles
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-at-accent font-semibold"
                    : "text-at-muted hover:text-at-text"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-at-muted hover:text-at-text p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-at-bg/98 backdrop-blur-md border-b border-at-rule/30 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-mono text-xs tracking-wider uppercase ${
                      activeSection === link.href.slice(1)
                        ? "text-at-accent"
                        : "text-at-muted hover:text-at-text"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
