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
} from "recharts";

const data = [
  { year: "2000", usd: 71, eur: 18, other: 11 },
  { year: "2002", usd: 66, eur: 24, other: 10 },
  { year: "2004", usd: 65, eur: 25, other: 10 },
  { year: "2006", usd: 64, eur: 26, other: 10 },
  { year: "2008", usd: 63, eur: 27, other: 10 },
  { year: "2010", usd: 62, eur: 26, other: 12 },
  { year: "2012", usd: 62, eur: 24, other: 14 },
  { year: "2014", usd: 63, eur: 22, other: 15 },
  { year: "2016", usd: 65, eur: 20, other: 15 },
  { year: "2018", usd: 62, eur: 20, other: 18 },
  { year: "2020", usd: 60, eur: 21, other: 19 },
  { year: "2022", usd: 59, eur: 20, other: 21 },
  { year: "2025", usd: 58, eur: 19, other: 23 },
];

const G = "#4A7C2F";
const BLU = "#2980B9";
const AMB = "#E8A020";

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
          {p.name}: {p.value}%
        </p>
      ))}
    </div>
  );
}

export default function USDReservesChart() {
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
        Chart 2
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        Global Reserve Currency Composition
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Share of allocated foreign exchange reserves by currency
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
              tickFormatter={(v: number) => `${v}%`}
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
            <Line
              type="monotone"
              dataKey="usd"
              name="USD"
              stroke={G}
              strokeWidth={2}
              dot={{ r: 3, fill: G }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="eur"
              name="EUR"
              stroke={BLU}
              strokeWidth={2}
              dot={{ r: 3, fill: BLU }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="other"
              name="Other"
              stroke={AMB}
              strokeWidth={2}
              dot={{ r: 3, fill: AMB }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: IMF COFER data
      </p>
    </div>
  );
}
