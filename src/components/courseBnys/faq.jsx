"use client"
import { useState } from "react"

const Faq = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "What is the Bachelor of Naturopathy and Yogic Sciences salary?",
      a: "The average BNYS salary ranges between ₹3–6 LPA for fresh graduates, while experienced naturopaths, yoga consultants, or clinic owners can earn ₹10–15 LPA or more.",
    },
    {
      q: "Is Bachelor of Naturopathy and Yogic Sciences available in India?",
      a: "Yes, BNYS programs are offered by several AYUSH-recognised universities and naturopathy colleges across India such as SVYASA Bengaluru, SDM Ujire, and NIN Pune.",
    },
    {
      q: "Can I study Bachelor of Naturopathy and Yogic Sciences online?",
      a: "Some institutions offer online or hybrid BNYS modules, focusing on yoga, lifestyle management, and theory-based learning. However, clinical practice requires on-campus attendance for certification.",
    },
    {
      q: "What is the Bachelor of Naturopathy and Yogic Sciences syllabus?",
      a: "The BNYS syllabus covers Anatomy, Physiology, Pathology, Yoga Therapy, Acupuncture, Hydrotherapy, Nutrition, Psychology, and Clinical Naturopathy.",
    },
    {
      q: "Which are the top Bachelor of Naturopathy and Yogic Sciences colleges?",
      a: "Top colleges include SDM College of Naturopathy (Ujire), SVYASA University (Bengaluru), National Institute of Naturopathy (Pune), and Mahatma Gandhi Institute of Medical Sciences.",
    },
    {
      q: "What is the BNYS course fees?",
      a: "The BNYS course fees range from ₹1.5–5 lakhs in government colleges and ₹6–15 lakhs in private or international universities.",
    },
    {
      q: "What are the average Naturopathy and Yogic Sciences fees?",
      a: "For AYUSH-approved institutions in India, the average fees are ₹2–8 lakhs total, depending on infrastructure, faculty, and facilities.",
    },
    {
      q: "What is BNYS registration in U.P. government?",
      a: "After completing the BNYS degree, graduates can register with the Uttar Pradesh AYUSH Board under BNYS Practitioner Registration, enabling them to legally practice Naturopathy and Yoga therapy in the state.",
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
