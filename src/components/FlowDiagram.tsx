"use client";

import { motion } from "framer-motion";

const categories = [
  { label: "Housing", etf: "Social Housing ETF", color: "#15803D" },
  { label: "Food", etf: "Food Supply ETF", color: "#16A34A" },
  { label: "Transport", etf: "Infrastructure ETF", color: "#22C55E" },
  { label: "Energy", etf: "Energy Grid ETF", color: "#4ADE80" },
  { label: "Consumer", etf: "Retail Economy ETF", color: "#86EFAC" },
];

export default function FlowDiagram() {
  return (
    <motion.div
      className="my-12 py-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Mobile: vertical layout */}
      <div className="md:hidden space-y-3">
        <motion.div
          className="text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Your Spending
        </motion.div>
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <div
              className="w-24 shrink-0 py-2 px-3 rounded text-white text-center font-sans text-xs font-semibold"
              style={{ backgroundColor: cat.color }}
            >
              {cat.label}
            </div>
            <svg width="30" height="12" className="shrink-0 text-rule">
              <line
                x1="0"
                y1="6"
                x2="22"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <polygon points="22,2 30,6 22,10" fill="currentColor" />
            </svg>
            <div className="py-2 px-3 bg-pull-bg rounded border border-rule font-sans text-xs text-text">
              {cat.etf}
            </div>
          </motion.div>
        ))}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <svg width="20" height="30" className="text-primary">
            <line
              x1="10"
              y1="0"
              x2="10"
              y2="22"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <polygon points="6,22 10,30 14,22" fill="currentColor" />
          </svg>
        </motion.div>
        <motion.div
          className="text-center py-4 px-6 bg-primary rounded-lg text-white font-sans text-sm font-bold uppercase tracking-wider"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          Your Ownership Stake
        </motion.div>
      </div>

      {/* Desktop: horizontal layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-6 lg:gap-8">
          {/* Spending column */}
          <div className="flex flex-col gap-2.5">
            <div className="text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Spending
            </div>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                className="py-2 px-4 rounded text-white text-center font-sans text-xs font-semibold whitespace-nowrap"
                style={{ backgroundColor: cat.color }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.2 }}
              >
                {cat.label}
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          >
            <svg width="60" height="20" className="text-primary">
              <line
                x1="0"
                y1="10"
                x2="48"
                y2="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <polygon points="48,4 60,10 48,16" fill="currentColor" />
            </svg>
          </motion.div>

          {/* ETF column */}
          <div className="flex flex-col gap-2.5">
            <div className="text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Sector ETFs
            </div>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.etf}
                className="py-2 px-4 bg-pull-bg rounded border border-rule font-sans text-xs text-text text-center whitespace-nowrap"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 1.0 }}
              >
                {cat.etf}
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          >
            <svg width="60" height="20" className="text-primary">
              <line
                x1="0"
                y1="10"
                x2="48"
                y2="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <polygon points="48,4 60,10 48,16" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Portfolio node */}
          <motion.div
            className="py-6 px-6 bg-primary rounded-lg text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.0, duration: 0.4 }}
          >
            <div className="font-sans text-xs font-bold uppercase tracking-wider mb-1">
              Your
            </div>
            <div className="font-sans text-sm font-bold uppercase tracking-wider">
              Ownership
            </div>
            <div className="font-sans text-xs font-bold uppercase tracking-wider">
              Stake
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
