export default function CoursesWhyChoose() {
  const strengths = [
    "850+ NMC-approved partner medical colleges",
    "Doctor-led counseling & mentorship",
    "NEET guidance & admission support",
    "Transparent, ethical process",
    "95% admission success rate",
  ]

  const leadership = [
    { name: "Dr. Anand Sharma", role: "Founder & Managing Director" },
    { name: "Ms. Deeksha Bhargava", role: "Co-Founder & CEO" },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose All About Doctor Education Pvt Ltd
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Founded in 2015, we are India's trusted medical education consultancy, guiding 10,000+ students toward
              successful admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Strengths */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Strengths</h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-foreground">{strength}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Leadership Team</h3>
              <div className="space-y-4">
                {leadership.map((leader, index) => (
                  <div
                    key={index}
                    className="p-6 border-2 border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition"
                  >
                    <h4 className="text-lg font-bold text-foreground mb-1">{leader.name}</h4>
                    <p className="text-sm text-muted-foreground">{leader.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
