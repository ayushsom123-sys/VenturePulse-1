"use client"

import { Building2, Activity, CheckCircle2, TrendingUp } from "lucide-react"

interface KpiCard {
  label: string
  value: string | number
  subtitle: string
  icon: React.ReactNode
  iconColor: string
}

const kpiData: KpiCard[] = [
  {
    label: "PORTFOLIO SIZE",
    value: 24,
    subtitle: "Active companies",
    icon: <Building2 className="w-4 h-4" />,
    iconColor: "#009784",
  },
  {
    label: "AVG HEALTH",
    value: "83%",
    subtitle: "Across portfolio",
    icon: <Activity className="w-4 h-4" />,
    iconColor: "#009784",
  },
  {
    label: "APPROVED COMPANIES",
    value: 11,
    subtitle: "month",
    icon: <CheckCircle2 className="w-4 h-4" />,
    iconColor: "#009784",
  },
  {
    label: "ACTIVE DEALS",
    value: 23,
    subtitle: "+4 this week",
    icon: <TrendingUp className="w-4 h-4" />,
    iconColor: "#009784",
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {kpiData.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-[#F0F4E8] border border-[#E8E4D0] rounded-xl px-5 py-4 flex flex-col relative"
        >
          <div className="absolute top-4 right-4" style={{ color: kpi.iconColor }}>
            {kpi.icon}
          </div>
          <span className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">
            {kpi.label}
          </span>
          <div className="text-[40px] font-light text-[#1A1525] tracking-tight leading-none mt-1">
            {kpi.value}
          </div>
          <div className="text-[13px] text-[#6B7280] mt-2">
            {kpi.subtitle}
          </div>
        </div>
      ))}
    </div>
  )
}
