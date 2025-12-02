import { CheckCircle } from "lucide-react"

export default function ClinicalExposureSitapur() {
  const departments = [
    "General Medicine",
    "General Surgery",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "Orthopedics",
    "ENT",
    "Ophthalmology",
    "Radiology",
    "Dermatology",
    "Psychiatry",
    "Emergency Medicine",
    "Community Medicine",
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <h2
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up mb-6"
          style={{ animationDelay: "100ms" }}
        >
          Clinical Exposure & <span className="text-primary">Internship Benefits</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mb-6">
          Students pursuing MBBS in Sitapur gain practical training in:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {departments.map((dept, idx) => (
            <div key={idx} className="flex gap-3 items-center p-4 bg-primary/5 rounded-xl border border-primary/10">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-foreground/80">{dept}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mt-8">
          The region provides consistent patient inflow, ensuring strong real-world experience.
        </p>
      </div>
    </section>
  )
}
