export default function EducationSystemAbroad() {
  const points = [
    "Practical-oriented learning with modern labs and hospital exposure.",
    "Semester-based assessments instead of yearly exams.",
    "Internship opportunities at leading hospitals.",
    "Focus on global medical standards to meet NMC/NExT requirements.",
  ]

  return (
    <section className="w-full py-10 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Education System <span className="text-primary">Abroad</span> 
          </h1>
          <p className="text-foreground text-lg md:text-xl ">
            Indian students pursuing MBBS abroad benefit from a modern, practical-oriented curriculum.
          </p>
        </div>

        {/* Points List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start space-x-3 border border-border rounded-lg p-4 hover:border-primary transition-all duration-300">
              <span className="text-primary font-bold mt-1">✓</span>
              <p className="text-foreground text-sm md:text-base">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
