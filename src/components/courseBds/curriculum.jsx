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
            BDS Curriculum <span className="text-primary">Breakdown</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            The BDS program offered through All About Doctor Education Pvt. Ltd. is structured to balance academic
            knowledge with practical clinical exposure.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">Phases of Study:</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { phase: "Pre-Clinical Phase", subjects: "Human Anatomy, Physiology, Biochemistry, Dental Anatomy" },
              { phase: "Para-Clinical Phase", subjects: "Pathology, Microbiology, Pharmacology, Dental Materials" },
              { phase: "Clinical Phase", subjects: "Oral Surgery, Orthodontics, Prosthodontics, Periodontics, Pedodontics" },
              { phase: "Internship", subjects: "12-month hospital rotation offering real patient exposure and clinical training" },
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
