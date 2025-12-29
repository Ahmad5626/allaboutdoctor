"use client"
import { ArrowRight } from "lucide-react"

export default function CollegeAdmissionPatternAlt() {
  return (
    <section
      className="relative overflow-hidden py-20
      bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5"
    >
      {/* ===== Background Design (NO layout change) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[180px]" />
        <div className="absolute top-1/3 right-1/4 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-[180px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[160px]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-primary fade-item">
            Government vs Private College Admission Pattern
          </h2>
        </div>

        {/* ===== Vertical Flow ===== */}
        <div className="relative">

          {/* center line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-primary/20 hidden lg:block" />

          {/* ROW 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="lg:text-right">
              <h3 className="text-3xl font-semibold text-primary mb-6 fade-item">
                Government Medical Colleges
              </h3>

              <ul className="space-y-4 text-slate-700 text-lg">
                <li className="fade-item">Low fee structure</li>
                <li className="fade-item">High NEET cutoff</li>
                <li className="fade-item">Admission through AIQ or State quota</li>
              </ul>
            </div>

            <div className="flex justify-start lg:justify-center fade-item">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shadow-lg">
                GOV
              </span>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 fade-item">
            <div className="flex justify-end lg:justify-center order-last lg:order-first">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white font-bold text-lg shadow-lg">
                PVT
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-secondary mb-6 fade-item">
                Private Medical Colleges
              </h3>

              <ul className="space-y-4 text-slate-700 text-lg fade-item">
                <li>More seat availability</li>
                <li>Moderate to high fees</li>
                <li>Admission through state counselling</li>
              </ul>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center fade-item">
            <div className="lg:text-right">
              <h3 className="text-3xl font-semibold text-primary mb-6">
                Deemed Universities
              </h3>

              <ul className="space-y-4 text-slate-700 text-lg fade-item">
                <li>Independent fee structure</li>
                <li>MCC counselling only</li>
                <li>Open to students from all states</li>
              </ul>
            </div>

            <div className="flex justify-start lg:justify-center fade-item">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white font-bold text-lg shadow-lg">
                DU
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
