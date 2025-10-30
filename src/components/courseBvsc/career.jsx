import { CheckCircle } from 'lucide-react'
import React from 'react'

const Career = () => {
  const careerScope = [
    "Veterinary Officer in Government Departments",
    "Animal Surgeon or Pet Clinic Practitioner",
    "Research Associate or Livestock Consultant",
    "Wildlife and Zoo Veterinarian",
    "Veterinary Pharmaceutical Executive",
    "Academic Faculty in Veterinary Colleges",
    "Private Practice & Animal Welfare Organisations",
  ]

  return (
    <div>
      {/* Career Scope */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Career Scope <span className="text-primary">After BVSc</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            A BVSc graduate has a wide range of opportunities in animal healthcare, government, research, 
            and agriculture sectors.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">
            Career Options:
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {careerScope.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career
