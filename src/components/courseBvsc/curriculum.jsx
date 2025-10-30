import React from 'react'

const Curriculum = () => {
  return (
    <div>
      {/* Curriculum Breakdown */}
      <section className="px-4 md:px-8 border-b border-primary/20">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            BVSc Curriculum <span className="text-primary">Breakdown</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            The BVSc curriculum offered through All About Doctor Education Pvt. Ltd. blends classroom learning 
            with field-based clinical training to build strong veterinary expertise.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">Program Phases:</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { phase: "Pre-Clinical Phase", subjects: "Veterinary Anatomy, Physiology, Biochemistry" },
              { phase: "Para-Clinical Phase", subjects: "Pathology, Microbiology, Animal Nutrition, Pharmacology" },
              { phase: "Clinical Phase", subjects: "Medicine, Surgery, Reproduction, Public Health" },
              { phase: "Internship", subjects: "12-month rotation in veterinary hospitals, clinics, and animal farms for practical exposure" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h3 className="font-bold text-foreground text-lg mb-2">{item.phase}</h3>
                <p className="text-foreground/80">{item.subjects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Curriculum
