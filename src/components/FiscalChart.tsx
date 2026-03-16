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
  Legend,
  ReferenceLine,
} from "recharts";
import { motion } from "framer-motion";

// Fiscal model: Government match cost vs tax revenue streams
// Revenue: death tax (20%), CGT on drawdowns (18% blended), dividend tax (12% blended)
// Cost: 3% government match on all active workers' spending
const fiscal = (() => {
  const baseSpend = 27300;
  const wageInflation = 0.03;
  const contributionRate = 0.06;
  const govMatchRate = 0.03;
  const accReturn = 0.08;
  const retReturn = 0.06;
  const drawdownRate = 0.05;
  const deathTaxRate = 0.30;
  const cohortSize = 650_000;
  const cgtRate = 0.18;
  const dividendYield = 0.035;
  const dividendTaxRate = 0.12;
  const equityPortion = 0.50;

  const acc: number[] = [0];
  const cb: number[] = [0];
  for (let y = 1; y <= 50; y++) {
    const spend = baseSpend * Math.pow(1 + wageInflation, y);
    const contribution = spend * contributionRate;
    acc[y] = (acc[y - 1] + contribution) * (1 + accReturn);
    cb[y] = cb[y - 1] + contribution;
  }

  const dMult = (1 - drawdownRate) * (1 + retReturn);

  const points: Array<{
    year: number;
    matchCost: number;
    revenue: number;
    deathTax: number;
    cgt: number;
    divTax: number;
  }> = [];

  let yr50Match = 0;
  let yr50Rev = 0;
  let yr50DT = 0;
  let yr50CGT = 0;
  let yr50Div = 0;
  let breakeven = 0;

  for (let Y = 0; Y <= 50; Y++) {
    let totalCap = 0;
    let yrDT = 0;
    let yrMatch = 0;
    let yrGains = 0;

    for (let A = 18; A <= 68; A++) {
      const maxAcc = 68 - A;
      const lifespan = 81 - A;
      if (Y > lifespan) continue;

      if (Y <= maxAcc) {
        totalCap += cohortSize * acc[Y];
        yrMatch +=
          cohortSize *
          baseSpend *
          Math.pow(1 + wageInflation, Y) *
          govMatchRate;
      } else {
        const retVal = acc[maxAcc];
        if (retVal > 0) {
          const cur = retVal * Math.pow(dMult, Y - maxAcc);
          totalCap += cohortSize * cur;
          const gainRatio = Math.max(0, 1 - cb[maxAcc] / retVal);
          yrGains += cohortSize * cur * drawdownRate * gainRatio;
        }
      }

      if (Y === lifespan && acc[maxAcc] > 0) {
        yrDT += cohortSize * acc[maxAcc] * Math.pow(dMult, 13) * deathTaxRate;
      }
    }

    for (let E = 1; E <= Y; E++) {
      const yrs = Y - E;
      if (yrs <= 50) {
        totalCap += cohortSize * acc[yrs];
        yrMatch +=
          cohortSize *
          baseSpend *
          Math.pow(1 + wageInflation, yrs) *
          govMatchRate;
      } else if (yrs <= 63) {
        const cur = acc[50] * Math.pow(dMult, yrs - 50);
        totalCap += cohortSize * cur;
        const gainRatio = Math.max(0, 1 - cb[50] / acc[50]);
        yrGains += cohortSize * cur * drawdownRate * gainRatio;
      }
    }

    const yrCGT = yrGains * cgtRate;
    const yrDiv = totalCap * equityPortion * dividendYield * dividendTaxRate;
    const yrRev = yrDT + yrCGT + yrDiv;

    if (breakeven === 0 && yrRev >= yrMatch && Y > 0) {
      breakeven = Y;
    }

    if (Y % 2 === 0 || Y === 50) {
      points.push({
        year: Y,
        matchCost: Math.round(yrMatch / 1e9),
        revenue: Math.round(yrRev / 1e9),
        deathTax: Math.round(yrDT / 1e9),
        cgt: Math.round(yrCGT / 1e9),
        divTax: Math.round(yrDiv / 1e9),
      });
    }

    if (Y === 50) {
      yr50Match = Math.round(yrMatch / 1e9);
      yr50Rev = Math.round(yrRev / 1e9);
      yr50DT = Math.round(yrDT / 1e9);
      yr50CGT = Math.round(yrCGT / 1e9);
      yr50Div = Math.round(yrDiv / 1e9);
    }
  }

  return {
    data: points,
    yr50Match,
    yr50Rev,
    yr50DT,
    yr50CGT,
    yr50Div,
    breakeven,
    ratio: (yr50Rev / yr50Match).toFixed(1),
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
        Government Match Cost vs Tax Revenue
      </h3>
      <p className="font-sans text-[11px] text-muted text-center mb-6">
        Death tax (30%) &middot; Capital gains tax (18%) &middot; Dividend tax
        (12%) &middot; vs 3% match cost
      </p>
      <div className="h-[350px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
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
                formatter={(value: number, name: string) => [
                  formatValue(value),
                  name === "matchCost"
                    ? "Match Cost"
                    : "Tax Revenue",
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
                  value === "matchCost"
                    ? "Government Match Cost"
                    : "Tax Revenue (Death Tax + CGT + Dividends)"
                }
              />
              {fiscal.breakeven > 0 && (
                <ReferenceLine
                  x={fiscal.breakeven % 2 === 0 ? fiscal.breakeven : fiscal.breakeven - 1}
                  stroke="#10B981"
                  strokeDasharray="4 4"
                  label={{
                    value: `Breakeven (Yr ${fiscal.breakeven})`,
                    position: "top",
                    style: {
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: 11,
                      fill: "#10B981",
                    },
                  }}
                />
              )}
              <Line
                type="monotone"
                dataKey="matchCost"
                stroke="#9CA3AF"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#9CA3AF" }}
                animationDuration={1500}
                animationEasing="ease-out"
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#15803D"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: "#15803D" }}
                animationDuration={1500}
                animationEasing="ease-out"
                animationBegin={300}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Revenue breakdown at Year 50 */}
      <div className="mt-8 mb-4">
        <h4 className="font-sans text-[11px] font-semibold uppercase tracking-wider text-muted text-center mb-4">
          Annual Revenue Breakdown at Year 50
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
          <motion.div
            className="text-center p-4 rounded-lg"
            style={{ backgroundColor: "#F3F4F6" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="font-sans text-xl md:text-2xl font-bold text-gray-500">
              {formatValue(fiscal.yr50Match)}
            </p>
            <p className="font-sans text-[10px] text-muted mt-1">
              Match Cost
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key fiscal stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <motion.div
          className="text-center p-5 bg-pull-bg rounded-lg border border-green-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="font-sans text-2xl md:text-3xl font-bold text-primary">
            {formatValue(fiscal.yr50Rev)}
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Total annual tax revenue (Year 50)
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
            {fiscal.ratio}x
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Revenue-to-cost ratio (Year 50)
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
            Year {fiscal.breakeven}
          </p>
          <p className="font-sans text-[11px] text-muted mt-1">
            Annual revenue exceeds match cost
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
