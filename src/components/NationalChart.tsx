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

// National 50-year cohort model with lifecycle sell-down and death tax
// Per-person spend: ~£27.3k (UK household spend £900B / ~33M workers)
// 6% total rate (3% citizen + 3% gov match)
// Accumulation phase (age 18-68): 8% blended nominal return
// Drawdown phase (age 68-81): 5% annual withdrawal, 6% conservative return
// Death at 81: 30% to state (participation tax), 70% to heirs (exits system)
const computed = (() => {
  const baseSpend = 27300;
  const wageInflation = 0.03;
  const contributionRate = 0.06;
  const accReturn = 0.08;
  const retReturn = 0.06;
  const drawdownRate = 0.05;
  const deathTaxRate = 0.30;
  const cohortSize = 650_000;

  // Pre-compute individual portfolio at each accumulation year (0-50)
  const acc: number[] = [0];
  for (let y = 1; y <= 50; y++) {
    const spend = baseSpend * Math.pow(1 + wageInflation, y);
    const contribution = spend * contributionRate;
    acc[y] = (acc[y - 1] + contribution) * (1 + accReturn);
  }

  // Drawdown multiplier: (1 - 5% withdrawal) * (1 + 6% return) ≈ 1.007/yr
  const dMult = (1 - drawdownRate) * (1 + retReturn);

  const points: Array<{ year: number; capital: number }> = [];
  let cumDT = 0;
  let yr50Drawdown = 0;
  let yr50DT = 0;

  for (let Y = 0; Y <= 50; Y++) {
    let totalCap = 0;
    let yrDrawdown = 0;
    let yrDT = 0;

    // Inception cohorts (age A = 18..68 at scheme start)
    for (let A = 18; A <= 68; A++) {
      const maxAcc = 68 - A;
      const lifespan = 81 - A;
      if (Y > lifespan) continue;

      if (Y <= maxAcc) {
        totalCap += cohortSize * acc[Y];
      } else {
        const dYrs = Y - maxAcc;
        const retVal = acc[maxAcc];
        const cur = retVal * Math.pow(dMult, dYrs);
        totalCap += cohortSize * cur;
        yrDrawdown += cohortSize * cur * drawdownRate;
      }

      if (Y === lifespan) {
        const retVal = acc[maxAcc];
        const deathVal = retVal * Math.pow(dMult, 13);
        yrDT += cohortSize * deathVal * deathTaxRate;
      }
    }

    // New entrant cohorts (entered at scheme year E = 1..Y)
    for (let E = 1; E <= Y; E++) {
      const yrs = Y - E;
      if (yrs <= 50) {
        totalCap += cohortSize * acc[yrs];
      } else if (yrs <= 63) {
        const dYrs = yrs - 50;
        const retVal = acc[50];
        const cur = retVal * Math.pow(dMult, dYrs);
        totalCap += cohortSize * cur;
        yrDrawdown += cohortSize * cur * drawdownRate;
      }
    }

    cumDT += yrDT;

    if (Y % 2 === 0 || Y === 50) {
      points.push({
        year: Y,
        capital: Math.round(totalCap / 1e9),
      });
    }

    if (Y === 50) {
      yr50Drawdown = yrDrawdown;
      yr50DT = yrDT;
    }
  }

  return {
    data: points,
    finalCapital: points[points.length - 1].capital,
    cumulativeDT: Math.round(cumDT / 1e9),
    annualDrawdown: Math.round(yr50Drawdown / 1e9),
    annualDT: Math.round(yr50DT / 1e9),
  };
})();

const formatValue = (v: number) =>
  v >= 1000 ? `\u00a3${(v / 1000).toFixed(0)}T` : `\u00a3${v}B`;

const formatStat = (v: number) =>
  v >= 1000 ? `\u00a3${(v / 1000).toFixed(1)}T` : `\u00a3${v}B`;

export default function NationalChart() {
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
        Net Citizen Capital &mdash; One Generation (With Sell-Down &amp; Death Tax)
      </h3>
      <p className="font-sans text-[11px] text-muted text-center mb-6">
        Cohort model &middot; 5% retirement drawdown &middot; 30% death tax at 81 &middot; 8% accumulation / 6% retirement return
      </p>
      <div className="h-[350px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={computed.data}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="year"
                label={{
                  value: "Years since inception",
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
                  Number(value) >= 1000
                    ? `\u00a3${(Number(value) / 1000).toFixed(1)} Trillion`
                    : `\u00a3${value} Billion`,
                  "Net Citizen Capital",
                ]}
                labelFormatter={(label) => `Year ${label}`}
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
                dataKey="capital"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <motion.div
          className="text-center p-5 bg-pull-bg rounded-lg border border-green-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="font-sans text-2xl md:text-3xl font-bold text-primary">
            {formatStat(computed.annualDrawdown)}
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Annual retirement income (Year 50)
          </p>
        </motion.div>
        <motion.div
          className="text-center p-5 bg-pull-bg rounded-lg border border-green-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-sans text-2xl md:text-3xl font-bold text-primary">
            {formatStat(computed.annualDT)}
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Annual death tax to state (Year 50)
          </p>
        </motion.div>
        <motion.div
          className="text-center p-5 bg-pull-bg rounded-lg border border-green-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-sans text-2xl md:text-3xl font-bold text-primary">
            {formatStat(computed.cumulativeDT)}
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Cumulative death tax over 50 years
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
