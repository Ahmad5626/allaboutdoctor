import React from 'react'

const WhatIsBvsc = () => {
  return (
    <div>
      {/* What is BVSc */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is <span className="text-primary">BVSc?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              BVSc (Bachelor of Veterinary Science) is a professional undergraduate degree that focuses on animal health,
              treatment, and management. This 5.5-year program — including 4.5 years of academic training and 1 year of
              compulsory internship — prepares students to diagnose diseases, perform surgeries, and ensure the
              wellbeing of animals and livestock.
            </p>

            <p className="text-lg text-foreground/80 font-semibold mt-8">
              Core subjects covered include:
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Veterinary Anatomy & Physiology</li>
              <li>Animal Nutrition & Breeding</li>
              <li>Veterinary Pathology & Microbiology</li>
              <li>Animal Reproduction & Gynecology</li>
              <li>Veterinary Pharmacology & Medicine</li>
              <li>Livestock Production & Management</li>
              <li>Public Health & Epidemiology</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsBvsc
