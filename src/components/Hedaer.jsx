"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const CORE_MENU = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-allaboutdoctor" },
  { label: "NEET UG", href: "/neet-ug-counselling" },
  { label: "NEET PG", href: "/neet-pg-counselling" }
]

const TAIL_MENU = [
  { label: "NMC UPDATES", href: "/nmc-updates" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
]

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
  { label: "West Bengal", href: "/india/west-bengal/mbbs" },
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
  { label: "Vietnam", href: "/abroad/vietnam/mbbs" },
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
  { label: "BVSc", href: "/courses/bvsc" },
];
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false)
        setActiveDropdown(null)
      }
    }
    if (mobileOpen) document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Contact Bar */}
      <div className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="mailto:info@allaboutdoctor.in" className="flex items-center gap-2 hover:opacity-80 transition">
              <MailIcon className="h-4 w-4" />
              <span>info@allaboutdoctor.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919351018577" className="flex items-center gap-1.5 hover:opacity-80 transition">
              <PhoneIcon className="h-4 w-4" />
              <span>+91 93510 18577</span>
            </a>
            <span className="text-blue-200">|</span>
            <a href="https://wa.me/917737367793" className="flex items-center gap-1.5 hover:opacity-80 transition">
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp: 77373 67793</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/assets/img/logo.png" alt="All About Doctor" width={180} height={50} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {CORE_MENU.map((item,i) => (
            <Link
              key={i}
              href={item.href}
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}

          {/* MBBS Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("mbbs")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition flex items-center gap-1.5 group">
              STUDY
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>

            {/* Mega Dropdown */}
            <div className="absolute  -left-100 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6 min-w-5xl  ">
                <div className="grid grid-cols-2 gap-8">
                  {/* India Section */}
                  <div>
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Study in India</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {INDIA_STATES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="px-3 py-1.5 text-xs bg-blue-50 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition whitespace-nowrap"
                        >
                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Abroad Section */}
                  <div>
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Study Abroad</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {ABROAD_COUNTRIES.map((country) => (
                        <Link
                          key={country.href}
                          href={country.href}
                          className="px-3 py-1.5 text-xs bg-blue-50 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition whitespace-nowrap"
                        >
                          {country.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("courses")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition flex items-center gap-1.5 group">
              COURSES
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>

            {/* Courses Dropdown */}
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-4 min-w-max">
                <div className="grid grid-cols-2 gap-2">
                  {COURSES.map((course) => (
                    <Link
                      key={course.href}
                      href={course.href}
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition whitespace-nowrap"
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tail Menu */}
          {TAIL_MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* <a
            href="/counselling"
            className="px-4 py-2 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Free Counselling
          </a> */}
          <a
            href="tel:+919351018577"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <BurgerIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {/* Core Menu */}
            {CORE_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* MBBS Mobile Submenu */}
            <div className="border-t pt-2 mt-2">
              <button
                onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === "mbbs" ? null : "mbbs")}
                className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition flex items-center justify-between"
              >
                MBBS
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMobileSubmenu === "mbbs" ? "rotate-180" : ""}`}
                />
              </button>

              {activeMobileSubmenu === "mbbs" && (
                <div className="pl-4 py-2 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase mb-2">India</p>
                    <div className="flex flex-wrap gap-2">
                      {INDIA_STATES.map((state) => (
                        <Link
                          key={state.href}
                          href={state.href}
                          className="px-2.5 py-1 text-xs bg-blue-50 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase mb-2">Abroad</p>
                    <div className="flex flex-wrap gap-2">
                      {ABROAD_COUNTRIES.map((country) => (
                        <Link
                          key={country.href}
                          href={country.href}
                          className="px-2.5 py-1 text-xs bg-blue-50 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {country.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Courses Mobile Submenu */}
            <div>
              <button
                onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === "courses" ? null : "courses")}
                className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition flex items-center justify-between"
              >
                COURSES
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMobileSubmenu === "courses" ? "rotate-180" : ""}`}
                />
              </button>

              {activeMobileSubmenu === "courses" && (
                <div className="pl-4 py-2 grid grid-cols-2 gap-2">
                  {COURSES.map((course) => (
                    <Link
                      key={course.href}
                      href={course.href}
                      className="px-3 py-1.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tail Menu */}
            {TAIL_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="border-t pt-4 mt-4 space-y-2">
              <a
                href="/counselling"
                className="block px-4 py-2 text-sm font-semibold text-center text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Free Counselling
              </a>
              <a
                href="tel:+919351018577"
                className="block px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/917737367793"
                className="block px-4 py-2 text-sm font-semibold text-center text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

/* Icons */
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264-4.779-.791 1.25 4.405.334.532a9.302 9.302 0 001.946 3.835 9.864 9.864 0 003.034 2.541 10.042 10.042 0 001.799.379c.584.061 1.189.027 1.775-.109 4.245-.959 7.494-4.817 7.932-9.321.02-.203.031-.406.031-.61 0-5.338-4.239-9.678-9.456-9.678" />
    </svg>
  )
}

function BurgerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
