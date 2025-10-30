import { CheckCircle } from 'lucide-react'
import React from 'react'

const Career = () => {
  const careerOptions = [
    "Specialist Doctor in Government or Private Hospitals",
    "Research Consultant or Medical Scientist",
    "Assistant / Associate Professor in Medical Colleges",
    "Clinical Practice and Private Hospital Ownership",
    "Global Healthcare and Fellowship Programs",
  ]

  return (
    <div>
      {/* Career Opportunities After MD */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Career <span className="text-primary">Opportunities After MD</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            MD graduates can pursue diverse professional pathways in clinical medicine, research, academics, and global healthcare sectors.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">
            Career Options Include:
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {careerOptions.map((item, idx) => (
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
