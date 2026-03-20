"use client";

import { motion } from "framer-motion";

export default function ATHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-at-bg via-at-bg to-at-surface/50 pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Overline */}
        <motion.p
          className="font-mono text-[11px] tracking-[0.35em] uppercase text-at-muted mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Christian Samuel · 2026
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-at-text leading-[1.08] tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The Abundance Thesis
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-lora text-xl md:text-2xl text-at-muted italic leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Why AI Will Make the World Richer, Freer, and More Human Than We Feared
        </motion.p>

        {/* Intro quote */}
        <motion.p
          className="font-lora text-base md:text-lg text-at-muted/80 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          &ldquo;Eighteen months ago, I was more pessimistic about all of this.
          What changed my mind wasn&rsquo;t wishful thinking — it was following
          the second and third-order effects further than most people bother to.
          This is that argument.&rdquo;
        </motion.p>

        {/* Reading time */}
        <motion.p
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-at-muted/60 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          ~20 minute read
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A9E8D" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
