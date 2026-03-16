"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "For Citizens",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    description:
      "Passive wealth accumulation from normal life. Participation in economic growth. Long-term security that doesn\u2019t require starting a company or inheriting assets.",
  },
  {
    title: "For Markets",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    description:
      "Stable, long-term domestic capital. Deeper infrastructure investment. A citizen-owned foundation beneath volatile market cycles.",
  },
  {
    title: "For Government",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M3 10h18" />
        <path d="M5 6l7-3 7 3" />
        <path d="M4 10v11" />
        <path d="M20 10v11" />
        <path d="M8 14v3" />
        <path d="M12 14v3" />
        <path d="M16 14v3" />
      </svg>
    ),
    description:
      "No need for higher taxes. Stronger capital markets. Citizens with stakes behave differently \u2014 less dependency, more engagement.",
  },
  {
    title: "For Businesses",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    description:
      "Larger domestic capital pools. A strengthened startup ecosystem. Long-term investors with aligned incentives.",
  },
];

export default function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
      {benefits.map((benefit, i) => (
        <motion.div
          key={benefit.title}
          className="p-6 md:p-8 border border-rule rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="text-primary mb-4">{benefit.icon}</div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-text mb-3">
            {benefit.title}
          </h3>
          <p className="font-serif text-[16px] leading-[1.7] text-muted">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
