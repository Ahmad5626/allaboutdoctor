export default function ExamOverview() {
  const specs = [
    { label: "Conducting Body", value: "NBEMS (National Board of Examinations in Medical Sciences)" },
    { label: "Exam Type", value: "Computer-based test" },
    { label: "Duration", value: "3 hours 30 minutes" },
    { label: "Total Questions", value: "200" },
    { label: "Marking Scheme", value: "+4 for correct, -1 for incorrect, 0 for unattempted" },
    { label: "Language", value: "English" },
    { label: "Purpose", value: "Admission to MD, MS, PG Diploma, DNB, and DrNB courses" },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>NEET PG Exam <span className="text-primary">Overview </span> </h1>
          
        </div>

        <div className="space-y-4 py-6">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div className="font-semibold text-primary">{spec.label}</div>
              <div className="md:col-span-2 text-foreground/80">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
