"use client"

import { useEffect, useRef } from "react"

const QUOTAS = [
  "All India Quota (15%)",
  "State Quota (85%)",
  "Management Quota",
  "NRI Quota",
  "Deemed University Quota",
]

const RESERVATIONS = [
  "SC / ST",
  "OBC",
  "EWS",
  "PwD",
  "State-specific reserved categories",
]

export default function MbbsQuotaReservationUltra() {
  const ref = useRef(null)



  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-10 bg-primary text-white"
    >
      {/* cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] bg-secondary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] bg-white/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-24 ">
       

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
           Quota & Reservation in MBBS Admission
          </h2>

          <p className="mt-8 text-xl text-white/70 leading-relaxed fade-item">
        MBBS seats in India are allotted under multiple quotas and reservation categorie
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT – Quota Timeline */}
          <div className="relative pl-12 ">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-secondary via-white/40 to-transparent" />

            <h3 className="mb-12 text-3xl font-semibold text-secondary fade-item">
              Major MBBS Quotas
            </h3>

            <div className="space-y-10">
              {QUOTAS.map((q, i) => (
                <div
                  key={i}
                  className="group relative flex items-start gap-6"
                >
                  <span className="absolute -left-[30px] mt-2 h-4 w-4 rounded-full bg-secondary shadow-[0_0_20px_rgba(246,139,30,0.8)]" />

                  <div className="rounded-2xl bg-white/10 backdrop-blur-xl px-8 py-6 transition-all duration-500 hover:bg-white/20 hover:translate-x-2 ">
                    <p className="text-lg font-medium fade-item">{q}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Reservation Glass Grid */}
          <div className="">
            <h3 className="mb-12 text-3xl font-semibold text-secondary">
              Reservation Categories
            </h3>

            <div className="grid sm:grid-cols-2 gap-8">
              {RESERVATIONS.map((r, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl px-10 py-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <p className="relative text-xl font-semibold fade-item" >
                    {r}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-32 max-w-5xl fade-item">
          <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl px-12 py-10">
            <p className="text-lg text-white/80 leading-relaxed">
              Reservation rules vary by state and counselling authority. Students are guided accurately based on eligibility and documentation.
            </p>
          </div>
        </div>

      </div>

      {/* animations */}
     
    </section>
  )
}
