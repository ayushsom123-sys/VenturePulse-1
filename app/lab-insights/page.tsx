import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNav } from "@/components/dashboard/top-nav"
import { MarketReportCard } from "@/components/dashboard/market-report-card"
import { DealFlowVelocityCard } from "@/components/dashboard/deal-flow-velocity-card"
import { RiskDistributionCard } from "@/components/dashboard/risk-distribution-card"

export default function LabInsightsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen">
        <Sidebar activePage="lab-insights" />

        <div className="flex-1 flex flex-col ml-[220px] min-h-0">
          <TopNav activePage="lab-insights" />

          <main className="flex-1 content-area m-4 p-6 rounded-[24px] overflow-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-[#1A1525]">Insight Lab</h1>
              <p className="text-sm text-[#6B7280] mt-1">Macro strategy and market intelligence</p>
            </div>

            <div className="space-y-5">
              <MarketReportCard />
              <div className="grid grid-cols-2 gap-5">
                <DealFlowVelocityCard />
                <RiskDistributionCard />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
