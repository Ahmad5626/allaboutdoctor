"use client"

const offerings = [
  {
    id: 1,
    title: "University Shortlisting & Eligibility Assessment",
    description: "We help students select the most suitable universities based on:",
    fullDescription:
      "Our expert counsellors provide personalized career guidance to help students select the best medical destinations based on recognition and affordability.",
    points: [
      "NMC/WHO recognition and global ranking",
      "Affordability and living conditions",
      "Curriculum and career opportunities",
      "Eligibility criteria and academic profile"
    ],
  },
  {
    id: 2,
    title: "Application & Documentation Support",
    description:
      "Our team ensures every application is handled efficiently:",
    fullDescription:
      "Our comprehensive services ensure every application is handled efficiently with proper verification and documentation.",
    points: [
      "Preparing and submitting university applications",
      "Verification, translation, and apostille of documents",
      "Securing official admission letters from partner universities",
    ],
  },
  {
    id: 3,
    title: "Admission Guidance & Counselling",
    description: "We guide students at every stage:",
    fullDescription: "We handle all aspects of document preparation to ensure global acceptance and compliance.",
    points: [
      "Understanding university-specific admission requirements",
      "Tracking timelines and deadlines",
      "Providing advice on entrance exams (if applicable)",
    ],
  },
  {
    id: 4,
    title: "Pre-Departure & Orientation Support",
    description: "Once admission is confirmed, we assist with:",
    fullDescription: "Complete support from visa documentation to airport pickup in your destination country.",
    points: [
      "Pre-departure briefing covering academics, culture, and finances",
      "Travel arrangements and accommodation coordination",
      "Settling-in support for a smooth transition abroad",
    ],
  },
  
]

export default function ServicesOfferings() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 px-6">
        {offerings.map((offering, index) => {
          const isEven = index % 2 === 0

          return (
            <div key={offering.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className={`flex-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{offering.id}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{offering.title}</h3>
                  </div>

                  <p className="text-foreground/70 text-lg leading-relaxed">{offering.description}</p>

                  {/* <p className="text-foreground/60 text-base">{offering.fullDescription}</p> */}

                  <ul className="space-y-3 pt-4">
                    {offering.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-primary font-bold flex-shrink-0 mt-1">✓</span>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`flex-1 ${isEven ? "md:order-2" : "md:order-1"}`}>
                <div
                  className={`h-64 md:h-80 rounded-lg border-2 flex items-center justify-center ${
                    isEven ? "border-primary/30 bg-primary/5" : "border-secondary/30 bg-secondary/5"
                  }`}
                >
                  <div className="text-center">
                    <div className={`text-6xl font-bold mb-2 ${isEven ? "text-primary/20" : "text-secondary/20"}`}>
                      {String(offering.id).padStart(2, "0")}
                    </div>
                    <p className="text-foreground/40 text-sm">{offering.title}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
