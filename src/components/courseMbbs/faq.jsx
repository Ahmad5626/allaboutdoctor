import React, { useState } from 'react'

const Faq = () => {
     const [expandedFAQ, setExpandedFAQ] = useState(null)
        const [openIdx, setOpenIdx] = useState(null)
     const faqs = [
    {
      q: "What is an MBBS doctor?",
      a: "An MBBS doctor is a qualified medical professional who has completed the Bachelor of Medicine, Bachelor of Surgery degree and is licensed to practise general medicine and surgery.",
    },
    {
      q: "What is the full form of M.B.B.S.?",
      a: "MBBS stands for Bachelor of Medicine, Bachelor of Surgery — the foundational medical degree for doctors.",
    },
    {
      q: "What is the MBBS full form in Latin?",
      a: "In Latin, MBBS stands for Medicinae Baccalaureus, Baccalaureus Chirurgiae.",
    },
    {
      q: "What are the average MBBS fees?",
      a: "MBBS fees vary by institution — ₹5–15 lakhs in government colleges and ₹25–80 lakhs in private or international universities.",
    },
    {
      q: "What is the salary of an MBBS doctor?",
      a: "An MBBS doctor in India typically earns between ₹6–12 LPA initially, depending on experience, location, and specialisation.",
    },
    {
      q: "What is the difference between MBBS and MD?",
      a: "MBBS is an undergraduate degree, while MD (Doctor of Medicine) is a postgraduate specialisation pursued after completing MBBS.",
    },
    {
      q: "Which are the top MBBS colleges?",
      a: "Some top MBBS colleges include AIIMS, JIPMER, CMC Vellore, and Maulana Azad Medical College, along with 850+ NMC-approved institutions partnered with All About Doctor Education Pvt. Ltd.",
    },
  ]

  return (
    <div>
        {/* FAQs */}
      <section className="px-4 md:px-8 border-b border-primary/20">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Frequently Asked <span className='text-primary'>Questions</span> </h1>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-primary/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-primary/5 transition text-left"
                >
                  <p className="font-semibold text-foreground">{faq.q}</p>
                    <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
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
