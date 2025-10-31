import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Comprehensive Child Health Expertise: Learn to manage neonatal, pediatric, and adolescent health concerns.",
    "Growing Demand: Pediatricians are highly valued in hospitals, clinics, and community healthcare centers.",
    "Strong Academic & Clinical Foundation: Gain knowledge in developmental biology, preventive pediatrics, and clinical care.",
    "Multiple Career Avenues: Opportunities in neonatal care, pediatric cardiology, and pediatric neurology.",
  ]

  return (
    <div>
      {/* Why Choose MD in Paediatrics */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MD in Paediatrics?</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RightChoice
