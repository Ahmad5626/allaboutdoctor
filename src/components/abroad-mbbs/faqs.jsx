"use client"

import { useState } from "react"

export default function FAQsAbroad() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "What is the fee structure for MBBS abroad?",
      a: "The tuition fees for MBBS abroad generally range from $3,000 to $7,000 per year, with hostel costs between $400 and $1,200 per year, depending on the country and university.",
    },
    {
      q: "Can Indian students study MBBS abroad?",
      a: "Yes, thousands of Indian students pursue MBBS abroad every year in countries like Russia, Georgia, Kazakhstan, Uzbekistan, and Vietnam, all recognized by NMC and WHO.",
    },
    {
      q: "How can I study MBBS abroad for free?",
      a: "Some universities offer merit-based scholarships or financial aid. Students can also explore government-funded scholarships in certain countries.",
    },
    {
      q: "What are the disadvantages of studying MBBS abroad?",
      a: "Challenges include cultural adaptation, distance from family, and potential language barriers in some countries. However, expert guidance can make the transition smooth.",
    },
    {
      q: "Is it possible to study MBBS abroad without NEET?",
      a: "No, qualifying NEET is mandatory for Indian students to pursue MBBS abroad.",
    },
    {
      q: "How can I find low-cost MBBS options abroad for Indian students?",
      a: "Countries like Kazakhstan, Uzbekistan, and Russia offer quality MBBS programs at lower fees compared to other destinations. Transparent consultancy services can help identify affordable options.",
    },
    {
      q: "What are the eligibility criteria for MBBS abroad?",
      a: "Students must have completed 10+2 with Physics, Chemistry, Biology, secured minimum 50% marks, qualified NEET, and be at least 17 years old.",
    },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>
            Frequently Asked <span className="text-primary">Questions</span> 
          </h1>
        </div>

        <div className="space-y-3 py-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                <span
                  className={`text-primary flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
