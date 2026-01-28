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
    <div className="bg-slate-800 p-6 rounded-xl mt-10">
      <h3 className="mb-4 text-lg font-semibold">
        Receita Mensal
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#38bdf8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
