import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Technology-Driven Medical Field: Learn to interpret imaging for accurate diagnosis and treatment planning.",
    "High Demand in Healthcare: Radiologists are indispensable across hospitals, diagnostics centers, and research institutions.",
    "Lucrative and Global Career: Offers one of the most rewarding career paths in modern medicine.",
    "Opportunities for Super-Specialization: Progress into DM or Fellowship programs in Interventional Radiology, Neuroradiology, or Nuclear Medicine.",
  ]

  return (
    <div>
      {/* Why Choose MD in Radiology */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MD in Radiology?</span>
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
