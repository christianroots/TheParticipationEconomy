"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceDot,
} from "recharts";

const G = "#4A7C2F";
const RED = "#C0392B";

function generateData() {
  const annual: Array<{ age: number; apprentice: number; graduate: number }> = [];
  const cumulative: Array<{ age: number; apprentice: number; graduate: number }> = [];

  let cumApp = 0;
  let cumGrad = -52; // student debt

  for (let age = 18; age <= 62; age++) {
    // Apprentice: starts earning at 18, salary grows
    let appSalary = 0;
    if (age >= 18) {
      const years = age - 18;
      // Starts at £24k, grows ~3.5% per year, caps around £75k
      appSalary = Math.min(75, 24 * Math.pow(1.035, years));
    }

    // Graduate: studying 18-20 (£0 income), starts earning at 21
    let gradSalary = 0;
    if (age >= 21) {
      const years = age - 21;
      // Starts at £28k, grows ~3% per year, caps around £80k
      gradSalary = Math.min(80, 28 * Math.pow(1.03, years));
    }

    cumApp += appSalary;
    cumGrad += gradSalary;

    annual.push({
      age,
      apprentice: Math.round(appSalary * 10) / 10,
      graduate: Math.round(gradSalary * 10) / 10,
    });

    cumulative.push({
      age,
      apprentice: Math.round(cumApp),
      graduate: Math.round(cumGrad),
    });
  }

  return { annual, cumulative };
}

type View = "cumulative" | "annual";

function CustomTooltip({ active, payload, label, view }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: number; view: View }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">Age {label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: £{view === "cumulative" ? `${Math.round(p.value / 1000)}k` : `${p.value.toFixed(1)}k`}
        </p>
      ))}
    </div>
  );
}

export default function ApprenticeshipChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<View>("cumulative");

  const { annual, cumulative } = useMemo(() => generateData(), []);

  // Find crossover point for cumulative
  const crossoverAge = useMemo(() => {
    for (const d of cumulative) {
      if (d.graduate > d.apprentice && d.age > 25) return d.age;
    }
    return null;
  }, [cumulative]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const chartData = view === "cumulative" ? cumulative : annual;

  return (
    <div ref={ref}>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
        Chart 9
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        Apprenticeship vs. Degree: Lifetime Earnings
      </h3>

      {/* Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView("cumulative")}
          className={`font-mono text-[11px] tracking-wider px-4 py-2 rounded transition-colors ${
            view === "cumulative"
              ? "bg-at-accent text-text"
              : "bg-gray-50 text-muted hover:text-text border border-rule/30"
          }`}
        >
          Cumulative Wealth
        </button>
        <button
          onClick={() => setView("annual")}
          className={`font-mono text-[11px] tracking-wider px-4 py-2 rounded transition-colors ${
            view === "annual"
              ? "bg-at-accent text-text"
              : "bg-gray-50 text-muted hover:text-text border border-rule/30"
          }`}
        >
          Annual Earnings
        </button>
      </div>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 10, right: 10, left: 20, bottom: 10 }}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis
              dataKey="age"
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }} tickLine={false}
              label={{ value: "Age", position: "insideBottom", offset: -5, fill: "#6B7280", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
            />
            <YAxis
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }} tickLine={false}
              tickFormatter={(v: number) =>
                view === "cumulative"
                  ? v >= 1000 ? `£${Math.round(v / 1000)}k` : `£${v}`
                  : `£${v}k`
              }
            />
            <Tooltip content={<CustomTooltip view={view} />} />
            <Legend verticalAlign="bottom" wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }} />
            <Line
              type="monotone" dataKey="apprentice" name="Apprentice"
              stroke={G} strokeWidth={2.5} dot={false}
              animationDuration={1500}
            />
            <Line
              type="monotone" dataKey="graduate" name="Graduate"
              stroke={RED} strokeWidth={2.5} dot={false}
              animationDuration={1500}
            />
            {view === "cumulative" && crossoverAge && (
              <ReferenceDot
                x={crossoverAge}
                y={cumulative.find((d) => d.age === crossoverAge)?.graduate || 0}
                r={6}
                fill={RED}
                stroke="#1A1A1A"
                strokeWidth={2}
                label={{
                  value: `Graduate overtakes ~age ${crossoverAge}`,
                  position: "top",
                  fill: "#6B7280",
                  fontSize: 10,
                  fontFamily: "var(--font-ibm-plex-mono)",
                  offset: 15,
                }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {view === "cumulative" && (
        <p className="font-mono text-[11px] text-muted mt-4">
          The apprentice starts earning at 18 with no debt. The graduate carries £52k in student debt
          and doesn&rsquo;t earn until 21. The apprentice maintains a cumulative wealth lead until
          {crossoverAge ? ` roughly age ${crossoverAge}` : " late career"}.
        </p>
      )}

      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Model: Apprentice starts at £24k/yr age 18, ~3.5% annual growth. Graduate starts at £28k/yr age 21, ~3% growth, £52k student debt.
      </p>
    </div>
  );
}
