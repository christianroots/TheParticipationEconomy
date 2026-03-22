"use client";

import { useState, useRef, useEffect } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, LabelList,
} from "recharts";

const formationData = [
  { year: "2015", us: 3.5, uk: 0.6 },
  { year: "2017", us: 3.8, uk: 0.66 },
  { year: "2019", us: 3.5, uk: 0.67 },
  { year: "2020", us: 4.4, uk: 0.73 },
  { year: "2021", us: 5.4, uk: 0.75 },
  { year: "2022", us: 5.0, uk: 0.85 },
  { year: "2023", us: 5.5, uk: 0.88 },
  { year: "2024", us: 5.1, uk: 0.85 },
];

const formationProj = [
  { year: "2024", usProj: 5.1, ukProj: 0.85 },
  { year: "2027", usProj: 6.2, ukProj: 1.0 },
  { year: "2030", usProj: 7.2, ukProj: 1.2 },
];

const formationCombined = [
  ...formationData.map((d) => ({ ...d, usProj: undefined as number | undefined, ukProj: undefined as number | undefined })),
  ...formationProj.slice(1).map((d) => ({ ...d, us: undefined as number | undefined, uk: undefined as number | undefined })),
];

const y5Data = [
  { cohort: "2019 (pre-AI)", formed: 3.5, survive: 1.72, jobs: 12.0 },
  { cohort: "2021 (pandemic)", formed: 5.4, survive: 2.65, jobs: 21.2 },
  { cohort: "2023 (AI early)", formed: 5.5, survive: 2.70, jobs: 24.3 },
  { cohort: "2025 (AI era)", formed: 5.8, survive: 2.84, jobs: 28.4 },
  { cohort: "2028 (AI native)", formed: 6.5, survive: 3.19, jobs: 35.1 },
];

const G = "#4A7C2F";
const GL = "#6B9E4A";
const BLU = "#2980B9";
const AMB = "#E8A020";

type View = "formations" | "jobs";

function FormationsTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">{label}</p>
      {payload.filter((p) => p.value != null).map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}m
        </p>
      ))}
    </div>
  );
}

function JobsTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}m
        </p>
      ))}
    </div>
  );
}

export default function SoloEconomyChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<View>("formations");

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
        Chart 4
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        The Solo Economy
      </h3>

      {/* Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView("formations")}
          className={`font-mono text-[11px] tracking-wider px-4 py-2 rounded transition-colors ${
            view === "formations"
              ? "bg-at-accent text-text"
              : "bg-gray-50 text-muted hover:text-text border border-rule/30"
          }`}
        >
          Company Formations
        </button>
        <button
          onClick={() => setView("jobs")}
          className={`font-mono text-[11px] tracking-wider px-4 py-2 rounded transition-colors ${
            view === "jobs"
              ? "bg-at-accent text-text"
              : "bg-gray-50 text-muted hover:text-text border border-rule/30"
          }`}
        >
          Year 5 Jobs Model
        </button>
      </div>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        {view === "formations" ? (
          <>
            <p className="font-mono text-[11px] text-muted mb-4">
              New business formations (millions). Dashed = projected.
            </p>
            <ResponsiveContainer width="100%" height={380}>
              <LineChart data={formationCombined} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
                  axisLine={{ stroke: "#E5E7EB" }} tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
                  axisLine={{ stroke: "#E5E7EB" }} tickLine={false}
                  tickFormatter={(v: number) => `${v}m`}
                />
                <Tooltip content={<FormationsTooltip />} />
                <Legend verticalAlign="bottom" wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }} />
                <Line type="monotone" dataKey="us" name="US" stroke={G} strokeWidth={2.5} dot={{ r: 3, fill: G }} connectNulls={false} animationDuration={1500} />
                <Line type="monotone" dataKey="uk" name="UK" stroke={BLU} strokeWidth={2.5} dot={{ r: 3, fill: BLU }} connectNulls={false} animationDuration={1500} />
                <Line type="monotone" dataKey="usProj" name="US (projected)" stroke={G} strokeWidth={2} strokeDasharray="6 4" dot={{ r: 2, fill: G }} connectNulls={false} animationDuration={1200} animationBegin={500} />
                <Line type="monotone" dataKey="ukProj" name="UK (projected)" stroke={BLU} strokeWidth={2} strokeDasharray="6 4" dot={{ r: 2, fill: BLU }} connectNulls={false} animationDuration={1200} animationBegin={500} />
              </LineChart>
            </ResponsiveContainer>
          </>
        ) : (
          <>
            <p className="font-mono text-[11px] text-muted mb-2">
              Jobs created by year 5 per annual US cohort (millions)
            </p>
            {/* Stat cards */}
            <div className="flex gap-3 mb-4 flex-wrap">
              <div className="bg-gray-50 border border-rule/30 rounded px-3 py-2">
                <p className="font-mono text-[10px] text-muted">5.5m</p>
                <p className="font-mono text-[9px] text-muted/60">US businesses formed 2023</p>
              </div>
              <div className="bg-gray-50 border border-rule/30 rounded px-3 py-2">
                <p className="font-mono text-[10px] text-muted">49%</p>
                <p className="font-mono text-[9px] text-muted/60">survive to year 5</p>
              </div>
              <div className="bg-gray-50 border border-rule/30 rounded px-3 py-2">
                <p className="font-mono text-[10px] text-muted">7–11</p>
                <p className="font-mono text-[9px] text-muted/60">avg employees at Y5</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={y5Data} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="cohort"
                  tick={{ fill: "#6B7280", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
                  axisLine={{ stroke: "#E5E7EB" }} tickLine={false}
                  interval={0}
                />
                <YAxis
                  tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
                  axisLine={{ stroke: "#E5E7EB" }} tickLine={false}
                  tickFormatter={(v: number) => `${v}m`}
                />
                <Tooltip content={<JobsTooltip />} />
                <Legend verticalAlign="bottom" wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }} />
                <Bar dataKey="formed" name="Formed" fill={AMB} radius={[3, 3, 0, 0]} animationDuration={1200} />
                <Bar dataKey="survive" name="Survive to Y5" fill={GL} radius={[3, 3, 0, 0]} animationDuration={1200} animationBegin={200} />
                <Bar dataKey="jobs" name="Jobs at Y5" fill={G} radius={[3, 3, 0, 0]} animationDuration={1200} animationBegin={400}>
                  <LabelList dataKey="jobs" position="top" fill="#6B7280" fontSize={10} fontFamily="var(--font-ibm-plex-mono)" formatter={(v) => `${v}m`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </div>

      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        US Census Bureau Business Formation Statistics; SBA Office of Advocacy. Y5 model uses 49% survival × avg employees.
      </p>
    </div>
  );
}
