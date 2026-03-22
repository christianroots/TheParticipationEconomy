"use client";

import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const G = "#4A7C2F";
const BLU = "#2980B9";

const data = [
  { decade: "1950s", uk: 2, us: 1.5 },
  { decade: "1960s", uk: 3, us: 2.5 },
  { decade: "1970s", uk: 5, us: 6 },
  { decade: "1980s", uk: 9, us: 11 },
  { decade: "1990s", uk: 14, us: 18 },
  { decade: "2000s", uk: 22, us: 28 },
  { decade: "2010s", uk: 38, us: 44 },
  { decade: "2020s", uk: 65, us: 72 },
];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value} months
        </p>
      ))}
    </div>
  );
}

export default function PlanningTimelineChart() {
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
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
        Chart 7
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        The Planning Permission Problem
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Average planning approval time in months, by decade
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="decade"
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tickFormatter={(v: number) => `${v} mo`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }}
            />
            <Bar dataKey="uk" name="UK" fill={G} radius={[3, 3, 0, 0]} animationDuration={1200} />
            <Bar dataKey="us" name="US" fill={BLU} radius={[3, 3, 0, 0]} animationDuration={1200} animationBegin={300} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: Author&apos;s analysis, UK Planning Inspectorate, US GAO.
      </p>
    </div>
  );
}
