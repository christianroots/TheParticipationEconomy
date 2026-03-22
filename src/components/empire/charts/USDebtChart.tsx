"use client";
import { useState, useRef, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";

const data = [
  { year: "2000", debt: 5.6 },
  { year: "2002", debt: 6.2 },
  { year: "2004", debt: 7.4 },
  { year: "2006", debt: 8.5 },
  { year: "2008", debt: 10.0 },
  { year: "2010", debt: 13.5 },
  { year: "2012", debt: 16.1 },
  { year: "2014", debt: 17.8 },
  { year: "2016", debt: 19.9 },
  { year: "2018", debt: 21.5 },
  { year: "2020", debt: 27.7 },
  { year: "2022", debt: 31.4 },
  { year: "2025", debt: 36.2 },
  { year: "2027", debt: 40.0 },
  { year: "2030", debt: 46.0 },
];

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
          {p.name}: ${p.value}T
        </p>
      ))}
    </div>
  );
}

export default function USDebtChart() {
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
        Chart 1
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        US National Debt (2000–2030)
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Total public debt outstanding, in trillions of dollars
      </p>
      <div
        className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <ResponsiveContainer width="100%" height={380}>
          <AreaChart
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
              tickFormatter={(v: number) => `$${v}T`}
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
              x="2020"
              stroke="#6B7280"
              strokeDasharray="4 4"
              label={{
                value: "Original thesis",
                position: "top",
                fill: "#6B7280",
                fontSize: 10,
                fontFamily: "var(--font-ibm-plex-mono)",
              }}
            />
            <Area
              type="monotone"
              dataKey="debt"
              name="US National Debt"
              stroke={G}
              strokeWidth={2}
              fill={G}
              fillOpacity={0.12}
              dot={{ r: 3, fill: G }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: US Treasury, Bureau of the Fiscal Service
      </p>
    </div>
  );
}
