"use client"

import { useState } from "react"

export default function SeatsReservation() {
  const [activeCategory, setActiveCategory] = useState(null)

  const categories = [
    { name: "General", percentage: "50%", description: "Open category seats" },
    { name: "SC", percentage: "15%", description: "Scheduled Caste" },
    { name: "ST", percentage: "7.5%", description: "Scheduled Tribe" },
    { name: "OBC", percentage: "27.5%", description: "Other Backward Class" },
    { name: "PwD", percentage: "5%", description: "Persons with Disability" },
    { name: "EWS", percentage: "10%", description: "Economically Weaker Section" },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Seats & <span className="text-primary"> Reservation </span></h1>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Seats are allotted based on NEET PG scores, category reservation, and choices filled by candidates.
            Reservation follows Government of India guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
              className="group cursor-pointer border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">{cat.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{cat.percentage}</div>
                </div>
              </div>

              {/* Visual Percentage Bar */}
              <div className="w-full h-2 bg-border rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                  style={{ width: cat.percentage }}
                ></div>
              </div>

              {/* Expandable Details */}
              {activeCategory === idx && (
                <div className="mt-4 pt-4 border-t border-border/50 text-sm text-foreground/70 animate-in fade-in duration-300">
                  <p>Category-based allocation as per Government of India guidelines for equitable representation.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border border-border rounded-xl p-8 space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            Key Points
          </h3>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Seats allotted based on NEET PG scores and merit</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Category reservation follows Government of India guidelines</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Choices filled by candidates determine final allocation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
