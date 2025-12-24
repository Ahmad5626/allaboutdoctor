"use client"
import { useState } from "react"

const FAQS = [
  {
    q: "How many counselling rounds are conducted in NEET UG?",
    a: "Usually multiple counselling rounds are conducted, including Round 1, Round 2, Mop-Up Round, and Stray Vacancy Round depending on seat availability.",
  },
  {
    q: "Can I participate in both AIQ and State counselling?",
    a: "Yes, eligible candidates can apply for both All India Quota (AIQ) and State Quota counselling simultaneously.",
  },
  {
    q: "Is choice filling mandatory?",
    a: "Yes, choice filling is mandatory. Without completing choice filling, seat allotment is not possible in any counselling round.",
  },
  {
    q: "What happens if I miss choice filling?",
    a: "If you miss choice filling, you may lose the opportunity to get a seat in that particular counselling round.",
  },
]

export default function NeetFaqUltraModern() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-primary py-10 overflow-hidden">
      
      
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

       
        <div className="mb-24 max-w-4xl">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            Frequently Asked Questions
          </h2>
        
        </div>

        
        <div className="grid lg:grid-cols-2 gap-20 items-start">

   
          <div className="space-y-6">
            {FAQS.map((item, index) => {
              const isActive = active === index

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-full text-left rounded-2xl px-8 py-6 transition-all backdrop-blur
                    ${
                      isActive
                        ? "bg-white text-primary shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-[1.03]"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }
                  `}
                >
                  <span className="text-lg md:text-xl font-semibold">
                    {item.q}
                  </span>
                </button>
              )
            })}
          </div>

         
<div className="relative">

 
  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-blue-200/30 to-secondary/40 blur-2xl opacity-70" />

  
  <div className="relative rounded-[32px] bg-gradient-to-br from-white to-white/95 p-14 shadow-[0_40px_90px_rgba(0,0,0,0.35)]">

   
    <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold tracking-widest text-primary uppercase">
      Answer
    </span>

    <p className="mt-8 text-xl md:text-2xl leading-relaxed text-foreground font-medium">
     {FAQS[active].a}
    </p>

  </div>
</div>


        </div>

      </div>
    </section>
  )
}
