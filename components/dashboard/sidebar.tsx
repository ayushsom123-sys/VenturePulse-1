"use client"

import { cn } from "@/lib/utils"
import { LayoutGrid, LineChart as LineChartIcon, Activity, Lightbulb } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  activePage?: "overview" | "deal-flow" | "portfolio-health" | "lab-insights"
}

interface NavItem {
  label: string
  href: string
  id: "overview" | "deal-flow" | "portfolio-health" | "lab-insights"
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/", id: "overview", icon: <LayoutGrid className="w-4 h-4 shrink-0" /> },
  { label: "Deal flow", href: "/deal-flow", id: "deal-flow", icon: <LineChartIcon className="w-4 h-4 shrink-0" /> },
  { label: "Portfolio health", href: "/portfolio-health", id: "portfolio-health", icon: <Activity className="w-4 h-4 shrink-0" /> },
  { label: "Lab-insights", href: "/lab-insights", id: "lab-insights", icon: <Lightbulb className="w-4 h-4 shrink-0" /> },
]

export function Sidebar({ activePage = "overview" }: SidebarProps) {
  return (
    <aside
      className="w-[220px] min-h-screen fixed left-0 top-0 flex flex-col z-10"
      style={{ background: "rgba(26, 21, 37, 0.4)", backdropFilter: "blur(12px)" }}
    >
      {/* Nav items – top */}
      <nav className="flex flex-col items-stretch pt-6 px-3 flex-1">
        {navItems.map((item) => {
          const isActive = activePage === item.id
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-medium transition-colors border-l-[3px] border-transparent",
                isActive
                  ? "bg-[rgba(0,151,132,0.12)] text-[#009784] border-l-[#009784] [&_svg]:text-[#009784]"
                  : "text-[#9CA3AF] [&_svg]:text-[#9CA3AF] hover:text-[#D1D5DB] hover:bg-white/5 [&_svg]:hover:text-[#D1D5DB]"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logo at bottom (Figma: teal lightning + VenturePulse white) */}
      <div className="p-4 flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#009784" className="shrink-0" aria-hidden>
          <path d="M13 2L3 14h6l-4 8 10-12H9l4-8z" />
        </svg>
        <span className="text-white text-sm font-medium tracking-tight">VenturePulse</span>
      </div>
    </aside>
  )
}
