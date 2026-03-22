"use client";

import { motion } from "framer-motion";

interface PartDividerProps {
  part: string;
  title: string;
  subtitle: string;
  id: string;
}

export default function PartDivider({ part, title, subtitle, id }: PartDividerProps) {
  return (
    <section id={id} className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 border-t-4 border-primary/20">
      <motion.p
        className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {part}
      </motion.p>
      <motion.h2
        className="font-playfair text-4xl md:text-5xl lg:text-6xl text-text text-center leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="font-lora text-base md:text-lg text-muted text-center max-w-xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
      <motion.hr
        className="border-t border-rule w-full max-w-md mt-12"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
    </section>
  );
}
