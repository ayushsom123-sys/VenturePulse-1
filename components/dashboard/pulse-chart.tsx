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

// Bar data matching the wave pattern in the reference image
const barData = [
  { x: 1, y: 78 },
  { x: 2, y: 52 },
  { x: 3, y: 48 },
  { x: 4, y: 72 },
  { x: 5, y: 58 },
  { x: 6, y: 68 },
  { x: 7, y: 54 },
  { x: 8, y: 74 },
  { x: 9, y: 85, highlighted: true },
  { x: 10, y: 70 },
]

export function PulseChart() {
  return (
    <div className="bg-[#F0F4E8] border border-[#E8E4D0] rounded-xl p-5 flex flex-col h-full">
      <div className="flex items-center justify-end mb-3">
        <button className="bg-[#1A1525] text-white rounded-xl px-4 py-2 text-[13px] font-medium hover:bg-[#2A2535] transition-colors">
          Pulse Triage
        </button>
      </div>

      <div className="flex-1 min-h-0">
        <div className="text-[11px] text-[#6B7280] mb-2">
          Pulse score - Y  Pitch decks - X
        </div>

        <div className="h-[calc(100%-32px)]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 25, right: 20, left: -5, bottom: 5 }}
              barCategoryGap="20%"
            >
              <ReferenceLine y={80} stroke="#E8E4D0" strokeDasharray="3 3" />
              <ReferenceLine y={100} stroke="#E8E4D0" strokeDasharray="3 3" />
              <ReferenceLine y={60} stroke="#E8E4D0" strokeDasharray="3 3" />
              <ReferenceLine y={40} stroke="#E8E4D0" strokeDasharray="3 3" />

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
                label={({ x, y, value, index }) => {
                  const entry = barData[index]
                  if (entry?.highlighted) {
                    return (
                      <g>
                        <rect
                          x={x - 18}
                          y={y - 22}
                          width={36}
                          height={18}
                          rx={4}
                          fill="#009784"
                        />
                        <text
                          x={x}
                          y={y - 10}
                          textAnchor="middle"
                          fill="white"
                          fontSize={11}
                          fontWeight={600}
                        >
                          {value}%
                        </text>
                      </g>
                    )
                  }
                  return null
                }}
              >
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill="#009784"
                    fillOpacity={entry.highlighted ? 1 : 0.8}
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
