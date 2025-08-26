"use client"

import { useState } from "react"
import { Star, MapPin, Users, Building2, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const cities = [
  { name: "Delhi NCR", image: "/india-gate-delhi.png" },
  { name: "Mumbai", image: "/gateway-of-india-mumbai.png" },
  { name: "Bangalore", image: "/bangalore-palace.png" },
  { name: "Hyderabad", image: "/charminar-hyderabad.png" },
  { name: "Chennai", image: "/marina-beach-chennai.png" },
  { name: "Goa", image: "/goa-beach.png" },
  { name: "Jaipur", image: "/hawa-mahal-jaipur.png" },
  { name: "Pune", image: "/shaniwar-wada-pune.png" },
  { name: "Kolkata", image: "/victoria-memorial-kolkata.png" },
  { name: "Lucknow", image: "/bara-imambara-lucknow.png" },
]

const venues = [
  {
    id: 1,
    name: "Heritage Village Resort & Spa Manesar",
    location: "Gurgaon, Manesar",
    category: "4 Star & Above Wedding Hotels",
    capacity: "50-750 pax",
    vegPrice: 4350,
    nonVegPrice: 4350,
    rating: 4.6,
    reviews: 15,
    rooms: 150,
    amenities: ["Indoor", "Outdoor"],
    moreAmenities: 4,
    image: "/luxury-resort-wedding-venue.png",
    thumbnails: ["/lush-resort-garden.png", "/elegant-banquet-hall.png"],
    handpicked: true,
    description: "Heritage Village Resort & Spa Manesar is a unique Rajasthani Haveli Palatial style resort that o...",
  },
  {
    id: 2,
    name: "Rajmudra Banquets - Hinjewadi, Pune",
    location: "Pimpri Chinchwad",
    category: "Banquet Halls, Marriage Garden",
    capacity: "250-1200 pax",
    vegPrice: 650,
    nonVegPrice: 750,
    rating: 5.0,
    reviews: 11,
    rooms: 25,
    amenities: ["Indoor", "Inhouse catering only"],
    moreAmenities: 2,
    image: "/elegant-banquet-hall-wedding.png",
    thumbnails: ["/banquet-interior.png", "/wedding-setup.png"],
    handpicked: true,
    description: "Rajmudra Banquets - Hinjewadi, Pune is a Banquet hall, Wedding venue with rooms located in...",
  },
]

const budgetCategories = [
  { name: "Budget Friendly", image: "/budget-wedding-venue.png" },
  { name: "Value For Money", image: "/value-wedding-venue.png" },
  { name: "Premium properties", image: "/premium-wedding-venue.png" },
  { name: "Luxury properties", image: "/placeholder.svg?height=80&width=80" },
]

const venueTypes = [
  { name: "Banquet Halls", image: "/placeholder.svg?height=80&width=80" },
  { name: "Resorts", image: "/placeholder.svg?height=80&width=80" },
]

export default function VenueListingPage() {
  const [selectedFilter, setSelectedFilter] = useState("Banquet Halls")

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Filter Bar */}
      <div className="bg-white border-b border-border px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
              {selectedFilter}
              <button className="ml-2 text-gray-500 hover:text-gray-700" onClick={() => setSelectedFilter("")}>
                ×
              </button>
            </Badge>
          </div>
          <button className="text-primary hover:text-primary/80 text-sm font-medium">Clear all</button>
        </div>
      </div>

      {/* City Selection */}
      <div className="bg-white px-6 py-6 border-b border-border">
        <div className="flex items-center gap-4 overflow-x-auto">
          {cities.map((city, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px] cursor-pointer group">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 group-hover:scale-105 transition-transform">
                <img src={city.image || "/placeholder.svg"} alt={city.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-foreground text-center">{city.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-2">
              <span className="text-white text-sm font-medium">+40</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 px-6 py-6">
        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-6">
            {venues.map((venue) => (
              <div key={venue.id} className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
                <div className="flex gap-4 p-6">
                  {/* Image Section */}
                  <div className="relative">
                    <div className="w-80 h-48 rounded-lg overflow-hidden">
                      <img
                        src={venue.image || "/placeholder.svg"}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                      {venue.handpicked && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                          <Crown className="w-3 h-3 mr-1" />
                          Handpicked
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 mt-3">
                      {venue.thumbnails.map((thumb, index) => (
                        <div key={index} className="w-16 h-12 rounded overflow-hidden">
                          <img
                            src={thumb || "/placeholder.svg"}
                            alt={`${venue.name} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{venue.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">{renderStars(venue.rating)}</div>
                        <span className="text-sm font-medium">{venue.rating}</span>
                        <span className="text-sm text-muted-foreground">({venue.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {venue.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {venue.category}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {venue.capacity}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Veg</span>
                        <div className="text-lg font-semibold text-foreground">
                          ₹ {venue.vegPrice.toLocaleString()}
                          <span className="text-sm font-normal text-muted-foreground ml-1">
                            per {venue.vegPrice > 1000 ? "function" : "plate"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Non veg</span>
                        <div className="text-lg font-semibold text-foreground">
                          ₹ {venue.nonVegPrice.toLocaleString()}
                          <span className="text-sm font-normal text-muted-foreground ml-1">
                            per {venue.nonVegPrice > 1000 ? "function" : "plate"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium">{venue.rooms} Rooms</span>
                      {venue.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {venue.moreAmenities > 0 && (
                        <span className="text-sm text-primary cursor-pointer hover:underline">
                          +{venue.moreAmenities} more
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{venue.description}</p>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Venues by Budget */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4">Venues by budget</h3>
            <div className="grid grid-cols-2 gap-4">
              {budgetCategories.map((category, index) => (
                <div key={index} className="text-center cursor-pointer group">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 group-hover:scale-105 transition-transform">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-foreground">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Venues by Type */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4">Venues by type</h3>
            <div className="grid grid-cols-2 gap-4">
              {venueTypes.map((type, index) => (
                <div key={index} className="text-center cursor-pointer group">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 group-hover:scale-105 transition-transform">
                    <img
                      src={type.image || "/placeholder.svg"}
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-foreground">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
