"use client";

import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: string;
  description: string;
}

interface StatCardGridProps {
  stats: Stat[];
}

export default function StatCardGrid({ stats }: StatCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="border border-rule rounded-lg p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
            {stat.label}
          </p>
          <p className="font-playfair text-3xl md:text-4xl text-primary mb-2">
            {stat.value}
          </p>
          <p className="font-lora text-sm text-muted leading-relaxed">
            {stat.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
