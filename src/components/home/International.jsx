"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const collaborations = [
  {
    name: "European Medical Alliance",
    country: "Germany",
    img: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    name: "Asian Health University",
    country: "Malaysia",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    name: "Global Research Institute",
    country: "Russia",
    img: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6",
  },
  {
    name: "International Medical Hub",
    country: "Kazakhstan",
    img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
  },
]

export default function InternationalCollaboration() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % collaborations.length)
  }

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? collaborations.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const auto = setInterval(nextSlide, 4000)
    return () => clearInterval(auto)
  }, [])

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT (FIXED SPACING) */}
        <div className="text-white space-y-6 max-w-xl">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer">
            International <br /> Collaborations
          </h2>

          <p className="text-base text-blue-100 leading-relaxed mt-6 font-light">
            Our international collaborations connect students with
            globally reputed medical universities, offering advanced
            education, global exposure, and career opportunities.
          </p>

      <Link href="/about-allaboutdoctor" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 animate-button-entrance">
            Explore Collaborations →
          </Link>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 280}px)`,
              }}
            >
              {collaborations.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[260px] h-[300px] bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-50 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLIDER CONTROLS */}
          <div className="md:absolute mdL-bottom-14 md:left-1/2 md:-translate-x-1/2 flex gap-4 py-6 ">
            <button
              onClick={prevSlide}
              className="bg-white text-primary p-3 rounded-full shadow hover:scale-110 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-primary p-3 rounded-full shadow hover:scale-110 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
