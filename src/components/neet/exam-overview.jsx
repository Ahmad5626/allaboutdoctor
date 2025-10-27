export default function ExamOverview() {
  const specs = [
    { label: "Conducting Body", value: "National Testing Agency (NTA)" },
    { label: "Exam Type", value: "Pen & Paper (OMR-based)" },
    { label: "Duration", value: "3 hours (180 minutes)" },
    { label: "Skills Tested", value: "Physics, Chemistry, Botany, Zoology" },
  ]

  const languages = [
    "English",
    "Hindi",
    "Assamese",
    "Bengali",
    "Gujarati",
    "Kannada",
    "Marathi",
    "Oriya",
    "Tamil",
    "Telugu",
    "Urdu",
    "Malayalam",
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>NEET UG Exam <span className="text-primary">Overview</span> </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 py-6">
          {specs.map((spec, idx) => (
            <div key={idx} className="p-6 border border-border rounded-lg">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{spec.label}</h3>
              <p className="text-lg text-foreground font-semibold">{spec.value}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Languages Offered</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-3 border border-primary/30 rounded-lg text-center text-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
