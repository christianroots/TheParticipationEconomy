"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenarios = [
  {
    id: "bear",
    label: "Bear Case",
    color: "border-red-400",
    bgHover: "hover:bg-red-50/50",
    summary: "Full military confrontation. US intervenes directly.",
    detail: "China moves on Taiwan militarily. The US intervenes with carrier strike groups and air power, triggering a direct peer-adversary conflict 7,000 miles from home. China\u2019s DF-21D carrier-killer missiles threaten US naval assets. Supply lines across the Pacific are contested. Semiconductor supply collapses globally. The economic fallout dwarfs 2008. Dollar credibility is tested in real time as the cost of war requires massive new borrowing. BRICS nations accelerate exit from dollar system.",
  },
  {
    id: "base",
    label: "Base Case",
    color: "border-amber-400",
    bgHover: "hover:bg-amber-50/50",
    summary: "Gradual squeeze. Blockade without invasion.",
    detail: "China imposes a \u201cquarantine\u201d around Taiwan \u2014 not a full invasion, but a naval and economic blockade that stops short of the threshold for US military response. Semiconductor shipments are disrupted. The US faces the impossible choice: escalate to kinetic conflict over a blockade, or accept the slow strangulation of Taiwan\u2019s independence. Meanwhile, China continues building domestic chip capacity. Every month of blockade shifts leverage further toward Beijing.",
  },
  {
    id: "bull",
    label: "Bull Case",
    color: "border-green-400",
    bgHover: "hover:bg-green-50/50",
    summary: "Deterrence holds. Economic competition continues.",
    detail: "US semiconductor export controls and AUKUS alliance strengthen deterrence sufficiently that China calculates the cost of action exceeds the benefit for the foreseeable future. Taiwan\u2019s semiconductor advantage slowly erodes as both the US (CHIPS Act) and China build domestic fab capacity. The flashpoint remains, but is managed through strategic ambiguity for another decade. The competition shifts to who builds AI infrastructure fastest \u2014 an arena where China\u2019s speed advantage in physical construction becomes decisive.",
  },
];

export default function TaiwanScenarioCards() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-14">
      {scenarios.map((s, i) => (
        <motion.div
          key={s.id}
          className={`border-l-4 ${s.color} border border-rule rounded-lg p-5 cursor-pointer transition-colors ${s.bgHover}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          onClick={() => setExpanded(expanded === s.id ? null : s.id)}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
            {s.label}
          </p>
          <p className="font-lora text-sm text-text font-semibold mb-3">
            {s.summary}
          </p>
          <AnimatePresence>
            {expanded === s.id && (
              <motion.p
                className="font-lora text-sm text-text/80 leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {s.detail}
              </motion.p>
            )}
          </AnimatePresence>
          <p className="font-mono text-[10px] text-muted mt-2">
            {expanded === s.id ? "Click to collapse" : "Click to expand"}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
