"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const riskData = [
  { name: "Low Risk", value: 42, color: "#009784" },
  { name: "Medium Risk", value: 35, color: "#F9C4C4" },
  { name: "High Risk", value: 23, color: "#E07B5B" },
]

export function RiskDistributionCard() {
  return (
    <div className="bg-[#F0F4E8] rounded-xl p-5 border border-[#E8E4D0]">
      <div className="flex items-center gap-2 mb-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#009784]">
          <path d="M3 12L7 8L11 14L15 6L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3 className="text-base font-semibold text-[#1A1525]">Portfolio Risk Distribution</h3>
      </div>
      <p className="text-sm text-[#6B7280] mb-4">Invested portfolio by risk category</p>

      <div className="flex items-center gap-6">
        <div className="w-[180px] h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-4">
          {riskData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-[#1A1525]">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-2 rounded-full bg-[#E5E7EB] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
                <span className="text-sm font-medium text-[#1A1525] w-8 text-right">{item.value}%</span>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-[#E8E4D0] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B7280] uppercase tracking-wide">Total AUM</span>
              <span className="text-sm font-semibold text-[#1A1525]">$142M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B7280] uppercase tracking-wide">Companies</span>
              <span className="text-sm font-semibold text-[#1A1525]">24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
