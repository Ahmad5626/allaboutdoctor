import { CheckCircle } from "lucide-react"

export default function MbbsDurationStructureSitapur() {
  const subjects = [
    "Anatomy",
    "Physiology",
    "Biochemistry",
    "Pathology",
    "Pharmacology",
    "Microbiology",
    "Forensic Medicine",
    "Community Medicine",
    "Medicine",
    "Surgery",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "ENT",
    "Ophthalmology",
    "Orthopedics",
    "Dermatology",
    "Psychiatry",
  ]

  const trainingMethods = [
    "Classroom lectures",
    "Ward rounds & clinical postings",
    "Skill lab sessions",
    "Simulation-based training",
    "Community health visits",
    "Case-based and problem-based learning",
  ]

  return (
    <section className="px-4 md:px-8 bg-primary/5 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <h2
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          MBBS Course <span className="text-primary">Duration & Structure</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-3xl">
          The MBBS program in Sitapur follows the NMC competency-based framework.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl border border-primary/20 p-6 text-center">
            <p className="text-4xl font-bold text-primary">5.5</p>
            <p className="text-foreground/80 mt-2">Years Total Duration</p>
          </div>
          <div className="bg-white rounded-xl border border-primary/20 p-6 text-center">
            <p className="text-4xl font-bold text-primary">4.5</p>
            <p className="text-foreground/80 mt-2">Years Academic Learning</p>
          </div>
          <div className="bg-white rounded-xl border border-primary/20 p-6 text-center">
            <p className="text-4xl font-bold text-primary">1</p>
            <p className="text-foreground/80 mt-2">Year Mandatory Internship</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-foreground mb-4">Subjects Include:</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-white border border-primary/20 rounded-full text-sm text-foreground/80"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-foreground mb-4">Training Methods:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {trainingMethods.map((method, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{method}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-muted-foreground text-lg">
          Internship placements include leading hospitals in Sitapur, Lucknow, Kanpur, and nearby regions.
        </p>
      </div>
    </section>
  )
}
