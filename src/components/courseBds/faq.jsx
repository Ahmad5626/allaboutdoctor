
"use client"
import { useState } from "react"

const Faq = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "What is the salary after a Bachelor of Dental Surgery?",
      a: "A BDS graduate can earn between ₹30,000 to ₹80,000 per month initially. Experienced dentists and clinic owners earn significantly higher.",
    },
    {
      q: "What is the Bachelor of Dental Surgery course fee?",
      a: "Fees range between ₹3 to ₹10 lakhs per year in private colleges. Abroad programs may start from ₹15–20 lakhs total.",
    },
    {
      q: "Is Bachelor of Dental Surgery available in India?",
      a: "Yes, BDS is available in DCI-approved universities and dental colleges across India.",
    },
    {
      q: "What is the Bachelor of Dental Surgery course duration?",
      a: "The course spans 5 years — 4 years of academics and 1 year of compulsory internship.",
    },
    {
      q: "Does Bachelor of Dental Surgery require NEET?",
      a: "Yes, NEET-UG is mandatory for admission into any recognized BDS program in India.",
    },
    {
      q: "Can I study Bachelor of Dental Surgery without NEET?",
      a: "In India, NEET is compulsory. However, a few foreign universities may offer BDS-equivalent programs without NEET (as per local regulations).",
    },
    {
      q: "What are the subjects in Bachelor of Dental Surgery?",
      a: "Core subjects include Anatomy, Physiology, Dental Materials, Oral Pathology, Orthodontics, and Oral Surgery.",
    },
    {
      q: "What is the Bachelor of Dental Surgery salary per month?",
      a: "Fresh graduates earn ₹30K–₹50K per month, while experienced dentists can earn ₹1L–₹3L or more monthly in private practice.",
    },
  ]

  return (
    <div>
      {/* FAQs */}
      <section className="px-4 md:px-8 border-b border-primary/20">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Frequently Asked <span className="text-primary">Questions (FAQs)</span>
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-primary/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => {
                    setExpandedFAQ(expandedFAQ === idx ? null : idx)
                    setOpenIdx(openIdx === idx ? null : idx)
                  }}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-primary/5 transition text-left"
                >
                  <p className="font-semibold text-foreground">{faq.q}</p>
                  <span
                    className={`text-primary text-xl flex-shrink-0 transition-transform ${
                      openIdx === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {expandedFAQ === idx && (
                  <div className="px-6 py-4 bg-primary/5 border-t border-primary/20">
                    <p className="text-foreground/80">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq
