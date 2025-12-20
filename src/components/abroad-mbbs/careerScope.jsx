export default function CareerScope() {
  const opportunities = [
    "Appear for FMGE or NExT Exam to practice in India.",
    "Pursue Post-Graduation (MD/MS) in India, USA, UK, Canada, or other countries.",
    "Join research institutes, hospitals, or medical universities as professionals.",
    "Work globally in recognized healthcare systems after necessary licensing.",
  ]

  return (
    <section className="w-full py-10  bg-primary/5">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Career Scope & PG Opportunities
          </h1>
          <p className="text-foreground text-lg ">
            Completing MBBS abroad opens up diverse career paths and higher education opportunities for Indian students.
          </p>
        </div>

        {/* Opportunities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 border border-border rounded-lg p-6 hover:border-primary transition-all duration-300">
              <span className="text-primary font-bold mt-1 text-xl">🎯</span>
              <p className="text-foreground text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
