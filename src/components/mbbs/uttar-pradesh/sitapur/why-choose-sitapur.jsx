import { CheckCircle } from "lucide-react"

export default function WhyChooseSitapur() {
  const points = [
    "Access to recognized medical colleges",
    "Strong patient flow for hands-on training",
    "Affordable academics and cost of living",
    "Student-friendly and peaceful learning environment",
    "Well-equipped hospitals with diverse clinical exposure",
    "NEET-based transparent admission system",
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">
        <h2
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Sitapur</span> for MBBS?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 py-6">
          {points.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/80 text-lg">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-lg mt-4">
          Sitapur provides an ideal environment for students looking for focused learning and consistent clinical
          practice.
        </p>
      </div>
    </section>
  )
}
