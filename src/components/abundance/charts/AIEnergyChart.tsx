"use client";

import { useState, useRef, useEffect } from "react";
import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2023", power: 17, jobs: 180 },
  { year: "2024", power: 26, jobs: 240 },
  { year: "2025", power: 40, jobs: 340 },
  { year: "2026", power: 58, jobs: 460 },
  { year: "2027", power: 80, jobs: 600 },
  { year: "2028", power: 110, jobs: 780 },
  { year: "2029", power: 148, jobs: 980 },
  { year: "2030", power: 190, jobs: 1200 },
];

const AMB = "#E8A020";
const G = "#4A7C2F";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-at-surface border border-at-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-at-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}{p.name.includes("Power") ? " TWh" : "k"}
        </p>
      ))}
    </div>
  );
}

export default function AIEnergyChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div ref={ref}>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-at-accent mb-2">
        Chart 8
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-at-text mb-2">
        AI Energy Demand &amp; Infrastructure Jobs
      </h3>
      <p className="font-mono text-[11px] text-at-muted mb-4">
        Data centre power demand (TWh) and infrastructure jobs (thousands)
      </p>

      {/* Stat highlight */}
      <div className="bg-at-surface border border-at-rule/30 rounded p-4 mb-6">
        <p className="font-mono text-[12px] text-at-text">
          AI data centre power: <span className="text-amber-400 font-semibold">17 TWh → 190 TWh</span> (×11 by 2030).{" "}
          <span className="text-at-muted">AI&rsquo;s growth is physically dependent on the workers it supposedly threatens.</span>
        </p>
      </div>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#1A2E1F" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
            />
            <YAxis
              yAxisId="power"
              orientation="left"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
              tickFormatter={(v: number) => `${v} TWh`}
              label={{ value: "Power (TWh)", angle: -90, position: "insideLeft", fill: "#8A9E8D", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
            />
            <YAxis
              yAxisId="jobs"
              orientation="right"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
              tickFormatter={(v: number) => `${v}k`}
              label={{ value: "Jobs (thousands)", angle: 90, position: "insideRight", fill: "#8A9E8D", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#8A9E8D", paddingTop: 12 }} />
            <Area
              yAxisId="power"
              type="monotone"
              dataKey="power"
              name="AI Power Demand"
              stroke={AMB}
              fill={AMB}
              fillOpacity={0.15}
              strokeWidth={2}
              animationDuration={1500}
            />
            <Line
              yAxisId="jobs"
              type="monotone"
              dataKey="jobs"
              name="Infrastructure Jobs"
              stroke={G}
              strokeWidth={2.5}
              dot={{ r: 4, fill: G }}
              animationDuration={1500}
              animationBegin={300}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-at-muted/50 italic mt-4">
        Source: IEA Data Centres &amp; Networks report (2024). Jobs figures are modelled estimates.
      </p>
    </div>
  );
}
