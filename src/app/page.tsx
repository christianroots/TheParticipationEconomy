"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const theses = [
  {
    number: "I",
    title: "The Participation Economy",
    subtitle: "Turning Consumption Into Ownership",
    description:
      "You\u2019ll earn roughly \u00A32 million in your lifetime. You\u2019ll spend almost all of it. You\u2019ll own almost none of what it built. This paper argues that\u2019s a design flaw \u2014 and offers a mechanical fix.",
    href: "/participation-economy",
    year: "2025",
    readTime: "25 min",
  },
  {
    number: "II",
    title: "The Abundance Thesis",
    subtitle: "Why AI Will Make the World Richer, Not Poorer",
    description:
      "Everyone assumes AI destroys jobs. I did too. Then I followed the second and third-order effects and the picture flipped completely. Three propositions. One chain of causation. A conclusion that is, quietly, extraordinary.",
    href: "/abundance-thesis",
    year: "2026",
    readTime: "20 min",
  },
  {
    number: "III",
    title: "Empire on the Edge",
    subtitle: "How the World\u2019s Last Superpower Is Fighting Five Wars at Once",
    description:
      "In 2020 I wrote that the dollar would weaken, central banks would buy gold, and US debt would become unsustainable. All three happened. This is the sequel \u2014 and the picture has got worse.",
    href: "/empire-on-the-edge",
    year: "2025",
    readTime: "35 min",
  },
];

export default function Hub() {
  return (
    <main className="min-h-screen bg-white text-text font-playfair">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative">
        <motion.p
          className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Christian Samuel
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-playfair text-text text-center leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Order Effects
        </motion.h1>
        <motion.p
          className="font-lora text-lg md:text-xl text-muted mt-6 text-center max-w-lg italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Three theses. Uncomfortable conclusions. All the data.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
              <rect x="1" y="1" width="18" height="26" rx="9" />
              <motion.circle
                cx="10" cy="8" r="2" fill="#9CA3AF"
                animate={{ cy: [8, 18, 8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Theses */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <div className="space-y-6">
          {theses.map((thesis, i) => (
            <motion.div
              key={thesis.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + i * 0.2 }}
            >
              <Link href={thesis.href} className="group block">
                <div className="relative border border-rule rounded-lg transition-all duration-300 overflow-hidden hover:border-muted hover:shadow-sm p-8 md:p-10">
                  {/* Overline */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                      Thesis {thesis.number} · {thesis.year}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider text-muted">
                      {thesis.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-playfair text-text group-hover:text-primary transition-colors duration-300 mb-2">
                    {thesis.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="font-lora text-base md:text-lg text-muted italic mb-4">
                    {thesis.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-lora text-sm text-muted/70 leading-relaxed max-w-xl">
                    {thesis.description}
                  </p>

                  {/* Read arrow */}
                  <div className="mt-6 flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-primary group-hover:text-primary transition-colors duration-300">
                    <span>Read</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule py-12 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
          Order Effects · Christian Samuel · 2025–2026
        </p>
      </footer>
    </main>
  );
}
