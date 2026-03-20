"use client";

import { useState, useRef, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2015", electrician: 32, plumber: 30, graduate: 24, manager: 38 },
  { year: "2017", electrician: 34, plumber: 33, graduate: 26, manager: 40 },
  { year: "2019", electrician: 38, plumber: 37, graduate: 27, manager: 42 },
  { year: "2021", electrician: 43, plumber: 42, graduate: 28, manager: 44 },
  { year: "2022", electrician: 48, plumber: 47, graduate: 29, manager: 45 },
  { year: "2023", electrician: 54, plumber: 52, graduate: 30, manager: 47 },
  { year: "2024", electrician: 58, plumber: 56, graduate: 31, manager: 48 },
];

const projData = [
  { year: "2024", elecProj: 58, plumbProj: 56, gradProj: 31, mgrProj: 48 },
  { year: "2027", elecProj: 70, plumbProj: 68, gradProj: 32, mgrProj: 49 },
  { year: "2030", elecProj: 85, plumbProj: 82, gradProj: 33, mgrProj: 50 },
];

const combined = [
  ...data.map((d) => ({
    ...d,
    elecProj: undefined as number | undefined,
    plumbProj: undefined as number | undefined,
    gradProj: undefined as number | undefined,
    mgrProj: undefined as number | undefined,
  })),
  ...projData.slice(1).map((d) => ({
    ...d,
    electrician: undefined as number | undefined,
    plumber: undefined as number | undefined,
    graduate: undefined as number | undefined,
    manager: undefined as number | undefined,
  })),
];

const G = "#4A7C2F";
const GL = "#6B9E4A";
const RED = "#C0392B";
const BLU = "#2980B9";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-at-surface border border-at-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-at-text mb-2">{label}</p>
      {payload.filter((p) => p.value != null).map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: £{p.value}k
        </p>
      ))}
    </div>
  );
}

export default function BlueCollarPremiumChart() {
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
        Chart 6
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-at-text mb-2">
        The Blue Collar Premium Is Already Happening
      </h3>
      <p className="font-mono text-[11px] text-at-muted mb-4">
        Annual earnings (£k). Dashed lines = projected.
      </p>

      {/* Stat cards */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <div className="bg-at-surface border border-at-rule/30 rounded px-3 py-2">
          <p className="font-mono text-sm text-at-text">£58k</p>
          <p className="font-mono text-[9px] text-at-muted/60">avg electrician 2024</p>
        </div>
        <div className="bg-at-surface border border-at-rule/30 rounded px-3 py-2">
          <p className="font-mono text-sm text-at-text">£31k</p>
          <p className="font-mono text-[9px] text-at-muted/60">avg graduate starting</p>
        </div>
        <div className="bg-at-surface border border-at-rule/30 rounded px-3 py-2">
          <p className="font-mono text-sm text-at-text">+88%</p>
          <p className="font-mono text-[9px] text-at-muted/60">trades growth vs +29% graduate</p>
        </div>
      </div>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={combined} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#1A2E1F" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
            />
            <YAxis
              domain={[15, 95]}
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
              tickFormatter={(v: number) => `£${v}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#8A9E8D", paddingTop: 12 }} />
            {/* Actual */}
            <Line type="monotone" dataKey="electrician" name="Electrician" stroke={G} strokeWidth={2.5} dot={{ r: 3, fill: G }} connectNulls={false} animationDuration={1500} />
            <Line type="monotone" dataKey="plumber" name="Plumber" stroke={GL} strokeWidth={2.5} dot={{ r: 3, fill: GL }} connectNulls={false} animationDuration={1500} />
            <Line type="monotone" dataKey="graduate" name="Graduate Starting" stroke={RED} strokeWidth={1.5} dot={{ r: 2, fill: RED }} connectNulls={false} strokeDasharray="0" animationDuration={1500} />
            <Line type="monotone" dataKey="manager" name="Middle Manager" stroke={BLU} strokeWidth={1.5} dot={{ r: 2, fill: BLU }} connectNulls={false} animationDuration={1500} />
            {/* Projections */}
            <Line type="monotone" dataKey="elecProj" name="Electrician (proj)" stroke={G} strokeWidth={2} strokeDasharray="6 4" dot={{ r: 2, fill: G }} connectNulls={false} animationDuration={1200} animationBegin={500} />
            <Line type="monotone" dataKey="plumbProj" name="Plumber (proj)" stroke={GL} strokeWidth={2} strokeDasharray="6 4" dot={{ r: 2, fill: GL }} connectNulls={false} animationDuration={1200} animationBegin={500} />
            <Line type="monotone" dataKey="gradProj" name="Graduate (proj)" stroke={RED} strokeWidth={1.5} strokeDasharray="6 4" dot={{ r: 2, fill: RED }} connectNulls={false} animationDuration={1200} animationBegin={500} />
            <Line type="monotone" dataKey="mgrProj" name="Manager (proj)" stroke={BLU} strokeWidth={1.5} strokeDasharray="6 4" dot={{ r: 2, fill: BLU }} connectNulls={false} animationDuration={1200} animationBegin={500} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-at-muted/50 italic mt-4">
        Source: ONS Annual Survey of Hours and Earnings (ASHE) 2015–2024. Projections are illustrative.
      </p>
    </div>
  );
}
