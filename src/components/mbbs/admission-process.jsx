"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function AdmissionProcess() {
  const [expandedStep, setExpandedStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Register for NEET-UG",
      description: "Register and appear for the NEET-UG exam on the NTA portal",
      details: "Complete your registration with all required documents and personal information.",
    },
    {
      number: 2,
      title: "Qualify with Required Percentile",
      description: "Achieve the required percentile to be eligible for counseling",
      details: "Your NEET score determines your eligibility for various colleges and counseling rounds.",
    },
    {
      number: 3,
      title: "Participate in Counseling",
      description: "Participate in MCC (All India Quota – 15%) or State-level Counseling (85%)",
      details: "Choose between All India Quota or your state's counseling process based on your preference.",
    },
    {
      number: 4,
      title: "Select & Lock Choices",
      description: "Select preferred colleges and lock your choices",
      details: "Carefully choose your college preferences in order of priority and finalize your selection.",
    },
    {
      number: 5,
      title: "Complete Verification",
      description: "Complete document verification and finalize admission",
      details: "Submit all required documents and complete the final admission formalities with your chosen college.",
    },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        {/* Header */}
        <div className="space-y-4">
  <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Admission  <span className="text-primary">Process</span> </h1>
          
          <p className="text-foreground leading-relaxed text-lg">
            Admission to MBBS in India is conducted through NEET-UG, organized by the National Testing Agency (NTA).
          </p>
        </div>

        <div className="space-y-4 py-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Line */}
              {idx !== steps.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-12 bg-border"></div>}

              {/* Step Card */}
              <button onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)} className="w-full text-left">
                <div className="flex items-start gap-6 p-6 border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-sm">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary bg-transparent flex items-center justify-center font-bold text-primary text-lg">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg md:text-xl font-bold text-foreground">{step.title}</h4>
                    <p className="text-foreground text-sm md:text-base">{step.description}</p>
                  </div>

                  {/* Expand Icon */}
                  <div className="flex-shrink-0 text-primary">
                    {expandedStep === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {expandedStep === idx && (
                <div className="mt-2 ml-6 p-4 border-l-2 border-secondary pl-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-foreground text-sm leading-relaxed">{step.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="border-l-4 border-secondary pl-6 py-6 space-y-3">
          <p className="font-bold text-lg text-primary">All About Doctor Support</p>
          <p className="text-foreground leading-relaxed">
            We guide you at every step — from NEET registration to seat allotment — ensuring a transparent, stress-free
            admission experience. Our expert counselors provide personalized guidance tailored to your profile and
            aspirations.
          </p>
        </div>
      </div>
    </section>
  )
}
