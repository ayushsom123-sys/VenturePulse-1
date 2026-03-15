"use client"

import { useState, useRef, useEffect } from "react"
import { AlertTriangle, Send, ChevronDown, FileEdit, Users, MessageSquare, List, FileText, Bell } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, ReferenceLine } from "recharts"

const chartData = [
  { x: 0, roi: 520, burn: 280 },
  { x: 1, roi: 680, burn: 320 },
  { x: 2, roi: 750, burn: 380 },
  { x: 3, roi: 720, burn: 420 },
  { x: 4, roi: 880, burn: 280 },
  { x: 5, roi: 950, burn: 340 },
  { x: 6, roi: 780, burn: 380 },
  { x: 7, roi: 920, burn: 320 },
  { x: 8, roi: 1020, burn: 400 },
  { x: 9, roi: 850, burn: 280 },
]

const GENERATED_EMAIL = {
  subject: "Urgent: Strategic Runway Review — EcoLogic",
  body: `Hi John,

VenturePulse has flagged a Q1 burn spike, reducing your runway to under 4 months. While your growth is impressive, we need a stabilized 18-month plan. Let's hop on a 15-minute Zoom this Wednesday or Thursday to discuss:

• Burn Drivers: Pinpointing the recent spike.
• Runway Extension: Reviewing bridge options.
• Series B Strategy: Adjusting our outreach timeline.

Best,
Minakshi`,
}

const actionSuggestions = [
  { icon: FileEdit, label: "Draft Outreach", color: "bg-[#009784]/10", iconColor: "text-[#009784]" },
  { icon: Users, label: "Tone Adjustment", color: "bg-[#B8A44C]/10", iconColor: "text-[#B8A44C]" },
  { icon: MessageSquare, label: "Follow-Up", color: "bg-[#F97316]/10", iconColor: "text-[#F97316]" },
  { icon: List, label: "Summarization", color: "bg-[#1A1525]/10", iconColor: "text-[#1A1525]" },
  { icon: FileText, label: "Suggested Attach.", color: "bg-[#F59E0B]/10", iconColor: "text-[#F59E0B]" },
  { icon: Bell, label: "Auto Updates", color: "bg-[#9CA3AF]/10", iconColor: "text-[#9CA3AF]", hasNotification: true },
]

type PanelView = "default" | "suggestions" | "thinking" | "email" | "sent"

export function AlertsPanel() {
  const [view, setView] = useState<PanelView>("default")
  const [showAnalysis, setShowAnalysis] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (view !== "thinking") return
    const t = setTimeout(() => setView("email"), 2200)
    return () => clearTimeout(t)
  }, [view])

  const handleInputFocus = () => {
    if (view === "default" || view === "email") setView("suggestions")
  }

  const handleSelectDraftOutreach = () => {
    setView("thinking")
    setInputValue("")
  }

  const handleSendEmail = () => {
    setView("sent")
  }

  useEffect(() => {
    if (view !== "suggestions") return
    const onDocClick = (e: MouseEvent) => {
      if (suggestionsRef.current?.contains(e.target as Node) || inputRef.current?.closest("div")?.contains(e.target as Node)) return
      setView("default")
    }
    document.addEventListener("click", onDocClick, true)
    return () => document.removeEventListener("click", onDocClick, true)
  }, [view])

  const handleSendClick = () => {
    if (view === "email") handleSendEmail()
  }

  return (
    <div className="relative bg-[#F0F4E8] border border-[#E8E4D0] rounded-xl p-5 flex flex-col h-full min-h-0">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 flex-shrink-0">
        <h3 className="text-base font-semibold text-[#1A1525]">
          <span className="text-[#E07B5B]">EcoLogic</span> needs attention
        </h3>
        <button type="button" className="bg-[#1A1525] text-white rounded-xl px-4 py-2 text-[13px] font-medium hover:bg-[#2A2535] transition-colors">
          Portfolio
        </button>
      </div>

      {/* Alert row */}
      <div className="flex items-center justify-between bg-white/70 border border-[#E8E4D0] rounded-xl px-4 py-3 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-[13px] font-medium text-[#1A1525]">Portfolio alert 01</span>
        </div>
        <span className="text-[13px] text-[#E07B5B]">Burn rate spiked, &lt;4m runway.</span>
      </div>

      {/* Chart - always visible in default */}
      {view === "default" && (
        <div className="h-[160px] bg-white/50 rounded-xl p-3 mb-4 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
              <XAxis dataKey="x" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#6B7280" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#6B7280" }} domain={[0, 1000]} ticks={[0, 250, 500, 750, 1000]} width={32} />
              <ReferenceLine y={500} stroke="#E8E4D0" strokeDasharray="3 3" />
              <ReferenceLine y={750} stroke="#E8E4D0" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="roi" stroke="#009784" strokeWidth={2} dot={{ fill: "#009784", strokeWidth: 0, r: 2.5 }} activeDot={{ r: 3 }} />
              <Line type="monotone" dataKey="burn" stroke="#F59E0B" strokeWidth={2} dot={{ fill: "#F59E0B", strokeWidth: 0, r: 2.5 }} activeDot={{ r: 3 }} />
              <Legend verticalAlign="top" align="right" iconType="circle" iconSize={6} wrapperStyle={{ fontSize: "10px" }} formatter={(v) => <span className="text-[10px] text-[#6B7280]">{v === "roi" ? "ROI" : "Burn rate"}</span>} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Pulse recommendations + Show analysis */}
      {(view === "default" || view === "suggestions") && (
        <>
          <div className="flex items-center gap-2 mb-2 flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#009784] shrink-0">
              <path d="M3 10L6 5L9 8L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 3H13V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[13px] font-medium text-[#1A1525]">Pulse recommendations</span>
          </div>
          <div className="bg-white/70 rounded-xl p-3 mb-3 border border-[#E8E4D0] flex-shrink-0">
            <details className="group" open={showAnalysis} onToggle={(e) => setShowAnalysis((e.target as HTMLDetailsElement).open)}>
              <summary className="cursor-pointer text-[13px] text-[#1A1525] font-medium list-none flex items-center gap-1">
                Show analysis
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-[#6B7280]" />
              </summary>
              <p className="mt-2 text-[13px] text-[#6B7280] leading-relaxed">
                &quot;Startup &apos;EcoLogic&apos; current burn rate indicates &lt; 4 months runway remaining. The spike is due to a recent aggressive marketing campaign that hasn&apos;t yet converted to revenue. I recommend immediate founder check-in.&quot;
              </p>
            </details>
          </div>
          {/* 6 action pills */}
          <div className="grid grid-cols-3 gap-2 mb-4 flex-shrink-0">
            {actionSuggestions.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.label === "Draft Outreach" ? handleSelectDraftOutreach : undefined}
                className={`${item.color} rounded-xl p-2.5 flex flex-col items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#E8E4D0]`}
              >
                <div className="relative">
                  <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  {item.hasNotification && <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#EF4444] rounded-full" />}
                </div>
                <span className="text-[10px] font-medium text-[#1A1525] text-center leading-tight">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Thinking state */}
      {view === "thinking" && (
        <div className="flex flex-col items-center justify-center py-8 mb-4 flex-shrink-0">
          <div className="w-12 h-12 rounded-full border-2 border-[#009784]/30 border-t-[#009784] animate-spin mb-3" />
          <span className="text-[13px] text-[#6B7280]">Pulse is thinking</span>
        </div>
      )}

      {/* Generated email card */}
      {view === "email" && (
        <div className="mb-4 flex-shrink-0 border-l-4 border-[#009784] bg-white/80 rounded-r-xl p-4 border border-[#E8E4D0] border-l-4">
          <div className="text-[11px] text-[#6B7280] text-center mb-3">11:15 AM</div>
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-[#009784] flex items-center justify-center text-white text-xs font-semibold shrink-0">MP</div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-[#1A1525] mb-1">{GENERATED_EMAIL.subject}</p>
              <p className="text-[13px] text-[#1A1525] whitespace-pre-wrap leading-relaxed">{GENERATED_EMAIL.body}</p>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button
              type="button"
              onClick={handleSendEmail}
              className="flex items-center gap-2 bg-[#009784] hover:bg-[#009784]/90 text-white rounded-xl px-4 py-2 text-[13px] font-medium"
            >
              <Send className="w-4 h-4" />
              Send to CEO of EcoLogic
            </button>
          </div>
        </div>
      )}

      {/* Sent confirmation */}
      {view === "sent" && (
        <div className="mb-4 flex-shrink-0 bg-[#D1FAE5]/80 border border-[#059669]/30 rounded-xl p-4 text-center">
          <p className="text-[13px] font-medium text-[#059669]">Message sent to CEO of EcoLogic</p>
          <p className="text-[12px] text-[#6B7280] mt-1">Within VenturePulse</p>
        </div>
      )}

      {/* Suggestions dropdown (when input focused) */}
      {view === "suggestions" && (
        <div
          ref={suggestionsRef}
          className="absolute left-5 right-5 bottom-full mb-1 bg-white border border-[#E8E4D0] rounded-xl shadow-lg py-2 z-20 max-h-[200px] overflow-y-auto"
        >
          {actionSuggestions.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => item.label === "Draft Outreach" && handleSelectDraftOutreach()}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#F0F4E8] text-[13px] text-[#1A1525]"
            >
              <item.icon className={`w-4 h-4 shrink-0 ${item.iconColor}`} />
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Ask Pulse input - at bottom */}
      <div className="mt-auto pt-2 flex-shrink-0 relative">
        <div
          className={`flex items-center gap-2 rounded-xl px-4 py-3 border transition-all bg-[#1A1525] border-[#2A2535] ${view === "suggestions" ? "ring-2 ring-[#009784]/40" : ""}`}
          onClick={() => inputRef.current?.focus()}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask Pulse"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleInputFocus}
            className="flex-1 bg-transparent text-[13px] text-white placeholder:text-[#9CA3AF] focus:outline-none min-w-0"
          />
          <span className="text-[13px] text-[#9CA3AF] shrink-0">Thinking</span>
          <button type="button" className="p-1.5 hover:bg-white/10 rounded-lg text-[#9CA3AF] shrink-0" onClick={(e) => { e.stopPropagation(); handleSendClick(); }}>
            <Send className="w-4 h-4" />
          </button>
          <button type="button" className="p-1.5 hover:bg-white/10 rounded-lg text-[#9CA3AF] shrink-0" onClick={(e) => e.stopPropagation()}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 10L6 5L9 8L13 3" stroke="#009784" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 3H13V6" stroke="#009784" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
