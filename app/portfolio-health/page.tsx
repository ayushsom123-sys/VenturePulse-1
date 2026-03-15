"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNav } from "@/components/dashboard/top-nav"
import { CompanyHealthCard } from "@/components/dashboard/company-health-card"
import { DownloadToast } from "@/components/dashboard/download-toast"
import { TrendingUp, ChevronRight } from "lucide-react"

const companiesData = [
  {
    initials: "EL",
    name: "EcoLogic",
    status: "runway-risk" as const,
    roiData: [
      { month: "JAN", value: 0 },
      { month: "FEB", value: 0.4 },
      { month: "MAR", value: 0.6 },
      { month: "APR", value: 0.9 },
      { month: "MAY", value: 1.2 },
      { month: "JUN", value: 1.8 },
    ],
    capitalBurnData: [
      { quarter: "Q1", capital: 3, burn: 2 },
      { quarter: "Q2", capital: 4, burn: 3 },
      { quarter: "Q3", capital: 5, burn: 4 },
      { quarter: "Q4", capital: 6, burn: 7 },
    ],
  },
  {
    initials: "NG",
    name: "NexGen Software",
    status: "on-track" as const,
    roiData: [
      { month: "JAN", value: 0 },
      { month: "FEB", value: 0.5 },
      { month: "MAR", value: 1.0 },
      { month: "APR", value: 1.4 },
      { month: "MAY", value: 2.2 },
      { month: "JUN", value: 3.2 },
    ],
    capitalBurnData: [
      { quarter: "Q1", capital: 4, burn: 2 },
      { quarter: "Q2", capital: 5, burn: 3 },
      { quarter: "Q3", capital: 6, burn: 3 },
      { quarter: "Q4", capital: 7, burn: 4 },
    ],
  },
  {
    initials: "AS",
    name: "AeroSync",
    status: "runway-risk" as const,
    roiData: [
      { month: "JAN", value: 0 },
      { month: "FEB", value: 0.3 },
      { month: "MAR", value: 0.5 },
      { month: "APR", value: 0.7 },
      { month: "MAY", value: 1.0 },
      { month: "JUN", value: 1.6 },
    ],
    capitalBurnData: [
      { quarter: "Q1", capital: 1.5, burn: 2.5 },
      { quarter: "Q2", capital: 2, burn: 3 },
      { quarter: "Q3", capital: 2, burn: 3.2 },
      { quarter: "Q4", capital: 1.8, burn: 3.5 },
    ],
  },
  {
    initials: "NP",
    name: "NovaPay",
    status: "on-track" as const,
    roiData: [
      { month: "JAN", value: 0 },
      { month: "FEB", value: 0.6 },
      { month: "MAR", value: 1.2 },
      { month: "APR", value: 1.8 },
      { month: "MAY", value: 2.6 },
      { month: "JUN", value: 3.8 },
    ],
    capitalBurnData: [
      { quarter: "Q1", capital: 2, burn: 1 },
      { quarter: "Q2", capital: 2.5, burn: 1.5 },
      { quarter: "Q3", capital: 3, burn: 1.8 },
      { quarter: "Q4", capital: 3.2, burn: 2 },
    ],
  },
  {
    initials: "BG",
    name: "BioGenX",
    status: "monitoring" as const,
    roiData: [
      { month: "JAN", value: 0 },
      { month: "FEB", value: 0.4 },
      { month: "MAR", value: 0.8 },
      { month: "APR", value: 1.2 },
      { month: "MAY", value: 1.8 },
      { month: "JUN", value: 2.4 },
    ],
    capitalBurnData: [
      { quarter: "Q1", capital: 4, burn: 3 },
      { quarter: "Q2", capital: 6, burn: 5 },
      { quarter: "Q3", capital: 8, burn: 7 },
      { quarter: "Q4", capital: 10, burn: 11 },
    ],
  },
  {
    initials: "CN",
    name: "CloudNest",
    status: "on-track" as const,
    roiData: [
      { month: "JAN", value: 0 },
      { month: "FEB", value: 0.5 },
      { month: "MAR", value: 0.9 },
      { month: "APR", value: 1.4 },
      { month: "MAY", value: 2.0 },
      { month: "JUN", value: 2.8 },
    ],
    capitalBurnData: [
      { quarter: "Q1", capital: 3, burn: 2 },
      { quarter: "Q2", capital: 4, burn: 3 },
      { quarter: "Q3", capital: 5, burn: 4 },
      { quarter: "Q4", capital: 6, burn: 5 },
    ],
  },
]

export default function PortfolioHealthPage() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  })

  const handleDownloadAll = () => {
    setToast({ show: true, message: "Downloaded all successfully" })
  }

  return (
    <div className="min-h-screen w-full">
      <DownloadToast
        isVisible={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: "" })}
      />

      <div className="flex min-h-screen">
        <Sidebar activePage="portfolio-health" />

        <div className="flex-1 flex flex-col ml-[220px] min-h-0">
          <TopNav activePage="portfolio-health" />

          <main className="flex-1 content-area m-4 p-6 rounded-[24px] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold text-[#1A1525]">Portfolio Health</h1>
                <p className="text-sm text-[#6B7280] mt-1">
                  Performance tracking across all portfolio companies
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#D1FAE5] border border-[#059669] rounded-xl px-4 py-2">
                  <TrendingUp className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-medium text-[#059669]">Avg ROI: 2.1x</span>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadAll}
                  className="flex items-center gap-2 bg-[#1A1525] hover:bg-[#2A2535] text-white rounded-xl px-4 py-2 h-auto text-sm font-medium"
                >
                  View all
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {companiesData.map((company) => (
                <CompanyHealthCard
                  key={company.initials}
                  initials={company.initials}
                  name={company.name}
                  status={company.status}
                  roiData={company.roiData}
                  capitalBurnData={company.capitalBurnData}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
