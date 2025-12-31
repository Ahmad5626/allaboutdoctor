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
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            MBBS in Rajasthan  NEET UG Eligibility Requirements
          </h2>

        
        </div>

        {/* Criteria */}
        <div className="space-y-6">

          {/* 1 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <div className="text-white/85 text-base">
              <p className="font-medium">NEET UG Qualification</p>
              <p className="mt-1 text-sm text-white/70">
                Candidate must qualify NEET UG in the current academic year. <br />
                A valid NEET score and rank are mandatory.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <div className="text-white/85 text-base">
              <p className="font-medium">Educational Eligibility</p>
              <p className="mt-1 text-sm text-white/70">
                10+2 with Physics, Chemistry, Biology/Biotechnology <br />
                English must be a compulsory subject
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <div className="text-white/85 text-base">
              <p className="font-medium">Minimum PCB Marks</p>
              <p className="mt-2 text-sm text-white/70">
                General / EWS: 50% <br />
                OBC / SC / ST: 40% <br />
                PwD (General): 45%
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex gap-5 items-start rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 fade-item">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-4 w-4" />
            </span>
            <div className="text-white/85 text-base">
              <p className="font-medium">Age Criteria</p>
              <p className="mt-1 text-sm text-white/70">
                Minimum age: 17 years (by 31 December of the admission year) <br />
                Upper age limit: As per latest NEET UG guidelines
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
