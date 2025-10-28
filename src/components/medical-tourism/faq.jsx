"use client"
import { useState } from "react"


const Faq = () => {
    const [expandedFaq, setExpandedFaq] = useState(0)
    const [openIdx, setOpenIdx] = useState(null)
 const faqs = [
  {
    question: "Who can avail of medical tourism services?",
    answer: "Patients seeking advanced treatment abroad and students traveling for medical education.",
  },
  {
    question: "Do you assist with travel and accommodation?",
    answer: "Yes, we provide complete travel planning, accommodation coordination, and local support.",
  },
  {
    question: "Can you help with documentation and hospital appointments?",
    answer: "Absolutely. We guide patients and students with all documentation, appointments, and legal requirements.",
  },
];


  return (
    <div>
       {/* FAQs Section */}
      <section className="py-16 md:py-16 px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            FAQs – <span className="text-primary">Medical Tourism</span> 
          </h1>
         

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg overflow-hidden  transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between  transition text-left"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
                  
                </button>
                {expandedFaq === idx && (
                  <div className="p-6  border-t ">
                    <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
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
