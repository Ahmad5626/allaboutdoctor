"use client"

import { useState } from "react"

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "What is the full form of MBBS?",
      a: "MBBS stands for Bachelor of Medicine, Bachelor of Surgery, the primary undergraduate degree for aspiring doctors in India.",
    },
    {
      q: "What are the fees for MBBS in India?",
      a: "Government Universities: ₹2 – ₹5 lakh | Private Universities: ₹30 – ₹80 lakh | Deemed Universities: ₹75 lakh – ₹1 crore. Additional expenses may include hostel, food, exams, and study materials.",
    },
    {
      q: "What is the MBBS course duration in India?",
      a: "The MBBS program in India lasts 5.5 years, which includes 4.5 years of academic study and 1-year compulsory internship.",
    },
    {
      q: "Can I pursue MBBS in India after 12th?",
      a: "Yes, students who have completed 10+2 with Physics, Chemistry, Biology, and English are eligible to apply for MBBS, provided they qualify NEET-UG.",
    },
    {
      q: "Which are the top government MBBS universities in India?",
      a: "AIIMS New Delhi, KGMU Lucknow, JIPMER Puducherry, Maulana Azad Medical College New Delhi, and Grant Medical College Mumbai.",
    },
    {
      q: "What is the starting salary after MBBS in India?",
      a: "The starting salary for MBBS graduates ranges between ₹6 – ₹12 lakh per annum, depending on specialization, experience, and type of healthcare facility.",
    },
    {
      q: "Is NEET mandatory for MBBS admission in India?",
      a: "Yes, NEET-UG is compulsory for all Indian students seeking admission to MBBS programs.",
    },
    {
      q: "Can I study MBBS in India at an affordable cost?",
      a: "Yes, government universities provide subsidized education, making MBBS highly affordable compared to private institutions.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
          <div className="h-1 w-16 bg-secondary rounded-full"></div>
        </div>

        <div className="space-y-3">
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
