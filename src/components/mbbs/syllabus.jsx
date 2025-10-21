export default function Syllabus() {
  const subjects = [
    { phase: "Pre-Clinical", items: ["Anatomy", "Physiology", "Biochemistry"] },
    { phase: "Para-Clinical", items: ["Pathology", "Microbiology", "Pharmacology", "Forensic Medicine"] },
    { phase: "Clinical", items: ["General Medicine", "Surgery", "Pediatrics", "Gynecology", "ENT", "Ophthalmology"] },
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">MBBS Syllabus and Clinical Training</h2>
          <div className="h-1 w-16 bg-secondary rounded-full mb-6"></div>
          <p className="text-foreground leading-relaxed">
            The MBBS syllabus is designed to build a strong foundation in medical science along with hands-on clinical
            exposure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
