import { CheckCircle } from 'lucide-react'
import React from 'react'

const Career = () => {
  const careerScope = [
    "Ayurvedic Doctor / Practitioner",
    "Panchakarma Therapist",
    "Medical Officer (AYUSH Departments)",
    "Research Associate or Herbal Product Consultant",
    "Ayurveda Lecturer or Professor",
    "Clinical Specialist at Wellness Resorts",
    "Entrepreneur in Herbal Medicine or Health Products",
  ]

  return (
    <div>
      {/* Career Opportunities */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Career Opportunities <span className="text-primary">After BAMS</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            After completing BAMS, graduates can pursue diverse career paths in Ayurvedic medicine, clinical research,
            wellness, and public health — both in India and abroad.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">
            Career Options:
          </h3>

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
