import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const topVenues = [
  {
    id: 1,
    name: "Heritage Village Resort & Spa",
    bookings: 45,
    rating: 4.8,
    revenue: "₹2,25,000",
    status: "active",
  },
  {
    id: 2,
    name: "Rajmudra Banquets",
    bookings: 38,
    rating: 4.6,
    revenue: "₹1,90,000",
    status: "active",
  },
  {
    id: 3,
    name: "Golden Palace Hotel",
    bookings: 32,
    rating: 4.5,
    revenue: "₹1,60,000",
    status: "active",
  },
  {
    id: 4,
    name: "Royal Gardens",
    bookings: 28,
    rating: 4.4,
    revenue: "₹1,40,000",
    status: "pending",
  },
  {
    id: 5,
    name: "Crystal Ballroom",
    bookings: 25,
    rating: 4.3,
    revenue: "₹1,25,000",
    status: "active",
  },
]

export function TopVenues() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Top Performing Venues</h3>
      <div className="space-y-4">
        {topVenues.map((venue, index) => (
          <div key={venue.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">#{index + 1}</span>
              </div>
              <div>
                <p className="font-medium text-foreground">{venue.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">{venue.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{venue.bookings} bookings</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">{venue.revenue}</p>
              <Badge variant={venue.status === "active" ? "default" : "secondary"} className="mt-1">
                {venue.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
