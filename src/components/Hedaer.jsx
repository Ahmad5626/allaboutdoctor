"use client"

import { useState } from "react"
import { ChevronDown, Menu, X, Globe } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVendorsOpen, setIsVendorsOpen] = useState(false)
  const [isCustomerOpen, setIsCustomerOpen] = useState(false)

  const vendorTypes = [
    "Wedding Photographers",
    "Wedding Venues",
    "Bridal Makeup Artists",
    "Wedding Decorators",
    "Wedding Caterers",
    "Wedding Planners",
    "Bridal Wear",
    "Groom Wear",
    "Wedding Invitations",
    "Wedding Cakes",
    "Wedding DJs",
    "Wedding Bands",
    "Mehendi Artists",
    "Wedding Jewellery",
    "Wedding Cars",
    "Honeymoon Packages",
    "Wedding Gifts",
    "Pandit Ji",
    "Wedding Choreographers",
    "Pre Wedding Shoots",
  ]

  return (
    <nav className="w-full text-white  z-50 fixed top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-white px-4 py-2 rounded">
              <span className="text-pink-500 text-xl font-bold italic">wedding planet</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-orange-400 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="hover:text-orange-400 px-3 py-2 text-sm font-medium">
                Listings
              </a>
              <a href="#" className="hover:text-orange-400 px-3 py-2 text-sm font-medium">
                Pricing
              </a>

              {/* Vendors Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsVendorsOpen(!isVendorsOpen)}
                  className="hover:text-orange-400 px-3 py-2 text-sm font-medium flex items-center"
                >
                  Vendors
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isVendorsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                    <div className="grid grid-cols-1 gap-1">
                      {vendorTypes.map((vendor, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          {vendor}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="hover:text-orange-400 px-3 py-2 text-sm font-medium flex items-center">
                Shop
                <span className="ml-1 text-lg">+</span>
              </a>
              <a href="#" className="hover:text-orange-400 px-3 py-2 text-sm font-medium flex items-center">
                Pages
                <span className="ml-1 text-lg">+</span>
              </a>
              <a href="#" className="hover:text-orange-400 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-1 text-sm">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </div>

            {/* Customer Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCustomerOpen(!isCustomerOpen)}
                className="border border-orange-400 text-orange-400 px-3 py-1 rounded text-sm flex items-center"
              >
                Customer
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isCustomerOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                    Login
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                    Sign Up
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                    My Account
                  </a>
                </div>
              )}
            </div>

            {/* Vendor Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm flex items-center">
              Vendor
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-orange-400">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              <a href="#" className="block hover:text-orange-400 px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#" className="block hover:text-orange-400 px-3 py-2 text-base font-medium">
                Listings
              </a>
              <a href="#" className="block hover:text-orange-400 px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#" className="block hover:text-orange-400 px-3 py-2 text-base font-medium">
                Vendors
              </a>
              <a href="#" className="block hover:text-orange-400 px-3 py-2 text-base font-medium">
                Shop
              </a>
              <a href="#" className="block hover:text-orange-400 px-3 py-2 text-base font-medium">
                Pages
              </a>
              <a href="#" className="block hover:text-orange-400 px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="border-t border-gray-700 pt-4 mt-4">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
                  Vendor
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
