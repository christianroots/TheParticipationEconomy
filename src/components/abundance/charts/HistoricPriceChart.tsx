"use client";

import { useState, useRef, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine,
} from "recharts";

const data = [
  { year: "1900", light: 100 },
  { year: "1920", light: 60 },
  { year: "1940", light: 32 },
  { year: "1960", light: 12 },
  { year: "1980", light: 4, compute: 100 },
  { year: "1990", light: 2, compute: 40 },
  { year: "2000", light: 0.8, compute: 8, genome: 100 },
  { year: "2010", light: 0.15, compute: 0.5, genome: 8 },
  { year: "2015", light: 0.05, compute: 0.1, genome: 0.3 },
  { year: "2020", light: 0.02, compute: 0.02, genome: 0.03 },
  { year: "2024", light: 0.01, compute: 0.005, genome: 0.007 },
];

const AMB = "#E8A020";
const BLU = "#2980B9";
const PRP = "#8E44AD";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-at-surface border border-at-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-at-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value < 1 ? p.value.toFixed(3) : p.value}%
        </p>
      ))}
    </div>
  );
}

export default function HistoricPriceChart() {
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
        Chart 1
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-at-text mb-2">
        The Historic Price of Things
      </h3>
      <p className="font-mono text-[11px] text-at-muted mb-6">
        Cost as % of original price (log scale)
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#1A2E1F" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }}
              tickLine={false}
            />
            <YAxis
              scale="log"
              domain={[0.001, 120]}
              allowDataOverflow
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }}
              tickLine={false}
              tickFormatter={(v: number) => v >= 1 ? `${v}` : `${v}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#8A9E8D", paddingTop: 12 }}
            />
            <ReferenceLine
              x="2024"
              stroke="#4A7C2F"
              strokeDasharray="4 4"
              label={{ value: "AI era →", position: "top", fill: "#4A7C2F", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
            />
            <Line
              type="monotone" dataKey="light" name="Cost of Light"
              stroke={AMB} strokeWidth={2} dot={{ r: 3, fill: AMB }}
              connectNulls animationDuration={1500}
            />
            <Line
              type="monotone" dataKey="compute" name="Computing Power"
              stroke={BLU} strokeWidth={2} dot={{ r: 3, fill: BLU }}
              connectNulls animationDuration={1500} animationBegin={300}
            />
            <Line
              type="monotone" dataKey="genome" name="Genome Sequencing"
              stroke={PRP} strokeWidth={2} dot={{ r: 3, fill: PRP }}
              connectNulls animationDuration={1500} animationBegin={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-at-muted/50 italic mt-4">
        Based on Nordhaus (2006), Our World in Data, and NIH data. Indexed to 100 at first appearance.
      </p>
    </div>
  );
}
