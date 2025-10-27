"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "What is NEET UG Counselling?",
      a: "NEET UG Counselling is the official process conducted by medical authorities to allot seats in MBBS, BDS, and AYUSH courses for candidates who have qualified NEET UG.",
    },
    {
      q: "Where can I check the NEET UG Counselling schedule?",
      a: "The NEET UG Counselling schedule is published on the official counselling portal and includes round-wise registration, choice filling, and seat allotment dates.",
    },
    {
      q: "How many rounds of NEET UG Counselling are there?",
      a: "Typically, there are multiple rounds including Round 1, Round 2, and Round 3, depending on seat availability and candidate participation.",
    },
    {
      q: "What is a NEET UG Counselling extension?",
      a: "A counselling extension occurs when the authorities extend the registration or choice filling deadline, giving candidates additional time to complete the process.",
    },
    {
      q: "Can a candidate resign after seat allotment?",
      a: "Yes, candidates can resign or withdraw after seat allotment. However, it must be done within the official resignation period announced by the counselling authorities.",
    },
    {
      q: "Where can I check the NEET UG Counselling results?",
      a: "The NEET UG Counselling results are released on the official counselling portal and indicate seat allotment based on merit and category.",
    },
    {
      q: "How is seat allocation done during NEET UG Counselling?",
      a: "Seats are allotted based on NEET UG scores, category reservation, and choices filled by the candidates. Subsequent rounds consider vacant seats from previous rounds.",
    },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Frequently Asked <span className="text-primary">Questions</span> </h1>

        <div className="space-y-4 py-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-foreground/5 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.q}</h3>
                <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 border-t border-border text-foreground/80 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
