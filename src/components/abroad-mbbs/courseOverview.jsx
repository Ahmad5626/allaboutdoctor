export default function CourseOverview() {
  const coursePhases = [
    {
      title: "Pre-Clinical Phase",
      description:
        "This stage focuses on building fundamental knowledge of the human body and its functions.",
      items: ["Anatomy", "Biochemistry", "Physiology"],
    },
    {
      title: "Para-Clinical Phase",
      description:
        "Students learn about the causes, mechanisms, and effects of diseases along with drug actions.",
      items: ["Pharmacology", "Microbiology", "Pathology"],
    },
    {
      title: "Clinical Phase",
      description:
        "In this phase, students gain in-depth exposure to medical practice through classroom learning and hospital visits.",
      items: ["Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology"],
    },
    {
      title: "Internship / Clinical Rotation",
      description:
        "The final stage involves one year of practical training in affiliated hospitals, allowing students to apply theoretical knowledge in real-life settings.",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            MBBS Abroad <span className="text-primary">Course Overview</span>
          </h1>
          <p className="text-foreground text-sm leading-relaxed mt-2">
            The MBBS course abroad generally covers the following phases designed to provide both theoretical knowledge and practical exposure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 py-6">
          {coursePhases.map((phase, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 space-y-3"
            >
              <h3 className="text-lg font-bold text-primary">{phase.title}</h3>
              {phase.description && (
                <p className="text-foreground text-sm leading-relaxed">
                  {phase.description}
                </p>
              )}
              {phase.items && (
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-foreground text-sm flex items-start"
                    >
                      <span className="text-secondary mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
