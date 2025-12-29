"use client"

import { CheckCircle } from "lucide-react"

export default function MbbsAdmissionJourney() {
  const points = [
    "Free expert counselling",
    "State-wise seat matrix analysis",
    "End-to-end admission support",
    "Step-by-step MCC & State Govt portal registration support",
    "Document verification & upload guidance",
    "Profile evaluation based on NEET rank, category, & domicile",
    "Quota-based college shortlisting",
    "Previous year cutoff analysis",
    "Round-wise guidance: R1, R2, Mop-up & Stray Vacancy rounds",
    "Choice filling strategy sessions led by doctor mentors",
    "Seat matrix analysis & realistic prediction",
    "WhatsApp support from dedicated expert counsellor",
    "Post-allotment document & reporting assistance",
    "Verification checklist before joining",
  ]

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            Start Your MBBS Admission Journey in India
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed fade-item">
            Request your personalized MBBS admission plan today.
          </p>
        </div>

        {/* Content Card */}
        <div className="relative rounded-3xl border border-gray-200 bg-white shadow-sm">

          {/* subtle top accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl" />

          <div className="p-10 md:p-14">

            <div className="grid md:grid-cols-2 gap-6">
              {points.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 
                             px-5 py-4 hover:border-primary/30 hover:bg-primary/5 transition fade-item"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-start">
          <button
            className="rounded-full bg-primary px-8 py-4 text-white font-medium 
                       shadow hover:bg-primary/90 transition"
          >
            Request Personalized MBBS Plan →
          </button>
        </div>

      </div>
    </section>
  )
}
