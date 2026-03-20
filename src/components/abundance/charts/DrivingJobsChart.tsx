"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const RETIREMENTS = 36;
const DISPLACED = 46;

const scenarios = [
  { label: "1 in 100", ratio: 100, jobs: 20 },
  { label: "1 in 250", ratio: 250, jobs: 14 },
  { label: "1 in 500", ratio: 500, jobs: 10 },
  { label: "1 in 1000", ratio: 1000, jobs: 6 },
] as const;

const RED = "#C0392B";
const AMB = "#E8A020";
const G = "#4A7C2F";

function MainTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-at-surface border border-at-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-at-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value}m jobs
        </p>
      ))}
    </div>
  );
}

export default function DrivingJobsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(1); // default to 1-in-250

  const active = scenarios[activeIdx];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const mainData = useMemo(() => [
    { name: "82m Jobs 'At Risk'", retirement: RETIREMENTS, displaced: DISPLACED, created: 0 },
    { name: "New AV Jobs", retirement: 0, displaced: 0, created: active.jobs },
  ], [active.jobs]);

  const scenarioData = useMemo(() =>
    scenarios.map((s) => ({
      name: s.label,
      displaced: DISPLACED,
      created: s.jobs,
    })),
  []);

  return (
    <div ref={ref}>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-at-accent mb-2">
        Chart 7
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-at-text mb-2">
        The Driving Jobs Model
      </h3>
      <p className="font-mono text-[11px] text-at-muted mb-4">
        82 million driving jobs globally — what does AI displacement actually look like?
      </p>

      {/* Scenario toggles */}
      <div className="flex flex-wrap gap-2 mb-6">
        {scenarios.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActiveIdx(i)}
            className={`font-mono text-[11px] tracking-wider px-4 py-2 rounded transition-colors ${
              activeIdx === i
                ? "bg-at-accent text-at-text"
                : "bg-at-surface text-at-muted hover:text-at-text border border-at-rule/30"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        {/* Main chart — two tall bars */}
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={mainData} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#1A2E1F" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
            />
            <YAxis
              domain={[0, 90]}
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
              tickFormatter={(v: number) => `${v}m`}
            />
            <Tooltip content={<MainTooltip />} />
            <Legend verticalAlign="bottom" wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#8A9E8D", paddingTop: 12 }} />
            <Bar dataKey="retirement" name="Natural Retirements" stackId="a" fill={AMB} radius={[0, 0, 0, 0]} animationDuration={1000} />
            <Bar dataKey="displaced" name="Truly Displaced" stackId="a" fill={RED} radius={[3, 3, 0, 0]} animationDuration={1000} animationBegin={200} />
            <Bar dataKey="created" name="New AV Jobs" fill={G} radius={[3, 3, 0, 0]} animationDuration={1000} animationBegin={400} />
          </BarChart>
        </ResponsiveContainer>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
          <div className="bg-at-surface border-l-4 border-l-amber-500 rounded px-4 py-3">
            <p className="font-mono text-lg text-amber-400 font-semibold">36m</p>
            <p className="font-mono text-[11px] text-at-muted">
              Retire naturally by 2040 — 72% of drivers are already 40+. Gone regardless of AI.
            </p>
          </div>
          <div className="bg-at-surface border-l-4 border-l-red-500 rounded px-4 py-3">
            <p className="font-mono text-lg text-red-400 font-semibold">46m</p>
            <p className="font-mono text-[11px] text-at-muted">
              Truly displaced by AI — spread over 15 years = 3.1m/yr globally.
            </p>
          </div>
        </div>

        {/* Scenario comparison chart */}
        <p className="font-mono text-[11px] text-at-muted mb-4 mt-8">
          All scenarios: true displacement vs. new jobs created
        </p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={scenarioData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#1A2E1F" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
            />
            <YAxis
              tick={{ fill: "#8A9E8D", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#1A2E1F" }} tickLine={false}
              tickFormatter={(v: number) => `${v}m`}
            />
            <Tooltip content={<MainTooltip />} />
            <Bar dataKey="displaced" name="Truly Displaced" fill={RED} radius={[3, 3, 0, 0]} animationDuration={800} />
            <Bar dataKey="created" name="New AV Jobs" fill={G} radius={[3, 3, 0, 0]} animationDuration={800} animationBegin={200} />
          </BarChart>
        </ResponsiveContainer>

        {/* Dynamic callout */}
        <div className="bg-at-surface border border-at-rule/30 rounded p-4 mt-4">
          <p className="font-mono text-[12px] text-at-text">
            At <span className="text-at-accent font-semibold">{active.label}</span>: AV creates{" "}
            <span className="text-at-accent font-semibold">{active.jobs}m</span> new jobs against{" "}
            <span className="text-red-400">{DISPLACED}m</span> truly displaced. True net gap:{" "}
            <span className="text-at-text font-semibold">{DISPLACED - active.jobs}m</span> over 15 years ={" "}
            {((DISPLACED - active.jobs) / 15).toFixed(1)}m per year globally.
          </p>
        </div>
      </div>

      <p className="font-mono text-[10px] text-at-muted/50 italic mt-4">
        Sources: UITP, ATRI, IRU 2024 reports. Scenario model: 2bn vehicles × operator ratio.
      </p>
    </div>
  );
}
