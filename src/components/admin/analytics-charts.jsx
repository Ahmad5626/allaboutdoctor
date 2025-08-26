"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { Download, Calendar } from "lucide-react"

const monthlyRevenue = [
  { month: "Jan", revenue: 45000, bookings: 45, users: 120 },
  { month: "Feb", revenue: 52000, bookings: 52, users: 145 },
  { month: "Mar", revenue: 48000, bookings: 48, users: 160 },
  { month: "Apr", revenue: 61000, bookings: 61, users: 180 },
  { month: "May", revenue: 55000, bookings: 55, users: 200 },
  { month: "Jun", revenue: 67000, bookings: 67, users: 225 },
  { month: "Jul", revenue: 72000, bookings: 72, users: 250 },
  { month: "Aug", revenue: 68000, bookings: 68, users: 275 },
]

const categoryData = [
  { name: "Venues", value: 35, color: "hsl(var(--primary))" },
  { name: "Photography", value: 25, color: "hsl(var(--accent))" },
  { name: "Catering", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Decoration", value: 15, color: "hsl(var(--chart-4))" },
  { name: "Others", value: 5, color: "hsl(var(--muted))" },
]

const userGrowth = [
  { month: "Jan", customers: 800, vendors: 120 },
  { month: "Feb", customers: 920, vendors: 135 },
  { month: "Mar", customers: 1050, vendors: 150 },
  { month: "Apr", customers: 1200, vendors: 165 },
  { month: "May", customers: 1380, vendors: 180 },
  { month: "Jun", customers: 1560, vendors: 195 },
]

export function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl  font-bold text-foreground">Analytics Overview</h2>
          <p className="text-muted-foreground">Detailed insights into your platform performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Revenue Chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Revenue Trend</h3>
          <Select defaultValue="revenue">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="bookings">Bookings</SelectItem>
              <SelectItem value="users">Users</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyRevenue}>
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
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Booking Categories</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-muted-foreground">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* User Growth */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">User Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowth}>
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
                  dataKey="customers"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="vendors"
                  stroke="hsl(var(--accent))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm text-muted-foreground">Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-sm text-muted-foreground">Vendors</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <h4 className="text-sm font-medium text-muted-foreground">Conversion Rate</h4>
          <p className="text-2xl font-bold text-primary mt-2">12.5%</p>
          <p className="text-sm text-green-600 mt-1">+2.1% from last month</p>
        </Card>
        <Card className="p-6">
          <h4 className="text-sm font-medium text-muted-foreground">Avg. Order Value</h4>
          <p className="text-2xl font-bold text-primary mt-2">₹18,500</p>
          <p className="text-sm text-green-600 mt-1">+5.3% from last month</p>
        </Card>
        <Card className="p-6">
          <h4 className="text-sm font-medium text-muted-foreground">Customer Satisfaction</h4>
          <p className="text-2xl font-bold text-primary mt-2">4.8/5</p>
          <p className="text-sm text-green-600 mt-1">+0.2 from last month</p>
        </Card>
        <Card className="p-6">
          <h4 className="text-sm font-medium text-muted-foreground">Repeat Customers</h4>
          <p className="text-2xl font-bold text-primary mt-2">68%</p>
          <p className="text-sm text-red-600 mt-1">-1.5% from last month</p>
        </Card>
      </div>
    </div>
  )
}
