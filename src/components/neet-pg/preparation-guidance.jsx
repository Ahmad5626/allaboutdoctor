export default function PreparationGuidance() {
  const tips = [
    {
      title: "Understand the Syllabus",
      description:
        "Focus on clinical subjects, pre-clinical, and para-clinical topics as per Graduate Medical Education Regulations",
    },
    {
      title: "Practice MCQs",
      description:
        "Solve previous years' questions and mock tests to familiarize with exam pattern and difficulty level",
    },
    {
      title: "Time Management",
      description: "Allocate balanced time across all subjects and practice solving questions within time constraints",
    },
    {
      title: "Mentorship",
      description: "Get guidance from experienced doctors and faculty for personalized preparation strategies",
    },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>NEET PG Preparation <span className="text-primary"> Guidance </span></h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="p-6 border-2 border-border rounded-lg hover:border-secondary transition-colors space-y-3 group"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl font-bold text-secondary group-hover:scale-110 transition-transform">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{tip.title}</h3>
              </div>
              <p className="text-foreground/70 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
