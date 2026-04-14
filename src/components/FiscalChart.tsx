"use client";

import { useState, useEffect, useRef } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Area,
  ComposedChart,
} from "recharts";
import { motion } from "framer-motion";

// Fiscal model: 30-year full reinvestment, then 20-year 50/50 split, then full collection
// Years 1-10: Only dividend tax (10yr lock = no CGT drawdowns). Death tax minimal.
// Years 1-30: 100% of tax revenue reinvested back into citizen fund
// Years 31-50: 50% reinvested, 50% collected by government (transition period)
// Years 51+: 100% collected by government (outside chart range)
const fiscal = (() => {
  const baseSpend = 27300;
  const wageInflation = 0.03;
  const contributionRate = 0.03;
  const accReturn = 0.08;
  const retReturn = 0.06;
  const drawdownRate = 0.05;
  const deathTaxRate = 0.30;
  const cohortSize = 650_000;
  const cgtRate = 0.18;
  const dividendYield = 0.035;
  const dividendTaxRate = 0.12;
  const equityPortion = 0.50;
  const lockYears = 10;
  const fullReinvestYears = 30;
  const transitionEndYear = 50;

  // Pre-compute individual portfolio accumulation (years 0-50)
  const acc: number[] = [0];
  const cb: number[] = [0]; // cost basis
  for (let y = 1; y <= 50; y++) {
    const spend = baseSpend * Math.pow(1 + wageInflation, y);
    const contribution = spend * contributionRate;
    acc[y] = (acc[y - 1] + contribution) * (1 + accReturn);
    cb[y] = cb[y - 1] + contribution;
  }

  const dMult = (1 - drawdownRate) * (1 + retReturn);

  const points: Array<{
    year: number;
    reinvested: number;    // Tax revenue reinvested into fund (years 1-30)
    collected: number;     // Tax revenue government keeps (years 31+)
    totalTaxGenerated: number; // Total tax generated (for reference)
  }> = [];

  let cumReinvested = 0;
  let cumCollected = 0;
  let yr50Tax = 0;
  let yr50DT = 0;
  let yr50CGT = 0;
  let yr50Div = 0;
  const yearlyReinvested: Array<{ year: number; amount: number }> = [];

  for (let Y = 0; Y <= 50; Y++) {
    let totalCap = 0;
    let yrDT = 0;
    let yrGains = 0;

    // Existing cohorts at scheme start (ages 18-68)
    for (let A = 18; A <= 68; A++) {
      const maxAcc = 68 - A;
      const lifespan = 81 - A;
      if (Y > lifespan) continue;

      if (Y <= maxAcc) {
        totalCap += cohortSize * acc[Y];
      } else {
        const retVal = acc[maxAcc];
        if (retVal > 0) {
          const retYears = Y - maxAcc;
          const cur = retVal * Math.pow(dMult, retYears);
          totalCap += cohortSize * cur;
          // CGT only after 10-year lock — drawdowns start at retirement (year maxAcc)
          // but the individual must have been in the scheme for 10+ years
          if (Y >= lockYears) {
            const gainRatio = Math.max(0, 1 - cb[maxAcc] / retVal);
            yrGains += cohortSize * cur * drawdownRate * gainRatio;
          }
        }
      }

      // Death tax — only when someone dies AND has had time to accumulate
      if (Y === lifespan && maxAcc >= 5 && acc[maxAcc] > 0) {
        const retYears = lifespan - maxAcc;
        yrDT += cohortSize * acc[maxAcc] * Math.pow(dMult, retYears) * deathTaxRate;
      }
    }

    // New cohorts entering after scheme starts
    for (let E = 1; E <= Y; E++) {
      const yrs = Y - E; // years this cohort has been in
      if (yrs <= 50) {
        totalCap += cohortSize * acc[yrs];
      } else if (yrs <= 63) {
        const cur = acc[50] * Math.pow(dMult, yrs - 50);
        totalCap += cohortSize * cur;
        // CGT only after 10-year lock
        if (yrs >= lockYears && yrs > 50) {
          const gainRatio = Math.max(0, 1 - cb[50] / acc[50]);
          yrGains += cohortSize * cur * drawdownRate * gainRatio;
        }
      }
    }

    const yrCGT = yrGains * cgtRate;
    // Dividend tax: only on portfolios that exist
    const yrDiv = totalCap * equityPortion * dividendYield * dividendTaxRate;
    const yrTotalTax = yrDT + yrCGT + yrDiv;

    // Years 1-30: 100% reinvested. Years 31-50: 50/50 split. Year 51+: 100% collected.
    let reinvested = 0;
    let collected = 0;
    if (Y <= fullReinvestYears) {
      reinvested = yrTotalTax;
    } else if (Y <= transitionEndYear) {
      reinvested = yrTotalTax * 0.5;
      collected = yrTotalTax * 0.5;
    } else {
      collected = yrTotalTax;
    }

    cumReinvested += reinvested;
    cumCollected += collected;

    // Track each year's reinvestment so we can compound it forward
    yearlyReinvested.push({ year: Y, amount: reinvested });

    if (Y % 2 === 0 || Y === 50 || Y === 30 || Y === 31) {
      points.push({
        year: Y,
        reinvested: Math.round(reinvested / 1e9),
        collected: Math.round(collected / 1e9),
        totalTaxGenerated: Math.round(yrTotalTax / 1e9),
      });
    }

    if (Y === 50) {
      yr50Tax = Math.round(yrTotalTax / 1e9);
      yr50DT = Math.round(yrDT / 1e9);
      yr50CGT = Math.round(yrCGT / 1e9);
      yr50Div = Math.round(yrDiv / 1e9);
    }
  }

  // Compute total equity growth of government's reinvestment from year 8 to year 50.
  // Each year's reinvested tax compounds at the 8% accumulation return until year 50.
  // This shows what the government's contribution has GROWN into by year 50.
  let equityGrowthYr50 = 0;
  let principalYr8to50 = 0;
  for (const { year, amount } of yearlyReinvested) {
    if (year >= 8 && year <= 50 && amount > 0) {
      principalYr8to50 += amount;
      const yearsToCompound = 50 - year;
      equityGrowthYr50 += amount * Math.pow(1 + accReturn, yearsToCompound);
    }
  }
  const equityGrowthOnly = equityGrowthYr50 - principalYr8to50;

  return {
    data: points,
    cumReinvested: Math.round(cumReinvested / 1e9),
    cumCollected: Math.round(cumCollected / 1e9),
    yr50Tax,
    yr50DT,
    yr50CGT,
    yr50Div,
    equityGrowthYr50: Math.round(equityGrowthYr50 / 1e9),
    principalYr8to50: Math.round(principalYr8to50 / 1e9),
    equityGrowthOnly: Math.round(equityGrowthOnly / 1e9),
  };
})();

const formatValue = (v: number) =>
  v >= 1000 ? `\u00a3${(v / 1000).toFixed(1)}T` : `\u00a3${v}B`;

export default function FiscalChart() {
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
        Government Reinvestment &amp; Collection
      </h3>
      <p className="font-sans text-[11px] text-muted text-center mb-6">
        Years 1&ndash;30: 100% reinvested &middot; Years 31&ndash;50: 50% reinvested, 50% collected &middot; Year 51+: 100% collected
      </p>
      <div className="h-[350px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={fiscal.data}
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
                formatter={(value: any, name: any) => [
                  formatValue(Number(value)),
                  name === "reinvested"
                    ? "Reinvested into Fund"
                    : name === "collected"
                    ? "Collected by Government"
                    : "Total Tax Generated",
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
              <Legend
                wrapperStyle={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 12,
                }}
                formatter={(value) =>
                  value === "reinvested"
                    ? "Reinvested into Fund"
                    : value === "collected"
                    ? "Collected by Government"
                    : "Total Tax Generated"
                }
              />
              <ReferenceLine
                x={10}
                stroke="#9CA3AF"
                strokeDasharray="4 4"
                label={{
                  value: "10yr lock ends",
                  position: "top",
                  style: {
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: 10,
                    fill: "#9CA3AF",
                  },
                }}
              />
              <ReferenceLine
                x={30}
                stroke="#E8A020"
                strokeDasharray="4 4"
                label={{
                  value: "50/50 transition begins",
                  position: "top",
                  style: {
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: 10,
                    fill: "#E8A020",
                  },
                }}
              />
              {/* Reinvested area (amber) — the government's effective contribution */}
              <Area
                type="monotone"
                dataKey="reinvested"
                stroke="#E8A020"
                fill="#E8A020"
                fillOpacity={0.15}
                strokeWidth={2}
                animationDuration={1500}
              />
              {/* Collected line (green) — what the government takes home */}
              <Line
                type="monotone"
                dataKey="collected"
                stroke="#15803D"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: "#15803D" }}
                animationDuration={1500}
                animationBegin={300}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Revenue breakdown at Year 50 */}
      <div className="mt-8 mb-4">
        <h4 className="font-sans text-[11px] font-semibold uppercase tracking-wider text-muted text-center mb-4">
          Total Tax Generated at Year 50 (50% Reinvested / 50% Collected)
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <motion.div
            className="text-center p-4 bg-pull-bg rounded-lg border border-green-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-sans text-xl md:text-2xl font-bold text-primary">
              {formatValue(fiscal.yr50DT)}
            </p>
            <p className="font-sans text-[10px] text-muted mt-1">
              Death Tax (30%)
            </p>
          </motion.div>
          <motion.div
            className="text-center p-4 bg-pull-bg rounded-lg border border-green-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-sans text-xl md:text-2xl font-bold text-primary">
              {formatValue(fiscal.yr50CGT)}
            </p>
            <p className="font-sans text-[10px] text-muted mt-1">
              Capital Gains Tax
            </p>
          </motion.div>
          <motion.div
            className="text-center p-4 bg-pull-bg rounded-lg border border-green-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-sans text-xl md:text-2xl font-bold text-primary">
              {formatValue(fiscal.yr50Div)}
            </p>
            <p className="font-sans text-[10px] text-muted mt-1">
              Dividend Tax
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key fiscal stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <motion.div
          className="text-center p-5 rounded-lg border"
          style={{ backgroundColor: "#FEF9EE", borderColor: "#F3D89A" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="font-sans text-2xl md:text-3xl font-bold" style={{ color: "#B8860B" }}>
            {formatValue(fiscal.cumReinvested)}
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Total reinvested by government (Yrs 1&ndash;50)
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
            {formatValue(fiscal.yr50Tax)}
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Annual tax revenue at Year 50
          </p>
        </motion.div>
        <motion.div
          className="text-center p-5 bg-green-50 rounded-lg border border-green-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-sans text-2xl md:text-3xl font-bold text-green-700">
            Year 31&ndash;50
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            50/50 split: gov collects half, reinvests half
          </p>
        </motion.div>
      </div>

      {/* Government equity growth showcase */}
      <motion.div
        className="mt-6 p-6 md:p-8 rounded-lg border-2 text-center"
        style={{ backgroundColor: "#F0FDF4", borderColor: "#15803D" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Total Government Equity Growth &mdash; Year 8 to Year 50
        </p>
        <p className="font-sans text-4xl md:text-5xl font-bold text-primary mb-3">
          {formatValue(fiscal.equityGrowthYr50)}
        </p>
        <p className="font-serif text-sm md:text-base text-text leading-relaxed max-w-2xl mx-auto">
          From year 8 &mdash; the first year meaningful tax revenue is
          generated &mdash; to year 50, the government&rsquo;s reinvested tax
          compounds into{" "}
          <strong>{formatValue(fiscal.equityGrowthYr50)}</strong> of citizen
          equity.{" "}
          <span className="text-muted">
            That&rsquo;s {formatValue(fiscal.principalYr8to50)} in reinvested
            tax plus {formatValue(fiscal.equityGrowthOnly)} in compound growth.
            Every pound of it distributed to citizens by contribution share.
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
