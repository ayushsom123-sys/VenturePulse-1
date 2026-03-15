"use client"

import { Bell } from "lucide-react"

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between w-full py-3">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="p-2 text-[#6B6B80] hover:text-[#A0A0B0] transition-colors rounded-lg hover:bg-white/5"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <div
          className="w-9 h-9 rounded-full bg-[#1A1525] border border-white/10 flex items-center justify-center text-white text-sm font-medium"
          aria-hidden
        >
          M
        </div>
      </div>
    </header>
  )
}
