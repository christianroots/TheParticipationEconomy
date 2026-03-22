"use client";

import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, LabelList,
} from "recharts";

const data = [
  { sector: "Legal\n(doc review)", before: 10, after: 1 },
  { sector: "Software\ndev", before: 7, after: 1 },
  { sector: "Marketing\ncontent", before: 8, after: 1 },
  { sector: "Finance\nmodelling", before: 5, after: 1 },
  { sector: "Customer\nsupport", before: 9, after: 1 },
  { sector: "Data\nanalysis", before: 6, after: 1 },
];

const RED = "#C0392B";
const G = "#4A7C2F";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  const cleaned = label?.replace(/\n/g, " ");
  return (
    <div className="bg-gray-50 border border-rule/50 rounded px-4 py-3 font-mono text-[11px]">
      <p className="text-text mb-2">{cleaned}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: {p.value} {p.value === 1 ? "person" : "people"}
        </p>
      ))}
    </div>
  );
}

export default function ProductivityChart() {
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
        AI Productivity Compression
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        People needed to produce the same output: pre-AI vs. with AI
      </p>

      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="sector"
              tick={{ fill: "#6B7280", fontSize: 10, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              interval={0}
            />
            <YAxis
              tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-ibm-plex-mono)" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: 11, color: "#6B7280", paddingTop: 12 }}
            />
            <Bar dataKey="before" name="Pre-AI" fill={RED} radius={[3, 3, 0, 0]} animationDuration={1200}>
              <LabelList dataKey="before" position="top" fill="#6B7280" fontSize={10} fontFamily="var(--font-ibm-plex-mono)" />
            </Bar>
            <Bar dataKey="after" name="With AI" fill={G} radius={[3, 3, 0, 0]} animationDuration={1200} animationBegin={300}>
              <LabelList dataKey="after" position="top" fill="#6B7280" fontSize={10} fontFamily="var(--font-ibm-plex-mono)" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Based on GitHub Copilot studies, Klarna AI implementation data, and industry reports.
      </p>
    </div>
  );
}
