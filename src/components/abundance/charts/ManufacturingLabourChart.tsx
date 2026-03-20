"use client";

import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { sector: "Apparel", today: 38, robotics: 8 },
  { sector: "Electronics", today: 24, robotics: 5 },
  { sector: "Automotive", today: 20, robotics: 4 },
  { sector: "Furniture", today: 33, robotics: 7 },
  { sector: "Food", today: 22, robotics: 6 },
  { sector: "Pharma", today: 18, robotics: 4 },
];

const RED = "#C0392B";
const G = "#4A7C2F";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-at-surface border border-at-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-at-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}%
        </p>
      ))}
    </div>
  );
}

export default function ManufacturingLabourChart() {
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
        Chart 2
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-at-text mb-2">
        Labour as % of Manufacturing Cost
      </h3>
      <p className="font-mono text-[11px] text-at-muted mb-6">
        Today vs. post-robotics projections by sector
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#1A2E1F" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="sector"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#8A9E8D", paddingTop: 12 }}
            />
            <Bar dataKey="today" name="Today" fill={RED} radius={[3, 3, 0, 0]} animationDuration={1200} />
            <Bar dataKey="robotics" name="Post-Robotics" fill={G} radius={[3, 3, 0, 0]} animationDuration={1200} animationBegin={300} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-at-muted/50 italic mt-4">
        Source: McKinsey Global Institute (2022). Post-robotics figures are modelled projections.
      </p>
    </div>
  );
}
