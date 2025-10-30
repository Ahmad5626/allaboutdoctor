import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Transparent & ethical admission process",
    "Direct university partnerships (India & Abroad)",
    "Doctor-led mentorship & application guidance",
    "10,000+ students placed successfully since 2015",
    "Comprehensive support from start to specialization",
  ]

  return (
    <div>
      {/* Why Pursue MS Through All About Doctor Education Pvt. Ltd. */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Pursue <span className="text-primary">MS</span> Through All About Doctor Education Pvt. Ltd.?
          </h1>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Career Scope After MS
            </h3>
            <p className="text-foreground/80 text-lg">
              After completing an MS, doctors can become specialist surgeons, consultants, or medical educators. 
              Many pursue further training through MCh or DNB programs to achieve super-specialization in their chosen field.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RightChoice
