"use client"

import { ChevronRight } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

interface CompanyHealthCardProps {
  initials: string
  name: string
  status: "runway-risk" | "on-track" | "monitoring"
  roiData: { month: string; value: number }[]
  capitalBurnData: { quarter: string; capital: number; burn: number }[]
}

export function CompanyHealthCard({
  initials,
  name,
  status,
  roiData,
  capitalBurnData,
}: CompanyHealthCardProps) {
  const statusConfig = {
    "runway-risk": {
      label: "Runway Risk",
      bgColor: "bg-[#FEE2E2]",
      textColor: "text-[#DC2626]",
    },
    "on-track": {
      label: "On Track",
      bgColor: "bg-[#D1FAE5]",
      textColor: "text-[#059669]",
    },
    monitoring: {
      label: "Monitoring",
      bgColor: "bg-[#FEF3C7]",
      textColor: "text-[#D97706]",
    },
  }

  const currentStatus = statusConfig[status]
  const maxRoi = Math.max(...roiData.map((d) => d.value))
  const midRoi = maxRoi / 2
  const maxCapitalBurn = Math.max(...capitalBurnData.map((d) => Math.max(d.capital, d.burn)))
  const midCapitalBurn = maxCapitalBurn / 2

  return (
    <div className="bg-[#F0F4E8] rounded-2xl p-5 border border-[#E8E4D0] shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#009784] flex items-center justify-center">
            <span className="text-white text-sm font-bold">{initials}</span>
          </div>
          <span className="text-[#1A1525] font-medium text-[15px]">{name}</span>
        </div>
        <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${currentStatus.bgColor} ${currentStatus.textColor}`}>
          {currentStatus.label}
        </span>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1 bg-[#FAFAF5] rounded-xl p-3 border border-[#E8E4D0]">
          <p className="text-[10px] text-[#9CA3AF] font-medium tracking-wider mb-0.5">ROI TRAJECTORY</p>
          <p className="text-sm font-semibold text-[#1A1525] mb-1">{maxRoi.toFixed(1)}</p>
          <div className="h-[70px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={roiData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: "#9CA3AF" }} interval={0} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: "#9CA3AF" }} domain={[0, maxRoi * 1.1]} ticks={[0, midRoi, maxRoi]} tickFormatter={(v) => v.toFixed(1)} width={30} />
                <ReferenceLine y={midRoi} stroke="#E5E7EB" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="value" stroke="#009784" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex-1 bg-[#FAFAF5] rounded-xl p-3 border border-[#E8E4D0]">
          <p className="text-[10px] text-[#9CA3AF] font-medium tracking-wider mb-0.5">CAPITAL VS BURN</p>
          <p className="text-sm font-semibold text-[#1A1525] mb-1">{Math.round(maxCapitalBurn)}</p>
          <div className="h-[70px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={capitalBurnData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }} barGap={1}>
                <XAxis dataKey="quarter" axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: "#9CA3AF" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: "#9CA3AF" }} domain={[0, maxCapitalBurn * 1.1]} ticks={[0, midCapitalBurn, maxCapitalBurn]} tickFormatter={(v) => Math.round(v).toString()} width={30} />
                <ReferenceLine y={midCapitalBurn} stroke="#E5E7EB" strokeDasharray="3 3" />
                <Bar dataKey="capital" fill="#009784" radius={[2, 2, 0, 0]} barSize={10} />
                <Bar dataKey="burn" fill="#F472B6" radius={[2, 2, 0, 0]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-[#1A1525] hover:bg-[#2A2535] text-white rounded-xl py-3 h-auto flex items-center justify-center gap-2 text-sm font-medium"
      >
        Deep dive
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
