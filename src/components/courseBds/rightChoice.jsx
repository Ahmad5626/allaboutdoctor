import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Stable and respected medical profession",
    "Opportunity to improve oral health and change lives",
    "Expanding demand for skilled dental professionals",
    "High earning potential with independent practice",
    "Global opportunities and postgraduate career paths",
    "Perfect blend of science, creativity, and patient care",
  ]

  return (
    <div>
      {/* Why BDS is Right Choice */}
      <section className="px-4 md:px-8 border-b border-primary/20">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why BDS is the Right <span className="text-primary">Choice for You</span>
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
