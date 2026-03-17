"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)",
              "linear-gradient(135deg, #ffffff 0%, #ecfdf5 50%, #f0fdf4 100%)",
              "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)",
              "linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-8 text-center">
        <motion.span
          className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          The Participation Economy
        </motion.span>

        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-text leading-[1.15] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Turning Consumption
          <br />
          Into Ownership
        </motion.h1>

        <motion.p
          className="font-serif text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          A framework for rebuilding capital ownership in modern market
          societies
        </motion.p>

        <motion.p
          className="font-serif text-sm text-muted italic mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          A concept by Christian Samuel
        </motion.p>

        <motion.p
          className="font-sans text-xs text-muted mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          ~25 minute read
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <a
            href="#introduction"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-sans text-sm font-semibold uppercase tracking-wider rounded hover:bg-green-800 transition-colors"
          >
            Read the Paper
          </a>
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-8 py-3.5 border border-rule text-muted font-sans text-sm font-semibold uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors no-print"
          >
            Save as PDF
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <motion.div
          className="w-5 h-8 border-2 border-rule rounded-full flex justify-center pt-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-1.5 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
