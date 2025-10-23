export default function Eligibility() {
  const criteria = [
    {
      title: "Academic Prerequisites",
      description:
        "Candidates must have completed 10+2 (Physics, Chemistry, Biology, and English) from a recognized board.",
    },
    {
      title: "Minimum Marks Requirement",
      items: ["General Category: 50% aggregate", "SC/ST/OBC: 40% aggregate"],
    },
    {
      title: "Age Requirement",
      description: "The minimum age for admission is 17 years at the time of enrollment.",
    },
    {
      title: "Nationality Eligibility",
      description:
        "Indian citizens, NRIs, OCIs, and foreign nationals can apply for MBBS programs in India, provided they qualify through NEET-UG.",
    },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>
            Eligibility Criteria for <span className="text-primary">MBBS Admission</span> 
          </h1>
          
        </div>

        <div className="grid md:grid-cols-2 gap-6 py-6">
          {criteria.map((item, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              {item.description && <p className="text-foreground text-sm leading-relaxed">{item.description}</p>}
              {item.items && (
                <ul className="space-y-2">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="text-foreground text-sm flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
