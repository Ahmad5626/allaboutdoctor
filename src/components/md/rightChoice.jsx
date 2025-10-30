import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Trusted by thousands of medical graduates",
    "Transparent and ethical admission process",
    "Direct partnerships with top Indian & international universities",
    "Career guidance for long-term medical specialization success",
  ]

  return (
    <div>
      {/* Why Pursue MD Through All About Doctor Education Pvt. Ltd. */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Pursue <span className="text-primary">MD</span> Through All About Doctor Education Pvt. Ltd.?
          </h1>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Begin Your MD Specialization Today
            </h2>
            <p className="text-foreground/80 text-lg mb-6">
              Advance your medical career with All About Doctor Education Pvt. Ltd. — your reliable partner for MD admissions in India and abroad. 
              Join thousands of doctors who achieved postgraduate success through our trusted counselling and expert guidance.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-3">
              Career Scope After MD
            </h3>
            <p className="text-foreground/80 text-lg">
              Graduates can work as consultants, specialists, researchers, or medical professors. MD holders often lead hospital departments, 
              manage complex cases, or pursue super-specializations (DM, MCh) in their chosen fields.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RightChoice
