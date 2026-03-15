"use client"

import { Download } from "lucide-react"

interface DealFlowTitleProps {
  onDownloadAll: () => void
}

export function DealFlowTitle({ onDownloadAll }: DealFlowTitleProps) {
  return (
    <div className="flex items-start justify-between pb-4 mb-4">
      <div>
        <h2 className="text-2xl font-semibold text-[#1A1525]">AI Pulse Triage</h2>
        <p className="text-sm text-[#6B7280] mt-0.5">Prioritized pitch decks</p>
      </div>
      <button
        type="button"
        onClick={onDownloadAll}
        className="h-10 px-5 bg-[#1A1525] hover:bg-[#2A2535] text-white rounded-xl gap-2 flex items-center font-medium text-sm"
      >
        <Download className="w-4 h-4" />
        Download all
      </button>
    </div>
  )
}
