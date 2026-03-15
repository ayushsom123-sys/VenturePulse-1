"use client"

import { Search, HelpCircle, SlidersHorizontal, ChevronDown, User } from "lucide-react"

interface FilterChip {
  label: string
  value: string
}

const filters: FilterChip[] = [
  { label: "Stage", value: "Seed" },
  { label: "Industry", value: "All" },
  { label: "Match", value: "80%+" },
]

export function Header() {
  return (
    <header className="flex flex-col gap-2">
      {/* Top row */}
      <div className="flex items-center gap-3">
        {/* Search bar */}
        <div className="flex-1 relative max-w-[520px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1A1525]/70 backdrop-blur-sm border border-white/[0.08] rounded-xl py-2.5 pl-11 pr-4 text-[13px] text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#009784]/50"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button className="text-[#FFFFFF] hover:bg-white/5 rounded-xl px-4 py-2.5 flex items-center gap-2 transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span className="text-[13px] font-medium">Help</span>
          </button>

          <button className="text-[#FFFFFF] hover:bg-white/5 rounded-xl px-4 py-2.5 flex items-center gap-2 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-[13px] font-medium">Advanced filtering</span>
          </button>

          <button className="text-[#FFFFFF] hover:bg-white/5 rounded-xl px-4 py-2.5 flex items-center gap-2 transition-colors">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[13px] font-medium">My account</span>
          </button>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex items-center gap-2 pl-1">
        {filters.map((filter) => (
          <button
            key={filter.label}
            className="bg-[#1A1525]/80 hover:bg-[#1A1525] text-white rounded-full px-4 py-1.5 text-[13px] flex items-center gap-1.5 transition-colors border border-white/[0.05]"
          >
            <span className="text-[#6B6B80]">{filter.label}:</span>
            <span className="font-medium">{filter.value}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#6B6B80] ml-0.5" />
          </button>
        ))}
      </div>
    </header>
  )
}
