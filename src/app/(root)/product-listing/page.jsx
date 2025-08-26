"use client"

import { useState, useMemo } from "react"
import { Star, MapPin, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Footer from "@/components/Footer"
import Navbar from "@/components/Hedaer"

// Sample business data
const businesses = [
  {
    id: 1,
    title: "Saddle & Sip Saloon",
    category: "salon1",
    categoryColor: "bg-primary",
    owner: {
      name: "superbusiness47",
      avatar: "https://i.pravatar.cc/300",
    },
    image:
      "https://image.wedmegood.com/resized/450X/uploads/images/93d9aa860dcf4d0dacfeda4b17f64b1frealwedding/PTN_RUHI+KARTIK_DAY02-5452-3.jpg?crop=224,349,1626,914",
    rating: 4.5,
    reviewCount: 2,
    location: "Melbourne, Victoria, Australia",
    priceRange: "$40 - $999",
    isFavorited: false,
  },

  {
    id: 2,
    title: "Another Saloon",
    category: "salon2",
    categoryColor: "bg-blue-500",
    owner: {
      name: "anotherbusiness",
      avatar: "https://i.pravatar.cc/300",
    },
    image: "https://image.wedmegood.com/resized/450X/uploads/images/76286e68431a4c929007f48f19e380bbrealwedding/SRI01051.jpg?crop=285,1154,1630,917",
    rating: 4.0,
    reviewCount: 5,
    location: "Sydney, New South Wales, Australia",
    priceRange: "$50 - $1500",
    isFavorited: false,
  },
  {
    id: 3,
    title: "Third Saloon",
    category: "salon3",
    categoryColor: "bg-green-500",
    owner: {
      name: "thirdbusiness",
      avatar: "https://i.pravatar.cc/300",
    },
    image: "https://image.wedmegood.com/resized/450X/uploads/images/46f88aa94224455fbc3940697615a453realwedding/NT6_5075-EditLarge.jpeg?crop=145,253,1013,569",
    rating: 3.8,
    reviewCount: 8,
    location: "Brisbane, Queensland, Australia",
    priceRange: "$60 - $1200",
    isFavorited: false,
  },
  {
    id: 4,
    title: "Fourth Saloon",
    category: "salon4",
    categoryColor: "bg-purple-500",
    owner: {
      name: "fourthbusiness",
      avatar: "https://i.pravatar.cc/300",
    },
    image: "https://image.wedmegood.com/resized/450X/uploads/images/4bfb1109e25948b89a7c0fb3fd93adfdrealwedding/ABHI5060Large.jpeg?crop=140,218,1013,569",
    rating: 4.2,
    reviewCount: 10,
    location: "Adelaide, South Australia, Australia",
    priceRange: "$70 - $1300",
    isFavorited: false,
  },
]
const categories = ["All", "Bars", "Restaurants", "Hotels", "Fitness", "Beauty", "Technology", "Food", "Automotive"]
const countries = ["All Countries", "USA", "Canada", "UK", "Australia"]
const cities = [
  "All Cities",
  "New York",
  "Los Angeles",
  "Miami",
  "Chicago",
  "Boston",
  "Seattle",
  "San Francisco",
  "Las Vegas",
  "Denver",
  "Phoenix",
  "Portland",
  "Austin",
]
const amenities = ["Free Wifi", "Parking", "Air Conditioning", "Swimming Pool", "Pet Friendly"]

export default function BusinessDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [minRating, setMinRating] = useState(0)
  const [openOnly, setOpenOnly] = useState(false)
  const [sortBy, setSortBy] = useState("rating")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const filteredBusinesses = useMemo(() => {
    const filtered = businesses.filter((business) => {
      // Category filter
      if (selectedCategory !== "All" && business.category !== selectedCategory) {
        return false
      }

      // Country filter
      if (selectedCountry !== "All Countries" && business.country !== selectedCountry) {
        return false
      }

      // City filter
      if (selectedCity !== "All Cities" && business.location !== selectedCity) {
        return false
      }

      // Price range filter
      if (business.priceRange[0] > priceRange[1] || business.priceRange[1] < priceRange[0]) {
        return false
      }

      // Rating filter
      if (business.rating < minRating) {
        return false
      }

      // Open only filter
      if (openOnly && !business.isOpen) {
        return false
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every((amenity) => business.amenities.includes(amenity))
        if (!hasAllAmenities) {
          return false
        }
      }

      return true
    })

    // Sort businesses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return a.priceRange[0] - b.priceRange[0]
        case "price-high":
          return b.priceRange[1] - a.priceRange[1]
        case "reviews":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategory, selectedCountry, selectedCity, selectedAmenities, priceRange, minRating, openOnly, sortBy])

  const handleAmenityChange = (amenity, checked) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenity])
    } else {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity))
    }
  }

  const clearAllFilters = () => {
    setSelectedCategory("All")
    setSelectedCountry("All Countries")
    setSelectedCity("All Cities")
    setSelectedAmenities([])
    setPriceRange([0, 1000])
    setMinRating(0)
    setOpenOnly(false)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const FilterSidebar = () => (
    <div className="w-full lg:w-66 bg-white border-r border-gray-200 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-red-600 hover:text-red-700">
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Location Filters */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Location</h3>
        <div className="space-y-3">
          {/* <div>
            <label className="block text-sm text-gray-600 mb-1">Country</label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">City</label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Open Location */}
      <div>
        <div className="flex items-center space-x-2">
          <Checkbox id="open-only" checked={openOnly} onCheckedChange={setOpenOnly} />
          <label htmlFor="open-only" className="text-sm text-gray-600">
            Open Location
          </label>
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Amenities</h3>
        <div className="space-y-2">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={(checked) => handleAmenityChange(amenity, checked)}
              />
              <label htmlFor={amenity} className="text-sm text-gray-600">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Pricing Filter</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <Slider value={priceRange} onValueChange={setPriceRange} max={1000} min={0} step={10} className="w-full" />
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1, 0].map((rating) => (
            <button
              key={rating}
              onClick={() => setMinRating(rating)}
              className={`flex items-center space-x-2 w-full text-left px-2 py-1 rounded transition-colors ${
                minRating === rating ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex">{renderStars(rating)}</div>
              <span className="text-sm text-gray-600">{rating === 0 ? "All" : `${rating}+ stars`}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
   <>
   <Navbar fixed={true} />
     <div className="min-h-screen bg-gray-50 max-w-7xl mx-auto my-4">
      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => setIsMobileFilterOpen(true)} className="lg:hidden">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Business Directory</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{filteredBusinesses.length} results</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Business Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow !py-0">
                <div className="relative">
                  <img
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top- right-3">
                    {/* <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        business.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {business.isOpen ? "Open" : "Closed"}
                    </span> */}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">{business.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{business.category}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(business.rating)}</div>
                    <span className="text-sm text-gray-600">
                      {business.rating} ({business.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {business.location}, {business.country}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg text-gray-900">
                      ${business.priceRange[0]} - ${business.priceRange[1]}
                    </span>
                    <Button size="sm">View Details</Button>
                  </div>

                  {/* <div className="flex flex-wrap gap-1 mt-3">
                    {business.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                    {business.amenities.length > 3 && (
                      <span className="text-xs text-gray-500">+{business.amenities.length - 3} more</span>
                    )}
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
              <Button onClick={clearAllFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}
