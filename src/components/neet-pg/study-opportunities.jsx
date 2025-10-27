"use client"

import { useState } from "react"

export default function StudyOpportunities() {
  const [activeTab, setActiveTab] = useState("india")

  const opportunities = {
    india: [
      "Admission guidance to top postgraduate medical programs",
      "Government medical colleges with competitive seats",
      "Private medical colleges with specialized programs",
      "Deemed universities with advanced facilities",
      "Direct mentorship from experienced faculty",
    ],
    abroad: [
      "Support for foreign medical graduates seeking NEET PG",
      "Guidance for international postgraduate programs",
      "Visa and documentation assistance",
      "Placement support in global medical institutions",
      "Continuous mentorship and career guidance",
    ],
  }

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Study <span className="text-primary"> Opportunities </span> </h1>
          
        </div>

        <div className="flex gap-4 border-b border-border py-6">
          <button
            onClick={() => setActiveTab("india")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "india"
                ? "border-primary text-primary"
                : "border-transparent text-foreground/60 hover:text-foreground"
            }`}
          >
            In India
          </button>
          <button
            onClick={() => setActiveTab("abroad")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "abroad"
                ? "border-secondary text-secondary"
                : "border-transparent text-foreground/60 hover:text-foreground"
            }`}
          >
            Abroad
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities[activeTab].map((opp, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div
                className={`text-2xl font-bold flex-shrink-0 ${activeTab === "india" ? "text-primary" : "text-secondary"}`}
              >
                ★
              </div>
              <span className="text-foreground/80">{opp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
