"use client"

const offerings = [
  {
    id: 1,
    title: "Hands-On Hospital Experience",
    description: "Students get practical exposure by working in hospitals, clinics, and medical institutions.",
    points: [
      "Participate in patient care under professional supervision",
      "Observe medical procedures and hospital workflows",
      "Learn the application of theoretical knowledge in real-life scenarios",
    ],
  },
  {
    id: 2,
    title: "University-Based Internship Programs",
    description: "Our internships also include placements in partner universities abroad:",
    points: [
      "Gain exposure to advanced medical research and laboratories",
      "Participate in clinical workshops and seminars",
      "Network with medical professionals and students globally",
    ],
  },
  {
    id: 3,
    title: "Mentorship & Professional Guidance",
    description: "Every internship is guided by experienced doctors and faculty members:",
    points: [
      "Receive personalized mentorship to improve clinical decision-making",
      "Learn professional ethics, communication, and patient care standards",
      "Gain insight into specialty fields to plan your career path",
    ],
  },
  {
    id: 4,
    title: "Benefits of Our Internship Programs",
    description: "",
    points: [
      "Build confidence and practical skills before starting your professional career",
      "Enhance your resume for higher studies and licensing exams",
      "Develop real-world problem-solving and clinical reasoning abilities",
      "Get global exposure to hospitals and universities",
    ],
  },
  {
    id: 5,
    title: "Related Services You Might Be Interested In",
    description: "",
    points: [
      "Counselling Services – Career guidance and planning",
      "Admissions Assistance – University and course admissions",
      "Clinical Trainings – Hands-on hospital training",
      "Learning Hub – Digital resources, webinars, and workshops",
      "Preparations & Coaching – Exam preparation for FMGE/NExT and global licensing exams",
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
