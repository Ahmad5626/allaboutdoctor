import React from 'react'

const stepByStep = () => {
      const successPoints = [
    "Initial counselling and profile assessment",
    "University shortlisting and eligibility check",
    "Application preparation and submission",
    "Admission confirmation and document verification",
    "Pre-departure guidance and travel arrangements"
  ]
  return (
    <div>
         {/* How It Helps Section */}
      <section className="py-16 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            Step-by-Step<span className="text-primary">Admission Process</span> 
          </h1>
         

          <div className="space-y-4 py-6">
            {successPoints.map((point, index) => (
              <div key={index} className="flex gap-4 p-4 border-l-4 border-primary bg-primary/5 rounded">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-foreground/80 pt-1">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default stepByStep
