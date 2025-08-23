"use client"

import { Search, MapPin, Grid3X3 } from "lucide-react"
import { Input } from "../ui/input"

export default function HeroSection() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center py-28 md:py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://weddingplanet.in.net/assets/img/hero-section/664af3245b2b4.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Find Everything You Need For Your Dream 
          Wedding
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* I'm Looking for */}
            <div className="md:col-span-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Grid3X3 className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">I'm Looking for</label>
                  <input
                    type="text"
                    placeholder="Choose a Service"
                    className="w-full bg-transparent border-none  outline-none text-gray-800 placeholder-gray-400 "
                  />
                </div>
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Grid3X3 className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                  <select className="w-full bg-transparent border-none outline-none text-gray-800">
                    <option>All</option>
                    <option>Photography</option>
                    <option>Venues</option>
                    <option>Catering</option>
                    <option>Decoration</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="md:col-span-3">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button className="w-full bg-primary hover:bg-orange-600 text-white p-4 rounded-lg flex items-center justify-center transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
