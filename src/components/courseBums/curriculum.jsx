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
            BUMS Curriculum <span className="text-primary">Breakdown</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            The curriculum integrates Unani fundamentals with modern healthcare practices, offering students a balance of classical and clinical education.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">Academic Phases:</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { year: "1st Year", subjects: "Anatomy, Physiology, Arabic & Persian Terminology, Unani Philosophy" },
              { year: "2nd Year", subjects: "Pathology, Pharmacology, Preventive Medicine" },
              { year: "3rd Year", subjects: "Clinical Unani Medicine, Toxicology, Surgery" },
              { year: "4th Year", subjects: "Advanced Unani Therapeutics, Research Methods, Community Medicine" },
              { year: "Internship", subjects: "One-year hands-on training in Unani hospitals, dispensaries, and research centers" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg hover:bg-primary/10 transition-all duration-300"
              >
                <h3 className="font-bold text-foreground text-lg mb-2">{item.year}</h3>
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
