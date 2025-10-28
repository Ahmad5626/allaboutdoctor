"use client"

const offerings = [
  {
    id: 1,
    title: "Patient Assistance for Medical Tourism",
    description: "We help patients access top hospitals and specialists worldwide:",
    points: [
      "Assistance in hospital selection and treatment planning",
      "Coordination with doctors and healthcare providers",
      "Guidance on travel, accommodation, and local logistics",
    ],
  },
  {
    id: 2,
    title: "Support for Students Traveling Abroad",
    description: "Students moving abroad for MBBS, BDS, or other medical programs receive:",
    points: [
      "Pre-departure guidance and documentation support",
      "Travel arrangements and airport pickup assistance",
      "Accommodation and local orientation for a smooth transition",
    ],
  },
  {
    id: 3,
    title: "Mentorship & Guidance",
    description: "Our team provides personalized support for both patients and students:",
    points: [
      "Expert advice on medical procedures, education, and legal requirements",
      "Continuous assistance throughout the journey",
      "Safe and reliable solutions for travel and stay",
    ],
  },
  {
    id: 4,
    title: "Benefits of Our Medical Tourism Services",
    description: "",
    points: [
      "Hassle-free planning for treatment or study abroad",
      "Access to top-quality hospitals and universities",
      "Professional guidance to navigate healthcare and education systems",
      "End-to-end support from consultation to arrival",
    ],
  },
  {
    id: 5,
    title: "Related Services You Might Be Interested In",
    description: "",
    points: [
      "Counselling Services – Career planning and study guidance",
      "Admissions Assistance – Admission support for medical programs abroad",
      "Clinical Trainings – Practical hospital exposure",
      "Learning Hub – Digital resources, webinars, and workshops",
      "Preparations & Coaching – Exam preparation and mentorship",
    ],
  },
];



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
