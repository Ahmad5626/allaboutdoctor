"use client"
import { useState } from "react"

const Faq = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "What is the salary after Bachelor of Ayurvedic Medicine and Surgery?",
      a: "Fresh BAMS graduates earn between ₹30,000 – ₹60,000 per month, while experienced Ayurvedic doctors and consultants can earn ₹8–12 lakhs per year or more.",
    },
    {
      q: "What is the Bachelor of Ayurvedic Medicine and Surgery course fee?",
      a: "The BAMS course fees range from ₹2–6 lakhs in government colleges and ₹10–20 lakhs in private or deemed universities, depending on the institution and location.",
    },
    {
      q: "Is Bachelor of Ayurvedic Medicine and Surgery available in India?",
      a: "Yes, the BAMS program is available across AYUSH-approved universities and government colleges in India, including BHU, NIA Jaipur, and others.",
    },
    {
      q: "What is the eligibility for Bachelor of Ayurvedic Medicine and Surgery?",
      a: "Candidates must complete 10+2 (PCB) with 50% marks and qualify NEET-UG to be eligible for BAMS admission.",
    },
    {
      q: "What is taught in the Bachelor of Ayurvedic Medicine and Surgery syllabus?",
      a: "The syllabus covers Ayurvedic principles, herbal medicine, anatomy, physiology, toxicology, pharmacology, Panchakarma, and surgery.",
    },
    {
      q: "Which are the top Bachelor of Ayurvedic Medicine and Surgery colleges?",
      a: "Top BAMS colleges include Banaras Hindu University (BHU), National Institute of Ayurveda (Jaipur), and Government Ayurveda College (Kerala).",
    },
    {
      q: "Can I study Bachelor of Ayurvedic Medicine and Surgery online?",
      a: "No, BAMS cannot be pursued online. It requires practical clinical training in hospitals and live patient exposure.",
    },
    {
      q: "What are the Ayurveda Doctor course fees?",
      a: "The average Ayurveda Doctor course fee (BAMS) is ₹2–20 lakhs, depending on the college and whether it’s a government or private institution.",
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
