"use client"

import { Search, HelpCircle, SlidersHorizontal, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioHeader() {
  return (
    <header className="flex items-center gap-3 mb-4">
      {/* Search Bar */}
      <div className="flex-1 flex items-center gap-3 bg-[#1A1525] border border-white/[0.06] rounded-xl px-4 py-2.5 max-w-[600px]">
        <Search className="w-5 h-5 text-[#6B6B80]" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent text-[#FFFFFF] placeholder:text-[#6B6B80] outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-[#1A1525] border border-white/[0.06] hover:bg-white/5 text-[#A0A0B0] rounded-xl px-4 py-2.5 h-auto"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Help</span>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-[#009784] hover:bg-[#009784]/90 text-white rounded-xl px-4 py-2.5 h-auto"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-medium">Advanced filtering</span>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-[#1A1525] border border-white/[0.06] hover:bg-white/5 text-[#A0A0B0] rounded-xl px-4 py-2.5 h-auto"
        >
          <div className="w-6 h-6 rounded-full bg-[#009784] flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-medium">My account</span>
        </Button>
      </div>
    </header>
  )
}
