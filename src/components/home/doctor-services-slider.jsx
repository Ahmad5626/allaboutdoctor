"use client"

import { useEffect, useRef, useState } from "react"

const servicesData = [
  {
    id: 1,
    title: "General Checkup",
    description: "Comprehensive health assessment and preventive care for all ages",
    icon: "🏥",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Dental Care",
    description: "Professional dental treatments and oral health maintenance",
    icon: "🦷",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "Cardiology",
    description: "Specialized heart and cardiovascular disease treatment",
    icon: "❤️",
    color: "from-red-500 to-orange-400",
  },
  {
    id: 4,
    title: "Dermatology",
    description: "Skin care and treatment for various skin conditions",
    icon: "🌿",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 5,
    title: "Pediatrics",
    description: "Specialized healthcare services for children and infants",
    icon: "👶",
    color: "from-yellow-500 to-amber-400",
  },
  {
    id: 6,
    title: "Surgery",
    description: "Advanced surgical procedures and post-operative care",
    icon: "🔬",
    color: "from-indigo-500 to-blue-400",
  },
]

export default function VerticalCarousel() {
  const [visibleIndices, setVisibleIndices] = useState(new Set())
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisible = new Set(visibleIndices)
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target)
          if (entry.isIntersecting) {
            newVisible.add(index)
          }
        })
        setVisibleIndices(newVisible)
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [visibleIndices])

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-background via-background to-transparent pb-8 pt-12">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent animate-shimmer">
            Our  {" "}Services
          </h2>
          <h3 className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our comprehensive range of healthcare services
          </h3>
        </div>
      </div>

      {/* Vertical Carousel Container */}
      <div ref={containerRef} className="relative w-full max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className={`transform transition-all duration-700 ease-out ${
                visibleIndices.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visibleIndices.has(index) ? `${index * 100}ms` : "0ms",
              }}
            >
              <div
                className={`group relative bg-gradient-to-br ${service.color} p-0.5 rounded-2xl cursor-pointer overflow-hidden`}
              >
                {/* Animated background blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

                <div className="relative bg-background rounded-2xl p-8 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Icon */}
                  <div
                    className={`text-6xl mb-6 inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-foreground mb-3 font-sans">{service.title}</h2>
                    <p className="text-lg text-foreground/70 leading-relaxed mb-6">{service.description}</p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Learn More
                      <span className="ml-2 text-xl">→</span>
                    </button>
                  </div>

                  {/* Decorative line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 pb-8">
          <div className="flex flex-col items-center gap-2 text-foreground/50 animate-bounce">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
