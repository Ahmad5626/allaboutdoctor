"use client"
import { Check } from "lucide-react"

export default function AiCounsellingMccInfo() {
  return (
    <section className="relative overflow-hidden py-10 bg-primary text-white">

      {/* background effects */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-1/3 h-[420px] w-[420px] bg-secondary/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] bg-white/10 blur-[160px] rounded-full" /> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            All India Quota (AIQ) Counselling
          </h2>

          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Conducted by the{" "}
            <span className="font-semibold text-secondary">
              Medical Counselling Committee (MCC)
            </span>
            
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT */}
          <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 ">

            <span className="absolute -top-6 left-10 px-5 py-1 rounded-full text-sm font-semibold bg-secondary text-primary">
             Covers
            </span>

            <h3 className="text-2xl font-semibold mt-4 mb-8">
              Coverage Under AIQ Counselling
            </h3>

            <ul className="space-y-6">
              {[
                "15% Government medical college seats",
                "100% Deemed university seats",
                "Central universities and institutes",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start fade-item">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-4 w-4 text-secondary" />
                  </span>
                  <p className="text-white/85 text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10">

            <span className="absolute -top-6 left-10 px-5 py-1 rounded-full text-sm font-semibold bg-primary text-white border border-white/30">
              Features
            </span>

            <h3 className="text-2xl font-semibold mt-4 mb-8">
              AIQ Counselling Highlights
            </h3>

            <ul className="space-y-6">
              {[
                "NEET-based national merit system",
                "Multiple rounds including mop-up and stray vacancy",
                "Completely online registration and choice filling",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start fade-item">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <p className="text-white/85 text-base leading-relaxed">
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
