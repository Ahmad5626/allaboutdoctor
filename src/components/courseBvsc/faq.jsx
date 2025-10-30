"use client"
import { useState } from "react"

const Faq = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "Which are the top Bachelor of Veterinary Science colleges in India?",
      a: "Some leading VCI-approved BVSc colleges include IVRI Bareilly, Tamil Nadu Veterinary College, Karnataka Veterinary University, and Assam Agricultural University.",
    },
    {
      q: "What are the best Bachelor of Veterinary Science and Animal Husbandry colleges?",
      a: "Top BVSc & AH colleges include Guru Angad Dev Veterinary University (Ludhiana), Bombay Veterinary College (Mumbai), and College of Veterinary Science (Hyderabad).",
    },
    {
      q: "What is the eligibility for Bachelor of Veterinary Science?",
      a: "Students must have passed 10+2 (PCB) with at least 50% marks and must be 17 years or older. NEET-UG qualification is generally required.",
    },
    {
      q: "What is the salary after Bachelor of Veterinary Science?",
      a: "Fresh BVSc graduates earn ₹30,000–₹60,000 per month initially, with experienced veterinarians earning ₹8–12 LPA or more.",
    },
    {
      q: "What is the Bachelor of Veterinary Science course fee?",
      a: "Fees range between ₹2–8 lakhs in government colleges and ₹10–20 lakhs in private or international universities.",
    },
    {
      q: "What are the main subjects in Bachelor of Veterinary Science?",
      a: "Key subjects include Anatomy, Physiology, Animal Nutrition, Surgery, Pathology, Microbiology, and Veterinary Public Health.",
    },
    {
      q: "What is the average Bachelor of Veterinary Science salary in India?",
      a: "The average salary for a veterinary graduate in India ranges from ₹5–10 LPA, depending on experience and specialization.",
    },
    {
      q: "Can I study Bachelor of Veterinary Science without NEET?",
      a: "In India, NEET-UG is compulsory for BVSc admission. However, certain foreign universities may accept students without NEET based on alternative eligibility criteria.",
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
