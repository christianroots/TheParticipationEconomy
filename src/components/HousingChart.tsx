"use client";

import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
} from "recharts";
import { motion } from "framer-motion";

// Housing-specific 50-year model (age 18 to 68)
// Rent: £1,200/month = £14,400/yr — grows at 3.5% rental inflation
// Housing contribution: 6% of rent (3% citizen + 3% gov match)
// Housing asset appreciation: 5% nominal (long-run UK housing)
// Citizen owns the equity AND benefits from capital appreciation
const data = (() => {
  const points = [];
  let equity = 0;
  const baseRent = 14400;
  const rentInflation = 0.035;
  const contributionRate = 0.06;
  const housingAppreciation = 0.05;

  for (let year = 0; year <= 50; year++) {
    if (year % 2 === 0 || year === 50) {
      points.push({
        year,
        value: Math.round(equity),
      });
    }
    const rent = baseRent * Math.pow(1 + rentInflation, year);
    const contribution = rent * contributionRate;
    equity = (equity * (1 + housingAppreciation)) + contribution;
  }
  return points;
})();

const formatValue = (value: number) => {
  if (value >= 1000) return `\u00a3${(value / 1000).toFixed(0)}k`;
  return `\u00a3${value}`;
};

export default function HousingChart() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lastValue = data[data.length - 1].value;

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
      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-2 text-center">
        Housing Equity Growth — Age 18 to 68
      </h3>
      <p className="font-sans text-[11px] text-muted text-center mb-6">
        5% housing appreciation &middot; 3.5% rental inflation &middot; Contributions + capital growth on equity owned
      </p>
      <div className="h-[350px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 40, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="year"
                label={{
                  value: "Years of participation",
                  position: "insideBottom",
                  offset: -5,
                  style: {
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: 12,
                    fill: "#6B7280",
                  },
                }}
                tick={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 12,
                  fill: "#6B7280",
                }}
                stroke="#E5E7EB"
              />
              <YAxis
                tickFormatter={formatValue}
                tick={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 12,
                  fill: "#6B7280",
                }}
                stroke="#E5E7EB"
              />
              <Tooltip
                formatter={(value: number) => [
                  `\u00a3${value.toLocaleString()}`,
                  "Housing Equity",
                ]}
                labelFormatter={(label) => `Year ${label} (age ${18 + Number(label)})`}
                contentStyle={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 13,
                  border: "1px solid #E5E7EB",
                  borderRadius: 6,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#16A34A"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: "#16A34A" }}
                animationDuration={2000}
                animationEasing="ease-out"
              />
              <ReferenceDot
                x={50}
                y={lastValue}
                r={0}
                stroke="none"
              >
                <Label
                  value={`\u00a3${(lastValue / 1000).toFixed(0)}k equity + \u00a310.8k/yr dividends`}
                  position="insideBottomLeft"
                  offset={10}
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: 11,
                    fill: "#16A34A",
                    fontWeight: 600,
                  }}
                />
              </ReferenceDot>
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </motion.div>
  );
}
