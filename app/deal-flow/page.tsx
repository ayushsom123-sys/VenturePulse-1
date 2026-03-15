"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNav } from "@/components/dashboard/top-nav"
import { DealFlowTitle } from "@/components/dashboard/deal-flow-header"
import { DealCard } from "@/components/dashboard/deal-card"
import { DownloadToast } from "@/components/dashboard/download-toast"
import { ChevronRight } from "lucide-react"

const highPriorityDeals = [
  {
    company: "HealthScout",
    sector: "MedTech",
    stage: "SERIES A",
    ask: "$8M",
    pulseScore: 92,
    linkedinInsight: "Recent Hiring: Poached 2 Senior Engineers from Medtronic",
  },
  {
    company: "NovaPay",
    sector: "FinTech",
    stage: "SEED",
    ask: "$3.5M",
    pulseScore: 88,
    linkedinInsight: "Recent Hiring: VP of Engineering from Stripe joined last week",
  },
  {
    company: "CloudNest",
    sector: "SaaS/Infra",
    stage: "SERIES A",
    ask: "$12M",
    pulseScore: 85,
    linkedinInsight: "Recent Hiring: Poached 3 ML Researchers from Google DeepMind",
  },
  {
    company: "BioGenx",
    sector: "BioTech",
    stage: "SERIES B",
    ask: "$22M",
    pulseScore: 91,
    linkedinInsight: "Recent Hiring: Senior science Officer from Moderna joined this week",
  },
  {
    company: "AeroSync",
    sector: "DeepTech",
    stage: "SEED",
    ask: "$5M",
    pulseScore: 83,
    linkedinInsight: "Recent Hiring: Poached Lead Architect from SpaceX",
  },
  {
    company: "DataForge",
    sector: "AI/ML",
    stage: "SERIES A",
    ask: "$10M",
    pulseScore: 86,
    linkedinInsight: "Recent Hiring: 4 Senior Data Scientists from Palantir",
  },
]

const standardDeals = [
  { company: "LegalPilot", sector: "LegalTech", pulseScore: 72, color: "#F59E0B" },
  { company: "GreenWave", sector: "CleanTech", pulseScore: 68, color: "#6B7280" },
  { company: "ShopLens", sector: "E-Commerce", pulseScore: 75, color: "#F59E0B" },
  { company: "CryptoVault", sector: "Web3", pulseScore: 55, color: "#6B7280" },
  { company: "EduPath", sector: "EdTech", pulseScore: 63, color: "#6B7280" },
  { company: "FitPulse", sector: "HealthTech", pulseScore: 78, color: "#F59E0B" },
  { company: "AgriBot", sector: "AgTech", pulseScore: 60, color: "#6B7280" },
  { company: "TravelMesh", sector: "Travel", pulseScore: 71, color: "#F59E0B" },
]

export default function DealFlowPage() {
  const [toastMessage, setToastMessage] = useState("")
  const [isToastVisible, setIsToastVisible] = useState(false)

  const showToast = (message: string) => {
    setToastMessage(message)
    setIsToastVisible(true)
  }

  const handleDownload = () => {
    showToast("Downloaded successfully")
  }

  const handleDownloadAll = () => {
    showToast("Downloaded all successfully")
  }

  return (
    <div className="min-h-screen">
      <DownloadToast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />

      <div className="flex min-h-screen">
        <Sidebar activePage="deal-flow" />

        <div className="flex-1 flex flex-col ml-[220px] min-h-0">
          <TopNav activePage="deal-flow" />

          <main className="flex-1 content-area m-4 p-6 rounded-[24px] overflow-auto">
            <DealFlowTitle onDownloadAll={handleDownloadAll} />

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="font-semibold text-[#1A1525]">High-Priority Decks</span>
                <span className="text-sm text-[#6B7280]">Pulse Score {'>'} 80%</span>
                <span className="px-2.5 py-0.5 bg-[#009784] text-white text-xs font-medium rounded-full">
                  6 DEALS
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {highPriorityDeals.map((deal, index) => (
                  <DealCard key={index} {...deal} onDownload={handleDownload} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="font-semibold text-[#1A1525]">Standard Deal Flow</span>
                <span className="text-sm text-[#6B7280]">Pulse Score {'<'} 80%</span>
                <span className="px-2.5 py-0.5 bg-[#009784] text-white text-xs font-medium rounded-full">
                  8 DEALS
                </span>
              </div>

              <div className="bg-white rounded-xl border border-[#E8E4D0] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E8E4D0]">
                      <th className="text-left py-3 px-6 text-sm font-semibold text-[#1A1525]">Company</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-[#1A1525]">Sector</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-[#1A1525]">Pulse Score</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-[#1A1525]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standardDeals.map((deal, index) => (
                      <tr key={index} className="border-b border-[#E8E4D0] last:border-b-0 hover:bg-[#F5F5E8]">
                        <td className="py-3 px-6 text-sm text-[#1A1525]">{deal.company}</td>
                        <td className="py-3 px-6 text-sm text-[#6B7280]">{deal.sector}</td>
                        <td className="py-3 px-6">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: deal.color }} />
                            <span className="text-sm" style={{ color: deal.color }}>{deal.pulseScore}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-6">
                          <button className="flex items-center gap-1 text-sm text-[#1A1525] hover:text-[#009784] transition-colors">
                            Review
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
