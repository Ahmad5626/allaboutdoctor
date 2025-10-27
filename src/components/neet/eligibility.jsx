export default function Eligibility() {
  const criteria = [
    { label: "Age", value: "Minimum 17 years by December 31 of the admission year" },
    { label: "Academic Qualification", value: "10+2 or equivalent with Physics, Chemistry, and Biology" },
    { label: "Minimum Marks", value: "As per category requirements" },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Eligibility <span className="text-primary">Criteria</span> </h1>

        <div className="space-y-4 py-6">
          {criteria.map((item, idx) => (
            <div key={idx} className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-primary mb-2">{item.label}</h3>
              <p className="text-foreground/80">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
