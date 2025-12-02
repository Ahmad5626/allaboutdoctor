import { CheckCircle, Users } from "lucide-react"

export default function WhyChooseAllAboutDoctor() {
  const strengths = [
    "850+ partner universities & medical colleges",
    "Doctor-led mentorship",
    "NEET-based admission guidance",
    "Complete documentation & counseling support",
    "95% admission success rate",
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <h2
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up mb-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">All About Doctor Education Pvt. Ltd.</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Since 2015, All About Doctor has guided 10,000+ students toward successful MBBS admissions in India and
          abroad.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Our Core Strengths:</h3>
            <div className="space-y-4">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Leadership Team:</h3>
            <div className="space-y-4">
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-primary" />
                  <p className="font-semibold text-foreground">Dr. Anand Sharma</p>
                </div>
                <p className="text-muted-foreground pl-9">Managing Director & Founder</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-primary" />
                  <p className="font-semibold text-foreground">Ms. Deeksha Bhargava</p>
                </div>
                <p className="text-muted-foreground pl-9">Co-Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
