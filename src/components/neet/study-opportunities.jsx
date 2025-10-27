"use client"

import { useState } from "react"

export default function StudyOpportunities() {
  const [activeSlide, setActiveSlide] = useState(0)

  const indiaStates = [
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "Gujarat",
    "Rajasthan",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "West Bengal",
    "Telangana",
  ]

  const abroadCountries = [
    "Russia",
    "Kazakhstan",
    "Georgia",
    "Uzbekistan",
    "Armenia",
    "Nepal",
    "Bangladesh",
    "Philippines",
    "Kyrgyzstan",
    "Egypt",
  ]

  const itemsPerSlide = 5
  const indiaSlides = Math.ceil(indiaStates.length / itemsPerSlide)
  const abroadSlides = Math.ceil(abroadCountries.length / itemsPerSlide)

  const handlePrev = () => setActiveSlide(Math.max(0, activeSlide - 1))
  const handleNext = () => setActiveSlide(Math.min(Math.max(indiaSlides, abroadSlides) - 1, activeSlide + 1))

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
          Study Opportunities with <span className="text-primary">All About Doctor</span> 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-6">
          {/* India Section */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              In India
            </h3>
            <div className="space-y-3">
              {indiaStates.slice(activeSlide * itemsPerSlide, (activeSlide + 1) * itemsPerSlide).map((state, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-primary/30 rounded-lg hover:border-primary transition-colors"
                >
                  <p className="text-foreground font-medium">{state}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Abroad Section */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center gap-2">
              <span className="w-1 h-8 bg-secondary rounded-full"></span>
              Abroad
            </h3>
            <div className="space-y-3">
              {abroadCountries
                .slice(activeSlide * itemsPerSlide, (activeSlide + 1) * itemsPerSlide)
                .map((country, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-secondary/30 rounded-lg hover:border-secondary transition-colors"
                  >
                    <p className="text-foreground font-medium">{country}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            disabled={activeSlide === 0}
            className="p-2 border border-primary rounded-lg hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.max(indiaSlides, abroadSlides) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === activeSlide ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={activeSlide >= Math.max(indiaSlides, abroadSlides) - 1}
            className="p-2 border border-primary rounded-lg hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}
