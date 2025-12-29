"use client"
import { Check } from "lucide-react"

export default function MbbsEligibilityBgPrimary() {
  return (
    <section className="relative overflow-hidden py-10 bg-primary text-white">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 h-96 w-96 bg-secondary/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-white/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            Eligibility Criteria for
            
              MBBS in India
           
          </h2>

          <p className="mt-4 text-lg text-white/80 fade-item">
            Candidates must fulfill the following criteria:
          </p>
        </div>

        {/* Criteria */}
        <div className="space-y-6">

          {/* 1 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <p className="text-white/85 text-base">
              Qualified NEET-UG with required percentile
            </p>
          </div>

          {/* 2 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <div className="text-white/85 text-base">
              <p>Passed 10+2 with Physics, Chemistry, and Biology</p>
              <p className="mt-2 text-sm text-white/70">
                Gen 50% <br />
                OBC / SC / ST 45%
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <p className="text-white/85 text-base">
              Minimum age of 17 years
            </p>
          </div>

          {/* 4 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <p className="text-white/85 text-base">
              Fulfill state-specific eligibility (if applying under State quota)
            </p>
          </div>

          {/* 5 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <p className="text-white/85 text-base">
              Complete counselling registration and document verification
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
