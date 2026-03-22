"use client";
import { useState, useRef, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { year: "2000", commitments: 310, headroom: 900 },
  { year: "2002", commitments: 400, headroom: 800 },
  { year: "2004", commitments: 520, headroom: 700 },
  { year: "2006", commitments: 580, headroom: 650 },
  { year: "2008", commitments: 700, headroom: 500 },
  { year: "2010", commitments: 750, headroom: 350 },
  { year: "2012", commitments: 780, headroom: 250 },
  { year: "2014", commitments: 800, headroom: 200 },
  { year: "2016", commitments: 830, headroom: 150 },
  { year: "2018", commitments: 850, headroom: 100 },
  { year: "2020", commitments: 950, headroom: 50 },
  { year: "2022", commitments: 1000, headroom: 0 },
  { year: "2024", commitments: 1050, headroom: -80 },
  { year: "2025", commitments: 1080, headroom: -120 },
  { year: "2027", commitments: 1100, headroom: -150 },
];

const RED = "#C0392B";
const G = "#4A7C2F";

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-rule rounded px-4 py-3 font-mono text-[11px] shadow-sm">
      <p className="text-text mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="mb-0.5">
          {p.name}: ${p.value}B
        </p>
      ))}
    </div>
  );
}

export default function USOverreachChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
        Chart 10
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        US Imperial Overreach (2000–2027)
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Military &amp; foreign commitments vs. fiscal headroom, in billions of dollars
      </p>
      <div
        className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <ResponsiveContainer width="100%" height={380}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tick={{
                fill: "#6B7280",
                fontSize: 11,
                fontFamily: "var(--font-ibm-plex-mono)",
              }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <YAxis
              tick={{
                fill: "#6B7280",
                fontSize: 11,
                fontFamily: "var(--font-ibm-plex-mono)",
              }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tickFormatter={(v: number) => `$${v}B`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontSize: 11,
                color: "#6B7280",
                paddingTop: 12,
              }}
            />
            <ReferenceLine
              y={0}
              stroke="#E5E7EB"
              strokeWidth={2}
              label={{
                value: "Zero headroom",
                position: "right",
                fill: "#6B7280",
                fontSize: 10,
                fontFamily: "var(--font-ibm-plex-mono)",
              }}
            />
            <Line
              type="monotone"
              dataKey="commitments"
              name="Military & Foreign Commitments"
              stroke={RED}
              strokeWidth={2}
              dot={{ r: 3, fill: RED }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="headroom"
              name="Fiscal Headroom"
              stroke={G}
              strokeWidth={2}
              dot={{ r: 3, fill: G }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: Author&apos;s analysis, CBO, OMB
      </p>
    </div>
  );
}
