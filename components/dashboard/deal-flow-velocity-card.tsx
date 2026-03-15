"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Legend } from "recharts"

const dealFlowData = [
  { month: "Sep", saas: 25, medtech: 30, fintech: 20, deeptech: 10, biotech: 8 },
  { month: "Oct", saas: 28, medtech: 32, fintech: 18, deeptech: 12, biotech: 10 },
  { month: "Nov", saas: 30, medtech: 28, fintech: 22, deeptech: 15, biotech: 12 },
  { month: "Dec", saas: 32, medtech: 30, fintech: 24, deeptech: 14, biotech: 10 },
  { month: "Jan", saas: 35, medtech: 32, fintech: 22, deeptech: 16, biotech: 12 },
  { month: "Feb", saas: 38, medtech: 35, fintech: 25, deeptech: 18, biotech: 14 },
]

export function DealFlowVelocityCard() {
  return (
    <div className="bg-[#F0F4E8] rounded-xl p-5 border border-[#E8E4D0]">
      <div className="flex items-center gap-2 mb-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#009784]">
          <path d="M3 12L7 8L11 14L15 6L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3 className="text-base font-semibold text-[#1A1525]">Deal Flow Velocity</h3>
      </div>
      <p className="text-sm text-[#6B7280] mb-4">Incoming pitch decks by industry — Last 6 months</p>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dealFlowData} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} domain={[0, 120]} ticks={[0, 30, 60, 90, 120]} />
            <ReferenceLine y={30} stroke="#E5E7EB" />
            <ReferenceLine y={60} stroke="#E5E7EB" />
            <ReferenceLine y={90} stroke="#E5E7EB" />
            <ReferenceLine y={120} stroke="#E5E7EB" />
            <Bar dataKey="saas" stackId="a" fill="#009784" radius={[0, 0, 0, 0]} />
            <Bar dataKey="medtech" stackId="a" fill="#1067A0" radius={[0, 0, 0, 0]} />
            <Bar dataKey="fintech" stackId="a" fill="#E07B5B" radius={[0, 0, 0, 0]} />
            <Bar dataKey="deeptech" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]} />
            <Bar dataKey="biotech" stackId="a" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#009784]" />
          <span className="text-xs text-[#6B7280]">SaaS</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#1067A0]" />
          <span className="text-xs text-[#6B7280]">MedTech</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#E07B5B]" />
          <span className="text-xs text-[#6B7280]">FinTech</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#F59E0B]" />
          <span className="text-xs text-[#6B7280]">DeepTech</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#8B5CF6]" />
          <span className="text-xs text-[#6B7280]">BioTech</span>
        </div>
      </div>
    </div>
  )
}
