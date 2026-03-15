"use client"

import { MoreVertical } from "lucide-react"

interface Company {
  name: string
  health: number
  growth: string
  growthLabel: string
}

const companies: Company[] = [
  {
    name: "NexGen Software",
    health: 95,
    growth: "+45% MoM",
    growthLabel: "Revenue growth",
  },
]

export function PortfolioCompanies() {
  return (
    <div className="bg-[#F0F4E8] border border-[#E8E4D0] rounded-xl p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-[#1A1525]">Portfolio Companies</h3>
          <p className="text-[13px] text-[#6B7280] mt-0.5">Overview of all portfolio health metrics</p>
        </div>
        <button className="bg-[#1A1525] text-white rounded-xl px-5 py-2 text-[13px] font-medium hover:bg-[#2A2535] transition-colors">
          View
        </button>
      </div>

      <div className="space-y-3">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-white/70 border border-[#E8E4D0] rounded-xl p-4 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#009784]/10 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 14L8 8L12 11L16 5" stroke="#009784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 5H16V8" stroke="#009784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-[#1A1525] text-[15px]">{company.name}</div>
              <div className="text-[13px]">
                <span className="text-[#009784] font-medium">{company.health}%</span>
                <span className="text-[#6B7280] ml-1.5">Health</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="font-medium text-[#1A1525] text-[15px]">{company.growth}</div>
              <div className="text-[13px] text-[#6B7280]">{company.growthLabel}</div>
            </div>
            <button className="p-1.5 hover:bg-[#1A1525]/10 rounded-lg transition-colors flex-shrink-0 text-[#6B7280]">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
