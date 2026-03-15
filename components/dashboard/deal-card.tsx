"use client"

import { Download } from "lucide-react"

interface DealCardProps {
  company: string
  sector: string
  stage: string
  ask: string
  pulseScore: number
  linkedinInsight: string
  onDownload: () => void
}

export function DealCard({
  company,
  sector,
  stage,
  ask,
  pulseScore,
  linkedinInsight,
  onDownload,
}: DealCardProps) {
  return (
    <div className="bg-[#F0F4E8] rounded-xl border border-[#E8E4D0] p-4 flex flex-col">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold text-[#1A1525]">{company}</h3>
          <span className="text-[#6B7280] text-sm">|</span>
          <span className="text-[#6B7280] text-sm">{sector}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full border-2 border-[#009784]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#009784]">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#009784] font-semibold text-sm">{pulseScore}%</span>
          </div>
          <button
            onClick={onDownload}
            className="w-9 h-9 rounded-lg border border-[#E8E4D0] flex items-center justify-center hover:bg-[#E8E4D0] text-[#1A1525] transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-medium text-[#6B7280] uppercase">{stage}</span>
        <span className="text-xs font-medium text-[#009784]">ASK: {ask}</span>
      </div>

      <div className="flex items-start gap-2 bg-[#F5F5E8] rounded-lg px-3 py-2 mb-3 flex-1 border border-[#E8E4D0]">
        <div className="w-5 h-5 bg-[#1067A0] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-[10px] font-bold">in</span>
        </div>
        <p className="text-xs text-[#1A1525] leading-relaxed">{linkedinInsight}</p>
      </div>

      <button
        type="button"
        className="w-full bg-[#1A1525] hover:bg-[#2A2535] text-white rounded-lg h-10 font-medium"
      >
        View
      </button>
    </div>
  )
}
