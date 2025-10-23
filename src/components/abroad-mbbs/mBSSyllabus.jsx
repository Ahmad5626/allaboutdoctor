export default function MBSSyllabus() {
  const syllabus = [
    {
      year: "1st–2nd Year",
      subjects: ["Anatomy", "Biochemistry", "Physiology"],
    },
    {
      year: "3rd–4th Year",
      subjects: ["Microbiology", "Pathology", "Pharmacology", "Community Medicine"],
    },
    {
      year: "5th–6th Year",
      subjects: ["Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Internship"],
    },
  ]

  return (
    <section className="w-full py-10 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            MBBS Syllabus <span className="text-primary">(General Structure)</span>
          </h1>
          <p className="text-foreground text-lg ">
            The MBBS syllabus abroad is designed to provide both theoretical knowledge and practical clinical exposure.
          </p>
        </div>

        {/* Syllabus List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {syllabus.map((item, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 hover:border-primary transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-3">{item.year}</h3>
              <ul className="list-disc list-inside space-y-1 text-foreground text-sm md:text-base">
                {item.subjects.map((subject, i) => (
                  <li key={i}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
