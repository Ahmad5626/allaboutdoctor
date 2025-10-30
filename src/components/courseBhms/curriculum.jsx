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
            BHMS Curriculum <span className="text-primary">Breakdown</span>
          </h1>

          <p className="text-lg text-foreground/80 mb-8">
            The BHMS program integrates medical sciences with traditional homeopathic methods, providing students a blend of modern and holistic healing education.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">Academic Phases:</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { year: "1st Year", subjects: "Anatomy, Physiology, Biochemistry, Homeopathic Pharmacy" },
              { year: "2nd Year", subjects: "Pathology, Microbiology, Forensic Medicine, Materia Medica" },
              { year: "3rd Year", subjects: "Organon of Medicine, Repertory, Surgery, Community Medicine" },
              { year: "4th Year", subjects: "Practice of Medicine, Obstetrics, Gynaecology, and Clinical Training" },
              { year: "Internship", subjects: "One-year practical exposure in AYUSH hospitals and homeopathic clinics" },
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
