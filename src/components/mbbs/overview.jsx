export default function Overview() {
  const highlights = [
    { label: "Course Duration", value: "5.5 years" },
    { label: "Entrance Exam", value: "NEET-UG" },
    { label: "Total Seats", value: "100,000+" },
    { label: "Medium", value: "English" },
  ]

  const subjects = [
    { phase: "Pre-Clinical", items: ["Anatomy", "Physiology", "Biochemistry"] },
    { phase: "Para-Clinical", items: ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine"] },
    {
      phase: "Clinical",
      items: [
        "Medicine",
        "Surgery",
        "Pediatrics",
        "Obstetrics & Gynecology",
        "ENT",
        "Ophthalmology",
        "Community Medicine",
      ],
    },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>
            MBBS in India:  <span className="text-primary">Your First Step Toward a Medical Career</span>
          </h1>
          

          <p className="mt-4  text-sm/6 md:text-base/7 text-muted-foreground">
            The MBBS (Bachelor of Medicine, Bachelor of Surgery) program is India's most prestigious undergraduate
            course in medicine. It lays the foundation for a career dedicated to healthcare, clinical excellence, and
            medical research.
          </p>

          <p className="mt-4  text-sm/6 md:text-base/7 text-muted-foreground">
            India stands as one of the leading destinations for quality medical education, offering globally recognized
            degrees, affordable tuition, and diverse clinical exposure. With over 700+ NMC-approved medical colleges,
            MBBS in India provides students with a perfect blend of theory and hands-on training.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4 space-y-2">
              <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
              <p className="text-xl md:text-2xl font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Course <span className="text-primary">Structure</span> </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {subjects.map((subject, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-4 space-y-3">
                <h4 className="font-bold text-primary text-lg">{subject.phase}</h4>
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
        </div>
      </div>
    </section>
  )
}
