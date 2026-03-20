"use client";

import { motion } from "framer-motion";

const propositions = [
  {
    number: "I",
    title: "The Great Deflation",
    description:
      "AI makes almost everything dramatically cheaper to produce.",
  },
  {
    number: "II",
    title: "The End of the Knowledge Worker Class",
    description:
      "White collar work atomises. Solo operators rise.",
  },
  {
    number: "III",
    title: "The Blue Collar Premium",
    description:
      "The most valuable workers in 2035 work with their hands.",
  },
];

export default function PropositionsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-16 md:my-24">
      {propositions.map((prop, i) => (
        <motion.div
          key={prop.number}
          className="border border-at-rule/40 rounded-lg p-6 md:p-8 bg-at-surface/30"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-at-accent mb-3 block">
            {prop.number}
          </span>
          <h3 className="font-playfair text-xl text-at-text mb-3 leading-tight">
            {prop.title}
          </h3>
          <p className="font-lora text-sm text-at-muted leading-relaxed">
            {prop.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
