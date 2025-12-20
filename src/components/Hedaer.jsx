"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, Youtube } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const INDIA_STATES = [
    { label: "Andhra Pradesh", href: "/india/andhra-pradesh/mbbs" },
    { label: "Arunachal Pradesh", href: "/india/arunachal-pradesh/mbbs" },
    { label: "Assam", href: "/india/assam/mbbs" },
    { label: "Bihar", href: "/india/bihar/mbbs" },
    { label: "Chhattisgarh", href: "/india/chhattisgarh/mbbs" },
    { label: "Delhi", href: "/india/delhi/mbbs" },
    { label: "Goa", href: "/india/goa/mbbs" },
    { label: "Gujarat", href: "/india/gujarat/mbbs" },
    { label: "Haryana", href: "/india/haryana/mbbs" },
    { label: "Himachal Pradesh", href: "/india/himachal-pradesh/mbbs" },
    { label: "Jharkhand", href: "/india/jharkhand/mbbs" },
    { label: "Karnataka", href: "/india/karnataka/mbbs" },
    { label: "Kashmir", href: "/india/kashmir/mbbs" },
    { label: "Kerala", href: "/india/kerala/mbbs" },
    { label: "Madhya Pradesh", href: "/india/madhya-pradesh/mbbs" },
    { label: "Maharashtra", href: "/india/maharashtra/mbbs" },
    { label: "Manipur", href: "/india/manipur/mbbs" },
    { label: "Meghalaya", href: "/india/meghalaya/mbbs" },
    { label: "Mizoram", href: "/india/mizoram/mbbs" },
    { label: "Nagaland", href: "/india/nagaland/mbbs" },
    { label: "Odisha", href: "/india/odisha/mbbs" },
    { label: "Puducherry", href: "/india/puducherry/mbbs" },
    { label: "Punjab", href: "/india/punjab/mbbs" },
    { label: "Rajasthan", href: "/india/rajasthan/mbbs" },
    { label: "Sikkim", href: "/india/sikkim/mbbs" },
    { label: "Tamil Nadu", href: "/india/tamil-nadu/mbbs" },
    { label: "Telangana", href: "/india/telangana/mbbs" },
    { label: "Tripura", href: "/india/tripura/mbbs" },
    { label: "Uttar Pradesh", href: "/india/uttar-pradesh/mbbs" },
    { label: "Uttarakhand", href: "/india/uttarakhand/mbbs" },
    { label: "West Bengal", href: "/india/west-bengal/mbbs" }
  ];
  const COURSES = [
    { label: "MBBS", href: "/courses/mbbs" },
    { label: "MD", href: "/courses/md" },
    { label: "MS", href: "/courses/ms" },
    { label: "BAMS", href: "/courses/bams" },
    { label: "BDS", href: "/courses/bds" },
    { label: "BHMS", href: "/courses/bhms" },
    { label: "BNYS", href: "/courses/bnys" },
    { label: "BUMS", href: "/courses/bums" },
    { label: "BVSc", href: "/courses/bvsc" }
  ];

  const ABROAD_COUNTRIES = [
    { label: "Armenia", href: "/abroad/armenia/mbbs" },
    { label: "Bulgaria", href: "/abroad/bulgaria/mbbs" },
    { label: "Georgia", href: "/abroad/georgia/mbbs" },
    { label: "Kazakhstan", href: "/abroad/kazakhstan/mbbs" },
    { label: "Kyrgyzstan", href: "/abroad/kyrgyzstan/mbbs" },
    { label: "Nepal", href: "/abroad/nepal/mbbs" },
    { label: "Romania", href: "/abroad/romania/mbbs" },
    { label: "Russia", href: "/abroad/russia/mbbs" },
    { label: "Serbia", href: "/abroad/serbia/mbbs" },
    { label: "Tajikistan", href: "/abroad/tajikistan/mbbs" },
    { label: "Uzbekistan", href: "/abroad/uzbekistan/mbbs" },
    { label: "Vietnam", href: "/abroad/vietnam/mbbs" }
  ];



  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="relative bg-primary text-white overflow-hidden">
        {/* Diagonal Design */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-primary"
            style={{ clipPath: "polygon(0 0, 60% 0, 50% 100%, 0 100%)" }}
          ></div>
          <div
            className="absolute inset-0 bg-secondary"
            style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 60% 100%)" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Section */}
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/callback"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">student Login</span>
              </Link>
              <Link
                href="/admission"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
                <span className="hidden sm:inline">Admin Login</span>
              </Link>
            </div>

            {/* Center Section */}
            <div className="flex items-center gap-3">


              <Link
                href="/counseling"
                className="flex  gap-2 px-4 py-1.5 bg-white text-red-600 font-semibold text-sm rounded hover:bg-red-50 hover:scale-105 transition-all duration-300 shadow-md"
              >
                <img src="/assets/img/playstore.png" className="w-4 h-4 " alt="" />
                Download Application
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3">
                <Link href="https://facebook.com" className="hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/facebook.webp" className="w-6 h-6" alt="" />
                </Link>
                <Link href="https://instagram.com" className="hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/instagram.png" className="w-6 h-6" alt="" />
                </Link>




                <Link href="https://telegram.org" className="hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/twitter.png" className="w-6 h-6" alt="" />
                </Link>
              </div>
              <div className="relative">

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/assets/img/logo.png"
                alt="MediPedia OverSeas"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            {/* Contact Info - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {/* NEET UG Card */}
              <div className="flex items-center gap-3 px-4 py-3 bg-pink-50 rounded-full border border-pink-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-600">NEET UG & NEET PG</div>
                  <Link
                    href="/neet-ug"
                    className="text-sm font-bold text-gray-900 hover:text-pink-600 transition-colors"
                  >
                    book a Personalised counselling →
                  </Link>
                </div>
              </div>

              {/* Call Now Card */}
              <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-full border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Call us Now</div>
                  <a
                    href="tel:+919988810118"
                    className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    +91 93510 18577

                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-full border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Whatsapp Us</div>
                  <a
                    href="https://wa.me/917804978049"
                    className="text-sm font-bold text-gray-900 hover:text-green-600 transition-colors"
                  >
                    +91 77373 67793
                  </a>
                </div>
              </div>
            </div>

            {/* Watch YouTube Button */}
            <Link
              href="https://youtube.com/@allaboutdoctor05?si=F9zJS8-n2ENlotQZ"
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-4 border-white shadow-lg"
            >
              <Youtube className="w-6 h-6" />
              Watch YouTub
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-t border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center">
            <Link
              href="/"
              className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>

          <div className="relative group">
              <button className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center gap-1">
                ABOUT US
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[200px]">
                  <Link
                    href="/about-allaboutdoctor"
                    className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                  >
                  <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>
                    About us
                  </Link>
                  <Link
                    href="/others/ayush"
                    className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50 block"
                  >
                  <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>
                    Our Team
                  </Link>
                  <Link
                    href="/others/paramedical"
                    className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                  >
                  <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>
                    Our Branches
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/neet-ug-counselling"
              className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              NEET UG
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>

            <Link
              href="/neet-pg-counselling"
              className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              NEET PG
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>

            {/* MBBS India Dropdown */}
            <div className="relative group">
              <button className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center gap-1">
                MBBS INDIA
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <div
                className="absolute left-0 top-full mt-3
  opacity-0 invisible scale-95
  group-hover:opacity-100 group-hover:visible group-hover:scale-100
  transition-all duration-300 ease-out
  z-50"
              >
                <div className="flex bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden min-w-[680px]">

                  {/* 🔹 LEFT : STATES */}
                  <div className="w-[60%] p-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">
                      MBBS Admission by State
                    </h4>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-72 overflow-y-auto pr-2">
                      {INDIA_STATES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                        >
                          {/* underline animation */}
                          <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>

                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 🔹 RIGHT : VISUAL CARD */}
                  <div className="w-[40%] relative bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex items-end">

                    {/* glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]"></div>

                    <div className="relative text-white">
                      <h3 className="text-2xl font-bold leading-tight">
                        MBBS in India
                      </h3>
                      <p className="text-sm text-blue-100 mt-2">
                        Government • Private • Deemed Colleges
                      </p>

                      <Link
                        href="/india/mbbs"
                        className="inline-block mt-4 px-5 py-2 text-sm font-semibold rounded-full
          bg-white text-blue-700
          hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                      >
                        Explore All →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>


            </div>

            {/* MBBS Abroad Dropdown */}
            <div className="relative group">
              <button className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center gap-1">
                MBBS ABROAD
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <div
                className="absolute left-0 top-full mt-3
  opacity-0 invisible scale-95
  group-hover:opacity-100 group-hover:visible group-hover:scale-100
  transition-all duration-300 ease-out
  z-50"
              >
                <div className="flex bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden min-w-[680px]">

                  {/* 🔹 LEFT : STATES */}
                  <div className="w-[60%] p-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">
                      MBBS Admission by Abroad
                    </h4>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-72 overflow-y-auto pr-2">
                      {ABROAD_COUNTRIES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                        >
                          {/* underline animation */}
                          <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>

                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 🔹 RIGHT : VISUAL CARD */}
                  <div className="w-[40%] relative bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex items-end">

                    {/* glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]"></div>

                    <div className="relative text-white">
                      <h3 className="text-2xl font-bold leading-tight">
                        MBBS in Abroad
                      </h3>
                      <p className="text-sm text-blue-100 mt-2">
                        Government • Private • Deemed Colleges
                      </p>

                      <Link
                        href="/abroad/mbbs"
                        className="inline-block mt-4 px-5 py-2 text-sm font-semibold rounded-full
          bg-white text-blue-700
          hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                      >
                        Explore All →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            {/* Others Dropdown */}
            <div className="relative group">
              <button className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center gap-1">
                COURSES
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <div
                className="absolute left-0 top-full mt-3
  opacity-0 invisible scale-95
  group-hover:opacity-100 group-hover:visible group-hover:scale-100
  transition-all duration-300 ease-out
  z-50"
              >
                <div className="flex bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden min-w-[180px]">

                  {/* 🔹 LEFT : STATES */}
                  <div className=" p-4">


                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-72 overflow-y-auto pr-2">
                      {COURSES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                        >
                          {/* underline animation */}
                          <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>

                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <Link
              href="/nmc-updates"
              className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              NMC Updates
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/"
              className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              OUR SUCCESS STORIES
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              GALLERY
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="px-4 py-4 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>


          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
               HOME
              </Link>

               <div>
                <button
                  onClick={() => toggleDropdown("about")}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                >
                  ABOUT US
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === "about" && (
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      href="/about-allaboutdoctor"
                      className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                    >
                     <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>
                    About us
                    </Link>
                    <Link
                      href="/"
                      className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                    >
                     <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>
                      Our Team
                    </Link>
                    <Link
                      href="/"
                      className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                    >
                     <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>
                      Our Branches

                    </Link>
                  </div>
                )}
              </div>
            
              <Link
                href="/neet-ug-counselling"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
                NEET UG
              </Link>
              <Link
                href="/neet-pg-counselling"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
                NEET UG
              </Link>

              <div>
                <button
                  onClick={() => toggleDropdown("india")}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                >
                  MBBS india
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "india" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === "india" && (
                  <div className="pl-4 py-2 space-y-1">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-72 overflow-y-auto pr-2">
                      {INDIA_STATES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                        >
                          {/* underline animation */}
                          <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>

                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown("abroad")}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                >
                  MBBS Abroad
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "abroad" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === "abroad" && (
                  <div className="pl-4 py-2 space-y-1">
                     <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-72 overflow-y-auto pr-2">
                      {ABROAD_COUNTRIES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                        >
                          {/* underline animation */}
                          <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>

                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

               <div>
                <button
                  onClick={() => toggleDropdown("COURSES")}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                >
                 COURSES
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "COURSES" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === "COURSES" && (
                  <div className="pl-4 py-2 space-y-1">
                     <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-72 overflow-y-auto pr-2">
                      {COURSES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="relative group/state px-3 py-2 text-sm font-medium text-gray-700 rounded-lg
            transition-all duration-300
            hover:text-blue-700 hover:bg-blue-50"
                        >
                          {/* underline animation */}
                          <span className="absolute left-3 bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover/state:w-1/2"></span>

                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
                NMC UPDATES 
              </Link>

              <Link
                href="/"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
              OUR SUCCESS STORIES
              </Link>

              <Link
                href="/gallery"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
                GALLERY
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              >
                About Us
              </Link>

              {/* Mobile Contact Cards */}
              <div className="pt-4 space-y-3 border-t mt-4">
                <a
                  href="tel:+919351018577"
                  className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-600">Call us Now</div>
                    <div className="text-sm font-bold text-gray-900">+91 93510 18577</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/7737367793"
                  className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-600">WhatsApp Us</div>
                    <div className="text-sm font-bold text-gray-900">+91 77373 67793</div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
