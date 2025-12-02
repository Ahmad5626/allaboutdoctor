import { CheckCircle } from "lucide-react"

// Clinical Exposure Section
export default function ClinicalExposureLucknow() {
  const departments = [
    "General Medicine",
    "General Surgery",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "Orthopedics",
    "Radiology",
    "ENT",
    "Ophthalmology",
    "Dermatology",
    "Psychiatry",
    "Emergency Medicine",
    "Community Medicine",
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up mb-6"
          style={{ animationDelay: "100ms" }}
        >
          Clinical Exposure & <span className="text-primary">Internship Benefits</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mb-4">
          MBBS students in Lucknow gain practical experience in:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {departments.map((dept, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground/80 text-lg">{dept}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Lucknow's major hospitals ensure diverse patient flow, enhancing clinical confidence.
        </p>
      </div>
    </section>
  )
}