import { CheckCircle, Stethoscope } from "lucide-react"

export default function TopMedicalCollegeSitapur() {
  const collegeFeatures = [
    "NMC-recognized MBBS program",
    "Modern laboratories & skill labs",
    "Multi-specialty teaching hospital with strong patient flow",
    "Experienced faculty and structured clinical rotations",
    "Safe hostel & academic environment",
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">
        <h2
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Top Medical College in <span className="text-primary">Sitapur</span>
        </h2>

        <div className="mt-8 bg-white rounded-2xl border border-primary/20 shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Stethoscope className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Hind Institute of Medical Sciences, Sitapur</h3>
              <p className="text-muted-foreground mt-1">Private Medical College</p>
            </div>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            This is one of the well-known medical institutions in the region, offering:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {collegeFeatures.map((feature, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-muted-foreground text-lg">
          Students choosing MBBS in Sitapur get a balanced combination of advanced academics and practical training.
        </p>
      </div>
    </section>
  )
}
