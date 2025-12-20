"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function AdmissionProcess() {
  const [expandedStep, setExpandedStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Counseling & University Selection",
      description:
        "Get personalized guidance from All About Doctor experts to choose the best MBBS universities abroad.",
      details:
        "Our expert counselors help shortlist NMC-approved universities based on your budget, eligibility, and preferences.",
    },
    {
      number: 2,
      title: "Application Submission",
      description: "Apply to your preferred universities with our assistance.",
      details:
        "We ensure your application and documentation are accurately submitted within deadlines to increase acceptance chances.",
    },
    {
      number: 3,
      title: "Offer Letter Issuance",
      description: "Receive your admission confirmation from the university.",
      details:
        "Once approved, you'll get an official offer letter confirming your seat in the chosen medical university.",
    },
    {
      number: 4,
      title: "Documentation & Visa Assistance",
      description: "Our team assists with complete visa and legalization support.",
      details:
        "We help with document attestation, translation, and visa processing — ensuring a smooth approval process.",
    },
    {
      number: 5,
      title: "Fee Payment & Invitation Letter",
      description:
        "Pay university fees and receive your official invitation letter for visa approval.",
      details:
        "Once the payment is complete, the university issues the invitation letter required for your student visa.",
    },
    {
      number: 6,
      title: "Travel Arrangements",
      description:
        "Pre-departure briefing and flight coordination to your university.",
      details:
        "We organize flights, guide you on luggage, and ensure a hassle-free travel experience.",
    },
    {
      number: 7,
      title: "Arrival & Admission Abroad",
      description:
        "Smooth onboarding with university representatives upon arrival.",
      details:
        "Our local partners welcome you at the airport and assist with accommodation, orientation, and registration formalities.",
    },
  ]

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        {/* Header */}
        <div className="space-y-4">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Step-by-Step <span className="text-primary">Admission Process</span>
          </h1>

          <p className="text-foreground leading-relaxed text-lg">
            The MBBS abroad admission process is streamlined and guided by All
            About Doctor to ensure a stress-free experience.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 py-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Line */}
              {idx !== steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-12 bg-border"></div>
              )}

              {/* Step Card */}
              <button
                onClick={() =>
                  setExpandedStep(expandedStep === idx ? -1 : idx)
                }
                className="w-full text-left"
              >
                <div className="flex items-start gap-6 p-6 border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-sm">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold text-primary text-lg">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-foreground text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <div className="flex-shrink-0 text-primary">
                    {expandedStep === idx ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {expandedStep === idx && (
                <div className="mt-2 ml-6 p-4 border-l-2 border-secondary pl-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-foreground text-sm leading-relaxed">
                    {step.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="border-l-4 border-secondary pl-6 py-6 space-y-3">
          <p className="font-bold text-lg text-primary">All About Doctor Support</p>
          <p className="text-foreground leading-relaxed">
            We guide you through every step — from counseling to final admission
            abroad — ensuring complete transparency, safety, and success in your
            MBBS journey.
          </p>
        </div>
      </div>
    </section>
  )
}
