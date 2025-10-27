export default function Highlights() {
  const highlights = [
    {
      title: "Sole Exam",
      description: "Only entrance exam for MD, MS, PG Diploma, and DNB courses in India",
      icon: "✓",
    },
    {
      title: "Administered by NBEMS",
      description: "National Board of Examinations in Medical Sciences",
      icon: "✓",
    },
    {
      title: "Computer-Based",
      description: "200 questions in 3.5 hours with +4/-1 marking scheme",
      icon: "✓",
    },
    {
      title: "Government & Private",
      description: "Scores required for admission across all medical institutions",
      icon: "✓",
    },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Important <span className="text-primary">Highlights</span> </h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors group"
            >
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
