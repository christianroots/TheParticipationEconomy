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
  { year: "2020", btc: 100, gold: 100, usd: 100 },
  { year: "2021", btc: 350, gold: 95, usd: 93 },
  { year: "2022", btc: 200, gold: 105, usd: 87 },
  { year: "2023", btc: 400, gold: 120, usd: 84 },
  { year: "2024", btc: 650, gold: 155, usd: 82 },
  { year: "2025", btc: 850, gold: 175, usd: 80 },
];

const AMB = "#E8A020";
const AMB_DARK = "#B8860B";
const RED = "#C0392B";

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
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
}

export default function AssetPerformanceChart() {
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
        Chart 9
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        Asset Performance Indexed to 100 (2020–2025)
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Bitcoin, Gold, and USD purchasing power indexed to 100 at 2020
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
              domain={[0, 900]}
              tick={{
                fill: "#6B7280",
                fontSize: 11,
                fontFamily: "var(--font-ibm-plex-mono)",
              }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tickFormatter={(v: number) => `${v}`}
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
              dataKey="btc"
              name="Bitcoin"
              stroke={AMB}
              strokeWidth={2}
              dot={{ r: 3, fill: AMB }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="gold"
              name="Gold"
              stroke={AMB_DARK}
              strokeWidth={2}
              dot={{ r: 3, fill: AMB_DARK }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="usd"
              name="USD Purchasing Power"
              stroke={RED}
              strokeWidth={2}
              dot={{ r: 3, fill: RED }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: Author&apos;s analysis, CoinGecko, World Gold Council, BLS
      </p>
    </div>
  );
}
