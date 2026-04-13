"use client";

import { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

// Comparison: Current system vs Participation Economy over 50 years
// Current system: person earns £2M lifetime, spends £1.85M, saves ~£150k
//   Typical pension pot at 68 (auto-enrolment 8%): ~£400k
//   Home equity (if they can buy): ~£300k — but many can't
//   Average UK wealth at retirement: ~£300-500k (heavily skewed by property)
//
// Participation Economy: same person, same spending (3% citizen only, no gov match)
//   Portfolio value at 68: ~£1.1M
//   Housing equity: ~£170k (additional to any home ownership)
//   Total: ~£1.27M additional
const data = [
  {
    category: "Pension",
    current: 400,
    participation: 400,
  },
  {
    category: "Property",
    current: 150,
    participation: 150,
  },
  {
    category: "Savings",
    current: 50,
    participation: 50,
  },
  {
    category: "Portfolio",
    current: 0,
    participation: 1170,
  },
  {
    category: "Housing",
    current: 0,
    participation: 170,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomXAxisTick = ({ x, y, payload }: any) => {
  const words = (payload.value as string).split(" ");
  return (
    <g transform={`translate(${x},${y})`}>
      {words.map((word: string, i: number) => (
        <text
          key={i}
          x={0}
          y={i * 14}
          dy={12}
          textAnchor="middle"
          fill="#6B7280"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize={11}
        >
          {word}
        </text>
      ))}
    </g>
  );
};

const totals = [
  { label: "Current System", value: 600, color: "#9CA3AF" },
  { label: "Participation Economy", value: 3474, color: "#15803D" },
];

const formatValue = (value: number) => {
  if (value >= 1000) return `\u00a3${(value / 1000).toFixed(1)}m`;
  return `\u00a3${value}k`;
};

export default function ComparisonChart() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="my-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Total comparison callouts */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        {totals.map((t, i) => (
          <motion.div
            key={t.label}
            className="text-center p-6 rounded-lg"
            style={{ backgroundColor: i === 0 ? "#F3F4F6" : "#ECFDF5" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div
              className="font-sans text-3xl md:text-4xl font-bold mb-1"
              style={{ color: t.color }}
            >
              {formatValue(t.value)}
            </div>
            <div className="font-sans text-xs uppercase tracking-wider text-muted">
              {t.label}
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-2 text-center">
        Citizen Wealth at Retirement — Current System vs Participation Economy
      </h3>
      <p className="font-sans text-[11px] text-muted text-center mb-6">
        Assumes median earner &middot; auto-enrolment pension &middot; average property ownership rates
      </p>
      <div className="h-[420px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis
                dataKey="category"
                tick={<CustomXAxisTick />}
                stroke="#E5E7EB"
                interval={0}
                height={60}
              />
              <YAxis
                tickFormatter={(v) =>
                  v >= 1000 ? `\u00a3${(v / 1000).toFixed(1)}m` : `\u00a3${v}k`
                }
                tick={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 12,
                  fill: "#6B7280",
                }}
                stroke="#E5E7EB"
              />
              <Tooltip
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formatter={(value: any, name: any) => [
                  Number(value) >= 1000
                    ? `\u00a3${(Number(value) / 1000).toFixed(1)}m`
                    : `\u00a3${value}k`,
                  name === "current" ? "Current System" : "Participation Economy",
                ]}
                contentStyle={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 13,
                  border: "1px solid #E5E7EB",
                  borderRadius: 6,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              />
              <Legend
                wrapperStyle={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 12,
                }}
                formatter={(value) =>
                  value === "current" ? "Current System" : "Participation Economy"
                }
              />
              <Bar
                dataKey="current"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {data.map((_, index) => (
                  <Cell key={`current-${index}`} fill="#9CA3AF" />
                ))}
              </Bar>
              <Bar
                dataKey="participation"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
                animationEasing="ease-out"
                animationBegin={300}
              >
                {data.map((_, index) => (
                  <Cell key={`part-${index}`} fill="#15803D" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </motion.div>
  );
}
