export default function Eligibility() {
  const criteria = [
    {
      title: "Academic Qualification",
      items: ["MBBS degree recognized under Indian Medical Council Act", "Provisional MBBS pass certificate accepted"],
    },
    {
      title: "Internship",
      items: ["Completion of one-year internship", "Or expected completion by admission date"],
    },
    {
      title: "Registration",
      items: ["Valid MBBS registration from Indian Medical Council", "Or State Medical Council registration"],
    },
    {
      title: "Foreign Graduates",
      items: ["Must qualify Foreign Medical Graduate Examination", "Valid registration in India required"],
    },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Eligibility <span className="text-primary">Criteria</span> </h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          {criteria.map((criterion, idx) => (
            <div key={idx} className="p-6 border-l-4 border-primary rounded-r-lg space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{criterion.title}</h3>
              <ul className="space-y-2">
                {criterion.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
