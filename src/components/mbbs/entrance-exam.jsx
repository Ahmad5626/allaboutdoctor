"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function EntranceExam() {
  const [activeTab, setActiveTab] = useState("about")

  const tabs = [
    { id: "about", label: "About NEET-UG" },
    { id: "counselling", label: "Counselling & Seats" },
    { id: "steps", label: "Admission Steps" },
  ]

  const admissionSteps = [
    {
      number: 1,
      title: "Register for NEET-UG",
      description: "Register on the NTA portal and complete your application",
      icon: "📝",
    },
    {
      number: 2,
      title: "Appear & Qualify",
      description: "Appear for the exam and achieve the required percentile",
      icon: "✓",
    },
    {
      number: 3,
      title: "Register for Counselling",
      description: "Register for MCC or State-level Counselling",
      icon: "🎯",
    },
    {
      number: 4,
      title: "Choose Colleges",
      description: "Select preferred colleges and lock your choices",
      icon: "🏥",
    },
    {
      number: 5,
      title: "Complete Admission",
      description: "Document verification and finalize admission formalities",
      icon: "✅",
    },
  ]

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        {/* Header */}
        <div>
         <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Entrance Exam &  <span className="text-primary">Admission Process</span></h1>
          
        </div>

        <div className="space-y-6 py-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-foreground hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-48">
            {activeTab === "about" && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-bold text-primary">About NEET-UG</h3>
                <p className="text-foreground leading-relaxed text-base">
                  The National Eligibility cum Entrance Test (NEET-UG) is the only entrance exam for MBBS admissions in
                  India. Conducted by NTA, it evaluates students on Physics, Chemistry, and Biology.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Subjects", value: "Physics, Chemistry, Biology" },
                    { label: "Conducting Body", value: "National Testing Agency (NTA)" },
                    { label: "Mandatory", value: "Yes, for all MBBS admissions" },
                  ].map((item, idx) => (
                    <div key={idx} className="border border-border rounded-lg p-4 space-y-2">
                      <p className="text-sm font-semibold text-primary">{item.label}</p>
                      <p className="text-foreground text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "counselling" && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-bold text-primary">Counselling & Seat Allotment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
                    <p className="text-lg font-bold text-primary">MCC (All India Quota)</p>
                    <p className="text-foreground text-sm">15% of total seats allocated nationally</p>
                    <p className="text-xs text-secondary">Managed by Medical Counselling Committee</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-6 py-4 space-y-2">
                    <p className="text-lg font-bold text-secondary">State-level Counselling</p>
                    <p className="text-foreground text-sm">85% of seats allocated by individual states</p>
                    <p className="text-xs text-primary">Varies by state regulations</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "steps" && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-bold text-primary">5-Step Admission Journey</h3>
                <div className="space-y-3">
                  {admissionSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-grow space-y-1">
                        <p className="font-semibold text-foreground">{step.title}</p>
                        <p className="text-sm text-foreground/70">{step.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border border-primary rounded-lg p-6 md:p-8 space-y-4 bg-white/50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 text-lg">
              🤝
            </div>
            <div className="space-y-2">
              <p className="font-bold text-primary text-lg">All About Doctor Support</p>
              <p className="text-foreground leading-relaxed">
                We simplify the entire admission journey — from NEET form filling to college seat confirmation — through
                personalized counseling and doctor-led guidance. Our expert team ensures a transparent, stress-free
                experience every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  )
}
