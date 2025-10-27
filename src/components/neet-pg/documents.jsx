export default function Documents() {
  const documents = [
    "MBBS degree certificate or provisional pass certificate",
    "NEET PG scorecard & admit card",
    "MBBS registration certificate",
    "Identity proof (Aadhaar, Passport, Voter ID)",
    "Passport-size photographs",
    "Category/Domicile certificate (if applicable)",
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Documents <span className="text-primary">Required</span> </h1>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-secondary transition-colors"
            >
              <div className="text-2xl text-secondary font-bold flex-shrink-0">✓</div>
              <span className="text-foreground/80">{doc}</span>
            </div>
          ))}
        </div>

        <div className="p-6 border-2 border-primary/20 rounded-lg bg-primary/5">
          <p className="text-foreground/80">
            <span className="font-semibold text-foreground">Pro Tip:</span> All About Doctor provides end-to-end
            assistance for document verification and college admissions. Keep all documents ready in digital and
            physical formats.
          </p>
        </div>
      </div>
    </section>
  )
}
