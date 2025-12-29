"use client"
import { Check } from "lucide-react"

export default function StateQuotaCounselling() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* soft background accents */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-secondary/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-20">
         

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
           State Quota Counselling (85%)
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
           Each state conducts its own counselling through a designated state authorit
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Seats Covered */}
          <div className="relative rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition p-10">

            <h3 className="text-2xl font-semibold text-primary mb-8">
              Seats Covered Under State Quota
            </h3>

            <ul className="space-y-6">
              {[
                "85% government medical college seats",
                "Private medical colleges within the state",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="relative rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition p-10">

            <h3 className="text-2xl font-semibold text-secondary mb-8">
              Key Features of State Counselling
            </h3>

            <ul className="space-y-6">
              {[
                "State domicile rules (where applicable)",
                "State-specific reservation policies",
                "Separate counselling schedules for each state",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10">
                    <Check className="h-4 w-4 text-secondary" />
                  </span>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        

      </div>
    </section>
  )
}
