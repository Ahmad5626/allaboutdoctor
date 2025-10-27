export default function Highlights() {
  const highlights = [
    "NEET UG is the sole exam for MBBS, BDS, and AYUSH courses in India",
    "Administered by the National Testing Agency (NTA)",
    "Covers Physics, Chemistry, Botany, and Zoology",
    "Required for admission in government, private, and deemed universities in India and abroad",
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Important <span className="text-primary">Highlights</span> </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex gap-4 p-4 border-l-2 border-primary">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <p className="text-foreground/80 leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
