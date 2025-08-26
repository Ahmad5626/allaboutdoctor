"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Star, CreditCard } from "lucide-react"

const userDetails = {
  id: 1,
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  role: "Customer",
  status: "active",
  joinDate: "2024-01-15",
  lastActive: "2 hours ago",
  location: "New York, NY",
  avatar: "SJ",
  totalBookings: 3,
  totalSpent: "₹45,000",
  averageRating: 4.8,
  bio: "Wedding planning enthusiast looking for the perfect venues and vendors for my special day.",
}

const bookingHistory = [
  {
    id: 1,
    venue: "Heritage Village Resort",
    date: "2024-03-15",
    amount: "₹25,000",
    status: "completed",
  },
  {
    id: 2,
    venue: "Golden Palace Hotel",
    date: "2024-02-20",
    amount: "₹15,000",
    status: "completed",
  },
  {
    id: 3,
    venue: "Royal Gardens",
    date: "2024-04-10",
    amount: "₹5,000",
    status: "pending",
  },
]

export function UserDetailsModal({ isOpen, onClose }) {
  const [isEditing, setIsEditing] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">User Details</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit"}
              </Button>
              <Button variant="outline" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="flex items-start gap-6">
                <Avatar className="h-20 w-20">
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-medium text-primary">{userDetails.avatar}</span>
                  </div>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={userDetails.name} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue={userDetails.email} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={userDetails.phone} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue={userDetails.role} disabled={!isEditing}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Customer">Customer</SelectItem>
                          <SelectItem value="Vendor">Vendor</SelectItem>
                          <SelectItem value="Admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" defaultValue={userDetails.bio} disabled={!isEditing} rows={3} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium text-foreground">{userDetails.joinDate}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total Spent</p>
                      <p className="font-medium text-foreground">{userDetails.totalSpent}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Average Rating</p>
                      <p className="font-medium text-foreground">{userDetails.averageRating}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-4">
              <div className="space-y-4">
                {bookingHistory.map((booking) => (
                  <Card key={booking.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{booking.venue}</p>
                        <p className="text-sm text-muted-foreground">{booking.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{booking.amount}</p>
                        <Badge
                          variant={booking.status === "completed" ? "default" : "secondary"}
                          className={
                            booking.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <p className="text-muted-foreground">Recent activity will be displayed here.</p>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="status">Account Status</Label>
                  <Select defaultValue={userDetails.status} disabled={!isEditing}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="banned">Banned</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {isEditing && (
            <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-border">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
