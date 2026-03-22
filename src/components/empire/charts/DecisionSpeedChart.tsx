"use client";

import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const RED = "#C0392B";
const G = "#4A7C2F";

const data = [
  { category: "Nuclear", china: 6, west: 17 },
  { category: "High-Speed Rail", china: 3, west: 12 },
  { category: "Offshore Wind", china: 2, west: 7 },
  { category: "Data Centre", china: 1.5, west: 4 },
  { category: "LNG Terminal", china: 3, west: 8 },
  { category: "Highway", china: 2, west: 9 },
];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value} years
        </p>
      ))}
    </div>
  );
}

export default function DecisionSpeedChart() {
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
        Chart 8
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        Decision-to-Build Speed
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Years from approval to completion, China vs. West
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tickFormatter={(v: number) => `${v}yr`}
            />
            <YAxis
              type="category"
              dataKey="category"
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              width={110}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }}
            />
            <Bar dataKey="china" name="China" fill={RED} radius={[0, 3, 3, 0]} animationDuration={1200} />
            <Bar dataKey="west" name="West" fill={G} radius={[0, 3, 3, 0]} animationDuration={1200} animationBegin={300} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: Author&apos;s analysis, McKinsey Global Institute.
      </p>
    </div>
  );
}
