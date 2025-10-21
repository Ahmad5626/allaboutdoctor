export default function Documents() {
  const documents = [
    "10th & 12th Mark Sheets",
    "NEET Admit Card & Scorecard",
    "Identity Proof (Aadhaar/Passport)",
    "Passport-size Photographs",
    "Category / Domicile Certificate (if applicable)",
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Documents Required</h2>
          <div className="h-1 w-16 bg-secondary rounded-full mb-6"></div>
          <p className="text-foreground leading-relaxed">To apply for MBBS admission in India, candidates need:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {documents.map((doc, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4 flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary font-bold">✓</span>
              </div>
              <p className="text-foreground text-sm">{doc}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
          <p className="text-foreground leading-relaxed">
            All About Doctor provides end-to-end assistance for document verification and college admissions.
          </p>
        </div>
      </div>
    </section>
  )
}
