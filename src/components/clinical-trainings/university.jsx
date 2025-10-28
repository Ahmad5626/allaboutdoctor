"use client"

const offerings = [
  {
    id: 1,
    title: "Hands-On Clinical Experience",
    description: "Our training programs offer direct exposure to hospital settings, including:",
    points: [
      "Observing medical procedures and surgeries",
      "Participating in patient care under expert supervision",
      "Learning hospital workflows and medical protocols",
      
    ],
  },
  {
    id: 2,
    title: "Specialty-Wise Exposure",
    description:
      "Students can gain experience across multiple specialties, including",
    points: [
      "General Medicine",
      "Surgery",
      "Pediatrics",
      "Gynecology & Obstetrics",
      "Emergency Care",
    ],
  },
  {
    id: 3,
    title: "Mentorship from Experienced Doctors",
    description: "All clinical training sessions are guided by experienced doctors and hospital staff, ensuring students:",
    points: [
      "Receive real-world guidance and professional mentorship",
      "Develop critical thinking and decision-making skills",
      "Understand medical ethics and patient care standards",
    ],
  },
  {
    id: 4,
    title: "Internship & Training Benefits",
    description: "Participating in clinical trainings enhances your resume and prepares you for future opportunities:",
    points: [
      "Build confidence in handling real medical scenarios",
      "Gain practical skills before starting your professional career",
      "Improve readiness for licensing exams and postgraduate studies",
    ],
  },
  {
    id: 5,
    title: "Related Services You Might Be Interested In",
    points: [
      "Build confidence in handling real medical scenarios",
      "Gain practical skills before starting your professional career",
      "Improve readiness for licensing exams and postgraduate studies",
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
