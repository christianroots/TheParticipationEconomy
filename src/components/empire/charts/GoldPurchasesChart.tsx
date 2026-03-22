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
  Cell,
} from "recharts";

const data = [
  { year: "2015", tonnes: 566 },
  { year: "2016", tonnes: 384 },
  { year: "2017", tonnes: 375 },
  { year: "2018", tonnes: 655 },
  { year: "2019", tonnes: 668 },
  { year: "2020", tonnes: 255 },
  { year: "2021", tonnes: 450 },
  { year: "2022", tonnes: 1082 },
  { year: "2023", tonnes: 1037 },
  { year: "2024", tonnes: 1045 },
];

const AMB = "#E8A020";
const GRAY = "#9CA3AF";

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
          {p.name}: {p.value} tonnes
        </p>
      ))}
    </div>
  );
}

export default function GoldPurchasesChart() {
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
        Chart 4
      </p>
      <h3 className="font-playfair text-xl md:text-2xl text-text mb-2">
        Central Bank Gold Purchases (2015–2024)
      </h3>
      <p className="font-mono text-[11px] text-muted mb-6">
        Annual net gold purchases by central banks, in metric tonnes
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
              tickFormatter={(v: number) => `${v}t`}
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
            <Bar dataKey="tonnes" name="Gold Purchases" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.tonnes > 900 ? AMB : GRAY}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="font-mono text-[10px] text-muted/50 italic mt-4">
        Source: World Gold Council
      </p>
    </div>
  );
}
