import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Broad Scope of Practice: Gain expertise in internal medicine, covering cardiology, pulmonology, nephrology, gastroenterology, endocrinology, and infectious diseases.",
    "Pathway to Super-Specialization: Opens doors to DM/Fellowship programs in advanced fields like cardiology, neurology, nephrology, and more.",
    "High Demand: Physicians with MD General Medicine qualifications are in demand across hospitals, clinics, and research institutions.",
    "Diverse Career Opportunities: Choose from clinical practice, teaching, healthcare consulting, or research-based roles.",
  ]

  return (
    <div>
      {/* Why Choose MD in General Medicine */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MD in General Medicine?</span>
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
