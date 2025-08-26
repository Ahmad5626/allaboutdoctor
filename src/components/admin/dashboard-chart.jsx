"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const monthlyData = [
  { month: "Jan", bookings: 45, revenue: 12000 },
  { month: "Feb", bookings: 52, revenue: 15000 },
  { month: "Mar", bookings: 48, revenue: 13500 },
  { month: "Apr", bookings: 61, revenue: 18000 },
  { month: "May", bookings: 55, revenue: 16500 },
  { month: "Jun", bookings: 67, revenue: 22000 },
]

export function DashboardChart({ type = "bar" }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {type === "bar" ? "Monthly Bookings" : "Revenue Trend"}
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="bookings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
