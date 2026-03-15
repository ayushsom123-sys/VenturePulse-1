import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNav } from "@/components/dashboard/top-nav"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { PulseChart } from "@/components/dashboard/pulse-chart"
import { PortfolioCompanies } from "@/components/dashboard/portfolio-companies"
import { AlertsPanel } from "@/components/dashboard/alerts-panel"

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen">
        <Sidebar activePage="overview" />
        <div className="flex-1 flex flex-col ml-[220px] min-h-0">
          <TopNav activePage="overview" />
          <main className="flex-1 content-area m-4 p-6 flex flex-col gap-4 overflow-auto rounded-[24px]">
            <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
              <div className="col-span-8 flex flex-col gap-4 min-h-0">
                <KpiCards />
                <div className="flex-1 min-h-[280px]">
                  <PulseChart />
                </div>
                <PortfolioCompanies />
              </div>
              <div className="col-span-4 min-h-0 flex flex-col gap-4">
                <AlertsPanel />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}