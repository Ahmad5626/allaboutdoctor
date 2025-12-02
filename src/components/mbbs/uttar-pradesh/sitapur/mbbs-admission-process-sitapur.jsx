import { CheckCircle } from "lucide-react"

export default function MbbsAdmissionProcessSitapur() {
  const steps = [
    {
      title: "1. Counseling Registration",
      details: ["Assistance with UP NEET portal registration and document upload."],
    },
    {
      title: "2. College Shortlisting",
      details: ["Personalized list based on NEET score, budget, and location."],
    },
    {
      title: "3. Choice Filling Support",
      details: ["Guidance based on clinical exposure, faculty, campus, hostel, and previous cutoffs."],
    },
    {
      title: "4. Seat Allotment Monitoring",
      details: ["Tracking each round of the counseling process."],
    },
    {
      title: "5. Admission & Reporting",
      details: ["Support for verification, document submission, and fee payment."],
    },
    {
      title: "6. Post-Admission Support",
      details: ["Hostel guidance, travel help, academic orientation, and study planning."],
    },
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12">
        <h2
          className="text-pretty text-3xl md:text-4xl font-semibold leading-tight animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          MBBS Admission Process in <span className="text-primary">Sitapur</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt. Ltd. provides complete end-to-end admission support:
        </p>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-primary/20 shadow-sm p-5 md:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{step.title}</h3>
              </div>
              <ul className="pl-9 space-y-1.5 text-sm md:text-base text-foreground/80">
                {step.details.map((line, i) => (
                  <li key={i} className="list-disc">
                    {line}
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
