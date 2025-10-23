export default function Syllabus() {
  const subjects = [
    { phase: "Pre-Clinical", items: ["Anatomy", "Physiology", "Biochemistry"] },
    { phase: "Para-Clinical", items: ["Pathology", "Microbiology", "Pharmacology", "Forensic Medicine"] },
    { phase: "Clinical", items: ["General Medicine", "Surgery", "Pediatrics", "Gynecology", "ENT", "Ophthalmology"] },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>MBBS Syllabus and <span className="text-primary">Clinical Training</span></h1>
          
          <p className="text-foreground leading-relaxed ">
            The MBBS syllabus is designed to build a strong foundation in medical science along with hands-on clinical
            exposure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-6">
          {subjects.map((subject, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-bold text-primary">{subject.phase}</h3>
              <ul className="space-y-2">
                {subject.items.map((item, i) => (
                  <li key={i} className="text-foreground text-sm flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
          <p className="font-semibold text-primary">Internship:</p>
          <p className="text-foreground text-sm leading-relaxed">
            A compulsory 1-year internship provides real-world hospital experience in patient care, diagnostics, and
            community medicine.
          </p>
        </div>
      </div>
    </section>
  )
}
