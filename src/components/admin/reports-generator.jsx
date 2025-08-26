"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, Filter, Eye } from "lucide-react"

const reportTemplates = [
  {
    id: 1,
    name: "Monthly Revenue Report",
    description: "Comprehensive revenue analysis with breakdowns by category",
    type: "Financial",
    lastGenerated: "2024-01-20",
    status: "ready",
  },
  {
    id: 2,
    name: "User Activity Report",
    description: "User engagement metrics and behavior analysis",
    type: "Analytics",
    lastGenerated: "2024-01-19",
    status: "ready",
  },
  {
    id: 3,
    name: "Vendor Performance Report",
    description: "Vendor ratings, bookings, and revenue performance",
    type: "Performance",
    lastGenerated: "2024-01-18",
    status: "generating",
  },
  {
    id: 4,
    name: "Customer Satisfaction Report",
    description: "Reviews, ratings, and feedback analysis",
    type: "Quality",
    lastGenerated: "2024-01-17",
    status: "ready",
  },
]

const getStatusBadge = (status) => {
  switch (status) {
    case "ready":
      return (
        <Badge variant="default" className="bg-green-100 text-green-800">
          Ready
        </Badge>
      )
    case "generating":
      return (
        <Badge variant="default" className="bg-yellow-100 text-yellow-800">
          Generating
        </Badge>
      )
    case "error":
      return (
        <Badge variant="default" className="bg-red-100 text-red-800">
          Error
        </Badge>
      )
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export function ReportsGenerator() {
  const [selectedReports, setSelectedReports] = useState([])
  const [dateRange, setDateRange] = useState("30days")
  const [reportFormat, setReportFormat] = useState("pdf")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl  font-bold text-foreground">Reports</h2>
          <p className="text-muted-foreground">Generate and download comprehensive reports</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <FileText className="h-4 w-4 mr-2" />
          Create Custom Report
        </Button>
      </div>

      {/* Quick Generate */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Generate</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="dateRange">Date Range</Label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger>
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="format">Format</Label>
            <Select value={reportFormat} onValueChange={setReportFormat}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="analytics">Analytics</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4 mr-2" />
              Generate
            </Button>
          </div>
        </div>
      </Card>

      {/* Report Templates */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Report Templates</h3>
        <div className="space-y-4">
          {reportTemplates.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={selectedReports.includes(report.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedReports([...selectedReports, report.id])
                    } else {
                      setSelectedReports(selectedReports.filter((id) => id !== report.id))
                    }
                  }}
                />
                <div>
                  <h4 className="font-medium text-foreground">{report.name}</h4>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{report.type}</Badge>
                    <span className="text-xs text-muted-foreground">Last generated: {report.lastGenerated}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(report.status)}
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm" disabled={report.status !== "ready"}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selectedReports.length > 0 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">{selectedReports.length} reports selected</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Bulk Preview
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Download Selected
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Recent Reports */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Downloads</h3>
        <div className="space-y-3">
          {[
            { name: "Monthly Revenue Report - January 2024.pdf", date: "2024-01-20", size: "2.4 MB" },
            { name: "User Activity Report - Q4 2023.xlsx", date: "2024-01-19", size: "1.8 MB" },
            { name: "Vendor Performance Report - December 2023.pdf", date: "2024-01-18", size: "3.1 MB" },
          ].map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {file.date} • {file.size}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
