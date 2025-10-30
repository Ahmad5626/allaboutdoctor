import React from 'react'

const Support = () => {
  const supportSteps = [
    "Profile Evaluation & Admission Eligibility",
    "NEET-UG Guidance and Counselling Support",
    "College Shortlisting (India & Abroad)",
    "Application, Documentation & Verification",
    "Visa Assistance for International Programs",
    "Post-Admission & Hostel Support",
  ]

  return (
    <div>
      {/* How We Support You */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            How We <span className="text-primary">Support You</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            At All About Doctor Education Pvt. Ltd., we assist students at every step — from course selection to final admission and beyond.
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
