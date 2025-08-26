import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "booked",
    target: "Heritage Village Resort",
    time: "2 hours ago",
    type: "booking",
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "registered as",
    target: "Wedding Photographer",
    time: "4 hours ago",
    type: "registration",
  },
  {
    id: 3,
    user: "Emma Davis",
    action: "left a review for",
    target: "Rajmudra Banquets",
    time: "6 hours ago",
    type: "review",
  },
  {
    id: 4,
    user: "Admin",
    action: "approved",
    target: "Golden Palace Venue",
    time: "8 hours ago",
    type: "approval",
  },
  {
    id: 5,
    user: "John Smith",
    action: "made payment for",
    target: "Wedding Package Premium",
    time: "1 day ago",
    type: "payment",
  },
]

const getActivityBadge = (type) => {
  switch (type) {
    case "booking":
      return (
        <Badge variant="default" className="bg-blue-100 text-blue-800">
          Booking
        </Badge>
      )
    case "registration":
      return (
        <Badge variant="default" className="bg-green-100 text-green-800">
          Registration
        </Badge>
      )
    case "review":
      return (
        <Badge variant="default" className="bg-yellow-100 text-yellow-800">
          Review
        </Badge>
      )
    case "approval":
      return (
        <Badge variant="default" className="bg-purple-100 text-purple-800">
          Approval
        </Badge>
      )
    case "payment":
      return (
        <Badge variant="default" className="bg-primary/10 text-primary">
          Payment
        </Badge>
      )
    default:
      return <Badge variant="secondary">Activity</Badge>
  }
}

export function RecentActivity() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            {getActivityBadge(activity.type)}
          </div>
        ))}
      </div>
    </Card>
  )
}
