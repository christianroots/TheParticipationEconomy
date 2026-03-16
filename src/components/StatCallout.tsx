"use client";

import { motion } from "framer-motion";

interface StatCalloutProps {
  number: string;
  description: string;
  delay?: number;
}

export default function StatCallout({
  number,
  description,
  delay = 0,
}: StatCalloutProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
        {number}
      </div>
      <div className="font-sans text-sm text-muted uppercase tracking-wide">
        {description}
      </div>
    </motion.div>
  );
}
