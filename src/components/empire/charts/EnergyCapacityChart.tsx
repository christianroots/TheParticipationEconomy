"use client";

import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const RED = "#C0392B";
const BLU = "#2980B9";
const AMB = "#E8A020";

const data = [
  { year: "2018", china: 144, usa: 31, eu: 22 },
  { year: "2019", china: 201, usa: 35, eu: 28 },
  { year: "2020", china: 192, usa: 34, eu: 29 },
  { year: "2021", china: 268, usa: 52, eu: 42 },
  { year: "2022", china: 321, usa: 60, eu: 55 },
  { year: "2023", china: 440, usa: 71, eu: 63 },
  { year: "2024", china: 380, usa: 68, eu: 60 },
];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}GW
        </p>
      ))}
    </div>
  );
}

export default function EnergyCapacityChart() {
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
        Chart 6
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        Energy Capacity Added by Region
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Renewable energy capacity added per year (GW)
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tickFormatter={(v: number) => `${v}GW`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }}
            />
            <Bar dataKey="china" name="China" fill={RED} radius={[3, 3, 0, 0]} animationDuration={1200} />
            <Bar dataKey="usa" name="USA" fill={BLU} radius={[3, 3, 0, 0]} animationDuration={1200} animationBegin={300} />
            <Bar dataKey="eu" name="EU" fill={AMB} radius={[3, 3, 0, 0]} animationDuration={1200} animationBegin={600} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: IEA, BloombergNEF.
      </p>
    </div>
  );
}
