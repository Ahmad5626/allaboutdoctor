import React from 'react'

const Support = () => {
  const supportSteps = [
    "Personalized Profile Review & Eligibility Check",
    "NEET-PG & Counselling Guidance (India & Abroad)",
    "College Shortlisting & Application Assistance",
    "Admission, Hostel, and Visa Support",
    "Post-Admission Mentorship for Career Planning",
  ]

  return (
    <div>
      {/* How We Support Your MD Journey */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            How We Support Your <span className="text-primary">MD Journey</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            At All About Doctor Education Pvt. Ltd., we provide complete guidance and end-to-end support throughout your MD admission process:
          </p>

          <div className="space-y-4">
            {supportSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start p-4 bg-white rounded-lg border border-primary/20"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-foreground/80 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
