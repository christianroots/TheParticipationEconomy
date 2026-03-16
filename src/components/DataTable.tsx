"use client";

import { motion } from "framer-motion";

interface DataTableProps {
  headers: string[];
  rows: string[][];
  delay?: number;
}

export default function DataTable({
  headers,
  rows,
  delay = 0,
}: DataTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="bg-primary text-white font-sans text-sm font-semibold uppercase tracking-wide px-4 py-3 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              className="border-b border-rule"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: delay + rowIndex * 0.08,
              }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`font-serif text-[16px] px-4 py-3 ${
                    cell.startsWith("**")
                      ? "font-bold"
                      : ""
                  } ${cellIndex === 0 ? "text-text" : "text-muted"}`}
                >
                  {cell.replace(/\*\*/g, "")}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
