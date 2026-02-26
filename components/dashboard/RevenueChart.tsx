"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueData } from "@/services/mock/revenue";

export function RevenueChart() {
  return (
    <div
      className="
        relative mt-10

        bg-card/70 backdrop-blur-xl
        text-card-foreground

        border border-border/50
        rounded-xl p-6

        shadow-lg shadow-black/5

        transition-all duration-300 ease-out

        hover:shadow-xl hover:shadow-primary/10
        hover:-translate-y-1
      "
    >
      {/* emerald glow overlay */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-xl
          bg-gradient-to-r
          from-primary/0
          via-primary/5
          to-primary/0
          opacity-0
          transition-opacity duration-300
          hover:opacity-100
        "
      />

      <div className="relative z-10">

        <h3 className="mb-4 text-lg font-semibold tracking-tight">
          Receita Mensal
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>

            <XAxis
              dataKey="month"
              stroke="currentColor"
              className="text-muted-foreground text-sm"
            />

            <Tooltip
              cursor={{
                stroke: "var(--primary)",
                strokeOpacity: 0.3,
              }}
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--foreground)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--primary)"
              strokeWidth={3}

              dot={{
                fill: "var(--primary)",
                strokeWidth: 2,
                r: 4,
              }}

              activeDot={{
                r: 6,
                fill: "var(--primary)",
                stroke: "var(--background)",
                strokeWidth: 2,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}