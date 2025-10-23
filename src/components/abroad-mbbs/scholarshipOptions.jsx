export default function ScholarshipOptions() {
  const scholarships = [
    "Government & university scholarships for international students.",
    "Merit-based discounts for high academic achievers.",
    "Special grants through All About Doctor Education’s partner universities.",
    "Our counselors help you identify and apply for suitable scholarships during admission.",
  ]

  return (
    <section className="w-full py-10 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Scholarship <span className="text-primary">Options</span> 
          </h1>
          <p className="text-foreground text-lg ">
            Deserving students can avail various scholarships and financial support while pursuing MBBS abroad.
          </p>
        </div>

        {/* Scholarship List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scholarships.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 border border-border rounded-lg p-4 hover:border-primary transition-all duration-300">
              <span className="text-primary font-bold mt-1">✓</span>
              <p className="text-foreground text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
