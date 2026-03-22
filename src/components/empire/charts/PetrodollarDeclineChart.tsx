"use client";

import { useState, useRef, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine, Area, AreaChart,
} from "recharts";

const RED = "#C0392B";

const data = [
  { year: "1974", pct: 98, historical: 98, projected: null },
  { year: "1980", pct: 97, historical: 97, projected: null },
  { year: "1990", pct: 96, historical: 96, projected: null },
  { year: "2000", pct: 95, historical: 95, projected: null },
  { year: "2010", pct: 93, historical: 93, projected: null },
  { year: "2018", pct: 90, historical: 90, projected: null },
  { year: "2020", pct: 88, historical: 88, projected: null },
  { year: "2022", pct: 83, historical: 83, projected: null },
  { year: "2023", pct: 79, historical: 79, projected: null },
  { year: "2024", pct: 74, historical: 74, projected: 74 },
  { year: "2025", pct: 70, historical: null, projected: 70 },
  { year: "2027", pct: 62, historical: null, projected: 62 },
  { year: "2030", pct: 52, historical: null, projected: 52 },
];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}%
        </p>
      ))}
    </div>
  );
}

export default function PetrodollarDeclineChart() {
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
        Chart 5
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        The Petrodollar in Decline
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        USD % of global oil trade settlements
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="redFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={RED} stopOpacity={0.15} />
                <stop offset="95%" stopColor={RED} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <YAxis
              domain={[40, 100]}
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }}
            />
            <ReferenceLine
              y={50}
              stroke="#6B7280"
              strokeDasharray="4 4"
              label={{ value: "Below majority", position: "insideTopLeft", fill: "#6B7280", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
            />
            <Area
              type="monotone"
              dataKey="pct"
              fill="url(#redFill)"
              stroke="none"
              animationDuration={1500}
              legendType="none"
              tooltipType="none"
            />
            <Line
              type="monotone"
              dataKey="historical"
              name="Historical"
              stroke={RED}
              strokeWidth={2}
              dot={{ r: 3, fill: RED }}
              connectNulls={false}
              animationDuration={1500}
            />
            <Line
              type="monotone"
              dataKey="projected"
              name="Projected"
              stroke={RED}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 3, fill: RED, strokeDasharray: "0" }}
              connectNulls
              animationDuration={1500}
              animationBegin={300}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: Author&apos;s analysis based on BIS, SWIFT data.
      </p>
    </div>
  );
}
