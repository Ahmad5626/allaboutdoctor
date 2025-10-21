export default function Career() {
  const opportunities = [
    "Postgraduate Studies (MD/MS/DNB)",
    "Clinical Practice in hospitals or private clinics",
    "Medical Research & Teaching",
    "Public Health & Administration",
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Career Opportunities After MBBS</h2>
          <div className="h-1 w-16 bg-secondary rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 space-y-3">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-bold">{idx + 1}</span>
              </div>
              <p className="font-semibold text-foreground">{opp}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
          <p className="font-semibold text-primary">Average Starting Salary:</p>
          <p className="text-foreground text-sm leading-relaxed">
            ₹6 – ₹12 lakh per annum, depending on specialization and experience.
          </p>
        </div>
      </div>
    </section>
  )
}
