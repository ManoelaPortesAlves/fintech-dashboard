"use client";

import { useState } from "react";
import { Metrics } from "@/components/dashboard/Metrics";
import { ContractsTable } from "@/components/dashboard/ContractsTable";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { Toast } from "@/components/ui/Toast";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Visão Geral</h1>

      <Metrics />
      <RevenueChart />
      <ContractsTable />
    </div>
  );
}
