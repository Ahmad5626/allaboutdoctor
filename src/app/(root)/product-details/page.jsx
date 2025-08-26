"use client"

import { useState } from "react"
import { Star, Heart, Share2, MessageCircle, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"

export default function BridalProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [whatsappNotify, setWhatsappNotify] = useState(false)
  const [activeTab, setActiveTab] = useState("portfolio")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
  })

 const portfolioImages = [
    "https://image.wedmegood.com/resized/450X/uploads/project/310473/1746602556_1000119620.jpg?crop=0,0,1236,1600",
    "https://image.wedmegood.com/resized/450X/uploads/project/310473/1746602556_1000119620.jpg?crop=0,0,1236,1600",
    "https://image.wedmegood.com/resized/450X/uploads/member/97419/1681297054_7_2.jpg",
    "https://image.wedmegood.com/resized/450X/uploads/member/97419/rotated_1688128368.jpg",
    "https://image.wedmegood.com/resized/450X/uploads/member/97419/1684394163_322533650_560302982338502_4595388236560152786_n.jpg",
  ]

  const relatedAlbums = [
    { title: "Bridal Lehenga", image: "/bridal-lehenga-collection.png" },
    { title: "Reception wear", image: "/reception-dress-collection.png" },
    { title: "Bridal & Festive...", image: "/festive-wear-collection.png" },
    { title: "Bridal Collection", image: "/bridal-collection-showcase.png" },
    { title: "Lehenga", image: "/placeholder.svg?height=100&width=100" },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }

  return (
    <>
    <Navbar fixed={true}/>
        <div className="min-h-screen bg-gray-50 mt-4">
      {/* <div className="bg-primary px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto">
          <span className="text-white">
            Home &gt; Vendors &gt; Bridal Wear &gt; Bridal Wear, Delhi NCR &gt; Bridal Wear, Central Delhi
          </span>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative mb-6">
              <div className="absolute top-4 left-4 z-10 bg-primary text-white px-3 py-1 rounded text-sm font-medium">
                VIP LEHENGA
              </div>
              <img
                src={portfolioImages[currentImageIndex] || "/red-gold-bridal-lehenga.png"}
                alt="Bridal Lehenga"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-[#c2185b] text-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-[#c2185b] text-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Tek Chand Arjit Goel</h1>
                <div className="bg-green-600 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  4.0
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Central Delhi, Delhi NCR</span>
                <a href="#" className="text-primary hover:underline">
                  How to Shop
                </a>
              </div>

              <p className="text-sm text-gray-600 mb-1">Get Best Deals, Contact Vendor, Deals Available</p>
              <p className="text-sm text-gray-600">(5) Reviews</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                Get Best Quotes
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className="border-gray-300 hover:bg-gray-50"
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                Shortlist
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                Write a Review
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-8 mb-6 border-b">
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`pb-2 text-sm font-medium ${
                    activeTab === "portfolio"
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className={`pb-2 text-sm font-medium ${
                    activeTab === "about"
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-2 text-sm font-medium ${
                    activeTab === "reviews"
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Reviews
                </button>
              </div>

              <div className="flex items-center gap-6 mb-4 text-sm">
                <span className="text-primary font-medium cursor-pointer">PORTFOLIO (407)</span>
                <span className="text-gray-500 cursor-pointer">ALBUMS (14)</span>
                <span className="text-gray-500 cursor-pointer">REVIEWS (1)</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {portfolioImages.slice(0, 12).map((image, index) => (
                  <div key={index} className="aspect-square">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-white px-8 bg-transparent"
                >
                  View 255 more
                </Button>
              </div>
            </div>

            {/* <div>
              <h3 className="text-base font-medium mb-4 text-gray-700">
                Albums Uploaded From: Delhi NCR (5) · Bangalore (5) · Hyderabad (5) · 6 other cities
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {relatedAlbums.map((album, index) => (
                  <div key={index} className="flex-shrink-0 text-center">
                    <img
                      src={album.image || "/placeholder.svg"}
                      alt={album.title}
                      className="w-20 h-20 object-cover rounded-lg mb-2"
                    />
                    <p className="text-xs text-gray-600 max-w-[80px] truncate">{album.title}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
              <div className="mb-6">
                <h4 className="font-medium mb-2 text-gray-700">Starting Price</h4>
                <p className="text-2xl font-bold text-primary">₹30,000-5,00,000</p>
                <p className="text-sm text-gray-500">Starting Price</p>
              </div>

              <div className="flex gap-2 mb-6">
                <Button className="flex-1 bg-primary hover:bg-[#c2185b] text-white">Send Message</Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">View Contact</Button>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium mb-4">Hi Tek Chand Arjit Goel,</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="text-sm"
                  />
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm bg-gray-100 border border-r-0 rounded-l-md">
                      🇮🇳 +91
                    </span>
                    <Input
                      name="mobile"
                      placeholder=""
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="rounded-l-none text-sm"
                    />
                  </div>
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-sm"
                />
                <Input
                  name="city"
                  placeholder="Function city/location"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="text-sm"
                />
                <Textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="text-sm resize-none"
                />

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">Notify me via WhatsApp</span>
                  <button
                    type="button"
                    onClick={() => setWhatsappNotify(!whatsappNotify)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      whatsappNotify ? "bg-primary" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        whatsappNotify ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-[#c2185b] text-white">
                  Send Message
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Complete information and get instant vendor responses
              </p>

              <div className="mt-4 p-3 bg-red-50 rounded-lg">
                <p className="text-xs text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  Report Inaccurate Info
                </p>
              </div>
            </div>
          </div>
        </div>

         <div className="bg-white rounded-lg p-6 shadow-sm my-6 ">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">About</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    GymCraft Solutions stands as a beacon of innovation and excellence in the realm of fitness equipment
                    retail. Nestled within the bustling fitness community, our store is more than just a place of
                    business; it's a destination where fitness dreams come to life. We provide tailored solutions that
                    meet your specific needs. Our team of experts will help you create the perfect environment to meet
                    your fitness goals in functional, stylish, and well-designed spaces.
                  </p>
                  <p>
                    Our commitment to excellence begins with our carefully curated selection of top-tier fitness
                    equipment. From cardio machines to strength training equipment, we have it all under one roof.
                    Please take note of some of the key highlights, distinctive features, and unique selling points that
                    make GymCraft Solutions the preferred choice for fitness enthusiasts. Whether you're a professional
                    athlete, a weekend warrior, or simply someone looking to improve your overall well-being, our
                    knowledgeable staff is here to guide you every step of the way.
                  </p>
                  <p>
                    But our commitment to excellence doesn't stop at our gym floor. GymCraft Solutions understands the
                    importance of recovery and nutrition in achieving fitness goals. That's why we offer a curated
                    selection of recovery accessories, including foam rollers, massage guns, and compression gear, to
                    help you soothe sore muscles and enhance your overall well-being.
                  </p>
                </div>
              </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
