"use client";
import { useState, useRef, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2015", china: 9, us: 8 },
  { year: "2016", china: 12, us: 7 },
  { year: "2017", china: 14, us: 8 },
  { year: "2018", china: 16, us: 7 },
  { year: "2019", china: 18, us: 8 },
  { year: "2020", china: 20, us: 7 },
  { year: "2021", china: 22, us: 7 },
  { year: "2022", china: 24, us: 8 },
  { year: "2023", china: 25, us: 7 },
  { year: "2024", china: 27, us: 7 },
];

const RED = "#C0392B";
const BLU = "#2980B9";

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
          {p.name}: {p.value} ships
        </p>
      ))}
    </div>
  );
}

export default function NavalShipbuildingChart() {
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
        Chart 11
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        Naval Shipbuilding: China vs. United States (2015–2024)
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Major combatant ships commissioned per year
      </p>
      <div
        className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <ResponsiveContainer width="100%" height={380}>
          <BarChart
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
              tickFormatter={(v: number) => `${v} ships`}
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
            <Bar dataKey="china" name="China" fill={RED} radius={[2, 2, 0, 0]} />
            <Bar dataKey="us" name="United States" fill={BLU} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: CSIS, US Naval Institute
      </p>
    </div>
  );
}
