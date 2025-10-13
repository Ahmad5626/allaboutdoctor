"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Edit, Trash2 } from "lucide-react"

// ✅ Only required fields
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    number: "+1 (555) 123-4567",
    address: "123 Main Street, New York, USA",
    purpose: "Travel Booking"
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.chen@email.com",
    number: "+1 (555) 987-6543",
    address: "22 Green Avenue, San Francisco, USA",
    purpose: "Hotel Reservation"
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma.davis@email.com",
    number: "+1 (555) 567-8901",
    address: "56 Ocean Drive, Miami, USA",
    purpose: "Flight Ticket Inquiry"
  }
]

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("")

  // ✅ Search filter
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Users</h2>
          <p className="text-sm text-muted-foreground">Manage all user details</p>
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Email</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Number</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Address</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Purpose</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b border-border hover:bg-muted/50">
                <td className="py-3 px-4 font-medium text-foreground">{user.name}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{user.email}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{user.number}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{user.address}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{user.purpose}</td>
                <td className="py-3 px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit User
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
