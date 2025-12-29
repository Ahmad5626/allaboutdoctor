"use client"

export default function MbbsAdmissionPremium() {
  const steps = [
    "NEET-UG qualification",
    "Counselling registration (AIQ and/or State)",
    "Seat matrix and cutoff analysis",
    "Choice filling and locking",
    "Seat allotment",
    "College reporting and fee payment",
    "Post-admission support",
  ]

  const colleges = [
    "AIIMS (New Delhi and other AIIMS institutions)",
    "Maulana Azad Medical College, Delhi",
    "King George’s Medical University (KGMU), Lucknow",
    "Armed Forces Medical College (AFMC), Pune",
    "Christian Medical College (CMC), Vellore",
    "JIPMER, Puducherry",
    "Grant Medical College, Mumbai",
  ]

  return (
    <section className="relative bg-white py-10 overflow-hidden">

      {/* soft background layers */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[140px]" />
      <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            MBBS Admission Process in India – Step-by-Step
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="relative grid lg:grid-cols-2 gap-16">

          {/* CENTER DIVIDER */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

          {/* LEFT CARD */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-10">

            <h3 className="text-2xl font-semibold text-slate-900 mb-8 fade-item">
              Admission Process
            </h3>

            <div className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 rounded-xl px-5 py-4 transition hover:bg-slate-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full 
                    bg-blue-600 text-white font-semibold">
                    {index + 1}
                  </span>

                  <p className="text-slate-700 text-lg leading-relaxed fade-item">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-10">

            <h3 className="text-2xl font-semibold text-slate-900 mb-6 fade-item">
              Top Medical Colleges in India
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed fade-item">
              India is home to some of the most prestigious medical institutions
              offering world-class education and clinical exposure.
            </p>

            <div className="space-y-4">
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between rounded-xl border 
                    border-slate-200 px-5 py-4 hover:border-blue-500 hover:shadow-sm transition fade-item"
                >
                  <p className="text-slate-800 font-medium leading-snug">
                    {college}
                  </p>

                  <span className="text-sm text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition">
                    View →
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-slate-600 leading-relaxed">
              Admission to these colleges is highly competitive and strictly
              merit-based through NEET counselling.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
