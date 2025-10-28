"use client"

const offerings = [
  {
    id: 1,
    title: "Digital Study Materials",
    description: "Our Learning Hub offers access to:",
    points: [
      "E-books, lecture notes, and recorded sessions",
      "Interactive quizzes and self-assessment tools",
      "Topic-wise resources aligned with international medical curricula",
      "These materials allow students to study at their own pace and reinforce classroom learning.",
    ],
  },
  {
    id: 2,
    title: "Webinars & Online Sessions",
    description: "We host expert-led webinars covering:",
    points: [
      "Medical subjects and clinical insights",
      "Exam preparation strategies for FMGE, NExT, and international licensing exams",
      "Updates on global medical trends and healthcare advancements",
      "Students can interact directly with doctors and educators during live sessions.",
    ],
  },
  {
    id: 3,
    title: "Workshops & Practical Training",
    description: "Our workshops provide hands-on learning opportunities, including:",
    points: [
      "Simulation-based clinical exercises",
      "Skill development in diagnostics, patient care, and procedures",
      "Interactive case discussions to enhance critical thinking",
      "These workshops bridge the gap between theory and real-world medical practice.",
    ],
  },
  {
    id: 4,
    title: "Benefits of the Learning Hub",
    description: "",
    points: [
      "Access to curated, high-quality study materials anytime, anywhere",
      "Direct interaction with experienced doctors and educators",
      "Structured preparation for exams and practical skills development",
      "Continuous learning support for academic and professional growth",
    ],
  },
  {
    id: 5,
    title: "Related Services You Might Be Interested In",
    description: "",
    points: [
      "Counselling Services – Personalized guidance and career planning",
      "Admissions Assistance – End-to-end support for university admission",
      "Clinical Trainings – Hands-on hospital exposure",
      "Internships – Gain practical experience in real-world settings",
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
