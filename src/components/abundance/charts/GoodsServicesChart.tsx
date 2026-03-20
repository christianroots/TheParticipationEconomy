"use client";

import { useState, useRef, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine,
} from "recharts";

const data = [
  { year: "1990", goods: 100, services: 100 },
  { year: "1995", goods: 102, services: 120 },
  { year: "2000", goods: 100, services: 145 },
  { year: "2005", goods: 97, services: 168 },
  { year: "2010", goods: 94, services: 192 },
  { year: "2015", goods: 92, services: 220 },
  { year: "2020", goods: 89, services: 255 },
  { year: "2023", goods: 88, services: 278 },
];

const projData = [
  { year: "2023", goodsProj: 88, servicesProj: 278 },
  { year: "2026", goodsProj: 84, servicesProj: 262 },
  { year: "2029", goodsProj: 78, servicesProj: 240 },
  { year: "2032", goodsProj: 70, servicesProj: 212 },
];

const combined = [
  ...data.map((d) => ({ ...d, goodsProj: undefined, servicesProj: undefined })),
  ...projData.slice(1).map((d) => ({ ...d, goods: undefined, services: undefined })),
];

const G = "#4A7C2F";
const RED = "#C0392B";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string; dataKey: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-at-surface border border-at-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-at-text mb-2">{label}</p>
      {payload.filter((p) => p.value != null).map((p) => (
        <p key={p.dataKey} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
}

export default function GoodsServicesChart() {
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
        Chart 3
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-at-text mb-2">
        Goods vs. Services Inflation
      </h3>
      <p className="font-mono text-[11px] text-at-muted mb-6">
        CPI index (1990 = 100). Dashed lines = AI-era projections.
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <LineChart data={combined} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#1A2E1F" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }}
              tickLine={false}
            />
            <YAxis
              domain={[60, 300]}
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#8A9E8D", paddingTop: 12 }}
            />
            <ReferenceLine
              x="2023"
              stroke="#4A7C2F"
              strokeDasharray="4 4"
              label={{ value: "AI era begins →", position: "top", fill: "#4A7C2F", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
            />
            {/* Actual data */}
            <Line type="monotone" dataKey="goods" name="Goods Prices" stroke={G} strokeWidth={2.5} dot={{ r: 3, fill: G }} connectNulls={false} animationDuration={1500} />
            <Line type="monotone" dataKey="services" name="Services Prices" stroke={RED} strokeWidth={2.5} dot={{ r: 3, fill: RED }} connectNulls={false} animationDuration={1500} />
            {/* Projections */}
            <Line type="monotone" dataKey="goodsProj" name="Goods (projected)" stroke={G} strokeWidth={2} strokeDasharray="6 4" dot={{ r: 2, fill: G }} connectNulls={false} animationDuration={1200} animationBegin={500} />
            <Line type="monotone" dataKey="servicesProj" name="Services (projected)" stroke={RED} strokeWidth={2} strokeDasharray="6 4" dot={{ r: 2, fill: RED }} connectNulls={false} animationDuration={1200} animationBegin={500} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-at-muted/50 italic mt-4">
        Source: US Bureau of Labor Statistics CPI series 1990–2024. Projections are illustrative.
      </p>
    </div>
  );
}
