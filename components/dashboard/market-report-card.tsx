"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts"

const marketData = [
  { month: "Sep", saas: 75, medtech: 50, fintech: 65 },
  { month: "Oct", saas: 72, medtech: 52, fintech: 58 },
  { month: "Nov", saas: 70, medtech: 55, fintech: 55 },
  { month: "Dec", saas: 68, medtech: 58, fintech: 52 },
  { month: "Jan", saas: 72, medtech: 60, fintech: 55 },
  { month: "Feb", saas: 70, medtech: 62, fintech: 58 },
]

const insights = [
  {
    text: "SaaS valuations are down 12% this quarter, with median Series A multiples compressing from 15x to 13.2x ARR.",
  },
  {
    text: "MedTech deal velocity is increasing by 28% QoQ, driven by AI-diagnostics and remote monitoring subsectors.",
  },
  {
    text: "FinTech seed-stage activity recovering after a 3-quarter dip. Embedded finance thesis gaining traction.",
  },
]

export function MarketReportCard() {
  return (
    <div className="bg-[#F0F4E8] rounded-xl p-5 border border-[#E8E4D0]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#009784]">
            <path d="M3 12L7 8L11 14L15 6L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-lg font-semibold text-[#1A1525]">Pulse AI Market Report</h3>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-[#E07B5B] border border-[#E07B5B] rounded-lg hover:bg-[#E07B5B]/10 transition-colors">
          Pulse Market Report - Feb 2026
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-[#E8E4D0] hover:bg-white/70 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#009784] mt-0.5 flex-shrink-0">
                <path d="M3 12L7 8L11 14L15 6L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm text-[#1A1525] leading-relaxed">{insight.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/50 rounded-lg border border-[#E8E4D0] p-4">
          <h4 className="text-xs font-semibold text-[#6B7280] mb-3 tracking-wide">MARKET VALUATION TRENDS (INDEX)</h4>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B6B80" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B6B80" }} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                <ReferenceLine y={25} stroke="#E5E7EB" strokeDasharray="3 3" />
                <ReferenceLine y={50} stroke="#E5E7EB" strokeDasharray="3 3" />
                <ReferenceLine y={75} stroke="#E5E7EB" strokeDasharray="3 3" />
                <ReferenceLine y={100} stroke="#E5E7EB" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="saas" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4, fill: "#F59E0B", strokeWidth: 0 }} />
                <Line type="monotone" dataKey="medtech" stroke="#009784" strokeWidth={2} dot={{ r: 4, fill: "#009784", strokeWidth: 0 }} />
                <Line type="monotone" dataKey="fintech" stroke="#E07B5B" strokeWidth={2} dot={{ r: 4, fill: "#E07B5B", strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-xs text-[#6B7280]">SaaS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#009784]" />
              <span className="text-xs text-[#6B7280]">MedTech</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#E07B5B]" />
              <span className="text-xs text-[#6B7280]">FinTech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
