"use client"

import { useState } from "react"
import {
  Building2,
  Users,
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Plus,
  Eye,
  Edit,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Navbar from "@/components/Hedaer"

const recentBookings = [
  {
    id: 1,
    clientName: "Priya & Raj",
    service: "Wedding Photography",
    date: "2024-03-15",
    amount: "₹85,000",
    status: "confirmed",
  },
  {
    id: 2,
    clientName: "Anita & Vikram",
    service: "Wedding Planning",
    date: "2024-03-22",
    amount: "₹1,50,000",
    status: "pending",
  },
  {
    id: 3,
    clientName: "Meera & Arjun",
    service: "Decoration",
    date: "2024-04-05",
    amount: "₹75,000",
    status: "confirmed",
  },
]

const recentReviews = [
  {
    id: 1,
    clientName: "Priya Sharma",
    rating: 5,
    comment: "Absolutely amazing service! The photography was beyond our expectations.",
    date: "2024-01-20",
  },
  {
    id: 2,
    clientName: "Vikram Patel",
    rating: 4,
    comment: "Great work on our wedding planning. Very professional team.",
    date: "2024-01-18",
  },
]

export default function VendorDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar fixed={true}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Vendor!</h2>
          <p className="text-gray-600">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹4,85,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">Based on 156 reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+15%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        

          {/* Recent Reviews */}
          
        </div>


        {/* Navigation Links */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Business Directory
          </Link>
        </div>
      </div>
    </div>
  )
}
