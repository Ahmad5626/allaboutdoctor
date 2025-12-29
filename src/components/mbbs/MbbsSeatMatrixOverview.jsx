"use client"
import Link from "next/link"

export default function MbbsSeatMatrixOverview() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Card */}
        <div className="relative rounded-3xl bg-white shadow-xl border border-primary/10 p-10 md:p-14">

          {/* Decorative gradient */}
          <div className="absolute -top-24 -right-24 h-72 w-72 bg-secondary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-primary/20 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-1 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                MBBS Seat Matrix in India
                <span className="block text-primary mt-2">
                  (State-Wise Counselling Overview)
                </span>
              </h2>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
               MBBS counselling in India is conducted through two main channels:
              </p>

              {/* CTA */}
              <Link
                href="/mbbs-seat-matrix"
                className="inline-flex items-center gap-3 mt-10 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                View Seat Matrix
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* RIGHT – CHANNELS */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
