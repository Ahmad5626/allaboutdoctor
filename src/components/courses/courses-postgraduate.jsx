export default function CoursesPostgraduate() {
  const mdSpecializations = [
    "General Medicine",
    "Gynaecology",
    "Paediatrics",
    "Dermatology",
    "Radiology",
    "Respiratory Medicine",
    "Anesthesiology",
    "Pathology",
    "Emergency Medicine",
    "General Surgery",
  ]

  const msSpecializations = [
    "General Medicine",
    "Gynaecology",
    "Paediatrics",
    "Dermatology",
    "Radiology",
    "Anesthesiology",
    "Pathology",
    "General Surgery",
    
  ]

  return (
    <section className="w-full py-16 md:py-10 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-12">
             <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Postgraduate   <span className="text-primary">Courses</span> </h1>
         
          <p className="text-foreground leading-relaxed ">
            Explore our comprehensive undergraduate medical programs
          </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-6">
            {/* MD Courses */}
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">MD (Doctor of Medicine)</h3>
                <p className="text-sm text-muted-foreground">Explore specialization in various fields</p>
              </div>
              <div className="space-y-3">
                {mdSpecializations.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition">
                      <span className="text-xs font-bold text-primary">✓</span>
                    </div>
                    <span className="text-foreground group-hover:text-primary transition">{spec}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 px-6 py-2 text-primary font-semibold hover:underline">
                See all MD Courses →
              </button>
            </div>

            {/* MS Courses */}
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">MS (Master of Surgery)</h3>
                <p className="text-sm text-muted-foreground">Specialize in advanced surgical disciplines</p>
              </div>
              <div className="space-y-3">
                {msSpecializations.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition">
                      <span className="text-xs font-bold text-secondary">✓</span>
                    </div>
                    <span className="text-foreground group-hover:text-secondary transition">{spec}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 px-6 py-2 text-secondary font-semibold hover:underline">
                See all MS Courses →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
