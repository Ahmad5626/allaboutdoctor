  "use client"

  import { useState } from "react"
  import { ChevronLeft, ChevronRight } from "lucide-react"

  export default function Overview() {
    const [activePhase, setActivePhase] = useState(0)

    const highlights = [
      { label: "Course Duration", value: "5.5 years", icon: "📚" },
      { label: "Entrance Exam", value: "NEET-UG", icon: "✏️" },
      { label: "Total Seats", value: "100,000+", icon: "🎓" },
      { label: "Medium", value: "English", icon: "🌐" },
    ]

    const subjects = [
      { phase: "Pre-Clinical", items: ["Anatomy", "Physiology", "Biochemistry"] },
      { phase: "Para-Clinical", items: ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine"] },
      {
        phase: "Clinical",
        items: [
          "Medicine",
          "Surgery",
          "Pediatrics",
          "Obstetrics & Gynecology",
          "ENT",
          "Ophthalmology",
          "Community Medicine",
        ],
      },
    ]

    const nextPhase = () => {
      setActivePhase((prev) => (prev + 1) % subjects.length)
    }

    const prevPhase = () => {
      setActivePhase((prev) => (prev - 1 + subjects.length) % subjects.length)
    }

    return (
      <section className="w-full bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
                style={{ animationDelay: "100ms" }}>
              MBBS in India:  <span className="text-primary">Your First Step Toward a Medical Career</span>
            </h1>
            {/* <div className="h-1 w-20 bg-primary rounded-full"></div> */}

            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                The MBBS (Bachelor of Medicine, Bachelor of Surgery) program is India's most prestigious undergraduate
                course in medicine. It lays the foundation for a career dedicated to healthcare, clinical excellence, and
                medical research.
              </p>

              <p>
                India stands as one of the leading destinations for quality medical education, offering globally
                recognized degrees, affordable tuition, and diverse clinical exposure. With over 700+ NMC-approved medical
                colleges, MBBS in India provides students with a perfect blend of theory and hands-on training.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg p-6 space-y-3 hover:border-primary transition-colors duration-300"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-lg md:text-2xl font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-foreground">Course Structure</h3>

            <div className="relative">
              {/* Slider Container */}
              <div className="overflow-hidden">
                <div className="transition-all duration-500 ease-out">
                  <div className="border border-border rounded-lg p-8 md:p-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl md:text-3xl font-bold text-primary">{subjects[activePhase].phase}</h4>
                      <div className="text-sm text-muted-foreground font-medium">
                        {activePhase + 1} / {subjects.length}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subjects[activePhase].items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-secondary transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                          <span className="text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevPhase}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous phase"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {subjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhase(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activePhase ? "bg-primary w-8" : "bg-border"
                      }`}
                      aria-label={`Go to phase ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPhase}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next phase"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
