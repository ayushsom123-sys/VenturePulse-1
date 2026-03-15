"use client"

import { Search, HelpCircle, SlidersHorizontal, LayoutGrid, TrendingUp, Activity, Lightbulb, User } from "lucide-react"
interface TopNavProps {
  activePage: "overview" | "deal-flow" | "portfolio-health" | "lab-insights"
}

const pages: { id: "overview" | "deal-flow" | "portfolio-health" | "lab-insights"; label: string; href: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Overview", href: "/", icon: <LayoutGrid className="w-4 h-4" /> },
  { id: "deal-flow", label: "Deal flow", href: "/deal-flow", icon: <TrendingUp className="w-4 h-4" /> },
  { id: "portfolio-health", label: "Portfolio health", href: "/portfolio-health", icon: <Activity className="w-4 h-4" /> },
  { id: "lab-insights", label: "Lab-insights", href: "/lab-insights", icon: <Lightbulb className="w-4 h-4" /> },
]

export function TopNav({ activePage }: TopNavProps) {
  const active = pages.find((p) => p.id === activePage) ?? pages[0]

  return (
    <header className="flex items-center gap-4 w-full bg-[#1A1525]/95 backdrop-blur-sm border-b border-white/10 px-4 py-3">
      <div className="flex items-center gap-3 flex-1">
        <div className="flex items-center gap-2 rounded-xl bg-[#2A2535] px-4 py-2 text-white">
          {active.icon}
          <span className="text-sm font-medium">{active.label}</span>
        </div>
        <div className="relative max-w-[320px] flex-1 ml-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1A1525]/80 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#009784]/50"
          />
        </div>
      </div>

      {/* Right: Help, Advanced filtering, My account */}
      <div className="flex items-center gap-2">
        <button type="button" className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#D1D5DB] rounded-xl px-4 py-2 transition-colors">
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Help</span>
        </button>
        <button type="button" className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#D1D5DB] rounded-xl px-4 py-2 transition-colors">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-medium">Advanced filtering</span>
        </button>
        <button type="button" className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#D1D5DB] rounded-xl px-4 py-2 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium">My account</span>
        </button>
      </div>
    </header>
  )
}
