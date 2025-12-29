"use client"

import { useState } from "react"

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "Is NEET mandatory for MBBS in India?",
      a: " Yes, NEET-UG is compulsory.",
    },
    {
      q: "Can I apply to multiple state counsellings?",
      a: " Yes, eligible candidates can apply to AIQ and multiple states.",
    },
    {
      q: "Are private medical colleges safe to choose?",
      a: " Yes, NMC-approved private colleges offer good academics and clinical exposure.",
    },
    {
      q: "Does All About Doctor provide state-wise counselling support?",
      a: " Yes, complete AIQ and state-wise counselling assistance is provided.",
    },
    
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
              
              Frequently Asked Questions</h1>
          
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
