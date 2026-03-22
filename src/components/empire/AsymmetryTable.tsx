"use client";

import { motion } from "framer-motion";

const rows = [
  {
    dimension: "What to Lose",
    us: "Global dollar hegemony, NATO alliances, regional stability, oil supply, credibility with moderate Arab states, $36T fiscal position",
    iran: "An already-sanctioned economy. Pariah status already baked in. Has operated under maximum pressure for decades.",
  },
  {
    dimension: "Cost Per Day",
    us: "US carrier strike group deployment: ~$6.5M/day. Air campaigns: ~$100M/week minimum.",
    iran: "Houthi missile (Iranian-supplied): ~$10,000\u2013$80,000. Drone swarm: ~$50,000 total. Cost exchange ratio is catastrophic for the US.",
  },
  {
    dimension: "Proxy Depth",
    us: "Israel, Saudi Arabia (unreliable), UAE. Coalition fatigue already visible.",
    iran: "Hamas, Hezbollah, Houthis, Iraqi militias, Syrian forces. Decades-built, battle-hardened, distributed.",
  },
  {
    dimension: "Escalation Risk",
    us: "Cannot escalate to nuclear. Domestic political pressure to avoid body bags.",
    iran: "Near-nuclear capability. Existential framing enables maximum risk tolerance.",
  },
  {
    dimension: "Strategic Goal",
    us: "Regional stability + Israel security + oil routes + dollar credibility. Too many objectives.",
    iran: "Singular: survive, exhaust, delegitimise the US\u2013Israel axis. One clear mission.",
  },
  {
    dimension: "Economic Leverage",
    us: "Strait of Hormuz disruption would cause global energy crisis, crashing Western economies.",
    iran: "Controls the Strait of Hormuz. 20% of global oil supply. The ultimate blackmail chip.",
  },
];

export default function AsymmetryTable() {
  return (
    <motion.div
      className="my-10 md:my-14 overflow-x-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-left px-4 py-3 font-mono text-[10px] tracking-[0.15em] uppercase w-[140px]">Dimension</th>
            <th className="text-left px-4 py-3 font-mono text-[10px] tracking-[0.15em] uppercase">United States</th>
            <th className="text-left px-4 py-3 font-mono text-[10px] tracking-[0.15em] uppercase">Iran &amp; Proxies</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <motion.tr
              key={row.dimension}
              className="border-b border-rule"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <td className="px-4 py-4 font-mono text-[11px] tracking-wider uppercase text-primary align-top font-semibold">
                {row.dimension}
              </td>
              <td className="px-4 py-4 font-lora text-text/80 leading-relaxed align-top">
                {row.us}
              </td>
              <td className="px-4 py-4 font-lora text-text/80 leading-relaxed align-top">
                {row.iran}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
