"use client";

import { motion } from "framer-motion";

export default function EEHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Geopolitical &amp; Financial Thesis &mdash; Updated Edition 2025
        </motion.p>
        <motion.p
          className="font-mono text-[11px] tracking-[0.2em] text-muted mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          Sequel to <em>The Great Reset</em> (2020)
        </motion.p>

        <motion.h1
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-text leading-[1.08] tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Empire on the Edge
        </motion.h1>

        <motion.p
          className="font-lora text-xl md:text-2xl text-muted italic leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          How the world&rsquo;s last superpower is fighting five wars at once &mdash; and why it cannot win all of them
        </motion.p>

        <motion.p
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted/60 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          ~35 minute read
        </motion.p>
      </div>

      {/* Metadata strip */}
      <motion.div
        className="absolute bottom-20 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-mono text-[9px] tracking-[0.15em] uppercase text-muted/50">
          <span>Original Thesis: 2020</span>
          <span className="hidden sm:inline">|</span>
          <span>Updated: 2025</span>
          <span className="hidden sm:inline">|</span>
          <span>Conflicts: Ukraine &middot; Gaza &middot; Iran &middot; Taiwan</span>
          <span className="hidden sm:inline">|</span>
          <span>US Debt: $36+ Trillion</span>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
