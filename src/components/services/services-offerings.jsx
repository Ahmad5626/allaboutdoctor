"use client"

const offerings = [
  {
    id: 1,
    title: "Career & Destination Counselling",
    description: "Choosing the right country and university is the first step toward success.",
    fullDescription:
      "Our expert counsellors provide personalized career guidance to help students select the best medical destinations based on recognition and affordability.",
    points: [
      "Select the best medical destinations based on recognition and affordability",
      "Understand NEET eligibility, admission timelines, and course structures",
      "Make confident decisions that align with your academic goals and financial plans",
    ],
  },
  {
    id: 2,
    title: "University Selection & Admission Assistance",
    description:
      "We help students identify and secure seats in top NMC-approved medical universities across the world.",
    fullDescription:
      "Our comprehensive services ensure every application is handled efficiently with proper verification and documentation.",
    points: [
      "University shortlisting and eligibility evaluation",
      "Application preparation and document submission",
      "Fast-track admission support with official offer letters from partner universities",
    ],
  },
  {
    id: 3,
    title: "Documentation, Translation & Verification",
    description: "Our team ensures all documents meet international education standards.",
    fullDescription: "We handle all aspects of document preparation to ensure global acceptance and compliance.",
    points: [
      "Academic and identity verification",
      "Certified translation and apostille services",
      "Legalization and attestation for global acceptance",
    ],
  },
  {
    id: 4,
    title: "Visa Guidance & Travel Support",
    description: "We simplify your journey from India to your chosen medical university.",
    fullDescription: "Complete support from visa documentation to airport pickup in your destination country.",
    points: [
      "Step-by-step visa documentation and interview assistance",
      "Flight booking, travel planning, and pre-departure sessions",
      "Airport pickup and on-arrival support in your destination country",
    ],
  },
  {
    id: 5,
    title: "Accommodation & Student Care",
    description: "Your comfort and safety abroad are our top priorities.",
    fullDescription:
      "We ensure students have safe, comfortable accommodation and continuous support throughout their stay.",
    points: [
      "Safe hostel or private accommodation options near their universities",
      "Local guardian and welfare support for continuous guidance",
      "Post-arrival orientation to help students settle in smoothly",
    ],
  },
  {
    id: 6,
    title: "Financial Guidance & Insurance Assistance",
    description: "Pursuing MBBS abroad is a big investment — and we help you plan it smartly.",
    fullDescription: "Smart financial planning with assistance for loans, scholarships, and insurance coordination.",
    points: [
      "Assistance with education loans and scholarships",
      "Health and travel insurance coordination",
      "Currency exchange and budgeting advice",
    ],
  },
  {
    id: 7,
    title: "Licensing Exam & Career Growth Support",
    description: "We go beyond admission to help students build successful medical careers.",
    fullDescription: "Expert guidance for licensing exams and postgraduate opportunities worldwide.",
    points: [
      "FMGE/NExT exam preparation in India",
      "International licensing exams like USMLE, PLAB, and DHA",
      "Post-graduate medical education and specialization opportunities abroad",
    ],
  },
  {
    id: 8,
    title: "Continuous Mentorship & Alumni Network",
    description: "Learning doesn't stop after admission — and neither does our support.",
    fullDescription: "Ongoing mentorship and access to a global network of successful medical professionals.",
    points: [
      "1:1 mentorship with experienced doctors and educators",
      "Access to our active alumni network across top global universities",
      "Regular updates on global medical education trends and policy changes",
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

                  <p className="text-foreground/60 text-base">{offering.fullDescription}</p>

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
