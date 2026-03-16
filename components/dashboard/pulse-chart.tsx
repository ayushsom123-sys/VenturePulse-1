"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts"
import Link from "next/link"

// Bar data: 3 bars above 85% threshold, rest below
const barData = [
  { x: 1, y: 65 },
  { x: 2, y: 88 },
  { x: 3, y: 72 },
  { x: 4, y: 91 },
  { x: 5, y: 58 },
  { x: 6, y: 70 },
  { x: 7, y: 63 },
  { x: 8, y: 87 },
  { x: 9, y: 75 },
  { x: 10, y: 60 },
]

const THRESHOLD = 85

export function PulseChart() {
  return (
    <div className="bg-[#F0F4E8] border border-[#E8E4D0] rounded-xl p-5 flex flex-col h-full">
      <div className="flex items-center justify-end mb-3">
        <Link href="/deal-flow" className="bg-[#1A1525] text-white rounded-xl px-4 py-2 text-[13px] font-medium hover:bg-[#2A2535] transition-colors">
          Pulse Triage
        </Link>
      </div>

      <div className="flex-1 min-h-0">
        <div className="text-[11px] text-[#6B7280] mb-2">
          Pulse score - Y  Pitch decks - X
        </div>

        <div className="h-[calc(100%-32px)]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 25, right: 40, left: -5, bottom: 5 }}
              barCategoryGap="20%"
            >
              <ReferenceLine y={80} stroke="#E8E4D0" strokeDasharray="3 3" />
              <ReferenceLine y={100} stroke="#E8E4D0" strokeDasharray="3 3" />
              <ReferenceLine y={60} stroke="#E8E4D0" strokeDasharray="3 3" />
              <ReferenceLine y={40} stroke="#E8E4D0" strokeDasharray="3 3" />
              {/* 85% threshold line */}
              <ReferenceLine
                y={THRESHOLD}
                stroke="#EF4444"
                strokeDasharray="4 4"
                strokeWidth={2}
                label={{
                  value: "85%",
                  position: "right",
                  fill: "#EF4444",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              />

              <XAxis
                dataKey="x"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 11 }}
                tickFormatter={(value) => `${value}%`}
                ticks={[0, 40, 60, 80, 100]}
                domain={[0, 100]}
                width={45}
              />
              <Bar
                dataKey="y"
                radius={[4, 4, 0, 0]}
                maxBarSize={38}
              >
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.y >= THRESHOLD ? "#009784" : "rgba(0,151,132,0.35)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="text-[13px] text-[#6B7280] pt-2 text-center">
        Pulse score filtered pitch deck
      </div>
    </div>
  )
}
