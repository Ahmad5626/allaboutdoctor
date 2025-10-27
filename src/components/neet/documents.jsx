export default function Documents() {
  const generalDocs = [
    "10th and 12th mark sheets & certificates",
    "NEET UG scorecard & admit card",
    "Identity proof (Aadhaar, Passport, Voter ID)",
    "Passport-size photographs",
  ]

  const nriDocs = [
    "Passport & Visa details",
    "NEET UG scorecard",
    "Proof of NRI status (Parent's work/residence documents)",
    "Academic certificates attested by relevant authorities",
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Documents <span className="text-primary">Required</span> </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              General Candidates
            </h3>
            <ul className="space-y-3">
              {generalDocs.map((doc, idx) => (
                <li key={idx} className="flex gap-3 text-foreground/80">
                  <span className="text-primary font-bold">✓</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              NRI Candidates
            </h3>
            <ul className="space-y-3">
              {nriDocs.map((doc, idx) => (
                <li key={idx} className="flex gap-3 text-foreground/80">
                  <span className="text-secondary font-bold">✓</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
