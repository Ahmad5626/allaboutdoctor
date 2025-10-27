"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "What is NEET PG Counselling?",
      a: "NEET PG Counselling is the official process conducted by medical authorities to allot seats in MD, MS, PG Diploma, and DNB courses for candidates who have qualified NEET PG.",
    },
    {
      q: "Where can I check the NEET PG Counselling schedule?",
      a: "The NEET PG Counselling schedule is published on the official counselling portal and includes round-wise registration, choice filling, and seat allotment dates.",
    },
    {
      q: "How many rounds of NEET PG Counselling are there?",
      a: "Typically, there are multiple rounds, including Round 1, Round 2, and Round 3, depending on seat availability and candidate participation.",
    },
    {
      q: "What is a NEET PG Counselling extension?",
      a: "A counselling extension occurs when authorities extend the registration or choice filling deadline, giving candidates additional time to complete the process.",
    },
    {
      q: "Can a candidate resign after seat allotment?",
      a: "Yes, candidates can resign or withdraw after seat allotment within the official resignation period announced by the counselling authorities.",
    },
    {
      q: "Where can I check the NEET PG Counselling results?",
      a: "The results are released on the official counselling portal and indicate seat allotment based on merit and category.",
    },
    {
      q: "How is seat allocation done during NEET PG Counselling?",
      a: "Seats are allotted based on NEET PG scores, category reservation, and choices filled. Subsequent rounds consider vacant seats from previous rounds.",
    },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Frequently Asked <span className="text-primary">Questions</span> </h1>
          
        </div>

        <div className="space-y-4 py-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-foreground/5 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">{faq.q}</span>
                <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 border-t border-border bg-foreground/2">
                  <p className="text-foreground/80 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
