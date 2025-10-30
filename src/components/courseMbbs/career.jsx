import { CheckCircle } from 'lucide-react'
import React from 'react'

const Career = () => {
      const careerScope = [
    "Work as a General Physician in hospitals or clinics",
    "Pursue Postgraduate specialisations (MD, MS, DNB, etc.)",
    "Apply for Government and Defence Medical Services",
    "Prepare for International Licensing Exams (USMLE, PLAB, FMGE, etc.)",
    "Explore careers in Clinical Research, Medical Writing, or Public Health",
  ]
  return (
    <div>
       {/* Career Scope */}
      <section className=" px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Career Scope <span className='text-primary'>After MBBS</span> </h1>
          <p className="text-lg text-foreground/80 mb-8">After completing MBBS, students can:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {careerScope.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Career
