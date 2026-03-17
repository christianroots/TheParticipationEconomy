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
} from "recharts";
import { motion } from "framer-motion";

// 50-year model — one full working generation (age 18 to 68)
// Base spend: £46,000/yr — grows at 3% wage inflation
// Total contribution rate: 6% (3% citizen + 3% government match)
// Blended portfolio return: 8% nominal (equities ~10%, infra ~6%, PE ~12%, VC ~15%)
// All figures nominal (i.e. include inflation effects on wages, assets, and returns)
const data = (() => {
  const points = [];
  let portfolio = 0;
  const baseSpend = 46000;
  const contributionRate = 0.06;
  const wageInflation = 0.03;
  const nominalReturn = 0.08;

  for (let year = 0; year <= 50; year++) {
    if (year % 2 === 0 || year === 50) {
      points.push({
        year,
        value: Math.round(portfolio),
      });
    }
    const spend = baseSpend * Math.pow(1 + wageInflation, year);
    const contribution = spend * contributionRate;
    portfolio = (portfolio + contribution) * (1 + nominalReturn);
  }
  return points;
})();

const formatValue = (value: number) => {
  if (value >= 1000000) return `\u00a3${(value / 1000000).toFixed(1)}m`;
  if (value >= 1000) return `\u00a3${(value / 1000).toFixed(0)}k`;
  return `\u00a3${value}`;
};

export default function PortfolioChart() {
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
      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-2 text-center">
        Total Portfolio Growth — Age 18 to 68
      </h3>
      <p className="font-sans text-[11px] text-muted text-center mb-6">
        8% blended nominal return &middot; 3% wage inflation on contributions &middot; 3% citizen + 3% government match
      </p>
      <div className="h-[350px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
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
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formatter={(value: any) => [
                  Number(value) >= 1000000
                    ? `\u00a3${(Number(value) / 1000000).toFixed(2)}m`
                    : `\u00a3${Number(value).toLocaleString()}`,
                  "Portfolio Value",
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
                stroke="#15803D"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: "#15803D" }}
                animationDuration={2000}
                animationEasing="ease-out"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </motion.div>
  );
}
