// Top Medical Colleges Section
import { CheckCircle, GraduationCap, Globe, Building2, Microscope, Stethoscope, ArrowRight } from "lucide-react"
export default  function TopMedicalCollegesLucknow() {
  const colleges = [
    {
      name: "King George's Medical University (KGMU), Lucknow",
      type: "Government (University)",
      description: "One of India's top-ranked medical universities, known for:",
      features: [
        "NMC-recognized MBBS program",
        "Renowned faculty & research-driven academics",
        "Excellent patient flow for clinical exposure",
        "Super-specialty departments & advanced labs",
        "National reputation for medical excellence",
      ],
    },
    {
      name: "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS), Lucknow",
      type: "Government",
      description: "Offers:",
      features: [
        "Multi-specialty teaching hospital",
        "Simulation-based skill training",
        "Strong OPD/IPD patient volume",
        "Modern academic & research environment",
      ],
    },
    {
      name: "Era's Lucknow Medical College & Hospital",
      type: "Private",
      description: "Provides:",
      features: [
        "Modern laboratories & skill labs",
        "Clinical exposure through multi-specialty hospital",
        "Strong academic ecosystem",
        "Student-friendly and supportive environment",
      ],
    },
    {
      name: "Integral Institute of Medical Sciences & Research (IIMSR), Lucknow",
      type: "Private (Minority)",
      description: "Highlights:",
      features: [
        "Competency-based MBBS curriculum",
        "Structured clinical rotations",
        "Simulation-based learning",
        "Supportive academic environment",
      ],
    },
    {
      name: "T. S. Misra Medical College & Hospital, Lucknow",
      type: "Private",
      description: "Features:",
      features: [
        "NMC-approved MBBS seats",
        "Modern hospital with excellent patient flow",
        "Qualified faculty & clinical training",
        "Healthy & safe campus environment",
      ],
    },
    {
      name: "Career Institute of Medical Sciences & Hospital, Lucknow",
      type: "Private",
      description: "Known for:",
      features: [
        "Consistent clinical exposure",
        "Experienced teaching faculty",
        "Modern skill labs & training equipment",
      ],
    },
    {
      name: "Prasad Institute of Medical Sciences, Lucknow",
      type: "Private",
      description: "Provides:",
      features: [
        "Strong hospital-based clinical exposure",
        "Well-equipped laboratories & skill labs",
        "Affordable medical education",
      ],
    },
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">
        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Top Medical Colleges in <span className="text-primary">Lucknow</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
          Students opting for MBBS in Lucknow get the perfect mix of academics, professional training, and hands-on
          learning.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {colleges.map((college, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-primary/20 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{college.name}</h3>
                  <span className="text-sm text-primary font-medium">{college.type}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{college.description}</p>
              <ul className="space-y-2">
                {college.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
